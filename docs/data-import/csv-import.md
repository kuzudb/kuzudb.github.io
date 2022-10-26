
# Data Import From CSV Files
You can load the initial versions of your node and rel tables from CSV files 
using the `COPY FROM` command. You should use CSV loading if you are ingesting large databases. 
`COPY FROM` commands can be used when your tables are completely empty[^1]. 

## Configuring CSV Reading
Kùzu's CSV reader has default configurations for a set of parameters for the CSV file, such as delimiters 
and escape character. These can be manually changed by specifying them inside `( ... )` at the end of the
the `COPY FROM` command. The following table specifies the parameters and their default values.

| Parameter | Description | Default Value |
|:-----|:-----|:-----|
| HEADER | Whether the first line of the CSV file is the header. Can be true or false. | false |
| DELIM | Character that separates different columns in a lines. | `,`|
| QUOTE | Character to start a string quote. | `"` |
| ESCAPE | Character within string quotes to escape QUOTE and other characters, e.g., a line break. <br/> See the important note below about line breaks lines below.| '\\' |
| LIST_BEGIN/LIST_END | For the list data type ([see the data types supported by Kùzu](...)), the delimiters to specify <br/> list begin and list end characters | `[`, `]`|

Here are examples of specifying that there is a header file and changing the delimiter from `,` to `|`:
```
COPY User FROM "user.csv" (HEADER=true)

COPY User FROM "user.csv" (DELIM="|")
```

## Several Notes
Here are several important rules about Kùzu's CSV reader: 
- **Starting with empty tables:** `COPY FROM` commands can be used when your tables are completely empty[^1]. So you should 
use `COPY FROM` immediately after you define the schemas of your tables. 
- **Copying Nodes Before Rels:** In order to copy a rel table R from a csv file F, the nodes that appear F need to be 
already in the database (either imported in bulk or inserted through Cypher data manipulation commands).
- **Line break/new line character (CRLF):** The line break character (one corresponding to the RETURN or Enter on most keyboards) can 
only appear to start a new row in your CSVs. It cannot appear inside column values, e.g, inside a string column between "...CRLF...". 
`COPY FROM` commands will fail if this happens. You should instead use '\n' character to specify line breaks inside your strings.
- **Wrapping strings inside quotes:** Kùzu will accept strings in string columns both with and without quotes. 
- **Header line:** Header lines, if they exist, are the first lines and ignored by the CSV reader. A header line can be added to your 
   CSV files for your convenience but the CSV reader, both for CSVs for node as well as relationship tables, assumes a fixed order
   of columns, so simply ignores the header row.
  
## `COPY FROM` a CSV File to Node Tables 
Let us consider a `User(name STRING, age INT64, reg_date DATE, PRIMARY KEY (name))` node table with the name, age, and reg_date predefined properties.

### Column Order in Node Tables and Ad-hoc Node Properties.
The order of the columns need to match the order of the predefined properties for node tables
in the catalog. This is the order you used when defining the schema of your node table. 

Example CSV file without a header file:
```
user.csv
Adam,30,2020-06-22
Karissa,40,2019-05-12
...
```
Same file with header would have the following first line:
```
name,age,reg_date
```

## `COPY FROM` a CSV File to Rel Tables

### Column Order in Rel Tables
The order of the columns are as follows:
  - FROM Node Column(s): There are two cases here:
    1. If the FROM nodes of the relationship can have a single label (as defined the REL TABLE schema), then the first column is the primary key of the from nodes.
    2. If FROM nodes can contain multiple labels, then the first first column specifies the from nodes' labels, and the second column specifies their primary keys.
  - TO Node Column(s): The next 1 or 2 columns similarly specify either the TO nodes' primary key (if TO nodes can take a single label) or their label and then their primary keys (if TO nodes can take multiple labels)
  - Rest of the columns: The predefined properties on the relationship table as defined in your `CREATE REL TABLE` command. 

Here are a few examples:
Consider the `CREATE REL TABLE Follows(FROM User TO User, since DATE)` table. An example CSV file would look as follows:
```
follows.csv
Adam,Karissa,2010-01-30
Karissa,Michelle,2014-01-30
...
```
You can use `COPY Follows FROM "follows.csv'` to load this file.

As another example, consider `CREATE REL TABLE Likes(FROM User|Pet TO User) An example CSV file for the Follows would be:
```
likes.csv
User,Adam,Karissa
Pet,Fluffy,Karissa
...
```
This declares 2 edges: (Adam with label User)-[:Likes]->(Karissa with label User) and (Fluffy with label Pet)-[:Likes]->(Karissa with label User). So, Adam and Fluffy come from different node tables.

[^1]: Removing this constraint is in our immediate roadmap.
