---
layout: default
title: With
parent: Query clauses
grand_parent: Cypher
---

# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="../../../img/running-example.png" width="800">

You can import this database by copy pasting the comands on that page. 

*Note: When using the CLI, please modify any multi-line query in the documenation to be in a single line.*

# WITH

`WITH` can be used to project some expressions, and possibly compute some aggregations, from what your query has computed up 
to a point before starting the next part of your query. Although there are other common use cases
two very common cases of using WITH is: (1) to compute a numeric result, often through an aggregation, 
that can be used as a predicate in the following parts; and (2) perfoming a "top-k" computation on a
some query, before performing other querying on those top-k. We give examples of each.

### Using WITH with Aggregations
The following query returns all Users whose ages are greater than the average age of Users in the database. This
can be done in two steps: (i) compute the average age of Users in the database and assign it to an alias "avgAge"; 
and (ii) use avgAge in a following query part in a comparison predicate. This is done in the below query:
```
MATCH (a:User) 
WITH avg(a.age) as avgAge 
MATCH (b:User) 
WHERE b.age > avgAge 
RETURN *
```
Output:
```
-------------------------------
| b.name  | b.age | avgAge    |
-------------------------------
| Karissa | 40    | 36.250000 |
-------------------------------
| Zhang   | 50    | 36.250000 |
-------------------------------
```

## Using WITH for Top-k Computations
Suppose you want to return the Users that the oldest Users in your database follows. This can be done
in two steps: (i) compute the oldest person "a"; and (ii) find the Users that "a" follows and return.  
This is done in the below query:
```
MATCH (a:User)
WITH a
ORDER BY a.age DESC 
LIMIT 1 
MATCH (a)-[:Follows]->(b:User) 
RETURN * 
```
Output:
```
-----------------------------------
| b.name | b.age | a.name | a.age |
-----------------------------------
| Noura  | 25    | Zhang  | 50    |
-----------------------------------
```
The part of the query until LIMIT computes the oldest user Zhang (aged 50) and then the last `MATCH (a)-[:Follows]->(b:User) RETURN *` returns
the Users that Zhang follows (there is only one such User, who is Noura.) 
