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

### std::unique_ptr\<PreparedStatement\> Connection.prepare(const std::string& statement)
---
- statement: cypher statement to prepare.
- return: a prepared statement.

### std::unique_ptr\<QueryResult\> Connection.execute(PreparedStatement* preparedStatement, pair<string, Args>... args)
---
- preparedStatement: prepared statement to execute.
- args: parameter pack where each arg is a `std::pair` with the first element being parameter name and second element being parameter value.

### bool PreparedStatement.isSuccess()
---
- return: whether prepare succeeded or not.

### std::string PreparedStatement.getErrorMessage()
---
- return: error message.

