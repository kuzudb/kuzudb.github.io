---
layout: default
title: Kùzu 0.0.4 Release
permalink: /blog/kuzu-0.0.4-release.html
parent: Blog
nav_order: 497
---

<p align="center">
  <a href="https://github.com/kuzudb/kuzu"><img src="/img/kuzu-logo.png" width="300"></a>
</p>

<p align="center">
  <a href="https://github.com/kuzudb/kuzu" class="btn fs-5 mb-4 mb-md-0"><i class="fa-brands fa-github"></i></a>
  <a href="https://join.slack.com/t/kuzudb/shared_invite/zt-1qgxnn8ed-9LL7rfKozijOtvw5HyWDlQ" class="btn fs-5 mb-4 mb-md-0"><i class="fa-brands fa-slack"></i></a>
  <a href="https://twitter.com/kuzudb" class="btn fs-5 mb-4 mb-md-0"><i class="fa-brands fa-twitter"></i></a>
</p>

# Kùzu 0.0.4 Release
We are happy to release Kùzu 0.0.3 today. This release comes with the following new main features and improvements:
- [Undirected query](#undirected-query)
- Variable-length and shortest path query
- `STRUCT` & `SERIAL` data types
- Node table loading improvement
- C API
- NodeJS API
- Windows compatibility

## New Cypher Features

### Undirected Query
Kùzu now supports undirected relationship in Cypher query. An undirected relationship is the union of both in-coming and out-going relationship. This feature is mostly useful in the following two cases. 

**Relationship is undirected by nature**
Similar to many other graph databases, relationship data is always defined and stored with direction in Kùzu. A relationship file must contain `FROM` and `TO` columns each of which refers a primary key column of a node table. For relationship that is undirected by nature, e.g. `isFriendOf`, user has to store this relationship in a directed way with two records `Alice isFriendOf Bob` and `Bob isFriendOf Alice`. To find all friends of `Alice`, user can issue the following query

```
MATCH (a:Person)-[:isFriendOf]->(b:Person)
WHERE a.name = 'Alice'
RETURN b;
```

Now with undirected query, user can simply insert one record `Alice isFriendOf Bob` and find all friends of `Alice` using the following undirected query
```
MATCH (a:Person)-[:isFriendOf]-(b:Person)
WHERE a.name = 'Alice'
RETURN b;
```

**Relationship direction is not of interest**
Although relationship is stored in a directed way, its direction may not be of interest in the query. The following query tries to find all comments that have interacted with comment `Kùzu`. These comments could be either replying to or replied by `Kùzu`. The query can be asked naturally in an undirected way.

```
MATCH (c:Comment)-[:replyOf]-(other:Comment)
WHERE c.author = 'Kùzu'
RETURN other;
```

### Recursive Query

## New Data Types

### `STRUCT`

### `SERIAL`

## Client APIs

## 