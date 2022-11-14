---
layout: default
title: Database
parent: Cpp api
grand_parent: Client api
nav_order: 41
---

# Database

To use Kùzu, you need to first create a `Database` instance.
The `Database` class requires: 
 1. a `DatabaseConfig`, which sets  the path to the directory of your database;
 2. a `SystemConfig` object, which sets the size of your buffer pool.

Both constructors of Database require the DatabaseConfig, so this is mandatory.
One of the constructors does not require the SystemConfig and uses a default SystemConfig,
which sets the buffer pool size to 16MB by default.
We recommend using the second constructor of Database that also requires
the `SystemConfig` so you can set a larger buffer pool size (e.g., several GBs).
For example:
```
DatabaseConfig databaseConfig("testdb");
SystemConfig systemConfig(1ull << 31 /* set buffer manager size to 2GB */);
Database database(databaseConfig, systemConfig);
...
```

Also: Do not construct multiple Database instances either within the same process or 
using multiple separate processes unless you will only issue read-only queries
through the connections you create from these these Database instances.
See [this note](../overview.md#note-on-connecting-to-the-same-database-directory-from-multiple-database-instances) for more details.


## Available APIs

### DatabaseConfig(std::string databasePath, bool inMemoryMode = false)
---
Create a database configutation.
- databasePath: path to database files. If the path doesn't not exist, a new database will be created at the given path.
- inMemoryMode: is the database should be created as an in-memory database. Kùzu is a disk-based system. Setting
  a database as in memory when constructing DatabaseConfig only ensures that the pages of your database files will be
  kept in the system's buffer pool.

### SystemConfig(uint64_t bufferPoolSize = StorageConfig::DEFAULT_BUFFER_POOL_SIZE)
---
Create a system configuration
- bufferPoolSize: size of buffer pool in bytes. Default set to 16MB. This is set to a
  very low size to make the tests run faster when developing. You should override
  this and set to a larger size when working with large databases.

### Database(const DatabaseConfig& databaseConfig)
---
Create a database instance with given database config and default system config.
- databaseConfig: database configuration
 
### Database(const DatabaseConfig& databaseConfig, const SystemConfig& systemConfig)
---
Create a database instance with given database and system config.
- databaseConfig: database configuration
- systemConfig: system configuration

### void Database.resizeBufferManager(uint64_t newSize)
---
Resize buffer manager to a newSize.
- newSize: new buffer pool size (in bytes).
