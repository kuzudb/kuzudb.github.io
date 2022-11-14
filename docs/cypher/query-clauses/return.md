# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="running-example.png" width="800">

You can import this database by copy pasting the comands on that page. 

*Note: When using the CLI, please modify any multi-line query in the documenation to be in a single line.*

# RETURN
`RETURN` is similar to the `SELECT` clause of SQL. RETURN is where the final results of the
query are specified, which can be listed as a list of expressions, e.g., variables that have
bound to nodes or relationships, aliases, or more complex expressions. RETURN can also be used 
for performing group-by and aggregations as well as duplication removing (using the `DISTINCT` clause). 
We discuss several common expressions used in RETURN.

TODO: Link to supported aggregation functions in a table.
