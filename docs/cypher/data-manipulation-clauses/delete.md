# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="running-example.png" width="800">

# Delete Node
Kùzu allows user to delete a new node from a node table by using the delete node clause.

## Important Notes:
1. We currently only support deleting a node which doesn't have any incoming or outcoming edges.
2. Deleting an edge is currently not supported.
## Example:
1. Creates a user{Alice, 40} and then deletes that user.
Query:
```
CREATE (u:User {name: 'Alice', age: 35});
MATCH (u:User) WHERE u.name = 'Alice' DELETE u;
```

2. Deletes a node who has an incoming or outcoming edge will result in an exception.
Query:
```
# Fails because Adam has both incoming and outcoming edges.
MATCH (u:User) WHERE u.name = 'Adam' DELETE u;
```
