---
layout: default
title: Unwind
parent: Query clauses
grand_parent: Cypher
---

# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="../../../img/running-example.png" width="800">

You can import this database by copy pasting the comands on that page. 

*Note: When using the CLI, please modify any multi-line query in the documenation to be in a single line.*

# UNWIND
Unwind clause allows user to transform any list to individual rows. Unwind requires the user to specify a new name for the transformed rows.

# Example
1. Transforms a Literal List into multiple rows and return them

Query:
```
UNWIND ["Amy", "Bob", "Carol"] AS x
RETURN 'name' as name, x
```

Result:
```
------------------
| 'name' | x     |
------------------
| name   | Amy   |
------------------
| name   | Bob   |
------------------
| name   | Carol |
------------------
```
