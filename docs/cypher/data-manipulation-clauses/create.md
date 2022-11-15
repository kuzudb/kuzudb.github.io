---
layout: default
title: Create
parent: Data manipulation clauses
grand_parent: Cypher
---

# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="../../../img/running-example.png" width="800">

You can import this database by copy pasting the comands on that page. 

*Note: When using the CLI, please modify any multi-line query in the documenation to be in a single line.*
# CREATE
`CREATE` is similar to the INSERT clause of SQL and lets you insert records into your
node and relationahip tables. We desribe the generic semantics of the 
CREATE clause momentarily [below](#inserting-nodes-and-relationships-together). We first start with some simple examples. 

## Inserting Nodes
The following query inserts a single (Alice, 35) node record into the User node table:

```
CREATE (u:User {name: 'Alice', age: 35})
```
The properties you would like to set are specified using the
`{prop1 : val1, prop2 : val2, ...}` syntax.  

If you queried the database now for 
a User node with name Alice, you would get the above tuple:
```
MATCH (a:User) 
WHERE a.name = 'Alice' 
RETURN *
```
Output:
```
------------------
| a.name | a.age |
------------------
| Alice  | 35    |
------------------
```

Any node properties which are not specified will be set to NULL. 
For example the following query will set the age property
the inserted node reord to NULL. Note that for node records,
the primary key property, in our example "name" has to be non-NULL.
```
CREATE (u:User {name: 'Dimitri'})
```
```
MATCH (a:User) 
WHERE a.name = 'Dimitri' 
RETURN *
```
Output:
```
-------------------
| a.name  | a.age |
-------------------
| Dimitri |       |
-------------------
```

## Inserting Relationships
You can insert records to your relationship tables by
first binding two variables s and t to nodes, and then
"drawing" a relationship pattern between s and t. 
For example, the following creates a Follows relationship
from the User node with name "Adam" to the User node with
name "Noura". 
```
MATCH (u1:User), (u2:User) WHERE u1.name = 'Adam' AND u2.name = 'Noura' 
CREATE (u1)-[:Follows {since: 2011}]->(u2)
```

## Inserting Nodes and Relationships Together
The general sem

2. Adds a new City (name: Toronto, population: unknown) to the city node table。

Query:
```
create (c:City {name: 'Toronto'})
```
Note: since the population of the city is not specified in the create node clause, Kùzu will set the population to NULL.

# Create relationship
Kùzu allows user to add a new relationship between nodes by using the create rel clause.

## Important Notes:
1. Similar to create node, properties which are not specified in the create rel clause will be set to NULL.
2. If the relationship to insert will violate the complexity constraint after insertion, Kùzu will throw an exception.
## Example:
1. Adds a new relationship which describes Adam follows Noura.

Query:
```
MATCH (u1:User), (u2:User) WHERE u1.name = 'Adam' AND u2.name = 'Noura' CREATE (u1)-[:Follows {since: 2011}]->(u2)
```
