!function(n){function e(e){for(var r,u,i=e[0],c=e[1],s=e[2],p=0,f=[];p<i.length;p++)u=i[p],o[u]&&f.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(l&&l(e);f.length;)f.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],r=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),n=u(u.s=t[0]))}return n}var r={},o={14:0};var a=[];function u(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=r,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},u.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=c;a.push([281,0]),t()}({1:function(n,e){n.exports=Vue},136:function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o});var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 首字大写文本 `<ui-capitalize>`\n\n<doc-component-status page="capitalize"></doc-component-status>\n\n[[[开始]]]\n\n首字大写文本组件，这是一个内联元素。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-capitalize>首字母大写的文本: tHere is A LEtter</ui-capitalize>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/capitalize/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0},17:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(2),a=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"capitalize"}},components:{"doc-component":a.default}},n.exports=e.default},280:function(n,e,t){"use strict";t.r(e);var r=t(17),o=t.n(r);for(var a in r)"default"!==a&&function(n){t.d(e,n,function(){return r[n]})}(a);var u=t(136),i=t(0),c=!1;var s=function(n){c||t(683)},l=Object(i.a)(o.a,u.a,u.b,!1,s,null,null);l.options.__file="src/docs/pages/component/capitalize/index.vue",e.default=l.exports},281:function(n,e,t){"use strict";var r=a(t(1)),o=a(t(280));function a(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},683:function(n,e){}});