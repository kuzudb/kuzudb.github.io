## Kùzu Overview
Kùzu is an in-process property graph database management system (GDBMS) built for query speed and scalability. Kùzu is optimized for handling complex join-heavy analytical workloads on very large graph databases, with the following core feature set:

- Flexible Property Graph Data Model and Cypher query language
- Embeddable, serverless integration into applications 
- Columnar disk-based storage
- Columnar sparse row-based (CSR) adjacency list/join indices
- Vectorized and factorized query processor
- Novel and very fast join algorithms
- Multi-core query parallelism
- Serializable ACID transactions

Kùzu is being actively developed at University of Waterloo as a feature-rich and usable GDBMS. Kùzu is available under a permissible license. So try it out and help us make it better! We welcome users from industry, your feedback, and feature requests.

## Property Graph Data Model
Kùzu adopts the property graph data model adopted by other existing GDBMSs, such as Neo4j. In this model users model their databases as a set of labeled nodes and directed relationships, with properties on these nodes and edges. Different from existing GDMBSs, the properties on nodes and relationships in Kùzu can be pre-defined in a schema.  However, users can add arbitrary additional key value properties to nodes (but not to relationships). We differentiate between these properties as predefined node/rel properties vs ad-hoc node properties. To support predefined properties, Kùzu extends Cypher with Data Description Language (DDL) clauses, such as CREATE NODE/REL TABLE" clauses, similar to how tables are defined in SQL. See the [documentation here](data-import-and-ddl.md) for how to use the DDL statements to define a graph schema and import data into Kùzu.

Querying over predefined properties in the schema are much faster than, ad-hoc node properties. So for performance reasons, we always recommend predefining a schema when possible (although ad-hoc properties can be desirable for fast prototyping and/or when a small number of nodes have a certain property). 

## Cypher Query Language
Kùzu implements the [openCypher](https://opencypher.org/) version of the Cypher query language. Cypher is a SQL-like high-level language with several graph-specific constructs, such as pointed edges to represent joining nodes with their neighbor nodes, or the Kleene star ('\*') syntax to find arbitrarily long connections between nodes (which correspons to variable-length joins between node records).  Kùzu further extends the Cypher language with DDL statements to define a graph schema.

See the [documentation here](cypher) for the set of openCypher clauses Kùzu supports. [Neo4j's Cypher manual](https://neo4j.com/docs/cypher-manual/current/) provides good documentation on the full language.

## What Does "Kùzu" Mean? 
Kù-zu (‘bright’ + ‘to know’) is a Sumerian—the oldest known human language—word for “wisdom”.   
