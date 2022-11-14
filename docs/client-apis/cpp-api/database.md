---
layout: default
title: Database
parent: Cpp api
grand_parent: Client api
nav_order: 41
---

# Database

To use Kùzu, you need to first create a database instance with a database config. 

## Example
```
DatabaseConfig databaseConfig("testdb");
Database database(databaseConfig);
```

## Available APIs

### DatabaseConfig(std::string databasePath, bool inMemoryMode = false)
---
Create a database configutation.
- databasePath: path to database files. If the path doesn't not exist, a new database will be created at the given path.
- inMemoryMode: is the database should be created as an in-memory database. Default set to false.

### SystemConfig(uint64_t bufferPoolSize = StorageConfig::DEFAULT_BUFFER_POOL_SIZE)
---
Create a system configuration
- bufferPoolSize: size of buffer pool in bytes. Default set to 16MB.

### Database(const DatabaseConfig& databaseConfig)
---
Create a database instance with given database config and default system config.
- databaseConfig: database configuration
 
### Database(const DatabaseConfig& databaseConfig, const SystemConfig& systemConfig)
---
Create a database instance with given database and system config.
- databaseConfig: database configuration
- systemConfig: system configuration

### void Database.resize(uint64_t newSize)
---
Resize buffer manager to a newSize.
- newSize: new buffer pool size (in bytes).
