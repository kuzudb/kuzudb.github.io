---
layout: default
title: Flat tuple
parent: Cpp api
grand_parent: Client api
nav_order: 45
---

# FlatTuple
[FlatTuple](#FlatTuple) stores a vector of values.


## Available APIs
## class kuzu::processor::FlatTuple

Stores a vector of Values.  

---

```c++
KUZU_API common::Value* getValue (uint32_t idx)
```

**Parameters**
- `idx` value index to get. 

**Returns:**
- the value stored at idx. 

---

```c++
KUZU_API uint32_t len ()
```

**Returns:**
- number of values in the FlatTuple. 

---

```c++
KUZU_API std::string toString (const std::vector< uint32_t > & colsWidth, const std::string & delimiter = '|', uint32_t maxWidth = -1)
```

**Parameters**
- `colsWidth` The length of each column 
- `delimiter` The delimiter to separate each value. 
- `maxWidth` The maximum length of each column. Only the first maxWidth number of characters of each column will be displayed. 

**Returns:**
- all values in string format. 

---
