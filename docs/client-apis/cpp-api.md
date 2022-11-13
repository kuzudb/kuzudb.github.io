# Cpp API

## Database creation & configuration

To use Kùzu, you need to first create a database instance with a database config. Although multiple database instances can be created on the directory, it is not recommended since update queries from different database instances.

### Example
```
DatabaseConfig databaseConfig("testdb");
Database database(databaseConfig);
```

### Available APIs

#### `DatabaseConfig(std::string databasePath, bool inMemoryMode = false)`
---
Create a database configutation.
- databasePath: path to database files. If the path doesn't not exist, a new database will be created at the given path.
- inMemoryMode: is the database should be created as an in-memory database. Default set to false.

#### `SystemConfig(uint64_t bufferPoolSize = StorageConfig::DEFAULT_BUFFER_POOL_SIZE)`
---
Create a system configuration
- bufferPoolSize: size of buffer pool in bytes. Default set to 16MB.

#### `Database(const DatabaseConfig& databaseConfig)`
---
Create a database instance with given database config and default system config.
- databaseConfig: database configuration
 
#### `Database(const DatabaseConfig& databaseConfig, const SystemConfig& systemConfig)`
---
Create a database instance with given database and system config.
- databaseConfig: database configuration
- systemConfig: system configuration

#### `void Database.resize(uint64_t newSize)`
---
Resize buffer manager to a newSize.
- newSize: new buffer pool size (in bytes).

## Connection creation & querying

To issue a query, you need to create a connection with a database pointer.

### Example
```
auto connection = Connection(&database);
connection.query("create node table person (ID INT64, ColA INT64, PRIMARY KEY (ID));")
```

### Available APIs

#### `Connection(Database* database)`
---
Create a connection to a database.
- database: database instance

#### `void Connection.beginReadOnlyTransaction()`
---
Start a read-only transaction.
#### `void Connection.beginWriteTransaction()`
---
Start a write transaction.
#### `void Connection.commit()`
---
Commit current write transaction.
#### `void Connection.rollback()`
---
Rollback current write transaction.
#### `void Connection.setMaxNumThreadForExec(uint64_t numThreads)`
---
Set maximum number of threads during query execution.
- numThreads: number of threads 

#### `unique_ptr<QueryResult> Connection.query(std::string statement)`
---
Query through connection.
- statement: statement to execute.
- return: query result.
#### `std::string Connection.getBuiltInFunctionNames()`
---
- return: names of all built in functions.
#### `std::string Connection.getNodeTableNames()`
---
- return: names of all node tables.
#### `std::string Connection.getRelTableNames()`
---
- return : names of all rel tables.
#### `std::string Connection.getNodePropertyNames(const std::string& tableName)`
---
- return : names of all properties of a node table.
#### `std::string Connection.getRelPropertyNames(const std::string& relTableName)`
---
- return: names of all properties of a rel table.

## Query result, tuple & summary
QueryResult captures all information related to the execution of a query. Each returned tuple is wrapped into a FlatTuple where each entry is wrapped as a ResultValue.

### Example
```
unique_ptr<QueryResult> result = connection.query("MATCH (a:person) RETURN COUNT(*);");
if (!result->isSuccess()) {
    std::cout << result->getErrorMessage() << endl;
}
while (result->hasNext()) {
    auto row = result->getNext();
    std::cout << row->getResultValue(0)->getInt64Val() << std::endl;
}
```

### Available APIs

#### `bool QueryResult.isSuccess()`
---
return whether query execution succeeded or not.
#### `QueryResult.getErrorMessage()`
#### `QueryResult.hasNext()`
#### `QueryResult.`
#### `QueryResult.`
#### `QueryResult.`
#### `QueryResult.`
#### `QueryResult.`
#### ``

