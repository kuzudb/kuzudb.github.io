## Kùzu Overview
Kùzu is an in-process property graph database management system (GDBMS) built for query speed and scalability. Kùzu is optimized for handling complex join-heavy analytical workloads on very large graph databases, with the following core feature set:

- Flexible Property Graph Data Model and Cypher query language
- Embeddable, serverless integration into applications 
- Columnar disk-based storage
- Adjacency List/Join indices based on efficient columnar sparse-row (CSR) storage structure
- Novel (and very fast) join algorithms based on years of research from our group
- Multi-core query parallelism
- Seamless spilling of large intermediate query results to disk
- Serializable ACID Transactions

Kùzu is being actively developed at University of Waterloo as a feature-rich and usable GDBMS. We welcome users from industry, your feedback, and feature requests.

## Property Graph Data Model
Kùzu adopts the property graph data model adopted by other existing GDBMSs, such as Neo4j. In this model users model their databases as a set of labeled nodes and directed relationships, with properties on these nodes and edges. Different from existing GDMBSs, the properties on nodes and relationships in Kùzu can be pre-defined in a schema.  However, users can add arbitrary additional key value properties to nodes (but not to relationships). We differentiate between these properties as predefined node/rel properties vs ad-hoc node properties. To support predefined properties, Kùzu extends the Cypher language with Data Description Language clauses, such as CREATE NODE/REL TABLE" clauses, which define the schema for nodes/ relationships, similar to how tables are defined in SQL.

Querying over predefined properties in the schema are much faster than, ad-hoc node properties. So for performance reasons, we always recommend predefining a schema when possible. Although ad-hoc properties can be desirable for fast prototyping and/or when only a very small number of nodes have a certain property. 

## Cypher Query Language
Kùzu implements and extends the [openCypher](https://opencypher.org/) version of the Cypher query language. Cypher is a SQL-like high-level language with several graph-specific constructs, such as pointed edges to represent joins between node records, or the Kleene star ('\*') syntax to represent variable-length joins between nodes (e.g., asking return all direct (1-hop) or indirect (any-hop) connections) between nodes can be expressed in Cypher as: TODO:Fill

[Neo4j's Cypher manual](https://neo4j.com/docs/cypher-manual/current/) provides good documentation on the full language. Documentation about the set of clauses we support 
