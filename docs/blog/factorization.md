---
layout: default
title: What Every Competent GDBMS Should Do (aka The Goals & Vision of Kùzu)  
permalink: /blog/what-every-gdbms-should-do-and-vision.html
parent: Blog
---
by Semih Salihoğlu, Jan 23rd, 2023
# Factorized Query Processing & Great Ideas from Database Theory 1

Many of the core principles of how to develop DBMSs are well understood.
For example, a very good query compilation paradigm is to 
map high-level queries to a logical plan of relational operators, then optimize this plan,
and then further map it to an executable code often in the form of a physical query plan. 
Similarly, if you want updates to a DBMS to be atomic and durable,
a good paradigm is to use a write-ahead log that serves as a source of truth
and can be used to undo or redo operations. Many systems adopt such common wisdom paradigms. 
As core DBMS researcher, once in a while however, you run into a very simple idea 
that deviates from the norm and is not currently adopted that gets you very excited. 
Today, I want to write about one such idea called [factorization](https://www.cs.ox.ac.uk/dan.olteanu/papers/os-sigrec16.pdf). 

{: .highlight}
> **Tldr: The key takeaways are:**
> - **Overview of Factorization & Why Every GDBMS Must Adopt It**: Factorization
    is a compression technique to compress the intermediate results
    that query processors generate when evaluating many-to-many (m-n) joins. 
    Factorization can compress an intermediate result size exponentially 
    in the number m-n joins in the query.
> - **Example Benefits of Factorization**: Benefits of keeping intermediate
    results smaller reduces the computation processors perform 
    on many queries. Examples include reducing copies by keeping the output
    data size small, reducing filter and expression evaluation computations exponentially,
    and performing very fast aggregations.
> - **How Kùzu Implements Factorization:** Kùzu's query processor
    is designed to achieve 3 design goals: (i) factorize intermediate results;
    (ii) always perform sequential scans of database files; and (iii) avoid
    scanning large chunks of database files when possible. In addition the processor is 
    vectorized as in modern columnar DBMSs. These design goals are achieved by passing 
    multiple *factorized vectors* between each other and using modified HashJoin operators 
    that do *sideways information passing* to avoid scans of entire files.


Factorization is a very
simple data compression technique. Probably all 
compression techniques you know are designed to compress database files that 
are stored on disk. Think of run-length encoding, dictionary compression, or bitpacking.
In contrast, you can't use factorization to compress your raw database files. 
Factorization has a very unique property:
it is designed to compress the intermediate 
data that are generated when query processors of DBMSs evaluate 
many-to-many (m-n) growing joins. If you have read [my previous blog](https://kuzudb.com/blog/what-every-gdbms-should-do-and-vision.html),
efficiently handling m-n joins was one of the items on my list of properties 
that competent GDBMSs should excel in. This is because 
the workloads that GDBMSs commonly handle contain m-n joins
across node records. Each user in a social network or an account in a financial transaction network
or will have thousands of connections and if you want
a GDBMS to find patterns on your graphs, you are 
asking queries with m-n joins. Factorization is directly designed
for these workloads and because of that every competent GDBMS must develop 
a factorized query processor. In fact, if I were to try to write a new analytical RDBMS,
I would probably also integrate factorization into it.

This post forms the 2nd part of my 3-part posts on the contents of our [CIDR paper](https://www.cidrdb.org/cidr2023/papers/p48-jin.pdf)
where we introduced Kùzu. The 3rd piece will be on another technique called worst-case 
optimal join algorithms, which is also designed for a specific class of m-n joins.
Both in this post and the next, I have two goals. First is to try to articulate these techniques 
using a language that is accessible to general software engineers. 
Second, is to make people appreciate the role of 
pen-and-paper theory in advancing the field of DBMSs. Both of these techniques were first 
articulated in a series of purely theoretical papers which gave excellent 
practical advise on how to improve DBMS performance. 
Credit goes to the great theoreticians who pioneered these techniques whom I will cite
in these posts. Their work should be highly appreciated.
