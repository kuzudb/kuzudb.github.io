"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[5994],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var a=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=s,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||n;return r?a.createElement(g,o(o({ref:t},l),{},{components:r})):a.createElement(g,o({ref:t},l))}));function g(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,o=new Array(n);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8548:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(7462),s=(r(7294),r(3905));r(5869),r(2645),r(4612),r(357),r(5091),r(1628),r(9791);const n={slug:"llms-graphs-part-2",authors:["semih"],tags:["llms"]},o="RAG Using Unstructured Data & Role of Knowledge Graphs",i={permalink:"/docusaurus/blog/llms-graphs-part-2",source:"@site/blog/2024-01-15-llms-graphs-part-2/index.md",title:"RAG Using Unstructured Data & Role of Knowledge Graphs",description:"In my previous post,",date:"2024-01-15T00:00:00.000Z",formattedDate:"January 15, 2024",tags:[{label:"llms",permalink:"/docusaurus/blog/tags/llms"}],readingTime:19.065,hasTruncateMarker:!0,authors:[{name:"Semih Saliho\u011flu",title:"CEO of K\xf9zu Inc. & Associate Prof. at UWaterloo",url:"https://cs.uwaterloo.ca/~ssalihog/",imageURL:"https://kuzudb.com/img/blog/semih.jpg",key:"semih"}],frontMatter:{slug:"llms-graphs-part-2",authors:["semih"],tags:["llms"]},prevItem:{title:"Transforming your data to graphs - Part 1",permalink:"/docusaurus/blog/transforming-your-data-to-graphs-1"},nextItem:{title:"RAG Using Structured Data: Overview & Important Questions",permalink:"/docusaurus/blog/llms-graphs-part-1"}},p={authorsImageUrls:[void 0]},c=[],l={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://kuzudb.com/docusaurus/blog/llms-graphs-part-1"},"In my previous post"),",\nI gave an overview of question answering (Q&A) systems that use LLMs\nover private enterprise data. I covered the architectures of these systems, the common tools\ndevelopers use to build these systems when the enterprise data used is structured,\ni.e., data exists as records stored in some DBMS, relational or graph. I was referring to\nthese systems as ",(0,s.kt)("em",{parentName:"p"},"RAG systems using structured data"),". In this post, I cover ",(0,s.kt)("em",{parentName:"p"},"RAG systems\nthat use unstructured data"),", such as text files,\npdf documents, or internal html pages in an enterprise. I will refer to these as RAG-U systems\nor sometimes simply as RAG-U (should have used the term RAG-S in the previous post!)."),(0,s.kt)("p",null,"To remind readers, I decided to\nwrite these two posts after doing a lot of reading in the space to understand the role of\nknowledge graph (KGs) and graph DBMSs in LLM applications. My goals are (i) to overview the field to readers who want to get started\nbut are intimidated by the area; and (ii) point to several future work directions that I find\nimportant.",(0,s.kt)("sup",{parentName:"p",id:"fnref-1-c9223b"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1-c9223b",className:"footnote-ref"},"1"))),(0,s.kt)("div",{className:"footnotes"},(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol",id:"fn-1-c9223b"},"In this post I'm only covering approaches\nthat ultimately use retrieve some unstructured data (or a transformation of it) to put it\ninto LLM prompts. I am not covering approaches that query a pre-existing KG directly and use the records\nin it as additional data into a prompt. See ",(0,s.kt)("a",{parentName:"li",href:"https://gradientflow.com/boosting-llms-with-external-knowledge-the-case-for-knowledge-graphs/"},"this post"),' by Ben Lorica\nfor an example. The 3 point bullet point after the "Knowledge graphs significantly\nenhance RAG models" describes such an approach. According to my organization of RAG approaches,\nsuch approaches would fall under RAG using structured data, since KGs are structured records.',(0,s.kt)("a",{parentName:"li",href:"#fnref-1-c9223b",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},5091:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/kg-enhanced-rag-overview-57a9ca61a3e3739118a711237fa28740.png"},357:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/kg-enhanced-rag-preprocessing-0258a645794605b4b9469f2756c4a562.png"},5869:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rag-unstructured-overview-9cf06430dbd5bc1a010aa69dd7b98f6a.png"},4612:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/standard-rag-overview-1a978709d941cd0aa9c64f7135ee6b2c.png"},2645:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/standard-rag-preprocessing-2ed0ed6a8e1e4583cc0036aa0e7a95f1.png"},9791:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/triples-based-rag-overview-8034260dd33e3c205ab472f2f292eb2b.png"},1628:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/triples-based-rag-preprocessing-a78585b0799b8bc8ffb947f170bff914.png"}}]);