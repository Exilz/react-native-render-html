(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[376],{9037:function(e,t,n){"use strict";n.d(t,{Zo:function(){return Pe},kt:function(){return De}});var r=n(2784),o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function i(e){var t={exports:{}};return e(t,t.exports),t.exports}var u=function(e){return e&&e.Math==Math&&e},l=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof o&&o)||function(){return this}()||Function("return this")(),a=function(e){try{return!!e()}catch(e){return!0}},c=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,p={f:s&&!f.call({1:2},1)?function(e){var t=s(this,e);return!!t&&t.enumerable}:f},d=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},m={}.toString,h="".split,b=a((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return m.call(e).slice(8,-1)}(e)?h.call(e,""):Object(e)}:Object,g=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},y=function(e){return b(g(e))},v=function(e){return"object"==typeof e?null!==e:"function"==typeof e},k=function(e,t){if(!v(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!v(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!v(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!v(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},T={}.hasOwnProperty,M=function(e,t){return T.call(e,t)},j=l.document,w=v(j)&&v(j.createElement),O=!c&&!a((function(){return 7!=Object.defineProperty(w?j.createElement("div"):{},"a",{get:function(){return 7}}).a})),x=Object.getOwnPropertyDescriptor,E={f:c?x:function(e,t){if(e=y(e),t=k(t,!0),O)try{return x(e,t)}catch(e){}if(M(e,t))return d(!p.f.call(e,t),e[t])}},_=function(e){if(!v(e))throw TypeError(String(e)+" is not an object");return e},C=Object.defineProperty,S={f:c?C:function(e,t,n){if(_(e),t=k(t,!0),_(n),O)try{return C(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},P=c?function(e,t,n){return S.f(e,t,d(1,n))}:function(e,t,n){return e[t]=n,e},L=function(e,t){try{P(l,e,t)}catch(i){l[e]=t}return t},N=l["__core-js_shared__"]||L("__core-js_shared__",{}),D=Function.toString;"function"!=typeof N.inspectSource&&(N.inspectSource=function(e){return D.call(e)});var H,F,I,z=N.inspectSource,A=l.WeakMap,R="function"==typeof A&&/native code/.test(z(A)),X=i((function(e){(e.exports=function(e,t){return N[e]||(N[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.0",mode:"global",copyright:"\xa9 2021 Denis Pushkarev (zloirock.ru)"})})),Z=0,q=Math.random(),B=X("keys"),G={};if(R){var W=N.state||(N.state=new(0,l.WeakMap)),$=W.get,K=W.has,U=W.set;H=function(e,t){return t.facade=e,U.call(W,e,t),t},F=function(e){return $.call(W,e)||{}},I=function(e){return K.call(W,e)}}else{var V=B.state||(B.state="Symbol("+String("state")+")_"+(++Z+q).toString(36));G[V]=!0,H=function(e,t){return t.facade=e,P(e,V,t),t},F=function(e){return M(e,V)?e[V]:{}},I=function(e){return M(e,V)}}var Y={set:H,get:F,has:I,enforce:function(e){return I(e)?F(e):H(e,{})},getterFor:function(e){return function(t){var n;if(!v(t)||(n=F(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},J=i((function(e){var t=Y.get,n=Y.enforce,r=String(String).split("String");(e.exports=function(e,t,o,i){var u,a=!!i&&!!i.unsafe,c=!!i&&!!i.enumerable,f=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||M(o,"name")||P(o,"name",t),(u=n(o)).source||(u.source=r.join("string"==typeof t?t:""))),e!==l?(a?!f&&e[t]&&(c=!0):delete e[t],c?e[t]=o:P(e,t,o)):c?e[t]=o:L(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||z(this)}))})),Q=l,ee=function(e){return"function"==typeof e?e:void 0},te=Math.ceil,ne=Math.floor,re=function(e){return isNaN(e=+e)?0:(e>0?ne:te)(e)},oe=Math.min,ie=Math.max,ue=Math.min,le=function(e){return function(t,n,r){var o,i,u=y(t),l=(o=u.length)>0?oe(re(o),9007199254740991):0,a=function(e,t){var n=re(e);return n<0?ie(n+t,0):ue(n,t)}(r,l);if(e&&n!=n){for(;l>a;)if((i=u[a++])!=i)return!0}else for(;l>a;a++)if((e||a in u)&&u[a]===n)return e||a||0;return!e&&-1}},ae=(le(!0),le(!1)),ce=function(e,t){var n,r=y(e),o=0,i=[];for(n in r)!M(G,n)&&M(r,n)&&i.push(n);for(;t.length>o;)M(r,n=t[o++])&&(~ae(i,n)||i.push(n));return i},fe=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],se=fe.concat("length","prototype"),pe={f:Object.getOwnPropertyNames||function(e){return ce(e,se)}},de={f:Object.getOwnPropertySymbols},me=function(e,t){return arguments.length<2?ee(Q[e])||ee(l[e]):Q[e]&&Q[e][t]||l[e]&&l[e][t]}("Reflect","ownKeys")||function(e){var t=pe.f(_(e)),n=de.f;return n?t.concat(n(e)):t},he=function(e,t){for(var n=me(t),r=S.f,o=E.f,i=0;i<n.length;i++){var u=n[i];M(e,u)||r(e,u,o(t,u))}},be=/#|\.prototype\./,ge=function(e,t){var n=ve[ye(e)];return n==Te||n!=ke&&("function"==typeof t?a(t):!!t)},ye=ge.normalize=function(e){return String(e).replace(be,".").toLowerCase()},ve=ge.data={},ke=ge.NATIVE="N",Te=ge.POLYFILL="P",Me=ge,je=E.f,we=Object.keys||function(e){return ce(e,fe)},Oe=function(e){return Object(g(e))},xe=Object.assign,Ee=Object.defineProperty,_e=!xe||a((function(){if(c&&1!==xe({b:1},xe(Ee({},"a",{enumerable:!0,get:function(){Ee(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=xe({},e)[n]||we(xe({},t)).join("")!=r}))?function(e,t){for(var n=Oe(e),r=arguments.length,o=1,i=de.f,u=p.f;r>o;)for(var l,a=b(arguments[o++]),f=i?we(a).concat(i(a)):we(a),s=f.length,d=0;s>d;)l=f[d++],c&&!u.call(a,l)||(n[l]=a[l]);return n}:xe;!function(e,t){var n,r,o,i,u,a=e.target,c=e.global,f=e.stat;if(n=c?l:f?l[a]||L(a,{}):(l[a]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(u=je(n,r))&&u.value:n[r],!Me(c?r:a+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;he(i,o)}(e.sham||o&&o.sham)&&P(i,"sham",!0),J(n,r,i,e)}}({target:"Object",stat:!0,forced:Object.assign!==_e},{assign:_e});const Ce=r.createContext({}),Se=e=>{const t=r.useContext(Ce);return"function"==typeof e?e(t):Object.assign({},t,e)},Pe=({components:e,children:t,disableParentContext:n})=>{let o=Se(e);return n&&(o=e),r.createElement(Ce.Provider,{value:o},t)},Le={inlineCode:"code",wrapper:({children:e})=>r.createElement(r.Fragment,{},e)},Ne=r.forwardRef(((e,t)=>{const{components:n,mdxType:o,originalType:i,parentName:u}=e,l=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}(e,["components","mdxType","originalType","parentName"]),a=Se(n);return r.createElement(a[`${u}.${o}`]||a[o]||Le[o]||i,n?Object.assign({ref:t},l,{components:n}):Object.assign({ref:t},l))}));function De(e,t){const n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){const i=n.length,u=new Array(i);u[0]=Ne;const l={};for(let e in t)hasOwnProperty.call(t,e)&&(l[e]=t[e]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(let e=2;e<i;e++)u[e]=n[e];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}Ne.displayName="MDXCreateElement",De.Fragment=r.Fragment},102:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return l},toc:function(){return a},default:function(){return f}});var r=n(7560),o=n(8283),i=(n(2784),n(9037)),u={id:"htmlcontentmodel",title:"Enumeration: HTMLContentModel",sidebar_label:"HTMLContentModel",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/enums/htmlcontentmodel",id:"api/enums/htmlcontentmodel",isDocsHomePage:!1,title:"Enumeration: HTMLContentModel",description:"Enumeration members",source:"@site/docs/api/enums/htmlcontentmodel.md",sourceDirName:"api/enums",slug:"/api/enums/htmlcontentmodel",permalink:"/react-native-render-html/docs/api/enums/htmlcontentmodel",editUrl:null,version:"current",sidebar_label:"HTMLContentModel",frontMatter:{id:"htmlcontentmodel",title:"Enumeration: HTMLContentModel",sidebar_label:"HTMLContentModel",custom_edit_url:null,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Class: TRenderEngine",permalink:"/react-native-render-html/docs/api/classes/trenderengine"},next:{title:"react-native-render-html",permalink:"/react-native-render-html/docs/api"}},a=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"block",id:"block",children:[]},{value:"mixed",id:"mixed",children:[]},{value:"none",id:"none",children:[]},{value:"textual",id:"textual",children:[]}]}],c={toc:a};function f(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration members"),(0,i.kt)("h3",{id:"block"},"block"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"block"),': = "block"'),(0,i.kt)("p",null,"Translatable to TBlock."),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/model/HTMLContentModel.d.ts:5"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mixed"},"mixed"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"mixed"),': = "mixed"'),(0,i.kt)("p",null,"Translatable to TBlock, TPhrasing and TText"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/model/HTMLContentModel.d.ts:13"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"none"},"none"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"none"),': = "none"'),(0,i.kt)("p",null,"Translatable to TEmpty"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/model/HTMLContentModel.d.ts:17"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"textual"},"textual"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"textual"),': = "textual"'),(0,i.kt)("p",null,"Translatable to TPhrasing and TText"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/model/HTMLContentModel.d.ts:9"))}f.isMDXComponent=!0}}]);