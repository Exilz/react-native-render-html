(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9440],{9037:function(e,t,n){"use strict";n.d(t,{Zo:function(){return _e},kt:function(){return De}});var r=n(2784),a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function i(e){var t={exports:{}};return e(t,t.exports),t.exports}var o=function(e){return e&&e.Math==Math&&e},c=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof a&&a)||function(){return this}()||Function("return this")(),s=function(e){try{return!!e()}catch(e){return!0}},l=!s((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,f={f:p&&!u.call({1:2},1)?function(e){var t=p(this,e);return!!t&&t.enumerable}:u},m=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},d={}.toString,h="".split,g=s((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return d.call(e).slice(8,-1)}(e)?h.call(e,""):Object(e)}:Object,y=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},b=function(e){return g(y(e))},k=function(e){return"object"==typeof e?null!==e:"function"==typeof e},v=function(e,t){if(!k(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!k(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!k(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!k(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},S={}.hasOwnProperty,N=function(e,t){return S.call(e,t)},O=c.document,w=k(O)&&k(O.createElement),j=!l&&!s((function(){return 7!=Object.defineProperty(w?O.createElement("div"):{},"a",{get:function(){return 7}}).a})),E=Object.getOwnPropertyDescriptor,I={f:l?E:function(e,t){if(e=b(e),t=v(t,!0),j)try{return E(e,t)}catch(e){}if(N(e,t))return m(!f.f.call(e,t),e[t])}},M=function(e){if(!k(e))throw TypeError(String(e)+" is not an object");return e},P=Object.defineProperty,T={f:l?P:function(e,t,n){if(M(e),t=v(t,!0),M(n),j)try{return P(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},_=l?function(e,t,n){return T.f(e,t,m(1,n))}:function(e,t,n){return e[t]=n,e},x=function(e,t){try{_(c,e,t)}catch(i){c[e]=t}return t},C=c["__core-js_shared__"]||x("__core-js_shared__",{}),D=Function.toString;"function"!=typeof C.inspectSource&&(C.inspectSource=function(e){return D.call(e)});var G,L,F,B=C.inspectSource,H=c.WeakMap,z="function"==typeof H&&/native code/.test(B(H)),A=i((function(e){(e.exports=function(e,t){return C[e]||(C[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.0",mode:"global",copyright:"\xa9 2021 Denis Pushkarev (zloirock.ru)"})})),R=0,X=Math.random(),Z=A("keys"),q={};if(z){var U=C.state||(C.state=new(0,c.WeakMap)),V=U.get,W=U.has,$=U.set;G=function(e,t){return t.facade=e,$.call(U,e,t),t},L=function(e){return V.call(U,e)||{}},F=function(e){return W.call(U,e)}}else{var K=Z.state||(Z.state="Symbol("+String("state")+")_"+(++R+X).toString(36));q[K]=!0,G=function(e,t){return t.facade=e,_(e,K,t),t},L=function(e){return N(e,K)?e[K]:{}},F=function(e){return N(e,K)}}var Y={set:G,get:L,has:F,enforce:function(e){return F(e)?L(e):G(e,{})},getterFor:function(e){return function(t){var n;if(!k(t)||(n=L(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},J=i((function(e){var t=Y.get,n=Y.enforce,r=String(String).split("String");(e.exports=function(e,t,a,i){var o,s=!!i&&!!i.unsafe,l=!!i&&!!i.enumerable,u=!!i&&!!i.noTargetGet;"function"==typeof a&&("string"!=typeof t||N(a,"name")||_(a,"name",t),(o=n(a)).source||(o.source=r.join("string"==typeof t?t:""))),e!==c?(s?!u&&e[t]&&(l=!0):delete e[t],l?e[t]=a:_(e,t,a)):l?e[t]=a:x(t,a)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||B(this)}))})),Q=c,ee=function(e){return"function"==typeof e?e:void 0},te=Math.ceil,ne=Math.floor,re=function(e){return isNaN(e=+e)?0:(e>0?ne:te)(e)},ae=Math.min,ie=Math.max,oe=Math.min,ce=function(e){return function(t,n,r){var a,i,o=b(t),c=(a=o.length)>0?ae(re(a),9007199254740991):0,s=function(e,t){var n=re(e);return n<0?ie(n+t,0):oe(n,t)}(r,c);if(e&&n!=n){for(;c>s;)if((i=o[s++])!=i)return!0}else for(;c>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},se=(ce(!0),ce(!1)),le=function(e,t){var n,r=b(e),a=0,i=[];for(n in r)!N(q,n)&&N(r,n)&&i.push(n);for(;t.length>a;)N(r,n=t[a++])&&(~se(i,n)||i.push(n));return i},ue=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],pe=ue.concat("length","prototype"),fe={f:Object.getOwnPropertyNames||function(e){return le(e,pe)}},me={f:Object.getOwnPropertySymbols},de=function(e,t){return arguments.length<2?ee(Q[e])||ee(c[e]):Q[e]&&Q[e][t]||c[e]&&c[e][t]}("Reflect","ownKeys")||function(e){var t=fe.f(M(e)),n=me.f;return n?t.concat(n(e)):t},he=function(e,t){for(var n=de(t),r=T.f,a=I.f,i=0;i<n.length;i++){var o=n[i];N(e,o)||r(e,o,a(t,o))}},ge=/#|\.prototype\./,ye=function(e,t){var n=ke[be(e)];return n==Se||n!=ve&&("function"==typeof t?s(t):!!t)},be=ye.normalize=function(e){return String(e).replace(ge,".").toLowerCase()},ke=ye.data={},ve=ye.NATIVE="N",Se=ye.POLYFILL="P",Ne=ye,Oe=I.f,we=Object.keys||function(e){return le(e,ue)},je=function(e){return Object(y(e))},Ee=Object.assign,Ie=Object.defineProperty,Me=!Ee||s((function(){if(l&&1!==Ee({b:1},Ee(Ie({},"a",{enumerable:!0,get:function(){Ie(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=Ee({},e)[n]||we(Ee({},t)).join("")!=r}))?function(e,t){for(var n=je(e),r=arguments.length,a=1,i=me.f,o=f.f;r>a;)for(var c,s=g(arguments[a++]),u=i?we(s).concat(i(s)):we(s),p=u.length,m=0;p>m;)c=u[m++],l&&!o.call(s,c)||(n[c]=s[c]);return n}:Ee;!function(e,t){var n,r,a,i,o,s=e.target,l=e.global,u=e.stat;if(n=l?c:u?c[s]||x(s,{}):(c[s]||{}).prototype)for(r in t){if(i=t[r],a=e.noTargetGet?(o=Oe(n,r))&&o.value:n[r],!Ne(l?r:s+(u?".":"#")+r,e.forced)&&void 0!==a){if(typeof i==typeof a)continue;he(i,a)}(e.sham||a&&a.sham)&&_(i,"sham",!0),J(n,r,i,e)}}({target:"Object",stat:!0,forced:Object.assign!==Me},{assign:Me});const Pe=r.createContext({}),Te=e=>{const t=r.useContext(Pe);return"function"==typeof e?e(t):Object.assign({},t,e)},_e=({components:e,children:t,disableParentContext:n})=>{let a=Te(e);return n&&(a=e),r.createElement(Pe.Provider,{value:a},t)},xe={inlineCode:"code",wrapper:({children:e})=>r.createElement(r.Fragment,{},e)},Ce=r.forwardRef(((e,t)=>{const{components:n,mdxType:a,originalType:i,parentName:o}=e,c=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),s=Te(n);return r.createElement(s[`${o}.${a}`]||s[a]||xe[a]||i,n?Object.assign({ref:t},c,{components:n}):Object.assign({ref:t},c))}));function De(e,t){const n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){const i=n.length,o=new Array(i);o[0]=Ce;const c={};for(let e in t)hasOwnProperty.call(t,e)&&(c[e]=t[e]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(let e=2;e<i;e++)o[e]=n[e];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}Ce.displayName="MDXCreateElement",De.Fragment=r.Fragment},9892:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(7560),a=n(8283),i=(n(2784),n(9037)),o={id:"imgelementstatebase",title:"Interface: IMGElementStateBase",sidebar_label:"IMGElementStateBase",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/imgelementstatebase",id:"api/interfaces/imgelementstatebase",isDocsHomePage:!1,title:"Interface: IMGElementStateBase",description:"Hierarchy",source:"@site/docs/api/interfaces/imgelementstatebase.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/imgelementstatebase",permalink:"/react-native-render-html/docs/api/interfaces/imgelementstatebase",editUrl:null,version:"current",sidebar_label:"IMGElementStateBase",frontMatter:{id:"imgelementstatebase",title:"Interface: IMGElementStateBase",sidebar_label:"IMGElementStateBase",custom_edit_url:null,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Interface: IMGElementProps",permalink:"/react-native-render-html/docs/api/interfaces/imgelementprops"},next:{title:"Interface: IMGElementStateError",permalink:"/react-native-render-html/docs/api/interfaces/imgelementstateerror"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"alt",id:"alt",children:[]},{value:"altColor",id:"altcolor",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"dimensions",id:"dimensions",children:[]},{value:"source",id:"source",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"IMGElementStateBase")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/imgelementstatesuccess"},(0,i.kt)("em",{parentName:"a"},"IMGElementStateSuccess"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/imgelementstateloading"},(0,i.kt)("em",{parentName:"a"},"IMGElementStateLoading"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/imgelementstateerror"},(0,i.kt)("em",{parentName:"a"},"IMGElementStateError"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"alt"},"alt"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"alt"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/a1a993d/packages/render-html/src/elements/img-types.ts#L54"},"packages/render-html/src/elements/img-types.ts:54")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"altcolor"},"altColor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"altColor"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/a1a993d/packages/render-html/src/elements/img-types.ts#L55"},"packages/render-html/src/elements/img-types.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"containerstyle"},"containerStyle"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"containerStyle"),": ViewStyle"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/a1a993d/packages/render-html/src/elements/img-types.ts#L51"},"packages/render-html/src/elements/img-types.ts:51")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dimensions"},"dimensions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"dimensions"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/imagedimensions"},(0,i.kt)("em",{parentName:"a"},"ImageDimensions"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/a1a993d/packages/render-html/src/elements/img-types.ts#L52"},"packages/render-html/src/elements/img-types.ts:52")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"source"},"source"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"source"),": ImageURISource"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/a1a993d/packages/render-html/src/elements/img-types.ts#L53"},"packages/render-html/src/elements/img-types.ts:53")))}u.isMDXComponent=!0}}]);