(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9577],{9037:function(e,t,r){"use strict";r.d(t,{Zo:function(){return Le},kt:function(){return Ce}});var n=r(2784),i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{};function o(e){var t={exports:{}};return e(t,t.exports),t.exports}var a=function(e){return e&&e.Math==Math&&e},c=a("object"==typeof globalThis&&globalThis)||a("object"==typeof window&&window)||a("object"==typeof self&&self)||a("object"==typeof i&&i)||function(){return this}()||Function("return this")(),u=function(e){try{return!!e()}catch(e){return!0}},s=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,p={f:f&&!l.call({1:2},1)?function(e){var t=f(this,e);return!!t&&t.enumerable}:l},d=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},h={}.toString,m="".split,g=u((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return h.call(e).slice(8,-1)}(e)?m.call(e,""):Object(e)}:Object,y=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},b=function(e){return g(y(e))},v=function(e){return"object"==typeof e?null!==e:"function"==typeof e},k=function(e,t){if(!v(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!v(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!v(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!v(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")},T={}.hasOwnProperty,w=function(e,t){return T.call(e,t)},O=c.document,j=v(O)&&v(O.createElement),S=!s&&!u((function(){return 7!=Object.defineProperty(j?O.createElement("div"):{},"a",{get:function(){return 7}}).a})),N=Object.getOwnPropertyDescriptor,M={f:s?N:function(e,t){if(e=b(e),t=k(t,!0),S)try{return N(e,t)}catch(e){}if(w(e,t))return d(!p.f.call(e,t),e[t])}},P=function(e){if(!v(e))throw TypeError(String(e)+" is not an object");return e},_=Object.defineProperty,E={f:s?_:function(e,t,r){if(P(e),t=k(t,!0),P(r),S)try{return _(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},L=s?function(e,t,r){return E.f(e,t,d(1,r))}:function(e,t,r){return e[t]=r,e},x=function(e,t){try{L(c,e,t)}catch(o){c[e]=t}return t},I=c["__core-js_shared__"]||x("__core-js_shared__",{}),C=Function.toString;"function"!=typeof I.inspectSource&&(I.inspectSource=function(e){return C.call(e)});var D,H,U,F=I.inspectSource,R=c.WeakMap,A="function"==typeof R&&/native code/.test(F(R)),q=o((function(e){(e.exports=function(e,t){return I[e]||(I[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.0",mode:"global",copyright:"\xa9 2021 Denis Pushkarev (zloirock.ru)"})})),z=0,G=Math.random(),X=q("keys"),Z={};if(A){var W=I.state||(I.state=new(0,c.WeakMap)),$=W.get,K=W.has,V=W.set;D=function(e,t){return t.facade=e,V.call(W,e,t),t},H=function(e){return $.call(W,e)||{}},U=function(e){return K.call(W,e)}}else{var Y=X.state||(X.state="Symbol("+String("state")+")_"+(++z+G).toString(36));Z[Y]=!0,D=function(e,t){return t.facade=e,L(e,Y,t),t},H=function(e){return w(e,Y)?e[Y]:{}},U=function(e){return w(e,Y)}}var B={set:D,get:H,has:U,enforce:function(e){return U(e)?H(e):D(e,{})},getterFor:function(e){return function(t){var r;if(!v(t)||(r=H(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}},J=o((function(e){var t=B.get,r=B.enforce,n=String(String).split("String");(e.exports=function(e,t,i,o){var a,u=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,l=!!o&&!!o.noTargetGet;"function"==typeof i&&("string"!=typeof t||w(i,"name")||L(i,"name",t),(a=r(i)).source||(a.source=n.join("string"==typeof t?t:""))),e!==c?(u?!l&&e[t]&&(s=!0):delete e[t],s?e[t]=i:L(e,t,i)):s?e[t]=i:x(t,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||F(this)}))})),Q=c,ee=function(e){return"function"==typeof e?e:void 0},te=Math.ceil,re=Math.floor,ne=function(e){return isNaN(e=+e)?0:(e>0?re:te)(e)},ie=Math.min,oe=Math.max,ae=Math.min,ce=function(e){return function(t,r,n){var i,o,a=b(t),c=(i=a.length)>0?ie(ne(i),9007199254740991):0,u=function(e,t){var r=ne(e);return r<0?oe(r+t,0):ae(r,t)}(n,c);if(e&&r!=r){for(;c>u;)if((o=a[u++])!=o)return!0}else for(;c>u;u++)if((e||u in a)&&a[u]===r)return e||u||0;return!e&&-1}},ue=(ce(!0),ce(!1)),se=function(e,t){var r,n=b(e),i=0,o=[];for(r in n)!w(Z,r)&&w(n,r)&&o.push(r);for(;t.length>i;)w(n,r=t[i++])&&(~ue(o,r)||o.push(r));return o},le=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],fe=le.concat("length","prototype"),pe={f:Object.getOwnPropertyNames||function(e){return se(e,fe)}},de={f:Object.getOwnPropertySymbols},he=function(e,t){return arguments.length<2?ee(Q[e])||ee(c[e]):Q[e]&&Q[e][t]||c[e]&&c[e][t]}("Reflect","ownKeys")||function(e){var t=pe.f(P(e)),r=de.f;return r?t.concat(r(e)):t},me=function(e,t){for(var r=he(t),n=E.f,i=M.f,o=0;o<r.length;o++){var a=r[o];w(e,a)||n(e,a,i(t,a))}},ge=/#|\.prototype\./,ye=function(e,t){var r=ve[be(e)];return r==Te||r!=ke&&("function"==typeof t?u(t):!!t)},be=ye.normalize=function(e){return String(e).replace(ge,".").toLowerCase()},ve=ye.data={},ke=ye.NATIVE="N",Te=ye.POLYFILL="P",we=ye,Oe=M.f,je=Object.keys||function(e){return se(e,le)},Se=function(e){return Object(y(e))},Ne=Object.assign,Me=Object.defineProperty,Pe=!Ne||u((function(){if(s&&1!==Ne({b:1},Ne(Me({},"a",{enumerable:!0,get:function(){Me(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach((function(e){t[e]=e})),7!=Ne({},e)[r]||je(Ne({},t)).join("")!=n}))?function(e,t){for(var r=Se(e),n=arguments.length,i=1,o=de.f,a=p.f;n>i;)for(var c,u=g(arguments[i++]),l=o?je(u).concat(o(u)):je(u),f=l.length,d=0;f>d;)c=l[d++],s&&!a.call(u,c)||(r[c]=u[c]);return r}:Ne;!function(e,t){var r,n,i,o,a,u=e.target,s=e.global,l=e.stat;if(r=s?c:l?c[u]||x(u,{}):(c[u]||{}).prototype)for(n in t){if(o=t[n],i=e.noTargetGet?(a=Oe(r,n))&&a.value:r[n],!we(s?n:u+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;me(o,i)}(e.sham||i&&i.sham)&&L(o,"sham",!0),J(r,n,o,e)}}({target:"Object",stat:!0,forced:Object.assign!==Pe},{assign:Pe});const _e=n.createContext({}),Ee=e=>{const t=n.useContext(_e);return"function"==typeof e?e(t):Object.assign({},t,e)},Le=({components:e,children:t,disableParentContext:r})=>{let i=Ee(e);return r&&(i=e),n.createElement(_e.Provider,{value:i},t)},xe={inlineCode:"code",wrapper:({children:e})=>n.createElement(n.Fragment,{},e)},Ie=n.forwardRef(((e,t)=>{const{components:r,mdxType:i,originalType:o,parentName:a}=e,c=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}(e,["components","mdxType","originalType","parentName"]),u=Ee(r);return n.createElement(u[`${a}.${i}`]||u[i]||xe[i]||o,r?Object.assign({ref:t},c,{components:r}):Object.assign({ref:t},c))}));function Ce(e,t){const r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){const o=r.length,a=new Array(o);a[0]=Ie;const c={};for(let e in t)hasOwnProperty.call(t,e)&&(c[e]=t[e]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(let e=2;e<o;e++)a[e]=r[e];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}Ie.displayName="MDXCreateElement",Ce.Fragment=n.Fragment},7478:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var n=r(7560),i=r(8283),o=(r(2784),r(9037)),a={id:"htmlsourceuri",title:"Interface: HTMLSourceUri",sidebar_label:"HTMLSourceUri",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/htmlsourceuri",id:"api/interfaces/htmlsourceuri",isDocsHomePage:!1,title:"Interface: HTMLSourceUri",description:"A source represented by a URI.",source:"@site/docs/api/interfaces/htmlsourceuri.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/htmlsourceuri",permalink:"/react-native-render-html/docs/api/interfaces/htmlsourceuri",editUrl:null,version:"current",sidebar_label:"HTMLSourceUri",frontMatter:{id:"htmlsourceuri",title:"Interface: HTMLSourceUri",sidebar_label:"HTMLSourceUri",custom_edit_url:null,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Interface: HTMLSourceInline",permalink:"/react-native-render-html/docs/api/interfaces/htmlsourceinline"},next:{title:"Interface: ImageDimensions",permalink:"/react-native-render-html/docs/api/interfaces/imagedimensions"}},u=[{value:"Properties",id:"properties",children:[{value:"body",id:"body",children:[]},{value:"headers",id:"headers",children:[]},{value:"method",id:"method",children:[]},{value:"uri",id:"uri",children:[]}]}],s={toc:u};function l(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A source represented by a URI."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"body"},"body"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"body"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"The HTTP body to send with the request. This must be a valid\nUTF-8 string, and will be sent exactly as specified, with no\nadditional encoding (e.g. URL-escaping or base64) applied."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/a1a993d/packages/render-html/src/shared-types.ts#L520"},"packages/render-html/src/shared-types.ts:520")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"headers"},"headers"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"headers"),": ",(0,o.kt)("em",{parentName:"p"},"Record"),"<string, string",">"),(0,o.kt)("p",null,"Additional HTTP headers to send with the request."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/a1a993d/packages/render-html/src/shared-types.ts#L514"},"packages/render-html/src/shared-types.ts:514")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"method"},"method"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"method"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"The HTTP Method to use. Defaults to GET if not specified."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/a1a993d/packages/render-html/src/shared-types.ts#L510"},"packages/render-html/src/shared-types.ts:510")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"uri"},"uri"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"uri"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"The URI to load in the ",(0,o.kt)("inlineCode",{parentName:"p"},"HTML")," component. Can be a local or remote file."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/a1a993d/packages/render-html/src/shared-types.ts#L506"},"packages/render-html/src/shared-types.ts:506")))}l.isMDXComponent=!0}}]);