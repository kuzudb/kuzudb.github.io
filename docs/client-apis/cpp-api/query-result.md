---
layout: default
title: Query result
parent: Cpp api
grand_parent: Client api
nav_order: 43
---

# Query result, tuple & summary
QueryResult captures all information related to the execution of a query. Each returned tuple is wrapped into a FlatTuple where each entry is wrapped as a ResultValue.

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

### bool QueryResult.isSuccess()
---
- return: whether query execution succeeded or not.

### std::string QueryResult.getErrorMessage()
---
- return: error message.

### bool QueryResult.hasNext()
---
- return: whether there is one more tuple or not.

### std::shared_ptr\<processor::FlatTuple\> QueryResult.getNext()
---
- return: next tuple.

### void QueryResult.writeToCSV(std::string fileName)
---
- fileName: output csv file.

### QuerySummary* QueryResult.getQuerySummary()
---
- return: query summary containing statistics related to query execution.

### uint64_t QueryResult.getNumTuples()
---
- return: number of tuples.

### vector\<std::string\> QueryResult.getColumnNames()
---
- return: a vector of column names.

### ResultValue* FlatTuple.getResultValue(uint32_t idx)
---
- return: an entry of the tuple.

### bool ResultValue.getBooleanVal()
---
- return: boolean value.

### int64_t ResultValue.getInt64Val()
---
- return: int64 value.

### double ResultValue.getDoubleVal()
---
- return: double value.

### date_t ResultValue.getDateVal()
---
- return: date value.

### timestamp_t ResultValue.getTimestampVal()
---
- return: timestamp value.

### interval_t ResultValue.getIntervalVal()
---
- return: interval value.

### std::string ResultValue.getStringVal()
---
- return: string value.

### vector\<ResultValue\> ResultValue.getListVal()
---
- return: vector of ResultValue.

### bool ResultValue.isNullVal()
---
- return: whether ResultValue is null or not.

### double QuerySummary.getCompilingTime()
---
- return: compiling time of the query.

### double QuerySummary.getExecutionTime()
---
- return: execution time of the query.

### std::ostringstream& QuerySummary.getPlanAsOstream()
---
- return: plan in std string stream format. 
