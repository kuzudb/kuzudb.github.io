---
layout: default
title: Struct Functions
parent: Functions and Expressions 
grand_parent: Cypher
---

# Struct Operators

| Operator | Description | Example | Result |
| ----------- | ----------- |  ----------- |  ----------- |
| {key:value,} | creates a STRUCT containing the key value pairs | {name: 'Alice', age: 20} | {NAME: Alice, AGE: 20} |
| struct.'field_name' | alias of struct_extract | {name: 'Alice', age: 20}.name | 'Alice' |

# Struct Functions

| Function | Description | Example | Result |
| ----------- | ----------- |  ----------- |  ----------- |
| struct_extract(struct, 'field_name') | extracts named field from struct | struct_extract({name: 'Alice', age: 20}, 'name') | 'Alice' |