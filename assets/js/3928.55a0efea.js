(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3928],{8544:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(2784),a=n(9037),o=n(7614),i=n(7647),l=n(8451),c=n(8629),s=n(5432),d=n(2489),u=n(3030),p=n(4517),h=n(7921),m=n(6277),y={docPage:"docPage_2hm3",docMainContainer:"docMainContainer_luF8",docMainContainerEnhanced:"docMainContainerEnhanced_1KzL",docSidebarContainer:"docSidebarContainer_mF8j",docSidebarContainerHidden:"docSidebarContainerHidden_2DZs",collapsedDocSidebar:"collapsedDocSidebar_3YtF",expandSidebarButtonIcon:"expandSidebarButtonIcon_2vqf",docItemWrapperEnhanced:"docItemWrapperEnhanced_1BzV"},f=n(3241);function g(e){var t,n,i,d,p,g=e.currentDocRoute,v=e.versionMetadata,b=e.children,k=(0,o.Z)(),E=k.siteConfig,Z=k.isClient,C=v.pluginId,N=v.version,S=function(e){var t,n=e.versionMetadata,r=e.currentDocRoute,a=n.permalinkToSidebar,o=n.docsSidebars,i=a[r.path]||a[(t=r.path,t.endsWith("/")?t:t+"/")]||a[function(e){return e.endsWith("/")?e.slice(0,-1):e}(r.path)];return{sidebar:o[i],sidebarName:i}}({versionMetadata:v,currentDocRoute:g}),T=S.sidebarName,x=S.sidebar,P=(0,r.useState)(!1),w=P[0],D=P[1],I=(0,r.useState)(!1),L=I[0],M=I[1],_=(0,r.useCallback)((function(){L&&M(!1),D(!w)}),[L]);return r.createElement(l.Z,{key:Z,wrapperClassName:f.kM.wrapper.docPages,pageClassName:f.kM.page.docPage,searchMetadatas:{version:N,tag:(0,f.os)(C,N)}},r.createElement("div",{className:y.docPage},x&&r.createElement("aside",{className:(0,m.Z)(y.docSidebarContainer,(t={},t[y.docSidebarContainerHidden]=w,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(y.docSidebarContainer)&&w&&M(!0)}},r.createElement(c.Z,{key:T,sidebar:x,path:g.path,sidebarCollapsible:null==(n=null==(i=E.themeConfig)?void 0:i.sidebarCollapsible)||n,onCollapse:_,isHidden:L}),L&&r.createElement("div",{className:y.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_},r.createElement(u.Z,{className:y.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,m.Z)(y.docMainContainer,(d={},d[y.docMainContainerEnhanced]=w||!x,d))},r.createElement("div",{className:(0,m.Z)("container padding-top--md padding-bottom--lg",y.docItemWrapper,(p={},p[y.docItemWrapperEnhanced]=w,p))},r.createElement(a.Zo,{components:s.Z},b)))))}var v=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return(0,p.LX)(a.pathname,e)}));return o?r.createElement(g,{currentDocRoute:o,versionMetadata:n},(0,i.Z)(t,{versionMetadata:n})):r.createElement(d.default,e)}},804:function(e,t,n){"use strict";n.d(t,{N:function(){return p},Z:function(){return h}});var r=n(8283),a=n(7560),o=n(2784),i=n(6277),l=n(7921),c=n(3241),s="enhancedAnchor_b0Ka",d="h1Heading_Fr2O",u=["id"],p=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,a.Z)({},t,{id:void 0,className:d}),t.children))},h=function(e){return"h1"===e?p:(t=e,function(e){var n,a=e.id,d=(0,r.Z)(e,u),p=(0,c.LU)().navbar.hideOnScroll;return a?o.createElement(t,d,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",(n={},n[s]=!p,n)),id:a}),d.children,o.createElement("a",{className:"hash-link",href:"#"+a,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,d)});var t}},3030:function(e,t,n){"use strict";var r=n(7560),a=n(2784);t.Z=function(e){return a.createElement("svg",(0,r.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},5432:function(e,t,n){"use strict";var r=n(2784),a=n(1510),o=n(3488),i=n(804),l={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(o.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(a.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(o.Z,(0,r.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:(0,i.Z)("h1"),h2:(0,i.Z)("h2"),h3:(0,i.Z)("h3"),h4:(0,i.Z)("h4"),h5:(0,i.Z)("h5"),h6:(0,i.Z)("h6")};t.Z=l},2489:function(e,t,n){"use strict";n.r(t);var r=n(2784),a=n(8451),o=n(7921);t.default=function(){return r.createElement(a.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},2894:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},a=n(6097),o=n(3241),i=function(){var e=(0,o.LU)().prism,t=(0,a.Z)().isDarkTheme,n=e.theme||r,i=e.darkTheme||n;return t?i:n}},5862:function(e,t,n){"use strict";var r=n(2784),a=n(4253);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},7719:function(e,t,n){"use strict";function r(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var i=document.getSelection(),l=!1;i.rangeCount>0&&(l=i.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}return a.remove(),l&&(i.removeAllRanges(),i.addRange(l)),o&&o.focus(),c}n.d(t,{Z:function(){return r}})},4501:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},6540:function(e,t,n){"use strict";n.d(t,{ZP:function(){return m},lG:function(){return i}});var r=n(7175),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(2784),i={Prism:r.Z,theme:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},p=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=c({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=c({},n,{backgroundColor:null}),a};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var m=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?p(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=c({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==a&&(o.style=void 0!==o.style?c({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),l(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var i=r?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,i=c({},h(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?c({},i.style,a):a),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),l(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,i=0,l=[],c=[l];i>-1;){for(;(o=r[i]++)<a[i];){var p=void 0,h=t[i],m=n[i][o];if("string"==typeof m?(h=i>0?h:["plain"],p=m):(h=u(h,m.type),m.alias&&(h=u(h,m.alias)),p=m.content),"string"==typeof p){var y=p.split(s),f=y.length;l.push({types:h,content:y[0]});for(var g=1;g<f;g++)d(l),c.push(l=[]),l.push({types:h,content:y[g]})}else i++,t.push(h),n.push(p),r.push(0),a.push(p.length)}i--,t.pop(),n.pop(),r.pop(),a.pop()}return d(l),c}(void 0!==i?this.tokenize(t,r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component)}}]);