"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[3278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),k=r,d=s["".concat(u,".").concat(k)]||s[k]||m[k]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Connection",sidebar_position:1},i=void 0,l={unversionedId:"client-apis/python-api/connection",id:"client-apis/python-api/connection",title:"Connection",description:"Connection",source:"@site/docs/client-apis/python-api/connection.md",sourceDirName:"client-apis/python-api",slug:"/client-apis/python-api/connection",permalink:"/docusaurus/client-apis/python-api/connection",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Connection",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/docusaurus/client-apis/python-api/database"},next:{title:"Query Result",permalink:"/docusaurus/client-apis/python-api/query-result"}},u={},p=[{value:"Connection",id:"connection",level:2},{value:"Available APIs:",id:"available-apis",level:3}],c={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{id:"connection.Connection"}),(0,r.kt)("h2",{id:"connection"},"Connection"),(0,r.kt)("p",null,"After the database instance has been created, users are expected to create a connection and issue queries through the connection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Connection()\n")),(0,r.kt)("h3",{id:"available-apis"},"Available APIs:"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#connection.Connection.__init__"},"_","_","init","_","_")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#connection.Connection.set_max_threads_for_exec"},"set","_","max","_","threads","_","for","_","exec")," Set the maximum number of threads for executing queries."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#connection.Connection.execute"},"execute")," Execute a query.")),(0,r.kt)("hr",null),(0,r.kt)("a",{id:"connection.Connection.__init__"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"_","_","init","_","_")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(database, num_threads=0)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"database : _kuzu.Database")," Database to connect to.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"num_threads : int")," Maximum number of threads to use for executing queries."))),(0,r.kt)("hr",null),(0,r.kt)("a",{id:"connection.Connection.set_max_threads_for_exec"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"set","_","max","_","threads","_","for","_","exec")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def set_max_threads_for_exec(num_threads)\n")),(0,r.kt)("p",null,"Set the maximum number of threads for executing queries."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"num_threads : int")," Maximum number of threads to use for executing queries.")),(0,r.kt)("hr",null),(0,r.kt)("a",{id:"connection.Connection.execute"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"execute")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def execute(query, parameters=[])\n")),(0,r.kt)("p",null,"Execute a query."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"query : str")," Query to execute.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"parameters : list[tuple(str, any)]")," Parameters for the query."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"QueryResult")," Query result.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'conn.execute("MATCH (a:person) WHERE a.isStudent = $1 AND a.fName = $k RETURN COUNT(*)", [("1", False), ("k", \'Alice\')])'))))}m.isMDXComponent=!0}}]);