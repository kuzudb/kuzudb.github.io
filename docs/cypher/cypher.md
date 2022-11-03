# Example Dataset
For the clauses we cover here, we will use the following graph database that
consists of User and City nodes, Follows relationships between Users,
and LivesIn relationships between Users and Cities.

The DDL statements to define the schema of this database, the csv files containing
the records of the tables in the database and the data import (`COPY FROM`) commands, 
and the visualition of this database as a graph are given below.


### User nodes:
Schema:
```
CREATE NODE TABLE User(name STRING, age INT64, PRIMARY KEY (name))
```

user.csv:
```
Adam,30
Karissa,40
Zhang,50
Noura,25
```
Data Import:
```
COPY User From "user.csv"
```

### City nodes:
```
```
### Follows relationships:

### LivesIn relationships:

### Graph Visualization

# MATCH Clause
