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
- Different from the original openCypher, Kùzu requires the labels of all 
nodes and relationships in the patterns to be specified. In addition, we only support
specifying a single label for each node/relationship in the patterns.
- Node/Rel table names in Kùzu are case sensitive. So you need to specify the labels of nodes/rels
using the same letter cases you used in your node/rel table schema definitions. 

## MATCH a Node With a Label and Return All Its Properties.
Below query matches variable "a" to nodes with label User and returns "a", which 
is a shortcut in openCypher to return all properties of the node that the 
variable "a" matches.
```
MATCH (a:User)
RETURN a
```
Output:
```
-------------------
| a.name  | a.age |
-------------------
| Adam    | 30    |
-------------------
| Karissa | 40    |
-------------------
| Zhang   | 50    |
-------------------
| Noura   | 25    |
-------------------
```

## MATCH a Relationship With a Label
Similar to binding variables to node records, you can bind variables to relationship records and 
return them. The following finds all "a" Users that follow a "b" User, and returns the properties
of a, e, b, where e will match the relationship from "a" to "b".
```
MATCH (a:User)-[e:Follows]->(b:User)
RETURN a, e, b
```
Output:
```
-----------------------------------------------
| a.name  | a.age | e.since | b.name  | b.age |
-----------------------------------------------
| Adam    | 30    | 2020    | Karissa | 40    |
-----------------------------------------------
| Adam    | 30    | 2020    | Zhang   | 50    |
-----------------------------------------------
| Karissa | 40    | 2021    | Zhang   | 50    |
-----------------------------------------------
| Zhang   | 50    | 2022    | Noura   | 25    |
-----------------------------------------------
```

Relationships can be specified in the right-to-left direction as well. For example, the following
query will now match all the relationships from "b" to "a" (so we expect "a" and "b" and properties
to be swapped in the above output:
```
MATCH (a:User)<-[e:Follows]-(b:User)
RETURN a, e, b
```
Output:
```
-----------------------------------------------
| a.name  | a.age | e.since | b.name  | b.age |
-----------------------------------------------
| Karissa | 40    | 2020    | Adam    | 30    |
-----------------------------------------------
| Zhang   | 50    | 2020    | Adam    | 30    |
-----------------------------------------------
| Zhang   | 50    | 2021    | Karissa | 40    |
-----------------------------------------------
| Noura   | 25    | 2022    | Zhang   | 50    |
-----------------------------------------------
```

Note: If you match a variable, e.g., "x" to a relationship variable that does not have any properties,
and use x in RETURN, Kùzu might remove x from the RETURN. For example, in our example
dataset, LivesIn relationships don't have any properties. So if you queried:
```
MATCH (a:User)-[x:LivesIn]->(c:City)
WHERE a.name = "Adam"
RETURN a, x, c
```
Output:
```
--------------------------------------------
| a.name | a.age | c.name   | c.population |
--------------------------------------------
| Adam   | 30    | Waterloo | 150000       |
--------------------------------------------
```

## Omitting Binding Variables to Nodes or Relationships
You can also omit binding a variable to a node or relationship in your graph patterns if 
you will not use them in somewhere else in your query (e.g., WHERE or RETURN). For example,
below, we query for 2-hop paths searching for "the cities that Users that "a" Users follows".
Because we do not need to return the Users that "a" Users follows or the properties
of the Follows and LivesIn edges that form these 2-paths, we can omit giving variable names to them.

```
MATCH (a:User)-[:Follows]->(:User)-[:LivesIn]->(c:City)
WHERE a.name = "Adam"
RETURN a, c
```
```
----------------------------------------------
| a.name  | a.age | c.name    | c.population |
----------------------------------------------
| Adam    | 30    | Kitchener | 200000       |
----------------------------------------------
| Adam    | 30    | Waterloo  | 150000       |
----------------------------------------------
```

## Specifying Multiple Patterns, Separated By Comma (e.g., when Matching Cyclic Patterns)
Although paths can be matched in a single pattern, some patterns, in particular
cyclic patterns, require specifying multiple patterns/paths that form the pattern.
These multiple paths are separated by a comma. The following is a (directed) triangle
query and returns the only triangle in the database between Adam, Karissa, and Zhang.

```
MATCH (a:User)-[:Follows]->(b:User)-[:Follows]->(c:User), (a)-[:Follows]->(c)
RETURN a, b, c
```
Output:
```
-----------------------------------------------------
| a.name | a.age | b.name  | b.age | c.name | c.age |
-----------------------------------------------------
| Adam   | 30    | Karissa | 40    | Zhang  | 50    |
-----------------------------------------------------
```
Note that in the query node variables a and c appear twice, once on each of the 2 paths
in the query. In such cases, their labels need to specified *only the first time they appear
in the pattern*. In the above query a and c's labels are defined on the first/left path, 
so you don't have to specify them on the right path (though you still can).

## Adding Equality Predicates on Node/Rel Properties
The [WHERE clause](where.md) is the main clause to specify arbitary predicates on the nodes and
relationships in your patters (e.g., a.age < b.age in where "a" and "b" bind to User nodes). 
As a syntactic sugar openCypher allows *equality predicates* to be matched on
nodes and edges using the `{prop1 : value1, prop2 : value2, ...}` syntax. For example: 
```
MATCH (a:User)-[e:Follows {since: 2020}]->(b:User {name: "Zhang"})
RETURN a, e, b
```
is a syntactic sugar for:

```
MATCH (a:User)-[e:Follows]->(b:User)
WHERE e.since = 2020 AND b.name = "Zhang"
RETURN a, e, b
```
and both queries output:
```
---------------------------------------------
| a.name | a.age | e.since | b.name | b.age |
---------------------------------------------
| Adam   | 30    | 2020    | Zhang  | 50    |
---------------------------------------------
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
RETURN a, b
```
Output:
```
-------------------------------------
| a.name  | a.age | b.name  | b.age |
-------------------------------------
| Adam    | 30    | Karissa | 40    |
-------------------------------------
| Adam    | 30    | Zhang   | 50    |
-------------------------------------
| Adam    | 30    | Zhang   | 50    |
-------------------------------------
| Adam    | 30    | Noura   | 25    |
-------------------------------------
| Karissa | 40    | Zhang   | 50    |
-------------------------------------
| Karissa | 40    | Noura   | 25    |
-------------------------------------
| Zhang   | 50    | Noura   | 25    |
-------------------------------------
```
Similar to relationships, you can give right-to-left direction to your variable-length paths. 
2 ruther notes on variable-length paths:
- You currently cannot bind variables to variable length paths.
- The maximum length of variable-length paths you can search is 30. 

[^1]: MATCH is similar to the FROM clause of SQL, where the list of tables that need to be joined are specified. 
[^2]: openCypher also supports variable-length patterns where either or both of min and max bounds can be
missing. Kùzu does not yet support this and users need to explicitly indicate both bounds.
