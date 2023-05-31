---
layout: default
title: String
parent: Data Types
grand_parent: Cypher
nav_order: 5
---

# STRING

`STRING` data type supports UTF-8 encoding.

#### Return UTF-8 string
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
