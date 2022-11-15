---
layout: default
title: Set
parent: Data manipulation clauses
grand_parent: Cypher
---

# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="../../../img/running-example.png" width="800">

You can import this database by copy pasting the comands on that page. 

*Note: When using the CLI, please modify any multi-line query in the documenation to be in a single line.*

# SET 
SET is similar to SQL's SET clause, and allows updating properties of node or relationship
records to new values (possibly NULL). Kùzu currently supports setting node properties.
For example the following query sets the age property of the User node
with name Adam to 50 (which is 30 in the original database).

Query:
```
MATCH (u:User) 
WHERE u.name = 'Adam' 
SET u.age = 50 
```
Similarly the following sets Adam's age property to NULL.
Query:
```
MATCH (u:User) 
WHERE u.name = 'Adam' 
SET u.age = NULL
```


