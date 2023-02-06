---
layout: default
title: Match
parent: Query clauses
grand_parent: Cypher
---

# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="../../../img/running-example.png" width="800">

You can import this database by copy pasting the comands on that page. 

*Note: When using the CLI, please modify any multi-line query in the documenation to be in a single line.*

# MATCH
MATCH is the clause where you define a "graph pattern", i.e., a join of node or relationhip records,
to find in the database.[^1]. There are several different ways to match patterns and we go through them
below. MATCH is often accompanied by [WHERE](where.md) (equivalent to SQL's WHERE clause) to define more predicates
on the patterns that are matched. 
## Important Notes: 
- Similar to other high-level database query languages, nodes and relationships in the patterns 
are bound to variables, which can be referenced in other clauses (e.g., WHERE or RETURN) of the query.
openCypher allows you to omit these variables, if you do not need to reference them.
- Node/Rel table names in Kùzu are case sensitive. So you need to specify the labels of nodes/rels
using the same letter cases you used in your node/rel table schema definitions. 

## Match Nodes With a Label
Below query matches variable "a" to nodes with label User and returns "a", which 
is a shortcut in openCypher to return all properties of the node together with label and internal ID that the variable "a" matches.
```
MATCH (a:User)
RETURN a;
```
Output:
```
---------------------------------------------
| a                                         |
---------------------------------------------
| (label:User, 0:0, {name:Adam, age:30})    |
---------------------------------------------
| (label:User, 0:1, {name:Karissa, age:40}) |
---------------------------------------------
| (label:User, 0:2, {name:Zhang, age:50})   |
---------------------------------------------
| (label:User, 0:3, {name:Noura, age:25})   |
---------------------------------------------
```

## Match Nodes With Multiple Labels
Below query matches variable "a" to nodes with label User or label City. "Return a" will return all properties of the node together with label and internal ID. Properties not exist in a label will be returned as NULL value (e.g. "population" not exists in "User"). Properties exists in multiple labels are expected to have the same data type (e.g. "name" has STRING data type in "User" and "City" ).
```
MATCH (a:User:City)
RETURN a;
```
Output:
```
----------------------------------------------------------------
| a                                                            |
----------------------------------------------------------------
| (label:User, 0:0, {name:Adam, age:30, population:})          |
----------------------------------------------------------------
| (label:User, 0:1, {name:Karissa, age:40, population:})       |
----------------------------------------------------------------
| (label:User, 0:2, {name:Zhang, age:50, population:})         |
----------------------------------------------------------------
| (label:User, 0:3, {name:Noura, age:25, population:})         |
----------------------------------------------------------------
| (label:City, 1:0, {name:Waterloo, age:, population:150000})  |
----------------------------------------------------------------
| (label:City, 1:1, {name:Kitchener, age:, population:200000}) |
----------------------------------------------------------------
| (label:City, 1:2, {name:Guelph, age:, population:75000})     |
----------------------------------------------------------------
```

## Match Nodes With Any Label
Below query matches variable "a" to nodes with any label. In example database, it is equivalent to `MATCH (a:User:City) RETURN a;`.
```
MATCH (a)
RETURN a;
```
Output:
```
----------------------------------------------------------------
| a                                                            |
----------------------------------------------------------------
| (label:User, 0:0, {name:Adam, age:30, population:})          |
----------------------------------------------------------------
| (label:User, 0:1, {name:Karissa, age:40, population:})       |
----------------------------------------------------------------
| (label:User, 0:2, {name:Zhang, age:50, population:})         |
----------------------------------------------------------------
| (label:User, 0:3, {name:Noura, age:25, population:})         |
----------------------------------------------------------------
| (label:City, 1:0, {name:Waterloo, age:, population:150000})  |
----------------------------------------------------------------
| (label:City, 1:1, {name:Kitchener, age:, population:200000}) |
----------------------------------------------------------------
| (label:City, 1:2, {name:Guelph, age:, population:75000})     |
----------------------------------------------------------------
```

## Match Relationships With a Label
Similar to binding variables to node records, you can bind variables to relationship records and return them. The following finds all "a" Users that follow a "b" User, and returns name of "a", the properties of "e", and name of "b", where "e" will match the relationship from "a" to "b".
```
MATCH (a:User)-[e:Follows]->(b:User)
RETURN a.name, e, b.name;
```
Output:
```
---------------------------------------------------------------------------
| a.name  | e                                                   | b.name  |
---------------------------------------------------------------------------
| Adam    | (0:0)-[label:Follows, {_id:2:0, since:2020}]->(0:1) | Karissa |
---------------------------------------------------------------------------
| Adam    | (0:0)-[label:Follows, {_id:2:1, since:2020}]->(0:2) | Zhang   |
---------------------------------------------------------------------------
| Karissa | (0:1)-[label:Follows, {_id:2:2, since:2021}]->(0:2) | Zhang   |
---------------------------------------------------------------------------
| Zhang   | (0:2)-[label:Follows, {_id:2:3, since:2022}]->(0:3) | Noura   |
---------------------------------------------------------------------------
```

Relationships can be specified in the right-to-left direction as well. For example, the following query will now match all the relationships from "b" to "a" (so we expect "a" and "b" and properties to be swapped in the above output:
```
MATCH (a:User)<-[e:Follows]-(b:User)
RETURN a.name, e, b.name;
```
Output:
```
---------------------------------------------------------------------------
| a.name  | e                                                   | b.name  |
---------------------------------------------------------------------------
| Karissa | (0:0)-[label:Follows, {_id:2:0, since:2020}]->(0:1) | Adam    |
---------------------------------------------------------------------------
| Zhang   | (0:0)-[label:Follows, {_id:2:1, since:2020}]->(0:2) | Adam    |
---------------------------------------------------------------------------
| Zhang   | (0:1)-[label:Follows, {_id:2:2, since:2021}]->(0:2) | Karissa |
---------------------------------------------------------------------------
| Noura   | (0:2)-[label:Follows, {_id:2:3, since:2022}]->(0:3) | Zhang   |
---------------------------------------------------------------------------
```

## Match Relationships With Multi Labels
Similar to matching nodes with multiple labels, you can bind variables to relationships with multiple labels. Below query finds all "a" User that Follows "b" User or LivesIn "b" City.
```
MATCH (a:User)-[e:Follows|:LivesIn]->(b:User:City)
RETURN a.name, e, b.name;
```
Output:
```
-----------------------------------------------------------------------------
| a.name  | e                                                   | b.name    |
-----------------------------------------------------------------------------
| Adam    | (0:0)-[label:Follows, {_id:2:0, since:2020}]->(0:1) | Karissa   |
-----------------------------------------------------------------------------
| Adam    | (0:0)-[label:Follows, {_id:2:1, since:2020}]->(0:2) | Zhang     |
-----------------------------------------------------------------------------
| Adam    | (0:0)-[label:LivesIn, {_id:3:0, since:}]->(1:0)     | Waterloo  |
-----------------------------------------------------------------------------
| Karissa | (0:1)-[label:Follows, {_id:2:2, since:2021}]->(0:2) | Zhang     |
-----------------------------------------------------------------------------
| Karissa | (0:1)-[label:LivesIn, {_id:3:1, since:}]->(1:0)     | Waterloo  |
-----------------------------------------------------------------------------
| Zhang   | (0:2)-[label:Follows, {_id:2:3, since:2022}]->(0:3) | Noura     |
-----------------------------------------------------------------------------
| Zhang   | (0:2)-[label:LivesIn, {_id:3:2, since:}]->(1:1)     | Kitchener |
-----------------------------------------------------------------------------
| Noura   | (0:3)-[label:LivesIn, {_id:3:3, since:}]->(1:2)     | Guelph    |
-----------------------------------------------------------------------------
```

## Match Relationships With Any Label
Simialr to matching nodes with any label, you can bind variables to relationships with any label by not specifying a label. Below query finds all relationships in the database.
```
MATCH ()-[e]->()
RETURN e;
```
Output:
```
-------------------------------------------------------
| e                                                   |
-------------------------------------------------------
| (0:0)-[label:Follows, {_id:2:0, since:2020}]->(0:1) |
-------------------------------------------------------
| (0:0)-[label:Follows, {_id:2:1, since:2020}]->(0:2) |
-------------------------------------------------------
| (0:0)-[label:LivesIn, {_id:3:0, since:}]->(1:0)     |
-------------------------------------------------------
| (0:1)-[label:Follows, {_id:2:2, since:2021}]->(0:2) |
-------------------------------------------------------
| (0:1)-[label:LivesIn, {_id:3:1, since:}]->(1:0)     |
-------------------------------------------------------
| (0:2)-[label:Follows, {_id:2:3, since:2022}]->(0:3) |
-------------------------------------------------------
| (0:2)-[label:LivesIn, {_id:3:2, since:}]->(1:1)     |
-------------------------------------------------------
| (0:3)-[label:LivesIn, {_id:3:3, since:}]->(1:2)     |
-------------------------------------------------------
```

## Omitting Binding Variables to Nodes or Relationships
You can also omit binding a variable to a node or relationship in your graph patterns if 
you will not use them in somewhere else in your query (e.g., WHERE or RETURN). For example, below, we query for 2-hop paths searching for "the cities that Users that "a" Users follows".
Because we do not need to return the Users that "a" Users follows or the properties
of the Follows and LivesIn edges that form these 2-paths, we can omit giving variable names to them.

```
MATCH (a:User)-[:Follows]->(:User)-[:LivesIn]->(c:City)
WHERE a.name = "Adam"
RETURN a, c.name, c.population;
```
```
---------------------------------------------------------------------
| a                                      | c.name    | c.population |
---------------------------------------------------------------------
| (label:User, 0:0, {name:Adam, age:30}) | Waterloo  | 150000       |
---------------------------------------------------------------------
| (label:User, 0:0, {name:Adam, age:30}) | Kitchener | 200000       |
---------------------------------------------------------------------
```

## Specifying Multiple Patterns, Separated By Comma (e.g., when Matching Cyclic Patterns)
Although paths can be matched in a single pattern, some patterns, in particular
cyclic patterns, require specifying multiple patterns/paths that form the pattern.
These multiple paths are separated by a comma. The following is a (directed) triangle
query and returns the only triangle in the database between Adam, Karissa, and Zhang.

```
MATCH (a:User)-[:Follows]->(b:User)-[:Follows]->(c:User), (a)-[:Follows]->(c)
RETURN a.name, b.name, c.name;
```
Output:
```
-----------------------------
| a.name | b.name  | c.name |
-----------------------------
| Adam   | Karissa | Zhang  |
-----------------------------
```
Note that in the query node variables a and c appear twice, once on each of the 2 paths
in the query. In such cases, their labels need to specified *only the first time they appear
in the pattern*. In the above query a and c's labels are defined on the first/left path, 
so you don't have to specify them on the right path (though you still can).

## Adding Equality Predicates on Node/Rel Properties
The [WHERE clause](where.md) is the main clause to specify arbitary predicates on the nodes and relationships in your patters (e.g., a.age < b.age in where "a" and "b" bind to User nodes). 
As a syntactic sugar openCypher allows *equality predicates* to be matched on
nodes and edges using the `{prop1 : value1, prop2 : value2, ...}` syntax. For example: 
```
MATCH (a:User)-[e:Follows {since: 2020}]->(b:User {name: "Zhang"})
RETURN a, e.since, b.name;
```
is a syntactic sugar for:

```
MATCH (a:User)-[e:Follows]->(b:User)
WHERE e.since = 2020 AND b.name = "Zhang"
RETURN a, e.since, b.name;
```
and both queries output:
```
-------------------------------------------------------------
| a                                      | e.since | b.name |
-------------------------------------------------------------
| (label:User, 0:0, {name:Adam, age:30}) | 2020    | Zhang  |
-------------------------------------------------------------
```
## Matching Variable-length Relationships
You can also find paths/joins that are variable-length between node records. Specifically,
you can find variable-hop connections between nodes by specifying in the relationship patterns,
e.g., `(a:User)-[:Follows*min..max]->(b:User)`, where min and max specify the minimum and 
the maximum number of hops[^2]. Note you need to use 2 dots between min and max.
For example, the following query finds all 1- and 2-hop
Follows paths in a database and returns the source and destination nodes of these paths.
```
MATCH (a:User)-[:Follows*1..2]->(b:User)
RETURN a, b;
```
Output:
```
-----------------------------------------------------------------------------------------
| a                                         | b                                         |
-----------------------------------------------------------------------------------------
| (label:User, 0:0, {name:Adam, age:30})    | (label:User, 0:1, {name:Karissa, age:40}) |
-----------------------------------------------------------------------------------------
| (label:User, 0:0, {name:Adam, age:30})    | (label:User, 0:2, {name:Zhang, age:50})   |
-----------------------------------------------------------------------------------------
| (label:User, 0:0, {name:Adam, age:30})    | (label:User, 0:2, {name:Zhang, age:50})   |
-----------------------------------------------------------------------------------------
| (label:User, 0:0, {name:Adam, age:30})    | (label:User, 0:3, {name:Noura, age:25})   |
-----------------------------------------------------------------------------------------
| (label:User, 0:1, {name:Karissa, age:40}) | (label:User, 0:2, {name:Zhang, age:50})   |
-----------------------------------------------------------------------------------------
| (label:User, 0:1, {name:Karissa, age:40}) | (label:User, 0:3, {name:Noura, age:25})   |
-----------------------------------------------------------------------------------------
| (label:User, 0:2, {name:Zhang, age:50})   | (label:User, 0:3, {name:Noura, age:25})   |
-----------------------------------------------------------------------------------------
```
Similar to relationships, you can give right-to-left direction to your variable-length paths. 
3 ruther notes on variable-length paths:
- You currently cannot bind variables to variable length paths.
- You currently cannot issue multi-labeled or any-labeled variable length path query.
- The maximum length of variable-length paths you can search is 30. 


[^1]: MATCH is similar to the FROM clause of SQL, where the list of tables that need to be joined are specified. 
[^2]: openCypher also supports variable-length patterns where either or both of min and max bounds can be
missing. Kùzu does not yet support this and users need to explicitly indicate both bounds.
