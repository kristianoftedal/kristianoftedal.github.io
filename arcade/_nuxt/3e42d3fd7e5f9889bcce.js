(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=115},131:function(t,e,n){"use strict";var r=n(41);n.n(r).a},132:function(t,e,n){(t.exports=n(28)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},133:function(t,e,n){"use strict";var r=n(42);n.n(r).a},134:function(t,e,n){(t.exports=n(28)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},137:function(t,e,n){"use strict";var r=n(43);n.n(r).a},138:function(t,e,n){(t.exports=n(28)(!1)).push([t.i,'body{background:#000}.wrapper,body{overflow:hidden}.wrapper{width:100%;min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-content:center;background-color:#000;background-image:url(https://www.scavengerbot.io/wp-content/themes/scavenger/assets/images/bg.png);background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position:50%;z-index:-20;-webkit-filter:blur(1px);filter:blur(1px)}.grid-container,.grid-container:after{width:100%;position:absolute;bottom:0;left:0}.grid-container:after{-webkit-mask-image:-webkit-gradient(linear,left 90%,left top,from(#000),to(transparent));mask-image:gradient(linear,left 90%,left top,from(#000),to(transparent));-webkit-transform:perspective(200px) rotateX(40deg) scaleX(2) translateZ(0);transform:perspective(200px) rotateX(40deg) scaleX(2) translateZ(0);content:"";display:block;right:0;height:60vh;padding:1px;-webkit-background-clip:content-box;background-clip:content-box;-webkit-backface-visibility:hidden;backface-visibility:hidden;outline:1px solid transparent;-webkit-transform-origin:bottom center;transform-origin:bottom center;will-change:transform;background-position:bottom;background-size:40px 40px;background-image:linear-gradient(90deg,#50e3c2 2px,transparent 0),linear-gradient(180deg,#50e3c2 1px,transparent 2px)}',""])},139:function(t,e,n){"use strict";n.r(e);n(61),n(48),n(49);var r=n(21),o=(n(37),n(97),n(4)),c=(n(73),n(75),n(78),n(27),n(80),n(56),n(79),n(102),n(114),n(0)),l=(n(58),n(115)),f=l.keys();function h(t){var e=l(t);return e.default||e}var d={},m=!0,x=!1,v=void 0;try{for(var y,w=f[Symbol.iterator]();!(m=(y=w.next()).done);m=!0){var _=y.value;d[_.replace(/^\.\//,"").replace(/\.(js|mjs|ts)$/,"")]=h(_)}}catch(t){x=!0,v=t}finally{try{m||null==w.return||w.return()}finally{if(x)throw v}}var k=d,C=(n(116),n(117),n(118),n(120),n(122),n(123),n(126),n(10)),$=function(){return{}};function E(t){c.a.config.errorHandler&&c.a.config.errorHandler(t)}function R(t,e){var n=t.options.data||$;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),Object(C.a)({},data,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function O(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function j(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function T(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function S(t){return Promise.all(T(t,function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=O(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function N(t){return A.apply(this,arguments)}function A(){return(A=Object(o.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:return t.abrupt("return",Object(C.a)({},e,{meta:j(e).map(function(t,n){return Object(C.a)({},t.options.meta,(e.matched[n]||{}).meta)})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function P(t,e){return M.apply(this,arguments)}function M(){return(M=Object(o.a)(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var o=Object(r.a)(path);if("number"==typeof t||"undefined"!==o&&"object"!==o||(n=path||{},path=t,o=Object(r.a)(path),t=302),"object"===o&&(path=e.router.resolve(path).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=K(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=9;break}return t.next=8,N(n.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=15;break}return t.next=14,N(n.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function L(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function D(base,t){var path=window.location.pathname;return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),decodeURI(path||"/")+window.location.search+window.location.hash)}function B(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(r.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=r||{},c=o.pretty?U:encodeURIComponent,l=0;l<t.length;l++){var f=t[l];if("string"!=typeof f){var h=data[f.name||"pathMatch"],d=void 0;if(null==h){if(f.optional){f.partial&&(path+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(h)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var m=0;m<h.length;m++){if(d=c(h[m]),!e[l].test(d))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(d)+"`");path+=(0===m?f.prefix:f.delimiter)+d}}else{if(d=f.asterisk?encodeURI(h).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):c(h),!e[l].test(d))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+d+'"');path+=f.prefix+d}}else path+=f}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",l=e&&e.delimiter||"/";for(;null!=(n=z.exec(t));){var f=n[0],h=n[1],d=n.index;if(path+=t.slice(c,d),c=d+f.length,h)path+=h[1];else{var m=t[c],x=n[2],v=n[3],y=n[4],w=n[5],_=n[6],k=n[7];path&&(r.push(path),path="");var C=null!=x&&null!=m&&m!==x,$="+"===_||"*"===_,E="?"===_||"*"===_,R=n[2]||l,pattern=y||w;r.push({name:v||o++,prefix:x||"",delimiter:R,optional:E,repeat:$,partial:C,asterisk:!!k,pattern:pattern?J(pattern):k?".*":"[^"+V(R)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function I(t,e){var n={},r=Object(C.a)({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function Q(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return Object(C.a)({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var z=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function U(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function V(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function J(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function K(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,c=t.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");return 2===(c=path.split("#")).length&&(path=c[0],o=c[1]),l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),l+=o?"#"+o:""}var H=n(85),X=n.n(H),F=n(59),W=function(){return Promise.all([n.e(5),n.e(2)]).then(n.bind(null,150)).then(function(t){return t.default||t})};c.a.use(F.a),window.history.scrollRestoration="manual";var Z=function(t,e,n){var r=!1;return t.matched.length<2&&t.matched.every(function(t){return!1!==t.components.default.options.scrollToTop})?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var G=n(86),Y=n.n(G),tt=Object(C.a)({},Y.a,{name:"NoSsr"}),et={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,l=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;data.nuxtChildDepth=f;var h=c[f]||l,d={};nt.forEach(function(t){void 0!==h[t]&&(d[t]=h[t])});var m={};ot.forEach(function(t){"function"==typeof h[t]&&(m[t]=h[t].bind(o))});var x=m.beforeEnter;m.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),x)return x.call(o,t)};var v=[t("router-view",data)];return r.keepAlive&&(v=[t("keep-alive",{props:r.keepAliveProps},v)]),t("transition",{props:d,on:m},v)}},nt=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],ot=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],it={name:"NuxtError",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},at=(n(131),n(20)),st=Object(at.a)(it,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,ut={name:"Nuxt",components:{NuxtChild:et,NuxtError:st},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||B(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},ct={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},pt=(n(133),Object(at.a)(ct,void 0,void 0,!1,null,null,null).exports),lt=(n(135),n(137),{_default:Object(at.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("nuxt")],1)},[],!1,null,null,null).exports}),ft={head:{title:"arcade",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"ndc2019"},{hid:"mobile-web-app-capable",name:"mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"arcade"},{hid:"author",name:"author",content:"kristianoftedal"},{hid:"theme-color",name:"theme-color",content:"#fff"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"},{hid:"og:title",name:"og:title",property:"og:title",content:"arcade"},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"arcade"},{hid:"og:description",name:"og:description",property:"og:description",content:"ndc2019"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"manifest",href:"/_nuxt/manifest.5f8f9fab.json"},{rel:"shortcut icon",href:"/_nuxt/icons/icon_64.9mld2VBMsQ$.png"},{rel:"apple-touch-icon",href:"/_nuxt/icons/icon_512.9mld2VBMsQ$.png",sizes:"512x512"}],style:[],script:[],htmlAttrs:{lang:"en"}},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){c.a.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&lt["_"+t]||(t="default"),this.layoutName=t,this.layout=lt["_"+t],this.layout},loadLayout:function(t){return t&&lt["_"+t]||(t="default"),Promise.resolve(lt["_"+t])}},components:{NuxtLoading:pt}},ht=n(60),mt=n.n(ht),xt=function(t,e){return gt.apply(this,arguments)};function gt(){return(gt=Object(o.a)(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n((r={accessibleIcons:!0,iconProperty:"$icon",icons:{64:"/_nuxt/icons/icon_64.9mld2VBMsQ$.png",120:"/_nuxt/icons/icon_120.9mld2VBMsQ$.png",144:"/_nuxt/icons/icon_144.9mld2VBMsQ$.png",152:"/_nuxt/icons/icon_152.9mld2VBMsQ$.png",192:"/_nuxt/icons/icon_192.9mld2VBMsQ$.png",384:"/_nuxt/icons/icon_384.9mld2VBMsQ$.png",512:"/_nuxt/icons/icon_512.9mld2VBMsQ$.png"}}).iconProperty.replace("$",""),vt(r.icons));case 2:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var vt=function(t){return function(e){return t[e]||""}};c.a.component(tt.name,tt),c.a.component(et.name,et),c.a.component("NChild",et),c.a.component(ut.name,ut),c.a.use(X.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var yt={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function bt(){return(bt=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,o,l,path,f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new F.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:Z,routes:[{path:"/",component:W,name:"index"}],fallback:!1});case 2:return n=t.sent,r=Object(C.a)({router:n,nuxt:{defaultTransition:yt,transitions:[yt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},yt,{name:t}):Object.assign({},yt,t):yt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,t=t?Q(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},ft),o=e?e.next:function(t){return r.router.push(t)},e?l=n.resolve(e.url).route:(path=D(n.options.base),l=n.resolve(path).route),t.next=8,P(r,{route:l,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:if(f=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";c.a[n]||(c.a[n]=!0,c.a.use(function(){c.a.prototype.hasOwnProperty(t)||Object.defineProperty(c.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))},"function"!=typeof xt){t.next=12;break}return t.next=12,xt(r.context,f);case 12:if("function"!=typeof mt.a){t.next=16;break}return t.next=16,mt()(r.context,f);case 16:t.next=19;break;case 19:return t.abrupt("return",{app:r,router:n});case 20:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var wt=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},_t=window.IntersectionObserver&&new window.IntersectionObserver(function(t){t.forEach(function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()})}),kt={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.noPrefetch||wt(this.observe,{timeout:2e3})},beforeDestroy:function(){this.__observed&&(_t.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){_t&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetch.bind(this),_t.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map(function(t){return t.components.default}).filter(function(t){return"function"==typeof t&&!t.options&&!t.__prefetched})},prefetch:function(){if(this.canPrefetch()){_t.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var l=o.value;try{l(),l.__prefetched=!0}catch(t){}}}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}}}}};c.a.component(kt.name,kt),c.a.component("NLink",kt);var Ct,$t,Et=[],Rt=window.__NUXT__||{};Object.assign(c.a.config,{silent:!0,performance:!1});var Ot=c.a.config.errorHandler||console.error;function jt(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function Tt(t,e,n){return St.apply(this,arguments)}function St(){return(St=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,l,f,h=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!Ct.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?I(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,S(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return h._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=23;break;case 12:if(t.prev=12,t.t0=t.catch(4),c=t.t0||{},l=c.statusCode||c.status||c.response&&c.response.status||500,f=c.message||"",!/^Loading chunk (\d)+ failed\./.test(f)){t.next=20;break}return window.location.reload(!0),t.abrupt("return");case 20:this.error({statusCode:l,message:f}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 23:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function Nt(t,e){return Rt.serverRendered&&e&&R(t,e),t._Ctor=t,t}function At(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=O(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof k[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),k[t])}),!c)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():L(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function Pt(t,e,n){return Mt.apply(this,arguments)}function Mt(){return(Mt=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,l,f,h,d,m,x,v,y,w,_,k,C,$,O,T=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return Et=e===n?[]:j(n,o=[]).map(function(t,i){return B(n.matched[o[i]].path)(n.params)}),c=!1,l=function(path){n.path===path.path&&T.$loading.finish&&T.$loading.finish(),n.path!==path.path&&T.$loading.pause&&T.$loading.pause(),c||(c=!0,r(path))},t.next=7,P(Ct,{route:e,from:n,next:l.bind(this)});case 7:if(this._dateLastError=Ct.nuxt.dateErr,this._hadError=!!Ct.nuxt.err,(h=j(e,f=[])).length){t.next=25;break}return t.next=14,At.call(this,h,Ct.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof st.layout?st.layout(Ct.context):st.layout);case 18:return d=t.sent,t.next=21,At.call(this,h,Ct.context,d);case 21:if(!c){t.next=23;break}return t.abrupt("return");case 23:return Ct.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return h.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(jt(h,e,n)),t.prev=27,t.next=30,At.call(this,h,Ct.context);case 30:if(!c){t.next=32;break}return t.abrupt("return");case 32:if(!Ct.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(m=h[0].options.layout)&&(m=m(Ct.context)),t.next=38,this.loadLayout(m);case 38:return m=t.sent,t.next=41,At.call(this,h,Ct.context,m);case 41:if(!c){t.next=43;break}return t.abrupt("return");case 43:if(!Ct.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:x=!0,t.prev=46,v=!0,y=!1,w=void 0,t.prev=50,_=h[Symbol.iterator]();case 52:if(v=(k=_.next()).done){t.next=64;break}if("function"==typeof(C=k.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,C.options.validate(Ct.context);case 58:if(x=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:v=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),y=!0,w=t.t0;case 70:t.prev=70,t.prev=71,v||null==_.return||_.return();case 73:if(t.prev=73,!y){t.next=76;break}throw w;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(x){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(h.map(function(t,i){if(t._path=B(e.matched[f[i]].path)(e.params),t._dataRefresh=!1,T._pathChanged&&T._queryChanged||t._path!==Et[i])t._dataRefresh=!0;else if(!T._pathChanged&&T._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some(function(t){return T._diffQuery[t]}))}if(!T._hadError&&T._isMounted&&!t._dataRefresh)return Promise.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,c=!!t.options.fetch,l=o&&c?30:45;if(o){var h=L(t.options.asyncData,Ct.context).then(function(e){R(t,e),T.$loading.increase&&T.$loading.increase(l)});r.push(h)}if(T.$loading.manual=!1===t.options.loading,c){var p=t.options.fetch(Ct.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){T.$loading.increase&&T.$loading.increase(l)}),r.push(p)}return Promise.all(r)}));case 89:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==($=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,$));case 97:return Et=[],E($),"function"==typeof(O=st.layout)&&(O=O(Ct.context)),t.next=103,this.loadLayout(O);case 103:this.error($),this.$nuxt.$emit("routeChanged",e,n,$),r();case 106:case"end":return t.stop()}},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function Lt(t,e){T(t,function(t,e,n,o){return"object"!==Object(r.a)(t)||t.options||((t=c.a.extend(t))._Ctor=t,n.components[o]=t),t})}function Dt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?st.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(Ct.context)),this.setLayout(e)}function qt(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||c.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=j(t,e);r.forEach(function(t,i){if(t&&t.constructor._dataRefresh&&o[i]===t.constructor&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)c.a.set(t.$data,n,e[n])}}),Dt.call(n,t)})}function Bt(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),$t.afterEach(function(e,n){c.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function It(){return(It=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,l,f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Ct=e.app,$t=e.router,t.next=4,Promise.all((path=void 0,path=D((h=$t).options.base,h.options.mode),T(h.match(path),function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r,o,c){var l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return l=Nt(O(e),Rt.data?Rt.data[c]:null),r.components[o]=l,t.abrupt("return",l);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,c){return t.apply(this,arguments)}}())));case 4:return n=t.sent,r=new c.a(Ct),l=Rt.layout||"default",t.next=9,r.loadLayout(l);case 9:if(r.setLayout(l),f=function(){r.$mount("#__nuxt"),c.a.nextTick(function(){Bt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(jt(n,$t.currentRoute)),Et=$t.currentRoute.matched.map(function(t){return B(t.path)($t.currentRoute.params)})),r.$loading={},Rt.error&&r.error(Rt.error),$t.beforeEach(Tt.bind(r)),$t.beforeEach(Pt.bind(r)),$t.afterEach(Lt),$t.afterEach(qt.bind(r)),!Rt.serverRendered){t.next=22;break}return f(),t.abrupt("return");case 22:Pt.call(r,$t.currentRoute,$t.currentRoute,function(path){if(!path)return Lt($t.currentRoute,$t.currentRoute),Dt.call(r,$t.currentRoute),void f();$t.push(path,function(){return f()},function(t){if(!t)return f();Ot(t)})});case 23:case"end":return t.stop()}var h,path},t,this)}))).apply(this,arguments)}(function(t){return bt.apply(this,arguments)})().then(function(t){return It.apply(this,arguments)}).catch(function(t){t.message="[nuxt] Error while mounting app: "+t.message,Ot(t)})},41:function(t,e,n){var content=n(132);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("b675d82e",content,!0,{sourceMap:!1})},42:function(t,e,n){var content=n(134);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("17cfdfa9",content,!0,{sourceMap:!1})},43:function(t,e,n){var content=n(138);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("aab9a468",content,!0,{sourceMap:!1})},60:function(t,e){"serviceWorker"in navigator?navigator.serviceWorker.register("/sw.js",{scope:"/"}).then(function(t){window.$sw=t}).catch(function(t){console.error("Service worker registration failed:",t)}):console.warn("Service workers are not supported.")},87:function(t,e,n){t.exports=n(139)}},[[87,3,1,4]]]);