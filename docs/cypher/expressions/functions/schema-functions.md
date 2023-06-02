---
layout: default
title: Schema Functions
parent: Functions and Expressions 
grand_parent: Cypher
---

# Schema Functions

| Function | Description | Example | Result | Result Type |
| ----------- | ----------- |  ----------- | ----------- | ----------- | 
| ID(node/rel) | returns the internal ID of the given NODE/REL | ID(a) | 0:1 | INTERNAL_ID |
| LABEL(node/rel) | returns the label name of the given NODE/REL | LABEL(a) | 'Person' | STRING |
| OFFSET(internal_ID) | returns the offset of internal ID | OFFSET(ID(a)) | 0 | INT64 | 
