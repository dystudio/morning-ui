!function(n){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],l=0,p=[];l<c.length;l++)a=c[l],o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r]);for(f&&f(t);p.length;)p.shift()();return u.push.apply(u,s||[]),e()}function e(){for(var n,t=0;t<u.length;t++){for(var e=u[t],r=!0,c=1;c<e.length;c++){var i=e[c];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),n=a(a.s=e[0]))}return n}var r={},o={63:0};var u=[];function a(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=n,a.c=r,a.d=function(n,t,e){a.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},a.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},a.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},a.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var f=i;u.push([379,0]),e()}({1:function(n,t){n.exports=Vue},185:function(n,t,e){"use strict";e.d(t,"a",function(){return r}),e.d(t,"b",function(){return o});var r=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 着重文本 `<ui-strong>`\n\n<doc-component-status page="strong"></doc-component-status>\n\n[[[开始]]]\n\n标记一段着重内容，这是一个内联元素。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-strong>着重文本</ui-strong>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/strong/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0},378:function(n,t,e){"use strict";e.r(t);var r=e(66),o=e.n(r);for(var u in r)"default"!==u&&function(n){e.d(t,n,function(){return r[n]})}(u);var a=e(185),c=e(0),i=!1;var s=function(n){i||e(781)},f=Object(c.a)(o.a,a.a,a.b,!1,s,null,null);f.options.__file="src/docs/pages/component/strong/index.vue",t.default=f.exports},379:function(n,t,e){"use strict";var r=u(e(1)),o=u(e(378));function u(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},66:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=e(2),u=(r=o)&&r.__esModule?r:{default:r};t.default={data:function(){return{page:"strong"}},components:{"doc-component":u.default}},n.exports=t.default},781:function(n,t){}});