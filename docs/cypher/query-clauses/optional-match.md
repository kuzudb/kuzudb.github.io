# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="running-example.png" width="800">

You can import this database by copy pasting the comands on that page. 

*Note: When using the CLI, please modify any multi-line query in the documenation to be in a single line.*

# Optional-match
Optional-match is the clause where you define a pattern to find in the database. The difference between match is that if no pattern is found, Optional-match will fill up the missing part of the pattern with NULL.

## Examples:
1. returns the followees of each user or NULL if a user doesn't follow anyone.

Query:
```
MATCH (u:User)
OPTIONAL MATCH (u)-[:Follows]->(u1:User)
RETURN u.name, u1.name;
```
Result:
```
---------------------
| Adam    | Karissa |
---------------------
| Adam    | Zhang   |
---------------------
| Karissa | Zhang   |
---------------------
| Zhang   | Noura   |
---------------------
| Noura   |         |
---------------------
```
