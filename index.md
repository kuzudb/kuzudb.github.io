---
layout: default
title: Home
nav_order: 1
permalink: /
---

[Get started now](./docs/getting-started/overview.md){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[View it on GitHub](https://github.com/kuzudb/kuzu){: .btn .fs-5 .mb-4 .mb-md-0 }

[Join our Slack workspace](https://join.slack.com/t/kuzudb/shared_invite/zt-1n67h736q-E3AFGSI4w~ljlFMYr3_Sjg){: .btn .fs-5 .mb-4 .mb-md-0 }

---

<div align="center">
  <img src="/kuzu-logo.png" height="100">
</div>

## Kùzu Overview
Kùzu is an in-process property *graph database management system (GDBMS)* built for query speed and scalability. Kùzu is optimized for handling complex join-heavy analytical workloads on very large graph databases, with the following core feature set:

- Flexible Property Graph Data Model and Cypher query language
- Embeddable, serverless integration into applications 
- Columnar disk-based storage
- Columnar sparse row-based (CSR) adjacency list/join indices
- Vectorized and factorized query processor
- Novel and very fast join algorithms
- Multi-core query parallelism
- Serializable ACID transactions

Kùzu is being actively developed at University of Waterloo as a feature-rich and usable GDBMS. Kùzu is available under a permissible license. So try it out and help us make it better! We welcome your feedback and feature requests!

## Property Graph Data Model
Kùzu adopts the property graph data model adopted by other existing GDBMSs, such as Neo4j. In this model users model their databases as a set of labeled nodes and directed relationships, with properties on these nodes and edges. Different from existing GDMBSs, the properties on nodes and relationships in Kùzu are pre-defined in a schema. To support predefined properties, Kùzu extends Cypher with Data Description Language (DDL) clauses, such as CREATE NODE/REL TABLE" clauses, similar to how tables are defined in SQL. See the [documentation here](docs/cypher/data-manipulation-clauses/overview.md) for how to use the DDL statements to define a graph schema and import data into Kùzu.

## Cypher Query Language
Kùzu implements the [openCypher](https://opencypher.org/) version of the Cypher query language. Cypher is a SQL-like high-level language with several graph-specific constructs, such as pointed edges to represent joining nodes with their neighbor nodes, or the Kleene star ('\*') syntax to find arbitrarily long connections between nodes (which correspond to variable-length joins between node records).  Kùzu further extends the Cypher language with DDL statements to define a graph schema.

See the [documentation here](docs/cypher/query-clauses/overview.md) for the set of openCypher clauses Kùzu supports. [Neo4j's Cypher manual](https://neo4j.com/docs/cypher-manual/current/) provides good documentation on the full language.

## What Does "Kùzu" Mean? 
Kù-zu (‘bright’ + ‘to know’) is a Sumerian—the oldest known human language—word for “wisdom”.

