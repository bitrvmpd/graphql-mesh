(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(292)),o={id:"neo4j",title:"Neo4j",sidebar_label:"Neo4j"},l={unversionedId:"handlers/neo4j",id:"handlers/neo4j",isDocsHomePage:!1,title:"Neo4j",description:"image",source:"@site/docs/handlers/neo4j.md",slug:"/handlers/neo4j",permalink:"/docs/handlers/neo4j",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/handlers/neo4j.md",version:"current",sidebar_label:"Neo4j",sidebar:"sidebar",previous:{title:"MySQL",permalink:"/docs/handlers/mysql"},next:{title:"Rename Transform",permalink:"/docs/transforms/rename"}},c=[{value:"Config API Reference",id:"config-api-reference",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/20847995/79219440-f1605480-7e5a-11ea-980e-6ba54ee1450e.png",alt:"image"}))),Object(i.b)("p",null,"This handler allows you to use GraphQL schema created by ",Object(i.b)("inlineCode",{parentName:"p"},"neo4j-graphql-js"),"."),Object(i.b)("p",null,"To get started, install the handler library from NPM:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn add @graphql-mesh/neo4j\n")),Object(i.b)("p",null,"Now, you can use it directly in your Mesh config file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"sources:\n  - name: Neo4j\n    handler:\n      neo4j:\n        url: neo4j://localhost\n        username: neo4j\n        password: MY_PASSWORD\n\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can check out our example that uses Neo4j handler.\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/tree/master/examples/neo4j-example"}),"Click here to open the example on GitHub"))),Object(i.b)("h2",{id:"config-api-reference"},"Config API Reference"),Object(i.b)("p",null,Object(i.b)("ul",{parentName:"p"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"url")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required) - URL for the Neo4j Instance e.g. neo4j://localhost"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"username")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required) - Username for basic authentication"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"password")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required) - Password for basic authentication"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"alwaysIncludeRelationships")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Boolean"),") - Specifies whether relationships should always be included in the type definitions as ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://grandstack.io/docs/neo4j-graphql-js.html#relationship-types"}),"relationship")," types, even if the relationships do not have properties."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"database")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),") - Specifies database name"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"typeDefs")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),") - Provide GraphQL Type Definitions instead of inferring"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cacheIntrospection")," -  - Cache Introspection One of: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"object"),": ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ttl")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Int"),") - Time to live of introspection cache"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Boolean")))))))}b.isMDXComponent=!0},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);