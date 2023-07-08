---
layout: default
title: Kùzu 0.0.5 Release
permalink: /blog/kuzu-0.0.5-release.html
parent: Blog
nav_order: 496
---

<p align="center">
  <a href="https://github.com/kuzudb/kuzu"><img src="/img/kuzu-logo.png" width="300"></a>
</p>

<p align="center">
  <a href="https://github.com/kuzudb/kuzu" class="btn fs-5 mb-4 mb-md-0"> Star &nbsp; <i class="fa-brands fa-github"></i></a>
  <a href="https://join.slack.com/t/kuzudb/shared_invite/zt-1w0thj6s7-0bLaU8Sb~4fDMKJ~oejG_g" class="btn fs-5 mb-4 mb-md-0"> Join &nbsp; <i class="fa-brands fa-slack"></i></a>
  <a href="https://twitter.com/kuzudb" class="btn fs-5 mb-4 mb-md-0"> Follow &nbsp; <i class="fa-brands fa-twitter"></i> </a>
</p>

# Kùzu 0.0.5 Release
We are very happy to release Kùzu 0.0.5 today! This release comes with the following new main features and improvements: 

- [Kùzu 0.0.5 Release](#kùzu-005-release)
  - [Cypher Features](#cypher-features)
    - [Named Path](#named-path)
    - [Filter Recursive Pattern](#filter-recursive-pattern)
    - [All Shortest Path](#all-shortest-path)
    - [`Call` Clause](#call-clause)
  - [Database Configuration](#database-configuration)
  - [Data Types](#data-types)
    - [`BLOB`](#blob)
  - [Client APIs](#client-apis)
    - [Rust](#rust)
    - [Java](#java)
  - [Development](#development)
    - [Testing framework](#testing-framework)

## Cypher Features

### Named Path
This releases introduces named path. User can now assign a named variable to a connected graph pattern.

The following query returns all path between `Adam` and `Karissa`.
```
MATCH p = (a:User)-[:Follows]->(b:User) 
WHERE a.name = 'Adam' AND b.name = 'Karissa' 
RETURN p;
```
Named path can also be assigned to recursive graph pattern
```
MATCH p = (a:User)-[:Follows*1..2]->(:User)-[:LivesIn]->(:City) 
WHERE a.name = 'Adam' 
RETURN p;
```
One can also assign multiple named paths in a `MATCH` clause
```
MATCH p1 = (a:User)-[:Follows]->(b:User), p2 = (b)-[:LivesIn]->(:City) 
WHERE a.name = 'Adam' 
RETURN p1, p2;
```
Internally, a path is processed as a struct with two fields, a nodes field with key `_NODES` and type `LIST[NODE]` and a rels field with key `_RELS` and type `LIST[REL]`. See [TODO fill link]() for details. User can access nodes and rels field with `nodes(p)` and `rels(p)` function calls.
```
MATCH p = (a:User)-[:Follows*1..2]->(:User) 
WHERE a.name = 'Adam' 
RETURN nodes(p), (rels(p)[1]).since;
```

### Filter Recursive Pattern
User can constraint the relationship being traversed in recursive pattern by running predicate on recursive pattern.

The following query finds name of users that are followed between 1 - 2 hops by `Adam` before 2022.
```
MATCH p = (a:User)-[:Follows*1..2 (r, _ | WHERE r.since < 2022) ]->(b:User)
WHERE a.name = 'Adam' 
RETURN DISTINCT b.name;
```
Our filter grammar follows [Memgraph](https://memgraph.com/docs/memgraph/reference-guide/built-in-graph-algorithms) using list comprehension. The first variable represents recursive relationship. Since we currently don't allow filter on recursive node, the second variable must be `_`.

### All Shortest Path
Kùzu now supports all shortest path semantic with key word `ALL SHORTEST`. The following query finds all shortest path between `Zhang` and `Waterloo`.
```
MATCH p = (a)-[* ALL SHORTEST 1..3 ]-(b) 
WHERE a.name = 'Zhang' AND b.name = 'Waterloo' 
RETURN p;
```

### `Call` Clause

This release introduces `Call` as a reading clause. Similar to [Neo4j](https://neo4j.com/docs/cypher-manual/current/clauses/call/), `Call` clause is used to execute procedures. We include a few procedures that can be used to query database schemas in this release.

The following query returns all metadata of `User` table.
```
CALL table_info('User') RETURN *;
---------------------------------------------
| property id | name | type   | primary key |
---------------------------------------------
| 0           | name | STRING | True        |
---------------------------------------------
| 1           | age  | INT64  | False       |
---------------------------------------------
```

`Call` clause can be used together with other clauses in the same way as a reading clause.
```
CALL table_info('User') WITH * WHERE name STARTS WITH 'a' RETURN name;
--------
| name |
--------
| age  |
--------
```

More built in procedures can be found at [TODO]().

## Database Configuration

Kùzu now allows modifying database configuration through standalone `Call` statement.

The following statement set maximum number of threads for execution to 5.
```
CALL THREADS=5;
```

More configuration options can be found at [TODO]().

## Data Types

### `BLOB`

We add `BLOB` type which represents an arbitrary binary object. The database process binary data as it is without knowing what the actual data (e.g. image, video) it represents.

```
RETURN BLOB('\\xBC\\xBD\\xBA\\xAA') as result;
---------------------------------------------
| result                                    |
---------------------------------------------
| \xBC\xBD\xBA\xAA                          |
---------------------------------------------
```

## Client APIs
In this release, we're expanding the accessibility of Kùzu, bridging the gap with some of the most popular programming languages in the developer community.

### Rust
We've now  integrated support for the Rust programming language.
Renowned for its performance, reliability, and productivity, Rust has gained significant popularity among developers. It offers the efficiency of low-level languages like C++, but with added benefit of safety through its strong compile-time correctness guarantees. 
With the introduction of native Rust API support, we're aiming to provide developers with a seamless experience that combines the robust benefits of Rust with the powerful capabilities of Kùzu.

### Java
In addition to Rust, we're also bringing Kùzu to the world of Java in this release.
Java is a high-level, class-based, object-oriented programming language, operates under the principle of *write once, run anywhere (WORA)*.
Its platform independence has made it a favored choice for a wide range of applications, from enterprise systems to client-server web applications.
By incorporating Java API support into Kùzu, we're amplifying the power of our graph database, enabling a seamless integration of graph data management with application development across various domains.

## Development
Starting with this release, we're adding some development guidelines to encourage and facilitate outside contributions from the broader open source community.

Testing is a crucial part of Kùzu to ensure the correct functioning of the system.
In this release, we've implemented significant changes to our testing framework, the details of which are outlined below.

### Testing framework
Our approach to testing is rooted in the principle of end-to-end tests rather than individual unit tests.
Whenever possible, we route all tests in the end-to-end way through Cypher statements. 
To this end, we've designed a bespoke testing framework that enables thorough end-to-end testing via Cypher statements.

Our testing framework draws inspiration from [SQLLogicTest](https://www.sqlite.org/sqllogictest/doc/trunk/about.wiki), albeit with customized syntax tailored to our needs. .
For a more detailed overview of our testing framework, please visit [here](https://kuzudb.com/docusaurus/development/testing-framework).

*by Kùzu team, 07-10-2023, Waterloo, ON, Canada*
