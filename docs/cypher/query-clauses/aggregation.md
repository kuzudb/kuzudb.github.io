# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="running-example.png" width="800">

# Aggregation
Aggregate is the clause where you can combine multiple rows into a single value. The distinct operator can be used in aggregation to make all values unique before running aggregation on them.
Supported aggregation functions can be found [here](../functions/aggregate-functions.md).

## Examples:
1. returns the number of users living in different cities.

Query:
```
MATCH (u:User)-[:LivesIn]->(c:City)
RETURN c.name, COUNT(*);
```
Result:
```
-----------------
| Waterloo  | 2 |
-----------------
| Kitchener | 1 |
-----------------
| Guelph    | 1 |
-----------------
```

2. returns all the cities's name which has users live in.

Query:
```
MATCH (u:User)-[:LivesIn]->(c:City)
RETURN distinct c.name
```
Result:
```
-------------
| Waterloo  |
-------------
| Kitchener |
-------------
| Guelph    |
-------------
```