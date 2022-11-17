---
layout: default
title: CLI
parent: Client api
---

# Kùzu CLI

Please see the [getting started page](../getting-started.md#cli) for instructions on how
to install Kùzu's command line interface and how to make it point to a database folder.
Once in the CLI, you can issue Cypher queries on your database as well as use CLI
commands to explore your database and configure the Kùzu instance CLI is running (e.g., set
its buffer manager size). If you type `:help`, you can see the list of CLI commands.

```
kuzu> :help
    :help     get command list
    :clear     clear shell
    :quit     exit from shell
    :thread [num_threads]     set number of threads for query execution
    :buffer_manager_size [bm_size_in_bytes]     set buffer manager size in bytes
    :logging_level [logging_level]     set logging level of database, available options: debug, info, err
    :list_nodes     list all node tables
    :list_rels     list all rel tables
    :show_node     [table_name] show node table schema
    :show_rel     [table_name] show rel table schema
```
The [getting started page](../getting-started.md#cli) provides examples of running
Cypher commands through the CLI. 
