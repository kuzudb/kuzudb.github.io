"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[5496],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,k=s["".concat(o,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[s]="string"==typeof e?e:a,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={title:"Call",sidebar_position:11,description:"CALL clause is a reading clause used for executing schema functions."},i="CALL",u={unversionedId:"cypher/query-clauses/call",id:"cypher/query-clauses/call",title:"Call",description:"CALL clause is a reading clause used for executing schema functions.",source:"@site/docs/cypher/query-clauses/call.md",sourceDirName:"cypher/query-clauses",slug:"/cypher/query-clauses/call",permalink:"/docusaurus/cypher/query-clauses/call",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Call",sidebar_position:11,description:"CALL clause is a reading clause used for executing schema functions."},sidebar:"tutorialSidebar",previous:{title:"Unwind",permalink:"/docusaurus/cypher/query-clauses/unwind"},next:{title:"Database Configuration",permalink:"/docusaurus/cypher/configuration"}},o={},p=[{value:"TABLE_INFO",id:"table_info",level:3},{value:"CURRENT_SETTING",id:"current_setting",level:3},{value:"DB_VERSION",id:"db_version",level:3}],c={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"call"},"CALL"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CALL")," clause is a reading clause used for executing schema functions. The following tables lists built-in schema functions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Function"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TABLE_INFO('tableName')"),(0,a.kt)("td",{parentName:"tr",align:null},"returns metadata information of the given table")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CURRENT_SETTING('setting')"),(0,a.kt)("td",{parentName:"tr",align:null},"returns the value of the given setting")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DB_VERSION()"),(0,a.kt)("td",{parentName:"tr",align:null},"returns the version of K\xf9zu")))),(0,a.kt)("h3",{id:"table_info"},"TABLE_INFO"),(0,a.kt)("p",null,"TABLE_INFO takes table name as a parameter and returns metadata information of the table. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Column"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"property id"),(0,a.kt)("td",{parentName:"tr",align:null},"Internal identifier of the property within table"),(0,a.kt)("td",{parentName:"tr",align:null},"INT64")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"name of the property"),(0,a.kt)("td",{parentName:"tr",align:null},"STRING")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"data type of the property"),(0,a.kt)("td",{parentName:"tr",align:null},"STRING")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"primary key"),(0,a.kt)("td",{parentName:"tr",align:null},"if property is primary key"),(0,a.kt)("td",{parentName:"tr",align:null},"BOOLEAN")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CALL TABLE_INFO('User') return *;\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"---------------------------------------------\n| property id | name | type   | primary key |\n---------------------------------------------\n| 0           | name | STRING | True        |\n---------------------------------------------\n| 1           | age  | INT64  | False       |\n---------------------------------------------\n")),(0,a.kt)("h3",{id:"current_setting"},"CURRENT_SETTING"),(0,a.kt)("p",null,"CURRENT_SETTING returns the value of given database configuration."),(0,a.kt)("p",null,"All supported configurable database options can be found here: ",(0,a.kt)("a",{parentName:"p",href:"/docusaurus/cypher/configuration"},"configuration")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CALL current_setting('threads') return *;\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-----------\n| threads |\n-----------\n| 8       |\n-----------\n")),(0,a.kt)("h3",{id:"db_version"},"DB_VERSION"),(0,a.kt)("p",null,"DB_VERSION returns current database version."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Column"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},"database version"),(0,a.kt)("td",{parentName:"tr",align:null},"STRING")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CALL db_version() RETURN *;\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"----------------\n| KUZU_Version |\n----------------\n| v0.4.0       |\n----------------\n")))}d.isMDXComponent=!0}}]);