# Casting

## Explicit casting
Kùzu supports changing the dataType of an expression to another dataType by explicitly using the casting functions. Kùzu throws an exception if the casting fails.
| Functions | Description | Example | Result |
| ----------- | ----------- |  ----------- |  ----------- |
| date | cast STRING to DATE | DATE('2022-11-12') | 2022-11-12 (DATE) | 
| timestamp | cast STRING to timestamp | TIMESTAMP('2021-10-12 15:21:33') | 2021-10-12 15:21:33 (TIMESTAMP) |
| interval | cast STRING to INTERVAL | INTERVAL('5 DAYS 2 YEARS') | 2 years 4 days (INTERVAL) |
| string | cast ANY to STRING | STRING(561) | '561' (STRING) |


## Implicit casting
Kùzu may convert the dataType of an expression to another dataType during computation. If a function is called on an input argument with unmatched dataType and the input argument can be casted to the desired type of the function, Kùzu will do an implicit casting on the input argument. 
For example, the user calls the COS(DOUBLE) on an INT64 column. Although COS only takes in a DOUBLE input argument, Kùzu will implicit cast INT64 to DOUBLE because the conversion from INT64 to DOUBLE is well-defined.
