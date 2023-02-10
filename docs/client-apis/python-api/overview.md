---
layout: default
title: Python api
parent: Client api
has_children: true
---

# Python API
You can use Kùzu's Python API to interact with the database in Python. Please
see the [getting started instructions](../../getting-started.md#python-api) for
details on how to install the Python API and set up your environment. Below is an example that demonstrates how to create a database and issue a query.

Currently Kùzu doesn't support manually begin a transaction.

## Example

```
import kuzu
# create database
db = kuzu.Database('./testdb')
# create connection
conn = kuzu.connection(db)

# create schema
conn.execute("CREATE NODE TABLE User(name STRING, age INT64, PRIMARY KEY (name))")
# load data
conn.execute('COPY User FROM "user.csv"')

# issue a query
results = conn.execute('MATCH (u:User) RETURN u.name;')
# iterate result
while results.hasNext():
    print(results.getNext())
```
