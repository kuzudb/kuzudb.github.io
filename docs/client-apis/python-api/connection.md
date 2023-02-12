---
layout: default
title: Connection & Querying
parent: Python api
grand_parent: Client api
nav_order: 42
---

<a id="connection.Connection"></a>

## Connection
After the database instance has been created, users are expected to create a connection and issue queries through the connection.

```python
class Connection()
```

### Available APIs:
-------
- `set_max_threads_for_exec(num_threads)` Set the maximum number of threads for executing queries.

- `execute(query, parameters=[])` Execute a query.

----

<a id="connection.Connection.__init__"></a>

**\_\_init\_\_**

```python
def __init__(database, num_threads=0)
```

**Parameters**
- `database : _kuzu.Database` Database to connect to.

- `num_threads : int` Maximum number of threads to use for executing queries.

----

<a id="connection.Connection.set_max_threads_for_exec"></a>

**set\_max\_threads\_for\_exec**

```python
def set_max_threads_for_exec(num_threads)
```

Set the maximum number of threads for executing queries.

**Parameters**
- `num_threads : int` Maximum number of threads to use for executing queries.

----

<a id="connection.Connection.execute"></a>

**execute**

```python
def execute(query, parameters=[])
```

Execute a query.

**Parameters**
- `query : str` Query to execute.

- `parameters : list` Parameters for the query.

**Returns**
- `QueryResult` Query result.
