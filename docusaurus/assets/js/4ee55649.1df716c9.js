"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[3686],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>_});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):u(u({},e),t)),a},s=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=o(a),k=r,_=c["".concat(p,".").concat(k)]||c[k]||d[k]||l;return a?n.createElement(_,u(u({ref:e},s),{},{components:a})):n.createElement(_,u({ref:e},s))}));function _(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,u=new Array(l);u[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:r,u[1]=i;for(var o=2;o<l;o++)u[o]=a[o];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9536:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={title:"Data Type",sidebar_position:5},u=void 0,i={unversionedId:"client-apis/c-api/datatype",id:"client-apis/c-api/datatype",title:"Data Type",description:"struct kuzulogicaltype",source:"@site/docs/client-apis/c-api/datatype.md",sourceDirName:"client-apis/c-api",slug:"/client-apis/c-api/datatype",permalink:"/docusaurus/client-apis/c-api/datatype",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Data Type",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Value",permalink:"/docusaurus/client-apis/c-api/value"},next:{title:"Prepared Statement",permalink:"/docusaurus/client-apis/c-api/prepared_statement"}},p={},o=[{value:"struct kuzu_logical_type",id:"struct-kuzu_logical_type",level:2},{value:"struct kuzu_date_t",id:"struct-kuzu_date_t",level:2},{value:"struct kuzu_interval_t",id:"struct-kuzu_interval_t",level:2},{value:"struct kuzu_timestamp_t",id:"struct-kuzu_timestamp_t",level:2},{value:"struct kuzu_internal_id_t",id:"struct-kuzu_internal_id_t",level:2}],s={toc:o},c="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"struct-kuzu_logical_type"},"struct kuzu_logical_type"),(0,r.kt)("p",null,"kuzu_logical_type is the kuzu internal representation of data types.  "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"struct-kuzu_date_t"},"struct kuzu_date_t"),(0,r.kt)("p",null,"kuzu internal date type which stores the number of days since 1970-01-01 00:00:00 UTC.  "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"struct-kuzu_interval_t"},"struct kuzu_interval_t"),(0,r.kt)("p",null,"kuzu internal interval type which stores the months, days and microseconds.  "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"struct-kuzu_timestamp_t"},"struct kuzu_timestamp_t"),(0,r.kt)("p",null,"kuzu internal timestamp type which stores the number of microseconds since 1970-01-01 00:00:00 UTC.  "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"struct-kuzu_internal_id_t"},"struct kuzu_internal_id_t"),(0,r.kt)("p",null,"kuzu internal internal_id type which stores the table_id and offset of a node/rel.  "),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"kuzu_logical_type* kuzu_data_type_clone (kuzu_logical_type * data_type)\n")),(0,r.kt)("p",null,"Creates a new data type instance by cloning the given data type instance. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data_type")," The data type instance to clone. ")),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"kuzu_logical_type* kuzu_data_type_create (kuzu_data_type_id id, kuzu_logical_type * child_type, uint64_t fixed_num_elements_in_list)\n")),(0,r.kt)("p",null,"Creates a data type instance with the given id, childType and fixed_num_elements_in_list. Caller is responsible for destroying the returned data type instance. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," The enum type id of the datatype to create. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"child_type")," The child type of the datatype to create(only used for nested dataTypes). "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fixed_num_elements_in_list")," The fixed number of elements in the list(only used for FIXED_LIST). ")),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void kuzu_data_type_destroy (kuzu_logical_type * data_type)\n")),(0,r.kt)("p",null,"Destroys the given data type instance. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data_type")," The data type instance to destroy. ")),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"bool kuzu_data_type_equals (kuzu_logical_type * data_type1, kuzu_logical_type * data_type2)\n")),(0,r.kt)("p",null,"Returns true if the given data type is equal to the other data type, false otherwise. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data_type1")," The first data type instance to compare. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data_type2")," The second data type instance to compare. ")),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"uint64_t kuzu_data_type_get_fixed_num_elements_in_list (kuzu_logical_type * data_type)\n")),(0,r.kt)("p",null,"Returns the number of elements per list for fixedSizeList. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data_type")," The data type instance to return. ")),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"kuzu_data_type_id kuzu_data_type_get_id (kuzu_logical_type * data_type)\n")),(0,r.kt)("p",null,"Returns the enum type id of the given data type. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data_type")," The data type instance to return. ")),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);