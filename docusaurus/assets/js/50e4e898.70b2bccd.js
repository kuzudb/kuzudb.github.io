"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[3093],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"Union",sidebar_position:13},i="UNION",l={unversionedId:"cypher/data-types/union",id:"cypher/data-types/union",title:"Union",description:'Simialr to C++ std::variant, UNION is a nested data type that is capable of holding multiple alternative values with different types. The value under key "tag" is considered as the value being currently hold by the UNION.',source:"@site/docs/cypher/data-types/union.md",sourceDirName:"cypher/data-types",slug:"/cypher/data-types/union",permalink:"/docusaurus/cypher/data-types/union",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Union",sidebar_position:13},sidebar:"docSidebar",previous:{title:"Map",permalink:"/docusaurus/cypher/data-types/map"},next:{title:"Functions and Expressions",permalink:"/docusaurus/cypher/expressions/"}},p={},u=[],s={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"union"},"UNION"),(0,a.kt)("p",null,"Simialr to C++ ",(0,a.kt)("inlineCode",{parentName:"p"},"std::variant"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION"),' is a nested data type that is capable of holding multiple alternative values with different types. The value under key "tag" is considered as the value being currently hold by the ',(0,a.kt)("inlineCode",{parentName:"p"},"UNION"),"."),(0,a.kt)("p",null,"Internally, ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION")," are implemented as ",(0,a.kt)("inlineCode",{parentName:"p"},"STRUCT"),' with "tag" as one of its keys.'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"DDL definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UNION"),(0,a.kt)("td",{parentName:"tr",align:null},"UNION(price FLOAT, note STRING)")))),(0,a.kt)("p",null,"Consider the following csv file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1\naa\n")),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE NODE TABLE demo(a SERIAL, b UNION(num INT64, str STRING), PRIMARY KEY(a));\nCOPY demo from \"csv file\";\n\nMATCH (d:demo) RETURN d.b;\n-------\n| d.b |\n-------\n| 1   |\n-------\n| aa  |\n-------\n\nMATCH (d:demo) RETURN union_extract(d.b, 'num');\n--------------------------\n| UNION_EXTRACT(d.b,num) |\n--------------------------\n| 1                      |\n--------------------------\n|                        |\n--------------------------\n\nMATCH (d:demo) RETURN union_extract(d.b, 'str');\n--------------------------\n| UNION_EXTRACT(d.b,str) |\n--------------------------\n|                        |\n--------------------------\n| aa                     |\n--------------------------\n\nMATCH (d:demo) RETURN union_tag(d.b);\n------------------\n| UNION_TAG(d.b) |\n------------------\n| num            |\n------------------\n| str            |\n------------------\n")))}d.isMDXComponent=!0}}]);