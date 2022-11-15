---
layout: default
title: Skip
parent: Query clauses
grand_parent: Cypher
---

# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="../../../img/running-example.png" width="800">

You can import this database by copy pasting the comands on that page. 

*Note: When using the CLI, please modify any multi-line query in the documenation to be in a single line.*

# SKIP
`SKIP` controls the number of tuples to skip from the start of the queryResult. It is often used within in an [ORDER BY](order-by.md) 
clause to skip the top k tuples from the query result. 
Note: SKIP accepts any expression that can be evaluated to an integer.

For example, the following query skips the youngest 2 users
and returns the rest of the users' ages.
Query:
```
MATCH (u:User)
RETURN u.name
ORDER BY u.age
SKIP 2;
```
Result:
```
-----------
| Karissa |
-----------
| Zhang   |
-----------
```

If you omit the ORDER BY, you would skip some k tuples in a SKIP k query 
but you have no guarantee about which ones will be skipped.
