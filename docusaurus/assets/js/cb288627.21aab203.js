"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Union Functions",description:"Union functions are used to create and extract union."},i="Union Functions",u={unversionedId:"cypher/expressions/union-functions",id:"cypher/expressions/union-functions",title:"Union Functions",description:"Union functions are used to create and extract union.",source:"@site/docs/cypher/expressions/union-functions.md",sourceDirName:"cypher/expressions",slug:"/cypher/expressions/union-functions",permalink:"/docusaurus/cypher/expressions/union-functions",draft:!1,tags:[],version:"current",frontMatter:{title:"Union Functions",description:"Union functions are used to create and extract union."},sidebar:"docSidebar",previous:{title:"Timestamp Functions",permalink:"/docusaurus/cypher/expressions/timestamp-functions"},next:{title:"UUID Functions",permalink:"/docusaurus/cypher/expressions/uuid-functions"}},l={},c=[],s={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"union-functions"},"Union Functions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Function"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"),(0,a.kt)("th",{parentName:"tr",align:null},"Result"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"union_value(tag := value)"),(0,a.kt)("td",{parentName:"tr",align:null},"create a union with given value"),(0,a.kt)("td",{parentName:"tr",align:null},"union_value(a := 1)"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"union_tag(union)"),(0,a.kt)("td",{parentName:"tr",align:null},"return the tag of union"),(0,a.kt)("td",{parentName:"tr",align:null},"union_tag(union_value(a := 1))"),(0,a.kt)("td",{parentName:"tr",align:null},"a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"union_extract(union, tag)"),(0,a.kt)("td",{parentName:"tr",align:null},"return the value for given tag"),(0,a.kt)("td",{parentName:"tr",align:null},"union_extract(union_value(a := 1), 'a')"),(0,a.kt)("td",{parentName:"tr",align:null},"1")))))}d.isMDXComponent=!0}}]);