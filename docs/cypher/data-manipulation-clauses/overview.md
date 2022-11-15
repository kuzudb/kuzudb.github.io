---
layout: default
title: Create
parent: Data manipulation clauses
grand_parent: Cypher
---

### Overview
openCypher has CREATE/SET/DELETE commands to manipulate the data in a database.
As a general rule, these should be used to do small modifications to the database.
If doing a large bulk insertions, you should use the [COPY FROM commands](../../data-import/csv-import.md).

Currently Kùzu only supports CREATE and SET commands, so database records can only be 
inserted and updated[^1].

[^1]: Support for REMOVE is currently being implemented and will be available soon.
