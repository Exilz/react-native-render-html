(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7414],{9037:function(t,e,n){"use strict";n.d(e,{Zo:function(){return _t},kt:function(){return Dt}});var r=n(2784),o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function i(t){var e={exports:{}};return t(e,e.exports),e.exports}var c=function(t){return t&&t.Math==Math&&t},u=c("object"==typeof globalThis&&globalThis)||c("object"==typeof window&&window)||c("object"==typeof self&&self)||c("object"==typeof o&&o)||function(){return this}()||Function("return this")(),a=function(t){try{return!!t()}catch(t){return!0}},f=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,p={f:s&&!l.call({1:2},1)?function(t){var e=s(this,t);return!!e&&e.enumerable}:l},y=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},g={}.toString,m="".split,d=a((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==function(t){return g.call(t).slice(8,-1)}(t)?m.call(t,""):Object(t)}:Object,h=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},b=function(t){return d(h(t))},v=function(t){return"object"==typeof t?null!==t:"function"==typeof t},w=function(t,e){if(!v(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!v(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!v(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!v(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},j={}.hasOwnProperty,O=function(t,e){return j.call(t,e)},k=u.document,S=v(k)&&v(k.createElement),T=!f&&!a((function(){return 7!=Object.defineProperty(S?k.createElement("div"):{},"a",{get:function(){return 7}}).a})),x=Object.getOwnPropertyDescriptor,E={f:f?x:function(t,e){if(t=b(t),e=w(e,!0),T)try{return x(t,e)}catch(t){}if(O(t,e))return y(!p.f.call(t,e),t[e])}},P=function(t){if(!v(t))throw TypeError(String(t)+" is not an object");return t},M=Object.defineProperty,C={f:f?M:function(t,e,n){if(P(t),e=w(e,!0),P(n),T)try{return M(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},_=f?function(t,e,n){return C.f(t,e,y(1,n))}:function(t,e,n){return t[e]=n,t},F=function(t,e){try{_(u,t,e)}catch(i){u[t]=e}return e},N=u["__core-js_shared__"]||F("__core-js_shared__",{}),D=Function.toString;"function"!=typeof N.inspectSource&&(N.inspectSource=function(t){return D.call(t)});var I,L,z,A=N.inspectSource,R=u.WeakMap,X="function"==typeof R&&/native code/.test(A(R)),Z=i((function(t){(t.exports=function(t,e){return N[t]||(N[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.9.0",mode:"global",copyright:"\xa9 2021 Denis Pushkarev (zloirock.ru)"})})),q=0,G=Math.random(),W=Z("keys"),Y={};if(X){var $=N.state||(N.state=new(0,u.WeakMap)),K=$.get,V=$.has,B=$.set;I=function(t,e){return e.facade=t,B.call($,t,e),e},L=function(t){return K.call($,t)||{}},z=function(t){return V.call($,t)}}else{var H=W.state||(W.state="Symbol("+String("state")+")_"+(++q+G).toString(36));Y[H]=!0,I=function(t,e){return e.facade=t,_(t,H,e),e},L=function(t){return O(t,H)?t[H]:{}},z=function(t){return O(t,H)}}var J={set:I,get:L,has:z,enforce:function(t){return z(t)?L(t):I(t,{})},getterFor:function(t){return function(e){var n;if(!v(e)||(n=L(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},Q=i((function(t){var e=J.get,n=J.enforce,r=String(String).split("String");(t.exports=function(t,e,o,i){var c,a=!!i&&!!i.unsafe,f=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof e||O(o,"name")||_(o,"name",e),(c=n(o)).source||(c.source=r.join("string"==typeof e?e:""))),t!==u?(a?!l&&t[e]&&(f=!0):delete t[e],f?t[e]=o:_(t,e,o)):f?t[e]=o:F(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||A(this)}))})),U=u,tt=function(t){return"function"==typeof t?t:void 0},et=Math.ceil,nt=Math.floor,rt=function(t){return isNaN(t=+t)?0:(t>0?nt:et)(t)},ot=Math.min,it=Math.max,ct=Math.min,ut=function(t){return function(e,n,r){var o,i,c=b(e),u=(o=c.length)>0?ot(rt(o),9007199254740991):0,a=function(t,e){var n=rt(t);return n<0?it(n+e,0):ct(n,e)}(r,u);if(t&&n!=n){for(;u>a;)if((i=c[a++])!=i)return!0}else for(;u>a;a++)if((t||a in c)&&c[a]===n)return t||a||0;return!t&&-1}},at=(ut(!0),ut(!1)),ft=function(t,e){var n,r=b(t),o=0,i=[];for(n in r)!O(Y,n)&&O(r,n)&&i.push(n);for(;e.length>o;)O(r,n=e[o++])&&(~at(i,n)||i.push(n));return i},lt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],st=lt.concat("length","prototype"),pt={f:Object.getOwnPropertyNames||function(t){return ft(t,st)}},yt={f:Object.getOwnPropertySymbols},gt=function(t,e){return arguments.length<2?tt(U[t])||tt(u[t]):U[t]&&U[t][e]||u[t]&&u[t][e]}("Reflect","ownKeys")||function(t){var e=pt.f(P(t)),n=yt.f;return n?e.concat(n(t)):e},mt=function(t,e){for(var n=gt(e),r=C.f,o=E.f,i=0;i<n.length;i++){var c=n[i];O(t,c)||r(t,c,o(e,c))}},dt=/#|\.prototype\./,ht=function(t,e){var n=vt[bt(t)];return n==jt||n!=wt&&("function"==typeof e?a(e):!!e)},bt=ht.normalize=function(t){return String(t).replace(dt,".").toLowerCase()},vt=ht.data={},wt=ht.NATIVE="N",jt=ht.POLYFILL="P",Ot=ht,kt=E.f,St=Object.keys||function(t){return ft(t,lt)},Tt=function(t){return Object(h(t))},xt=Object.assign,Et=Object.defineProperty,Pt=!xt||a((function(){if(f&&1!==xt({b:1},xt(Et({},"a",{enumerable:!0,get:function(){Et(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=xt({},t)[n]||St(xt({},e)).join("")!=r}))?function(t,e){for(var n=Tt(t),r=arguments.length,o=1,i=yt.f,c=p.f;r>o;)for(var u,a=d(arguments[o++]),l=i?St(a).concat(i(a)):St(a),s=l.length,y=0;s>y;)u=l[y++],f&&!c.call(a,u)||(n[u]=a[u]);return n}:xt;!function(t,e){var n,r,o,i,c,a=t.target,f=t.global,l=t.stat;if(n=f?u:l?u[a]||F(a,{}):(u[a]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(c=kt(n,r))&&c.value:n[r],!Ot(f?r:a+(l?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;mt(i,o)}(t.sham||o&&o.sham)&&_(i,"sham",!0),Q(n,r,i,t)}}({target:"Object",stat:!0,forced:Object.assign!==Pt},{assign:Pt});const Mt=r.createContext({}),Ct=t=>{const e=r.useContext(Mt);return"function"==typeof t?t(e):Object.assign({},e,t)},_t=({components:t,children:e,disableParentContext:n})=>{let o=Ct(t);return n&&(o=t),r.createElement(Mt.Provider,{value:o},e)},Ft={inlineCode:"code",wrapper:({children:t})=>r.createElement(r.Fragment,{},t)},Nt=r.forwardRef(((t,e)=>{const{components:n,mdxType:o,originalType:i,parentName:c}=t,u=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e.indexOf(n=i[r])>=0||(o[n]=t[n]);return o}(t,["components","mdxType","originalType","parentName"]),a=Ct(n);return r.createElement(a[`${c}.${o}`]||a[o]||Ft[o]||i,n?Object.assign({ref:e},u,{components:n}):Object.assign({ref:e},u))}));function Dt(t,e){const n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){const i=n.length,c=new Array(i);c[0]=Nt;const u={};for(let t in e)hasOwnProperty.call(e,t)&&(u[t]=e[t]);u.originalType=t,u.mdxType="string"==typeof t?t:o,c[1]=u;for(let t=2;t<i;t++)c[t]=n[t];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}Nt.displayName="MDXCreateElement",Dt.Fragment=r.Fragment},3697:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return a},default:function(){return l}});var r=n(7560),o=n(8283),i=(n(2784),n(9037)),c={title:"Markdown page example"},u={type:"mdx",permalink:"/react-native-render-html/markdown-page",source:"@site/src/pages/markdown-page.md"},a=[],f={toc:a};function l(t){var e=t.components,n=(0,o.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"markdown-page-example"},"Markdown page example"),(0,i.kt)("p",null,"You don't need React to write simple standalone pages."))}l.isMDXComponent=!0}}]);