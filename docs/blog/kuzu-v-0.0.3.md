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
  - file list
  - glob pattern matching 
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
- Add FIX-LIST data type

## System Functionalities
- Interrupt
- Query timeout

## Buffer Manager Improvements
- Unify physical memory usage of BM and MM
- vmcache: optimistic reads
- Remove resize interface?