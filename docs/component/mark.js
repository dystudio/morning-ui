!function(n){function e(e){for(var r,a,i=e[0],c=e[1],l=e[2],s=0,d=[];s<i.length;s++)a=i[s],o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(f&&f(e);d.length;)d.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],r=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(r=!1)}r&&(u.splice(e--,1),n=a(a.s=t[0]))}return n}var r={},o={48:0},u=[];function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=r,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var f=c;u.push([717,0]),t()}({1:function(n,e){n.exports=Vue},150:function(n,e,t){"use strict";t.r(e);var r=t(151),o=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,function(){return r[n]})}(u);e.default=o.a},151:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(2),u=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"mark"}},components:{"doc-component":u.default}},n.exports=e.default},322:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 标记的文本 `<ui-mark>`\n\n<doc-component-status page="mark"></doc-component-status>\n\n[[[开始]]]\n\n定义标记内容，这是一个内联元素。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-mark>标记的文本</ui-mark>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部|`theme`|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n:::vue\n@layout:color\n---\n<ui-mark color="{$colorKey}">{$&colorName}</ui-mark>\n:::\n\n:::vue\n@layout:state-na\n---\n<ui-mark state="{$stateKey}">{$&stateName}</ui-mark>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/mark/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0,t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o})},717:function(n,e,t){"use strict";var r=u(t(1)),o=u(t(718));function u(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},718:function(n,e,t){"use strict";t.r(e);var r=t(322),o=t(150);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);var a=t(0),i=Object(a.a)(o.default,r.a,r.b,!1,null,null,null);i.options.__file="src/docs/pages/component/mark/index.vue",e.default=i.exports}});