---
layout: default
title: Data import
nav_order: 3
has_children: true
permalink: /docs/data-import
---

# Data Import 
There are two ways to insert data into Kùzu. Before either of these steps, you need to first create a graph schema, i.e., the schema of your node and relationship tables. See the details of how to [define a graph schema here](../cypher/ddl.md). 
  - Cypher's CREATE commands to insert nodes and relationships: These are similar to SQL's INSERT statements and slower than bulk loading through CSV files. For large databases, these should be used to do small updates after an initial CSV uploading. For details, see the documentation on [Cypher's data mainipulation clauses](../cypher/data-manipulation.md).
  - CSV uploading: Should be used for uploading a large database in bulk. For details, see the documentation on [CSV bulk loading](csv-loading.md). 