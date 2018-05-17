!function(n){function e(e){for(var r,c,i=e[0],a=e[1],d=e[2],l=0,f=[];l<i.length;l++)c=i[l],o[c]&&f.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r]);for(s&&s(e);f.length;)f.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],r=!0,i=1;i<t.length;i++){var a=t[i];0!==o[a]&&(r=!1)}r&&(u.splice(e--,1),n=c(c.s=t[0]))}return n}var r={},o={13:0};var u=[];function c(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=n,c.c=r,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},c.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var s=a;u.push([243,0]),t()}({1:function(n,e){n.exports=Vue},117:function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o});var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 居中容器 `<ui-center>`\n\n<doc-component-status page="center"></doc-component-status>\n\n[[[开始]]]\n\n定义居中的容器，容器的内容将被居中显示，这是一个块级元素。\n\n#### 使用\n\n:::democode/html\n<div style="width:400px; height:300px;background-color:#EDF1F5">\n    <ui-center>\n        <div style="background-color:#A8B3C2;">居中div</div>\n        居中文字\n    </ui-center>\n</div>\n:::\n\n#### 填满容器的居中\n\n填满的居中容器高度为100%。\n\n\n:::democode/html\n<div style="width:400px; height:300px;background-color:#EDF1F5">\n    <ui-center class="fill">\n        <div style="background-color:#A8B3C2;">充满父容器</div>\n        居中文字\n    </ui-center>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/center/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0},16:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(2),u=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"center"}},components:{"doc-component":u.default}},n.exports=e.default},242:function(n,e,t){"use strict";t.r(e);var r=t(16),o=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,function(){return r[n]})}(u);var c=t(117),i=t(0),a=!1;var d=function(n){a||t(608)},s=Object(i.a)(o.a,c.a,c.b,!1,d,null,null);s.options.__file="src/docs/pages/component/center/index.vue",e.default=s.exports},243:function(n,e,t){"use strict";var r=u(t(1)),o=u(t(242));function u(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},608:function(n,e){}});