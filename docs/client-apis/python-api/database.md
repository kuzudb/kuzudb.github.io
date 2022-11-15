---
layout: default
title: Database
parent: Python api
grand_parent: Client api
nav_order: 41
---
## Database
The database class is used to create and manage the Kùzu database instance.

### Available APIs:
#### `__init__(self: kuzu._kuzu.database, database_path: str, buffer_pool_size: int = 0) -> None`
Returns a Kùzu database instance.
  - **database_path**: required parameter the path to database file. 
  - **buffer_pool_size**: optional parameter. the size of buffer pool in bytes. it defaults to 1 GB if not set.
Example: 
```
db = kuzu.database('./test')
```

#### `resize_buffer_manager(self: kuzu._kuzu.database, new_size: int) -> None`
Resize buffer manager to a newSize.
  - **new_size**: new buffer pool size (in bytes).
