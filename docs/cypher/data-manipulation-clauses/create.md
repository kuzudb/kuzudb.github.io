# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="running-example.png" width="800">

# Create Node
Kùzu allows user to add a new node to a node table by using the create node clause.

## Important Notes:
The properties which are not specified in the create node clause will be set to NULL.
## Example:
1. Adds a new user(name: Alice, age: 35) to the user node table.

Query:
```
create (u:User {name: 'Alice', age: 35})
```

2. Adds a new city (name: Toronto, population: unknown) to the city node table。

Query:
```
create (c:City {name: 'Toronto'})
```
Note: since the population of the city is not specified in the create node clause, Kùzu will set the population to NULL.

# Create relationship
Kùzu allows user to add a new relationship between nodes by using the create rel clause.

## Important Notes:
1. Similar to create node, properties which are not specified in the create rel clause will be set to NULL.
2. If the relationship to insert will violate the complexity constraint, Kùzu will throw an exception.
## Example:
1. Adds a new relationship which describes Adam follows Noura.

Query:
```
MATCH (u1:User), (u2:User) WHERE u1.name = 'Adam' AND u2.name = 'Noura' CREATE (u1)-[:Follows {since: 2011}]->(u2)
```
