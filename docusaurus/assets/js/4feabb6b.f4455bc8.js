"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[4201],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=i(r),f=o,m=c["".concat(p,".").concat(f)]||c[f]||y[f]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[c]="string"==typeof e?e:o,s[1]=u;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));r(5973);const a={title:"Skip",sidebar_position:7,description:"SKIP controls the number of tuples to skip from the start of the queryResult."},s="SKIP",u={unversionedId:"cypher/query-clauses/skip",id:"cypher/query-clauses/skip",title:"Skip",description:"SKIP controls the number of tuples to skip from the start of the queryResult.",source:"@site/docs/cypher/query-clauses/skip.md",sourceDirName:"cypher/query-clauses",slug:"/cypher/query-clauses/skip",permalink:"/docusaurus/cypher/query-clauses/skip",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Skip",sidebar_position:7,description:"SKIP controls the number of tuples to skip from the start of the queryResult."},sidebar:"docSidebar",previous:{title:"Order By",permalink:"/docusaurus/cypher/query-clauses/order-by"},next:{title:"Limit",permalink:"/docusaurus/cypher/query-clauses/limit"}},p={},i=[],l={toc:i},c="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"skip"},"SKIP"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SKIP")," controls the number of tuples to skip from the start of the queryResult. It is often used within in an ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus/cypher/query-clauses/order-by"},"ORDER BY"),"\nclause to skip the top k tuples from the query result.\nNote: SKIP accepts any expression that can be evaluated to an integer."),(0,o.kt)("p",null,"We will use the example database for demonstration, whose schema and data import commands are given ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus/cypher/query-clauses/example-database"},"here"),"."),(0,o.kt)("p",null,"For example, the following query skips the youngest 2 users\nand returns the rest of the users' ages.\nQuery:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MATCH (u:User)\nRETURN u.name\nORDER BY u.age\nSKIP 2;\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-----------\n| u.name  |\n-----------\n| Karissa |\n-----------\n| Zhang   |\n-----------\n")),(0,o.kt)("p",null,"View example in ",(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/drive/1NcR-xL4Rb7nprgbvk6N2dIP30oqyUucm#scrollTo=V1r5jFPJB5Nk"},"Colab"),"."),(0,o.kt)("p",null,"If you omit the ORDER BY, you would skip some k tuples in a SKIP k query\nbut you have no guarantee about which ones will be skipped."))}y.isMDXComponent=!0},5973:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/running-example-db76aa393fd70d29c831f1527455440a.png"}}]);