# Database
We will use the database, whose schema and data import commands are given [here](example-database.md):

<img src="running-example.png" width="800">

You can import this database by copy pasting the comands 
# Order by
Order by is the clause where you define the order in which you want the query results to be displayed. The Kùzu currently supports two sorting orders: `ASC`, `DESC`. By default if no sorting orders are specified, the Kùzu sorts rows in ascending order and nulls are placed first. 
## Important Notes:
- ORDER BY IN [WITH](with.md): Only allow "Top k" type queries with LIMIT and/or SKIP. That is an ORDER BY clause can follow a WITH if and only if there is a LIMIT and/or SKIP following ORDER BY. And if there is a LIMIT and/or SKIP, the LIMIT and SKIP will consume its input/result set according to the given order. But any operator after that ignores the order.


TODO: try some sample queries from demo_db
