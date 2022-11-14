---
layout: default
title: Skip
parent: Query clauses
grand_parent: Cypher
---

# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="running-example.png" width="800">

You can import this database by copy pasting the comands on that page. 

*Note: When using the CLI, please modify any multi-line query in the documenation to be in a single line.*

# Skip 
Skip controls the number of tuples to skip from the start of the queryResult. It is often used within in an [ORDER BY](order-by.md) clause to skip the top N tuples from the query result. Note: Skip accepts any expression that can be evaluated to an integer.

## Examples:
1. Returns all users' age and Skip the youngest 2 users.
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

2. If the user just wants to get random N tuples of the query result, they can run skip without an ORDER BY clause. In this case, the result tuples may be different in each execution since the ordering of tuples are not guaranteed.

Query:
```
MATCH (u:User)
RETURN u.name
SKIP 1;
```
Result:
```
-----------
| Karissa |
-----------
```
