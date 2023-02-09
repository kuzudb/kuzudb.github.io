---
layout: default
title: Query result
parent: Cpp api
grand_parent: Client api
nav_order: 43
---

# QueryResult, FlatTuple, ResultValue, and QuerySummary
[QueryResult](#queryresult) captures all information related to the execution of a query. Each returned tuple is 
wrapped into a [FlatTuple](#flattuple) where each entry is wrapped as a [ResultValue](#resultvalue).
You can also obtain a [QuerySummary](#querysummary) from a QueryResult, to learn profiling
information, such as execution time, about the query you executed.

## Example
```
unique_ptr<QueryResult> result = connection.query("MATCH (a:person) RETURN COUNT(*);");
if (!result->isSuccess()) {
    std::cout << result->getErrorMessage() << endl;
}
while (result->hasNext()) {
    auto row = result->getNext();
    std::cout << row->getResultValue(0)->getInt64Val() << std::endl;
}
```

## Available APIs

## class kuzu::main::QueryResult

QueryResult stores the result of a query execution.  

---

```c++
KUZU_API std::vector<common::DataType> getColumnDataTypes ()
```

**Returns:**
- dataType of each column in query result. 

---

```c++
KUZU_API std::vector<std::string> getColumnNames ()
```

**Returns:**
- name of each column in query result. 

---

```c++
KUZU_API std::string getErrorMessage ()
```

**Returns:**
- error message of the query execution if the query fails. 

---

```c++
KUZU_API std::shared_ptr<processor::FlatTuple> getNext ()
```

**Returns:**
- next flat tuple in the query result. 

---

```c++
KUZU_API size_t getNumColumns ()
```

**Returns:**
- number of columns in query result. 

---

```c++
KUZU_API uint64_t getNumTuples ()
```

**Returns:**
- num of tuples in query result. 

---

```c++
KUZU_API QuerySummary* getQuerySummary ()
```

**Returns:**
- query summary which stores the execution time, compiling time, plan and query options. 

---

```c++
KUZU_API bool hasNext ()
```

**Returns:**
- whether there are more tuples to read. 

---

```c++
KUZU_API bool isSuccess ()
```

**Returns:**
- query is executed successfully or not. 

---

```c++
KUZU_API void writeToCSV (const std::string & fileName, char delimiter = ',', char escapeCharacter = ''', char newline = 'n')
```
writes the query result to a csv file. 

**Parameters**
- `fileName` name of the csv file. 
- `delimiter` delimiter of the csv file. 
- `escapeCharacter` escape character of the csv file. 
- `newline` newline character of the csv file. 

---

## class kuzu::main::PreparedSummary

PreparedSummary stores the compiling time and query options of a query.  

---

## class kuzu::main::QuerySummary

QuerySummary stores the execution time, plan, compiling time and query options of a query.  

---

```c++
KUZU_API double getCompilingTime ()
```

**Returns:**
- query compiling time. 

---

```c++
KUZU_API double getExecutionTime ()
```

**Returns:**
- query execution time. 

---

```c++
KUZU_API std::string getPlan ()
```

**Returns:**
- physical plan for query in string format. 

---

