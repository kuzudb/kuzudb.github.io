---
layout: default
title: Query result
parent: Python api
grand_parent: Client api
nav_order: 43
---

## QueryResult
When you issue a query to the database through the `con->execute(query)` API, you are expected to get a queryResult which contains all result tuples for the given query.
We provide variety of APIs for user to fetch the queryResult as their desired format.

```python
class QueryResult()
```

### Available APIs:
-------
- `check_for_query_result_close()` Check if the query result is closed and raise an exception if it is.

- `has_next()` Check if there are more rows in the query result.

- `get_next()` Get the next row in the query result.

- `write_to_csv(filename, delimiter=',', escape_character='"', newline='\n')` Write the query result to a CSV file.

- `close()` Close the query result.

- `get_as_df()` Get the query result as a Pandas DataFrame.

- `get_as_arrow(chunk_size)` Get the query result as a PyArrow Table.

- `get_column_data_types()` Get the data types of the columns in the query result.

- `get_column_names()` Get the names of the columns in the query result.

- `reset_iterator()` Reset the iterator of the query result.

- `get_as_networkx(directed=True)` Get the query result as a NetworkX graph. By default, it returns a directed graph.

- `get_as_torch_geometric()` Get the query result as a PyTorch Geometric Data object.

----

**\_\_init\_\_**

```python
def __init__(connection, query_result)
```

**Parameters**
- `connection : _kuzu.Connection` Connection to the database.

- `query_result : _kuzu.QueryResult` Query result.

----

**check\_for\_query\_result\_close**

```python
def check_for_query_result_close()
```

Check if the query result is closed and raise an exception if it is.

**Raises**
- `Exception` If the query result is closed.

----

**has\_next**

```python
def has_next()
```

Check if there are more rows in the query result.

**Returns**
- `bool` True if there are more rows in the query result, False otherwise.

----

**get\_next**

```python
def get_next()
```

Get the next row in the query result.

**Returns**
- `list` Next row in the query result.

----

**write\_to\_csv**

```python
def write_to_csv(filename, delimiter=',', escape_character='"', newline='\n')
```

Write the query result to a CSV file.

**Parameters**
- `filename : str` Name of the CSV file to write to.

- `delimiter : str` Delimiter to use in the CSV file. Defaults to ','.

- `escape_character : str` Escape character to use in the CSV file. Defaults to '"'.

- `newline : str` Newline character to use in the CSV file. Defaults to '\n'.

----

**close**

```python
def close()
```

Close the query result.

----

**get\_as\_df**

```python
def get_as_df()
```

Get the query result as a Pandas DataFrame.

**Returns**
- `pandas.DataFrame` Query result as a Pandas DataFrame.

----

**get\_as\_arrow**

```python
def get_as_arrow(chunk_size)
```

Get the query result as a PyArrow Table.

**Parameters**
- `chunk_size : int` Number of rows to include in each chunk.

**Returns**
- `pyarrow.Table` Query result as a PyArrow Table.

----

**get\_column\_data\_types**

```python
def get_column_data_types()
```

Get the data types of the columns in the query result.

**Returns**
- `list` Data types of the columns in the query result.

----

**get\_column\_names**

```python
def get_column_names()
```

Get the names of the columns in the query result.

**Returns**
- `list` Names of the columns in the query result.

----

**reset\_iterator**

```python
def reset_iterator()
```

Reset the iterator of the query result.

----

**get\_as\_networkx**

```python
def get_as_networkx(directed=True)
```

Get the query result as a NetworkX graph.

**Parameters**
- `directed : bool` Whether the graph should be directed. Defaults to True.

**Returns**
- `networkx.DiGraph or networkx.Graph` Query result as a NetworkX graph.

----

**get\_as\_torch\_geometric**

```python
def get_as_torch_geometric()
```

Get the query result as a PyTorch Geometric graph.

**Returns**
- `torch_geometric.data.Data or torch_geometric.data.HeteroData` Query result as a PyTorch Geometric graph.
