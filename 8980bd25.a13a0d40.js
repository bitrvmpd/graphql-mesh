(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(291)),i={id:"as-sdk",title:"Mesh as SDK",sidebar_label:"Mesh as SDK"},s={unversionedId:"recipes/as-sdk",id:"recipes/as-sdk",isDocsHomePage:!1,title:"Mesh as SDK",description:"You can use GraphQL Mesh as a completely type-safe SDK in your existing TypeScript project.",source:"@site/docs/recipes/as-sdk.md",slug:"/recipes/as-sdk",permalink:"/docs/recipes/as-sdk",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/recipes/as-sdk.md",version:"current",sidebar_label:"Mesh as SDK",sidebar:"sidebar",previous:{title:"TypeScript Support",permalink:"/docs/recipes/typescript"},next:{title:"Mesh as Gateway",permalink:"/docs/recipes/as-gateway"}},c=[{value:"Generate an SDK without GraphQL Operations",id:"generate-an-sdk-without-graphql-operations",children:[]},{value:"Generate Advanced SDK with Custom GraphQL Operations",id:"generate-advanced-sdk-with-custom-graphql-operations",children:[]},{value:"Using the generated SDK in the code",id:"using-the-generated-sdk-in-the-code",children:[]}],p={rightToc:c};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can use GraphQL Mesh as a completely type-safe SDK in your existing TypeScript project."),Object(o.b)("p",null,"Instead of using GraphQL operations as string with ",Object(o.b)("inlineCode",{parentName:"p"},"execute")," - you can use GraphQL Mesh and generate a ready-to-use TypeScript SDK to fetch your data. It will make sure to have type-safety and auto-complete for variables and returned data."),Object(o.b)("h2",{id:"generate-an-sdk-without-graphql-operations"},"Generate an SDK without GraphQL Operations"),Object(o.b)("p",null,"GraphQL Mesh can generate needed GraphQL operations for you on build time. Let's see how it works;"),Object(o.b)("p",null,"Assume that you have the following GraphQL Schema;"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  getSomething(var: String): Something\n}\ntype Something {\n  fieldA: String\n  fieldB: Int\n  fieldC(someOtherVar: String): Foo\n}\ntype Foo {\n  id: ID!\n  bar: Bar\n}\ntype Bar {\n  id: ID!\n  baz: Baz\n}\ntype Baz {\n  id: ID!\n  qux: Qux\n}\ntype Qux {\n  id: ID!\n}\n")),Object(o.b)("p",null,"Run the following command to generate an SDK to the specified;"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"graphql-mesh generate-sdk --output ./src/generated/sdk.ts\n")),Object(o.b)("p",null,"GraphQL Mesh generates GraphQL operation on build time by a depth limit for each root field;"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query getSomethingQuery($var: String, $someOtherVar: String) {\n  getSomething(var: $var) {\n    fieldA\n    fieldB\n    fieldC(someOtherVar: $someOtherVar) {\n      id\n    }\n  }\n} \n")),Object(o.b)("p",null,"As you can see all the nested fields with their arguments (not only the root one but all the nested fields) are collected and added as variables and selection set in the generated operation.\nBut other nested fields of ",Object(o.b)("inlineCode",{parentName:"p"},"fieldC")," is not there because the depth limit is 2 by default. But we can increase and decrease this value by specifying it on the command line like below;"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"graphql-mesh generate-sdk --output ./src/generated/sdk.ts --depth 3\n")),Object(o.b)("p",null,"Now it becomes;"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query getSomethingQuery($var: String, $someOtherVar: String) {\n  getSomething(var: $var) {\n    fieldA\n    fieldB\n    fieldC(someOtherVar: $someOtherVar) {\n      id\n      bar {\n        id\n      }\n    }\n  }\n} \n")),Object(o.b)("p",null,"But if you have more advanced use cases, you can create your own GraphQL operations;"),Object(o.b)("h2",{id:"generate-advanced-sdk-with-custom-graphql-operations"},"Generate Advanced SDK with Custom GraphQL Operations"),Object(o.b)("p",null,"If you want to have more control on GraphQL operations, create your own GraphQL operations in a ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," file for your SDK, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query myQuery($someVar: String!) {\n  getSomething(var: $someVar) {\n    fieldA\n    fieldB\n  }\n}\n")),Object(o.b)("p",null,"In this case we only have ",Object(o.b)("inlineCode",{parentName:"p"},"fieldA")," and ",Object(o.b)("inlineCode",{parentName:"p"},"fieldB")," in our result so those are not added to the response object anymore."),Object(o.b)("p",null,"Now, use GraphQL Mesh CLI and point it to the list of your ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," files, and specify the output path for the TypeScript SDK:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'graphql-mesh generate-sdk --operations "./src/**/*.graphql" --output ./src/generated/sdk.ts\n')),Object(o.b)("h2",{id:"using-the-generated-sdk-in-the-code"},"Using the generated SDK in the code"),Object(o.b)("p",null,"Now, instead of using ",Object(o.b)("inlineCode",{parentName:"p"},"execute")," manually, you can use the generated ",Object(o.b)("inlineCode",{parentName:"p"},"getSdk")," method with your a GraphQL Mesh client, and use the functions that are generated based on your operations:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { getSdk } from './generated/sdk';\nimport { findAndParseConfig } from '@graphql-mesh/config';\nimport { getMesh } from '@graphql-mesh/runtime';\n\nasync function test() {\n  // Load mesh config and get the sdkClient from it\n  const meshConfig = await findAndParseConfig();\n  const { sdkRequester } = await getMesh(meshConfig);\n  // Get fully-typed SDK using the Mesh client and based on your GraphQL operations\n  const sdk = getSdk(sdkRequester);\n\n  // Execute `myQuery` and get a type-safe result\n  // Variables and result are typed: { getSomething: { fieldA: string, fieldB: number }, errors?: GraphQLError[] }\n  const { getSomething } = await sdk.myQuery({ someVar: 'foo' });\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can find an example for that ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/tree/master/examples/postgres-geodb#using-the-generated-sdk"}),"here"))),Object(o.b)("p",null,Object(o.b)("img",{alt:"GraphQL Mesh",src:n(359).default})))}l.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,b=d["".concat(i,".").concat(h)]||d[h]||u[h]||o;return n?a.a.createElement(b,s(s({ref:t},p),{},{components:n})):a.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},359:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/as-sdk-8985d1ad473c203fb07b20e6da4d0085.png"}}]);