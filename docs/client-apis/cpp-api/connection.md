---
layout: default
title: Connection & querying
parent: Cpp api
grand_parent: Client api
nav_order: 42
---

# Connection

To issue a query, you need to create a `Connection` using a pointer to 
a [Database](database.md) instance. You can use connections
to execute queries, ddl statements, begin/commit/rollback [transactions](../transactions.md).
You can construct multiple connections that point to the same `Database`
instance and issue parallel queries through these connections concurrently.

You can also use a `Connection` to prepare `PreparedStatement`, which
is a way to parameterize queries for repeated execution
and avoid planning the same query. We cover how to prepare
a statement from `Connection` and the `PreparedStatement` class's API
[below](#preparedstatement) as well.


## Example
```
auto connection = Connection(&database);
connection.query("create node table person (ID INT64, ColA INT64, PRIMARY KEY (ID));")
```

## Available APIs

## class kuzu::main::Connection

Connection can be used to execute queries, ddl statements, begin/commit/rollback transactions. You can construct multiple connections that point to the same Database instance and issue parallel queries through these connections concurrently. You can also use a Connection to prepare PreparedStatement, which is a way to parameterize queries for repeated execution and avoid planning the same query. We cover how to prepare a statement from Connection and the PreparedStatement class’s API below as well.  

---

```c++
Connection (Database * database)
```
Creates a connection to a database. 

**Parameters**
- `database` A pointer to the database instance that this connection will be connected to. 

---

```c++
template<typename... Args> std::unique_ptr<QueryResult> execute (PreparedStatement * preparedStatement, std::pair< std::string, Args >... args)
```
Executes the given prepared statement with args and returns the result. 

**Parameters**
- `preparedStatement` The prepared statement to execute. 
- `args` The parameter pack where each arg is a std::pair with the first element being parameter name and second element being parameter value. 

**Returns:**
- The result of the query. 

---

```c++
std::unique_ptr<QueryResult> executeWithParams (PreparedStatement * preparedStatement, std::unordered_map< std::string, std::shared_ptr< common::Value >> & inputParams)
```
Executes the given prepared statement with inputParams and returns the result. 

**Parameters**
- `preparedStatement` The prepared statement to execute. 
- `inputParams` The parameter pack where each arg is a std::pair with the first element being parameter name and second element being parameter value. 

**Returns:**
- The result of the query. 
- Note:
- Any call that goes through executeWithParams acquires a lock in the end by calling executeLock(...). 

---

```c++
uint64_t getMaxNumThreadForExec ()
```
Returns the maximum number of threads to use for execution in the current connection. 

**Returns:**
- The maximum number of threads to use for execution in the current connection. 

---

```c++
std::string getNodePropertyNames (const std::string & nodeTableName)
```
Returns all property names of a table. 

**Parameters**
- `nodeTableName` The name of the node table. 

**Returns:**
- All property names of the given table. 

---

```c++
std::string getNodeTableNames ()
```
Returns all node table names. 

**Returns:**
- All node table names in string format. 

---

```c++
std::string getRelPropertyNames (const std::string & relTableName)
```
Returns all property names of a table. 

**Parameters**
- `relTableName` The name of the rel table. 

**Returns:**
- All property names of the given table. 

---

```c++
std::string getRelTableNames ()
```
Returns all rel table names. 

**Returns:**
- All rel table names in string format. 

---

```c++
std::unique_ptr<PreparedStatement> prepare (const std::string & query)
```
Prepares the given query and returns the prepared statement. 

**Parameters**
- `query` The query to prepare. 

**Returns:**
- The prepared statement. 

---

```c++
std::unique_ptr<QueryResult> query (const std::string & query)
```
Executes the given query and returns the result. 

**Parameters**
- `query` The query to execute. 

**Returns:**
- The result of the query. 

---

```c++
void setMaxNumThreadForExec (uint64_t numThreads)
```
Sets the maximum number of threads to use for execution in the current connection. 

**Parameters**
- `numThreads` The number of threads to use for execution in the current connection. 

---
# PreparedStatement

A prepared statement is a parameterized query which can avoid planning the same query for repeated execution. Parameters are indicated through dollar symbol `$` and are injested as a `std::pair` where the first entry is parameter name and second entry is parameter value.

## Example
```
unique_ptr<PreparedStatement> preparedStatement = connection.query("MATCH (a:person) WHERE a.age=$n RETURN COUNT(*);");
if (!preparedStatement->isSuccess()) {
    std::cout << preparedStatement->getErrorMessage() << endl;
}
unique_ptr<QueryResult> result = connection.execute(preparedStatement.get(), make_pair(string("n"), 30));
while (result->hasNext()) {
    auto row = result->getNext();
    std::cout << row->getResultValue(0)->getInt64Val() << std::endl;
}
result = connection.execute(preparedStatement.get(), make_pair(string("n"), 35));
while (result->hasNext()) {
    auto row = result->getNext();
    std::cout << row->getResultValue(0)->getInt64Val() << std::endl;
}
```

## Available APIs

## class kuzu::kuzu::kuzu::main::PreparedStatement

A prepared statement is a parameterized query which can avoid planning the same query for repeated execution. Parameters are indicated through dollar symbol $ and are injected as a std::pair where the first entry is parameter name and second entry is parameter value.  

---

```c++
bool allowActiveTransaction ()
```
DDL and COPY_CSV statements are automatically wrapped in a transaction and committed. As such, they cannot be part of an active transaction. 

**Returns:**
- The prepared statement is allowed to be part of an active transaction. 

---

```c++
std::string getErrorMessage ()
```
Gets the error message if the query is not prepared successfully. 

**Returns:**
- The error message if the query is not prepared successfully. 

---

```c++
binder::expression_vector getExpressionsToCollect ()
```
Gets the expressions for generating query results. 

**Returns:**
- Expression for generating query results. 

---

```c++
bool isReadOnly ()
```
Checks whether the query is read-only. 

**Returns:**
- The prepared statement is read-only or not. 

---

```c++
bool isSuccess ()
```
Checks whether the query has been prepared successfully. 

**Returns:**
- The query is prepared successfully or not. 

---
