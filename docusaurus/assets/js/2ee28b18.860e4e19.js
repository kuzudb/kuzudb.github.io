"use strict";(self.webpackChunkkuzu_docs=self.webpackChunkkuzu_docs||[]).push([[9600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,y=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,s[1]=u;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Java",sidebar_position:7},s=void 0,u={unversionedId:"getting-started/java",id:"getting-started/java",title:"Java",description:"The K\xf9zu Java API is packaged and distributed as a jar file.",source:"@site/docs/getting-started/java.md",sourceDirName:"getting-started",slug:"/getting-started/java",permalink:"/docusaurus/getting-started/java",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Java",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Rust",permalink:"/docusaurus/getting-started/rust"},next:{title:"Operating System Compatibility",permalink:"/docusaurus/getting-started/os"}},i={},l=[],c={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The K\xf9zu Java API is packaged and distributed as a jar file.\nYou can manually download the latest version ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kuzudb/kuzu/releases/latest"},"here"),".\nAfter the jar file is downloaded and placed into the project directory, it can be referenced in classpath manually with the ",(0,a.kt)("inlineCode",{parentName:"p"},"-cp")," option."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Setup: In this example, we assume the jar file and the Java code reside in the following directory structure:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"|-- dataset\n|   |-- user.csv\n|   |-- city.csv\n|   |-- follows.csv\n|   |-- lives-in.csv\n|-- src/main\n|   |-- java/org/example/Main.java\n|   |-- resources/kuzu_java.jar\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Below is a Main example class demonstrating typical usage:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package org.example;\nimport com.kuzudb.*;\n\npublic class Main {\n\n    public static void main(String[] args) throws KuzuObjectRefDestroyedException {\n        String db_path = "./testdb";\n        KuzuDatabase db = new KuzuDatabase(db_path, 0);\n        KuzuConnection conn = new KuzuConnection(db);\n\n        // Create tables.\n        conn.query("CREATE NODE TABLE User(name STRING, age INT64, PRIMARY KEY (name))");\n        conn.query("CREATE NODE TABLE City(name STRING, population INT64, PRIMARY KEY (name))");\n        conn.query("CREATE REL TABLE Follows(FROM User TO User, since INT64)");\n        conn.query("CREATE REL TABLE LivesIn(FROM User TO City)");\n\n        // Load data.\n        KuzuQueryResult r1 = conn.query("COPY User FROM \'./dataset/user.csv\'");\n        System.out.println(r1.toString());\n\n        KuzuQueryResult r2 = conn.query("COPY City FROM \'./dataset/city.csv\'");\n        System.out.println(r2.toString());\n\n        KuzuQueryResult r3 = conn.query("COPY Follows FROM \'./dataset/follows.csv\'");\n        System.out.println(r3.toString());\n\n        KuzuQueryResult r4 = conn.query("COPY LivesIn FROM \'./dataset/lives-in.csv\'");\n        System.out.println(r4.toString());\n\n        // Execute a simple query.\n        KuzuQueryResult result =\n                conn.query("MATCH (a:User)-[f:Follows]->(b:User) RETURN a.name, f.since, b.name;");\n        System.out.println("Num tuples: " + result.getNumTuples());\n\n        while (result.hasNext()) {\n            KuzuFlatTuple row = result.getNext();\n            System.out.println("Row: " + row);\n            row.destroy();\n        }\n        result.destroy();\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To execute the example, navigate to the project root directory and run the following command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"java -cp '.:src/main/resources/kuzu_java.jar' src/main/java/org/example/Main.java\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For users who prefer Maven, our jar file can also be manually referenced from your Maven configuration:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.kuzudb</groupId>\n    <artifactId>kuzudb</artifactId>\n    <version>0.0.6</version>\n    <scope>system</scope>\n    <systemPath>${project.basedir}/src/main/resources/kuzu_java.jar</systemPath>\n</dependency>\n")),(0,a.kt)("p",null,"Please note that we will soon provide a more convenient Maven-based solution for installing our API directly from Maven Central."))}d.isMDXComponent=!0}}]);