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
    - [Filters of Relationships in Recursive Patterns](#filters-of-relationships-in-recursive-patterns)
    - [All Shortest Paths](#all-shortest-paths)
    - [`Call` Clause](#call-clause)
  - [Modifying Database Configuration](#modifying-database-configurations)
  - [Data Types](#data-types)
    - [`BLOB`](#blob)
  - [Client APIs: Rust and Java](#client-apis-rust-and-java)
  - [Development:Testing framework](#development-testing-framework)

## Cypher Features

### Named Path
This releases introduces named paths. Users can now assign a named variable to a connected graph pattern. For example, the following query returns all path between `Adam` and `Karissa`.
```
MATCH p = (a:User)-[:Follows]->(b:User) 
WHERE a.name = 'Adam' AND b.name = 'Karissa' 
RETURN p;
```
Named paths can also be assigned to recursive graph patterns as follows:
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
Internally, a path is processed as a `STRUCT` with two fields, a nodes field with key `_NODES` and type `LIST[NODE]` and a rels field with key `_RELS` and type `LIST[REL]`. See [TODO fill link]() for details. Users can access nodes and rels field with `nodes(p)` and `rels(p)` function calls as follows:
```
MATCH p = (a:User)-[:Follows*1..2]->(:User) 
WHERE a.name = 'Adam' 
RETURN nodes(p), (rels(p)[1]).since;
```

### Filters of Relationships in Recursive Patterns
Users can now put predicates on the relationships that will be "traversed/joined" in recursive patterns.
For example, the following query finds the name of users that are followed by Adam directly or indirectly through 2 hops where *the following started before 2022 (r.since < 2022 predicate)*:
```
MATCH p = (a:User)-[:Follows*1..2 (r, _ | WHERE r.since < 2022)]->(b:User)
WHERE a.name = 'Adam' 
RETURN DISTINCT b.name;
```
Our filter grammar follows [Memgraph's syntax](https://memgraph.com/docs/memgraph/reference-guide/built-in-graph-algorithms). The first variable `r` in the `(r, _ | WHERE r.since < 2022)` predicate binds to the relationships in the recursive pattern and the `_` binds to the nodes. Since we currently don't allow filters on recursive nodes, the second variable must be `_` for now.

### All Shortest Paths
Kùzu now supports all shortest paths semantic with key word `ALL SHORTEST`. The following query finds all shortest paths of up to length 3 between `Zhang` and `Waterloo` considering relationships of all labels (i.e., this is an unlabeled query and you can restrict the labels by adding them as `[:Follows* ALL SHORTEST 1..3]`).
```
MATCH p = (a)-[* ALL SHORTEST 1..3]-(b) 
WHERE a.name = 'Zhang' AND b.name = 'Waterloo' 
RETURN p;
```

[TODO fill link]()

### `Call` Clause

This release introduces `Call` as a reading clause. Similar to [Neo4j](https://neo4j.com/docs/cypher-manual/current/clauses/call/), `Call` clause is used to execute procedures. The release also contains a set of predefined procedures that can be used to query the database schemas. For example, the following query returns all metadata of `User` table:
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

`Call` can be used together with other clauses in the same way as a reading clause:
```
CALL table_info('User') WITH * WHERE name STARTS WITH 'a' RETURN name;
--------
| name |
--------
| age  |
--------
```

More built in procedures can be found at [TODO]().

## Modifying Database Configurations

`CALL` has another usage: you can now modify database configurations through a `Call param=x` pattern. For example, the following sets the maximum number of threads for query execution to 5:
```
CALL THREADS=5;
```

More configuration options can be found at [TODO]().

## Data Types

### `BLOB`

We have also added the `BLOB` type to store arbitrary binary objects. Here is an example query returning a blob:

```
RETURN BLOB('\\xBC\\xBD\\xBA\\xAA') as result;
---------------------------------------------
| result                                    |
---------------------------------------------
| \xBC\xBD\xBA\xAA                          |
---------------------------------------------
```

More information on the blob data type can be found here: TODO(Xiyang): provide link.

## Client APIs: Rust and Java
In this release, we're expanding the accessibility of Kùzu, bridging the gap with some of the most popular programming languages in the developer community. Specifically, we now have [Rust](xxx) (TODO(link)) and [Java](xxx) (TODO(link)) APIs.

## Development: Testing framework
Starting with this release, we're adding some development guidelines to encourage and facilitate outside contributions from the broader open source community.

Testing is a crucial part of Kùzu to ensure the correct functioning of the system.
In this release, we've implemented significant changes to our testing framework. Our approach to testing is rooted in the principle of end-to-end tests rather than individual unit tests.
Whenever possible, we route all tests in the end-to-end way through Cypher statements. 
To this end, we've designed a custom testing framework that enables thorough end-to-end testing via Cypher statements.

Our testing framework draws inspiration from [SQLLogicTest](https://www.sqlite.org/sqllogictest/doc/trunk/about.wiki), albeit with customized syntax tailored to our needs.
For a more detailed overview of our testing framework, please visit [here](https://kuzudb.com/docusaurus/development/testing-framework).

*by Kùzu team, 07-10-2023, Waterloo, ON, Canada*
