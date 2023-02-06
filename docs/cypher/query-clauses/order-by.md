---
layout: default
title: Order by
parent: Query clauses
grand_parent: Cypher
---

# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="../../../img/running-example.png" width="800">

You can import this database by copy pasting the comands on that page. 

*Note: When using the CLI, please modify any multi-line query in the documenation to be in a single line.*

# ORDER BY
Order by is the clause where you define the order in which you want the query results to be displayed 
or sort a set of tuples you computed up to a point in your query.  Kùzu currently supports two 
sorting orders: `ASC`, `DESC`. By default if no sorting order is specified, Kùzu sorts 
rows in ascending order and NULLs are placed first. 

## Basic Example
The following query returns the user's name and age ordered by user's age using the default ordering(asc order):

```
MATCH (u:User)
RETURN u.name, u.age
ORDER BY u.age;
```
Output:
```
----------------
| Noura   | 25 |
----------------
| Adam    | 30 |
----------------
| Karissa | 40 |
----------------
| Zhang   | 50 |
----------------
```
Similarly, the following eturns the users' names who lives in Waterloo ordered by user's age,
but in descending order.

Query:
```
MATCH (u:User)-[:LivesIn]->(c:City)
WHERE c.name = Waterloo
RETURN u.name, u.age
ORDER BY u.age DESC;
```
Output:
```
----------------
| Karissa | 40 |
----------------
| Adam    | 30 |
----------------
```

## Ordering Using Multiple Properties/Expressions
You can also order using multiple properties or expressions that are in scope in your query. 
The meaning is that the first expression forms the primary order, then ties are broken
according to the second order, then further ties are broken according third order, etc.
Each order can be ascending or descending independent of the others.
For example, the following query sorts the results of 1-hop `(a:User)-[:Follows]->(b:User)`
queries first by `b.age` and then by `a.name` both in descending order.

```
MATCH (a:User)-[:Follows]->(b:User)
RETURN b.age, a.name 
ORDER BY b.age DESC, a.name DESC;
```
Output:
```
-------------------
| b.age | a.name  |
-------------------
| 50    | Karissa |
-------------------
| 50    | Adam    |
-------------------
| 40    | Adam    |
-------------------
| 25    | Zhang   |
-------------------
```
Noe that there is tie for b.age in first two rows and the order is 
decided based on a.name (in descending order). If you removed the
last `DESC` in the above query, the first two tuples in the result
would be swapped.

## Note on Using ORDER BY after WITH:
You can use ORDER BY after [WITH](with.md) only if you use a LIMIT and/or SKIP, so you should
use it to keep or remove the "top-k" or "bottom-k" of a set of intermediate tuples. The reason for this
restriction is that otherwise, ordering intermediate results is not useful, because if 
a query has more computation to do after the WITH and ORDER BY, the operators on those following
parts ignore the order. So if there is no LIMIT or SKIP ordering does get your query any guarantees.
