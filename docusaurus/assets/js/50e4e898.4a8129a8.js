"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[3093],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Union",sidebar_position:13},o="UNION",l={unversionedId:"cypher/data-types/union",id:"cypher/data-types/union",title:"Union",description:"K\xf9zu's UNION is implemented by taking DuckDB's UNION type as a reference. Simialr to C++ std::variant, UNION is a nested data type that is capable of holding multiple alternative values with different types. The value under key \"tag\" is considered as the value being currently hold by the UNION.",source:"@site/docs/cypher/data-types/union.md",sourceDirName:"cypher/data-types",slug:"/cypher/data-types/union",permalink:"/docusaurus/cypher/data-types/union",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Union",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Map",permalink:"/docusaurus/cypher/data-types/map"},next:{title:"Functions and Expressions",permalink:"/docusaurus/cypher/expressions/"}},p={},s=[],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"union"},"UNION"),(0,a.kt)("p",null,"K\xf9zu's ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION")," is implemented by taking DuckDB's ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION")," type as a reference. Simialr to C++ ",(0,a.kt)("inlineCode",{parentName:"p"},"std::variant"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION"),' is a nested data type that is capable of holding multiple alternative values with different types. The value under key "tag" is considered as the value being currently hold by the ',(0,a.kt)("inlineCode",{parentName:"p"},"UNION"),"."),(0,a.kt)("p",null,"Internally, ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION")," are implemented as ",(0,a.kt)("inlineCode",{parentName:"p"},"STRUCT"),' with "tag" as one of its keys.'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"DDL definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UNION"),(0,a.kt)("td",{parentName:"tr",align:null},"UNION(price FLOAT, note STRING)")))),(0,a.kt)("p",null,"Consider the following csv file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1\naa\n")),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE NODE TABLE demo(a SERIAL, b UNION(num INT64, str STRING), PRIMARY KEY(a));\nCOPY demo from \"csv file\";\n\nMATCH (d:demo) RETURN d.b;\n-------\n| d.b |\n-------\n| 1   |\n-------\n| aa  |\n-------\n\nMATCH (d:demo) RETURN union_extract(d.b, 'num');\n--------------------------\n| UNION_EXTRACT(d.b,num) |\n--------------------------\n| 1                      |\n--------------------------\n|                        |\n--------------------------\n\nMATCH (d:demo) RETURN union_extract(d.b, 'str');\n--------------------------\n| UNION_EXTRACT(d.b,str) |\n--------------------------\n|                        |\n--------------------------\n| aa                     |\n--------------------------\n\nMATCH (d:demo) RETURN union_tag(d.b);\n------------------\n| UNION_TAG(d.b) |\n------------------\n| num            |\n------------------\n| str            |\n------------------\n")))}d.isMDXComponent=!0}}]);