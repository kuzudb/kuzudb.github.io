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

### Available APIs:

#### `__init__(self, /, *args, **kwargs)`
  Construct a QueryResult.
#### `hasNext(self: kuzu._kuzu.result) -> bool`
  Return whether there are tuples to fetch from the QueryResult.
 
  Note: Often used together with getNext(). Users are expected to always call hasNext() before calling getNext().
#### `getNext(self: kuzu._kuzu.result) -> list`
  Fetch the next tuple from the QueryResult.
#### `writeToCSV(self: kuzu._kuzu.result, arg0: str) -> None`
  Export the query result to the csv file.
 - arg0 is the output path of the csv file.
#### `close(self: kuzu._kuzu.result) -> None`
  Destroy the QueryResult object in Python.
 
  Note: Python doesn't guarantee objects to be deleted in the reverse order of declaration. Therefore, users are expected to call close() to ensure that the QueryResult is destroyed before database.
  
#### `getAsDF(self: kuzu._kuzu.result) -> object`
  Return the query result in the Panda DataFrame format.
  
  Note: Since this API returns a panda dataframe object, the user should install numpy and panda.
#### `getColumnDataTypes(self: kuzu._kuzu.result) -> list`
  Return the column data types of the result set.
#### `getColumnNames(self: kuzu._kuzu.result) -> list`
  Return the column names of the result set.
