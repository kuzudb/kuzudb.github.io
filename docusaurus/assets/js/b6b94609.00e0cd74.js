"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[1267],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},i),{},{components:r})):n.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"CSV"},l="Data Export to CSV",p={unversionedId:"data-export/csv-export",id:"data-export/csv-export",title:"CSV",description:"COPY TO clause can export query result into a CSV file. By default, a header is included, and fields are separated by commas ,.",source:"@site/docs/data-export/csv-export.md",sourceDirName:"data-export",slug:"/data-export/csv-export",permalink:"/docusaurus/data-export/csv-export",draft:!1,tags:[],version:"current",frontMatter:{title:"CSV"},sidebar:"tutorialSidebar",previous:{title:"Data Export",permalink:"/docusaurus/data-export/"},next:{title:"Cypher",permalink:"/docusaurus/cypher/"}},c={},s=[],i={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-export-to-csv"},"Data Export to CSV"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"COPY TO")," clause can export query result into a CSV file. By default, a header is included, and fields are separated by commas ",(0,a.kt)("inlineCode",{parentName:"p"},","),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"COPY (MATCH (u:User) RETURN u.*) TO 'user.csv';\n")),(0,a.kt)("p",null,"The CSV file will be written as follow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'u.name,u.age\n"Adam",30\n"Karissa",40\n"Zhang",50\n"Noura",25\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"COPY (MATCH (a:User)-[f:Follows]->(b:User) RETURN a.name, f.since, b.name) TO 'follows.csv';\n")),(0,a.kt)("p",null,"follows.csv:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'a.name,f.since,b.name\n"Adam",2020,"Karissa"\n"Adam",2020,"Zhang"\n"Karissa",2021,"Zhang"\n"Zhang",2022,"Noura"\n')),(0,a.kt)("p",null,"Nested datatypes like lists and structs will be represented as text inside their respective columns."))}d.isMDXComponent=!0}}]);