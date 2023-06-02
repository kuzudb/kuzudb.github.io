---
layout: default
title: Struct Functions
parent: Functions and Expressions 
grand_parent: Cypher
---
# Struct Functions

| Function | Description | Example | Result | Result Type |
| ----------- | ----------- |  ----------- |  ----------- |   ----------- |
| {key:value,} | create a STRUCT containing the key value pairs | {name: 'Alice', age: 20} | {NAME: Alice, AGE: 20} | STRUCT |
| struct_extract(struct, 'field_name') | extract named field from struct | struct_extract({name: 'Alice', age: 20}, 'name') | 'Alice' | STRING |
| struct.'field_name' | alias of struct_extract | {name: 'Alice', age: 20}.name | 'Alice' | STRING |