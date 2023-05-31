---
layout: default
title: Schema Functions
parent: Functions and Expressions 
grand_parent: Cypher
---

# Schema Functions

| Function | Description | Example |
| ----------- | ----------- |  ----------- |
| ID(node/rel) | returns the internal ID of the given NODE/REL | ID(a) |
| LABEL(node/rel) | returns the label name of the given NODE/REL | LABEL(a) |
| OFFSET(internal_ID) | returns the offset of internal ID | OFFSET(ID(a)) | 
