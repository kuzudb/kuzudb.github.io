"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[1275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={title:"Command Line",sidebar_position:0,description:"Through the CLI, you can issue Cypher queries or call shell commands."},i="K\xf9zu CLI",o={unversionedId:"client-apis/cli",id:"client-apis/cli",title:"Command Line",description:"Through the CLI, you can issue Cypher queries or call shell commands.",source:"@site/docs/client-apis/cli.md",sourceDirName:"client-apis",slug:"/client-apis/cli",permalink:"/docusaurus/client-apis/cli",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Command Line",sidebar_position:0,description:"Through the CLI, you can issue Cypher queries or call shell commands."},sidebar:"docSidebar",previous:{title:"Client APIs",permalink:"/docusaurus/client-apis/"},next:{title:"Python",permalink:"/docusaurus/client-apis/python"}},u={},s=[{value:"Start the shell",id:"start-the-shell",level:2},{value:"Shell commands",id:"shell-commands",level:2},{value:"<code>:help</code>",id:"help",level:3},{value:"<code>:clear</code>",id:"clear",level:3},{value:"<code>:quit</code>",id:"quit",level:3},{value:"<code>:thread [num_thread]</code>",id:"thread-num_thread",level:3},{value:"<code>:logging_level [logging_level]</code>",id:"logging_level-logging_level",level:3},{value:"<code>:timeout</code>",id:"timeout",level:3},{value:"Interrupt",id:"interrupt",level:2},{value:"Non-interactive usage",id:"non-interactive-usage",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"k\xf9zu-cli"},"K\xf9zu CLI"),(0,a.kt)("p",null,"K\xf9zu provides a command line interface (CLI) through which you can issue Cypher queries or call shell\ncommands. See the ",(0,a.kt)("a",{parentName:"p",href:"/docusaurus/getting-started/cli"},"getting started page")," for instructions on how\nto install the CLI and its basic usage."),(0,a.kt)("h2",{id:"start-the-shell"},"Start the shell"),(0,a.kt)("p",null,"Navigate to the directory where the K\xf9zu CLI is located and run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./kuzu <db_path>\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"<db_path>")," is the directory for the database files.\nThis path can point to an existing database or a yet-to-be-created directory, in which case\nK\xf9zu will automatically create the directory and initialize an empty database for you."),(0,a.kt)("p",null,"You can view the additional shell startup flags by running ",(0,a.kt)("inlineCode",{parentName:"p"},"./kuzu -h"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ ./kuzu -h\nhelp\n  ./kuzu databasePath {OPTIONS}\n    KuzuDB Shell\n\n  OPTIONS:\n\n      databasePath                      Database path.\n      -h, --help                        Display this help menu\n      -d, --defaultBPSize               Size of buffer pool for default and\n                                        large page sizes in megabytes\n      --nocompression                   Disable compression\n      -r, --readOnly                    Open database at read-only mode.\n      -p                                Path to directory for shell history\n      -v, --version                     Display current database version\n      "--" can be used to terminate flag options and force all following\n      arguments to be treated as positional options\n')),(0,a.kt)("h2",{id:"shell-commands"},"Shell commands"),(0,a.kt)("p",null,"Once you start the shell, you can issue Cypher queries as shown ",(0,a.kt)("a",{parentName:"p",href:"/docusaurus/getting-started/cli#execute-cypher-query"},"here"),", or call\nany of the shell commands listed below."),(0,a.kt)("h3",{id:"help"},(0,a.kt)("inlineCode",{parentName:"h3"},":help")),(0,a.kt)("p",null,"Show built-in command list within the K\xf9zu shell."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kuzu> :help\n    :help     get command list\n    :clear     clear shell\n    :quit     exit from shell\n    :thread [num_threads]     set number of threads for query execution\n    :logging_level [logging_level]     set logging level of database, available options: debug, info, err\n    :timeout [query_timeout]     set query timeout in ms\n")),(0,a.kt)("h3",{id:"clear"},(0,a.kt)("inlineCode",{parentName:"h3"},":clear")),(0,a.kt)("p",null,"Clear shell. Alternatively, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + L")," to clear the shell."),(0,a.kt)("h3",{id:"quit"},(0,a.kt)("inlineCode",{parentName:"h3"},":quit")),(0,a.kt)("p",null,"Exit from shell. Alternatively, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + D")," to exit the shell."),(0,a.kt)("h3",{id:"thread-num_thread"},(0,a.kt)("inlineCode",{parentName:"h3"},":thread [num_thread]")),(0,a.kt)("p",null,"Set maximum number of threads to execute query in current connection."),(0,a.kt)("h3",{id:"logging_level-logging_level"},(0,a.kt)("inlineCode",{parentName:"h3"},":logging_level [logging_level]")),(0,a.kt)("p",null,"Set logging level, available options: debug, info, err"),(0,a.kt)("h3",{id:"timeout"},(0,a.kt)("inlineCode",{parentName:"h3"},":timeout")),(0,a.kt)("p",null,"Set query timeout in ms."),(0,a.kt)("h2",{id:"interrupt"},"Interrupt"),(0,a.kt)("p",null,"To interrupt a running query, use ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + C")," in CLI. Note: We currently don't support interrupting ",(0,a.kt)("inlineCode",{parentName:"p"},"COPY")," statement."),(0,a.kt)("h2",{id:"non-interactive-usage"},"Non-interactive usage"),(0,a.kt)("p",null,"To read and process a file in non-interactive mode, pipe the file content to the CLI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./kuzu testdb < tinysnb/schema.cypher\n---------------------------------------\n| outputMsg                           |\n---------------------------------------\n| NodeTable: person has been created. |\n")))}d.isMDXComponent=!0}}]);