# Kùzu 0.0.2 Release
This post is about the second release of Kùzu. However, we want to start with something much more
important:

### Donate to the Victims of [Türkiye-Syria Earthquake](https://www.bbc.com/news/world-middle-east-64590946):
Our hearts, thoughts, and prayers go to all the victims, those who survived and those who passed,
in Syria and Türkiye. 
There will be a very difficult winter for all those who survived so everyone needs to help. 
Here are two pointers for trustworthy organizations we know of that are trying to help
victims on the ground. For Türkiye (where Semih is from), you can donate to [Ahbap](https://ahbap.org/bagis-kategorisi/5)
(put a large number because the donation currency is in TL and 1 CAD = 14 TL; 1 USD = 19TL); and for Syria 
you can donate to the [White Helmets](https://www.whitehelmets.org/en/). Be generous! We'll leave pointers to several 
other organizations below in this footnote[^1].

## Overview of Kùzu 0.0.2
Back to our release. Kùzu codebase is changing fast but this release still has a focus: we 
have worked quite hard since the last release to integrate Kùzu to import data from
different formats and export data to different formats. There are also several important 
features in the new Cypher clauses and queries we support,  additional string 
processing capabilities, and new DDL statement support. We will give a summary of each 
of these below. 

For installing new version, please visit the [installation guide](https://kuzudb.com/docs/getting-started.html) and
the full
[release notes are here](https://github.com/kuzudb/kuzu/releases). If you are eager to play with
a few Colab notebooks, here are several links: 
- [General Kùzu Demo](https://colab.research.google.com/drive/14oqEC8p7fmkjetnpfDmx40WZoILpSaeL?usp=sharing#scrollTo=vKj5lBSDxgaT)
- [Export Query Results to Pytorch Geometric: Node Property Prediction Example](https://colab.research.google.com/drive/1fzcwBwTY-M19p7OOTIaynfgHFcAQo9NK?usp=sharing#scrollTo=nyXPXQ2dMesl) 
- [Export Query Results to Pytorch Geometric: Link Prediction Example](https://colab.research.google.com/drive/1QdX7CDdajIAb04lqaO5PfJlpKG-ljG28?usp=sharing#scrollTo=KIZPfDBkVJSB)
- [Export Query Results to NetworkX](https://colab.research.google.com/drive/1NDsnFDWcSGoaOl-mOgG0zrPG2VAr8Q6H?usp=sharing#scrollTo=AkpBul7ZpUM5)

## Exporting Query Results to Pytorch Geometric and NetworkX
Perhaps most excitingly, we have added the first capabilities to integrate with 2 popular 
graph data science
libraries: (i) [Pytorch Geometric](https://github.com/pyg-team/pytorch_geometric) (PyG) for performing 
graph machine learning; and (ii) [NetworkX](https://networkx.org/) for a variety of 
graph analytics, including visualization. 

### Pytorch Geometric: `QueryResult.get_as_torch_geometric()` function
Our [Python API](https://kuzudb.com/docs/client-apis/python-api/overview.html) now has a 
new `QueryResult.get_as_torch_geometric()` function that 
converts results of queries to PyG's in-memory graph representation 
[`torch_geometric.data`](https://pytorch-geometric.readthedocs.io/en/latest/modules/data.html).
If your query results contains nodes and relationship objects, then the function uses 
those nodes and relationships to construct either `torch_geometric.data.Data` or 
`torch_geometric.data.HeteroData` objects. The function also auto-converts any numeric or boolean property 
on the nodes into tensors on the nodes that can be used as features in the `Data/HeteroData` objects.
Any property that cannot be auto-converted, or edge properties are also returned in case you need
want to manually put them into the `Data/HeteroData` objects.

**Colab Demonstrations:**
Here are 2 Colab notebooks that you can play around with to see how you can develop graph learning
pipelines using Kùzu as your GDBMSs:
1. [Node property prediction](https://colab.research.google.com/drive/1fzcwBwTY-M19p7OOTIaynfgHFcAQo9NK?usp=sharing#scrollTo=nyXPXQ2dMesl)
2. [Link prediction](https://colab.research.google.com/drive/1QdX7CDdajIAb04lqaO5PfJlpKG-ljG28?usp=sharing#scrollTo=KIZPfDBkVJSB)

The examples demonstrate how to extract a subgraph,
train graph convolutional or neural networks (GCNs or GNNs), make some node property
or link predictions and save them back in Kùzu so you can query these predictions.

### NetworkX: `QueryResult.get_as_networkx()` function
Our [Python API](https://kuzudb.com/docs/client-apis/python-api/overview.html) now has a 
new `QueryResult.get_as_networkx()` function that can convert query results
that contain nodes and relationships into NetworkX directed or undirected graphs.  
Using this function, you can build pipelines
that benefits from Kùzu's DBMS functionalities (e.g., querying, data extraction and transformations,
using a high-level query language with very fast performance), and NetworkX's rich library of 
graph analytics algorithms.

**Colab Demonstration:**
Here is a [Colab notebook](https://colab.research.google.com/drive/1NDsnFDWcSGoaOl-mOgG0zrPG2VAr8Q6H?usp=sharing#scrollTo=AkpBul7ZpUM5) 
that you can play around with that shows how to do basic graph visualization of query results
and build a pipeline that computes PageRanks of a subgraph and store those PageRank 
values back as new node properties in Kùzu and query them.

## Data Import from and Export to Parquet and Arrow
We have removed our own CSV reader and instead now use [Arrow](https://arrow.apache.org/)
as our default library when bulk importing data through [`COPY FROM` statements](https://kuzudb.com/docs/data-import/csv-import.html). 
Using Arrow, we can not only bulk import
from CSV files but also from arrow IPC and parquet files. We detect the file type
from the suffix of the file; so if the query says `COPY user FROM `./user.parquet`,
we infer that this is a parquet file and parse it so. See the details [here](xxx).

## Multi-labeled or Unlabeled Queries
A very useful feature of the query languages of GDBMSs is their
ability to elegantly express unions of join queries. 
We had written about this feature of GDBMSs in this blog post about 
[What Every Competent GDBMS Should Do](https://kuzudb.com/blog/what-every-gdbms-should-do-and-vision.html#feature-4-schema-querying)
(see the last paragraph of Section `Feature 4: Schema Querying`).
In Cypher, a good example
of this is to not bind the node and relationship variables to a specific node/relationship
labels/tables. Consider this query:
```
MATCH (a:User)-[e]->(b)
WHERE a.name = 'Karissa'
RETURN a, e, b
```
Thsi query asks for all types of relationships that Karissa can have to any possible other
node (not necessarily of label `User`) in the query. So if the database contains 
`Likes` relationships from `Users` to `Comments`, `Follows` relationships
from `Users` to `Users`, and `LivesIn` relationships from `Users` and `Cities`, 
variables e and b can bind to records from all of these
relationship and node labels, respectively. 

You can also restrict the labels of nodes/rels to a fixed set that contains
more than one label.
For example you can do:

```
MATCH (a:User)-[e:Likes|Follows]->(b)
WHERE a.name = 'Karissa'
RETURN a, e, b
```
This forces e to match to only Likes relationship or Follows relationship records (so
excludes the `LivesIn` records we mentioned above).

Kùzu now supports such queries. Our query execution
is based on performing scans of each possible node/rel table and index
and when a variable `x` can bind to multiple node/rel tables, `L1, L2, ..., Lk`,
we reserve one vector for each possible property of each node/rel table.  
If anyeone has any optimizations to do something smarter, it would be very interesting
to hear!



## Other Features: 
TODO(Guodong): Write better
- CASE
- Enhancements to Strings: regexes and UTF-8..
- XYZ
- Removal of relationships that can be between multiple source or destionation labels.
- 


Enjoy our new release and don't forget to donate to the earthquake victims.


*by Kùzu team, 02-13-2023, Waterloo, ON, Canada**


[^1]: For Türkiye two other organizations are [AFAD](https://en.afad.gov.tr/earthquake-campaign), which is the public
institute for coordinating natural disaster response and [Akut](https://www.akut.org.tr/en/donation), a volunteer-based
and highly organized search and rescue group. For Syria, another campaign I can
recommend is [Molham Team](https://molhamteam.com/en/campaigns/439?fbclid=IwAR3_t443XME9Gh0r75KM4VpQ58WLNPd8w8tyMV2JprdObwecPwhWAdX2FOQ), which is an organization founded by Syrian refugee students.
