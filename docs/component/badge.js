!function(e){function n(n){for(var r,u,i=n[0],c=n[1],d=n[2],s=0,f=[];s<i.length;s++)u=i[s],a[u]&&f.push(a[u][0]),a[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(n);f.length;)f.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,i=1;i<t.length;i++){var c=t[i];0!==a[c]&&(r=!1)}r&&(o.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},a={8:0},o=[];function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var l=c;o.push([814,0]),t()}({1:function(e,n){e.exports=Vue},236:function(e,n,t){"use strict";t.r(n);var r=t(237),a=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);n.default=a.a},237:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,a=t(2),o=(r=a)&&r.__esModule?r:{default:r};n.default={data:function(){return{page:"badge"}},components:{"doc-component":o.default}},e.exports=n.default},265:function(e,n,t){"use strict";var r=function(){var e=this.$createElement,n=this._self._c||e;return n("doc-component",{attrs:{page:this.page,hasPadding:!0}},[n("script",{attrs:{type:"text/markdown"}},[this._v('\n# 徽章 `<ui-badge>`\n\n<doc-component-status page="badge"></doc-component-status>\n\n[[[开始]]]\n\n定义一个徽章，徽章一般跟在内容后面，来标记一些特殊的内容(通常是数字)，这是一个内联块元素。\n\n徽章内部只能包含文本内容。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-badge>24</ui-badge>\n:::\n\n:::vue\n@name:扁平徽章\n---\n#demo\n>tpl\n<ui-badge class="flat">24</ui-badge>\n:::\n\n:::vue\n@name:圆形徽章\n---\n#demo\n>tpl\n<ui-badge class="circle">圆形徽章</ui-badge>\n:::\n\n:::vue\n@name:无内容隐藏\n---\n#demo\n>desc\n当徽章内没有内容时，会自动隐藏。\n>tpl\n<ui-badge></ui-badge>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部|`theme`|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n:::vue\n@name:尺寸\n---\n#renderer\n>name\nsize-repeat\n>tpl\n<ui-badge size="{$sizeKey}">{$&sizeName}</ui-badge>\n---\n#renderer\n>name\nsize-repeat\n>desc\n尺寸配合`circle`样式类一起使用。\n>tpl\n<ui-badge class="circle" size="{$sizeKey}">{$&sizeName}</ui-badge>\n:::\n\n:::vue\n@layout:color\n---\n<ui-badge color="{$colorKey}">{$&colorName}</ui-badge>\n:::\n\n:::vue\n@layout:state-na\n---\n<ui-badge state="{$stateKey}">{$&stateName}</ui-badge>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/badge/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},a=[];r._withStripped=!0,t.d(n,"a",function(){return r}),t.d(n,"b",function(){return a})},814:function(e,n,t){"use strict";var r=o(t(1)),a=o(t(815));function o(e){return e&&e.__esModule?e:{default:e}}new r.default({el:"#root",render:function(e){return e(a.default)}})},815:function(e,n,t){"use strict";t.r(n);var r=t(265),a=t(236);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);var u=t(0),i=Object(u.a)(a.default,r.a,r.b,!1,null,null,null);i.options.__file="src/docs/pages/component/badge/index.vue",n.default=i.exports}});