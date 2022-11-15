---
layout: default
title: Limit
parent: Query clauses
grand_parent: Cypher
---

# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="../../../img/running-example.png" width="800">

You can import this database by copy pasting the comands on that page. 

*Note: When using the CLI, please modify any multi-line query in the documenation to be in a single line.*

# Limit 
Limit controls the number of tuples returned from a query. It is often used within in an [ORDER BY](order-by.md) 
clause to fetch the top k tuples from the query result. 
Note: Limit accepts any expression that can be evaluated to an integer.

For example, the following query returns the top three oldest users.
Query:
```
MATCH (u:User)
RETURN u.name
ORDER BY u.age DESC
LIMIT 3;
```
Result:
```
-----------
| Zhang   |
-----------
| Karissa |
-----------
| Adam    |
-----------
```

If you omit the ORDER BY, you would get some k tuples in a `LIMIT k` query 
but you have no guarantee about which ones will be selected.

