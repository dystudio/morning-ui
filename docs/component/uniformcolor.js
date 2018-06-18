!function(n){function e(e){for(var o,i,u=e[0],d=e[1],a=e[2],l=0,f=[];l<u.length;l++)i=u[l],r[i]&&f.push(r[i][0]),r[i]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(n[o]=d[o]);for(s&&s(e);f.length;)f.shift()();return c.push.apply(c,a||[]),t()}function t(){for(var n,e=0;e<c.length;e++){for(var t=c[e],o=!0,u=1;u<t.length;u++){var d=t[u];0!==r[d]&&(o=!1)}o&&(c.splice(e--,1),n=i(i.s=t[0]))}return n}var o={},r={67:0};var c=[];function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},i.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var s=d;c.push([363,0]),t()}({1:function(n,e){n.exports=Vue},177:function(n,e,t){"use strict";t.d(e,"a",function(){return o}),t.d(e,"b",function(){return r});var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 配色\n\n在某些场景下组件之外的元素需要和Morning UI保持一致的配色，为此Morning UI提供了CSS类供组件外的元素添加形态中的颜色。\n\n配色支持[形态/颜色](/guide/status.html#颜色)中的所有色彩。\n\n### 文字配色\n\n如果你需要对元素内的文字，通过`mo-co-font-*`这样的CSS类来进行配色，比如：`mo-co-font-theme`：\n\n:::democode/html\n<p class="mo-co-font-theme">这里是非组件元素</p>\n:::\n\n### 边框配色\n\n如果你需要对元素的边框配色，通过`mo-co-border-*`这样的CSS类来进行配色，比如：`mo-co-border-theme`：\n\n:::democode/html\n<div style="width:200px;height:50px;border-width:3px;border-style: solid;" class="mo-co-border-theme">这里是非组件元素</div>\n:::\n\n### 背景配色\n\n如果你需要对元素的边框配色，通过`mo-co-bg-*`这样的CSS类来进行配色，比如：`mo-co-bg-theme`：\n\n:::democode/html\n<div style="width:200px;height:200px;color: #FFF;" class="mo-co-bg-theme">这里是非组件元素</div>\n:::\n\n### 一起使用\n\n所有的配色都可以一起使用：\n\n:::democode/html\n<div style="width:200px;height:50px;border-width:3px;border-style: dashed;" class="mo-co-bg-silver mo-co-border-light-black mo-co-font-black">这里是非组件元素</div>\n:::\n\n')])])},r=[];o._withStripped=!0},362:function(n,e,t){"use strict";t.r(e);var o=t(70),r=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,function(){return o[n]})}(c);var i=t(177),u=t(0),d=!1;var a=function(n){d||t(740)},s=Object(u.a)(r.a,i.a,i.b,!1,a,null,null);s.options.__file="src/docs/pages/component/uniformcolor/index.vue",e.default=s.exports},363:function(n,e,t){"use strict";var o=c(t(1)),r=c(t(362));function c(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(r.default)}})},70:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=t(2),c=(o=r)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"uniformcolor"}},components:{"doc-component":c.default}},n.exports=e.default},740:function(n,e){}});