---
layout: default
title: Pattern matching
parent: Expressions
grand_parent: Cypher
---

# Pattern Matching Operator =~

Cypher supports regular expression with `=~` operator. The `=~` opeartor succeeds only if its pattern matches the entire string.

Examples
```
RETURN 'abc' =~ 'abc';
True

RETURN 'abc' =~ 'a';
False

RETURN 'abc' =~ '.*(b|d).*';
True

RETURN 'abc' =~ '(b|c).*';
False
```
