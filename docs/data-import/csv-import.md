
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

Here are examples of specifying that there is a header file and changing delimiter from `,` to `|`:
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

## `COPY FROM` a CSV File to Node Tables 
Let us consider a `User(name STRING, age INT64, reg_date DATE, PRIMARY KEY (name))` node table with the name, age, and reg_date predefined properties.

### Column Order in Node Tables and Ad-hoc Node Properties.
With or without a header line, the order of the columns need to match the order of the predefined properties for node tables
in the catalog. This is the order you used when defining the schema of your node table. 

Example:
```
TODO: Fill with a sample CSV file.
```

## `COPY FROM` a CSV File to Rel Tables

### Column Order in Rel Tables 
If the FROM and TO nodes have a single label (e.g., in `CREATE REL TABLE Follows(FROM User TO User, since DATE)`), then:
  - 1st column: Primary key of the FROM node. If your CSV file has a header, make the name of the column `FROM`. 
  - 2nd column: Primary key of the TO node. If your CSV file has a header make the name of the column `TO`. 
  - 3rd, 4th, etc. columns: The predefined properties on the relationship table as defined in your `CREATE REL TABLE` command. 
    If you have a header, make the names of the columns math those in your rel table schema. 

Example:
```
TODO: Fill with a sample CSV file
```

If either the FROM or TO node have multiple labels, then you need an additional column before the primary key column 
of those nodes to specify the label of those nodes. For example, consider `CREATE REL TABLE Likes(FROM User|Admin TO User)`
table. Then the columns of the CSV files would be
   - 1st column: NodeLabel of FROM node. If your CSV file has a header, make the name of the column `fromType`. 
   - 2nd column: Primary key of FROM Node.

Similarly, you would add an additional `toType` before the TO column, if the TO nodes have multiple labels.

[^1]: Removing this constraint is in our immediate roadmap.
