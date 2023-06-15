---
layout: default
title: Testing Framework
parent: Development
---

# Testing Framework
![](https://codecov.io/github/kuzudb/kuzu/branch/master/graph/badge.svg?token=N1AT6H79LM")  
<p style="text-align:center">
<img src="/img/testing-framework.png" style="width:380px">
<i style="display: block">Figure 1: Testing Framework v2</i>
</p>


## Introduction

Testing is a crucial part of Kùzu to ensure the correct functioning of the
system. The general principle for our testing is to avoid testing components individually, 
instead we should route all tests, when possible, in the end-to-end way through Cypher statements.
In this way, we developed our own testing framework to perform end-to-end tests using Cypher statements. 

To use the testing framework, the developer must create a `.test` file located
inside `test/test_files` directory. The test file has two parts, the header and
the test body. In the header section, the developer specifies the dataset to be
used, the test group name and other optional parameters such as `BUFFER_POOL_SIZE`.

Here is a basic example of a test:

```
# test/test_files/basic.test
# comments can also be addressed
-GROUP Basic 
-DATASET CSV tinysnb
-BUFFER_POOL_SIZE 64000000
--

-CASE BasicTest
-QUERY MATCH (p:person) RETURN COUNT(*);
---- 1
6000
```

The first three lines represents the header, separated by `--`. The testing
framework will parse the file and register a [GTest
programatically](http://google.github.io/googletest/advanced.html#registering-tests-programmatically).
In terms of test case name, the example above will be equivalent to:

```
TEST_F(Basic, BasicTest) {
...
}
```

The test framework will test each logical plan created from the prepared
statements and assert the result. 

## Running the tests

Use `make test` to build and run all tests. By default, the tests will run in
paralell on 10 jobs. We use `ctest` as the main utility to generate the test
list and run. It is also possible to change the number of parallel jobs by
running `make test TEST_JOBS=<desired number of jobs to run in parallel>`.

### Running a specific group or test case

There are two ways to run a specific e2e test or group of tests:

### 1. Using ctest and specifying the name of the test. Example: 

```
# Run the all tests from StringPrimaryKeyTest group
$ ctest -R StringPrimaryKeyTest

# Run only PrimaryKeySecondColumn test
$ ctest -R StringPrimaryKeyTest.PrimaryKeySecondColumn

# Run in verbose mode
$ ctest -V -R BinderErrorTest.MatchBuiltIn

# Run in parallel
$ ctest -j 10
```

### 2. Running directly from `e2e_test` binary

The test binaries are available in `build/release[or debug]/test/runner`
folder. You can run `e2e_test` specifying the relative path file inside
`test_files`:

```
# Run all tests inside test/test_files/copy
$ ./e2e_test copy

# Run all tests from test/test_files/long_string_pk.test file
$ ./e2e_test long_string_pk/long_string_pk.test

# Run all tests
$ ./e2e_test .
```

## Test file header

The `.test` file header contains two required parameters: `-GROUP` and
`-DATASET`, to specify the test group name and the dataset to be used. If no
dataset is required, use the keyword 'empty'.

**-DATASET [type] [relative path]**
- type: CSV, PARQUET, NPY
- relative path: the name of the folder inside `datasets/` or 'empty'

It is also possible make a conversion from CSV dataset to PARQUET file format
using `CSV_TO_PARQUET(dataset path)`.

Examples:

```
-GROUP MyTest
-DATASET CSV tinsnb
--
```

```
-GROUP MyTest
-DATASET PARQUET demo-db/parquet
--
```

```
-GROUP MyTest
-DATASET PARQUET CSV_TO_PARQUET(tinysnb)
--
```

Another optional parameter are `-BUFFER_POOL_SIZE` and `-SKIP`. When including
`-SKIP` in the header, the whole suite will be disabled but it will still
appear as disabled tests when running from ctest. 


## Test case

The following example illustrate a basic structure on how to create a test case:

```
-GROUP Test
-DATASET tinysnb
--

-CASE MyTest
-NAME TestA
-QUERY MATCH (p:person) RETURN COUNT(*);
---- 1
6000
```

In the example above:

`-CASE` is the name of the test case, which will be equivalent to
`TEST_F(Test, MyTest)` in c++. `-QUERY` is followed by 4 dashes `----` plus the
expected result (error, success or number of the tuples). When specifying a
number after the dashes, it's necessary to add the same number of tuples in the
next following lines. In the example above, `-NAME` is optional and will be
used only for display purposes when running on verbose mode. If the subsequent
lines have more statements to validate, they will be part of the same test case
unless writing a new `-CASE`.

### Results

```
# Expects error message 
-QUERY MATCH (p:person) RETURN COUNT(intended-error);
---- error
Error: Binder exception: Variable intended is not in scope.

# Success results don't need anything after the dashes
# note that STATEMENT and QUERY keyword are interchangeable.
# Both serves the same purpose, but we use different keywords for convention.
-STATEMENT CREATE NODE TABLE  Person (ID INT64, PRIMARY KEY (ID));
---- ok

-QUERY MATCH (a:person) RETURN a.fName LIMIT 4
---- 4
Alice
Bob
Carol
Dan
```

If you have big result, you can compare to a CSV file. The file must be created
inside `test/answers/<name-of-the-file.csv>`. 

```
-QUERY MATCH (p0:person)-[r:knows]->(p1:person) RETURN ID(r)
---- 5001
<FILE>:file_with_answers.csv
```

### Additional properties 

Inside each test case, it is also possible to use the additional properties:

| Property | Parameter | Description |
|---|---|---|
| `-NAME` | any string | Define a name for each block for informational purposes |
| `-SKIP` | none | register the test but skip the whole test case. When a test is skipped, it will display as disabled in the test run |
| `-PARALLELISM` | integer | the number of threads that will be set by `connection.setMaxNumThreadForExec()` |
| `-BEGIN_WRITE_TRANSACTION` | none | call `connection.beginWriteTransaction()` before the subsequent statements. |
| `-CHECK_ORDER` | true | by default, the results are ordered before comparing to ensure reproducibility due to multi-threading. However, in some cases, it is necessary to check the order.|

### Defining variables

A variable can be defined and re-used inside statement, results or error
message:

```
-DEFINE EXPECTED_RESULT "0|1:0|0"
-CASE Backward
-QUERY MATCH (p0:person)<-[r:knows]-(p1:person) WHERE p0.ID = 0 RETURN p0.ID, ID(r), p1.ID
---- 1
${EXPECTED_RESULT}

-CASE Forward
-QUERY MATCH (p0:person)-[r:knows]->(p1:person) WHERE p0.ID = 0 RETURN p0.ID, ID(r), p1.ID
---- 1
${EXPECTED_RESULT}
```

A more useful examples are using functions alongside `-DEFINE`. The framework
currently support the following functions: 

| Function | Description | Example |
|---|---|---|
| `-DEFINE [var] ARANGE [start] [end]` | Generate a list of numbers from start to end | `-DEFINE STRING_OVERFLOW ARANGE 0 5` <br> generates `STRING_OVERFLOW = [0,1,2,3,4,5]` |
| `-DEFINE [var] REPEAT [count] "[text]"` | Repeat the text multiple times | `-DEFINE MY_STR REPEAT 3 "MyString"`<br> generates `MY_STR = "MyStringMyStringMyString"` |

#### Pre-defined variables

You can insert Kùzu directory path in the test result by writing
`${KUZU_ROOT_DIRECTORY}`.


### Defining statement blocks

A statement block can be defined and re-used along the test file.
`-DEFINE_STATEMENT_BLOCK' define a block that can be used by
calling `-STATEMENT_BLOCK' in any part of the test case body. It
can be useful to perform checks without having to re-write the same staments
again.


```
-DEFINE_STATEMENT_BLOCK CREATE_PERSON_REL [
-STATEMENT MATCH (a:person), (b:person) WHERE a.ID=10 AND b.ID=20 CREATE (a)-[e:knows]->(b)
---- ok
-STATEMENT MATCH (a:person), (b:person) WHERE a.ID=1 AND b.ID=2 CREATE (a)-[e:knows]->(b)
---- ok
]

-CASE TestCaseA
-STATEMENT_BLOCK CREATE_PERSON_REL
-QUERY ...
---- ok

-CASE TestCaseB
-STATEMENT_BLOCK CREATE_PERSON_REL
-QUERY ...
---- ok
```

## Examples

Full example with comments.

```
# Header
# We can add -SKIP here if we need to temporarily skip the whole file
-GROUP Create
-TEST CreateRelTest
-BUFFER_POOL_SIZE 64000000
-DATASET tinysnb

--

-DEFINE_STATEMENT_BLOCK create_rel_set [
-STATEMENT MATCH (a:person), (b:person) 
                 WHERE a.ID=10 AND b.ID=20 
                 CREATE (a)-[e:knows]->(b);
---- ok
-STATEMENT MATCH (a:person), (b:person) 
                 WHERE a.ID=1 AND b.ID=2
                 CREATE (a)-[e:knows]->(b);
---- ok
-STATEMENT MATCH (a:person), (b:person)
                 WHERE a.ID=1 AND b.ID=20 
                 CREATE (a)-[e:knows]->(b);
---- error
"Exception: Duplicate primary key"
]

-CASE CreateRelRollbackTest
-STATEMENT MATCH (a:person)-[e:knows]->(b:person) RETURN COUNT(*)
---- 1
14
-STATEMENT BEGIN TRANSACTION
---- ok
-STATEMENT_BLOCK create_rel_set
-QUERY MATCH (a:person)-[e:knows]->(b:person) RETURN COUNT(*)
---- 1
16
-STATEMENT ROLLBACK
-QUERY MATCH (a:person)-[e:knows]->(b:person) RETURN COUNT(*)
---- 1
14

-CASE CreateRelCommitTest
-STATEMENT MATCH (a:person)-[e:knows]->(b:person)
RETURN COUNT(*)
---- 1
14
-STATEMENT BEGIN TRANSACTION
---- ok
-STATEMENT_BLOCK create_rel_set
-QUERY MATCH (a:person)-[e:knows]->(b:person)
RETURN COUNT(*)
---- 1
16
-STATEMENT COMMIT
-QUERY MATCH (a:person)-[e:knows]->(b:person)
RETURN COUNT(*)
---- 1
16

# Compare results with a csv file
-CASE MatchTest
-STATEMENT MATCH (a:person)-[e:knows]->(b:person)
RETURN a.ID, b.ID
---- 16
<FILE>:test/tinysnb/match/answers/create_node_test.CSV

```

| File | Description|
|---|---|
| [set.test](https://github.com/kuzudb/kuzu/blob/1bd26e46eac7a5de1d8776bab74988b05c4913dc/test/test_files/tinysnb/update_node/set.test#LL78C33-L78C36) | ARANGE example |
| [copy_long_string.test](https://github.com/kuzudb/kuzu/blob/1bd26e46eac7a5de1d8776bab74988b05c4913dc/test/test_files/copy/copy_long_string.test) | REPEAT example | 
| [copy_multiple_files.test](https://github.com/kuzudb/kuzu/blob/1bd26e46eac7a5de1d8776bab74988b05c4913dc/test/test_files/copy/copy_multiple_files.test) | Using statement blocks |
| [catalog.test](https://github.com/kuzudb/kuzu/blob/1bd26e46eac7a5de1d8776bab74988b05c4913dc/test/test_files/exceptions/catalog/catalog.test) | Dealing with exceptions |
