!function(n){function e(e){for(var o,a,c=e[0],i=e[1],l=e[2],f=0,p=[];f<c.length;f++)a=c[f],r[a]&&p.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o]);for(s&&s(e);p.length;)p.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],o=!0,c=1;c<t.length;c++){var i=t[c];0!==r[i]&&(o=!1)}o&&(u.splice(e--,1),n=a(a.s=t[0]))}return n}var o={},r={45:0};var u=[];function a(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=o,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},a.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=i;u.push([311,0]),t()}({1:function(n,e){n.exports=Vue},151:function(n,e,t){"use strict";t.d(e,"a",function(){return o}),t.d(e,"b",function(){return r});var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 引用文本 `<ui-quote>`\n\n<doc-component-status page="quote"></doc-component-status>\n\n[[[开始]]]\n\n定义一段引用的内容，这是一个块级元素。\n\n#### 使用\n\n:::democode/html\n<ui-quote>引用文本</ui-quote>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部|`light-blue`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 色彩\n\n:::repeat/html\ncolor:theme\ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<ui-quote color="{$colorKey}">{$&colorName}</ui-quote>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/quote/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},r=[];o._withStripped=!0},310:function(n,e,t){"use strict";t.r(e);var o=t(48),r=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);var a=t(151),c=t(0),i=!1;var l=function(n){i||t(680)},s=Object(c.a)(r.a,a.a,a.b,!1,l,null,null);s.options.__file="src/docs/pages/component/quote/index.vue",e.default=s.exports},311:function(n,e,t){"use strict";var o=u(t(1)),r=u(t(310));function u(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(r.default)}})},48:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=t(2),u=(o=r)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"quote"}},components:{"doc-component":u.default}},n.exports=e.default},680:function(n,e){}});