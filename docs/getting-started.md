This guide provides instructions and examples on how to set up and start working with Kùzu with CLI, Python, and C++ APIs. The CSV files used in this example can be downloaded at: 

[**TODO: change to the example dataset/schema here and link to the files used here**](https://github.com/graphflowdb/graphflowdb.github.io/blob/documentation/docs/cypher/query-clauses/example-database.md).

[**TODO: for each of CLI, Python, C++ add a link to detailed client-apis docs. We should remove C++ exmaples from here. Let's just keep python and link to C++.**]

# CLI
Kùzu CLI (Command Line Interface) is a single, dependency free executable. It is precompiled for Mac and Linux. The CLI can be downloaded at [**TODO: update the download URL after release**]. After the CLI is downloaded and extracted into a directory, you can navigate the directory from your terminal, and set the execute permissions with `chmod +x graphflowdb`. Then you can run the executable with `./graphflowdb -i <db_path>` where `<db_path>` is the directory for the database files. This path can point to an existing database or to a directory that does not yet exist and Kùzu will open or create a database at that location as needed. You will see a prompt as below:

```
serializedGraphPath: test
graphflowdb> 
```

Once the CLI has been opened, enter a Cypher query then hit the enter key to execute it. Results will be displayed in a table in the terminal.

An example use case of loading node and rel tables from CSV files and running a simple Cypher query is shown as below:
1. Creating the schema:
```
graphflowdb> create node table person (ID INT64, fName STRING, gender INT64, isStudent BOOLEAN, isWorker BOOLEAN, age INT64, eyeSight DOUBLE, birthdate DATE, registerTime TIMESTAMP, lastJobDuration INTERVAL, workedHours INT64[], usedNames STRING[], courseScoresPerTerm INT64[][], PRIMARY KEY (ID));

---------------------------------------
| NodeTable: person has been created. |
---------------------------------------

graphflowdb> create rel table knows (FROM person TO person, date DATE, meetTime TIMESTAMP, validInterval INTERVAL, comments STRING[], MANY_MANY);

-------------------------------------
| RelTable: knows has been created. |
-------------------------------------
```

2. Load data:
```
graphflowdb> COPY person FROM "vPerson.csv" (HEADER=true);

-----------------------------------------------------------
| 8 number of nodes has been copied to nodeTable: person. |
-----------------------------------------------------------

graphflowdb> COPY knows FROM "eKnows.csv";

---------------------------------------------------------
| 14 number of rels has been copied to relTable: knows. |
---------------------------------------------------------
```

3. Execute a simple query:
```
graphflowdb> MATCH (a:person) - [:knows] -> (b:person) RETURN a.ID, b.ID, a.fName, b.fName;
>> Number of output tuples: 14

------------------------------
| 0 | 2 | Alice     | Bob    |
------------------------------
| 0 | 3 | Alice     | Carol  |
------------------------------
| 0 | 5 | Alice     | Dan    |
------------------------------
|           ......           |
------------------------------
```
# Python API
Kùzu Python API can be installed with pip: `pip install [**TODO: update the download URL after release**]`. 

Once the Python API is installed, you can import it in Python and use it to perform Cypher queries. An example use case of loading node and rel tables from CSV files and running a simple Cypher query in Python is shown as below:

1. Import library:
```
import graphflowdb as gdb
```

2. Create an empty database and connect to it with Python API:
```
db = gdb.database('./test')
conn = gdb.connection(db)
```

3. Creating the schema:
```
conn.execute("create node table person (ID INT64, fName STRING, gender INT64, isStudent BOOLEAN, isWorker BOOLEAN, age INT64, eyeSight DOUBLE, birthdate DATE, registerTime TIMESTAMP, lastJobDuration INTERVAL, workedHours INT64[], usedNames STRING[], courseScoresPerTerm INT64[][], PRIMARY KEY (ID));")
conn.execute("create rel table knows (FROM person TO person, date DATE, meetTime TIMESTAMP, validInterval INTERVAL, comments STRING[], MANY_MANY);")
```

4. Load data:
```
person_csv_path = os.path.abspath(os.path.join(".", "vPerson.csv"))
knows_csv_path = os.path.abspath(os.path.join(".", "eKnows.csv"))
conn.execute('COPY person FROM "%s" (HEADER=true);' % person_csv_path)
conn.execute('COPY knows FROM "%s";' % knows_csv_path)
```

5. Execute a simple query:
```
results = conn.execute('MATCH (a:person) - [:knows] -> (b:person) RETURN a.ID, b.ID, a.fName, b.fName;')
while results.hasNext():
    print(results.getNext())
```

Output:
```
[0, 2, 'Alice', 'Bob']
[0, 3, 'Alice', 'Carol']
[0, 5, 'Alice', 'Dan']
[ ...... ]
```

Alternatively, the Python API can also output results as a Pandas dataframe:
```
results = conn.execute('MATCH (a:person) - [:knows] -> (b:person) RETURN a.ID, b.ID, a.fName, b.fName;').getAsDF()
print(results)
```

Output:
```
    a.ID  b.ID    a.fName b.fName
0      0     2      Alice     Bob
1      0     3      Alice   Carol
2      0     5      Alice     Dan
......
```
# C++ API
Kùzu C++ API is distributed as a so/dylib library file and a set of header files. The C++ API can be downloaded at [**TODO: update the download URL after release**]. After the C++ API is downloaded and extracted into a directory, it can be used without installation by just specifying the library search path for the linker.

An example use case of loading node and rel tables from CSV files and running a simple Cypher query in C++ is shown as below:
1. Setup:
In this example, we assume that the so/dylib, the headers, the CSV files, and the cpp code file is under the same directoy for simpalicity:
```
├── include                                    
│   ├── graphflowdb.h
│   └── ......
├── libgraphflowdb.so / libgraphflowdb.dylib
├── test.cpp                                            
├── eKnows.csv
└── vPerson.csv
```

2. C++ example:
We show an example C++ source file for loading node and rel tables from CSV files and running a simple Cypher query (test.cpp) as below:
```
#include <iostream>
#include "include/graphflowdb.h"

using namespace graphflow::main;

int main()
{
    // Create an empty database.
    DatabaseConfig databaseConfig("test");
    Database database(databaseConfig);

    // Connect to the database.
    auto connection = Connection(&database);

    // Creating the schema.
    connection.query("create node table person (ID INT64, fName STRING, gender INT64, isStudent BOOLEAN, isWorker BOOLEAN, age INT64, eyeSight DOUBLE, birthdate DATE, registerTime TIMESTAMP, lastJobDuration INTERVAL, workedHours INT64[], usedNames STRING[], courseScoresPerTerm INT64[][], PRIMARY KEY (ID));");
    connection.query("create rel table knows (FROM person TO person, date DATE, meetTime TIMESTAMP, validInterval INTERVAL, comments STRING[], MANY_MANY);");

    // Load data.
    connection.query("COPY person FROM \"vPerson.csv\" (HEADER=true);");
    connection.query("COPY knows FROM \"eKnows.csv\" (HEADER=true);");

    // Execute a simple query.
    auto result = connection.query("MATCH (a:person) - [:knows] -> (b:person) RETURN a.ID, b.ID, a.fName, b.fName;");
    
    // Output query result.
    while (result->hasNext())
    {
        auto row = result->getNext();
        std::cout << row->getResultValue(0)->getInt64Val() << " " << row->getResultValue(1)->getInt64Val() << " " << row->getResultValue(2)->getStringVal() << " " << row->getResultValue(3)->getStringVal() << std::endl;
    }
    return 0;
}
```
3. Compile and run the C++ program:
Since we did not install the `libgraphflow` as a system library, we need to override the linker search path to correctly compile the C++ code and run the compiled program.

On Linux:
```
env LIBRARY_PATH=. LD_LIBRARY_PATH=. g++ test.cpp -std=c++2a -lgraphflowdb -lpthread -D_GLIBCXX_USE_CXX11_ABI=0
env LIBRARY_PATH=. LD_LIBRARY_PATH=. ./a.out
```
On macOS:
```
env DYLD_LIBRARY_PATH=. LIBRARY_PATH=. clang++ test.cpp -std=c++20 -lgraphflowdb
env DYLD_LIBRARY_PATH=. LIBRARY_PATH=. ./a.out
```
Expected output:
```
0 3 Alice Carol
0 5 Alice Dan
2 0 Bob Alice
...
```

# Operating System Compatibility
Kùzu CLI and C++ API are pre-compiled for macOS >= 10.15 for Intel-based Macs and macOS >= 11.0 for ARM-based Macs. For Linux, Kùzu CLI and C++ API are pre-compiled for x86-64 architecture and supports most modern Linux distros such as RHEL/CentOS/Rocky Linux/Oracle Linux 7.0 or later and Ubuntu 18.04 or later. For a specific list of Linux distros that we tested on, please refer to [this spreadsheet](https://docs.google.com/spreadsheets/d/13A3MA3IsBJB_CJBSMqWFktIzyb6unJqH0-3njDycDpQ/).

Kùzu Python API wheels has been pre-compiled for CPython 3.6 to 3.11. For macOS, the OS compatibility is the same as the pre-compiled CLI and C++ API (i.e.  macOS >= 10.15 for Intel-based Macs and macOS >= 11.0 for ARM-based Macs). For Linux, the pre-compiled wheels follows `manylinux2014_x86_64` standard. Please refer to [this link](https://github.com/pypa/manylinux) to check the compatibility with your distro.
