"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[7286],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,y=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return a?n.createElement(y,o(o({ref:t},u),{},{components:a})):n.createElement(y,o({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7225:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={title:"Transaction",sidebar_position:17},o="Transaction",s={unversionedId:"cypher/transaction",id:"cypher/transaction",title:"Transaction",description:"K\xf9zu is a transactional system. Specifically, it implements a transaction management sub-system that is atomic, durable and supports serializability (satisfying these properties is traditionally known as being ACID-compliant in database terminology). That is, every query, data manipulation command, every DDL (i.e., new node/rel table schema definitions), or COPY FROM commands to K\xf9zu is part of a transaction. Therefore they depict all-or-nothing behavior, so after these commands or a set of them execute and committed successfully, you are guaranteed that all of their changes will persist entirely. If they do not execute successfully or are rolled back, you are guaranteed that none of their changes will persist. These conditions hold, even if your system crashes at any point during a transaction. That is, after committing successfully, all your changes will persist even if there is an error after committing. Similarly, if your system crashes before committing or rolling back, then none of your updates will persist.",source:"@site/docs/cypher/transaction.md",sourceDirName:"cypher",slug:"/cypher/transaction",permalink:"/docusaurus/cypher/transaction",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"Transaction",sidebar_position:17},sidebar:"docSidebar",previous:{title:"Macro",permalink:"/docusaurus/cypher/macro"},next:{title:"Data Definition",permalink:"/docusaurus/cypher/data-definition/"}},l={},c=[{value:"Important Properties of K\xf9zu Transactions:",id:"important-properties-of-k\xf9zu-transactions",level:4},{value:"Manual Transaction",id:"manual-transaction",level:2},{value:"Transaction Statement",id:"transaction-statement",level:3},{value:"Manual Transaction",id:"manual-transaction-1",level:3},{value:"Auto Transaction",id:"auto-transaction",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transaction"},"Transaction"),(0,r.kt)("p",null,"K\xf9zu is a transactional system. Specifically, it implements a transaction management sub-system that is atomic, durable and supports serializability (satisfying these properties is traditionally known as being ACID-compliant in database terminology). That is, every query, data manipulation command, every DDL (i.e., new node/rel table schema definitions), or ",(0,r.kt)("inlineCode",{parentName:"p"},"COPY FROM")," commands to K\xf9zu is part of a transaction. Therefore they depict all-or-nothing behavior, so after these commands or a set of them execute and committed successfully, you are guaranteed that all of their changes will persist entirely. If they do not execute successfully or are rolled back, you are guaranteed that none of their changes will persist. These conditions hold, even if your system crashes at any point during a transaction. That is, after committing successfully, all your changes will persist even if there is an error after committing. Similarly, if your system crashes before committing or rolling back, then none of your updates will persist."),(0,r.kt)("h4",{id:"important-properties-of-k\xf9zu-transactions"},"Important Properties of K\xf9zu Transactions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each transaction is identified as a write or read transaction (see below for how this is done)."),(0,r.kt)("li",{parentName:"ul"},"At any point in time, there can be multiple read transactions but one write transaction."),(0,r.kt)("li",{parentName:"ul"},"There are two ways to use transactions: (i) manually beginning and committing/rolling back transactions;\nor (ii) auto-committing. These are reviewed below.")),(0,r.kt)("h2",{id:"manual-transaction"},"Manual Transaction"),(0,r.kt)("h3",{id:"transaction-statement"},"Transaction Statement"),(0,r.kt)("p",null,"K\xf9zu supports the following transaction statements."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BEGIN TRANSACTION"),": starts a read-write transaction. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BEGIN TRANSACTION READ ONLY"),": starts a read-only transaction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"COMMIT"),": commit change in current transaction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ROLLBACK"),": rollback change in current transaction.")),(0,r.kt)("h3",{id:"manual-transaction-1"},"Manual Transaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"BEGIN TRANSACTION;\nCREATE (a:User {name: 'Alice', age: 72});\nMATCH (a:User) RETURN *;\nCOMMIT;\n")),(0,r.kt)("p",null,"The above statements start a manual read-write transaction, add a new node, and within the same transaction also read all of the tuples in User table. Finally, commit the transaction."),(0,r.kt)("p",null,"You can also start a read-only transaction with ",(0,r.kt)("inlineCode",{parentName:"p"},"BEGIN TRANSACTION READ ONLY"),". Read only transactions are not allowed to write to the database. You should start a read-only transaction for two main reasons: (i) if you want to run multiple read queries ensuring that the database does not change in-between those transactions; and/or (ii) you don't want to block a write transaction from writing to the database in parallel (recall that at any point in time K\xf9zu allows 1 write transaction in the system)."),(0,r.kt)("p",null,"If you replace ",(0,r.kt)("inlineCode",{parentName:"p"},"COMMIT")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"ROLLBACK"),", the added ('Alice', 72) node record will not persist in the database."),(0,r.kt)("h3",{id:"auto-transaction"},"Auto Transaction"),(0,r.kt)("p",null,"If you send a command without manually beginning a transaction and it will automatically be wrapped around a transaction. For example, the following query will be automatically wrapped around a transaction that will be executed in a serializable manner."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE (a:User {name: 'Alice', age: 72});\n")))}m.isMDXComponent=!0}}]);