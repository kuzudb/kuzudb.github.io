"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[5629],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=s(a),u=r,m=y["".concat(p,".").concat(u)]||y[u]||d[u]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[y]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8144:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={title:"DataType",sidebar_position:1},i="DataTypes",l={unversionedId:"development/database-internal/datatype",id:"development/database-internal/datatype",title:"DataType",description:"There are two data type classes in K\xf9zu, LogicalType and PhysicalType.",source:"@site/docs/development/database-internal/datatype.md",sourceDirName:"development/database-internal",slug:"/development/database-internal/datatype",permalink:"/docusaurus/development/database-internal/datatype",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"DataType",sidebar_position:1},sidebar:"docSidebar",previous:{title:"Database Internal",permalink:"/docusaurus/development/database-internal/"},next:{title:"Vector",permalink:"/docusaurus/development/database-internal/vector"}},p={},s=[{value:"LogicalType",id:"logicaltype",level:2},{value:"PhysicalType",id:"physicaltype",level:2}],c={toc:s},y="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(y,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datatypes"},"DataTypes"),(0,r.kt)("p",null,"There are two data type classes in K\xf9zu, ",(0,r.kt)("inlineCode",{parentName:"p"},"LogicalType")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PhysicalType"),"."),(0,r.kt)("h2",{id:"logicaltype"},"LogicalType"),(0,r.kt)("p",null,"Logical type refers to how data is conceptually organized. Logical type does NOT care how data is actually stored. Different logical types may have the same physical type during storage/query processing, e.g. both ",(0,r.kt)("inlineCode",{parentName:"p"},"INT32")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DATE")," logical type will have ",(0,r.kt)("inlineCode",{parentName:"p"},"INT32")," physical type."),(0,r.kt)("p",null,"During query compilation i.e. parsing, binding and planning, logical type should always be used."),(0,r.kt)("h2",{id:"physicaltype"},"PhysicalType"),(0,r.kt)("p",null,"Physical type refers to the specific format of data as it is physically stored on disk and in memory."),(0,r.kt)("p",null,"Physical type is preferred in storage and query processing. E.g. columns are constructed based on physical types. comparison operators only care about the physical types. Using physical type is not mandatory, if you need to make a distinction between logical types, then you will need to fall back to logical type."))}d.isMDXComponent=!0}}]);