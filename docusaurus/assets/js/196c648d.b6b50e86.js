"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[5730],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=d(a),u=o,m=p["".concat(l,".").concat(u)]||p[u]||c[u]||r;return a?n.createElement(m,s(s({ref:t},h),{},{components:a})):n.createElement(m,s({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},228:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>h,toc:()=>c});var n=a(7462),o=(a(7294),a(3905)),r=a(1777),s=a(5762),i=a(995);a(2079);const l={slug:"what-every-gdbms-should-do-and-vision",authors:["semih"],tags:["vision"]},d="What Every Competent GDBMS Should Do (aka The Goals & Vision of K\xf9zu)",h={permalink:"/docusaurus/blog/what-every-gdbms-should-do-and-vision",source:"@site/blog/2023-01-12-what-every-gdbms-should-do/index.md",title:"What Every Competent GDBMS Should Do (aka The Goals & Vision of K\xf9zu)",description:"As a co-implementor of the K\xf9zu GDBMS and",date:"2023-01-12T00:00:00.000Z",formattedDate:"January 12, 2023",tags:[{label:"vision",permalink:"/docusaurus/blog/tags/vision"}],readingTime:18.77,hasTruncateMarker:!0,authors:[{name:"Semih Saliho\u011flu",title:"CEO of K\xf9zu Inc. & Associate Prof. at UWaterloo",url:"https://cs.uwaterloo.ca/~ssalihog/",imageURL:"https://kuzudb.com/img/blog/semih.jpg",key:"semih"}],frontMatter:{slug:"what-every-gdbms-should-do-and-vision",authors:["semih"],tags:["vision"]},prevItem:{title:"Factorization & Great Ideas from Database Theory",permalink:"/docusaurus/blog/factorization"},nextItem:{title:"Meet K\xf9zu \ud83e\udd17",permalink:"/docusaurus/blog/meet-kuzu"}},p={authorsImageUrls:[void 0]},c=[{value:"Overview of GDBMSs and a Bit of History",id:"overview-of-gdbmss-and-a-bit-of-history",level:2},{value:"Features Every Competent GDBMS Should Optimize For ",id:"features-every-competent-gdbms-should-optimize-for-",level:2},{value:"Feature 1: Pre-defined/pointer-based Joins",id:"feature-1-pre-definedpointer-based-joins",level:3},{value:"Feature 2: Many-to-many Growing Joins",id:"feature-2-many-to-many-growing-joins",level:3},{value:"Feature 3: Recursive Join Queries",id:"feature-3-recursive-join-queries",level:3},{value:"Feature 4: Schema Querying",id:"feature-4-schema-querying",level:3},{value:"Feature 5: Semi-structured Data and URI-heavy Datasets (e.g., &quot;Knowledge Graphs&quot;)",id:"feature-5-semi-structured-data-and-uri-heavy-datasets-eg-knowledge-graphs",level:3},{value:"K\xf9zu as a GDBMS for Graph Data Science Pipelines",id:"k\xf9zu-as-a-gdbms-for-graph-data-science-pipelines",level:2}],u={toc:c},m="wrapper";function f(e){let{components:t,...l}=e;return(0,o.kt)(m,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As a co-implementor of the K\xf9zu GDBMS and\na professor at University of Waterloo,\nI have been thinking of GDBMSs day in and day out for many years now.\nAfter years of understanding and publishing on the architectural principles\nof graph data management (",(0,o.kt)("a",{parentName:"p",href:"http://www.vldb.org/pvldb/vol12/p1692-mhedhbi.pdf"},"1"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://www.vldb.org/pvldb/vol14/p2491-gupta.pdf"},"2"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://www.vldb.org/pvldb/vol15/p1011-jin.pdf"},"3"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://www.vldb.org/pvldb/vol15/p1533-chen.pdf"},"4"),"),\nwe decided to develop\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kuzudb/kuzu"},"K\xf9zu")," as a state-of-the-art modern embeddable GDBMS.\nThis post covers my broad opinions on GDBMSs, and the feature set they should\noptimize for and why. In doing so, it also gives an overall vision of K\xf9zu!"),(0,o.kt)("admonition",{title:"Tldr: The key takeaways are:",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Overview of GDBMSs"),": GDBMSs are relational in their cores but offer an elegant graph model\nto model application data and SQL-like query languages with elegant\ngraph-specific syntax. Many applications, e.g., in ",(0,o.kt)("a",{parentName:"li",href:"https://tinyurl.com/3x89ceum"},"fraud detection"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://www.tigergraph.com/solutions/recommendation-engine/"},"recommendations"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://tinyurl.com/3z9bckmm"},"personalization"),", etc. benefit from such modeling and query language features."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Key Feature Set of GDBMSs"),": Despite being relational, GDBMSs optimize (or at\nleast they should!) for a distinct set of\nfeatures/use cases that RDBMSs do not traditionally optimize for: (i) pre-defined/pointer-based joins;\n(ii) growing many-to-many joins;\n(iii) recursive joins;\n(iv) schema querying;\n(v) efficient storage of semi-structured data and URIs.\nGDBMSs that want to be competitive in terms of performance\nneed to perfect this feature set and that's exactly what K\xf9zu aims to do!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"K\xf9zu as the GDBMS for Graph Data Science"),":\nOne example application domain the K\xf9zu team is excited about is\nto be a usable, efficient, and scalable GDBMS of graph data science in the Python graph analytics ecosystem.\nHere we are looking at how DuckDB revolutionized tabular data science and\nwant to repeat it in graph data science! "))),(0,o.kt)("p",null,"This week, I presented K\xf9zu to the database community at the ",(0,o.kt)("a",{parentName:"p",href:"https://www.cidrdb.org/cidr2023/papers/p48-jin.pdf"},"CIDR 2023"),"\nconference in Amsterdam. For those who are not familiar with academic database conferences,\nCIDR brings together work from academia and industry to discuss recent research on\nsystems aspects of database technology. Our paper was about K\xf9zu's\ngoals and vision and its core query processor design for evaluating complex growing joins.\nWe intentionally targeted CIDR for our paper because of its systems\nfocus and we thought many system gurus would be there: the attendees included\ncreators of ",(0,o.kt)("a",{parentName:"p",href:"https://www.monetdb.org/"},"MonetDB"),", ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Vectorwise"},"Vectorwise"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://duckdb.org/"},"DuckDB"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://www.snowflake.com/en/"},"Snowflake"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.databricks.com/"},"Databricks"),", amongst others. It also meant a lot to share\nour ambitious goal of developing a usable GDBMS from an academic setting in this CIDR because\nit was  organized locally by CWI. The late ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Martin_L._Kersten"},"Martin Kersten"),"\nfounded the CWI database group and was a pioneer of this style of research projects and\nhis successors are continuing this tradition very successfully today.\nCWI has created many successful DBMSs, including MonetDB (Martin's legacy), Vectorwise, and\nmost recently DuckDB. People paid their respects to Martin during an emotional memorial\non the first night of the conference.\nAs a surprise, ",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/"},"MemGraph")," co-founder and CTO  ",(0,o.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/markobudiselic/"},"Marko Budiseli\u0107"),"\nwas also there (it was his first CIDR)! Marko is an extremely friendly\nand humble person you should meet and it was great to share our insights about where GDBMSs make a difference in\nenterprise applications."),(0,o.kt)("p",null,"I want to start a 3-part blog post to cover the contents of our CIDR paper in a less academic language: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Post 1: K\xf9zu's goals and vision as a system "),(0,o.kt)("li",{parentName:"ul"},"Post 2: ",(0,o.kt)("a",{parentName:"li",href:"/docusaurus/blog/factorization"},"Factorization technique for compression")),(0,o.kt)("li",{parentName:"ul"},"Post 3: ",(0,o.kt)("a",{parentName:"li",href:"/docusaurus/blog/wcoj"},"Worst-case optimal join algorithms"))),(0,o.kt)("p",null,"In this Post 1, I discuss the following:\n(i)   ",(0,o.kt)("a",{parentName:"p",href:"#overview-of-gdbms-and-a-bit-of-history"},"an overview of GDBMSs"),".\n(ii)  ",(0,o.kt)("a",{parentName:"p",href:"#features-every-competent-gdbms-should-optimize-for-"},"the features GDBMSs should optimize  for and why;")," and\n(iii) ",(0,o.kt)("a",{parentName:"p",href:"#k%C3%B9zu-as-a-gdbms-for-graph-data-science-pipelines"},"an example application domain (graph data science!) we are immediately targeting with K\xf9zu. "),"\n(ii) and (iii) should give you a good idea about the current goals and\nvision of K\xf9zu. If you know GDBMSs well, you should skip over (i)."),(0,o.kt)("h2",{id:"overview-of-gdbmss-and-a-bit-of-history"},"Overview of GDBMSs and a Bit of History"),(0,o.kt)("p",null,"In one sentence, GDBMSs are read-optimized analytical DBMSs for modeling and querying application\ndata as a graph. As a consequence they are optimized for fast querying of node and\nrelationship records.\nModern GDBMSs, such as Neo4j, Tigergraph, MemGraph, or K\xf9zu,\nadopt the ",(0,o.kt)("a",{parentName:"p",href:"https://neo4j.com/developer/graph-database/#property-graph"},"property graph data model"),"\n(or its variants), where you can model your records as a set of labeled nodes and\nedges/relationships, and key-value properties on these relationships. When\nI say GDBMSs in this post, I specifically refer to the systems that adopt this\nmodel but I will also discuss ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Triplestore"},"RDF systems")," (aka triplestores)\nhere and there, which are also DBMSs that adopt a graph-based model."),(0,o.kt)("p",null,"Here's a side comment that I have to make because I'm a professor and\nprofessors are always ready to profess.\nDBMSs based on graph models are anything but new. They have existed even before the relational\nmodel: DBMS die-hards love remembering\nthat the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Integrated_Data_Store"},"IDS system"),' from 1960s was based on the "network model",\nwhich is is just another term for graph. IDS was lead by the amazing\nCharlie Bachmann, ',(0,o.kt)("img",{align:"left",style:{width:380,paddingRight:15},src:r.Z})," ",(0,o.kt)("a",{parentName:"p",href:"https://amturing.acm.org/award_winners/bachman_9385610.cfm"},"1"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/iDVsNqFEkB0"},"2"),", ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/jByIpJNrm50"},"3"),"), whose photo is shown on the left and who is credited for inventing DBMSs",(0,o.kt)("sup",{parentName:"p",id:"fnref-1-f6cc9d"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1-f6cc9d",className:"footnote-ref"},"1")),".\nIf you click on ",(0,o.kt)("a",{parentName:"p",href:"http://wp.sigmod.org/wp-content/uploads/2012/12/image4.jpg"},"this 1962 ad of the IDS system"),", you will see a graph of node and\nedge records. Note 1960s are pre-relational times. Ever since, every decade has seen a surge of DBMSs\nthat adopted a graph-based model with mixed levels of adoption success:\nhierarchical model, XML, and RDF are examples.\nIn my view, current property GDBMSs is the most generic\nand suitable to model a very broad range of application data out of these.\nSo they probably established themselves most successfully out of these.\nThere is a very fundamental reason why graph-based DBMSs have always existed and will\nalways exist: graphs and tables are the two most natural and generic abstract data structures\nto model application data. It's no surprise they were the first two proposed data models\nwhen the field of DBMSs were born and both have existed ever since and will continue to exist."),(0,o.kt)("p",null,'Back to property GDBMSs. How about their query languages? They support SQL-like high-level\nquery languages with several graph-specific syntax.\nI call them "graph-specific" SQL. Let\'s look at a query snippet. Assume this is\non a database that models a set of financial "accounts" and money "transfers"\nbetween accounts:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MATCH (a:Account)-[e:Transfer]->(b:Account)\nWHERE a.name = 'Alice'\nRETURN b.ID\n")),(0,o.kt)("p",null,"This is a query expressed in Cypher. Instead of a SELECT/FROM/WHERE,\nyou are looking at MATCH/WHERE/RETURN.\nIf intelligent Martians saw Cypher and SQL, their immediate reaction\nwould not be to notice the minor syntactic differences but instead\nthe fundamental similarities:  their clauses describe joins,\nfilters, projections, group by and aggregates, and other relational\noperations that process sets of tuples.\nThere is of course syntactic differences that are important. Query languages of\nGDBMSs adopt graph-specific syntax that are often very elegant to express several computations.\nFor example, the arrow syntax ((a)-","[e]",'->(b)) in Cypher describes joins between node records. This\nis much more elegant than listing names of tables that model\nnode records in a FROM clause, with a complex WHERE clause.\nMuch more importantly, they adopt a very elegant and direct syntax,\nsuch as the Kleene star "*", to\nexpress recursive queries. Expressing recursive computations with vanilla SQL is\nobjectively harder. I\'ll come to recursive queries later.'),(0,o.kt)("p",null,"Now get ready for a blasphemous observation: ",(0,o.kt)("em",{parentName:"p"},"GDBMSs are relational at their cores!"),(0,o.kt)("sup",{parentName:"p",id:"fnref-2-f6cc9d"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2-f6cc9d",className:"footnote-ref"},"2")),".\nWell, OK anyone who has studied the principles of DBMSs knows there is nothing\nblasphemous here because GDBMSs actually have to be relational\nbecause of this simple fact:\n",(0,o.kt)("em",{parentName:"p"},"the only known practical way to implement declarative high-level\nquery languages is to compile them to relational operators that\ntake in and output sets of tuples"),'. Type "Explain" to any of your\nqueries in your favorite  GDBMs (or RDF system) and look at their query plans and\nyou will see joins, scans, filters, projections, group bys, unions,\nintersections, etc. You might see some graph-specific operators\nbut they will also be processing sets of tuples. That was the primary\nobservation of ',(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Edgar_F._Codd"},"Ted Codd")," when he proposed\nthat data management should be done by systems implementing\nrelational operators that process sets of tuples. "),(0,o.kt)("p",null,"But don't worry, I do love GDBMSs and you should too! The fact that at their cores\nGDBMSs are relational doesn't mean they don't offer value beyond RDBMSs.\nDBMSs are very complex software systems and they make a ton of design tradeoffs in terms of\nwhat they optimize for. There is a very distinctive set of technical features that\nGDBMSs should optimize for and excel in, where RDBMSs and SQL traditionally don't.\nThis feature set is exactly what\nK\xf9zu aims to perfect over time, which is what I hope to articulate in this post.\nIn short: GDBMSs do offer a ton of value if\nthey are architected correctly and every software engineer should know\nabout GDBMSs",(0,o.kt)("sup",{parentName:"p",id:"fnref-3-f6cc9d"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3-f6cc9d",className:"footnote-ref"},"3")),"."),(0,o.kt)("h2",{id:"features-every-competent-gdbms-should-optimize-for-"},"Features Every Competent GDBMS Should Optimize For ",(0,o.kt)("sup",{parentName:"h2",id:"fnref-4-f6cc9d"},(0,o.kt)("a",{parentName:"sup",href:"#fn-4-f6cc9d",className:"footnote-ref"},"4"))),(0,o.kt)("p",null,"Here is a list of features that differentiate GDBMSs from RDBMSs and GDBMS should\nhighly optimize for and support."),(0,o.kt)("h3",{id:"feature-1-pre-definedpointer-based-joins"},"Feature 1: Pre-defined/pointer-based Joins"),(0,o.kt)("p",null,'This is perhaps the most ubiquitously adopted technique in GDBMSs that is ubiquitously missing in RDBMSs.\nAlthough GDBMSs\ncan join arbitrary node records with each other, most common user queries in GDBMSs\njoin node records with their "neighbors". A GDBMS knows about these\nneighbor node records because they are predefined to the system as relationships.\nSo GDBMSs universally exploit this and optimize for these types of joins. For example,\nalmost universally they all create a ',(0,o.kt)("strong",{parentName:"p"},"join index")," (aka an adjacency list index)",(0,o.kt)("sup",{parentName:"p",id:"fnref-5-f6cc9d"},(0,o.kt)("a",{parentName:"sup",href:"#fn-5-f6cc9d",className:"footnote-ref"},"5")),'.\nHere\'s a demonstrative example showing a "forward", i.e., from src to dst, join index:'),(0,o.kt)("img",{src:i.Z,width:"800"}),(0,o.kt)("p",null,'Note that the join index does not store the actual data values, which\nare strings (e.g., "Ali", "Noura", etc.) in the example. Instead,\nit stores dense system level node record IDs.\nAs a result, GDBMSs can be fast on these joins because they can use: (1) the join index;\nand (2) dense integer IDs to joins (instead of, say running string equality conditions). '),(0,o.kt)("h3",{id:"feature-2-many-to-many-growing-joins"},"Feature 2: Many-to-many Growing Joins"),(0,o.kt)("p",null,"In many application data stored on GDBMSs, node records\nhave many-to-many relationships with each other. Think of any data as a graph,\nsay a network of financial transactions or who bought which items or\nwho is friends with whom. In many of these datasets, an entity/node connects with\nmany other nodes. In addition, many of the killer apps of GDBMSs search for complex patterns\non these relationships.\nA classic example we like using is a Twitter friend recommendation engine that is looking for diamond patterns to implement\nthe following rule: If a user A follows two users B and C, who both follow D, recommend\nD to A. This is the pattern:"),(0,o.kt)("div",{class:"img-center"},(0,o.kt)("img",{src:s.Z,width:"200"})),(0,o.kt)("p",null,"The whitepapers of existing GDBMSs are full of these patterns, e.g., branching trees, money laundering circles,\ncliques of customers who buy similar items, etc. These correspond to complex\nmany-to-many joins, which by their nature are growing. If on average each of your nodes\nconnect with k other nodes and you have t many relationships in the pattern you are searching,\nyou are asking a system to search through k^t many possible combinations and guess what: exponential\nfunctions are scary. We have been advocating the integration of 2 specific techniques\ninto the query processors of GDBMSs for several years now: (i) factorization; and (ii) worst-case optimal joins.\nBoth of these techniques are specifically designed for\nmany-to-many growing joins and we have integrated them in K\xf9zu. Stay tuned for for my next two posts on this. "),(0,o.kt)("h3",{id:"feature-3-recursive-join-queries"},"Feature 3: Recursive Join Queries"),(0,o.kt)("p",null,"This is probably the most obvious feature where GDBMSs should excel in. First, objectively\nthe query languages of GDBMSs have much better support\nfor recursive join queries than SQL. Consider this query on our previous financial transaction network\nexample: \"Give me all direct or indirect money flows into Alice's account from Canada.\" Now\nlook at this elegant way to ask this in Cypher using the Kleene star '","*","':"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MATCH (a:Account)-[:Transfer*]->(b:Account)\nWHERE a.country = 'Canada' and b.name = 'Alice'\nRETURN a.ID\n")),(0,o.kt)("p",null,"Similar to regexes, '","*","' represents possible 1 or more repetitions of the Transfer\nedge in the join. So the join could be a direct join between (a) and (b) or a 2-hop one,\nor a 3-hop one etc. You can do this with SQL of course, but it's objectively harder. Recursion\nhas been an afterthought when standardizing SQL. It came 20 years after SQL standardization started and is really a hack.\nIn contrast, recursion has been first-class citizen\nfeature in every graph-based DBMS's query language.\nThis distinction is even much more visible\nif you want to do other graph-specific recursive computation, such as finding shortest paths.\nIn  K\xf9zu, we are starting to work on implementing\nand optimizing recursive query support and we hope to have first a basic version and\nthen optimized versions that hopefully works very well and contributes to the principles of how these\nqueries should be evaluated."),(0,o.kt)("h3",{id:"feature-4-schema-querying"},"Feature 4: Schema Querying"),(0,o.kt)("p",null,"Another important feature of GDBMSs that cannot be done in\nRDBMSs is that the query languages allow querying the schema of a database in addition\nto the data in the database. Suppose in a modified financial transaction network,\nthere are three relationship types: Wire, Deposit, and ETransfer and you\nyou wanted to search for a path where the first edge and the second edge types\nare different. Note that the predicate is ",(0,o.kt)("em",{parentName:"p"},"on the schema"),", specifically on the type\nof the nodes/relations. You can write the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MATCH (a:Account)-[e1]->(b:Account)-[e2]->(c:Account)\nWHERE type(e1) != type(e2)\nRETURN *\n")),(0,o.kt)("p",null,"Something akin to this cannot directly be done in SQL. One would have to write a query\nthat unions many sub-queries: one that joins node records over Wire and then Deposit,\nanother on Wire and ETransfer, another on Deposit and then Wire etc. This will be\nmessy. The ability to ",(0,o.kt)("em",{parentName:"p"},"not"),' specify a label on relationships,\nspecifically on e1 and e2, is an\nelegant way to effectively express such unions of join queries.\nIt says: "join a and b nodes over every possible relationship".\nThe ',(0,o.kt)("inlineCode",{parentName:"p"},"type()")," function on these variables allows doing querying over the schema."),(0,o.kt)("h3",{id:"feature-5-semi-structured-data-and-uri-heavy-datasets-eg-knowledge-graphs"},'Feature 5: Semi-structured Data and URI-heavy Datasets (e.g., "Knowledge Graphs")'),(0,o.kt)("p",null,"An important application domain of GDBMSs\nis \"knowledge graphs\". This term means different things\nin different contexts and I'll take it\nto refer to highly heterogenous datasets that are\noften naturally modeled as RDF triples. Again, I don't want to go into the\ndetails of this model but I assume many readers will already be familiar with\nRDF. RDF is a simple data model where data is represented as (subject, predicate, object)\ntriples that represent facts about a domain. A great application is when modeling and\nquerying encyclopedic facts, such as those extracted from Wikipedia data.\nFor example, the following triple stores the fact\nthat Justin Trudeau is married to Sophie Trudeau:\n(",(0,o.kt)("a",{parentName:"p",href:"http://dbpedia.org/resource/Justin_Trudeau"},"http://dbpedia.org/resource/Justin_Trudeau"),", ",(0,o.kt)("a",{parentName:"p",href:"http://dbpedia.org/ontology/spouse"},"http://dbpedia.org/ontology/spouse"),",\n",(0,o.kt)("a",{parentName:"p",href:"http://dbpedia.org/resource/Sophie_Gr%C3%A9goire_Trudeau"},"http://dbpedia.org/resource/Sophie_Gr\xe9goire_Trudeau"),").\nThere are 2 immediate challenges for a DBMS to manage\nsuch data: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Structuring such datasets is very difficult. Structuring here\nrefers to designing a relational schema for the data.\nEntities can have many types, e.g., Justin Trudeau is both a "rdf:type"\n',(0,o.kt)("a",{parentName:"p",href:"http://dbpedia.org/ontology/Person"},"http://dbpedia.org/ontology/Person")," as well as\n",(0,o.kt)("a",{parentName:"p",href:"http://dbpedia.org/ontology/Politician"},"http://dbpedia.org/ontology/Politician"),". Further, within a single type, entities can have many different\nand distinct properties, so good luck coming up with and maintaining a relational\nschema for all that.\nThis is a direct result of\nthe overly ambitious domain the dataset is modeling: all encyclopedic human knowledge!\nYou need a data model that allows flexibility in what can be associated with entities\nand their types",(0,o.kt)("sup",{parentName:"p",id:"fnref-6-f6cc9d"},(0,o.kt)("a",{parentName:"sup",href:"#fn-6-f6cc9d",className:"footnote-ref"},"6")),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Those long strings used to identify entities, e.g., Justin\nTrudea, are called URIs (for universal resource identifiers),\nand queries will frequently access and specify them. So systems should\nbe competent in handling those."))),(0,o.kt)("p",null,"GDBMSs tend to support semi-structured schemas and certainly RDF systems\nhave good techniques to handle URIs.\nThese applications are directly in the realm of graph-based DBMSs.\nCurrently, they are directly targeted by RDF systems but I'm convinced\nGDBMSs should also implement techniques to efficiently support them",(0,o.kt)("sup",{parentName:"p",id:"fnref-7-f6cc9d"},(0,o.kt)("a",{parentName:"sup",href:"#fn-7-f6cc9d",className:"footnote-ref"},"7")),". "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Final note on the above feature set:"),' I referred to several classic applications but\nmany other applications require and benefit\nfrom the above feature set.  One can\nthink of the dataset and workloads of these applications as the "beyond relational/SQL" datasets/workloads, which\noften require modeling and querying in a graph-based DBMS, and\nwe want K\xf9zu to excel in and represent the state-of-art in this feature set! '),(0,o.kt)("h2",{id:"k\xf9zu-as-a-gdbms-for-graph-data-science-pipelines"},"K\xf9zu as a GDBMS for Graph Data Science Pipelines"),(0,o.kt)("p",null,"Finally, let me tell you a little bit about\na particular application domain we are currently excited\nabout and we want to see K\xf9zu used in: graph data science in the python ecosystem!\nThis figure from my CIDR slides describes this vision pictorially:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"K\xf9zu as a GDBMS for Graph Data Science Pipelines",src:a(8778).Z,width:"2433",height:"1938"})),(0,o.kt)("p",null,"Suppose you are building a graph analytics, machine learning, or visualization\npipeline from raw record files on disk. You will want to model your raw records\nas nodes and edges, clean them, extract features, query them, transform them,\nand then you will extract data to an upstream python library, such as Pytorch Geometric, DGL,\nNetworkX or a graph visualization library.\nYou might even want a pipeline\nthat extracts regular tables from your graphs to a tabular data science library,\nsuch as NumPy,\nsince the outputs of queries in Cypher are tables of records.\nWe want people to use K\xf9zu as an embeddable library in their Python scripts,\nto do their modeling, querying, feature extraction,\ncleaning, and other transformations, all by benefiting from a high-level query language\nand state-of-art graph data management techniques\nthat we are implementing. This is exactly what DuckDB did for tabular data science/analytics.\nWe are looking at DuckDB here and want to fill the same gap for graph data science/analytics!\nWe are currently understanding the ecosystem better and appreciate feedback\nand suggestions for features we should implement to enable your workloads."),(0,o.kt)("p",null,"OK, this is it for now. In the next two blog posts, I will discuss\nfactorization and worst-case optimal join algorithms and describe\nsome of the principles that we adopted in K\xf9zu's query processor.\nUntil then, happy new years from the cold but cozy winter of \ud83c\udde8\ud83c\udde6\nand ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kuzudb/kuzu"},"pip install kuzu"),"!"),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1-f6cc9d"},"Interestingly, Bachmann is one of a handful of Turing laureates without any academic career. If you love DBMSs, ",(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/iDVsNqFEkB0"},"listen to this talk"),"  where he remembers his IDS days! Amusingly, he also talks about how he didn't know who Turing was when got the Turing award and how he met Turing's mother in England for tea \ud83d\ude00.",(0,o.kt)("a",{parentName:"li",href:"#fnref-1-f6cc9d",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2-f6cc9d"},"When I say GDBMSs here, I'm referring to the core engines that implement the high-level languages of these systems and not the analytics libraries (e.g., ",(0,o.kt)("a",{parentName:"li",href:"https://neo4j.com/product/graph-data-science/"},"1"),", ",(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/mage"},"2"),") above these core engines that run iterative graph analytics computations, such as finding connected components, or PageRank, or betweenness centrality. These computations are better understood through either direct graph formalisms or linear algebra (and not relational) operations.",(0,o.kt)("a",{parentName:"li",href:"#fnref-2-f6cc9d",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-3-f6cc9d"},"I am a strong supporter of devoting a few lectures to GDBMSs after covering the fundamental topics on the relational model and RDBMSs in core introduction to DBMSs courses in undergraduate curriculums. Students should broaden their perspectives on the available data models and query/programming languages to them when they develop applications. GDBMSs is an obvious choice here. So is Datalog and RDF/SparQL.",(0,o.kt)("a",{parentName:"li",href:"#fnref-3-f6cc9d",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-4-f6cc9d"},"We articulated this list of features in our CIDR 2023 paper. Incidentally, ",(0,o.kt)("a",{parentName:"li",href:"https://www.cidrdb.org/cidr2023/papers/p66-wolde.pdf"},"a paper")," written by CWI on a graph query extension to DuckDB, had a 12-item list of \"techniques\" that GDBMSs should implement at their cores. Let me call this the CWI list. These items are not features in the sense I'm using the word, so I call them techniques. As you'll see my features are higher-level system properties from user's perspective. Peter Boncz, who is renowned in the field for having written or advised many successful DBMSs that spinned off, presented the CWI paper. I highly recommend this as another reading if you want to know more about Peter and his co-authors' technical insights about how GDBMSs should be architected. Importantly, K\xf9zu has integrated or is in the process of integrating 11 of the 12 techniques in the CWI list(bulk path finding is the one we have to do more thinking on) and our prior publications had also articulated many of these insights,  such as the fact that ",(0,o.kt)("a",{parentName:"li",href:"https://www.vldb.org/pvldb/vol14/p2491-gupta.pdf"},"GDBMSs should be columnar systems")," doing vectorized querying and of course we did a ton of work on ",(0,o.kt)("a",{parentName:"li",href:"https://www.vldb.org/pvldb/vol12/p1692-mhedhbi.pdf"},"worst-case optimal joins")," and ",(0,o.kt)("a",{parentName:"li",href:"https://www.cidrdb.org/cidr2023/papers/p48-jin.pdf"},"factorization"),', which are also in the CWI list. I should acknowledge that Peter had been advocating for some of the techniques on the CWI list at least since 2018. I remember a presentation he gave in 2018 to GDBMSs researchers and developers titled "Why are Existing GDBMSs Incompetent?", which listed some of the techniques in the CWI list and visibly has inspired the title of this blog.',(0,o.kt)("a",{parentName:"li",href:"#fnref-4-f6cc9d",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-5-f6cc9d"},'Although some refer to these as an "adjacency list index" because that\'s a common term in graph terminology, I need to pay my respects to the giants in the field: these are plain old ',(0,o.kt)("a",{parentName:"li",href:"https://dl.acm.org/doi/abs/10.1145/22952.22955"},"1980s Valduriez join indices"),". And no, they were invented in the context of RDBMSs. That said, they never found much adoption in RDBMSs. But they are almost universally adopted in GDBMSs.",(0,o.kt)("a",{parentName:"li",href:"#fnref-5-f6cc9d",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-6-f6cc9d"},'Designing the schema, i.e., defining the types of entities and relationships and class structures and constraints of such complex domains can be decades of work. What I\'m referring to as schema is called an "ontology" in knowledge graph/semantic web space. If you ever thought you modeled a hard application domain, take a look at ',(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/SNOMED_CT"},"SNOMED"),', which is a decades long effort to model and standardize human medical knowledge. Last term, I had a seminar on SNODEM in my graduate course on knowledge graphs and students were baffled by the complexity of this "ontology", which  describes the types of entities and their relationships and constraints, which RDF technology stack is quite good at.',(0,o.kt)("a",{parentName:"li",href:"#fnref-6-f6cc9d",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-7-f6cc9d"},"Before we released K\xf9zu, we had support for adding arbitrary node/edge properties but we removed a large chunk of code out of the system to release a thinner code base. So currently you need to specify a schema for your nodes and relationships in K\xf9zu. We will wait and see if/when that demand comes and how strongly it comes. We know from our conversations with many users and developers of GDBMSs over the years that most datasets in enterprises are not this complex and can be structured. At least after a proof of concept phase of applications, developers structure their data.",(0,o.kt)("a",{parentName:"li",href:"#fnref-7-f6cc9d",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},1777:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bachmann-869ea053f50b618f11a3288ac0bdb2b6.png"},5762:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/diamond-pattern-7c9786e237f65ca486ce787631f06303.png"},995:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ex-fwd-join-index-49f7fc95a380307fc81426311608634d.png"},2079:(e,t,a)=>{a.p},8778:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kuzu-as-gdbms-of-gds-9ddb233d59157ec29f6a392d1acf275b.png"}}]);