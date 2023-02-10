---
layout: default
title: Connection & Querying
parent: Cpp api
grand_parent: Client api
nav_order: 42
---

# Connection & Querying

To issue a query, you need to create a `Connection` using a pointer to 
a [Database](database.md) instance. You can use connections
to execute queries, ddl statements, begin/commit/rollback [transactions](../transactions.md).
You can construct multiple connections that point to the same `Database`
instance and issue parallel queries through these connections concurrently.

You can also use a `Connection` to prepare `PreparedStatement`, which
is a way to parameterize queries for repeated execution
and avoid planning the same query.


## Example
```
auto connection = Connection(&database);
connection.query("CREATE NODE TABLE person (ID INT64, ColA INT64, PRIMARY KEY (ID));")
```

## Available APIs
## class kuzu::main::Connection

Connection is used to interact with a Database instance. Each Connection is thread-safe, so you can have multiple connections connecting to the same Database instance in a multi-threaded environment.  

---
**Connection**

```c++
Connection (Database * database)
```
Creates a connection to the database. 

**Parameters**
- `database` A pointer to the database instance that this connection will be connected to. 

---
**execute**

```c++
template<typename... Args> 
std::unique_ptr<QueryResult> execute (PreparedStatement * preparedStatement, std::pair< std::string, Args >... args)
```
Executes the given prepared statement with args and returns the result. 

**Parameters**
- `preparedStatement` The prepared statement to execute. 
- `args` The parameter pack where each arg is a std::pair with the first element being parameter name and second element being parameter value. 

**Returns:**
- the result of the query. 

---
**executeWithParams**

```c++
std::unique_ptr<QueryResult> executeWithParams (PreparedStatement * preparedStatement, std::unordered_map< std::string, std::shared_ptr< common::Value >> & inputParams)
```
Executes the given prepared statement with inputParams and returns the result. 

**Parameters**
- `preparedStatement` The prepared statement to execute. 
- `inputParams` The parameter pack where each arg is a std::pair with the first element being parameter name and second element being parameter value. 

**Returns:**
- the result of the query.

---
**getMaxNumThreadForExec**

```c++
uint64_t getMaxNumThreadForExec ()
```
Returns the maximum number of threads to use for execution in the current connection. 

**Returns:**
- the maximum number of threads to use for execution in the current connection. 

---
**getNodePropertyNames**

```c++
std::string getNodePropertyNames (const std::string & tableName)
```

**Parameters**
- `nodeTableName` The name of the node table. 

**Returns:**
- all property names of the given table. 

---
**getNodeTableNames**

```c++
std::string getNodeTableNames ()
```

**Returns:**
- all node table names in string format. 

---
**getRelPropertyNames**

```c++
std::string getRelPropertyNames (const std::string & relTableName)
```

**Parameters**
- `relTableName` The name of the rel table. 

**Returns:**
- all property names of the given table. 

---
**getRelTableNames**

```c++
std::string getRelTableNames ()
```

**Returns:**
- all rel table names in string format. 

---
**prepare**

```c++
std::unique_ptr<PreparedStatement> prepare (const std::string & query)
```
Prepares the given query and returns the prepared statement. 

**Parameters**
- `query` The query to prepare. 

**Returns:**
- the prepared statement. 

---
**query**

```c++
std::unique_ptr<QueryResult> query (const std::string & query)
```
Executes the given query and returns the result. 

**Parameters**
- `query` The query to execute. 

**Returns:**
- the result of the query. 

---
**setMaxNumThreadForExec**

```c++
void setMaxNumThreadForExec (uint64_t numThreads)
```
Sets the maximum number of threads to use for execution in the current connection. 

**Parameters**
- `numThreads` The number of threads to use for execution in the current connection. 

---

