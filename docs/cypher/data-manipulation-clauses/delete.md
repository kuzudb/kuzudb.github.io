---
layout: default
title: Delete
parent: Data manipulation clauses
grand_parent: Cypher
---

# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="../../../img/running-example.png" width="800">

You can import this database by copying pasting the comands on that page. 

# Delete Node
You can delete node records from your tables using the DELETE clause.

For example, the following query first creates a User (Alice, 40) node record, 
without inserting any relationships to that node record, and then deletes that record

```
CREATE (u:User {name: 'Alice', age: 35});
MATCH (u:User) WHERE u.name = 'Alice' 
DELETE u;
```

# Delete Relationship
You can delete arbitrary relationship records from your tables using the DELETE clause.<br />
For example, the following query deletes the `Follows` relationship between `Adam` and `Karissa`:
```
MATCH (u:User)-[f:Follows]->(u1:User)
WHERE u.name = 'Adam' AND u1.name = 'Karissa'
DELETE f;
```
