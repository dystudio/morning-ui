!function(t){function e(e){for(var r,a,c=e[0],i=e[1],f=e[2],l=0,d=[];l<c.length;l++)a=c[l],o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);for(s&&s(e);d.length;)d.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(u.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={56:0};var u=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},a.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var s=i;u.push([327,0]),n()}({1:function(t,e){t.exports=Vue},159:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var r=function(){var t=this.$createElement,e=this._self._c||t;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 左对齐文本 `<ui-textleft>`\n\n<doc-component-status page="textleft"></doc-component-status>\n\n[[[开始]]]\n\n内容左对齐组件，这是一个块级元素。\n\n#### 使用\n\n:::democode/html\n<ui-textleft>左对齐文本</ui-textleft>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/textleft/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0},326:function(t,e,n){"use strict";n.r(e);var r=n(59),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);var a=n(159),c=n(0),i=!1;var f=function(t){i||n(690)},s=Object(c.a)(o.a,a.a,a.b,!1,f,null,null);s.options.__file="src/docs/pages/component/textleft/index.vue",e.default=s.exports},327:function(t,e,n){"use strict";var r=u(n(1)),o=u(n(326));function u(t){return t&&t.__esModule?t:{default:t}}new r.default({el:"#root",render:function(t){return t(o.default)}})},59:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(2),u=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"textleft"}},components:{"doc-component":u.default}},t.exports=e.default},690:function(t,e){}});