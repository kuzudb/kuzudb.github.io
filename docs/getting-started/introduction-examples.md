---
layout: default
title: Introduction Examples
parent: Getting Started
permalink: /docs/getting-started/introduction-examples
nav_order: 1
---

This guide provides hand-on instructions and examples on how to set up and start working with Kùzu with CLI, Python, and C++ APIs. The CSV files used in this example can be found [here](../cypher/query-clauses/example-database.md).

We introduce how Kùzu can be used with CLI, Python, and C++ APIs through examples.

# CLI
Kùzu CLI (Command Line Interface) is a single, dependency free executable. It is precompiled for Mac and Linux. The CLI can be downloaded [here](https://github.com/kuzudb/kuzu/releases/latest). After the CLI is downloaded and extracted into a directory, you can navigate the directory from your terminal, and set the execute permissions with `chmod +x kuzu`. Then you can run the executable with `./kuzu <db_path>` where `<db_path>` is the directory for the database files. This path can point to an existing database or to a directory that does not yet exist and Kùzu will create the directory and initialize an empty database for you. You will see a prompt as below if you pass `test` as you `<db_path>`:

```
./kuzu_shell ./test
kuzu> 
```

Once the CLI has opened, enter a Cypher query then hit the enter key to execute it. Instructions of how to load nodes and rels from CSV files 
and run a Cypher query is shown below:
- Create the schema:

```
kuzu> CREATE NODE TABLE User(name STRING, age INT64, PRIMARY KEY (name));

-------------------------------------
| NodeTable: User has been created. |
-------------------------------------

kuzu> CREATE REL TABLE Follows(FROM User TO User, since INT64);

---------------------------------------
| RelTable: Follows has been created. |
---------------------------------------
```

- Load data (replace `"user.csv"` with the full path to your csv and use quotation marks around the path):

```
kuzu> COPY User FROM "user.csv";

---------------------------------------------------------
| 4 number of nodes has been copied to nodeTable: User. |
---------------------------------------------------------

kuzu> COPY Follows FROM "follows.csv";

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
Kùzu Python API can be installed with pip: `pip install kuzu`. 

Once the Python API is installed, you can import it in Python and use it to perform Cypher queries. Below is a short example
of how to get started. Details of the [Python API is here](../client-apis/python-api/overview.md).

- Import library:

```
import kuzu
```

- Create an empty database and connect to it with Python API:

```
db = kuzu.Database('./test')
conn = kuzu.Connection(db)
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

Alternatively, the Python API can also output results as a Pandas data frame:
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

The Python API can also output results in arrow format:
```
results = conn.execute('MATCH (u:User) RETURN u.name, u.age;')
print(results.get_as_arrow(chunk_size=100))
```

Output:
```
u.name: string
u.age: int64
----
u.name: [["Adam","Karissa","Zhang","Noura"]]
u.age: [[30,40,50,25]]
```

# C++ API
Kùzu C++ API is distributed as a so/dylib library file and a header file (`kuzu.hpp`). The C++ API can be downloaded [here](https://github.com/kuzudb/kuzu/releases/latest). After the C++ API is downloaded and extracted into a directory, it can be used without installation by just specifying the library search path for the linker.
Below is a short example of how to get started. Details of the [C++ API is here](../client-apis/cpp-api/overview.md).
- Setup:
In this example, we assume that the so/dylib, the header file, the CSV files, and the cpp code file is under the same directory:

```
├── include                                    
│   ├── kuzu.hpp
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

#include "include/kuzu.hpp"

using namespace kuzu::main;
using namespace std;

int main() {
    // Create an empty database.
    SystemConfig systemConfig;
    auto database = make_unique<Database>("test", systemConfig);

    // Connect to the database.
    auto connection = make_unique<Connection>(database.get());

    // Create the schema.
    connection->query("CREATE NODE TABLE User(name STRING, age INT64, PRIMARY KEY (name))");
    connection->query("CREATE NODE TABLE City(name STRING, population INT64, PRIMARY KEY (name))");
    connection->query("CREATE REL TABLE Follows(FROM User TO User, since INT64)");
    connection->query("CREATE REL TABLE LivesIn(FROM User TO City)");

    // Load data.
    connection->query("COPY User FROM \"user.csv\"");
    connection->query("COPY City FROM \"city.csv\"");
    connection->query("COPY Follows FROM \"follows.csv\"");
    connection->query("COPY LivesIn FROM \"lives_in.csv\"");

    // Execute a simple query.
    auto result =
        connection->query("MATCH (a:User)-[f:Follows]->(b:User) RETURN a.name, f.since, b.name;");

    // Output query result.
    while (result->hasNext()) {
        auto row = result->getNext();
        std::cout << row->getValue(0)->getValue<string>() << " "
                  << row->getValue(1)->getValue<int64_t>() << " "
                  << row->getValue(2)->getValue<string>() << std::endl;
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


# C API
Kùzu C API shares the same so/dylib library file with the C++ API and can be used by including the C header file (`kuzu.h`). The C API can be downloaded [here](https://github.com/kuzudb/kuzu/releases/latest).
Below is a short example of how to get started.
- Setup:
In this example, we assume that the so/dylib, the header file, the CSV files, and the cpp code file is under the same directory:

```
├── include                                    
│   ├── kuzu.h
│   └── ......
├── libkuzu.so / libkuzu.dylib
├── test.c                                           
├── user.csv
├── city.csv
├── follows.csv
└── lives_in.csv
```

- A `test.c` program:

```
#include <stdio.h>

#include "include/kuzu.h"

int main()
{
    // Create an empty database.
    kuzu_database *db = kuzu_database_init("test", 0);

    // Connect to the database.
    kuzu_connection *conn = kuzu_connection_init(db);

    // Create the schema.
    kuzu_query_result *result = kuzu_connection_query(conn, "CREATE NODE TABLE User(name STRING, age INT64, PRIMARY KEY (name))");
    kuzu_query_result_destroy(result);
    result = kuzu_connection_query(conn, "CREATE NODE TABLE City(name STRING, population INT64, PRIMARY KEY (name))");
    kuzu_query_result_destroy(result);
    result = kuzu_connection_query(conn, "CREATE REL TABLE Follows(FROM User TO User, since INT64)");
    kuzu_query_result_destroy(result);
    result = kuzu_connection_query(conn, "CREATE REL TABLE LivesIn(FROM User TO City)");
    kuzu_query_result_destroy(result);

    // Load data.
    result = kuzu_connection_query(conn, "COPY User FROM \"user.csv\"");
    kuzu_query_result_destroy(result);
    result = kuzu_connection_query(conn, "COPY City FROM \"city.csv\"");
    kuzu_query_result_destroy(result);
    result = kuzu_connection_query(conn, "COPY Follows FROM \"follows.csv\"");
    kuzu_query_result_destroy(result);
    result = kuzu_connection_query(conn, "COPY LivesIn FROM \"lives_in.csv\"");
    kuzu_query_result_destroy(result);

    // Execute a simple query.
    result = kuzu_connection_query(conn, "MATCH (a:User)-[f:Follows]->(b:User) RETURN a.name, f.since, b.name;");

    // Output query result.
    while (kuzu_query_result_has_next(result))
    {
        kuzu_flat_tuple *tuple = kuzu_query_result_get_next(result);

        kuzu_value *value = kuzu_flat_tuple_get_value(tuple, 0);
        char *name = kuzu_value_get_string(value);
        kuzu_value_destroy(value);

        value = kuzu_flat_tuple_get_value(tuple, 1);
        int64_t since = kuzu_value_get_int64(value);
        kuzu_value_destroy(value);

        value = kuzu_flat_tuple_get_value(tuple, 2);
        char *name2 = kuzu_value_get_string(value);
        kuzu_value_destroy(value);

        printf("%s follows %s since %lld \n", name, name2, since);
        free(name);
        free(name2);
        kuzu_flat_tuple_destroy(tuple);
    }

    kuzu_query_result_destroy(result);
    kuzu_connection_destroy(conn);
    kuzu_database_destroy(db);
    return 0;
}
```

- Compile and run `test.c`:
Since we did not install the `libkuzu` as a system library, we need to override the linker search path to correctly compile the C code and run the compiled program.

On Linux:
```
env LIBRARY_PATH=. LD_LIBRARY_PATH=. gcc test.c -lkuzu
env LIBRARY_PATH=. LD_LIBRARY_PATH=. ./a.out
```
On macOS:
```
env DYLD_LIBRARY_PATH=. LIBRARY_PATH=. clang test.c -lkuzu
env DYLD_LIBRARY_PATH=. LIBRARY_PATH=. ./a.out
```
Expected output:
```
Adam follows Karissa since 2020 
Adam follows Zhang since 2020 
Karissa follows Zhang since 2021 
Zhang follows Noura since 2022 
```

# Operating System Compatibility
Kùzu CLI, C and C++ API are pre-compiled for **macOS >= 10.15 for Intel-based Macs** and **macOS >= 11.0 for ARM-based Macs**. For Linux, Kùzu CLI and C++ API are pre-compiled for x86-64 architecture and supports most modern Linux distros such as **RHEL/CentOS/Rocky Linux/Oracle Linux 7.0 or later and Ubuntu 18.04 or later**. For a specific list of Linux distros that we tested on, please refer to [this spreadsheet](https://docs.google.com/spreadsheets/d/13A3MA3IsBJB_CJBSMqWFktIzyb6unJqH0-3njDycDpQ/).

Kùzu Python API wheels has been pre-compiled for **CPython 3.7 to 3.11**. For macOS, the OS compatibility is the same as the pre-compiled CLI and C++ API (i.e.  macOS >= 10.15 for Intel-based Macs and macOS >= 11.0 for ARM-based Macs). For Linux, the pre-compiled wheels follows `manylinux2014_x86_64` standard. Please refer to [this link](https://github.com/pypa/manylinux) to check the compatibility with your distro.
