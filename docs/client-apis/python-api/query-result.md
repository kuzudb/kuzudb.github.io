---
layout: default
title: Query result
parent: Python api
grand_parent: Client api
nav_order: 43
---

## QueryResult parsing
When you issue a query to the database through the `con->execute(query)` API, you are expected to get a queryResult which contains all result tuples for the given query.
We provide variety of APIs for user to fetch the queryResult as their desired format.

Available APIs:
### `__init__(self, /, *args, **kwargs)`
  constructor of queryResult
### `hasNext(self: kuzu._kuzu.result) -> bool`
 returns whether there are tuples to fetch from the PyQueryResult.
 
 note: Often used together with getNext(). Users are expected to always call hasNext() before calling getNext().
### `getNext(self: kuzu._kuzu.result) -> list`
 fetchs the next tuple from PyQueryResult.
### `writeToCSV(self: kuzu._kuzu.result, arg0: str) -> None`
 exports the query result to the csv file.
 - arg0 is the output path of the csv file.
### `close(self: kuzu._kuzu.result) -> None`
 destroys the PyQueryResult object in Python.
 
 note: Python doesn't guarantee objects to be deleted in the reverse order of declaration. Therefore, users are expected to call close() to ensure that the QueryResult is destroyed before database.
### `getAsDF(self: kuzu._kuzu.result) -> object`
  returns the queryResult in the Panda DataFrame format.
  
  note: Since this API returns a panda dataframe object, the user should install numpy and panda.
### `getColumnDataTypes(self: kuzu._kuzu.result) -> list`
  returns the column dataTypes of the resultset.
### `getColumnNames(self: kuzu._kuzu.result) -> list`
  returns the column names of the resultset.
