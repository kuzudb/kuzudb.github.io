---
layout: default
title: Kùzu 0.0.3 Release
permalink: /blog/kuzu-0.0.3-release.html
parent: Blog
nav_order: 2
---

<p align="center">
  <a href="https://github.com/kuzudb/kuzu"><img src="/img/kuzu-logo.png" width="300"></a>
</p>

<p align="center">
  <a href="https://github.com/kuzudb/kuzu" class="btn fs-5 mb-4 mb-md-0"><i class="fa-brands fa-github"></i></a>
  <a href="https://join.slack.com/t/kuzudb/shared_invite/zt-1qgxnn8ed-9LL7rfKozijOtvw5HyWDlQ" class="btn fs-5 mb-4 mb-md-0"><i class="fa-brands fa-slack"></i></a>
  <a href="https://twitter.com/kuzudb" class="btn fs-5 mb-4 mb-md-0"><i class="fa-brands fa-twitter"></i></a>
</p>

# Kùzu 0.0.3 Release
We are happy to release Kùzu 0.0.3 today. This release comes with the following new features and improvements:
- [Kùzu as a Pytorch Geometric (PyG) Remote Backend](#kùzu-as-a-pyg-remote-backend): You can now train PyG GNNs and other models directly using graphs (and node features) stored on Kùzu.  
- [Data ingestion improvements](#data-ingestion-improvements): See below for details
- [Query optimizer improvements](#query-optimizer-improvements): See below for details
- [New buffer manager](#new-buffer-manager): A new state-of-art buffer manager based on [VMCache](https://www.cs.cit.tum.de/fileadmin/w00cfj/dis/_my_direct_uploads/vmcache.pdf).
- [INT32, INT16, FLOAT, and FIXED LIST data types](#new-data-types) (the latter is particularly suitable to store node features in graph ML applications)
- [Query timeout mechanism and interrupting queries from CLI](#system-functionalities).

For installing the new version, 
please visit the [download section of our website](https://kuzudb.com/#download) 
and [getting started guide](https://kuzudb.com/docs/getting-started.html) and the full
[release notes are here](https://github.com/kuzudb/kuzu/releases). Please visit
the [Colab Notebooks](https://kuzudb.com/docs/getting-started/colab-notebooks) section of our
documentation website to play with our [Colab notebooks](https://kuzudb.com/docs/getting-started/colab-notebooks).
With this release we are adding [a new Colab notebook](https://colab.research.google.com/drive/12fOSqPm1HQTz_m9caRW7E_92vaeD9xq6)
to demonstrate Kùzu-PyG Remote Backend integration. 

## Kùzu as a PyG Remote Backend
Kùzu now implements PyG's Remote Backend interface. What this means is that you can directly 
train GNNs using Kùzu as your backend. Quoting [PyG documentation's](https://pytorch-geometric.readthedocs.io/en/latest/advanced/remote.html) description
of the Remote Backend feature, this feature:

> ...[enables] users to train GNNs on graphs far larger than the size of their
machine’s available memory. It does so by introducing simple, easy-to-use, and extensible abstractions of a `torch_geometric.data.FeatureStore` and a   `torch_geometric.data.GraphStore` that plug directly into existing familiar PyG interfaces.

With our current release, once you store your graph and features in Kùzu,
PyG's samplers work seamlessly using Kùzu's implementation of `FeatureStore` and `GraphStore` interfaces. This
enables for examples your existing GNN models to work seamlessly by fetching data, both subgraph samples as
well as node features, from Kùzu instead of PyG's in-memory storage. 
Therefore you can train graphs that do not
fit into your memory since Kùzu, as a DBMS, stores its data on disk. Try this demonstrative [Colab notebook](https://colab.research.google.com/drive/12fOSqPm1HQTz_m9caRW7E_92vaeD9xq6) to 
see an example of how to do this. The current release comes with a limitation that we only truly implement the `FeatureStore` interface
and for `GraphStore` use PyG's in-memory graph storage. What this means is that
when training GNN models using the Kùzu Remote Backend, your graph topology will be stored 
in memory and features will be stored on disk. We plan to extend the feature to store the graph topology
on disk as well later on. 

Here is also a demonstrative experiment (but certainly not comprehensive study) for the type of training performance 
vs memory usage tradeoff you can expect. 
We trained the XYZ model on XYZ dataset, which contains X many nodes
with X dimensional node features and Y many edges. 
This dataset comes off the shelf from XYZ. 
Storing the graph topology roughly takes XGB and the features YGBs. Given our current limitation,
we can reduce YGB to something much smaller (we will limit it to 10GB).
We used a machine with X amount of GPU memory and Y amount RAM with CPU, which 
is enough for PyG's in-memory store to store the entire graph and all features in memory.
We will give Kùzu's buffer manager 10GB memory, which allows us to compare the memory and performance trade-off
you can expect. During training, we use mini-batch size of X, which means at each epoch the X-degree neighborhood
of X many nodes will be sampled from the `Graph Store` and the features of those nodes will be scanned
from Kùzu's storage. The below table gives the memory/performance comparison: 

TODO(Chang): Add the table

So we can limit the memory usage to X GB instead of YGB with Xx slow down. Note YGB is already the 
in-memory graph storage, so we are handling the XGB of features with only 10GB of RAM. If you have 
large datasets that don't fit on your current systems' memories and would like to easily train your PyG models 
off of disk (plus get all the usability features of a GDBMS as you prepare your datasets for training), 
we hope this feature can be very useful for you!

## Data Ingestion Improvements

**Ingest from multiple files**

This release provides the user with the capability to load data from multiple files of the same type into a node/rel table. There are two ways that users can specify multiple csv file paths:
  - **file list**: `["vPerson0.csv", "vPerson1.csv", "vPerson2.csv"]`
  - **glob pattern matching**: Similar to Linux [Glob](https://man7.org/linux/man-pages/man7/glob.7.html), Kùzu allows user to specify file paths that matches the glob pattern.

**Ingest from npy files**

We start exploring how to enable data ingesting in column by column fashion. This feature is our first step of exploration and might evolve in the future. 

Consider a Paper table defined in the following DDL.
```
CREATE NODE TABLE Paper(id INT64, feat FLOAT[768], year INT64, label DOUBLE, PRIMARY KEY(id));
```
The raw data is stored in npy formats where each column is represented as a numpy array on disk. 
```
node_id.npy", "node_feat_f32.npy", "node_year.npy", "node_label.npy"
```
This release allows direct copy from npy files where each file is loaded to a column in Paper table.
```
COPY Paper FROM ("node_id.npy", "node_feat_f32.npy", "node_year.npy", "node_label.npy") BY COLUMN;
```

**Reduce memory consumption when ingesting data into node tables**

This release optimizes the memory consumption during data ingestion of node tables. 
We no longer keep the whole node table in memory before flushing it to disk in a whole, instead, each thread processing a chunk of a column in the node table allocates its own memory buffer, flushes the buffer to disk when done with its processing, and releases its memory buffer after flushing.
This can greatly reduce memory usage when the node table is very large.

## Query Optimizer Improvements

**Projection push down for sink operator**

This release adds projection push down optimizer. We project away columns that won't be used in further processing before we materialize. This leads to a smaller memory footprint and better performance.
Consider the following query
```
MATCH (a:person) WHERE a.age > 35 RETURN a.salary AS s ORDER BY s;
```
Both column `age` and `salary` are scanned but only `salary` is need to be materialized for `ORDER BY`.

**Prune unnecessary joins**

A graph pattern defined in Cypher grammar contains two nodes (a src node and a dst node) and a rel in the form of `(a)-[e]->(b)`. This pattern is translated as two joins in our system, one between `a` and `e` and another one between `e` and `b`. However, if a query is not accessing any column of a table, the corresponding join can be omitted. 
Consider the following query
```
MATCH (a:person)-[e:knows]->(b:person) RETURN a.ID, COUNT(*)
```
Since we are not scanning column from `b`, the join between `e` and `b` can be pruned.

**Heuristic filter reordering**

When the statistics of a column is not available, we heuristically reorder filters to evaluate equality predicate first.

**Improve sideway information passing for join**

This release fully implements S-Join, ASP-Join and Multiway WCO ASP-Join as described in our previous publication `KÙZU Graph Database Management System`. We further improve their planning based on cardinality estimation. Specifically, we avoid ASP-Joins if the cardinality of probe side is much bigger than build side, in which the cost of materializing will dominate the gain of sideway information passing.

**Improve cardinality estimation**
This release improves number of factorized tuple based cardinality estimation.

## New Buffer Manager

Before this release, we have two internal buffer pools with different frame sizes of 4KB and 256KB, the former one is mostly used when scanning pages from disk, while the latter one is for in-memory data structures, such as hash tables during hash joins. When a user sets a customized buffer pool size, it is divided into two internal pools based on the DEFAULT_PAGES_BUFFER_RATIO and LARGE_PAGES_BUFFER_RATIO.
This can cause problems as it is impossible to have a configuration of these two frame sizes that can fits all use cases.

In this release, we reworked our buffer manager:
- removed the division of two internal buffer pools, and unified Kùzu's internal memory management into the buffer manager.
- switched to the mmap-based approach, and introduced optimistic reads following [vmcache](https://www.cs.cit.tum.de/fileadmin/w00cfj/dis/_my_direct_uploads/vmcache.pdf).

Additionally, we removed the support of resizing buffer manager at runtime.
To change the size of the buffer manager, users need to close the current database, and start a new one with the desired buffer manager size.


## New Data Types

**Add INT32, INT16, FLOAT data type**

| Data Type | Size | Description |
| --- | --- | --- |
| INT32| 4 bytes | signed four-byte integer |
| INT16| 2 bytes | signed two-byte integer |
| FLOAT | 4 bytes | single precision floating-point number |

**Add FIXED-LIST data type** 

| Data Type | Description | DDL definition |
| --- | --- | --- | 
| FIXED-LIST | a list of fixed number of values of the same numerical type | INT64[8] |

Note: FIXED-LIST is an experimental feature. Currently only bulk loading(e.g. `COPY` statement) and reading is supported.

## System Functionalities

**Interrupt** 

User can stop a query before it completes. Kùzu offers two methods for query interruption:
  - C++ API: `Connection::interrupt()`: interrupt all running queries within the current connection.
  - CLI: interrupt through `CTRL + C`

**Query timeout** 

Kùzu will automatically stop any query that exceeds the specified timeout value by sending an interrupt signal. The default query timeout value is set to -1, which signifies that the query timeout feature is initially disabled. Users can activate the query timeout by configuring a positive timeout value through:
  - 1. C++ API: `Connection::setQueryTimeOut(uint64_t timeoutInMS)`
  - 2. CLI: `:timeout [timeoutValue]`

Note: The Interruption and Query Timeout features are not applicable to `COPY` commands in this release.
