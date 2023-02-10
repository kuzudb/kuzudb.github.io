---
layout: default
title: Unwind
parent: Query clauses
grand_parent: Cypher
nav_order: 10
---

# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="../../../img/running-example.png" width="800">

You can import this database by copy pasting the comands on that page. 

# UNWIND
`UNWIND` allows you to "unnest" a list L that has k elements in it,
into a table T with k element. 
When using UNWIND, you need to specify an alias to refer to the elements
of the unnested list, i.e., T.

For example, the following unnests a literal "list of strings" into multiple rows 
and return them:

Query:
```
UNWIND ["Amy", "Bob", "Carol"] AS x
RETURN x;
```

Output:
```
---------
| x     |
---------
| Amy   |
---------
| Bob   |
---------
| Carol |
---------
```
View example in [Colab](https://colab.research.google.com/drive/1kA0jFcPGSVLSE6B1FeNDs6htsAQ6jZXf#scrollTo=jDbutdTaDZsB).

If the unwinded list L contained as elements other lists,
then the output would be elements with one fewer nesting. For example, if L was a list of 
list of strings, after unwinding, you'd get a table of list of strings. For example:

```
UNWIND [["Amy"], ["Bob", "Carol"]] AS x
RETURN x;
```
Output:
```
---------------
| x           |
---------------
| [Amy]       |
---------------
| [Bob,Carol] |
---------------
```
View example in [Colab](https://colab.research.google.com/drive/1kA0jFcPGSVLSE6B1FeNDs6htsAQ6jZXf#scrollTo=jDbutdTaDZsB).
