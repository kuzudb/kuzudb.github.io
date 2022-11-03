# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="running-example.png" width="800">

You can import this database by copy pasting the comands 
# MATCH
MATCH is the clause where you define a "graph pattern", i.e., a join of node or relationhip records,
to find in the database.[^1]. There are several different ways to match patterns and we go through them
below. MATCH is often accompanied by [WHERE](where.md) (equivalent to SQL's WHERE clause) to define more predicates
on the patterns that are matched, though the examples here will not use WHERE clause. 
## Important Notes: 
- Similar to other high-level database query languages, nodes and relationships in the patterns 
are bound to variables, which can be referenced in other clauses (e.g., WHERE or RETURN) of the query.
openCypher allows you to omit these variables, if you do not need to reference them.
- Different from the original openCypher, Kùzu requires the labels of all 
nodes and relationships in the patterns to be specified. In addition, we only support
specifying a single label for each node/relationship in the patterns.
- Node/Rel table names in Kùzu are case sensitive. So you need to specify the labels of nodes/rels
using the same letter cases you used in your node/rel table schema definitions. 

## MATCH a node with a label and return all its properties.
Below query matches variable "a" to nodes with label User and returns "a", which 
is a shortcut in openCypher to return all properties of the node the 
variable "a" matches.
```
MATCH (a:User)
RETURN a
```
Output:
```
-----------------------------
| Adam    | 30 | 2020-06-22 |
-----------------------
| Karissa | 40 | 2019-05-12 |
-----------------------
| Zhang   | 50 | 2010-10-15 |
-----------------------
| Noura   | 25 | 2015-12-31 |
-----------------------------
```

## MATCH a relationship with a label
Similar to binding variables to node records, you can bind variables to relationship records and 
return them. The following indicates 
```
MATCH (a:User)-[e:Follows]->(b:User)
RETURN a, e, b
```
Output:
```
TODO: Fill
```
```
MATCH (a:User)-[:Follows]->(:User)-[:LivesIn]->(c:City)
RETURN a, c
```
TODO: Mention missing variable names and arbitrary path and patterns.

## MATCH cyclic patterns
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
```
Note that in the query node variables a and c appear twice, once on each of the 2 paths
in the query. In such cases, their labels need to specified *only the first time they appear
in the pattern*. In the above query a and c's labels are defined on the first/left path, 
so you don't have to specify them on the right path (though you still can).

## Adding equality predicates on node/rel properties
TODO: There is a [bug on this](https://github.com/graphflowdb/graphflowdb/issues/912). We need to wait 
for this to be resolved before writing this part.

```
MATCH (a:User)-[e:Follows {since: 2020}]->(b:User {name: "Zhang"})
```
TODO: Fill
## Matching variable-length Relationships
TODO: Fill



[^1]: MATCH is similar to the FROM clause of SQL, where the list of tables that need to be joined are specified. 
[^2]: Other property graph systems give more flexibility than what Kùzu supports. 
