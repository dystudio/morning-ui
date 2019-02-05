!function(n){function e(e){for(var t,l,u=e[0],s=e[1],a=e[2],f=0,d=[];f<u.length;f++)l=u[f],o[l]&&d.push(o[l][0]),o[l]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t]);for(c&&c(e);d.length;)d.shift()();return r.push.apply(r,a||[]),i()}function i(){for(var n,e=0;e<r.length;e++){for(var i=r[e],t=!0,u=1;u<i.length;u++){var s=i[u];0!==o[s]&&(t=!1)}t&&(r.splice(e--,1),n=l(l.s=i[0]))}return n}var t={},o={51:0},r=[];function l(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=n,l.c=t,l.d=function(n,e,i){l.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},l.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,e){if(1&e&&(n=l(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)l.d(i,t,function(e){return n[e]}.bind(null,t));return i},l.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(e,"a",e),e},l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},l.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var c=s;r.push([686,0]),i()}({1:function(n,e){n.exports=Vue},138:function(n,e,i){"use strict";i.r(e);var t=i(139),o=i.n(t);for(var r in t)"default"!==r&&function(n){i.d(e,n,function(){return t[n]})}(r);e.default=o.a},139:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t,o=i(2),r=(t=o)&&t.__esModule?t:{default:t};e.default={data:function(){return{page:"ol"}},components:{"doc-component":r.default}},n.exports=e.default},329:function(n,e,i){"use strict";var t=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 有序列表 `<ui-ol>`\n\n<doc-component-status page="ol"></doc-component-status>\n\n[[[开始]]]\n\n定义一个有序列表，支持多层嵌套，列表中每一项使用`<li>`标签。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-ol>\n    <li>This is first</li>\n    <li>This is second</li>\n    <li>This is third</li>\n</ui-ol>\n:::\n\n:::vue\n@name:三层嵌套\n---\n#demo\n>desc\n有序列表支持多层嵌套。\n>tpl\n<ui-ol>\n    <li>This is 1</li>\n    <ui-ol>\n        <li>This is 2.1</li>\n        <ui-ol>\n            <li>This is 2.2.1</li>\n            <li>This is 2.2.2</li>\n        </ui-ol>\n        <li>This is 2.3</li>\n    </ui-ol>\n    <li>This is 3</li>\n</ui-ol>\n:::\n\n:::vue\n@name:超过三层嵌套\n---\n#demo\n>desc\n超过三层的无序列表，项目序号均为`lower-latin`。\n>tpl\n<ui-ol>\n    <li>This is 1</li>\n    <ui-ol>\n        <li>This is 2.1</li>\n        <ui-ol>\n            <li>This is 2.2.1</li>\n            <ui-ol>\n                <li>This is 2.2.2.1</li>\n                <li>This is 2.2.2.2</li>\n            </ui-ol>\n            <li>This is 2.2.3</li>\n        </ui-ol>\n        <li>This is 2.3</li>\n    </ui-ol>\n    <li>This is 3</li>\n</ui-ol>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n:::vue\n@layout:state-na\n---\n<ui-ol state="{$stateKey}">\n    <li>this is {$&stateName} ui-ol</li>\n    <li>this is {$&stateName} ui-ol</li>\n</ui-ol>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/ol/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];t._withStripped=!0,i.d(e,"a",function(){return t}),i.d(e,"b",function(){return o})},686:function(n,e,i){"use strict";var t=r(i(1)),o=r(i(687));function r(n){return n&&n.__esModule?n:{default:n}}new t.default({el:"#root",render:function(n){return n(o.default)}})},687:function(n,e,i){"use strict";i.r(e);var t=i(329),o=i(138);for(var r in o)"default"!==r&&function(n){i.d(e,n,function(){return o[n]})}(r);var l=i(0),u=Object(l.a)(o.default,t.a,t.b,!1,null,null,null);u.options.__file="src/docs/pages/component/ol/index.vue",e.default=u.exports}});