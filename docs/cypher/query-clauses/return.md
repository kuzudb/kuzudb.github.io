---
layout: default
title: Return
parent: Query clauses
grand_parent: Cypher
---

# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="../../../img/running-example.png" width="800">

You can import this database by copy pasting the comands on that page. 

*Note: When using the CLI, please modify any multi-line query in the documenation to be in a single line.*

# RETURN
`RETURN` is similar to the `SELECT` clause of SQL. RETURN is where the final results of the
query are specified, which can be listed as a list of expressions, e.g., variables that have
bound to nodes or relationships, aliases, or more complex expressions. RETURN can also be used 
for performing group-by and aggregations as well as duplication removing (using the `DISTINCT` clause). 
We discuss several common expressions used in RETURN.

## Returning Node and Relationship Variables
Returning variables in the query that are bound to node and relationsips in the query 
is a syntactic sugar to return all propeties of those variables. For example:
```
MATCH (a:User)-[e:Follows]->(b:User)
RETURN a, e
```
Output:
```
-----------------------------
| a.name  | a.age | e.since |
-----------------------------
| Adam    | 30    | 2020    |
-----------------------------
| Adam    | 30    | 2020    |
-----------------------------
| Karissa | 40    | 2021    |
-----------------------------
| Zhang   | 50    | 2022    |
-----------------------------
```
Above, a gets replaced with a.name, a.age, which are the 2 properties in the schema of
User node table. Similarly e is replaced with e.since, which is the only property of the Follows 
relationship table.

Note: If a variable x is bound to a relationship, e.g., LivesIn, in our example database, 
and x is returned, then it is ommitted from the output.

## Using Distinct for Duplicate Eliminatio
You can use RETURN DISTINCT to do duplicate elimination of the returned tuples.
For example, if we instead wrote `RETURN DISTINCT` in the above query, we would
eliminate one of the 2 (Adam, 30, 2020) tuples above:
```
MATCH (a:User)-[e:Follows]->(b:User)
RETURN DISTINCT a, e
```
Output:
```
-----------------------------
| a.name  | a.age | e.since |
-----------------------------
| Adam    | 30    | 2020    |
-----------------------------
| Karissa | 40    | 2021    |
-----------------------------
| Zhang   | 50    | 2022    |
-----------------------------
```

## Group By and Aggregations
You can group by one or more expression and perform one or more aggregations 
in a RETURN clause. For example:
```
MATCH (a:User)-[:Follows]->(b:User)
RETURN a, avg(b.age) as avgFriendAge
```
Output:
```
| a.name  | a.age | avgFriendAge |
----------------------------------
| Adam    | 30    | 45.000000    |
----------------------------------
| Karissa | 40    | 50.000000    |
----------------------------------
| Zhang   | 50    | 25.000000    |
----------------------------------
```
The semantics is exactly the same as SQL's semantics, which is a 
3-step process: 
  1) for each tuple  t in the previous part of the query, i.e., before the RETURN clause, 
     group t according to (one or more) group by key expressions into a group. Let us refer
     to the result of these expressions as t's keys.
  2) For each group G, compute the (or or more) aggregations in the query.
  3) Output for each group G, G's key(s) and the result of the aggregations. 

You can find the list of aggregation functions supported in Kùzu [here](../expressions/functions/aggregate-functions.md).

### Note on NULLs 
The handling of NULLs in group by keys and values also follow the SQL semantics:
  - All NULL keys are grouped into a single group.
  - NULL values are ignored in aggregations.
