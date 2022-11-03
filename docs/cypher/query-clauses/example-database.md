# Example Database
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
Data import:
```
COPY User From "user.csv"
```

### City nodes:
Schema:
```
CREATE NODE TABLE City(name STRING, population INT64, PRIMARY KEY (name))
```
city.csv
```
Waterloo,150000
Kitchener,200000
Guelph,75000
```
Data import:
```
COPY City FROM "city.csv"
```
### Follows relationships:
Schema:
```
CREATE REL TABLE Follows(FROM User TO User, since INT64)
```
follows.csv
```
Adam,Karissa,2020
Adam,Zhang,2020
Karissa,Zhang,2021
Zhang,Noura,2022
```
Data import:
```
COPY Follows FROM "follows.csv"
```
### LivesIn relationships:
Schema:
```
CREATE REL TABLE LivesIn(FROM User TO City)
```
lives-in.csv
```
Adam,Waterloo
Karissa,Waterloo
Zhang,Kitchener
Noura,Guelph
```
Data import:
```
COPY LivesIn FROM "lives-in.csv"
```
### Graph Visualization
The above database corresponds visually to the following graph:
![](running-example.png)
