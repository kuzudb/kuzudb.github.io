"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[3793],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>y});var t=n(7294);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),f=s,y=l["".concat(c,".").concat(f)]||l[f]||d[f]||o;return n?t.createElement(y,a(a({ref:r},u),{},{components:n})):t.createElement(y,a({ref:r},u))}));function y(e,r){var n=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[l]="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2490:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=n(7462),s=(n(7294),n(3905));const o={},a="Functions and Expressions",i={unversionedId:"cypher/expressions/index",id:"cypher/expressions/index",title:"Functions and Expressions",description:"Within many clauses of high-level database query languages, such as WHERE, WITH,",source:"@site/docs/cypher/expressions/index.md",sourceDirName:"cypher/expressions",slug:"/cypher/expressions/",permalink:"/docusaurus/cypher/expressions/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cypher/expressions/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Date Functions",permalink:"/docusaurus/cypher/expressions/date-functions"},next:{title:"Interval Functions",permalink:"/docusaurus/cypher/expressions/interval-functions"}},c={},p=[],u={toc:p},l="wrapper";function d(e){let{components:r,...n}=e;return(0,s.kt)(l,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"functions-and-expressions"},"Functions and Expressions"),(0,s.kt)("p",null,"Within many clauses of high-level database query languages, such as WHERE, WITH,\nand RETURN in openCypher, you can perform computations using expressions.\nExpressions can be very simple or arbitrarily complex. Variables that bind to\nnode and relationship properties, aliases from previous parts of the query,\nliterals (i.e., constants), are examples of most simples expressions.\nUsing logical and arithmetic operators, and functions recursively,\nyou can create arbitrarily complex expressions."))}d.isMDXComponent=!0}}]);