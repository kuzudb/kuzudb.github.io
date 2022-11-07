# Supported Data Types 

Kùzu supports a set of primitive and nested data types both for node and relationship properties 
as well as for forming expressions whose outputs are in these data types.
See [expressions](expressions) and  [functions](functions) for the supported operators 
and functions on these data types to form expressions.

## Primitive Data Types

| Data Type | Size | Description | 
| --- | --- | --- |
| BOOLEAN | 1 byte | true/false |
| DATE| 4 bytes | year, month, date in ISO 8601 format (`YYYY-MM-DD`) |
| DOUBLE | 8 bytes | double precision floating-point number |
| INT64| 8 bytes | signed eight-byte integer |
| INTERVAL| 4 bytes | date/time difference (see below) | 
| STRING| variable | variable-length character string |
| TIMESTAMP | 4 bytes | combination of time and date |

## LIST Data Types
List is a nested data type to store a list of values of the same type. Values in a list can themselves be nested lists.
A few examples:
```
UNWIND [[1,2], [3], [4, 5]]
```



## INTERVAL Data Type

## NULL Values

TODO: Fill. List all suppported data types.
For dates and timestamps, discuss our format.
Discuss how null values are handled.
