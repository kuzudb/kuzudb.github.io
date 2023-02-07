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

### Escaping in Regualr Expressions

To use special characters (e.g. `.`, `*`) without special meaning, escape them with backslash (`\`).

Example
```
RETURN 'peter_n@example.com' =~ '.*\\.com';
True
```

### Case-insensitive Regular Expressions
To use case-insensitive regular expressions, preappend a regular expression with `?i`

Example
```
RETURN 'abc' =~ '(?i)A.*';
True
```