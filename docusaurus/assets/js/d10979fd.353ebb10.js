"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[5488],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9487:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));t(5973);const i={title:"Merge",description:"Match existing pattern or, if not present, create the pattern.",sidebar_position:4},o="MERGE",s={unversionedId:"cypher/data-manipulation-clauses/merge",id:"cypher/data-manipulation-clauses/merge",title:"Merge",description:"Match existing pattern or, if not present, create the pattern.",source:"@site/docs/cypher/data-manipulation-clauses/merge.md",sourceDirName:"cypher/data-manipulation-clauses",slug:"/cypher/data-manipulation-clauses/merge",permalink:"/docusaurus/cypher/data-manipulation-clauses/merge",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Merge",description:"Match existing pattern or, if not present, create the pattern.",sidebar_position:4},sidebar:"docSidebar",previous:{title:"Delete",permalink:"/docusaurus/cypher/data-manipulation-clauses/delete"},next:{title:"Read After Update",permalink:"/docusaurus/cypher/data-manipulation-clauses/read-after-update"}},l={},p=[{value:"Merge Nodes",id:"merge-nodes",level:2},{value:"Merge Existing Nodes",id:"merge-existing-nodes",level:3},{value:"Merge Non-existing Nodes",id:"merge-non-existing-nodes",level:3},{value:"Merge with <code>ON MATCH</code>",id:"merge-with-on-match",level:3},{value:"Merge with <code>ON CREATE</code>",id:"merge-with-on-create",level:3},{value:"Merge Relationships",id:"merge-relationships",level:2},{value:"Merge Existing Relationships",id:"merge-existing-relationships",level:3},{value:"Merge Non-existing Relationships",id:"merge-non-existing-relationships",level:3},{value:"Merge with <code>ON MATCH</code>",id:"merge-with-on-match-1",level:3},{value:"Merge with <code>ON CREATE</code>",id:"merge-with-on-create-1",level:3},{value:"Merge Complex Patterns",id:"merge-complex-patterns",level:2}],d={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"merge"},"MERGE"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MERGE")," clause tries to match the query pattern in database or, if not present, create the pattern in database. ",(0,r.kt)("inlineCode",{parentName:"p"},"MERGE <pattern>")," can be interrepted as ",(0,r.kt)("inlineCode",{parentName:"p"},"If MATCH <pattern> then RETURN <pattern> ELSE CREATE <pattern>"),". Note that there is no notion of partially matching of the pattern\nand creating the remaining parts. That is, either the whole pattern is matched or the whole pattern is created."),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT ON CONFLICT")," in SQL, ",(0,r.kt)("inlineCode",{parentName:"p"},"MERGE")," clause comes with ",(0,r.kt)("inlineCode",{parentName:"p"},"ON CREATE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ON MATCH")," set operation allowing users to specify additional update logic if the pattern is (not) found."),(0,r.kt)("p",null,"We will use the example database for demonstration, whose schema and data import commands are given ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/cypher/query-clauses/example-database"},"here"),"."),(0,r.kt)("h2",{id:"merge-nodes"},"Merge Nodes"),(0,r.kt)("h3",{id:"merge-existing-nodes"},"Merge Existing Nodes"),(0,r.kt)("p",null,'The following query tries to merge a user with name "Adam". Since user "Adam" exists in the database, no user is created.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MERGE (n:User {name : 'Adam'}) RETURN n.*;\n------------------\n| n.name | n.age |\n------------------\n| Adam   | 30    |\n------------------\nMATCH (:User) RETURN COUNT(*);\n----------------\n| COUNT_STAR() |\n----------------\n| 4            |\n----------------\n")),(0,r.kt)("h3",{id:"merge-non-existing-nodes"},"Merge Non-existing Nodes"),(0,r.kt)("p",null,'The following query tries to merge a user with name "Bob". Since user "Bob" does not exist in the database, a new user with name "Bob" is created.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MERGE (n:User {name : 'Bob'}) RETURN n.*;\n------------------\n| n.name | n.age |\n------------------\n| Bob    |       |\n------------------\nMATCH (:User) RETURN COUNT(*);\n----------------\n| COUNT_STAR() |\n----------------\n| 5            |\n----------------\n")),(0,r.kt)("h3",{id:"merge-with-on-match"},"Merge with ",(0,r.kt)("inlineCode",{parentName:"h3"},"ON MATCH")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ON MATCH")," specifies the ",(0,r.kt)("inlineCode",{parentName:"p"},"SET")," operation once a match is found. The followng query updates age property if pattern is matched."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MERGE (n:User {name : 'Adam'}) ON MATCH SET n.age = 35 RETURN n.*;\n------------------\n| n.name | n.age |\n------------------\n| Adam   | 35    |\n------------------\n")),(0,r.kt)("h3",{id:"merge-with-on-create"},"Merge with ",(0,r.kt)("inlineCode",{parentName:"h3"},"ON CREATE")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ON CREATE")," specifies the ",(0,r.kt)("inlineCode",{parentName:"p"},"SET")," operation if no match is found. The following query updates age property if pattern is not matched."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MERGE (n:User {name : 'Bob'}) ON CREATE SET n.age = 60 RETURN n.*;\n------------------\n| n.name | n.age |\n------------------\n| Bob    | 60    |\n------------------\n")),(0,r.kt)("h2",{id:"merge-relationships"},"Merge Relationships"),(0,r.kt)("h3",{id:"merge-existing-relationships"},"Merge Existing Relationships"),(0,r.kt)("p",null,'The following query tries to merge a follows edge since 2020 between "Adam" and "Zhang". A match is found in this case.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MATCH (a:User), (b:User) \nWHERE a.name = 'Adam' AND b.name = 'Zhang' \nMERGE (a)-[e:Follows {since:2020}]->(b) RETURN e;\n---------------------------------------------------------\n| e                                                     |\n---------------------------------------------------------\n| (0:0)-{_LABEL: Follows, _ID: 2:1, since: 2020}->(0:2) |\n---------------------------------------------------------\nMATCH (a:User)-[e:Follows]->(b:User) \nWHERE a.name = 'Adam' AND b.name = 'Zhang' \nRETURN e;\n---------------------------------------------------------\n| e                                                     |\n---------------------------------------------------------\n| (0:0)-{_LABEL: Follows, _ID: 2:1, since: 2020}->(0:2) |\n---------------------------------------------------------\n")),(0,r.kt)("h3",{id:"merge-non-existing-relationships"},"Merge Non-existing Relationships"),(0,r.kt)("p",null,'The following query tries to merge a follows edge since 2022 between "Adam" and "Zhang". No match is found and an edge is created.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MATCH (a:User), (b:User) \nWHERE a.name = 'Adam' AND b.name = 'Zhang' \nMERGE (a)-[e:Follows {since:2022}]->(b) RETURN e;\n---------------------------------------------------------\n| e                                                     |\n---------------------------------------------------------\n| (0:0)-{_LABEL: Follows, _ID: 0:4, since: 2022}->(0:2) |\n---------------------------------------------------------\nMATCH (a:User)-[e:Follows]->(b:User) \nWHERE a.name = 'Adam' AND b.name = 'Zhang' \nRETURN e;\n---------------------------------------------------------\n| e                                                     |\n---------------------------------------------------------\n| (0:0)-{_LABEL: Follows, _ID: 2:1, since: 2020}->(0:2) |\n---------------------------------------------------------\n| (0:0)-{_LABEL: Follows, _ID: 2:4, since: 2022}->(0:2) |\n---------------------------------------------------------\n")),(0,r.kt)("h3",{id:"merge-with-on-match-1"},"Merge with ",(0,r.kt)("inlineCode",{parentName:"h3"},"ON MATCH")),(0,r.kt)("p",null,"Similar to merge nodes, the following query update edge since property if the pattern is found."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MATCH (a:User), (b:User) \nWHERE a.name = 'Adam' AND b.name = 'Karissa' \nMERGE (a)-[e:Follows {since:2020}]->(b) \nON MATCH SET e.since = 2021\nRETURN e;\n---------------------------------------------------------\n| e                                                     |\n---------------------------------------------------------\n| (0:0)-{_LABEL: Follows, _ID: 2:0, since: 2021}->(0:1) |\n---------------------------------------------------------\n")),(0,r.kt)("h3",{id:"merge-with-on-create-1"},"Merge with ",(0,r.kt)("inlineCode",{parentName:"h3"},"ON CREATE")),(0,r.kt)("p",null,"Similar to merge nodes, the following query update edge since property if the pattern is not found."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MATCH (a:User), (b:User) \nWHERE a.name = 'Adam' AND b.name = 'Karissa' \nMERGE (a)-[e:Follows {since:2022}]->(b) \nON CREATE SET e.since = 1999\nRETURN e;\n---------------------------------------------------------\n| e                                                     |\n---------------------------------------------------------\n| (0:0)-{_LABEL: Follows, _ID: 0:5, since: 1999}->(0:1) |\n---------------------------------------------------------\n")),(0,r.kt)("h2",{id:"merge-complex-patterns"},"Merge Complex Patterns"),(0,r.kt)("p",null,"Previous examples have shown how to merge single node and relationship pattern. It's also possible to merge a complex pattern involving "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MERGE (:User {name:'A'})-[:Follows]->(:User {name:'B'})-[:LivesIn]->(:City {name:'Toronto'});\nMATCH (a:User)-[:Follows]->(b:User)-[:LivesIn]->(c:City)\nRETURN a.name, b.name, c.name;\n---------------------------------\n| a.name  | b.name  | c.name    |\n---------------------------------\n| Adam    | Karissa | Waterloo  |\n---------------------------------\n| Karissa | Zhang   | Kitchener |\n---------------------------------\n| Adam    | Zhang   | Kitchener |\n---------------------------------\n| Zhang   | Noura   | Guelph    |\n---------------------------------\n| A       | B       | Toronto   |\n---------------------------------\n")))}m.isMDXComponent=!0},5973:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/running-example-db76aa393fd70d29c831f1527455440a.png"}}]);