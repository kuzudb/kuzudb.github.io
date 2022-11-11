# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="running-example.png" width="800">

# Union
Union is the clause where you combine multiple query results into a single query result.
## Important Notes:
- The number of columns and dataType of each column must be identical in all query results, whereas the name of each column can be different.
- UNION will remove all duplicates in the output query result. To preserve the duplicates in the query result, users are expected to use UNION ALL.
## Examples:
1. returns the user's name who live in Waterloo or Kitchener.

Query:

```
MATCH (u1:User)-[:LivesIn]->(c1:City)
WHERE c1.name = 'Waterloo'
RETURN u1.name
UNION ALL
MATCH (u2:User)-[:LivesIn]->(c2:City)
WHERE c2.name = 'Kitchener'
RETURN u2.name
```
Result:

```
-----------
| Adam    |
-----------
| Karissa |
-----------
| Zhang   |
-----------
```

2. returns the age of the follower of Zhang and Karissa (duplication is allowed)

Query:
```
MATCH (u1:User)-[:Follows]->(u2:User)
WHERE u2.name = 'Zhang'
RETURN u1.age
UNION ALL
MATCH (u3:User)-[:Follows]->(u4:User)
WHERE u4.name = 'Karissa'
RETURN u3.age
```
Result:

```
------
| 30 |
------
| 40 |
------
| 30 |
------
```
