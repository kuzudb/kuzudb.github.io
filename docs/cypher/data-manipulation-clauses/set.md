---
layout: default
title: Set
parent: Data manipulation clauses
grand_parent: Cypher
---

# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="../query-clauses/running-example.png" width="800">

You can import this database by copy pasting the comands on that page. 

*Note: When using the CLI, please modify any multi-line query in the documenation to be in a single line.*

# Set a property of a node
Kùzu allows user to set/update node properties using the set command.

## Important Notes:
We currently don't support a return statment after an update clause.

## Example:
1. Set Adam's age to 50

Query:
```
MATCH (u:User) WHERE u.name = 'Adam' SET u.age = 50 
```

# set a property of a relationship
Kùzu allows user to remove a node property using the set command.

## Example:
1. Removes Adam's age property

Query:
```
MATCH (u:User) WHERE u.name = 'Adam' SET u.age = NULL
```



