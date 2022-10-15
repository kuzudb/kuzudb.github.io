# Defining A Graph Schema: Data Definition Language

As a first step to creating your database, you need to define your node and directed relationships. In the property graph model, nodes and relationships have labels. In Kùzu, every node or relationship can have 1 label. The node and relationships and the predefined properties on them are defined through `CREATE NODE TABLE' and `CREATE REL TABLE' commands. The choice of "table" as a term is intentional and why we chose it over label is explained below[^1].

## Defining Node Tables
For example, the following defines a table of Person nodes. 
```
CREATE NODE TABLE Person(name STRING, age INT64, start_date DATE, PRIMARY KEY (name))
```
This adds a Person table to the catalog of the system with 3 predefined properties. During querying, the name of the table will serve as the label of the nodes, e.g., `MATCH (a:Person) RETURN sum(a.age)` returns the sum of the ages of all nodes in the system. You need to define the primary key of nodes as one of the string or int64 properties of the node. Kùzu will generate an index to do quick lookups on the primary key (e.g., name in the above example).

## Defining Relationship Tables
We give examples of defining tables of relationships.
```
CREATE REL TABLE Knows(FROM Person TO Person, since DATE)
```
This adds to the catalog a Knows relationship table between Person and Person nodes with one date property. You do not define a primary key for relationship records. Several things to note:
- Relationship directions: Each relationship has a direction following the property graph model. So when Knows relationship records are added, each one has a specific source/from node and a specific destination/to node. This Although not currently supported, Kùzu soon will support ... TODO (Continue).


When definiWithin Kùzu's code base we refer to these as node and relationship "tables". 

 



[^1]: We prefer the term "table" instead of "label" because Kùzu, as well as other GDBMSs are ultimately relational systems in the sense that they store and process sets of tuples, i.e., tables or relations. A good way to understand the property graph model is as supporting two types of tables, nodes and relationship tables that have specific roles in your application data. Nodes are generally suitable to represent entities in your appliacation data, while relationships represent the relationships/connections. Relationships are the primary means to join nodes with each other to find paths and patterns in your graph database. So when you define a node label and a set of nodes/relationships, this is equivalent to defining a table or records as nodes or relationships. During querying you can bind node records in syntax like (a:Person), while relationships in sytax like (..)-[e:Knows]->(...). Observe also that similar to table definitions in SQL, node and relationship tables have primary keys, a term that is defined in the context of tables: node tables explicitly define primary keys as one of their properties, while the primary keys of relationship tables are implicitly by the primary keys of their FROM and TO node records. Further observe that similar to relational systems, properties can be thought equivalently as columns of a table, justifying our choice of using the term table in these definitions.
