# Comparison Operators
The following table describes the standard comparison operators supported by Kùzu. If any of the input arguments is NULL, the comparison result will also be NULL.
| Operator | Description | Example | Result |
| ----------- | ----------- | ----------- | ----------- |
| < | less than | 2 < 3 | True (BOOLEAN) | 
| > | greater than | 1 > 5 | False (BOOLEAN) |
| <= | less than or equal to | 3 <= 3 | True (BOOLEAN) |
| >= | greater than or equal to | 4 >= 2 | True (BOOLEAN) |
| = | equal | NULL = NULL | NULL |
| <> | not equal | 5 <> NULL | NULL |

# IS(NOT) NULL
The following table describes all predicates supported by Kùzu. These predicates are often used inside the WHERE statement.
| Predicate | Description |
| ----------- | ----------- |
| expression is NULL | True if the expression is NULL |
| expression is NOT NULL | True if the expression is NOT NULL |
