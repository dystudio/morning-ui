!function(n){function t(t){for(var o,c,a=t[0],i=t[1],l=t[2],f=0,p=[];f<a.length;f++)c=a[f],r[c]&&p.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o]);for(s&&s(t);p.length;)p.shift()();return u.push.apply(u,l||[]),e()}function e(){for(var n,t=0;t<u.length;t++){for(var e=u[t],o=!0,a=1;a<e.length;a++){var i=e[a];0!==r[i]&&(o=!1)}o&&(u.splice(t--,1),n=c(c.s=e[0]))}return n}var o={},r={69:0};var u=[];function c(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=n,c.c=o,c.d=function(n,t,e){c.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},c.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},c.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(t,"a",t),t},c.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},c.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=i;u.push([391,0]),e()}({1:function(n,t){n.exports=Vue},191:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return r});var o=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 文本颜色 `<ui-textcolor>`\n\n<doc-component-status page="textcolor"></doc-component-status>\n\n[[[开始]]]\n\n定义文本的颜色，这是一个内联元素。\n\n#### 使用\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-textcolor>This is ui-textcolor</ui-textcolor>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部|`theme`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n:::vue\n@layout:color\n---\n<ui-textcolor color="{$colorKey}">{$&colorName}</ui-textcolor>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/textcolor/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},r=[];o._withStripped=!0},390:function(n,t,e){"use strict";e.r(t);var o=e(72),r=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);var c=e(191),a=e(0),i=!1;var l=function(n){i||e(793)},s=Object(a.a)(r.a,c.a,c.b,!1,l,null,null);s.options.__file="src/docs/pages/component/textcolor/index.vue",t.default=s.exports},391:function(n,t,e){"use strict";var o=u(e(1)),r=u(e(390));function u(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(r.default)}})},72:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=e(2),u=(o=r)&&o.__esModule?o:{default:o};t.default={data:function(){return{page:"textcolor"}},components:{"doc-component":u.default}},n.exports=t.default},793:function(n,t){}});