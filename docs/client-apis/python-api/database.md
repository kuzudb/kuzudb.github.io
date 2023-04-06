---
layout: default
title: Database
parent: Python api
grand_parent: Client api
nav_order: 41
---

<a id="database.Database"></a>

## Database
The database class is used to create and manage the Kùzu database instance.

```python
class Database()
```

### Available APIs:
* [\_\_init\_\_](#database.Database.__init__)
* [resize\_buffer\_manager](#database.Database.resize_buffer_manager) Resize the mamimum size of buffer pool.

----

<a id="database.Database.__init__"></a>

**\_\_init\_\_**

```python
def __init__(database_path, buffer_pool_size)
```

**Parameters**
- `database_path : _kuzu.Database` The path to database files

- `buffer_pool_size : int` The maximum size of buffer pool in bytes (Optional). Default to 80% of system memory.
