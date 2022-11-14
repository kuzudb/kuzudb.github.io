---
layout: default
title: Python api
parent: Client api
--- 

# Python API

## Database instance creation & configuration
Kùzu provides a set of Python APIs for user to interact with the database in Python. To utilize this API in Python, simply import Kùzu by `from tools.python_api import _graphflowdb as gdb`. To interact with Kùzu in python, users must start with creating a database instance by calling `gdb.database(database_path)`. 

Available APIs:

### 1. *PyDatabase(database_path, buffer_pool_size = DEFAULT_BUFFER_POOL_SIZE): creates the database instance and returns PyDatabase*
  - database_path: the path where you want to launch your database instance. If the database doesn't exist in the databaseDir, a new database will be created at the database_path.
  - buffer_pool_size: the buffer_pool_size(in bytes) of the database instance. If the buffer_pool_size is not given, the system will use the DEFAULT_BUFFER_POOL_SIZE.
  - example:
  ``` 
  # create a database at /tmp/kuzudb and set buffer pool to 256MB.
  gdb.database('/tmp/kuzudb', 256 * 1024 * 1024)
  ```
### 2. *PyDatabase.resize_buffer_manager(new_size): resize the buffer to the new size and returns void.*
  - new_size: the new buffer_manager size in bytes that you want to set to.

## Connection creation & execute through connection
After the database instance has been created, users are expected to create a connection and issue queries through the connection. Connection can be created by `gdb.connection(db)`.

Available APIs:
### 1. *PyConnection(PyDatabase, num_threads = 0): creates a connection to PyDatabase*
  - PyDatabase: the database that you want to connect to.
  - num_threads: the max number of threads to execute a query. If the num_threads is not given, the system will set num_threads to the max number of threads in the system.
  - example:
  ```
  # create a connection to Kùzu, and set thread number to 2
  gdb.connection(db, 2)
  ```
### 2. *PyConnection.set_max_threads_for_exec(num_threads): set the max number of threads for execution to num_threads*
  - num_threads: the max number of threads for execution that you want set to.
  - example:
  ```
  # set the max num threads for execution to 3:
  con->set_max_num_threads_for_exec(3)
  ```

### 3. *PyConnection.execute(query, parameters): executes the query and returns a PyQueryResult*
  - query: query that you want to execute on Kùzu
  - parameters: parameters for the query (TODO: explain what types of parameter is supported in the system)
  - example:
  ```
  # query the number of users in database
  conn->execute("MATCH (:User) return count(*)")
  ```
  
## QueryResult parsing
When you issue a query to the database through the `con->execute(query)` API, you are expected to get a queryResult which contains all result tuples for the given query.
We provide variety of APIs for user to fetch the queryResult as their desired format.

Available APIs:
### 1. *PyQueryResult.hasNext(): returns whether there are tuples to fetch from the PyQueryResult.*
  - Note: Often used together with getNext(). Users are expected to always call hasNext() before calling getNext().
### 2. *PyQueryResult.getNext(): fetchs the next tuple from PyQueryResult.*
### 3. *PyQueryResult.writeToCSV(fileName): write the queryResult to the given csv file.*
### 4. *PyQueryResult.close(): destroys the PyQueryResult object in Python.*
  - Note: Python doesn't guarantee objects to be deleted in the reverse order of declaration. Therefore, users are expected to call close() to ensure that the QueryResult is destroyed before database.
### 5. *PyQueryResult.getAsDF(): returns the queryResult in the Panda DataFrame format.*
  - Note: Since this API returns a panda dataframe object, the user should install numpy and panda.
 
  

        
TODO: Fill 5C++ APIs

TODO: In the examples show an example of configuration parameters, such as bufferPoolSize. 
