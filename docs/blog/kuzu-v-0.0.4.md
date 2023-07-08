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
  <a href="https://github.com/kuzudb/kuzu" class="btn fs-5 mb-4 mb-md-0"> Star &nbsp; <i class="fa-brands fa-github"></i></a>
  <a href="https://join.slack.com/t/kuzudb/shared_invite/zt-1w0thj6s7-0bLaU8Sb~4fDMKJ~oejG_g" class="btn fs-5 mb-4 mb-md-0"> Join &nbsp; <i class="fa-brands fa-slack"></i></a>
  <a href="https://twitter.com/kuzudb" class="btn fs-5 mb-4 mb-md-0"> Follow &nbsp; <i class="fa-brands fa-twitter"></i> </a>
</p>

# Kùzu 0.0.4 Release
We are very happy to release Kùzu 0.0.4 today! This release comes with the following new main features and improvements: 
- [Kùzu 0.0.4 Release](#kùzu-004-release)
  - [Data Ingestion Improvements](#data-ingestion-improvements)
  - [New Cypher Features](#new-cypher-features)
    - [Undirected Relationships in Queries](#undirected-relationships-in-queries)
    - [Recursive Queries: Shortest Path Queries and Improved Variable-length Queries](#recursive-queries-shortest-path-queries-and-improved-variable-length-queries)
  - [New Data Types](#new-data-types)
    - [`SERIAL`](#serial)
    - [`STRUCT`](#struct)
  - [Client APIs](#client-apis)
    - [Windows compatibility](#windows-compatibility)
    - [C](#c)
    - [Node.js](#nodejs)

## Data Ingestion Improvements
We continue to improve our data ingestion in this release. 
We still rely on Apache Arrow to parse parquet and csv files.
Several bottlenecks in our earlier implementation are identified and optimized now, including copying from arrow arrays and construction of hash indexes.
We now also store null bits separately, which simplifies our loading logic and makes it faster.

Here are some benchmark numbers for loading two node and two rel tables that only contain primitive types or strings from the LDBC benchmark:

- CPU: MAC M1 MAX
- Disk: 2TB SSD
- System Memory: 32GB
- Dataset: LDBC-100
- Number of thread: 10

| Files | # lines | file size | v0.0.3 | v0.0.4
| ----------- | ----------- | ----------- | ----------- | ----------- |
| comment.csv | 220M | 22.49 GB | 890s | **108s (8.2x)** |
| post.csv | 58M | 7.68 GB | 304s | **32s (9.5x)** |
| likesComment.csv | 242M | 13 GB | 772s | **142s (5.4x)** |
| knows.csv | 20M | 1.1 GB | 80s | **21s (3.8x)** |

Besides performance improvement, we now also allow interrupting `COPY` statements in the shell.
You can interrupt long running `COPY` statements without crashing the shell.

We will continue to improve our data ingestion to make it more efficient and robust as we're moving to the [new storage design](https://github.com/kuzudb/kuzu/issues/1474) in the coming releases. Please stay tuned!

## New Cypher Features

### Undirected Relationships in Queries
Kùzu now supports undirected relationships in Cypher queries. An undirected relationship is the union of both in-coming and out-going relationships. This feature is mostly useful in the following two cases. 

**Case 1: Relationship is undirected by nature**
Relationships between nodes in Kùzu are currently directed (though we are internally debating to add a native undirected relationship type). A relationship file must contain `FROM` and `TO` columns each of which refers to a primary key column of a node table. However, sometimes the nature of the relationships are undirected, e.g., an `isFriendOf` relationships in a social network. 

Currently, you have two options: (1) you can either store each friendship twice, e.g., `Alice isFriendOf Bob` and `Bob isFriendOf Alice`. This is a bad choice because internally Kùzu will index each edge twice (in the forward and backward) edges, so this one fact ends up getting stored 4 times. Or (2) you can store it once, say `Alice isFriendOf Bob`. 

The advantage of option (1) was that in Kùzu v 0.0.3, if you want to find all friends of `Alice`, you could simply ask this query:
```
MATCH (a:Person)-[:isFriendOf]->(b:Person)
WHERE a.name = 'Alice' RETURN b;
```
Instead, if you chose option (2), you would have to ask two queries, one to `MATCH (a:Person)-[:isFriendOf]->(b:Person)` and the other to `MATCH (a:Person)<-[:isFriendOf]-(b:Person)`, and `UNION` them, which gets messy if you want to do more with those neighbors (e.g., find their neighbors etc.). 

With undirected edge support, you can now choose option (2) and find `Alice`'s friends with:
```
MATCH (a:Person)-[:isFriendOf]-(b:Person)
WHERE a.name = 'Alice'
RETURN b;
```
So if you do not specify a direction in your relationships, Kùzu will automatically query both the forward and backward relationships for you.

*Note from Kùzu developers: As noted above, we are debating a native undirected relationship type. That seems to solve the problem of, in which fake direction should an undirected relationship be saved at? Should be a `Alice-[isFriendOf]->Bob` or vice versa. Happy to hear your thoughts on this.*

**Case 2: Relationship direction is not of interest**
Although relationship is stored in a directed way, its direction may not be of interest in the query. The following query tries to find all comments that have interacted with comment `Kùzu`. These comments could be either replying to or replied by `Kùzu`. The query can be asked naturally in an undirected way.

```
MATCH (c:Comment)-[:replyOf]-(other:Comment)
WHERE c.author = 'Kùzu'
RETURN other;
```

### Recursive Queries: Shortest Path Queries and Improved Variable-length Queries
This release brings in the beginnings of a series of major improvements we will do to recursive joins.
The two major changes in this release are: 

**Multilabeled and undirected Variable-length Join Queries**
Prior to this release we supported variable-length join queries only in the restricted case when the variable-length relationship could have a single relationship label and was directed. For example you could write this query:
```
MATCH (a:Person)-[:knows*1..2]->(b:Person)
WHERE a.name = 'Alice' 
RETURN b
```
But you couldn't ask for arbitrary labeled variable-length relationships between Persons `a` and `b` (though you
could write the non-recursive version of that query: `MATCH (a:Person)-[:knows]->(b:Person) ...`. 
Similarly we did not support undirected version of the query: `MATCH (a:Person)-[:knows*1..2]-(b:Person)`.
Kùzu now supports multi-label as well as undirected variable-length relationships.
For example, the following query finds all nodes that are reachable within 1 to 3 hops from `Alice`, irrespective
of the labels on the connections or destination `b` nodes:
```
MATCH (a:Person)-[e:*1..3]-(b)
WHERE a.name = 'Alice'
RETURN b;
```

**Shortest path**

Finally, we got to implementing an initial version of shortest path queries. You can find (one of the) shortest paths between nodes by adding the `SHORTEST` keyword to a varible-length relationship. The following query asks for a shortest path between `Alice` and all active users that `Alice` follows within 10 hops and return these users, and the length of the shortest path.

```
MATCH (a:User)-[p:Follows* SHORTEST 1..10]->(b:User)
WHERE a.name = 'Alice' AND b.state = 'Active'
RETURN b, p, length(p)
```

The `p` in the query binds to the sequences of relationship, node, relationship, node, etc. Currently we only return the internal IDs of the relationships and nodes (soon, we will return all their properties).

## New Data Types

### `SERIAL`
This release introduces `SERIAL` data type. Similar to `AUTO_INCREMENT` supported by many other databases, `SERIAL` is mainly used to create 
an incremental sequence of unique identifier column which can serve as a primary key column.

Example:

`person.csv`
```
Alice
Bob
Carol
```

```
CREATE NODE TABLE Person(ID SERIAL, name STRING, PRIMARY KEY(ID));
COPY Person FROM `person.csv`;
MATCH (a:Person) RETURN a;
```
Output:
```
-------------------------------------------
| a                                       |
-------------------------------------------
| (label:Person, 3:0, {ID:0, name:Alice}) |
-------------------------------------------
| (label:Person, 3:1, {ID:1, name:Bob})   |
-------------------------------------------
| (label:Person, 3:2, {ID:2, name:Carol}) |
-------------------------------------------
```

When the primary key of your node tables are already consecutive integers starting from 0, you should omit the primary key column in the input file and make primary key a SERIAL type. This will improve loading time significantly. Similarly, queries that need to scan primary key will also get faster. That's because internally we will not store a HashIndex or primary key column so any scan over primary key will not trigger a disk I/O.

### `STRUCT`
Kùzu now supports `STRUCT` data type similar to [composite type](https://www.postgresql.org/docs/current/rowtypes.html) in Postgres. Here is an example:

```
WITH {name:'University of Waterloo', province:'ON'} AS institution
RETURN institution.name AS name;
```
Output:
```
--------------------------
| name                   |
--------------------------
| University of Waterloo |
--------------------------
```
We support storing structs as node properties for now. For example you can create: `CREATE NODE TABLE Foo(name STRING, exStruct STRUCT(x INT16, y STRUCT(z INT64, w STRING)), PRIMARY KEY (name))`. We will support storing structs on relationships soon. As shown in the `CREATE NODE` example above, you can store arbitrarily
nested structs, e.g., structs that contain structs as a field, on nodes. One missing feature we have for now is storing and processing a `LIST<STRUCT>` composite type. 

**Note**: Updating `STRUCT` column with update statement is not supported in this release but will come soon.

## Client APIs

### Windows compatibility
Developers can now build Kùzu from scratch on Windows platform! Together with this release we also provide pre-built libraries and python wheels on Windows.

### C
We provide official C language binding in this release. Developers can now embed Kùzu with native C interfaces.

### Node.js
We provide official Node.js language binding. With Node.js API, developer can leverage Kùzu analytical capability in their Node.js projects. We will
soon follow this blog post with one (or a few) blog posts on developing some applications with Node.js.

*by Kùzu team, 06-05-2023, Waterloo, ON, Canada*
