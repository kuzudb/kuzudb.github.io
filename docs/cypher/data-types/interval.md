---
layout: default
title: Interval
parent: Data Types
grand_parent: Cypher
nav_order: 3
---

# Interval
`INTERVAL` consists of multiple date parts and represents the total time length of these date parts. Kùzu follows [DuckDB's implementation](https://duckdb.org/docs/sql/data_types/interval) for the format of specifying intervals.


### `INTERVAL` creation
```
RETURN interval("1 year 2 days") as x;
```
Output:
```
-----------------
| x             |
-----------------
| 1 year 2 days |
-----------------
```

