!function(t){function n(n){for(var r,a,i=n[0],c=n[1],s=n[2],l=0,d=[];l<i.length;l++)a=i[l],o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(f&&f(n);d.length;)d.shift()();return u.push.apply(u,s||[]),e()}function e(){for(var t,n=0;n<u.length;n++){for(var e=u[n],r=!0,i=1;i<e.length;i++){var c=e[i];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},o={66:0};var u=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},a.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var f=c;u.push([369,0]),e()}({1:function(t,n){t.exports=Vue},180:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o});var r=function(){var t=this.$createElement,n=this._self._c||t;return n("doc-component",{attrs:{page:this.page,hasPadding:!0}},[n("script",{attrs:{type:"text/markdown"}},[this._v('\n# 右对齐文本 `<ui-textright>`\n\n<doc-component-status page="textright"></doc-component-status>\n\n[[[开始]]]\n\n内容右对齐组件，这是一个块级元素。\n\n#### 使用\n\n:::democode/html\n<ui-textright>右对齐文本</ui-textright>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/textright/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0},368:function(t,n,e){"use strict";e.r(n);var r=e(69),o=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);var a=e(180),i=e(0),c=!1;var s=function(t){c||e(754)},f=Object(i.a)(o.a,a.a,a.b,!1,s,null,null);f.options.__file="src/docs/pages/component/textright/index.vue",n.default=f.exports},369:function(t,n,e){"use strict";var r=u(e(1)),o=u(e(368));function u(t){return t&&t.__esModule?t:{default:t}}new r.default({el:"#root",render:function(t){return t(o.default)}})},69:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=e(2),u=(r=o)&&r.__esModule?r:{default:r};n.default={data:function(){return{page:"textright"}},components:{"doc-component":u.default}},t.exports=n.default},754:function(t,n){}});