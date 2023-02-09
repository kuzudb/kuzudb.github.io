---
layout: default
title: Value
parent: Cpp api
grand_parent: Client api
nav_order: 47
---

# Value
[Value](#Value) can hold data of different types.

## Available APIs
## class kuzu::common::NodeVal

NodeVal represents a node in the graph and stores the nodeID, label and properties of that node.  

---

```c++
KUZU_API NodeVal (std::unique_ptr< Value > idVal, std::unique_ptr< Value > labelVal)
```
Constructs the NodeVal object with the given idVal and labelVal. 

**Parameters**
- `idVal` the nodeID value. 
- `labelVal` the name of the node. 

---

```c++
KUZU_API NodeVal (const NodeVal & other)
```
Constructs the NodeVal object from the other. 

**Parameters**
- `other` the NodeVal to copy from. 

---

```c++
KUZU_API void addProperty (const std::string & key, std::unique_ptr< Value > value)
```
Adds a property with the given {key,value} pair to the NodeVal. 

**Parameters**
- `key` the name of the property. 
- `value` the value of the property. 

---

```c++
KUZU_API std::unique_ptr<NodeVal> copy ()
```

**Returns:**
- a copy of the current node. 

---

```c++
KUZU_API std::string getLabelName ()
```

**Returns:**
- the name of the node in string format. 

---

```c++
KUZU_API Value* getLabelVal ()
```

**Returns:**
- the name of the node as a Value. 

---

```c++
KUZU_API nodeID_t getNodeID ()
```

**Returns:**
- the nodeID of the node as a nodeID struct. 

---

```c++
KUZU_API Value* getNodeIDVal ()
```

**Returns:**
- the nodeID as a Value. 

---

```c++
KUZU_API const std::vector<std::pair<std::string, std::unique_ptr<Value> > >& getProperties ()
```

**Returns:**
- all properties of the NodeVal. 

---

```c++
KUZU_API std::string toString ()
```

**Returns:**
- the current node values in string format. 

---

## class kuzu::common::RelVal

RelVal represents a rel in the graph and stores the relID, src/dst nodes and properties of that rel.  

---

```c++
KUZU_API RelVal (std::unique_ptr< Value > srcNodeIDVal, std::unique_ptr< Value > dstNodeIDVal, std::unique_ptr< Value > labelVal)
```
Constructs the RelVal based on the srcNodeIDVal, dstNodeIDVal and labelVal. 

**Parameters**
- `srcNodeIDVal` the src node. 
- `dstNodeIDVal` the dst node. 
- `labelVal` the name of the rel. 

---

```c++
KUZU_API RelVal (const RelVal & other)
```
Constructs a RelVal from other. 

**Parameters**
- `other` the RelVal to copy from. 

---

```c++
KUZU_API void addProperty (const std::string & key, std::unique_ptr< Value > value)
```
Adds a property with the given {key,value} pair to the RelVal. 

**Parameters**
- `key` the name of the property. 
- `value` the value of the property. 

---

```c++
KUZU_API std::unique_ptr<RelVal> copy ()
```

**Returns:**
- a copy of the RelVal. 

---

```c++
KUZU_API nodeID_t getDstNodeID ()
```

**Returns:**
- the dst nodeID value of the RelVal as nodeID struct. 

---

```c++
KUZU_API Value* getDstNodeIDVal ()
```

**Returns:**
- the dst nodeID value of the RelVal in Value. 

---

```c++
KUZU_API std::string getLabelName ()
```

**Returns:**
- the name of the RelVal. 

---

```c++
KUZU_API const std::vector<std::pair<std::string, std::unique_ptr<Value> > >& getProperties ()
```

**Returns:**
- all properties of the RelVal. 

---

```c++
KUZU_API nodeID_t getSrcNodeID ()
```

**Returns:**
- the src nodeID value of the RelVal as nodeID struct. 

---

```c++
KUZU_API Value* getSrcNodeIDVal ()
```

**Returns:**
- the src nodeID value of the RelVal in Value. 

---

```c++
KUZU_API std::string toString ()
```

**Returns:**
- the value of the RelVal in string format. 

---

## class kuzu::common::Value



---

```c++
KUZU_API Value (bool val_)
```

**Parameters**
- `val_` the boolean value to set. 

**Returns:**
- a Value with BOOL type and val_ value. 

---

```c++
KUZU_API Value (int32_t val_)
```

**Parameters**
- `val_` the int64_t value to set. 

**Returns:**
- a Value with INT64 type and val_ value. 

---

```c++
KUZU_API Value (int64_t val_)
```

**Parameters**
- `val_` the int64_t value to set. 

**Returns:**
- a Value with INT64 type and val_ value. 

---

```c++
KUZU_API Value (double val_)
```

**Parameters**
- `val_` the double value to set. 

**Returns:**
- a Value with DOUBLE type and val_ value. 

---

```c++
KUZU_API Value (date_t val_)
```

**Parameters**
- `val_` the date value to set. 

**Returns:**
- a Value with DATE type and val_ value. 

---

```c++
KUZU_API Value (timestamp_t val_)
```

**Parameters**
- `val_` the timestamp value to set. 

**Returns:**
- a Value with timestamp type and val_ value. 

---

```c++
KUZU_API Value (interval_t val_)
```

**Parameters**
- `val_` the interval value to set. 

**Returns:**
- a Value with INTERVAL type and val_ value. 

---

```c++
KUZU_API Value (internalID_t val_)
```

**Parameters**
- `val_` the internalID value to set. 

**Returns:**
- a Value with INTERNAL_ID type and val_ value. 

---

```c++
KUZU_API Value (const char * val_)
```

**Parameters**
- `val_` the string value to set. 

**Returns:**
- a Value with STRING type and val_ value. 

---

```c++
KUZU_API Value (const std::string & val_)
```

**Parameters**
- `val_` the string value to set. 

**Returns:**
- a Value with STRING type and val_ value. 

---

```c++
KUZU_API Value (DataType dataType, std::vector< std::unique_ptr< Value >> vals)
```

**Parameters**
- `vals` the list value to set. 

**Returns:**
- a Value with dataType type and vals value. 

---

```c++
KUZU_API Value (std::unique_ptr< NodeVal > val_)
```

**Parameters**
- `val_` the node value to set. 

**Returns:**
- a Value with NODE type and val_ value. 

---

```c++
KUZU_API Value (std::unique_ptr< RelVal > val_)
```

**Parameters**
- `val_` the rel value to set. 

**Returns:**
- a Value with REL type and val_ value. 

---

```c++
KUZU_API Value (DataType dataType, const uint8_t * val_)
```

**Parameters**
- `val_` the value to set. 

**Returns:**
- a Value with dataType type and val_ value. 

---

```c++
KUZU_API Value (const Value & other)
```

**Parameters**
- `other` the value to copy from. 

**Returns:**
- a Value with the same value as other. 

---

```c++
KUZU_API std::unique_ptr<Value> copy ()
```

**Returns:**
- a copy of the current value. 

---

```c++
KUZU_API void copyValueFrom (const uint8_t * value)
```
Copies from the value. 

**Parameters**
- `value` value to copy from. 

---

```c++
KUZU_API void copyValueFrom (const Value & other)
```
Copies from the other. 

**Parameters**
- `other` value to copy from. 

---

```c++
static KUZU_API Value createDefaultValue (const DataType & dataType)
```

**Parameters**
- `dataType` the type of the non-NULL value. 

**Returns:**
- a default non-NULL value of the given type. 

---

```c++
static KUZU_API Value createNullValue ()
```

**Returns:**
- a NULL value of ANY type. 

---

```c++
static KUZU_API Value createNullValue (DataType dataType)
```

**Parameters**
- `dataType` the type of the NULL value. 

**Returns:**
- a NULL value of the given type. 

---

```c++
template<class T > static KUZU_API Value createValue (T value)
```

**Parameters**
- `value` the value to Value object. 

**Returns:**
- a Value object based on value. 

---

```c++
template<> KUZU_API Value createValue (bool val)
```

**Parameters**
- `val` the boolean value 

**Returns:**
- a Value with BOOL type and val value. 

---

```c++
template<> KUZU_API Value createValue (int64_t val)
```

**Parameters**
- `val` the int64 value 

**Returns:**
- a Value with INT64 type and val value. 

---

```c++
template<> KUZU_API Value createValue (double val)
```

**Parameters**
- `val` the double value 

**Returns:**
- a Value with DOUBLE type and val value. 

---

```c++
template<> KUZU_API Value createValue (date_t val)
```

**Parameters**
- `val` the date_t value 

**Returns:**
- a Value with DATE type and val value. 

---

```c++
template<> KUZU_API Value createValue (timestamp_t val)
```

**Parameters**
- `val` the timestamp_t value 

**Returns:**
- a Value with TIMESTAMP type and val value. 

---

```c++
template<> KUZU_API Value createValue (interval_t val)
```

**Parameters**
- `val` the interval_t value 

**Returns:**
- a Value with INTERVAL type and val value. 

---

```c++
template<> KUZU_API Value createValue (nodeID_t val)
```

**Parameters**
- `val` the nodeID_t value 

**Returns:**
- a Value with NODE_ID type and val value. 

---

```c++
template<> KUZU_API Value createValue (std::string val)
```

**Parameters**
- `val` the string value 

**Returns:**
- a Value with STRING type and val value. 

---

```c++
template<> KUZU_API Value createValue (const std::string & val)
```

**Parameters**
- `val` the string value 

**Returns:**
- a Value with STRING type and val value. 

---

```c++
template<> KUZU_API Value createValue (const char * value)
```

**Parameters**
- `val` the string value 

**Returns:**
- a Value with STRING type and val value. 

---

```c++
KUZU_API DataType getDataType ()
```

**Returns:**
- the dataType of the value. 

---

```c++
KUZU_API const std::vector<std::unique_ptr<Value> >& getListValReference ()
```

**Returns:**
- a reference to the list value. 

---

```c++
template<class T > KUZU_API T getValue ()
```

**Returns:**
- the value of the given type. 

---

```c++
template<> KUZU_API bool getValue ()
```

**Returns:**
- boolean value. 

---

```c++
template<> KUZU_API int64_t getValue ()
```

**Returns:**
- int64 value. 

---

```c++
template<> KUZU_API double getValue ()
```

**Returns:**
- double value. 

---

```c++
template<> KUZU_API date_t getValue ()
```

**Returns:**
- date_t value. 

---

```c++
template<> KUZU_API timestamp_t getValue ()
```

**Returns:**
- timestamp_t value. 

---

```c++
template<> KUZU_API interval_t getValue ()
```

**Returns:**
- interval_t value. 

---

```c++
template<> KUZU_API internalID_t getValue ()
```

**Returns:**
- internal_t value. 

---

```c++
template<> KUZU_API std::string getValue ()
```

**Returns:**
- string value. 

---

```c++
template<> KUZU_API NodeVal getValue ()
```

**Returns:**
- NodeVal value. 

---

```c++
template<> KUZU_API RelVal getValue ()
```

**Returns:**
- RelVal value. 

---

```c++
template<class T > KUZU_API T& getValueReference ()
```

**Returns:**
- a reference to the value of the given type. 

---

```c++
template<> KUZU_API bool& getValueReference ()
```

**Returns:**
- the reference to the boolean value. 

---

```c++
template<> KUZU_API int64_t& getValueReference ()
```

**Returns:**
- the reference to the int64 value. 

---

```c++
template<> KUZU_API double& getValueReference ()
```

**Returns:**
- the reference to the double value. 

---

```c++
template<> KUZU_API date_t& getValueReference ()
```

**Returns:**
- the reference to the date value. 

---

```c++
template<> KUZU_API timestamp_t& getValueReference ()
```

**Returns:**
- the reference to the timestamp value. 

---

```c++
template<> KUZU_API interval_t& getValueReference ()
```

**Returns:**
- the reference to the interval value. 

---

```c++
template<> KUZU_API nodeID_t& getValueReference ()
```

**Returns:**
- the reference to the internal_id value. 

---

```c++
template<> KUZU_API std::string& getValueReference ()
```

**Returns:**
- the reference to the string value. 

---

```c++
template<> KUZU_API NodeVal& getValueReference ()
```

**Returns:**
- the reference to the NodeVal value. 

---

```c++
template<> KUZU_API RelVal& getValueReference ()
```

**Returns:**
- the reference to the RelVal value. 

---

```c++
KUZU_API bool isNull ()
```

**Returns:**
- whether the Value is null or not. 

---

```c++
KUZU_API void setDataType (const DataType & dataType_)
```
Sets the data type of the Value. 

**Parameters**
- `dataType_` the data type to set to. 

---

```c++
KUZU_API void setNull (bool flag)
```
Sets the null flag of the Value. 

**Parameters**
- `flag` null value flag to set. 

---

```c++
KUZU_API std::string toString ()
```

**Returns:**
- the current value in string format. 
---
