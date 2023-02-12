---
layout: default
title: Case
parent: Expressions
grand_parent: Cypher
---

# Case Expression
`CASE` is used for conditional expression. There are two variants of conditional expression in Cypher. A simple form which compares an expression against multiple expressions and a general form with multiple conditional statements.

## Simple Form
In the simple form, input is compared against each `WHEN` in order until a match is found. If no match is found, the expression in the `ELSE` is retuned. If there is no `ELSE`, `NULL` is returned.

Syntax
```
CASE input
    WHEN expr THEN result
    [WHEN ...]
    [ELSE expr]
END
```

Example
```
MATCH (a:User) RETURN 
    CASE a.age 
        WHEN 50 THEN a.name 
    END;
```
Output:
```
--------------------------------------
| CASE a.age WHEN 50 THEN a.name END |
--------------------------------------
|                                    |
--------------------------------------
|                                    |
--------------------------------------
| Zhang                              |
--------------------------------------
|                                    |
--------------------------------------
```
View example in [Colab](https://colab.research.google.com/drive/1kA0jFcPGSVLSE6B1FeNDs6htsAQ6jZXf#scrollTo=8rdkQnwQOG2J).

## General Form
In the general form, conditional statements are evaluated in order until a `true` statement is found. If no match is found, the expression in the `ELSE` is returned. If there is no `ELSE`, `NULL` is returned.

Syntax
```
CASE
    WHEN expr THEN result
    [WHEN ...]
    [ELSE expr]
END
```

Example
```
MATCH (a:User) RETURN 
    CASE
        WHEN a.age < 50 THEN a.name 
    ELSE 'dummy'
    END;
```
Ouput:
```
----------------------------------------------------------------------
| CASE         WHEN a.age < 50 THEN a.name      ELSE 'dummy'     END |
----------------------------------------------------------------------
| Adam                                                               |
----------------------------------------------------------------------
| Karissa                                                            |
----------------------------------------------------------------------
| dummy                                                              |
----------------------------------------------------------------------
| Noura                                                              |
----------------------------------------------------------------------
```
View example in [Colab](https://colab.research.google.com/drive/1kA0jFcPGSVLSE6B1FeNDs6htsAQ6jZXf#scrollTo=8rdkQnwQOG2J).