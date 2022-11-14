---
layout: default
title: Client api
nav_order: 5
has_children: true
permalink: /docs/client-apis
---

# Overview
You can interact with Kùzu in three ways:
  - CLI
  - C++ API
  - Python API.

*An important note on connecting to the same database directory from multiple `Database` instances*:
Each of these three ways ultimately creates a `Database` instance in C++ (Kùzu's CLI is written in C++, so is a C++
process, and Kùzu's Python API, through which you create a `PyDatabase` instance is a binding to Kùzu's C++ API
and so ultimately creates a `Database` instance). Each database you create is identified by
its directory. If you are going to concurrently interact with the same database through more than one
`Database` instances, you should
ensure that you only issue read queries to the system. Your writes from one `Database` instance
will not be visible to your other program and you can easily corrupt your database. Kùzu currently does not ensure 
that you are connecting to the same database directory through a single `Database` instance. 
*You can however open multiple connections to the same database from the same `Database` instance.* So you can 
have as many connections to the same database using the same `Database` or `PyDatabase` instance. But you shouldn't
concurrently have a CLI open that writes to the same database directory and a separate C++ or Python process
that reads from the database in that directory.
