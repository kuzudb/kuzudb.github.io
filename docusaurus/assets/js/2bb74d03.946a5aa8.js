"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[568],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=c(t),d=o,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u[s]="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4176:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={title:"Performance Debugging",sidebar_position:3},i="EXPLAIN and PROFILE",u={unversionedId:"development/performance-debugging",id:"development/performance-debugging",title:"Performance Debugging",description:"In order to see the query plans that K\xf9zu uses, you can",source:"@site/docs/development/performance-debugging.md",sourceDirName:"development",slug:"/development/performance-debugging",permalink:"/docusaurus/development/performance-debugging",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Performance Debugging",sidebar_position:3},sidebar:"docSidebar",previous:{title:"Testing Framework",permalink:"/docusaurus/development/testing-framework"},next:{title:"Database Internal",permalink:"/docusaurus/development/database-internal/"}},p={},c=[],l={toc:c},s="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"explain-and-profile"},"EXPLAIN and PROFILE"),(0,o.kt)("p",null,"In order to see the query plans that K\xf9zu uses, you can\ntype EXPLAIN and PROFILE before your query. You can do\nthis to debug the performance of the system on a particular\nquery. Both of these\ncommands print the query plan. PROFILE in addition\nruns the plan, produces the output, and collects runtime\ninformation for each operator in the plan, which will be\nshown inside the operators. EXPLAIN only shows the plan\nK\xf9zu's query compiler/optimizer produced, with 0 for\neach execution time. Here's a very simple example\nfrom the CLI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kuzu> PROFILE MATCH (a:User) RETURN a.name\n-----------\n| a.name  |\n-----------\n| Adam    |\n-----------\n| Karissa |\n-----------\n| Zhang   |\n-----------\n| Noura   |\n-----------\n(4 tuples)\nTime: 0.32ms (compiling), 0.15ms (executing)\n==============================================\n=============== Profiler Summary =============\n==============================================\n>> plan\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u2502\n\u2502\u2502       Physical Plan        \u2502\u2502\n\u2502\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502       RESULT_COLLECTOR       \u2502\n\u2502   ------------------------   \u2502\n\u2502          _0_a.name           \u2502\n\u2502   ------------------------   \u2502\n\u2502   ExecutionTime: 0.020000    \u2502\n\u2502   ------------------------   \u2502\n\u2502      NumOutputTuples: 0      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502          PROJECTION          \u2502\n\u2502   ------------------------   \u2502\n\u2502          _0_a.name           \u2502\n\u2502   ------------------------   \u2502\n\u2502   ExecutionTime: 0.000000    \u2502\n\u2502   ------------------------   \u2502\n\u2502      NumOutputTuples: 1      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502   SCAN_STRUCTURED_PROPERTY   \u2502\n\u2502   ------------------------   \u2502\n\u2502           _0_a.name          \u2502\n\u2502   ------------------------   \u2502\n\u2502   ExecutionTime: 0.003000    \u2502\n\u2502   ------------------------   \u2502\n\u2502      NumOutputTuples: 0      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502         SCAN_NODE_ID         \u2502\n\u2502   ------------------------   \u2502\n\u2502              a               \u2502\n\u2502   ------------------------   \u2502\n\u2502   ExecutionTime: 0.000000    \u2502\n\u2502   ------------------------   \u2502\n\u2502      NumOutputTuples: 4      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);