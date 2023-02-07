---
layout: default
title: Data type
parent: Cypher
---

# Supported Data Types 

Kùzu supports a set of primitive and nested data types both for node and relationship properties 
as well as for forming expressions whose outputs are in these data types.
See [expressions and functions](expressions/overview.md) for the supported operators and functions on these data types to form expressions. 

## Primitive Data Types

| Data Type | Size | Description | 
| --- | --- | --- |
| BOOLEAN | 1 byte | true/false |
| DATE| 4 bytes | year, month, day|
| DOUBLE | 8 bytes | double precision floating-point number |
| INT64| 8 bytes | signed eight-byte integer |
| INTERVAL| 4 bytes | date/time difference (see below) | 
| STRING| variable | variable-length character string |
| TIMESTAMP | 4 bytes | combination of time and date (see below) |

## STRING Data Type
UTF-8 encoding is supported for STRING data type.
```
RETURN 'Зарегистрируйтесь, σπαθιοῦ, Yen [jɛn], kΩ' AS str;
```
Output:
```
---------------------------------------------
| str                                       |
---------------------------------------------
| Зарегистрируйтесь, σπαθιοῦ, Yen [jɛn], kΩ |
---------------------------------------------
```

## LIST Data Type
List is a nested data type to store a list of values of the same type. 
Values in a list can themselves be nested lists. A few examples:
```
UNWIND [[1,2], [3], [4, 5]] AS x
RETURN x
output:
| [1,2] |
---------
| [3]   |
---------
| [4,5] |
---------

UNWIND [[1,2], [3], [4, 5]] AS x 
UNWIND x as y 
RETURN y
output:
-----
| 1 |
-----
| 2 |
-----
| 3 |
-----
| 4 |
-----
| 5 |
----
```

## Temporal Data Types
Kùzu supports three temporal data types: Date, Timestamp, and Interval.
We give information about each data type below.

### DATE
Dates are specified in ISO 8601 format (`YYYY-MM-DD`). 
You need to cast strings to dates using the `date(...)` function to construct literal dates. 
Below is an example:
```
RETURN date('2022-06-06') as x
output:
--------------
| 2022-06-06 |
--------------
```

### TIMESTAMP
Timestamps combine date and a time (hour, minute, second, millisecond) and are formatted
according to the ISO 8601 format (YYYY-MM-DD hh:mm:ss[.zzzzzz][+-TT[:tt]]),
which specifies the date (YYYY-MM-DD), time (hh:mm:ss[.zzzzzz]) and a time offset [+-TT[:tt]].
Only the Date part is mandatory. If time is specified, then the milliesecond [.zzzzzz] part
and the time offset are optional. Similar to dates, you need to cast strings to timestamps
using the `timestamp(...)` function to construct literal timestamps. Below is an example:
```
RETURN timestamp("1970-01-01 00:00:00.004666-10") as x
output:
------------------------------
| 1970-01-01 10:00:00.004666 |
------------------------------
```

### Interval
An interval consists of multiple date parts and represents the total time length of
these date parts. Kùzu follows [DuckDB's implementation](https://duckdb.org/docs/sql/data_types/interval)
for the format of specifying intervals. See DuckDB's documentation for details. Similar
to dates and timestamps, you need to cast strings to intervals to specify interval literals  
```
RETURN interval("1 year 2 days") as x
output:
-----------------
| 1 year 2 days |
-----------------
```

## NULL Values
NULLs are special values to represent unknown/unavailable data.
Every node/relationship property or result of any expression can
be NULL in addition to the non-NULL domain of values they can take.
For example, boolean expression can be true/false or NULL.
*Outputs of boolean operators where any of the operands are NULL is NULL*.
The NULL (in any of its case variations, such as Null or null) can be
used to specify a null literal. Below ares some examples:
```
RETURN 3 = 3
output:
--------
| True |
--------

RETURN 3 = null
output:
--------
|     |
--------

RETURN null = null
output:
--------
|     |
--------
```
Kùzu's CLI returns an empty cell to indicate nulls.
