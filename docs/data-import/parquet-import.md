---
layout: default
title: Parquet import
parent: Data import
---

# Data Import From Parquet Files
Apache Parquet is an open source, column-oriented data file format designed for efficient data storage and retrieval. We support data import from parquet files through `COPY FROM` command.

## Notes
Similar to importing from CSV files, there are several rules about importing from parquet files.
- **Starting with empty tables**: see [notes in CSV import](csv-import.md#several-notes) for details.
- **Copying nodes before rels**: see [notes in CSV import](csv-import.md#several-notes) for details.
- **Extra columns in csv files**: see [notes in CSV import](csv-import.md#several-notes) for details.

## `COPY FROM` a Parquet File to a Node Table
Similar to copy from a csv file to a node table, the order of the columns in a parquet file neeed to match the order of predefined properties for node tables in the catalog, i.e. the order used when defining the schema of a node table.

Example parquet file for "user.parquet". The output is obtained from `print(pyarrow.Table)`.
```
pyarrow.Table
name: string
age: int64
----
name: [["Adam","Karissa","Zhang","Noura"]]
age: [[30,40,50,25]]
```
To load this parquet into User table. Simply run
```
COPY User FROM "user.parquet";
```

## `COPY FROM` a Parquet File to a Rel Table
Similar to copy from a csv file to a rel table. The order of columns should the "from" column, the "to" column and the predefined properies on the rel table as defined in `CREATE REL TABLE` command.

Example parquet file for "follows.parquet". The output is obtained from `print(pyarrow.Table)`.
```
pyarrow.Table
from: string
to: string
since: int64
----
from: [["Adam","Adam","Karissa","Zhang"]]
to: [["Karissa","Zhang","Zhang","Noura"]]
since: [[2020,2020,2021,2022]]
```
To load this parquet into Follows table. Simply run
```
COPY Follows FROM "follows.parquet";
```
