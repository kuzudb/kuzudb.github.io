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


## class kuzu::main::Database

Database class is the main class of the KuzuDB. It manages all database configurations and files.  

---

```c++
Database (const DatabaseConfig & databaseConfig)
```
Creates a Database object with default buffer pool size and max num threads. 

**Parameters**
- `databaseConfig` Database configurations(database path). 

---

```c++
Database (const DatabaseConfig & databaseConfig, const SystemConfig & systemConfig)
```
Creates a Database object. 

**Parameters**
- `databaseConfig` Database configurations(database path). 
- `systemConfig` System configurations(buffer pool size and max num threads). 

---

```c++
void resizeBufferManager (uint64_t newSize)
```
Resizes the buffer pool size of the database instance. 

**Parameters**
- `newSize` New buffer pool size in bytes. 
- Exceptions:
- `BufferManagerException` if the new size is smaller than the current buffer manager size. 

---

```c++
void setLoggingLevel (spdlog::level::level_enum loggingLevel)
```
Sets the logging level of the database instance. 

**Parameters**
- `loggingLevel` New logging level. (Supported logging levels are: info, debug, err). 

---

## class kuzu::main::DatabaseConfig

Stores databasePath.  

---

```c++
DatabaseConfig (std::string databasePath)
```
Creates a DatabaseConfig object. 

**Parameters**
- `databasePath` Path to store the database files. 

---

## class kuzu::main::SystemConfig

Stores buffer pool size and max number of threads.  

---

```c++
SystemConfig (uint64_t bufferPoolSize = common::StorageConfig::DEFAULT_BUFFER_POOL_SIZE)
```
Creates a SystemConfig object. 

**Parameters**
- `bufferPoolSize` Buffer pool size in bytes. 
- Note:
- defaultPageBufferPoolSize and largePageBufferPoolSize are calculated based on the DEFAULT_PAGES_BUFFER_RATIO and LARGE_PAGES_BUFFER_RATIO constants in StorageConfig. 

---
