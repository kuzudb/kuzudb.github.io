"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[7363],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),f=r,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||o;return t?i.createElement(m,a(a({ref:n},p),{},{components:t})):i.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5073:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=t(7462),r=(t(7294),t(3905));const o={title:"Overview",sidebar_position:0},a="Overview",s={unversionedId:"extensions/index",id:"extensions/index",title:"Overview",description:"K\xf9zu has an extension framework designed to extend K\xf9zu's capabilities. Currently our only extension",source:"@site/docs/extensions/index.md",sourceDirName:"extensions",slug:"/extensions/",permalink:"/docusaurus/extensions/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"docSidebar",previous:{title:"Execution",permalink:"/docusaurus/development/database-internal/execution"},next:{title:"httpfs",permalink:"/docusaurus/extensions/httpfs"}},l={},u=[{value:"Installing an official extension",id:"installing-an-official-extension",level:2},{value:"Loading an official extension",id:"loading-an-official-extension",level:2}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"K\xf9zu has an extension framework designed to extend K\xf9zu's capabilities. Currently our only extension\nsupports reading data  from a file hosted on a http(s) server and can be used to read from Amazon\nS3. We plan to implement additional extensions, such as to support new data types, functions and\nindices."),(0,r.kt)("p",null,"Extensions expose several internal interfaces of K\xf9zu, such as FileSystem, that can have multiple implementations.\nExtensions are implementations of these interfaces that can be loaded dynamically at runtime.\n",(0,r.kt)("em",{parentName:"p"},"Official extensions")," are implementations by the K\xf9zu team. These are hosted in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kuzudb/extension"},"official\nextensions repo"),".\nThird-party developers can also develop their own extensions. However, we do not recommend this yet\nuntil we have more stable APIs. That is why are currently not providing detailed documentation on how to develop\nyour own extensions. For now, please contact us directly over email or in Discord if you want to develop your own extension."),(0,r.kt)("h1",{id:"official-extensions"},"Official Extensions"),(0,r.kt)("p",null,"The available extensions for each OS are hosted in the ",(0,r.kt)("inlineCode",{parentName:"p"},"kuzudb/extension")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kuzudb/extension"},"repo"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Extension Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"httpfs"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds support for reading and writing files over HTTP(s) protocol")))),(0,r.kt)("h1",{id:"using-extensions-in-k\xf9zu"},"Using Extensions in K\xf9zu"),(0,r.kt)("h2",{id:"installing-an-official-extension"},"Installing an official extension"),(0,r.kt)("p",null,"K\xf9zu requires the user to install the extension before loading and using it.\nOfficial extensions can be simply installed by running the install command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSTALL extension_name\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"extension_name")," is the name of the extension to be installed."),(0,r.kt)("h2",{id:"loading-an-official-extension"},"Loading an official extension"),(0,r.kt)("p",null,"After installation, a load command is required to ask K\xf9zu to dynamically load the shared library.\nExtensions installed using the ",(0,r.kt)("inlineCode",{parentName:"p"},"INSTALL")," command can be loaded directly as follows: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"LOAD EXTENSION httpfs\n")))}d.isMDXComponent=!0}}]);