---
layout: default
title: Node/Rel Functions
parent: Expressions
grand_parent: Cypher
---

# Internal ID Functions

| Function | Description | Example |
| ----------- | ----------- |  ----------- |
| ID(node/rel) | returns the internal ID of the given NODE/REL | ID(a) |
| LABEL(node/rel) | returns the label name of the given NODE/REL | LABEL(a) |
| OFFSET(internal_ID) | returns the offset of internal ID | OFFSET(ID(a)) | 
