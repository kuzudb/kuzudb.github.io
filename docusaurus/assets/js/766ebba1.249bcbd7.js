"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[1881],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,y=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1176:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),o=r(5973);const l={title:"Delete",description:"Delete node records from your tables."},s="Database",i={unversionedId:"cypher/data-manipulation-clauses/delete",id:"cypher/data-manipulation-clauses/delete",title:"Delete",description:"Delete node records from your tables.",source:"@site/docs/cypher/data-manipulation-clauses/delete.md",sourceDirName:"cypher/data-manipulation-clauses",slug:"/cypher/data-manipulation-clauses/delete",permalink:"/docusaurus/cypher/data-manipulation-clauses/delete",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cypher/data-manipulation-clauses/delete.md",tags:[],version:"current",frontMatter:{title:"Delete",description:"Delete node records from your tables."},sidebar:"tutorialSidebar",previous:{title:"Create",permalink:"/docusaurus/cypher/data-manipulation-clauses/create"},next:{title:"Set",permalink:"/docusaurus/cypher/data-manipulation-clauses/set"}},c={},u=[],p={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"database"},"Database"),(0,a.kt)("p",null,"We will use the database, whose schema and data import commands are given ",(0,a.kt)("a",{parentName:"p",href:"/docusaurus/cypher/query-clauses/example-database"},"here"),":"),(0,a.kt)("img",{src:o.Z,style:{width:800}}),(0,a.kt)("p",null,"You can import this database by copying pasting the commands on that page. "),(0,a.kt)("h1",{id:"delete-node"},"Delete Node"),(0,a.kt)("p",null,"You can delete node records from your tables using the DELETE clause.\nWe currently only support deleting singleton node records, i.e., those that don't have\nhave any incoming or outgoing relationships. Deleting of relationship records and\nnodes with edges are not yet supported"),(0,a.kt)("p",null,"For example, the following query first creates a User (Alice, 40) node record,\nwithout inserting any relationships to that node record, and then deletes that record"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE (u:User {name: 'Alice', age: 35});\nMATCH (u:User) WHERE u.name = 'Alice' \nDELETE u;\n")),(0,a.kt)("h1",{id:"delete-relationship"},"Delete Relationship"),(0,a.kt)("p",null,"You can delete arbitrary relationship records from your tables using the DELETE clause.",(0,a.kt)("br",null),"\nFor example, the following query deletes the ",(0,a.kt)("inlineCode",{parentName:"p"},"Follows")," relationship between ",(0,a.kt)("inlineCode",{parentName:"p"},"Adam")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Karissa"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MATCH (u:User)-[f:Follows]->(u1:User)\nWHERE u.name = 'Adam' AND u1.name = 'Karissa'\nDELETE f;\n")))}m.isMDXComponent=!0},5973:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/running-example-db76aa393fd70d29c831f1527455440a.png"}}]);