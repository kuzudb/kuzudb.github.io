---
layout: default
title: Meet Kùzu
parent: Blog
---

# Meet Kùzu 🤗

Today we are very excited to make an initial version of [Kùzu public on github](https://github.com/kuzudb/kuzu)! 
Kùzu is a new embedddable property graph database management system (GDBMS) that is 
designed for high scalability and very fast querying. We are releasing 
Kùzu today under a permissible MIT license. Through years of research on GDBMSs, we observed a lack of
highly efficient GDBMS in the market that adopts state-of-the-art 
querying and storage techniques and that can very easily integrate into applications, 
similar to DuckDB or SQLite. Kùzu aims to fill this space and evolve into the 
go-to open-source system to develop
graph database applications, e.g., to manage and query your knowledge graphs, 
and develop graph machine learning and analytics pipelines, 
e.g., in the Python data science ecosystem. 

Kùzu's core architecture is informed by 6 years of research we conducted 
at University of Waterloo on an earlier prototype GDBMS called [GraphflowDB](http://graphflow.io/). 
Unlike GraphflowDB, which was intented to be a prototype for our research, Kùzu aims to be
a usable feature-rich system. Some of the primary features of Kùzu's  architecture are:
   - Flexible Property Graph Data Model and Cypher query language
   - Embeddable, serverless integration into applications
   - Columnar disk-based storage
   - Columnar sparse row-based (CSR) adjacency list/join indices
   - Vectorized and factorized query processor
   - Novel and very fast join algorithms
   - Multi-core query parallelism
   - Serializable ACID transactions

What we are releasing today includes many of the features of the core engine. This is what we
called the "Phase 1" of the project. In the next "Phase 2" of the project, as we continue adding 
more features to the core engine, e.g., better support for ad-hoc properties, string compression,
and support for new recursive queries, we will also be focusing developing around the core engine
to more easily ingest data into the system and output data to downstream data science/graph data science
libraries. You can keep an eye on our tentative [roadmap here](https://github.com/kuzudb/kuzu/issues/981). 
You can also read more about some of our longer term goals and vision as a system
in [our new CIDR 2023 paper](https://cs.uwaterloo.ca/~ssalihog/papers/kuzu-tr.pdf), 
which we will present in Amsterdam next January. 

*And most importantly please start using Kùzu, tell us your feature requests, use cases, and report bugs. We can evolve into a
more stable, usable, and feature-rich system only through your feedback!* 

We are looking forward to to your feedback and a long and exciting journey as we continue developing Kùzu 🤗. 

*by Kùzu team, 11-15-2022, Waterloo, ON, Canada*

<sub>*ps: For interested readers: the word kù-zu is the Sumerian (the oldest known human language) word for "wisdom".*</sub>
