"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[9867],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),y=a,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||o;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},8424:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={title:"Serial",sidebar_position:9},i="SERIAL",l={unversionedId:"cypher/data-types/serial",id:"cypher/data-types/serial",title:"Serial",description:"SERIAL is a logical data type and usually used for creating an incremental sequence of unique identifier column (similar to AUTO_INCREMENT supported by some other databases).",source:"@site/docs/cypher/data-types/serial.md",sourceDirName:"cypher/data-types",slug:"/cypher/data-types/serial",permalink:"/docusaurus/cypher/data-types/serial",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Serial",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Rel",permalink:"/docusaurus/cypher/data-types/rel"},next:{title:"String",permalink:"/docusaurus/cypher/data-types/string"}},s={},p=[{value:"Using <code>SERIAL</code> as Primary Key Column",id:"using-serial-as-primary-key-column",level:3}],c={toc:p},u="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serial"},"SERIAL"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SERIAL")," is a logical data type and usually used for creating an incremental sequence of unique identifier column (similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"AUTO_INCREMENT")," supported by some other databases)."),(0,a.kt)("h3",{id:"using-serial-as-primary-key-column"},"Using ",(0,a.kt)("inlineCode",{parentName:"h3"},"SERIAL")," as Primary Key Column"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"person.csv")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Alice\nBob\nCarol\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE NODE TABLE Person(ID SERIAL, name STRING, PRIMARY KEY(ID));\nCOPY Person FROM `person.csv`;\nMATCH (a:Person) RETURN a;\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-------------------------------------------\n| a                                       |\n-------------------------------------------\n| (label:Person, 3:0, {ID:0, name:Alice}) |\n-------------------------------------------\n| (label:Person, 3:1, {ID:1, name:Bob})   |\n-------------------------------------------\n| (label:Person, 3:2, {ID:2, name:Carol}) |\n-------------------------------------------\n")))}d.isMDXComponent=!0}}]);