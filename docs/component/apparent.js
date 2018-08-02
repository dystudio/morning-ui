!function(n){function e(e){for(var r,i,u=e[0],c=e[1],p=e[2],s=0,d=[];s<u.length;s++)i=u[s],o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(l&&l(e);d.length;)d.shift()();return a.push.apply(a,p||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],r=!0,u=1;u<t.length;u++){var c=t[u];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},o={3:0};var a=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},i.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var l=c;a.push([249,0]),t()}({1:function(n,e){n.exports=Vue},120:function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o});var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 醒目内容 `<ui-apparent>`\n\n<doc-component-status page="apparent"></doc-component-status>\n\n[[[开始]]]\n\n定义醒目的内容，这是一个内联元素。\n\n由于`ui-apparent`需要配合其他元素使用，因此你可以通过样式类来修改它的元素类型：\n\n- `inline` : 内联元素(默认)\n- `inline-block` : 内联块元素\n- `block` : 块级元素\n\n此组件作为无醒目状态组件以及HTML元素的补充，若组件自带醒目状态请使用组件自身状态。\n\n#### 使用\n\n:::democode/html\n<ui-apparent>醒目内容</ui-apparent>\n:::\n\n#### 配合内联元素\n\n:::democode/html\n<ui-apparent class="inline">\n    <span>This is inline element</span>\n</ui-apparent>\n:::\n\n#### 配合内联块元素\n\n:::democode/html\n<ui-apparent class="inline-block">\n    <div style="background:#eee;display:inline-block">\n        This is inline-block element\n    </div>\n</ui-apparent>\n:::\n\n#### 配合块级元素\n\n:::democode/html\n<ui-apparent class="block">\n    <div style="width:200px;height:50px;background:#eee;">\n        This is block element\n    </div>\n</ui-apparent>\n:::\n\n#### 配合无`apparent`状态组件\n\n由于`ui-block`是块级元素，需要为`ui-apparent`添加`block`样式类。\n\n:::democode/html\n<ui-apparent class="block">\n    <ui-block>区块</ui-block>\n</ui-apparent>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/apparent/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0},248:function(n,e,t){"use strict";t.r(e);var r=t(6),o=t.n(r);for(var a in r)"default"!==a&&function(n){t.d(e,n,function(){return r[n]})}(a);var i=t(120),u=t(0),c=!1;var p=function(n){c||t(640)},l=Object(u.a)(o.a,i.a,i.b,!1,p,null,null);l.options.__file="src/docs/pages/component/apparent/index.vue",e.default=l.exports},249:function(n,e,t){"use strict";var r=a(t(1)),o=a(t(248));function a(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},6:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(2),a=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"apparent"}},components:{"doc-component":a.default}},n.exports=e.default},640:function(n,e){}});