"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[3217],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(a),m=l,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(b,u(u({ref:t},c),{},{components:a})):n.createElement(b,u({ref:t},c))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,u=new Array(r);u[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:l,u[1]=s;for(var i=2;i<r;i++)u[i]=a[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6674:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>j,contentTitle:()=>z,default:()=>C,frontMatter:()=>I,metadata:()=>O,toc:()=>E});var n=a(7462),l=a(7294),r=a(3905),u=a(6010),s=a(2466),o=a(6550),i=a(1980),c=a(7392),p=a(12);function d(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function b(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[u,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,i]=k({queryString:a,groupId:n}),[c,d]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,p.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),v=(()=>{const e=o??c;return b({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:u,selectValue:(0,l.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),d(e)}),[i,d,r]),tabValues:r}}var h=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:r,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=i[a].value;n!==r&&(p(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,u.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=v(e);return l.createElement("div",{className:(0,u.Z)("tabs-container",g.tabList)},l.createElement(f,(0,n.Z)({},e,t)),l.createElement(y,(0,n.Z)({},e,t)))}function x(e){const t=(0,h.Z)();return l.createElement(w,(0,n.Z)({key:String(t)},e))}const T={tabItem:"tabItem_Ymn6"};function N(e){let{children:t,hidden:a,className:n}=e;return l.createElement("div",{role:"tabpanel",className:(0,u.Z)(T.tabItem,n),hidden:a},t)}const I={title:"Installation",sidebar_position:0},z=void 0,O={unversionedId:"installation",id:"installation",title:"Installation",description:"Command Line",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docusaurus/installation",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Installation",sidebar_position:0},sidebar:"docSidebar",next:{title:"Getting Started",permalink:"/docusaurus/getting-started/"}},j={},E=[{value:"Command Line",id:"command-line",level:2},{value:"Python",id:"python",level:2},{value:"C/C++",id:"cc",level:2},{value:"NodeJS",id:"nodejs",level:2},{value:"Rust",id:"rust",level:2},{value:"Java",id:"java",level:2},{value:"Nightly Builds",id:"nightly-builds",level:2}],P={toc:E},S="wrapper";function C(e){let{components:t,...a}=e;return(0,r.kt)(S,(0,n.Z)({},P,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"command-line"},"Command Line"),(0,r.kt)(x,{groupId:"installation",defaultValue:"mac",values:[{label:"MacOS",value:"mac"},{label:"Linux",value:"linux"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,r.kt)(N,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Intel")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://github.com/kuzudb/kuzu/releases/download/v0.1.0/kuzu_cli-osx-x86_64.zip\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apple Silicon")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://github.com/kuzudb/kuzu/releases/download/v0.1.0/kuzu_cli-osx-arm64.zip\n"))),(0,r.kt)(N,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://github.com/kuzudb/kuzu/releases/download/v0.1.0/kuzu_cli-linux-x86_64.zip\n"))),(0,r.kt)(N,{value:"win",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://github.com/kuzudb/kuzu/releases/download/v0.1.0/kuzu_cli-windows-x86_64.zip\n")))),(0,r.kt)("h2",{id:"python"},"Python"),(0,r.kt)(x,{groupId:"installation",defaultValue:"mac",values:[{label:"MacOS",value:"mac"},{label:"Linux",value:"linux"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,r.kt)(N,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install kuzu\n"))),(0,r.kt)(N,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install kuzu\n"))),(0,r.kt)(N,{value:"win",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install kuzu\n")))),(0,r.kt)("h2",{id:"cc"},"C/C++"),(0,r.kt)(x,{groupId:"installation",defaultValue:"mac",values:[{label:"MacOS",value:"mac"},{label:"Linux",value:"linux"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,r.kt)(N,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Intel")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://github.com/kuzudb/kuzu/releases/download/v0.1.0/libkuzu-osx-x86_64.zip\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apple Silicon")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://github.com/kuzudb/kuzu/releases/download/v0.1.0/libkuzu-osx-arm64.zip\n"))),(0,r.kt)(N,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://github.com/kuzudb/kuzu/releases/download/v0.1.0/libkuzu-linux-x86_64.zip\n"))),(0,r.kt)(N,{value:"win",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://github.com/kuzudb/kuzu/releases/download/v0.1.0/libkuzu-windows-x86_64.zip\n")))),(0,r.kt)("h2",{id:"nodejs"},"NodeJS"),(0,r.kt)(x,{groupId:"installation",defaultValue:"mac",values:[{label:"MacOS",value:"mac"},{label:"Linux",value:"linux"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,r.kt)(N,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install kuzu\n"))),(0,r.kt)(N,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install kuzu\n"))),(0,r.kt)(N,{value:"win",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install kuzu\n")))),(0,r.kt)("h2",{id:"rust"},"Rust"),(0,r.kt)(x,{groupId:"installation",defaultValue:"mac",values:[{label:"MacOS",value:"mac"},{label:"Linux",value:"linux"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,r.kt)(N,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo add kuzu\n"))),(0,r.kt)(N,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo add kuzu\n"))),(0,r.kt)(N,{value:"win",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo add kuzu\n")))),(0,r.kt)("h2",{id:"java"},"Java"),(0,r.kt)("p",null,"Download the latest version ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kuzudb/kuzu/releases/latest"},"here"),", and put it under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/resources"),". (We assume this is the project directory structure and the project dependency is managed through Apache Maven)."),(0,r.kt)(x,{groupId:"installation",defaultValue:"mac",values:[{label:"MacOS",value:"mac"},{label:"Linux",value:"linux"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,r.kt)(N,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.kuzudb</groupId>\n    <artifactId>kuzudb</artifactId>\n    <version>0.1.0</version>\n    <scope>system</scope>\n    <systemPath>${project.basedir}/src/main/resources/kuzu_java.jar</systemPath>\n</dependency>\n"))),(0,r.kt)(N,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.kuzudb</groupId>\n    <artifactId>kuzudb</artifactId>\n    <version>0.1.0</version>\n    <scope>system</scope>\n    <systemPath>${project.basedir}/src/main/resources/kuzu_java.jar</systemPath>\n</dependency>\n"))),(0,r.kt)(N,{value:"win",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.kuzudb</groupId>\n    <artifactId>kuzudb</artifactId>\n    <version>0.1.0</version>\n    <scope>system</scope>\n    <systemPath>${project.basedir}/src/main/resources/kuzu_java.jar</systemPath>\n</dependency>\n")))),(0,r.kt)("h2",{id:"nightly-builds"},"Nightly Builds"),(0,r.kt)("p",null,"We have setup a nightly build pipeline for those who want to access latest feature set. To use the latest nightly version of K\xf9zu, follow the instructions below:"),(0,r.kt)("p",null,"For Python API, the latest nightly version can be installed with ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install --pre kuzu"),"."),(0,r.kt)("p",null,"For Node.js API, the latest nightly version can be installed with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i kuzu@next"),"."),(0,r.kt)("p",null,"For Rust API, the latest nightly version can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/kuzu/versions"},"crates.io"),"."),(0,r.kt)("p",null,"For CLI, C and C++ shared library, and Java JAR, the latest nightly version can be downloaded from the latest run of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kuzudb/kuzu/actions/workflows/build-and-deploy.yml"},"this GitHub Actions pipeline"),"."))}C.isMDXComponent=!0}}]);