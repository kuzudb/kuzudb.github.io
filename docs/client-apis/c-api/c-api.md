---
layout: default
title: C-API
parent: c-api
grand_parent: Client APIs
nav_order: 41
---

# class:
---

## class kuzu_connection

kuzu_connection is used to interact with a Database instance. Each connection is thread-safe. Multiple connections can connect to the same Database instance in a multi-threaded environment.  

---

## class kuzu_database

kuzu_database manages all database components.  

---

## class kuzu_date_t

kuzu internal date type which stores the number of days since 1970-01-01 00:00:00 UTC.  

---

## class kuzu_flat_tuple

kuzu_flat_tuple stores a vector of values.  

---

## class kuzu_internal_id_t

kuzu internal internal_id type which stores the table_id and offset of a node/rel.  

---

## class kuzu_interval_t

kuzu internal interval type which stores the months, days and microseconds.  

---

## class kuzu_logical_type

kuzu_logical_type is the kuzu internal representation of data types.  

---

## class kuzu_node_val

kuzu internal node type which stores the nodeID, label and properties of a node in graph.  

---

## class kuzu_prepared_statement

kuzu_prepared_statement is a parameterized query which can avoid planning the same query for repeated execution.  

---

## class kuzu_query_result

kuzu_query_result stores the result of a query.  

---

## class kuzu_query_summary

kuzu_query_summary stores the execution time, plan, compiling time and query options of a query.  

---

## class kuzu_rel_val

kuzu internal rel type which stores the relID, src/dst nodes and properties of a rel in graph.  

---

## class kuzu_timestamp_t

kuzu internal timestamp type which stores the number of microseconds since 1970-01-01 00:00:00 UTC.  

---

## class kuzu_value

kuzu_value is used to represent a value with any kuzu internal dataType.  

---
# Functions:
---

```c++
KUZU_C_API void kuzu_connection_begin_read_only_transaction (kuzu_connection * connection)
```
Begins a read-only transaction in the given connection. 

**Parameters**
- `connection` The connection instance to begin read-only transaction. 

---

```c++
KUZU_C_API void kuzu_connection_begin_write_transaction (kuzu_connection * connection)
```
Begins a write transaction in the given connection. 

**Parameters**
- `connection` The connection instance to begin write transaction. 

---

```c++
KUZU_C_API void kuzu_connection_commit (kuzu_connection * connection)
```
Commits the current transaction. 

**Parameters**
- `connection` The connection instance to commit transaction. 

---

```c++
KUZU_C_API void kuzu_connection_destroy (kuzu_connection * connection)
```
Destroys the connection instance and frees the allocated memory. 

**Parameters**
- `connection` The connection instance to destroy. 

---

```c++
KUZU_C_API kuzu_query_result* kuzu_connection_execute (kuzu_connection * connection, kuzu_prepared_statement * prepared_statement)
```
Executes the prepared_statement using connection. 

**Parameters**
- `connection` The connection instance to execute the prepared_statement. 
- `prepared_statement` The prepared statement to execute. 

---

```c++
KUZU_C_API uint64_t kuzu_connection_get_max_num_thread_for_exec (kuzu_connection * connection)
```
Returns the maximum number of threads of the connection to use for executing queries. 

**Parameters**
- `connection` The connection instance to return max number of threads for execution. 

---

```c++
KUZU_C_API char* kuzu_connection_get_node_property_names (kuzu_connection * connection, const char * table_name)
```
Returns all property names of the given node table. 

**Parameters**
- `connection` The connection instance to return all property names. 
- `table_name` The table name to return all property names. 

---

```c++
KUZU_C_API char* kuzu_connection_get_node_table_names (kuzu_connection * connection)
```
Returns all node table names of the database. 

**Parameters**
- `connection` The connection instance to return all node table names. 

---

```c++
KUZU_C_API char* kuzu_connection_get_rel_property_names (kuzu_connection * connection, const char * table_name)
```
Returns all property names of the given rel table. 

**Parameters**
- `connection` The connection instance to return all property names. 
- `table_name` The table name to return all property names. 

---

```c++
KUZU_C_API char* kuzu_connection_get_rel_table_names (kuzu_connection * connection)
```
Returns all rel table names of the database. 

**Parameters**
- `connection` The connection instance to return all rel table names. 

---

```c++
KUZU_C_API kuzu_connection* kuzu_connection_init (kuzu_database * database)
```
Allocates memory and creates a connection to the database. Caller is responsible for calling kuzu_connection_destroy() to release the allocated memory. 

**Parameters**
- `database` The database instance to connect to. 

**Returns:**
- The connection instance. 

---

```c++
KUZU_C_API void kuzu_connection_interrupt (kuzu_connection * connection)
```
Interrupts the current query execution in the connection. 

**Parameters**
- `connection` The connection instance to interrupt. 

---

```c++
KUZU_C_API kuzu_prepared_statement* kuzu_connection_prepare (kuzu_connection * connection, const char * query)
```
Prepares the given query and returns the prepared statement. 

**Parameters**
- `connection` The connection instance to prepare the query. 
- `query` The query to prepare. 

---

```c++
KUZU_C_API kuzu_query_result* kuzu_connection_query (kuzu_connection * connection, const char * query)
```
Executes the given query and returns the result. 

**Parameters**
- `connection` The connection instance to execute the query. 
- `query` The query to execute. 

**Returns:**
- the result of the query. 

---

```c++
KUZU_C_API void kuzu_connection_rollback (kuzu_connection * connection)
```
Rollbacks the current transaction. 

**Parameters**
- `connection` The connection instance to rollback transaction. 

---

```c++
KUZU_C_API void kuzu_connection_set_max_num_thread_for_exec (kuzu_connection * connection, uint64_t num_threads)
```
Sets the maximum number of threads to use for executing queries. 

**Parameters**
- `connection` The connection instance to set max number of threads for execution. 
- `num_threads` The maximum number of threads to use for executing queries. 

---

```c++
KUZU_C_API void kuzu_connection_set_query_timeout (kuzu_connection * connection, uint64_t timeout_in_ms)
```
Sets query timeout value in milliseconds for the connection. 

**Parameters**
- `connection` The connection instance to set query timeout value. 
- `timeout_in_ms` The timeout value in milliseconds. 

---

```c++
KUZU_C_API kuzu_logical_type* kuzu_data_type_clone (kuzu_logical_type * data_type)
```
Creates a new data type instance by cloning the given data type instance. 

**Parameters**
- `data_type` The data type instance to clone. 

---

```c++
KUZU_C_API kuzu_logical_type* kuzu_data_type_create (kuzu_data_type_id id, kuzu_logical_type * child_type, uint64_t fixed_num_elements_in_list)
```
Creates a data type instance with the given id, childType and fixed_num_elements_in_list. Caller is responsible for destroying the returned data type instance. 

**Parameters**
- `id` The enum type id of the datatype to create. 
- `child_type` The child type of the datatype to create(only used for nested dataTypes). 
- `fixed_num_elements_in_list` The fixed number of elements in the list(only used for FIXED_LIST). 

---

```c++
KUZU_C_API void kuzu_data_type_destroy (kuzu_logical_type * data_type)
```
Destroys the given data type instance. 

**Parameters**
- `data_type` The data type instance to destroy. 

---

```c++
KUZU_C_API bool kuzu_data_type_equals (kuzu_logical_type * data_type1, kuzu_logical_type * data_type2)
```
Returns true if the given data type is equal to the other data type, false otherwise. 

**Parameters**
- `data_type1` The first data type instance to compare. 
- `data_type2` The second data type instance to compare. 

---

```c++
KUZU_C_API uint64_t kuzu_data_type_get_fixed_num_elements_in_list (kuzu_logical_type * data_type)
```
Returns the number of elements per list for fixedSizeList. 

**Parameters**
- `data_type` The data type instance to return. 

---

```c++
KUZU_C_API kuzu_data_type_id kuzu_data_type_get_id (kuzu_logical_type * data_type)
```
Returns the enum type id of the given data type. 

**Parameters**
- `data_type` The data type instance to return. 

---

```c++
KUZU_C_API void kuzu_database_destroy (kuzu_database * database)
```
Destroys the kuzu database instance and frees the allocated memory. 

**Parameters**
- `database` The database instance to destroy. 

---

```c++
KUZU_C_API kuzu_database* kuzu_database_init (const char * database_path, uint64_t buffer_pool_size)
```
Allocates memory and creates a kuzu database instance at database_path with bufferPoolSize=buffer_pool_size. Caller is responsible for calling kuzu_database_destroy() to release the allocated memory. 

**Parameters**
- `database_path` The path to the database. 
- `buffer_pool_size` The size of the buffer pool in bytes. 

**Returns:**
- The database instance. 

---

```c++
KUZU_C_API void kuzu_database_set_logging_level (const char * logging_level)
```
Sets the logging level of the database. 

**Parameters**
- `logging_level` The logging level to set. Supported logging levels are: 'info', 'debug', 'err'. 

---

```c++
KUZU_C_API void kuzu_flat_tuple_destroy (kuzu_flat_tuple * flat_tuple)
```
Destroys the given flat tuple instance. 

**Parameters**
- `flat_tuple` The flat tuple instance to destroy. 

---

```c++
KUZU_C_API kuzu_value* kuzu_flat_tuple_get_value (kuzu_flat_tuple * flat_tuple, uint64_t index)
```
Returns the value at index of the flat tuple. 

**Parameters**
- `flat_tuple` The flat tuple instance to return. 
- `index` The index of the value to return. 

---

```c++
KUZU_C_API char* kuzu_flat_tuple_to_string (kuzu_flat_tuple * flat_tuple)
```
Converts the flat tuple to a string. 

**Parameters**
- `flat_tuple` The flat tuple instance to convert. 

---

```c++
KUZU_C_API void kuzu_node_val_add_property (kuzu_node_val * node_val, const char * name, kuzu_value * property)
```
Adds the property with name to the given node value. 

**Parameters**
- `node_val` The node value to add to. 
- `name` The name of the property. 
- `property` The property(in value format) to add. 

---

```c++
KUZU_C_API kuzu_node_val* kuzu_node_val_clone (kuzu_node_val * node_val)
```
Creates a new node value from the given node value. 

**Parameters**
- `node_val` The node value to clone. 

---

```c++
KUZU_C_API kuzu_node_val* kuzu_node_val_create (kuzu_internal_id_t id, char * label)
```
Creates a new node value. 

**Parameters**
- `id` The internal id of the node. 
- `label` The label of the node. 

---

```c++
KUZU_C_API void kuzu_node_val_destroy (kuzu_node_val * node_val)
```
Destroys the given node value. 

**Parameters**
- `node_val` The node value to destroy. 

---

```c++
KUZU_C_API kuzu_internal_id_t kuzu_node_val_get_id (kuzu_node_val * node_val)
```
Returns the internal id value of the given node value as internal_id. 

**Parameters**
- `node_val` The node value to return. 

---

```c++
KUZU_C_API kuzu_value* kuzu_node_val_get_id_val (kuzu_node_val * node_val)
```
Returns the internal id value of the given node value as a kuzu value. 

**Parameters**
- `node_val` The node value to return. 

---

```c++
KUZU_C_API char* kuzu_node_val_get_label_name (kuzu_node_val * node_val)
```
Returns the label value of the given node value as string. 

**Parameters**
- `node_val` The node value to return. 

---

```c++
KUZU_C_API kuzu_value* kuzu_node_val_get_label_val (kuzu_node_val * node_val)
```
Returns the label value of the given node value as a label value. 

**Parameters**
- `node_val` The node value to return. 

---

```c++
KUZU_C_API char* kuzu_node_val_get_property_name_at (kuzu_node_val * node_val, uint64_t index)
```
Returns the property name of the given node value at the given index. 

**Parameters**
- `node_val` The node value to return. 
- `index` The index of the property. 

---

```c++
KUZU_C_API uint64_t kuzu_node_val_get_property_size (kuzu_node_val * node_val)
```
Returns the number of properties of the given node value. 

**Parameters**
- `node_val` The node value to return. 

---

```c++
KUZU_C_API kuzu_value* kuzu_node_val_get_property_value_at (kuzu_node_val * node_val, uint64_t index)
```
Returns the property value of the given node value at the given index. 

**Parameters**
- `node_val` The node value to return. 
- `index` The index of the property. 

---

```c++
KUZU_C_API char* kuzu_node_val_to_string (kuzu_node_val * node_val)
```
Converts the given node value to string. 

**Parameters**
- `node_val` The node value to convert. 

---

```c++
KUZU_C_API bool kuzu_prepared_statement_allow_active_transaction (kuzu_prepared_statement * prepared_statement)
```
DDL and COPY statements are automatically wrapped in a transaction and committed. As such, they cannot be part of an active transaction. 

**Returns:**
- the prepared statement is allowed to be part of an active transaction. 

---

```c++
KUZU_C_API void kuzu_prepared_statement_bind_bool (kuzu_prepared_statement * prepared_statement, char * param_name, bool value)
```
Binds the given boolean value to the given parameter name in the prepared statement. 

**Parameters**
- `prepared_statement` The prepared statement instance to bind the value. 
- `param_name` The parameter name to bind the value. 
- `value` The boolean value to bind. 

---

```c++
KUZU_C_API void kuzu_prepared_statement_bind_date (kuzu_prepared_statement * prepared_statement, char * param_name, kuzu_date_t value)
```
Binds the given date value to the given parameter name in the prepared statement. 

**Parameters**
- `prepared_statement` The prepared statement instance to bind the value. 
- `param_name` The parameter name to bind the value. 
- `value` The date value to bind. 

---

```c++
KUZU_C_API void kuzu_prepared_statement_bind_double (kuzu_prepared_statement * prepared_statement, char * param_name, double value)
```
Binds the given double value to the given parameter name in the prepared statement. 

**Parameters**
- `prepared_statement` The prepared statement instance to bind the value. 
- `param_name` The parameter name to bind the value. 
- `value` The double value to bind. 

---

```c++
KUZU_C_API void kuzu_prepared_statement_bind_float (kuzu_prepared_statement * prepared_statement, char * param_name, float value)
```
Binds the given float value to the given parameter name in the prepared statement. 

**Parameters**
- `prepared_statement` The prepared statement instance to bind the value. 
- `param_name` The parameter name to bind the value. 
- `value` The float value to bind. 

---

```c++
KUZU_C_API void kuzu_prepared_statement_bind_int16 (kuzu_prepared_statement * prepared_statement, char * param_name, int16_t value)
```
Binds the given int16_t value to the given parameter name in the prepared statement. 

**Parameters**
- `prepared_statement` The prepared statement instance to bind the value. 
- `param_name` The parameter name to bind the value. 
- `value` The int16_t value to bind. 

---

```c++
KUZU_C_API void kuzu_prepared_statement_bind_int32 (kuzu_prepared_statement * prepared_statement, char * param_name, int32_t value)
```
Binds the given int32_t value to the given parameter name in the prepared statement. 

**Parameters**
- `prepared_statement` The prepared statement instance to bind the value. 
- `param_name` The parameter name to bind the value. 
- `value` The int32_t value to bind. 

---

```c++
KUZU_C_API void kuzu_prepared_statement_bind_int64 (kuzu_prepared_statement * prepared_statement, char * param_name, int64_t value)
```
Binds the given int64_t value to the given parameter name in the prepared statement. 

**Parameters**
- `prepared_statement` The prepared statement instance to bind the value. 
- `param_name` The parameter name to bind the value. 
- `value` The int64_t value to bind. 

---

```c++
KUZU_C_API void kuzu_prepared_statement_bind_interval (kuzu_prepared_statement * prepared_statement, char * param_name, kuzu_interval_t value)
```
Binds the given interval value to the given parameter name in the prepared statement. 

**Parameters**
- `prepared_statement` The prepared statement instance to bind the value. 
- `param_name` The parameter name to bind the value. 
- `value` The interval value to bind. 

---

```c++
KUZU_C_API void kuzu_prepared_statement_bind_string (kuzu_prepared_statement * prepared_statement, char * param_name, char * value)
```
Binds the given string value to the given parameter name in the prepared statement. 

**Parameters**
- `prepared_statement` The prepared statement instance to bind the value. 
- `param_name` The parameter name to bind the value. 
- `value` The string value to bind. 

---

```c++
KUZU_C_API void kuzu_prepared_statement_bind_timestamp (kuzu_prepared_statement * prepared_statement, char * param_name, kuzu_timestamp_t value)
```
Binds the given timestamp value to the given parameter name in the prepared statement. 

**Parameters**
- `prepared_statement` The prepared statement instance to bind the value. 
- `param_name` The parameter name to bind the value. 
- `value` The timestamp value to bind. 

---

```c++
KUZU_C_API void kuzu_prepared_statement_bind_value (kuzu_prepared_statement * prepared_statement, char * param_name, kuzu_value * value)
```
Binds the given kuzu value to the given parameter name in the prepared statement. 

**Parameters**
- `prepared_statement` The prepared statement instance to bind the value. 
- `param_name` The parameter name to bind the value. 
- `value` The kuzu value to bind. 

---

```c++
KUZU_C_API void kuzu_prepared_statement_destroy (kuzu_prepared_statement * prepared_statement)
```
Destroys the prepared statement instance and frees the allocated memory. 

**Parameters**
- `prepared_statement` The prepared statement instance to destroy. 

---

```c++
KUZU_C_API char* kuzu_prepared_statement_get_error_message (kuzu_prepared_statement * prepared_statement)
```

**Returns:**
- the error message if the statement is not prepared successfully. 

---

```c++
KUZU_C_API bool kuzu_prepared_statement_is_success (kuzu_prepared_statement * prepared_statement)
```

**Returns:**
- the query is prepared successfully or not. 

---

```c++
KUZU_C_API void kuzu_query_result_destroy (kuzu_query_result * query_result)
```
Destroys the given query result instance. 

**Parameters**
- `query_result` The query result instance to destroy. 

---

```c++
KUZU_C_API kuzu_logical_type* kuzu_query_result_get_column_data_type (kuzu_query_result * query_result, uint64_t index)
```
Returns the data type of the column at the given index. 

**Parameters**
- `query_result` The query result instance to return. 
- `index` The index of the column to return data type. 

---

```c++
KUZU_C_API char* kuzu_query_result_get_column_name (kuzu_query_result * query_result, uint64_t index)
```
Returns the column name at the given index. 

**Parameters**
- `query_result` The query result instance to return. 
- `index` The index of the column to return name. 

---

```c++
KUZU_C_API char* kuzu_query_result_get_error_message (kuzu_query_result * query_result)
```
Returns the error message if the query is failed. 

**Parameters**
- `query_result` The query result instance to check and return error message. 

---

```c++
KUZU_C_API kuzu_flat_tuple* kuzu_query_result_get_next (kuzu_query_result * query_result)
```
Returns the next tuple in the query result. Throws an exception if there is no more tuple. 

**Parameters**
- `query_result` The query result instance to return. 

---

```c++
KUZU_C_API uint64_t kuzu_query_result_get_num_columns (kuzu_query_result * query_result)
```
Returns the number of columns in the query result. 

**Parameters**
- `query_result` The query result instance to return. 

---

```c++
KUZU_C_API uint64_t kuzu_query_result_get_num_tuples (kuzu_query_result * query_result)
```
Returns the number of tuples in the query result. 

**Parameters**
- `query_result` The query result instance to return. 

---

```c++
KUZU_C_API kuzu_query_summary* kuzu_query_result_get_query_summary (kuzu_query_result * query_result)
```
Returns the query summary of the query result. 

**Parameters**
- `query_result` The query result instance to return. 

---

```c++
KUZU_C_API bool kuzu_query_result_has_next (kuzu_query_result * query_result)
```
Returns true if we have not consumed all tuples in the query result, false otherwise. 

**Parameters**
- `query_result` The query result instance to check. 

---

```c++
KUZU_C_API bool kuzu_query_result_is_success (kuzu_query_result * query_result)
```
Returns true if the query is executed successful, false otherwise. 

**Parameters**
- `query_result` The query result instance to check. 

---

```c++
KUZU_C_API void kuzu_query_result_reset_iterator (kuzu_query_result * query_result)
```
Resets the iterator of the query result to the beginning of the query result. 

**Parameters**
- `query_result` The query result instance to reset iterator. 

---

```c++
KUZU_C_API char* kuzu_query_result_to_string (kuzu_query_result * query_result)
```
Returns the query result as a string. 

**Parameters**
- `query_result` The query result instance to return. 

---

```c++
KUZU_C_API void kuzu_query_result_write_to_csv (kuzu_query_result * query_result, const char * file_path, char delimiter, char escape_char, char new_line)
```
Writes the query result to the given file path as CSV. 

**Parameters**
- `query_result` The query result instance to write. 
- `file_path` The file path to write the query result. 
- `delimiter` The delimiter character to use when writing csv file. 
- `escape_char` The escape character to use when writing csv file. 
- `new_line` The new line character to use when writing csv file. 

---

```c++
KUZU_C_API void kuzu_query_summary_destroy (kuzu_query_summary * query_summary)
```
Destroys the given query summary. 

**Parameters**
- `query_summary` The query summary to destroy. 

---

```c++
KUZU_C_API double kuzu_query_summary_get_compiling_time (kuzu_query_summary * query_summary)
```
Returns the compilation time of the given query summary. 

**Parameters**
- `query_summary` The query summary to get compilation time. 

---

```c++
KUZU_C_API double kuzu_query_summary_get_execution_time (kuzu_query_summary * query_summary)
```
Returns the execution time of the given query summary. 

**Parameters**
- `query_summary` The query summary to get execution time. 

---

```c++
KUZU_C_API void kuzu_rel_val_add_property (kuzu_rel_val * rel_val, char * name, kuzu_value * property)
```
Adds the property with name to the given rel value. 

**Parameters**
- `rel_val` The rel value to add to. 
- `name` The name of the property. 
- `property` The property(in value format) to add. 

---

```c++
KUZU_C_API kuzu_rel_val* kuzu_rel_val_clone (kuzu_rel_val * rel_val)
```
Creates a new rel value from the given rel value. 

**Parameters**
- `rel_val` The rel value to clone. 

---

```c++
KUZU_C_API kuzu_rel_val* kuzu_rel_val_create (kuzu_internal_id_t src_id, kuzu_internal_id_t dst_id, char * label)
```
Creates a new rel value. Caller is responsible for destroying the rel value. 

**Parameters**
- `src_id` The internal id of the source node. 
- `dst_id` The internal id of the destination node. 
- `label` The label of the rel. 

---

```c++
KUZU_C_API void kuzu_rel_val_destroy (kuzu_rel_val * rel_val)
```
Destroys the given rel value. 

**Parameters**
- `rel_val` The rel value to destroy. 

---

```c++
KUZU_C_API kuzu_internal_id_t kuzu_rel_val_get_dst_id (kuzu_rel_val * rel_val)
```
Returns the internal id value of the destination node of the given rel value. 

**Parameters**
- `rel_val` The rel value to return. 

---

```c++
KUZU_C_API kuzu_value* kuzu_rel_val_get_dst_id_val (kuzu_rel_val * rel_val)
```
Returns the internal id value of the destination node of the given rel value as a kuzu value. 

**Parameters**
- `rel_val` The rel value to return. 

---

```c++
KUZU_C_API char* kuzu_rel_val_get_label_name (kuzu_rel_val * rel_val)
```
Returns the label of the given rel value. 

**Parameters**
- `rel_val` The rel value to return. 

---

```c++
KUZU_C_API char* kuzu_rel_val_get_property_name_at (kuzu_rel_val * rel_val, uint64_t index)
```
Returns the property name of the given rel value at the given index. 

**Parameters**
- `rel_val` The rel value to return. 
- `index` The index of the property. 

---

```c++
KUZU_C_API uint64_t kuzu_rel_val_get_property_size (kuzu_rel_val * rel_val)
```
Returns the number of properties of the given rel value. 

**Parameters**
- `rel_val` The rel value to return. 

---

```c++
KUZU_C_API kuzu_value* kuzu_rel_val_get_property_value_at (kuzu_rel_val * rel_val, uint64_t index)
```
Returns the property of the given rel value at the given index as kuzu value. 

**Parameters**
- `rel_val` The rel value to return. 
- `index` The index of the property. 

---

```c++
KUZU_C_API kuzu_internal_id_t kuzu_rel_val_get_src_id (kuzu_rel_val * rel_val)
```
Returns the internal id value of the source node of the given rel value. 

**Parameters**
- `rel_val` The rel value to return. 

---

```c++
KUZU_C_API kuzu_value* kuzu_rel_val_get_src_id_val (kuzu_rel_val * rel_val)
```
Returns the internal id value of the source node of the given rel value as a kuzu value. 

**Parameters**
- `rel_val` The rel value to return. 

---

```c++
KUZU_C_API char* kuzu_rel_val_to_string (kuzu_rel_val * rel_val)
```
Converts the given rel value to string. 

**Parameters**
- `rel_val` The rel value to convert. 

---

```c++
KUZU_C_API kuzu_value* kuzu_value_clone (kuzu_value * value)
```
Creates a new value based on the given value. Caller is responsible for destroying the returned value. 

**Parameters**
- `value` The value to create from. 

---

```c++
KUZU_C_API void kuzu_value_copy (kuzu_value * value, kuzu_value * other)
```
Copies the other value to the value. 

**Parameters**
- `value` The value to copy to. 
- `other` The value to copy from. 

---

```c++
KUZU_C_API kuzu_value* kuzu_value_create_bool (bool val_)
```
Creates a value with boolean type and the given bool value. Caller is responsible for destroying the returned value. 

**Parameters**
- `val_` The bool value of the value to create. 

---

```c++
KUZU_C_API kuzu_value* kuzu_value_create_date (kuzu_date_t val_)
```
Creates a value with date type and the given date value. Caller is responsible for destroying the returned value. 

**Parameters**
- `val_` The date value of the value to create. 

---

```c++
KUZU_C_API kuzu_value* kuzu_value_create_default (kuzu_logical_type * data_type)
```
Creates a value of the given data type with default non-NULL value. Caller is responsible for destroying the returned value. 

**Parameters**
- `data_type` The data type of the value to create. 

---

```c++
KUZU_C_API kuzu_value* kuzu_value_create_double (double val_)
```
Creates a value with double type and the given double value. Caller is responsible for destroying the returned value. 

**Parameters**
- `val_` The double value of the value to create. 

---

```c++
KUZU_C_API kuzu_value* kuzu_value_create_float (float val_)
```
Creates a value with float type and the given float value. Caller is responsible for destroying the returned value. 

**Parameters**
- `val_` The float value of the value to create. 

---

```c++
KUZU_C_API kuzu_value* kuzu_value_create_int16 (int16_t val_)
```
Creates a value with int16 type and the given int16 value. Caller is responsible for destroying the returned value. 

**Parameters**
- `val_` The int16 value of the value to create. 

---

```c++
KUZU_C_API kuzu_value* kuzu_value_create_int32 (int32_t val_)
```
Creates a value with int32 type and the given int32 value. Caller is responsible for destroying the returned value. 

**Parameters**
- `val_` The int32 value of the value to create. 

---

```c++
KUZU_C_API kuzu_value* kuzu_value_create_int64 (int64_t val_)
```
Creates a value with int64 type and the given int64 value. Caller is responsible for destroying the returned value. 

**Parameters**
- `val_` The int64 value of the value to create. 

---

```c++
KUZU_C_API kuzu_value* kuzu_value_create_internal_id (kuzu_internal_id_t val_)
```
Creates a value with internal_id type and the given internal_id value. Caller is responsible for destroying the returned value. 

**Parameters**
- `val_` The internal_id value of the value to create. 

---

```c++
KUZU_C_API kuzu_value* kuzu_value_create_interval (kuzu_interval_t val_)
```
Creates a value with interval type and the given interval value. Caller is responsible for destroying the returned value. 

**Parameters**
- `val_` The interval value of the value to create. 

---

```c++
KUZU_C_API kuzu_value* kuzu_value_create_node_val (kuzu_node_val * val_)
```
Creates a value with nodeVal type and the given nodeVal value. Caller is responsible for destroying the returned value. 

**Parameters**
- `val_` The nodeVal value of the value to create. 

---

```c++
KUZU_C_API kuzu_value* kuzu_value_create_null ()
```
Creates a NULL value of ANY type. Caller is responsible for destroying the returned value. 

---

```c++
KUZU_C_API kuzu_value* kuzu_value_create_null_with_data_type (kuzu_logical_type * data_type)
```
Creates a value of the given data type. Caller is responsible for destroying the returned value. 

**Parameters**
- `data_type` The data type of the value to create. 

---

```c++
KUZU_C_API kuzu_value* kuzu_value_create_rel_val (kuzu_rel_val * val_)
```
Creates a value with relVal type and the given relVal value. Caller is responsible for destroying the returned value. 

**Parameters**
- `val_` The relVal value of the value to create. 

---

```c++
KUZU_C_API kuzu_value* kuzu_value_create_string (char * val_)
```
Creates a value with string type and the given string value. Caller is responsible for destroying the returned value. 

**Parameters**
- `val_` The string value of the value to create. 

---

```c++
KUZU_C_API kuzu_value* kuzu_value_create_timestamp (kuzu_timestamp_t val_)
```
Creates a value with timestamp type and the given timestamp value. Caller is responsible for destroying the returned value. 

**Parameters**
- `val_` The timestamp value of the value to create. 

---

```c++
KUZU_C_API void kuzu_value_destroy (kuzu_value * value)
```
Destroys the value. 

**Parameters**
- `value` The value to destroy. 

---

```c++
KUZU_C_API bool kuzu_value_get_bool (kuzu_value * value)
```
Returns the boolean value of the given value. The value must be of type BOOL. 

**Parameters**
- `value` The value to return. 

---

```c++
KUZU_C_API kuzu_logical_type* kuzu_value_get_data_type (kuzu_value * value)
```
Returns internal type of the given value. 

**Parameters**
- `value` The value to return. 

---

```c++
KUZU_C_API kuzu_date_t kuzu_value_get_date (kuzu_value * value)
```
Returns the date value of the given value. The value must be of type DATE. 

**Parameters**
- `value` The value to return. 

---

```c++
KUZU_C_API double kuzu_value_get_double (kuzu_value * value)
```
Returns the double value of the given value. The value must be of type DOUBLE. 

**Parameters**
- `value` The value to return. 

---

```c++
KUZU_C_API float kuzu_value_get_float (kuzu_value * value)
```
Returns the float value of the given value. The value must be of type FLOAT. 

**Parameters**
- `value` The value to return. 

---

```c++
KUZU_C_API int16_t kuzu_value_get_int16 (kuzu_value * value)
```
Returns the int16 value of the given value. The value must be of type INT16. 

**Parameters**
- `value` The value to return. 

---

```c++
KUZU_C_API int32_t kuzu_value_get_int32 (kuzu_value * value)
```
Returns the int32 value of the given value. The value must be of type INT32. 

**Parameters**
- `value` The value to return. 

---

```c++
KUZU_C_API int64_t kuzu_value_get_int64 (kuzu_value * value)
```
Returns the int64 value of the given value. The value must be of type INT64. 

**Parameters**
- `value` The value to return. 

---

```c++
KUZU_C_API kuzu_internal_id_t kuzu_value_get_internal_id (kuzu_value * value)
```
Returns the internal id value of the given value. The value must be of type INTERNAL_ID. 

**Parameters**
- `value` The value to return. 

---

```c++
KUZU_C_API kuzu_interval_t kuzu_value_get_interval (kuzu_value * value)
```
Returns the interval value of the given value. The value must be of type INTERVAL. 

**Parameters**
- `value` The value to return. 

---

```c++
KUZU_C_API kuzu_value* kuzu_value_get_list_element (kuzu_value * value, uint64_t index)
```
Returns the element at index of the given value. The value must be of type VAR_LIST. 

**Parameters**
- `value` The VAR_LIST value to return. 
- `index` The index of the element to return. 

---

```c++
KUZU_C_API uint64_t kuzu_value_get_list_size (kuzu_value * value)
```
Returns the number of elements per list of the given value. The value must be of type FIXED_LIST. 

**Parameters**
- `value` The FIXED_LIST value to get list size. 

---

```c++
KUZU_C_API kuzu_node_val* kuzu_value_get_node_val (kuzu_value * value)
```
Returns the node value of the given value. The value must be of type NODE. 

**Parameters**
- `value` The value to return. 

---

```c++
KUZU_C_API kuzu_rel_val* kuzu_value_get_rel_val (kuzu_value * value)
```
Returns the rel value of the given value. The value must be of type REL. 

**Parameters**
- `value` The value to return. 

---

```c++
KUZU_C_API char* kuzu_value_get_string (kuzu_value * value)
```
Returns the string value of the given value. The value must be of type STRING. 

**Parameters**
- `value` The value to return. 

---

```c++
KUZU_C_API char* kuzu_value_get_struct_field_name (kuzu_value * value, uint64_t index)
```
Returns the field name at index of the given struct value. The value must be of type STRUCT. 

**Parameters**
- `value` The STRUCT value to get field name. 
- `index` The index of the field name to return. 

---

```c++
KUZU_C_API kuzu_value* kuzu_value_get_struct_field_value (kuzu_value * value, uint64_t index)
```
Returns the field value at index of the given struct value. The value must be of type STRUCT. 

**Parameters**
- `value` The STRUCT value to get field value. 
- `index` The index of the field value to return. 

---

```c++
KUZU_C_API uint64_t kuzu_value_get_struct_num_fields (kuzu_value * value)
```
Returns the number of fields of the given struct value. The value must be of type STRUCT. 

**Parameters**
- `value` The STRUCT value to get number of fields. 

---

```c++
KUZU_C_API kuzu_timestamp_t kuzu_value_get_timestamp (kuzu_value * value)
```
Returns the timestamp value of the given value. The value must be of type TIMESTAMP. 

**Parameters**
- `value` The value to return. 

---

```c++
KUZU_C_API bool kuzu_value_is_null (kuzu_value * value)
```
Returns true if the given value is NULL, false otherwise. 

**Parameters**
- `value` The value instance to check. 

---

```c++
KUZU_C_API void kuzu_value_set_null (kuzu_value * value, bool is_null)
```
Sets the given value to NULL or not. 

**Parameters**
- `value` The value instance to set. 
- `is_null` True if sets the value to NULL, false otherwise. 

---

```c++
KUZU_C_API char* kuzu_value_to_string (kuzu_value * value)
```
Converts the given value to string. 

**Parameters**
- `value` The value to convert. 

---
