---
layout: default
title: Factorization & Great Ideas from Database Theory (1)
permalink: /blog/factorization.html
parent: Blog
nav_order: 2
---
<p align="center">
  <a href="https://github.com/kuzudb/kuzu"><img src="../../kuzu-logo.png" width="300"></a>
</p>

<p align="center">
  <script async defer src="https://buttons.github.io/buttons.js"></script>
  <a class="github-button" href="https://github.com/kuzudb" data-size="large" aria-label="Follow @kuzudb on GitHub">Follow @kuzudb</a>
</p>

by Semih Salihoğlu, Feb 22nd, 2023
# Every Graph DBMSs Must Implement "Worst-case Optimal" Joins
Joins of a sets of records is objectively the most expensive operation in DBMSs.
In my previous post on factorization, I said that in the field of databases, once in a while you run into a very simple idea that deviates from the norm that gets you very excited. Today, I will discuss another such idea, worst-case optimal join (wcoj) algorithms. Wcoj algorithms and the theory around it in one sentence says this:

  - queries involving complex "cyclic joins" over many-to-many relationships should be 
    evaluated column at a time instead of the norm table at a time. 
Wcoj algorithms find their best applications when finding cyclic patterns on graphs, such as cliques or cycles, which is common in the workloads of fraud detection and
recommendation applications. As such, they should be integrated into every graph DBMS and many RDBMSs (and I am convinced that they eventually will).


{: .highlight}
> **Tldr: The key takeaways are:**
> - **History of Wcoj Algorithms:** Research on wcoj algorithms started with a solution to open question 
     about the maximum sizes of join queries. This made researchers realize this: the traditional 
     "binary join plans" paradigm of generating query plans that join 2 table a time
     until all of the tables in the query are joined is provably
     suboptimal for some queries. Specifically, When join queries are
     cyclic, which in graph terms means when the searched graph pattern has cycles
     in it, and the relationships between records are many-to-many, then this 
     paradigm can generate unnecessarily large amounts of intermediate results.
> - **Core Algorithmic Step of Wcoj Algorithms:**:  Wcoj algorithms fix this sub-optimality and 
    instead perform the joins one column at a time using multiway intersections.
> - **How Kùzu Integrates Wcoj Algorithms:** Kùzu generates plans that seamlessly mix binary joins 
    and wcoj-style multiway intersections. Multiway intersections are performed by an operator called 
    "multiway ASP Join", which has a build phase that creates sorted indices on the fly; and a 
    probe phase that performs multi-way intersections using the built indices.
> - **Yes, the Term "Worst-case Optimal" Is Confusing, Even to Don Knuth:** I know, Don Knuth also found the term "
    "worst-case optimal" a bit confusing. See my [anecdote on this]. It basically means that the 
    worst-case runtimes of  these algorithms are asymptotically optimal.

## Joins, A Running Example & Traditional Table-at-a-time Joins
Joins are objectively the most expensive and powerful operation in DBMSs.
In SQL, you indicate them in the FROM clause by listing
a set of table names, in Cypher in the MATCH clause, where you draw a graph pattern
to match, describing how to join node records with each other.
As a running example, consider a simple social network of who follows whom, 
whose node-link diagram is shown below. I am also showing the table that contains these records 
in a `Follows` table and a simple `User` table.

Consider finding triangles, which is one of the simplest 
forms of cycles and cliques, in this network. The SQL and Cypher 
versions of this query are shown below. 

```
SQL:
SELECT *
FROM Follows f1, Follows f2, Follows f3
WHERE f1.dst=f2.src AND f2.dst=f3.src AND
      f3.dst = f1.src

Cypher:
MATCH (a:User)-[f1:Follows]->(b:User)-[f2:Follows]->(c:User)-[f3:Follows]->(a)
RETURN  *
```
That long MATCH clause "draws" a triangle and for our case here is equivalent
to joining three copies of the Follows table. 

Now ever since the System R days & [Patricia Selinger's seminal paper](https://courses.cs.duke.edu/compsci516/cps216/spring03/papers/selinger-etal-1979.pdf) that 
described how System R compiled and optimized SQL queries, there has been an 
unchallenged dogma in DBMSs that the joins specified in the query would be 
evaluated pairwise, table at a time. For those interested in the history
of DBMSs, here's a blurb from Selinger's paper, where one can see this 
assumption: 
"*In System R a user need not know how the
tuples are physically stored ... Nor does a user 
specify in what order joins are to be performed. The System
R optimizer chooses both join order and ...*"
To this day, this is the norm. DBMSs pick a "join order" which is the order in 
which the tables should be joined iteratively 2 at a time. 
In the above example, for example 
there are three possible join orders: 
- (i) $((F1 \bowtie F2) \bowtie F3)$; (ii) $(F1 \bowtie (F2) \bowtie F3))$; 
  and (iii) $((F1 \bowtie F3) \bowtie F2)$. 

The optimization is of course more complex than that because these orders do not specify which
binary join algorithm to use when joining each pair of tables, e.g., hash joins, index nested loop joins, merge joins, etc. But they
all follow the same paradigm of joining 2 base or intermediate tables iteratively, until all tables are joined (all in all they will use exactly n-1 join operators
to join n tables): hence the term "binary joins" to describe
the plans of these existing systems.


A Math Puzzle That Started it All 

So, what's the problem with binary join plans? When join queries are cyclic
and the relationships are many-to-many, they can generate provably large amounts
of (so unnecessary in a formal sense) intermediate results. First, cyclicity for
join queries has formal (and a bit intimidating) definitions but if you think of
graph patterns, it simply means that the searched pattern's undirected version has
cycles. Why do binary joins generate unnecessarily large intermediate results? I'll
get to this below but a bit of history on the origins of this insight because I think it is fascinating.
The whole topic of "worst-case optimal joins" in fact started with 2 papers, a 2007 SODA and a 2008 FOCS paper, which are top venues in algorithms and theory by 
theoreticians who solved a fundamental open question/puzzle 
about join queries (the SODA paper was on the related constraint satisfaction problem). The question in its simplified form is this:

Suppose I give you: (i) an arbitrary "natural" join query of $m$ relations. In DBMS literature we denote it with Q=R1(a11, ..., a_{r1}) \bowtie ... \bowtie Rm(a1, ..., a_{rm}). Natural means that the join predicates are equality predicates on identical column names; and (ii) the sizes of R1, ..., Rm, e.g., for simplicity assume they 
all have $IN$ many tuples. But you are allowed to pick the values and the question is: how large can you make the final output. So for example, if I told you that there are
$IN$ many tuples in the `Follows` tables, what is the maximum number of triangle outputs can there be. The question is interesting in the set semantics when you cannot pick every tuple (x,x), in which case the answer is trivially $IN^3$, because every
triple-combination of tuples successfully join.

It still surprises me that the answer to this question was not known until circa 2008.
Now excuse me for bombarding your brains with some necessary math definitions, but
this might be of interest to some of you and a good thing to write about so that
people appreciate the role of pure pen-and-paper theoretical work in systems.
These two papers answered this question. The answer is: $IN^{\rho^*}$, where $\rho^*$ is a property of $Q$ called the `fractional edge cover number` of $Q$. 
Don't be intimidated and continue. It is essentially the solution to
an optimization problem and best explained in graph terms. The optimization problem is this: put a weight between [0, 1] to
each "query edge" such that each "query node" is "covered", i.e., the sum of
the query edges touching each node is > 1. Each such solution is called a an
edge cover; find the edge cover whose total weight is the minimum. That is 
called the fractional edge cover number of the query. For the triangle query, 
one cover is [1, 1, 0], which has
a total weight of 1 + 1 + 0 = 2, but 
the fractional edge cover number is [1/2, 1/2, 1/2] with a total weight number of 1.5.
In general, each edge cover is an upper bound but the SODA and FOCS papers showed
that the fractional edge cover number is the tight upper bound.
So the maximum number of triangles there can be on a graph with $IN$ edges is \Theta(IN^{1.5}) and there are such graphs. Very nice scientific progress!
Nowadays, the quantity $IN^{\rho^*}$ is known as the `AGM bound` of a query,
after the first letters of the last names of the authors of the FOCS paper.


Problem With Table-at-a-time/Binary Joins
Now this immediately made the same researchers that binary join plans are 
sub-optimal because they can generate polynomially more intermediate results
than this. This happens because the strategy of joining tables
2 at a time leads to intermediate computations, where some acyclic sub-joins is unnecessarily evaluated. For example, in the triangle query, this plan
((F1 \bowtie F2) \bowtie F3), first finds the  (F1 \bowtie F2) 2-paths.
This is a problem because often there can be many more of these acyclic sub-joins
than there can be outputs for the the cyclic join. For this plan, there can
be $IN^2$ many 2-paths which is polynomially larger than $IN^1.5$. 
For example in our running example, there are 1000*1000 = 1M many 2 paths,
but on a graph with 2001 edges there can be at most 89.5K triangles (well ours
has only 1 for demonstration purposes).
  
Any other plan in this case would have generated $IN^2$ many 2-paths, 
so there is no good binary join plan here. I want to emphasize that this sub-optimality does not occur 
when the queries are acyclic or when the dataset does not have 
many-to-many relationships. If the input dataset had the property that 
the joins were primary-foreign key non-growing joins 
or for example each node in the graph had 1 or 2 outgoing and incoming edge, then
binary join plans will work just fine. 

Solution: Column-at-a-time "Worst-case Optimal" Join Algorithms

So the immediate
next question is: are there algorithms whose runtimes can be bounded by 
$O(IN^1.5)$? If so, how are they different? The answer to this question
is a bit anti-climactic. The core idea existed in the 2007-8 SODA and FOCS papers,
though it was refined more ~4 years later in some theoretical papers
in the database fields [PODS]() and [SIGMOD Record](). The answer is simply
to perform the join column at a time, using multiway 
intersections. "Intersections of what?" you should be asking. We will be
intersecting binding of a particular column value, given a prefix of bindings.
So we will need some indices, either pre-existing ones or ones that we
need to construct on the fly. In the context of GDBMSs, GDBMSs already
have join indices (aka adjacency list indices) and for the common joins
they perform, this is enough.

Here is what we will do. I will here demonstrate a wcoj 
algorithm known as "Generic Join" from this paper. It can be seen
as the core and simplest wcoj algorithm.
As "join order", we will pick a "column order"
instead of Selinger-style table order. So in our triangle query,
the order could be a,b,c. Then we will build indices over each relation
that is consistent
with this order. In our case there are conceptually three (identical)
relations: Follows1(a, b), Follows2(b, c), Follows2(c, a). For Follows1,
we need to be able to read all b values for a given a value (e.g., a=5).
In graph terms, this just means that we need "forward join index".
For Follow2, because a comes earlier than c, we will want an index
that gives us c values for a given a value. This is equivalent to a
"backward join index". In graphs, because joins happen through the
relationship records, which can, for the purpose of the joins, 
be taught of as a binary relation (src, dst), 2 indices is enough
for our purposes. On general relations, one may need many more relations.

Then we will iteratively find: (i) all a values
that can be in the final triangles; (ii) all ab's that be in the final
triangles; and (iii) all abc's, which are the triangles.  
Let's simulate the computation:
 - Step 1: Find all a's. Here technically we need to identify all node IDs
that have an incoming and outgoing edge, because those are the only ones
that can be part of a triangle. However, for simplicity, let's just take
all a's. This is shown in the left in the above figure.
- Step 2: For each a value, e.g., a=1, we extend it to find all ab's that 
can be part of triangles: Here we use the forward index to look up all
b values for node with ID 1. So on and so forth. This will generate the second intermediate
relation.
- Step 3: For each ab value, e.g., the first tuple (a=1, b=2), we will
intersect all c's with a=1, and all c's with b=2. That is we will intersect
the backward adjacency list of the node with ID 1, and forward adjacency list of 
the node with ID 2. If the intersection is non-empty, we produce some triangles.
The result of this computation will produce the third and output table in the figure.

Note that this process did not produce the 2-paths as an intermediate step, 
which is how wcoj algorithms fix for the sub-optimality of binary join algorithm.s
 Now if your query was more complex then a wcoj algorithm can do k-way intersections where k > 2. For example on the 4-clique query shown on the left, suppose the 
column order is abcd, then given abc triangles, we would do a 3-way intersection of
forward index of a's, backward index of b's, and forward index of c's, to complete
the triangles to joins. This type of multiway intersections is the necessary 
algorithmic step to be efficient on cyclic queries (if the relationships are many-to-many).


How Kùzu Performs Worst-case Optimal Join Algorithms:

Our [CIDR paper]() describes this in detail, so I will be brief here. 
First, Kùzu mixes binary joins and wcoj-like multiway intersections
following some principles that my PhD student Amine had worked quite hard
on early in his PhD. I recommend these two papers, one by [Amine and me]()
and one by the [Umbra group]() on the state-of-art principles of
how to mix binary joins and wcoj algorithms in query plans. This is needed 
because in general unless the query has a very cyclic component where
multiway intersections can help, systems should just use binary joins.
So wcoj-like computations should be seen as complementing binary join plans.

Second, Kùzu's core join operator that does multiway intersections is
the "multiway ASP join" operator. To simulate the computation this operator
performs, let me change the query a little and add a filter on a.name = "Alice",
where suppose name is the primary key of `User` records. Suppose
further that Alice is the primary key of node with ID 1. I will only simulate a part
of the query plan in which we take
ab tuples and extend them to abc tuples through a 2-way intersection. ASPJoin
is a hash join-like operator with k phases: 1 accumulate phase, k-2 build phases, and 1 probe phase. In our example: 
- Step 1: Accumulate phase receives the ab tuples which will be extended.
This accumulation phase is an overhead but allows the system to see exactly
the forward/backward lists of which nodes will be intersected. In this case,
because there is a primary key filter on Alice, the only ab tuple that will be read
is (a=1,b=2).
- Step 2: Build phase 1: In the first build phase, ASPJoin will pass a semijoin filter
that only contains node 1's ID 
to the scan operator of the `Follows` table. The Scan uses this information only scan this list (and avoids
scanning the rest of the file that stores Follows edges). The list
contains { TODO fill } in an arbitrary order. This list is first sorted
based on the IDs of the neighbor IDs in the list stored
in a hash table HTa.
- Step 3: Build phase 2: This is similar to Build phase 1. Using a semijoin filter
with node 2's ID, we scan only node 2's forward list { TODO fill }, sort it, and then store in a hash table HTb.
- Step 4: Probe phase: We re-scan the accumulated ab tuples and for each one,
first probe HTa to fetch a=1's backward list, then probe HTb to fetch b=2's forward
list, then intersect these lists, which produces the triangle (a=1, b=2, c=TODO).
 
Therefore, the sideways passing of the semijoin filter ensures that each necessary 
adjacency list is scanned and sorted exactly once. Then the probe stage takes
sorted lists, intersects them and produces outputs. For k-way intersections, where
k > 2, we do a sequence of binary intersections.

This performs quite well. Our CIDR paper has some performance numbers but if there
are filters on the nodes such that semijoins can benefit a lot, then 
it outperforms Umbra's wcoj implementation. When there are no filters or the selectivity is low Umbra is faster. But although we did not compare in the paper,
both are incomparably faster than binary joins for highly cyclic queries. 
We prepared this codelab for you try the performance difference between
Kùzu's binary
join plans, which you can currently manually generate, and Kùzu's default plans
that use multiway ASP joins on highly cyclic triangle and 4-clique queries. You
can play around and do more examples.

A Thank You & a Fun Side Story About Don Knuth's Reaction to the Term "Worst-case Optimal"
 
Before, wrapping up, I want to say a thank you to [Chris R`e](), who is a
co-inventor of earliest of these algorithms. 
Back in the day, Chris had introduced me to this area in the 5th year of 
my PhD and we had written a paper on the topic in the space of evaluating
joins in distributed systems like MapReduce/Spark. I ended up working on
these algorithms and trying to make them performant in actual systems
for more years than I predicted. 
I also want to say thank you to Hung Ngo and Atri Rudra,
with whom I have had several conversations during those years on these algorithms.

Finally, let me end with a fun side story about the term "worst-case optimal": 
Several years ago [Don Knuth](https://uwaterloo.ca/computer-science/events/dls-donald-knuth-all-questions-answered) was visiting UWaterloo
to give a Distinguished Lecture Seminar (our department's most prestigious 
lecture series). A colleague of mine and I had a 1-1 meeting with him. 
Knuth is known to anyone with CS education but importantly he is
credited for founding the field of algorithm analysis. He asked me what I was working on
and I told him about these new algorithms called "worst-case optimal join algorithms".
The term was confusing to him and his immediate interpretation 
was: "Does that mean they are so good that they are optimal even in their worst-case performances?" 

The term actually means that the worst-case runtime of these algorithms
meets a known lower bound for the worst-case runtime of any join algorithm,
which is  $Omega(IN^{\rho^*})$. This lower bound is immediately implied
by the AGM bound: since there are $Omega(IN^{\rho^*})$ outputs in the worst-case,
any algorithm needs to take at least that much time. 
Probably a more standard term could be to call these algorithms 
"asymptotically optimal", just like people call sortmerge an asymptotically optimal sorting algorithm under the comparison model.



Final Words:
A couple things before I wrap up. First, as I said before, because the workloads
of applications in fraud, recommendations, or risk analysis in 
different type of networks are more likely to contain cyclic joins over
many-to-many relationships,
I am convinced operators that can perform wcoj-like join processing
need to exist in every competent GDBMS.

Second, what's other fundamental algorithmic developments have
been made in the field? It is surprising but there are still main gaps
in the field's 
understanding of joins and how fast joins can be processed. 
There has been some very interesting 
work in an area called "beyond worst-case optimal join algorithms", 
that ask very fundamental questions, whose answers are not well understood. 
For example: how can we prove that a join algorithm
is correct, i.e., it produces the correct output given its input? 
The high-level answer is that each join algorithm must be producing a proof,
through the comparison operations it makes, that its output is correct.
The goal of this line of research is to design practical algorithms that have 
the guarantee that the proofs they implicitly produce are optimal. This is 
probably the most ambitious level of optimality one can go for in algorithm design.
There are already some algorithms, e.g., an algorithm called [Tetris](). The area
is fascinating and has deep connections to computational geometry. I
advised a [Master's thesis]() on the topic once and learned quite a bit about
computational geometry that I never thought could be relevant to my work. The current
beyond worst-case optimal join algorithms however are currently not practical. 
Some brave souls need to get into the space and think hard about whether practical versions of these algorithms can be developed. That would be very exciting.

This completes my 3-part blog on the contents of our CIDR paper and 2 core techniques:
factorization and worst-case optimal join algorithms that we have integrated into
Kùzu to optimize for many-to-many joins. My goal in these blog
posts was to explain these ideas to a general CS/software engineering audience and
I hope these posts have made this material more approachable. 

We will keep writing more blog posts in the later months about our new releases,
and other technical topics. If there are things you'd like us to write about,
please reach out to us! Also please give Kùzu a try, prototype applications with it,
break it, let us know of your performance or other bugs, so we can continue improving
it. Give us a github star too and take care until the next posts!
