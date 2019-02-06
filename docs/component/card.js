!function(n){function e(e){for(var r,a,u=e[0],d=e[1],c=e[2],s=0,f=[];s<u.length;s++)a=u[s],i[a]&&f.push(i[a][0]),i[a]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(n[r]=d[r]);for(l&&l(e);f.length;)f.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],r=!0,u=1;u<t.length;u++){var d=t[u];0!==i[d]&&(r=!1)}r&&(o.splice(e--,1),n=a(a.s=t[0]))}return n}var r={},i={15:0},o=[];function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=r,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=d;o.push([780,0]),t()}({1:function(n,e){n.exports=Vue},214:function(n,e,t){"use strict";t.r(e);var r=t(215),i=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,function(){return r[n]})}(o);e.default=i.a},215:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=t(2),o=(r=i)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"card"}},components:{"doc-component":o.default}},n.exports=e.default},264:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 卡片 `<ui-card>`\n\n<doc-component-status page="card"></doc-component-status>\n\n[[[开始]]]\n\n定义一张卡片，卡片包含头部和主体部分。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:180px;height:240px;">\n    <ui-card>\n        <header>头部</header>\n        <div>卡片</div>\n    </ui-card>\n</div>\n:::\n\n:::vue\n@name:没有头部的卡片\n---\n#demo\n>tpl\n<div style="width:180px;height:240px;">\n    <ui-card>卡片</ui-card>\n</div>\n:::\n\n:::vue\n@name:无间隙卡片\n---\n#demo\n>desc\n卡片内容部分默认具有间隙，可以通过`full`类来去除间隙。\n>tpl\n<div>\n    <div style="width:180px;height:240px;display:inline-block;margin:10px;vertical-align: top;">\n        <ui-card class="full">卡片</ui-card>\n    </div>\n\n    <div style="width:180px;height:240px;display:inline-block;margin:10px;vertical-align: top;">\n        <ui-card class="full">\n            <header>头部</header>\n            <div>卡片</div>\n        </ui-card>\n    </div>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部|`theme`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n:::vue\n@layout:color\n---\n<div style="width:180px;height:240px;display:inline-block;margin:10px;">\n    <ui-card color="{$colorKey}">\n        <header>{$&colorName}</header>\n        <div>卡片</div>\n    </ui-card>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/card/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},i=[];r._withStripped=!0,t.d(e,"a",function(){return r}),t.d(e,"b",function(){return i})},780:function(n,e,t){"use strict";var r=o(t(1)),i=o(t(781));function o(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(i.default)}})},781:function(n,e,t){"use strict";t.r(e);var r=t(264),i=t(214);for(var o in i)"default"!==o&&function(n){t.d(e,n,function(){return i[n]})}(o);var a=t(0),u=Object(a.a)(i.default,r.a,r.b,!1,null,null,null);u.options.__file="src/docs/pages/component/card/index.vue",e.default=u.exports}});