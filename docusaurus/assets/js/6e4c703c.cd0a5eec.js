"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[4299],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,y=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"List",sidebar_position:4},l="LIST",o={unversionedId:"cypher/data-types/list",id:"cypher/data-types/list",title:"List",description:"K\xf9zu supports two LIST data types: variable-size list VAR-LIST and fixed-size FIXED-LIST.",source:"@site/docs/cypher/data-types/list.md",sourceDirName:"cypher/data-types",slug:"/cypher/data-types/list",permalink:"/docusaurus/cypher/data-types/list",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"List",sidebar_position:4},sidebar:"docSidebar",previous:{title:"Interval",permalink:"/docusaurus/cypher/data-types/interval"},next:{title:"Node",permalink:"/docusaurus/cypher/data-types/node"}},p={},c=[{value:"<code>VAR-LIST</code> creation",id:"var-list-creation",level:3},{value:"<code>VAR-LIST</code> creation with function",id:"var-list-creation-with-function",level:3},{value:"Unwind <code>VAR-LIST</code>",id:"unwind-var-list",level:3}],u={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"list"},"LIST"),(0,a.kt)("p",null,"K\xf9zu supports two ",(0,a.kt)("inlineCode",{parentName:"p"},"LIST")," data types: variable-size list ",(0,a.kt)("inlineCode",{parentName:"p"},"VAR-LIST")," and fixed-size ",(0,a.kt)("inlineCode",{parentName:"p"},"FIXED-LIST"),"."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"VAR-LIST")," type can contain arbitrary number of values with the same type."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"FIXED-LIST")," type can contain fixed number of values with the same numerical type."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"DDL definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"VAR-LIST"),(0,a.kt)("td",{parentName:"tr",align:null},"INT64[]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FIXED-LIST"),(0,a.kt)("td",{parentName:"tr",align:null},"INT64","[5]")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": FIXED-LIST is an ",(0,a.kt)("strong",{parentName:"p"},"experimental")," feature. K\xf9zu only supports bulk loading (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"COPY")," statement) and reading for FIXED_LIST data type."),(0,a.kt)("h3",{id:"var-list-creation"},(0,a.kt)("inlineCode",{parentName:"h3"},"VAR-LIST")," creation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'RETURN ["Alice", "Bob"] AS l;\n')),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"---------------\n| l           |\n---------------\n| [Alice,Bob] |\n---------------\n")),(0,a.kt)("h3",{id:"var-list-creation-with-function"},(0,a.kt)("inlineCode",{parentName:"h3"},"VAR-LIST")," creation with function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"RETURN list_creation(1,2,3,4) AS l;\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-------------\n| l         |\n-------------\n| [1,2,3,4] |\n-------------\n")),(0,a.kt)("h3",{id:"unwind-var-list"},"Unwind ",(0,a.kt)("inlineCode",{parentName:"h3"},"VAR-LIST")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"UNWIND [[1,2], [3], [4, 5]] AS x \nUNWIND x as y \nRETURN y;\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-----\n| y |\n-----\n| 1 |\n-----\n| 2 |\n-----\n| 3 |\n-----\n| 4 |\n-----\n| 5 |\n-----\n")))}d.isMDXComponent=!0}}]);