# CLI
Kùzu CLI (Command Line Interface) is a single, dependency free executable. It is precompiled for Mac and Linux. The CLI can be downloaded at [**TODO: update the download URL after release**]. After the CLI is downloaded and extracted into a directory, you can navigate the directory from your terminal, and set the execute permissions with `chmod +x graphflowdb`. Then you can run the executable. with `./graphflowdb -i <db_path>` where `<db_path>` is the directory for the database files. This path can point to an existing database or to a directory that does not yet exist and Kùzu will open or create a database at that location as needed. You will see a prompt as below:

```
serializedGraphPath: test
inMemory: false
defaultPagedBPSizeInMB: 1024
largePagedBPSizeInMB: 512
graphflowdb> 
```

Once the CLI has been opened, enter a Cypher query then hit the enter key to execute it. Results will be displayed in a table in the terminal.

An example use case of loading node and rel tables from CSV files and running a simple Cypher query is shown as below [**TODO: link the files used in this example**]:
1. Creating the schema:
```
graphflowdb> create node table person (ID INT64, fName STRING, gender INT64, isStudent BOOLEAN, isWorker BOOLEAN, age INT64, eyeSight DOUBLE, birthdate DATE, registerTime TIMESTAMP, lastJobDuration INTERVAL, workedHours INT64[], usedNames STRING[], courseScoresPerTerm INT64[][], PRIMARY KEY (ID));
>> Number of output tuples: 1
>> Compiling time: 11.96ms
>> Executing time: 3.89ms
---------------------------------------
| NodeTable: person has been created. |
---------------------------------------

graphflowdb> create rel table knows (FROM person TO person, date DATE, meetTime TIMESTAMP, validInterval INTERVAL, comments STRING[], MANY_MANY);

>> Number of output tuples: 1
>> Compiling time: 1.68ms
>> Executing time: 4.72ms
-------------------------------------
| RelTable: knows has been created. |
-------------------------------------
```
1. Load data:
```
graphflowdb> COPY person FROM "vPerson.csv" (HEADER=true);
>> Number of output tuples: 1
>> Compiling time: 1.32ms
>> Executing time: 21.75ms
-----------------------------------------------------------
| 8 number of nodes has been copied to nodeTable: person. |
-----------------------------------------------------------

graphflowdb> COPY knows FROM "eKnows.csv";
>> Number of output tuples: 1
>> Compiling time: 0.35ms
>> Executing time: 73.32ms
---------------------------------------------------------
| 14 number of rels has been copied to relTable: knows. |
---------------------------------------------------------
```
1. Execute a simple query:
```
graphflowdb> MATCH (a:person) - [:knows] -> (b:person) RETURN a.ID, b.ID, a.fName, b.fName;
>> Number of output tuples: 14
>> Compiling time: 42.87ms
>> Executing time: 1.86ms
------------------------------
| 0 | 2 | Alice     | Bob    |
------------------------------
| 0 | 3 | Alice     | Carol  |
------------------------------
| 0 | 5 | Alice     | Dan    |
------------------------------
| 2 | 0 | Bob       | Alice  |
------------------------------
| 2 | 3 | Bob       | Carol  |
------------------------------
| 2 | 5 | Bob       | Dan    |
------------------------------
| 3 | 0 | Carol     | Alice  |
------------------------------
| 3 | 2 | Carol     | Bob    |
------------------------------
| 3 | 5 | Carol     | Dan    |
------------------------------
| 5 | 0 | Dan       | Alice  |
------------------------------
| 5 | 2 | Dan       | Bob    |
------------------------------
| 5 | 3 | Dan       | Carol  |
------------------------------
| 7 | 8 | Elizabeth | Farooq |
------------------------------
| 7 | 9 | Elizabeth | Greg   |
------------------------------
```
# Python API

# C++ API

# Operating System Compatibility

# Compile from the source
