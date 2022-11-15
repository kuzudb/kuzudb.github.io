---
layout: default
title: Connection & querying
parent: Python api
grand_parent: Client api
nav_order: 42
---
## Connection
After the database instance has been created, users are expected to create a connection and issue queries through the connection. Connection can be created by `gdb.connection(db)`.

### Available APIs:
#### `__init__(self: kuzu._kuzu.connection, database: kuzu._kuzu.database, num_threads: int = 0) -> None`
Construct a connection to PyDatabase.
  - **database**: the database that you want to connect to.
  - **num_threads**: the max number of threads to execute a query. If the num_threads is not given, the system will set num_threads to the max number of threads in the system.
  
  Example:
  ```
  # create a connection to Kùzu, and set thread number to 2
  gdb.connection(db, 2)
  ```
#### `set_max_threads_for_exec(self: kuzu._kuzu.connection, num_threads: int) -> None`
Set the max number of threads for execution to `num_threads`.
  - **num_threads**: the max number of threads for execution that you want set to.
  
  Example:
  ```
  # set the max num threads for execution to 3:
  con->set_max_num_threads_for_exec(3)
  ```

#### `execute(self: kuzu._kuzu.connection, query: str, parameters: list = []) -> PyQueryResult`
Executes the query and returns a PyQueryResult.
  - **query**: a parameterized query which allows user to use dollar symbol `$` to represent a parameter.
  - **parameters**: a list of (parameterName, parameterValue) tuple where the first entry is parameter name and second entry is parameter value. Note we currently do not support parameter with LIST type.
  
  Example:
  ```
  # query the number of users in database without using parameterized query
  conn->execute("MATCH (:User) RETURN count(*)")
  # query the age of Adam using parameterized query
  conn->execute("MATCH (u:User) WHERE u.name = $name RETURN u.age", [("name", "Adam")])
  ```
