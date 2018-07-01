!function(n){function e(e){for(var r,u,i=e[0],c=e[1],s=e[2],f=0,p=[];f<i.length;f++)u=i[f],o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(l&&l(e);p.length;)p.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],r=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),n=u(u.s=t[0]))}return n}var r={},o={42:0};var a=[];function u(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=r,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},u.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=c;a.push([319,0]),t()}({1:function(n,e){n.exports=Vue},155:function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o});var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 标记的文本 `<ui-mark>`\n\n<doc-component-status page="mark"></doc-component-status>\n\n[[[开始]]]\n\n定义标记内容，这是一个内联元素。\n\n#### 使用\n\n:::democode/html\n<ui-mark>标记的文本</ui-mark>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部|`theme`|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 色彩\n\n:::preset/html\nstatusColor\n---\nuikey:mark\n:::\n#### 状态\n\n:::repeat/html\nstate:normal,apparent\n---\n<ui-mark state="{$stateKey}">{$&stateName}</ui-mark>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/mark/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0},318:function(n,e,t){"use strict";t.r(e);var r=t(45),o=t.n(r);for(var a in r)"default"!==a&&function(n){t.d(e,n,function(){return r[n]})}(a);var u=t(155),i=t(0),c=!1;var s=function(n){c||t(702)},l=Object(i.a)(o.a,u.a,u.b,!1,s,null,null);l.options.__file="src/docs/pages/component/mark/index.vue",e.default=l.exports},319:function(n,e,t){"use strict";var r=a(t(1)),o=a(t(318));function a(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},45:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(2),a=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"mark"}},components:{"doc-component":a.default}},n.exports=e.default},702:function(n,e){}});