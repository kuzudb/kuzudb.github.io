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
- [Kùzu 0.0.4 Release](#kùzu-004-release)
  - [New Cypher Features](#new-cypher-features)
    - [Undirected Query](#undirected-query)
    - [Recursive Query](#recursive-query)
  - [Node Table Loading Improvements](#node-table-loading-improvements)
  - [New Data Types](#new-data-types)
    - [`STRUCT`](#struct)
    - [`SERIAL`](#serial)
  - [Client APIs](#client-apis)
    - [Windows compatibility](#windows-compatibility)
    - [C](#c)
    - [Node.js](#nodejs)

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
This releases brings in a major change to recursive join architecture (Techniqual details will be discussed in a saperate post). Kùzu now treats recursive relationship in the same way as a non-recursive relationship, meaning one can issue multi-label, undirected recursive relationship and combine recursive and non-recursive relationship in a single query.

**Variable length relationship**
Instead of writting a long graph traveral pattern, one will find variable length relationship to be much more convinient and expressive. The following query asks all friends of `Alice` or frieds of friends of friends of `Alice` with non-recursive relationship.

```
MATCH (a:Person)-[:knows]->(b:Person) 
WHERE a.name = 'Alice' 
RETURN b
UNION ALL
MATCH (a:Person)-[:knows]->(:Person)-[:knows]->(b:Person) 
WHERE a.name = 'Alice' 
RETURN b
```

The same query can be asked with variable length relationship in a much more compact way
```
MATCH (a:Person)-[:knows*1..2]->(b:Person)
WHERE a.name = 'Alice' 
RETURN b
```

Kùzu also supports multi-label, undirected recursive relationship just like non-recursive relationship. The following query finds all nodes that are reachable within 1 to 3 hops from `Alice`.

```
MATCH (a:Person)-[e:*1..3]-(b)
WHERE a.name = 'Alice'
RETURN b;
```

**Single shortest path**
User can now asks for single shortest path by adding `SHORTEST` keyword to a varible length relationship. The following query asks for a shortest path between `Alice` and all active users that `Alice` follows within 3 hops and return these users as well as the length of shortest path.

```
MATCH (a:User)-[e:Follows* SHORTEST 1..3]->(b:User)
WHERE a.name = 'Alice' AND b.state = 'Active'
RETURN b, length(e)
```

Single shortset path is also very suitable for reachability problems. For example, one can find all ndoes reachable from Alice with the following query
```
MATCH (a:User)-[* SHORTEST 1..30]->(b)
WHERE a.name = 'Alice'
RETURN b
```
Note that Kùzu requires all recursive relationship to have an upper bound which is capped at 30 to avoid super long-running query.

## Node Table Loading Improvements
TODO: Guodong

## New Data Types

### `STRUCT`
Kùzu now supports `STRUCT` data type similar to composite type in postgres. A `STRUCT` value is simplay a row where each entry is associated with an entry name. From the storage point of view, a `STRUCT` column is a single column nested over some other columns;

TODO: give an example here.

### `SERIAL`
This release introduces `SERIAL` data type. Similar to `AUTO_INCREMENT` supported by many other databases, `SERIAL` is mainly used to create an incremental sequence of unique identifier column which can serve as a primary key column.

Example:
```
CREATE NODE TABLE Person(ID SERIAL, name STRING, PRIMARY KEY(ID));
```

## Client APIs

### Windows compatibility
Developers can now build Kùzu from scrtach on Windows platform. Together with this release we also provide pre-built libraries and python wheels on Windows.

### C
We provide official C language binding in this release. Developers can now embed Kùzu with native C interfaces.

### Node.js
We provide official Node.js language binding. Node.js is a popular JavaScript runtime environment for building server-side applications. With Node.js API, developer can leverage Kùzu analytical capbility in their Node.js projects.