(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[528],{9037:function(e,t,n){"use strict";n.d(t,{Zo:function(){return _e},kt:function(){return we}});var a=n(2784),r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function l(e){var t={exports:{}};return e(t,t.exports),t.exports}var i=function(e){return e&&e.Math==Math&&e},o=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof r&&r)||function(){return this}()||Function("return this")(),m=function(e){try{return!!e()}catch(e){return!0}},p=!m((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),d={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,u={f:s&&!d.call({1:2},1)?function(e){var t=s(this,e);return!!t&&t.enumerable}:d},c=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},k={}.toString,f="".split,N=m((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return k.call(e).slice(8,-1)}(e)?f.call(e,""):Object(e)}:Object,h=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},g=function(e){return N(h(e))},b=function(e){return"object"==typeof e?null!==e:"function"==typeof e},y=function(e,t){if(!b(e))return e;var n,a;if(t&&"function"==typeof(n=e.toString)&&!b(a=n.call(e)))return a;if("function"==typeof(n=e.valueOf)&&!b(a=n.call(e)))return a;if(!t&&"function"==typeof(n=e.toString)&&!b(a=n.call(e)))return a;throw TypeError("Can't convert object to primitive value")},M={}.hasOwnProperty,v=function(e,t){return M.call(e,t)},T=o.document,C=b(T)&&b(T.createElement),E=!p&&!m((function(){return 7!=Object.defineProperty(C?T.createElement("div"):{},"a",{get:function(){return 7}}).a})),x=Object.getOwnPropertyDescriptor,L={f:p?x:function(e,t){if(e=g(e),t=y(t,!0),E)try{return x(e,t)}catch(e){}if(v(e,t))return c(!u.f.call(e,t),e[t])}},P=function(e){if(!b(e))throw TypeError(String(e)+" is not an object");return e},H=Object.defineProperty,S={f:p?H:function(e,t,n){if(P(e),t=y(t,!0),P(n),E)try{return H(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},_=p?function(e,t,n){return S.f(e,t,c(1,n))}:function(e,t,n){return e[t]=n,e},O=function(e,t){try{_(o,e,t)}catch(l){o[e]=t}return t},j=o["__core-js_shared__"]||O("__core-js_shared__",{}),w=Function.toString;"function"!=typeof j.inspectSource&&(j.inspectSource=function(e){return w.call(e)});var D,A,F,R=j.inspectSource,I=o.WeakMap,U="function"==typeof I&&/native code/.test(R(I)),q=l((function(e){(e.exports=function(e,t){return j[e]||(j[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.0",mode:"global",copyright:"\xa9 2021 Denis Pushkarev (zloirock.ru)"})})),V=0,z=Math.random(),B=q("keys"),X={};if(U){var Z=j.state||(j.state=new(0,o.WeakMap)),G=Z.get,W=Z.has,$=Z.set;D=function(e,t){return t.facade=e,$.call(Z,e,t),t},A=function(e){return G.call(Z,e)||{}},F=function(e){return W.call(Z,e)}}else{var K=B.state||(B.state="Symbol("+String("state")+")_"+(++V+z).toString(36));X[K]=!0,D=function(e,t){return t.facade=e,_(e,K,t),t},A=function(e){return v(e,K)?e[K]:{}},F=function(e){return v(e,K)}}var Y={set:D,get:A,has:F,enforce:function(e){return F(e)?A(e):D(e,{})},getterFor:function(e){return function(t){var n;if(!b(t)||(n=A(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},J=l((function(e){var t=Y.get,n=Y.enforce,a=String(String).split("String");(e.exports=function(e,t,r,l){var i,m=!!l&&!!l.unsafe,p=!!l&&!!l.enumerable,d=!!l&&!!l.noTargetGet;"function"==typeof r&&("string"!=typeof t||v(r,"name")||_(r,"name",t),(i=n(r)).source||(i.source=a.join("string"==typeof t?t:""))),e!==o?(m?!d&&e[t]&&(p=!0):delete e[t],p?e[t]=r:_(e,t,r)):p?e[t]=r:O(t,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||R(this)}))})),Q=o,ee=function(e){return"function"==typeof e?e:void 0},te=Math.ceil,ne=Math.floor,ae=function(e){return isNaN(e=+e)?0:(e>0?ne:te)(e)},re=Math.min,le=Math.max,ie=Math.min,oe=function(e){return function(t,n,a){var r,l,i=g(t),o=(r=i.length)>0?re(ae(r),9007199254740991):0,m=function(e,t){var n=ae(e);return n<0?le(n+t,0):ie(n,t)}(a,o);if(e&&n!=n){for(;o>m;)if((l=i[m++])!=l)return!0}else for(;o>m;m++)if((e||m in i)&&i[m]===n)return e||m||0;return!e&&-1}},me=(oe(!0),oe(!1)),pe=function(e,t){var n,a=g(e),r=0,l=[];for(n in a)!v(X,n)&&v(a,n)&&l.push(n);for(;t.length>r;)v(a,n=t[r++])&&(~me(l,n)||l.push(n));return l},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],se=de.concat("length","prototype"),ue={f:Object.getOwnPropertyNames||function(e){return pe(e,se)}},ce={f:Object.getOwnPropertySymbols},ke=function(e,t){return arguments.length<2?ee(Q[e])||ee(o[e]):Q[e]&&Q[e][t]||o[e]&&o[e][t]}("Reflect","ownKeys")||function(e){var t=ue.f(P(e)),n=ce.f;return n?t.concat(n(e)):t},fe=function(e,t){for(var n=ke(t),a=S.f,r=L.f,l=0;l<n.length;l++){var i=n[l];v(e,i)||a(e,i,r(t,i))}},Ne=/#|\.prototype\./,he=function(e,t){var n=be[ge(e)];return n==Me||n!=ye&&("function"==typeof t?m(t):!!t)},ge=he.normalize=function(e){return String(e).replace(Ne,".").toLowerCase()},be=he.data={},ye=he.NATIVE="N",Me=he.POLYFILL="P",ve=he,Te=L.f,Ce=Object.keys||function(e){return pe(e,de)},Ee=function(e){return Object(h(e))},xe=Object.assign,Le=Object.defineProperty,Pe=!xe||m((function(){if(p&&1!==xe({b:1},xe(Le({},"a",{enumerable:!0,get:function(){Le(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach((function(e){t[e]=e})),7!=xe({},e)[n]||Ce(xe({},t)).join("")!=a}))?function(e,t){for(var n=Ee(e),a=arguments.length,r=1,l=ce.f,i=u.f;a>r;)for(var o,m=N(arguments[r++]),d=l?Ce(m).concat(l(m)):Ce(m),s=d.length,c=0;s>c;)o=d[c++],p&&!i.call(m,o)||(n[o]=m[o]);return n}:xe;!function(e,t){var n,a,r,l,i,m=e.target,p=e.global,d=e.stat;if(n=p?o:d?o[m]||O(m,{}):(o[m]||{}).prototype)for(a in t){if(l=t[a],r=e.noTargetGet?(i=Te(n,a))&&i.value:n[a],!ve(p?a:m+(d?".":"#")+a,e.forced)&&void 0!==r){if(typeof l==typeof r)continue;fe(l,r)}(e.sham||r&&r.sham)&&_(l,"sham",!0),J(n,a,l,e)}}({target:"Object",stat:!0,forced:Object.assign!==Pe},{assign:Pe});const He=a.createContext({}),Se=e=>{const t=a.useContext(He);return"function"==typeof e?e(t):Object.assign({},t,e)},_e=({components:e,children:t,disableParentContext:n})=>{let r=Se(e);return n&&(r=e),a.createElement(He.Provider,{value:r},t)},Oe={inlineCode:"code",wrapper:({children:e})=>a.createElement(a.Fragment,{},e)},je=a.forwardRef(((e,t)=>{const{components:n,mdxType:r,originalType:l,parentName:i}=e,o=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t.indexOf(n=l[a])>=0||(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),m=Se(n);return a.createElement(m[`${i}.${r}`]||m[r]||Oe[r]||l,n?Object.assign({ref:t},o,{components:n}):Object.assign({ref:t},o))}));function we(e,t){const n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){const l=n.length,i=new Array(l);i[0]=je;const o={};for(let e in t)hasOwnProperty.call(t,e)&&(o[e]=t[e]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(let e=2;e<l;e++)i[e]=n[e];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}je.displayName="MDXCreateElement",we.Fragment=a.Fragment},293:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return m},default:function(){return d}});var a=n(7560),r=n(8283),l=(n(2784),n(9037)),i={id:"htmlelementmodel",title:"Class: HTMLElementModel<T, M>",sidebar_label:"HTMLElementModel",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/classes/htmlelementmodel",id:"api/classes/htmlelementmodel",isDocsHomePage:!1,title:"Class: HTMLElementModel<T, M\\>",description:"An object defining engine internals for tags, such as default styles",source:"@site/docs/api/classes/htmlelementmodel.md",sourceDirName:"api/classes",slug:"/api/classes/htmlelementmodel",permalink:"/react-native-render-html/docs/api/classes/htmlelementmodel",editUrl:null,version:"current",sidebar_label:"HTMLElementModel",frontMatter:{id:"htmlelementmodel",title:"Class: HTMLElementModel<T, M>",sidebar_label:"HTMLElementModel",custom_edit_url:null,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Class: DOMText",permalink:"/react-native-render-html/docs/api/classes/domtext"},next:{title:"Class: TRenderEngine",permalink:"/react-native-render-html/docs/api/classes/trenderengine"}},m=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"contentModel",id:"contentmodel",children:[]},{value:"getUADerivedStyleFromAttributes",id:"getuaderivedstylefromattributes",children:[]},{value:"isOpaque",id:"isopaque",children:[]},{value:"isVoid",id:"isvoid",children:[]},{value:"mixedUAStyles",id:"mixeduastyles",children:[]},{value:"setMarkersForTNode",id:"setmarkersfortnode",children:[]},{value:"tagName",id:"tagname",children:[]}]},{value:"Methods",id:"methods",children:[{value:"extend",id:"extend",children:[]},{value:"getUADerivedCSSProcessedPropsFromAttributes",id:"getuaderivedcssprocessedpropsfromattributes",children:[]},{value:"isTranslatableBlock",id:"istranslatableblock",children:[]},{value:"isTranslatableTextual",id:"istranslatabletextual",children:[]},{value:"fromCustomModel",id:"fromcustommodel",children:[]},{value:"fromNativeModel",id:"fromnativemodel",children:[]}]}],p={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"An object defining engine internals for tags, such as default styles\n(UAStyles), content model (how this tag is treated during hoisting)... etc."),(0,l.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"T")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"M")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/react-native-render-html/docs/api/enums/htmlcontentmodel"},(0,l.kt)("em",{parentName:"a"},"HTMLContentModel")))))),(0,l.kt)("h2",{id:"implements"},"Implements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"HTMLElementModelProperties"),"<T, M",">")),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("p",null,"+"," ",(0,l.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,l.kt)("strong",{parentName:"p"},"new HTMLElementModel"),"<T, M",">","(): ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/htmlelementmodel"},(0,l.kt)("em",{parentName:"a"},"HTMLElementModel")),"<T, M",">"),(0,l.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"T")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"M")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/react-native-render-html/docs/api/enums/htmlcontentmodel"},(0,l.kt)("em",{parentName:"a"},"HTMLContentModel")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/htmlelementmodel"},(0,l.kt)("em",{parentName:"a"},"HTMLElementModel")),"<T, M",">"),(0,l.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/model/HTMLElementModel.d.ts:20"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"contentmodel"},"contentModel"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"contentModel"),": M"),(0,l.kt)("p",null,"Implementation of: HTMLElementModelProperties.contentModel"),(0,l.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/model/HTMLElementModel.d.ts:15"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getuaderivedstylefromattributes"},"getUADerivedStyleFromAttributes"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"getUADerivedStyleFromAttributes"),": ",(0,l.kt)("em",{parentName:"p"},"undefined")," ","|"," (",(0,l.kt)("inlineCode",{parentName:"p"},"attributes"),": ",(0,l.kt)("em",{parentName:"p"},"Record"),"<string, string",">",", ",(0,l.kt)("inlineCode",{parentName:"p"},"markers"),": Markers) => ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api#mixedstyledeclaration"},(0,l.kt)("em",{parentName:"a"},"MixedStyleDeclaration"))),(0,l.kt)("p",null,"Implementation of: HTMLElementModelProperties.getUADerivedStyleFromAttributes"),(0,l.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/model/HTMLElementModel.d.ts:19"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"isopaque"},"isOpaque"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"isOpaque"),": ",(0,l.kt)("em",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Implementation of: HTMLElementModelProperties.isOpaque"),(0,l.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/model/HTMLElementModel.d.ts:16"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"isvoid"},"isVoid"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"isVoid"),": ",(0,l.kt)("em",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Implementation of: HTMLElementModelProperties.isVoid"),(0,l.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/model/HTMLElementModel.d.ts:17"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"mixeduastyles"},"mixedUAStyles"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"mixedUAStyles"),": ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api#mixedstyledeclaration"},(0,l.kt)("em",{parentName:"a"},"MixedStyleDeclaration"))),(0,l.kt)("p",null,"Implementation of: HTMLElementModelProperties.mixedUAStyles"),(0,l.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/model/HTMLElementModel.d.ts:18"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"setmarkersfortnode"},"setMarkersForTNode"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"setMarkersForTNode"),": SetMarkersForTNode"),(0,l.kt)("p",null,"Implementation of: HTMLElementModelProperties.setMarkersForTNode"),(0,l.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/model/HTMLElementModel.d.ts:20"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tagname"},"tagName"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"tagName"),": T"),(0,l.kt)("p",null,"Implementation of: HTMLElementModelProperties.tagName"),(0,l.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/model/HTMLElementModel.d.ts:14"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"extend"},"extend"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"extend"),"<CM",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"props"),": ",(0,l.kt)("em",{parentName:"p"},"Partial"),"<HTMLElementModelProperties<T, CM",">",">","): ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/htmlelementmodel"},(0,l.kt)("em",{parentName:"a"},"HTMLElementModel")),"<T, CM",">"),(0,l.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"CM")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/react-native-render-html/docs/api/enums/htmlcontentmodel"},(0,l.kt)("em",{parentName:"a"},"HTMLContentModel")))))),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"props")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"Partial"),"<HTMLElementModelProperties<T, CM",">",">")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/htmlelementmodel"},(0,l.kt)("em",{parentName:"a"},"HTMLElementModel")),"<T, CM",">"),(0,l.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/model/HTMLElementModel.d.ts:26"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getuaderivedcssprocessedpropsfromattributes"},"getUADerivedCSSProcessedPropsFromAttributes"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"getUADerivedCSSProcessedPropsFromAttributes"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"attributes"),": ",(0,l.kt)("em",{parentName:"p"},"Record"),"<string, string",">",", ",(0,l.kt)("inlineCode",{parentName:"p"},"markers"),": Markers): ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api#mixedstyledeclaration"},(0,l.kt)("em",{parentName:"a"},"MixedStyleDeclaration"))),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"attributes")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"Record"),"<string, string",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"markers")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Markers")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api#mixedstyledeclaration"},(0,l.kt)("em",{parentName:"a"},"MixedStyleDeclaration"))),(0,l.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/model/HTMLElementModel.d.ts:27"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"istranslatableblock"},"isTranslatableBlock"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"isTranslatableBlock"),"(): ",(0,l.kt)("em",{parentName:"p"},"boolean")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/model/HTMLElementModel.d.ts:24"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"istranslatabletextual"},"isTranslatableTextual"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"isTranslatableTextual"),"(): ",(0,l.kt)("em",{parentName:"p"},"boolean")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/model/HTMLElementModel.d.ts:25"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"fromcustommodel"},"fromCustomModel"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,l.kt)("strong",{parentName:"p"},"fromCustomModel"),"<CustomTags, ContentModel",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"__namedParameters"),": ",(0,l.kt)("em",{parentName:"p"},"CustomElementModel"),"<Exclude<CustomTags, ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api#tagname"},(0,l.kt)("em",{parentName:"a"},"TagName")),">",", ContentModel",">","): ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/htmlelementmodel"},(0,l.kt)("em",{parentName:"a"},"HTMLElementModel")),"<Exclude<CustomTags, ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api#tagname"},(0,l.kt)("em",{parentName:"a"},"TagName")),">",", ContentModel",">"),(0,l.kt)("h4",{id:"type-parameters-3"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"CustomTags")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ContentModel")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/react-native-render-html/docs/api/enums/htmlcontentmodel"},(0,l.kt)("em",{parentName:"a"},"HTMLContentModel")))))),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"CustomElementModel"),"<Exclude<CustomTags, ",(0,l.kt)("a",{parentName:"td",href:"/react-native-render-html/docs/api#tagname"},(0,l.kt)("em",{parentName:"a"},"TagName")),">",", ContentModel",">")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/htmlelementmodel"},(0,l.kt)("em",{parentName:"a"},"HTMLElementModel")),"<Exclude<CustomTags, ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api#tagname"},(0,l.kt)("em",{parentName:"a"},"TagName")),">",", ContentModel",">"),(0,l.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/model/HTMLElementModel.d.ts:22"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"fromnativemodel"},"fromNativeModel"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,l.kt)("strong",{parentName:"p"},"fromNativeModel"),"<TN, E",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"__namedParameters"),": ",(0,l.kt)("em",{parentName:"p"},"NativeElementModel"),"<TN, E",">","): ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/htmlelementmodel"},(0,l.kt)("em",{parentName:"a"},"HTMLElementModel")),"<TN, E ",(0,l.kt)("em",{parentName:"p"},"extends")," ",(0,l.kt)("inlineCode",{parentName:"p"},'"anchor"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},'"edits"')," ? ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/enums/htmlcontentmodel#mixed"},(0,l.kt)("em",{parentName:"a"},"mixed"))," : E ",(0,l.kt)("em",{parentName:"p"},"extends")," ",(0,l.kt)("inlineCode",{parentName:"p"},'"tabular"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},'"sectioning"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},'"grouping"')," ? ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/enums/htmlcontentmodel#block"},(0,l.kt)("em",{parentName:"a"},"block"))," : E ",(0,l.kt)("em",{parentName:"p"},"extends")," ",(0,l.kt)("inlineCode",{parentName:"p"},'"textual"')," ? ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/enums/htmlcontentmodel#textual"},(0,l.kt)("em",{parentName:"a"},"textual"))," : ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/enums/htmlcontentmodel#none"},(0,l.kt)("em",{parentName:"a"},"none")),">"),(0,l.kt)("h4",{id:"type-parameters-4"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TN")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/react-native-render-html/docs/api#tagname"},(0,l.kt)("em",{parentName:"a"},"TagName")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"E")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ElementCategory")))),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"NativeElementModel"),"<TN, E",">")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/htmlelementmodel"},(0,l.kt)("em",{parentName:"a"},"HTMLElementModel")),"<TN, E ",(0,l.kt)("em",{parentName:"p"},"extends")," ",(0,l.kt)("inlineCode",{parentName:"p"},'"anchor"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},'"edits"')," ? ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/enums/htmlcontentmodel#mixed"},(0,l.kt)("em",{parentName:"a"},"mixed"))," : E ",(0,l.kt)("em",{parentName:"p"},"extends")," ",(0,l.kt)("inlineCode",{parentName:"p"},'"tabular"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},'"sectioning"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},'"grouping"')," ? ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/enums/htmlcontentmodel#block"},(0,l.kt)("em",{parentName:"a"},"block"))," : E ",(0,l.kt)("em",{parentName:"p"},"extends")," ",(0,l.kt)("inlineCode",{parentName:"p"},'"textual"')," ? ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/enums/htmlcontentmodel#textual"},(0,l.kt)("em",{parentName:"a"},"textual"))," : ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/enums/htmlcontentmodel#none"},(0,l.kt)("em",{parentName:"a"},"none")),">"),(0,l.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/model/HTMLElementModel.d.ts:23"))}d.isMDXComponent=!0}}]);