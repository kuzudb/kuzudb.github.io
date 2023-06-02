---
layout: default
title: Schema Functions
parent: Functions and Expressions 
grand_parent: Cypher
---

# Schema Functions

| Function | Description | Example | Result | Result Type |
| ----------- | ----------- |  ----------- | ----------- | ----------- | 
| ID(NODE/REL) | returns the internal ID of node/rel | ID(a) | 0:1 | INTERNAL_ID |
| LABEL(NODE/REL) | returns the label name of node/rel | LABEL(a) | 'Person' | STRING |
| OFFSET(INTERNAL_ID) | returns the offset of internal ID | OFFSET(ID(a)) | 0 | INT64 | 
| LEGNTH(RECURSIVE_REL)| returns the length of recursive rel |

### ID(NODE)

