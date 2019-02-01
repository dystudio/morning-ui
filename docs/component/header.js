!function(n){function e(e){for(var r,u,l=e[0],i=e[1],s=e[2],d=0,f=[];d<l.length;d++)u=l[d],a[u]&&f.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r]);for(c&&c(e);f.length;)f.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],r=!0,l=1;l<t.length;l++){var i=t[l];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),n=u(u.s=t[0]))}return n}var r={},a={33:0},o=[];function u(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=r,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)u.d(t,r,function(e){return n[e]}.bind(null,r));return t},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var c=i;o.push([719,0]),t()}({1:function(n,e){n.exports=Vue},172:function(n,e,t){"use strict";t.r(e);var r=t(173),a=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,function(){return r[n]})}(o);e.default=a.a},173:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,a=t(2),o=(r=a)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"header"}},components:{"doc-component":o.default}},n.exports=e.default},325:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 页头 `<ui-header>`\n\n<doc-component-status page="header"></doc-component-status>\n\n[[[开始]]]\n\n定义一个页头，常用在容器内部，这是一个块级元素。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-header>\n    页头标题\n</ui-header>\n:::\n\n:::vue\n@name:子标题\n---\n#demo\n>desc\n你可以使用`<small>`标记子标题。\n>tpl\n<ui-header>\n    页头标题<small>页头子标题</small>\n</ui-header>\n:::\n\n:::vue\n@name:带标记的页头\n---\n#demo\n>desc\n使用`mark`类可显示带标记的页头。\n>tpl\n<ui-header class="mark">\n    页头标题<small>页头子标题</small>\n</ui-header>\n:::\n\n:::vue\n@name:带下划线的页头\n---\n#demo\n>desc\n使用`underline`类可显示带下划线的页头。\n>tpl\n<ui-header class="underline">\n    页头标题<small>页头子标题</small>\n</ui-header>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部|`black`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n:::vue\n@layout:size\n---\n<ui-header class="mark" size="{$sizeKey}">{$&sizeName}<small>页头子标题</small></ui-header>\n:::\n\n:::vue\n@layout:color\n---\n<ui-header color="{$colorKey}">{$&colorName}<small>页头子标题</small></ui-header>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/header/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},a=[];r._withStripped=!0,t.d(e,"a",function(){return r}),t.d(e,"b",function(){return a})},719:function(n,e,t){"use strict";var r=o(t(1)),a=o(t(720));function o(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(a.default)}})},720:function(n,e,t){"use strict";t.r(e);var r=t(325),a=t(172);for(var o in a)"default"!==o&&function(n){t.d(e,n,function(){return a[n]})}(o);var u=t(0),l=Object(u.a)(a.default,r.a,r.b,!1,null,null,null);l.options.__file="src/docs/pages/component/header/index.vue",e.default=l.exports}});