(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6793],{9037:function(e,t,n){"use strict";n.d(t,{Zo:function(){return je},kt:function(){return xe}});var r=n(2784),a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function i(e){var t={exports:{}};return e(t,t.exports),t.exports}var o=function(e){return e&&e.Math==Math&&e},l=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof a&&a)||function(){return this}()||Function("return this")(),p=function(e){try{return!!e()}catch(e){return!0}},s=!p((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c={}.propertyIsEnumerable,d=Object.getOwnPropertyDescriptor,m={f:d&&!c.call({1:2},1)?function(e){var t=d(this,e);return!!t&&t.enumerable}:c},u=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},f={}.toString,h="".split,k=p((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return f.call(e).slice(8,-1)}(e)?h.call(e,""):Object(e)}:Object,g=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},N=function(e){return k(g(e))},b=function(e){return"object"==typeof e?null!==e:"function"==typeof e},y=function(e,t){if(!b(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!b(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!b(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!b(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},v={}.hasOwnProperty,T=function(e,t){return v.call(e,t)},E=l.document,D=b(E)&&b(E.createElement),w=!s&&!p((function(){return 7!=Object.defineProperty(D?E.createElement("div"):{},"a",{get:function(){return 7}}).a})),O=Object.getOwnPropertyDescriptor,M={f:s?O:function(e,t){if(e=N(e),t=y(t,!0),w)try{return O(e,t)}catch(e){}if(T(e,t))return u(!m.f.call(e,t),e[t])}},C=function(e){if(!b(e))throw TypeError(String(e)+" is not an object");return e},P=Object.defineProperty,R={f:s?P:function(e,t,n){if(C(e),t=y(t,!0),C(n),w)try{return P(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},j=s?function(e,t,n){return R.f(e,t,u(1,n))}:function(e,t,n){return e[t]=n,e},_=function(e,t){try{j(l,e,t)}catch(i){l[e]=t}return t},S=l["__core-js_shared__"]||_("__core-js_shared__",{}),x=Function.toString;"function"!=typeof S.inspectSource&&(S.inspectSource=function(e){return x.call(e)});var L,F,H,z=S.inspectSource,I=l.WeakMap,A="function"==typeof I&&/native code/.test(z(I)),X=i((function(e){(e.exports=function(e,t){return S[e]||(S[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.0",mode:"global",copyright:"\xa9 2021 Denis Pushkarev (zloirock.ru)"})})),Z=0,q=Math.random(),G=X("keys"),W={};if(A){var $=S.state||(S.state=new(0,l.WeakMap)),K=$.get,U=$.has,V=$.set;L=function(e,t){return t.facade=e,V.call($,e,t),t},F=function(e){return K.call($,e)||{}},H=function(e){return U.call($,e)}}else{var Y=G.state||(G.state="Symbol("+String("state")+")_"+(++Z+q).toString(36));W[Y]=!0,L=function(e,t){return t.facade=e,j(e,Y,t),t},F=function(e){return T(e,Y)?e[Y]:{}},H=function(e){return T(e,Y)}}var B={set:L,get:F,has:H,enforce:function(e){return H(e)?F(e):L(e,{})},getterFor:function(e){return function(t){var n;if(!b(t)||(n=F(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},J=i((function(e){var t=B.get,n=B.enforce,r=String(String).split("String");(e.exports=function(e,t,a,i){var o,p=!!i&&!!i.unsafe,s=!!i&&!!i.enumerable,c=!!i&&!!i.noTargetGet;"function"==typeof a&&("string"!=typeof t||T(a,"name")||j(a,"name",t),(o=n(a)).source||(o.source=r.join("string"==typeof t?t:""))),e!==l?(p?!c&&e[t]&&(s=!0):delete e[t],s?e[t]=a:j(e,t,a)):s?e[t]=a:_(t,a)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||z(this)}))})),Q=l,ee=function(e){return"function"==typeof e?e:void 0},te=Math.ceil,ne=Math.floor,re=function(e){return isNaN(e=+e)?0:(e>0?ne:te)(e)},ae=Math.min,ie=Math.max,oe=Math.min,le=function(e){return function(t,n,r){var a,i,o=N(t),l=(a=o.length)>0?ae(re(a),9007199254740991):0,p=function(e,t){var n=re(e);return n<0?ie(n+t,0):oe(n,t)}(r,l);if(e&&n!=n){for(;l>p;)if((i=o[p++])!=i)return!0}else for(;l>p;p++)if((e||p in o)&&o[p]===n)return e||p||0;return!e&&-1}},pe=(le(!0),le(!1)),se=function(e,t){var n,r=N(e),a=0,i=[];for(n in r)!T(W,n)&&T(r,n)&&i.push(n);for(;t.length>a;)T(r,n=t[a++])&&(~pe(i,n)||i.push(n));return i},ce=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],de=ce.concat("length","prototype"),me={f:Object.getOwnPropertyNames||function(e){return se(e,de)}},ue={f:Object.getOwnPropertySymbols},fe=function(e,t){return arguments.length<2?ee(Q[e])||ee(l[e]):Q[e]&&Q[e][t]||l[e]&&l[e][t]}("Reflect","ownKeys")||function(e){var t=me.f(C(e)),n=ue.f;return n?t.concat(n(e)):t},he=function(e,t){for(var n=fe(t),r=R.f,a=M.f,i=0;i<n.length;i++){var o=n[i];T(e,o)||r(e,o,a(t,o))}},ke=/#|\.prototype\./,ge=function(e,t){var n=be[Ne(e)];return n==ve||n!=ye&&("function"==typeof t?p(t):!!t)},Ne=ge.normalize=function(e){return String(e).replace(ke,".").toLowerCase()},be=ge.data={},ye=ge.NATIVE="N",ve=ge.POLYFILL="P",Te=ge,Ee=M.f,De=Object.keys||function(e){return se(e,ce)},we=function(e){return Object(g(e))},Oe=Object.assign,Me=Object.defineProperty,Ce=!Oe||p((function(){if(s&&1!==Oe({b:1},Oe(Me({},"a",{enumerable:!0,get:function(){Me(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=Oe({},e)[n]||De(Oe({},t)).join("")!=r}))?function(e,t){for(var n=we(e),r=arguments.length,a=1,i=ue.f,o=m.f;r>a;)for(var l,p=k(arguments[a++]),c=i?De(p).concat(i(p)):De(p),d=c.length,u=0;d>u;)l=c[u++],s&&!o.call(p,l)||(n[l]=p[l]);return n}:Oe;!function(e,t){var n,r,a,i,o,p=e.target,s=e.global,c=e.stat;if(n=s?l:c?l[p]||_(p,{}):(l[p]||{}).prototype)for(r in t){if(i=t[r],a=e.noTargetGet?(o=Ee(n,r))&&o.value:n[r],!Te(s?r:p+(c?".":"#")+r,e.forced)&&void 0!==a){if(typeof i==typeof a)continue;he(i,a)}(e.sham||a&&a.sham)&&j(i,"sham",!0),J(n,r,i,e)}}({target:"Object",stat:!0,forced:Object.assign!==Ce},{assign:Ce});const Pe=r.createContext({}),Re=e=>{const t=r.useContext(Pe);return"function"==typeof e?e(t):Object.assign({},t,e)},je=({components:e,children:t,disableParentContext:n})=>{let a=Re(e);return n&&(a=e),r.createElement(Pe.Provider,{value:a},t)},_e={inlineCode:"code",wrapper:({children:e})=>r.createElement(r.Fragment,{},e)},Se=r.forwardRef(((e,t)=>{const{components:n,mdxType:a,originalType:i,parentName:o}=e,l=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),p=Re(n);return r.createElement(p[`${o}.${a}`]||p[a]||_e[a]||i,n?Object.assign({ref:t},l,{components:n}):Object.assign({ref:t},l))}));function xe(e,t){const n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){const i=n.length,o=new Array(i);o[0]=Se;const l={};for(let e in t)hasOwnProperty.call(t,e)&&(l[e]=t[e]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(let e=2;e<i;e++)o[e]=n[e];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}Se.displayName="MDXCreateElement",xe.Fragment=r.Fragment},7897:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=n(7560),a=n(8283),i=(n(2784),n(9037)),o={id:"trenderengine",title:"Class: TRenderEngine",sidebar_label:"TRenderEngine",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/classes/trenderengine",id:"api/classes/trenderengine",isDocsHomePage:!1,title:"Class: TRenderEngine",description:"The Transient Render Engine.",source:"@site/docs/api/classes/trenderengine.md",sourceDirName:"api/classes",slug:"/api/classes/trenderengine",permalink:"/react-native-render-html/docs/api/classes/trenderengine",editUrl:null,version:"current",sidebar_label:"TRenderEngine",frontMatter:{id:"trenderengine",title:"Class: TRenderEngine",sidebar_label:"TRenderEngine",custom_edit_url:null,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Class: HTMLElementModel<T, M\\>",permalink:"/react-native-render-html/docs/api/classes/htmlelementmodel"},next:{title:"Enumeration: HTMLContentModel",permalink:"/react-native-render-html/docs/api/enums/htmlcontentmodel"}},p=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"dataFlowParams",id:"dataflowparams",children:[]},{value:"hoistingEnabled",id:"hoistingenabled",children:[]},{value:"htmlParserOptions",id:"htmlparseroptions",children:[]},{value:"normalizeDocument",id:"normalizedocument",children:[]},{value:"selectDomRoot",id:"selectdomroot",children:[]},{value:"whitespaceCollapsingEnabled",id:"whitespacecollapsingenabled",children:[]}]},{value:"Methods",id:"methods",children:[{value:"buildTTree",id:"buildttree",children:[]},{value:"buildTTreeFromDoc",id:"buildttreefromdoc",children:[]},{value:"getHTMLElementsModels",id:"gethtmlelementsmodels",children:[]},{value:"parseDocument",id:"parsedocument",children:[]}]}],s={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Transient Render Engine."),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new TRenderEngine"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/trenderengineoptions"},(0,i.kt)("em",{parentName:"a"},"TRenderEngineOptions")),"<never",">","): ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/trenderengine"},(0,i.kt)("em",{parentName:"a"},"TRenderEngine"))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/react-native-render-html/docs/api/interfaces/trenderengineoptions"},(0,i.kt)("em",{parentName:"a"},"TRenderEngineOptions")),"<never",">")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/trenderengine"},(0,i.kt)("em",{parentName:"a"},"TRenderEngine"))),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/TRenderEngine.d.ts:102"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"dataflowparams"},"dataFlowParams"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"dataFlowParams"),": ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/TRenderEngine.d.ts:99"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hoistingenabled"},"hoistingEnabled"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"hoistingEnabled"),": ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/TRenderEngine.d.ts:100"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"htmlparseroptions"},"htmlParserOptions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"htmlParserOptions"),": ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/TRenderEngine.d.ts:98"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"normalizedocument"},"normalizeDocument"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"normalizeDocument"),": ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/TRenderEngine.d.ts:104"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"selectdomroot"},"selectDomRoot"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"selectDomRoot"),": ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/TRenderEngine.d.ts:102"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"whitespacecollapsingenabled"},"whitespaceCollapsingEnabled"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"whitespaceCollapsingEnabled"),": ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/TRenderEngine.d.ts:101"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"buildttree"},"buildTTree"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"buildTTree"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"html"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/tdocument"},(0,i.kt)("em",{parentName:"a"},"TDocument"))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"html")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/tdocument"},(0,i.kt)("em",{parentName:"a"},"TDocument"))),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/TRenderEngine.d.ts:107"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"buildttreefromdoc"},"buildTTreeFromDoc"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"buildTTreeFromDoc"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"document"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domdocument"},(0,i.kt)("em",{parentName:"a"},"DOMDocument"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domelement"},(0,i.kt)("em",{parentName:"a"},"DOMElement")),"): ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/tdocument"},(0,i.kt)("em",{parentName:"a"},"TDocument"))),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"document")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/react-native-render-html/docs/api/classes/domdocument"},(0,i.kt)("em",{parentName:"a"},"DOMDocument"))," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/react-native-render-html/docs/api/classes/domelement"},(0,i.kt)("em",{parentName:"a"},"DOMElement")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/tdocument"},(0,i.kt)("em",{parentName:"a"},"TDocument"))),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/TRenderEngine.d.ts:106"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gethtmlelementsmodels"},"getHTMLElementsModels"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getHTMLElementsModels"),"(): ",(0,i.kt)("em",{parentName:"p"},"HTMLModelRecord"),"<string, ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/enums/htmlcontentmodel"},(0,i.kt)("em",{parentName:"a"},"HTMLContentModel")),">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"HTMLModelRecord"),"<string, ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/enums/htmlcontentmodel"},(0,i.kt)("em",{parentName:"a"},"HTMLContentModel")),">"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/TRenderEngine.d.ts:108"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"parsedocument"},"parseDocument"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"parseDocument"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"html"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domdocument"},(0,i.kt)("em",{parentName:"a"},"DOMDocument"))),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"html")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domdocument"},(0,i.kt)("em",{parentName:"a"},"DOMDocument"))),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/TRenderEngine.d.ts:105"))}c.isMDXComponent=!0}}]);