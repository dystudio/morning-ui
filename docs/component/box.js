!function(n){function e(e){for(var o,u,a=e[0],c=e[1],s=e[2],d=0,f=[];d<a.length;d++)u=a[d],r[u]&&f.push(r[u][0]),r[u]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);for(l&&l(e);f.length;)f.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],o=!0,a=1;a<t.length;a++){var c=t[a];0!==r[c]&&(o=!1)}o&&(i.splice(e--,1),n=u(u.s=t[0]))}return n}var o={},r={7:0};var i=[];function u(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=o,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},u.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var l=c;i.push([237,0]),t()}({1:function(n,e){n.exports=Vue},10:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=t(2),i=(o=r)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"box"}},components:{"doc-component":i.default}},n.exports=e.default},114:function(n,e,t){"use strict";t.d(e,"a",function(){return o}),t.d(e,"b",function(){return r});var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 容器 `<ui-box>`\n\n<doc-component-status page="box"></doc-component-status>\n\n[[[开始]]]\n\n定义一个容器，`ui-box`常用来作为最外部的容器，容器是块级元素。\n\n容器默认高度是自适应的。\n\n#### 使用\n\n:::democode/html\n<div style="width:400px;height:200px;">\n    <ui-box style="background-color:#e0e0e0">\n        容器\n    </ui-box>\n</div>\n:::\n\n#### 有边距的容器\n\n:::democode/html\n<div style="width:400px;height:200px;">\n    <ui-box class="margin" style="background-color:#e0e0e0">\n        有边距的容器\n    </ui-box>\n</div>\n:::\n\n#### 填满的容器\n\n填满的容器高度为100%。\n\n:::democode/html\n<div style="width:400px;height:200px;">\n    <ui-box class="fill" style="background-color:#e0e0e0">\n        填满的容器\n    </ui-box>\n</div>\n\n<br>\n\n<div style="width:400px;height:200px;">\n    <ui-box class="margin fill" style="background-color:#e0e0e0">\n        有边距填满的容器\n    </ui-box>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/box/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},r=[];o._withStripped=!0},236:function(n,e,t){"use strict";t.r(e);var o=t(10),r=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,function(){return o[n]})}(i);var u=t(114),a=t(0),c=!1;var s=function(n){c||t(608)},l=Object(a.a)(r.a,u.a,u.b,!1,s,null,null);l.options.__file="src/docs/pages/component/box/index.vue",e.default=l.exports},237:function(n,e,t){"use strict";var o=i(t(1)),r=i(t(236));function i(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(r.default)}})},608:function(n,e){}});