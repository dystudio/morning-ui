!function(n){function e(e){for(var o,c,i=e[0],a=e[1],l=e[2],f=0,d=[];f<i.length;f++)c=i[f],r[c]&&d.push(r[c][0]),r[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o]);for(s&&s(e);d.length;)d.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],o=!0,i=1;i<t.length;i++){var a=t[i];0!==r[a]&&(o=!1)}o&&(u.splice(e--,1),n=c(c.s=t[0]))}return n}var o={},r={5:0};var u=[];function c(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=n,c.c=o,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},c.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var s=a;u.push([231,0]),t()}({1:function(n,e){n.exports=Vue},111:function(n,e,t){"use strict";t.d(e,"a",function(){return o}),t.d(e,"b",function(){return r});var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 区块 `<ui-block>`\n\n<doc-component-status page="block"></doc-component-status>\n\n[[[开始]]]\n\n定义一个区块，区块一般包含标题和正文内容，区块与其他样式组件不同的是可以用来定义一个带风格的区域。\n\n#### 使用\n\n:::democode/html\n<ui-block>区块</ui-block>\n:::\n\n#### 常用示例\n\n:::democode/html\n<ui-block>\n    <ui-h color="white" size="xs">标题内容</ui-h>\n    <ui-textcolor white>正文内容</ui-textcolor>\n</ui-block>\n:::\n\n#### 无间隙的区块\n\n可以通过添加`full`类来标记一个无间隙的区块。\n\n:::democode/html\n<ui-block class="full">无间隙的区块</ui-block>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部|`theme`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 色彩\n\n:::preset/html\nstatusColor\n---\nuikey:block\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/block/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},r=[];o._withStripped=!0},230:function(n,e,t){"use strict";t.r(e);var o=t(8),r=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);var c=t(111),i=t(0),a=!1;var l=function(n){a||t(600)},s=Object(i.a)(r.a,c.a,c.b,!1,l,null,null);s.options.__file="src/docs/pages/component/block/index.vue",e.default=s.exports},231:function(n,e,t){"use strict";var o=u(t(1)),r=u(t(230));function u(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(r.default)}})},600:function(n,e){},8:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=t(2),u=(o=r)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"block"}},components:{"doc-component":u.default}},n.exports=e.default}});