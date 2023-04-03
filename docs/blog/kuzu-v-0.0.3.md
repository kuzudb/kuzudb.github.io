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
TODO

## Data Ingestion Improvements
- Ingest from multiple files
  This release provides the user with the capability to load data from numerous files of the same type into a node/rel table. There are two ways that users can specify multiple csv file paths:
  - file list: `["vPerson0.csv", "vPerson1.csv", "vPerson2.csv"]`
  - glob pattern matching: Similar to Linux [Glob](https://man7.org/linux/man-pages/man7/glob.7.html), Kùzu allows user to specify file paths that matches the glob pattern.
- Ingest from npy files
- Reduce peak memory consumption when ingesting to node table.

## Query Optimizer Improvements
- Projection push down for sink operator 
- Prune unnecessary join
- Heuristic filter reordering
- Improve side way information passing for join
- Improve cardinality estimation and cost model

## New Data Types
- Add INT32, INT16, FLOAT data type

| Data Type | Size | Description | Aliases |
| --- | --- | --- | --- | 
| INT32| 4 bytes | signed four-byte integer | INT |
| INT16| 2 bytes | signed two-byte integer | |
| FLOAT | 4 bytes | single precision floating-point number | |

- Add FIX-LIST(Tensor) data type 

| Data Type | Description | DDL definition |
| --- | --- | --- | 
| FIXED-LIST | a list of fixed number of values of the same numerical type | INT64[8] |

Note: FIXED-LIST is an experimental feature. Only bulk loading(e.g. `COPY` statement) and reading(e.g. `match` statement) is supported.

## System Functionalities
- Interrupt: User can stop or halt a database query before it is fully completed by firing an interrupt. Kùzu offers two methods for query interruption:
  - 1. C++ API: `Connection::interrupt()`: interrupts all running queries within the current connection.
  - 2. CLI: Users can interrupt a query using `CTRL+C`
- Query Timeout: The default query timeout value is set to -1, which signifies that the query timeout feature is initially disabled. Users can activate the query timeout by configuring a positive timeout value through:
  - 1. C++ API: `Connection::setQueryTimeOut(uint64_t timeoutInMS)`
  - 2. CLI: `:timeout [timeoutValue]`
  - Kùzu will automatically halt any query that exceeds the specified timeout value by sending an interrupt signal. 

Note: The Interruption and Query Timeout features are not applicable to `COPY` commands in this release.

## Buffer Manager Improvements
- Unify physical memory usage of BM and MM
- vmcache: optimistic reads
- Remove resize interface?
