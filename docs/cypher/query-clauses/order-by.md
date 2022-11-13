# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="running-example.png" width="800">

You can import this database by copy pasting the comands on that page. 

*Note: When using the CLI, please modify any multi-line query in the documenation to be in a single line.*

# Order by
Order by is the clause where you define the order in which you want the query results to be displayed. The Kùzu currently supports two sorting orders: `ASC`, `DESC`. By default if no sorting orders are specified, the Kùzu sorts rows in ascending order and nulls are placed first. 
## Important Notes:
- ORDER BY IN [WITH](with.md): Only allow "Top k" type queries with LIMIT and/or SKIP. That is an ORDER BY clause can follow a WITH if and only if there is a LIMIT and/or SKIP following ORDER BY. And if there is a LIMIT and/or SKIP, the LIMIT and SKIP will consume its input/result set according to the given order. But any operator after that ignores the order.
## Examples:
1. returns the user's name and age ordered by user's age using the default ordering(asc order).
Query:
```
MATCH (u:User)
RETURN u.name, u.age
ORDER BY u.age;
```
Result:
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

2. returns the user's name who lives in waterloo ordered by the user's age in desc order.

Query:
```
MATCH (u:User)-[:LivesIn]->(c:City)
WHERE c.name = Waterloo
RETURN u.name, u.age
ORDER BY u.age DESC;
```
Result:
```
----------------
| Karissa | 40 |
----------------
| Adam    | 30 |
----------------
```
