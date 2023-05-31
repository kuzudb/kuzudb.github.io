---
layout: default
title: Serial
parent: Data Types
grand_parent: Cypher
nav_order: 8
---

# SERIAL
`SERIAL` is a logical data type and usually used for creating an incremental sequence of unique identifier column (similar to `AUTO_INCREMENT` supported by some other databases).


### Using `SERIAL` as Primary Key Column
```
CREATE NODE TABLE Person(ID SERIAL, name STRING, PRIMARY KEY(ID));
```

**Node**
`SERIAL` column is expected to be used with `COPY` statement. Kùzu currently doesn't support insert/delete on `SERIAL` column.