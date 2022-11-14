---
layout: default
title: Prepared statement
parent: Cpp api
grand_parent: Client api
nav_order: 44
---

# PreparedStatement

A prepared statement is a parameterized query which can avoid planning the same query for repeated execution. Parameters are indicated through dollar symbol `$` and are injested as a `std::pair` where the first entry is parameter name and second entry is parameter value. Note we currently do not support parameter with LIST type.

## Example
```
unique_ptr<PreparedStatement> preparedStatement = connection.query("MATCH (a:person) WHERE a.age=$n RETURN COUNT(*);");
if (!preparedStatement->isSuccess()) {
    std::cout << preparedStatement->getErrorMessage() << endl;
}
unique_ptr<QueryResult> result = connection.execute(preparedStatement.get(), make_pair(string("n"), 30));
while (result->hasNext()) {
    auto row = result->getNext();
    std::cout << row->getResultValue(0)->getInt64Val() << std::endl;
}
result = connection.execute(preparedStatement.get(), make_pair(string("n"), 35));
while (result->hasNext()) {
    auto row = result->getNext();
    std::cout << row->getResultValue(0)->getInt64Val() << std::endl;
}
```

## Available APIs

### std::unique_ptr<PreparedStatement> Connection.prepare(const std::string& statement)
---
- statement: cypher statement to prepare.
- return: a prepared statement.

### std::unique_ptr<QueryResult> Connection.execute(PreparedStatement* preparedStatement, pair<string, Args>... args)
---
- preparedStatement: prepared statement to execute.
- args: parameter pack where each arg is a `std::pair` with the first element being parameter name and second element being parameter value.

### bool PreparedStatement.isSuccess()
---
- return: whether prepare succeeded or not.

### std::string PreparedStatement.getErrorMessage()
---
- return: error message.
