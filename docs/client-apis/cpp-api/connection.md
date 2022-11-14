---
layout: default
title: Connection & querying
parent: Cpp api
grand_parent: Client api
nav_order: 42
---

# Connection & querying

To issue a query, you need to create a connection with a database pointer.

## Example
```
auto connection = Connection(&database);
connection.query("create node table person (ID INT64, ColA INT64, PRIMARY KEY (ID));")
```

## Available APIs

### Connection(Database* database)
---
Create a connection to a database.
- database: database instance

### void Connection.beginReadOnlyTransaction()
---
Start a read-only transaction.

### void Connection.beginWriteTransaction()
---
Start a write transaction.

### void Connection.commit()
---
Commit current write transaction.

### void Connection.rollback()
---
Rollback current write transaction.

### void Connection.setMaxNumThreadForExec(uint64_t numThreads)
---
Set maximum number of threads during query execution.
- numThreads: number of threads 

### unique_ptr\<QueryResult\> Connection.query(std::string statement)
---
Query through connection.
- statement: statement to execute.
- return: query result.

### std::string Connection.getBuiltInFunctionNames()
---
- return: names of all built in functions.

### std::string Connection.getNodeTableNames()
---
- return: names of all node tables.

### std::string Connection.getRelTableNames()
---
- return : names of all rel tables.

### std::string Connection.getNodePropertyNames(const std::string& tableName)
---
- return : names of all properties of a node table.

### std::string Connection.getRelPropertyNames(const std::string& relTableName)
---
- return: names of all properties of a rel table.