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

## Overview of Kùzu 0.0.3

## Using Kùzu as a PyG Remote Backend
TODO(Semih)

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

**Reduce memory consumption when ingesting to node table**

TODO(Guodong)

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

## Buffer Manager Improvements
- Unify physical memory usage of BM and MM
- vmcache: optimistic reads
- Remove resize interface?
