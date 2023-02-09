---
layout: default
title: Prepared statement
parent: Cpp api
grand_parent: Client api
nav_order: 44
---

# PreparedStatement
[PreparedStatement](#PreparedStatement) is a parameterized query which can avoid planning the same query for repeated execution.  

## Example
```
auto preparedStatement = conn->prepare("MATCH (a:person) WHERE a.isStudent = $1 RETURN COUNT(*)");
auto result = conn->execute(preparedStatement.get(), std::make_pair(std::string("1"), true));
```

## Available APIs

## class kuzu::main::PreparedStatement

A prepared statement is a parameterized query which can avoid planning the same query for repeated execution.  

---

```c++
KUZU_API bool allowActiveTransaction ()
```
DDL and COPY_CSV statements are automatically wrapped in a transaction and committed. As such, they cannot be part of an active transaction. 

**Returns:**
- the prepared statement is allowed to be part of an active transaction. 

---

```c++
KUZU_API std::string getErrorMessage ()
```

**Returns:**
- the error message if the query is not prepared successfully. 

---

```c++
std::vector<std::shared_ptr<binder::Expression> > getExpressionsToCollect ()
```

**Returns:**
- expressions for generating query results. 

---

```c++
KUZU_API bool isReadOnly ()
```

**Returns:**
- the prepared statement is read-only or not. 

---

```c++
KUZU_API bool isSuccess ()
```

**Returns:**
- the query is prepared successfully or not. 

---