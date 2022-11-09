# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="running-example.png" width="800">

# Limit 
Limit controls the number of tuples returned from a query. It is often used within in an [ORDER BY](order-by.md) clause to fetch the top N tuples from the query result.

## Examples:
1. returns the top three oldest users.
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

2. If the user just wants to get random N tuples of the query result, they can run limit without an ORDER BY clause. In this case, the result tuples may be different in each execution since the ordering of tuples are not guaranteed.

Query:
```
MATCH (u:User)
RETURN u.name
LIMIT 1;
```
Result:
```
-----------
| Karissa |
-----------
```
