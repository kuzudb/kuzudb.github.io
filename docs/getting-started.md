---
layout: default
title: Getting started
nav_order: 2
---

This guide provides instructions and examples on how to set up and start working with Kùzu with CLI, Python, and C++ APIs. The CSV files used in this example can be found [here](cypher/query-clauses/example-database.md).

[**TODO: for each of CLI, Python, C++ add a link to detailed client-apis docs. We should remove C++ exmaples from here. Let's just keep python and link to C++.**]

[**Chang: the C++ API doc does not seem to have an end-to-end example. I think it might be better to keep an end-to-end example in this guide?**]

# CLI
Kùzu CLI (Command Line Interface) is a single, dependency free executable. It is precompiled for Mac and Linux. The CLI can be downloaded at [**TODO: update the download URL after release**]. After the CLI is downloaded and extracted into a directory, you can navigate the directory from your terminal, and set the execute permissions with `chmod +x kuzu`. Then you can run the executable with `./kuzu -i <db_path>` where `<db_path>` is the directory for the database files. This path can point to an existing database or to a directory that does not yet exist and Kùzu will create the directory and initialize an empty database for you. You will see a prompt as below if you pass `test` as you `<db_path>`:

```
Database path: test
kuzu> 
```

Once the CLI has been opened, enter a Cypher query then hit the enter key to execute it. ? of how to load node and rel tables from CSV files 
and run a Cypher query is shown below:
- Create the schema:

```
kuzu> CREATE NODE TABLE User(name STRING, age INT64, PRIMARY KEY (name))

-------------------------------------
| NodeTable: User has been created. |
-------------------------------------

kuzu> CREATE REL TABLE Follows(FROM User TO User, since INT64)

---------------------------------------
| RelTable: Follows has been created. |
---------------------------------------
```

- Load data (replace `"user.csv"` with the full path to your csv and use quotation marks around the path):

```
kuzu> COPY User FROM "user.csv"

---------------------------------------------------------
| 4 number of nodes has been copied to nodeTable: User. |
---------------------------------------------------------

kuzu> COPY Follows FROM "follows.csv"

----------------------------------------------------------
| 4 number of rels has been copied to relTable: Follows. |
----------------------------------------------------------
```

- Execute a simple query:

```
kuzu> MATCH (a:User)-[f:Follows]->(b:User) RETURN a.name, b.name, f.since;
>> Number of output tuples: 4

-------------------------------
| a.name  | b.name  | f.since |
-------------------------------
| Adam    | Karissa | 2020    |
-------------------------------
| Adam    | Zhang   | 2020    |
-------------------------------
| Karissa | Zhang   | 2021    |
-------------------------------
| Zhang   | Noura   | 2022    |
-------------------------------
```

# Python API
Kùzu Python API can be installed with pip: `pip install [**TODO: update the download URL after release**]`. 

Once the Python API is installed, you can import it in Python and use it to perform Cypher queries. Below is a short example
of how to get started. Details of the [Python API is here](client-apis/python-api.md).

- Import library:

```
import kuzu
```

- Create an empty database and connect to it with Python API:

```
db = kuzu.database('./test')
conn = kuzu.connection(db)
```

- Create the schema:

```
conn.execute("CREATE NODE TABLE User(name STRING, age INT64, PRIMARY KEY (name))")
conn.execute("CREATE NODE TABLE City(name STRING, population INT64, PRIMARY KEY (name))")
conn.execute("CREATE REL TABLE Follows(FROM User TO User, since INT64)")
conn.execute("CREATE REL TABLE LivesIn(FROM User TO City)")
```

- Load data:

```
conn.execute('COPY User FROM "user.csv"')
conn.execute('COPY City FROM "city.csv"')
conn.execute('COPY Follows FROM "follows.csv"')
conn.execute('COPY LivesIn FROM "lives_in.csv"')
```

- Execute a simple query:

```
results = conn.execute('MATCH (u:User) RETURN u.name, u.age;')
while results.hasNext():
    print(results.getNext())
```

Output:
```
['Adam', 30]
['Karissa', 40]
['Zhang', 50]
['Noura', 25]
```

Alternatively, the Python API can also output results as a Pandas dataframe:
```
results = conn.execute('MATCH (a:User)-[f:Follows]->(b:User) RETURN a.name, f.since, b.name;').getAsDF()
print(results)
```

Output:
```
	a.name	f.since	b.name
0	Adam	2020	Karissa
1	Adam	2020	Zhang
2	Karissa	2021	Zhang
3	Zhang	2022	Noura
```

# C++ API
Kùzu C++ API is distributed as a so/dylib library file and a set of header files. The C++ API can be downloaded at [**TODO: update the download URL after release**]. After the C++ API is downloaded and extracted into a directory, it can be used without installation by just specifying the library search path for the linker.
Below is a short example of how to get started. Details of the [C++ API is here](client-apis/cpp-api).
- Setup:
In this example, we assume that the so/dylib, the headers, the CSV files, and the cpp code file is under the same directoy:

```
├── include                                    
│   ├── kuzu.h
│   └── ......
├── libkuzu.so / libkuzu.dylib
├── test.cpp                                            
├── user.csv
├── city.csv
├── follows.csv
└── lives_in.csv
```

- A `test.cpp` program:

```
#include <iostream>
#include "include/kuzu.h"

using namespace kuzu::main;

int main()
{
    // Create an empty database.
    DatabaseConfig databaseConfig("test");
    SystemConfig systemConfig(1ull << 31 /* set buffer manager size to 2GB */);
    Database database(databaseConfig, systemConfig);

    // Connect to the database.
    auto connection = Connection(&database);

    // Create the schema.
    connection.query("CREATE NODE TABLE User(name STRING, age INT64, PRIMARY KEY (name))");
    connection.query("CREATE NODE TABLE City(name STRING, population INT64, PRIMARY KEY (name))");
    connection.query("CREATE REL TABLE Follows(FROM User TO User, since INT64)");
    connection.query("CREATE REL TABLE LivesIn(FROM User TO City)");

    // Load data.
    connection.query("COPY User FROM \"user.csv\"");
    connection.query("COPY City FROM \"city.csv\"");
    connection.query("COPY Follows FROM \"follows.csv\"");
    connection.query("COPY LivesIn FROM \"lives_in.csv\"");

    // Execute a simple query.
    auto result = connection.query("MATCH (a:User)-[f:Follows]->(b:User) RETURN a.name, f.since, b.name;");
    
    // Output query result.
    while (result->hasNext())
    {
        auto row = result->getNext();
        std::cout << row->getResultValue(0)->getStringVal() << " " 
	          << row->getResultValue(1)->getInt64Val()  << " " 
		  << row->getResultValue(2)->getStringVal() << std::endl;
    }
    return 0;
}
```

- Compile and run `test.cpp`:
Since we did not install the `libkuzu` as a system library, we need to override the linker search path to correctly compile the C++ code and run the compiled program.

On Linux:
```
env LIBRARY_PATH=. LD_LIBRARY_PATH=. g++ test.cpp -std=c++2a -lkuzu -lpthread -D_GLIBCXX_USE_CXX11_ABI=0
env LIBRARY_PATH=. LD_LIBRARY_PATH=. ./a.out
```
On macOS:
```
env DYLD_LIBRARY_PATH=. LIBRARY_PATH=. clang++ test.cpp -std=c++20 -lkuzu
env DYLD_LIBRARY_PATH=. LIBRARY_PATH=. ./a.out
```
Expected output:
```
Adam 2020 Karissa
Adam 2020 Zhang
Karissa 2021 Zhang
Zhang 2022 Noura
```

# Operating System Compatibility
Kùzu CLI and C++ API are pre-compiled for macOS >= 10.15 for Intel-based Macs and macOS >= 11.0 for ARM-based Macs. For Linux, Kùzu CLI and C++ API are pre-compiled for x86-64 architecture and supports most modern Linux distros such as RHEL/CentOS/Rocky Linux/Oracle Linux 7.0 or later and Ubuntu 18.04 or later. For a specific list of Linux distros that we tested on, please refer to [this spreadsheet](https://docs.google.com/spreadsheets/d/13A3MA3IsBJB_CJBSMqWFktIzyb6unJqH0-3njDycDpQ/).

Kùzu Python API wheels has been pre-compiled for CPython 3.6 to 3.11. For macOS, the OS compatibility is the same as the pre-compiled CLI and C++ API (i.e.  macOS >= 10.15 for Intel-based Macs and macOS >= 11.0 for ARM-based Macs). For Linux, the pre-compiled wheels follows `manylinux2014_x86_64` standard. Please refer to [this link](https://github.com/pypa/manylinux) to check the compatibility with your distro.
