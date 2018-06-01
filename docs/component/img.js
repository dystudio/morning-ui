!function(n){function t(t){for(var i,c,o=t[0],a=t[1],d=t[2],p=0,l=[];p<o.length;p++)c=o[p],r[c]&&l.push(r[c][0]),r[c]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i]);for(s&&s(t);l.length;)l.shift()();return u.push.apply(u,d||[]),e()}function e(){for(var n,t=0;t<u.length;t++){for(var e=u[t],i=!0,o=1;o<e.length;o++){var a=e[o];0!==r[a]&&(i=!1)}i&&(u.splice(t--,1),n=c(c.s=e[0]))}return n}var i={},r={31:0};var u=[];function c(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=n,c.c=i,c.d=function(n,t,e){c.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},c.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},c.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(t,"a",t),t},c.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},c.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var s=a;u.push([287,0]),e()}({1:function(n,t){n.exports=Vue},139:function(n,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"b",function(){return r});var i=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 图片 `<ui-img>`\n\n<doc-component-status page="img"></doc-component-status>\n\n[[[开始]]]\n\n定义图片容器，支持三种不同形状的图片，可为图片添加文字说明。\n\n`ui-img`仅支持下面这些属性：\n\n- src : 图片地址\n- width : 图片宽度\n- height : 图片高度\n- alt : 图片加载失败显示内容\n- title : 图标标题\n\n#### 使用\n\n:::democode/html\n<ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n:::\n\n#### 带文字说明图片\n\n:::democode/html\n<ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg">说明文字</ui-img>\n:::\n\n#### 不同形状\n\n支持三种：\n\n- `round` : 圆角\n- `circle` : 圆形\n- `thumbnail` : 相框\n\n:::democode/html\n<ui-img class="round" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n<ui-img class="circle" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n<ui-img class="thumbnail" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n:::\n\n#### 支持的属性\n\n:::democode/html\n\x3c!-- 添加width属性，自动设置图片宽度 --\x3e\n<ui-img width="130" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n\n\x3c!-- 添加height属性，自动设置图片高度 --\x3e\n<ui-img height="150" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n\n\x3c!-- 添加title属性，自动设置图片title --\x3e\n<ui-img title="这里是title" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n\n\x3c!-- 添加alt属性，自动设置图片alt属性，当图片无法显示时候，显示alt内容。 --\x3e\n<ui-img alt="这里是alt" src="https://d13yacurqjgar.cloudfront.net/noimg.jpeg"></ui-img>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/img/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},r=[];i._withStripped=!0},286:function(n,t,e){"use strict";e.r(t);var i=e(34),r=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);var c=e(139),o=e(0),a=!1;var d=function(n){a||e(660)},s=Object(o.a)(r.a,c.a,c.b,!1,d,null,null);s.options.__file="src/docs/pages/component/img/index.vue",t.default=s.exports},287:function(n,t,e){"use strict";var i=u(e(1)),r=u(e(286));function u(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(r.default)}})},34:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=e(2),u=(i=r)&&i.__esModule?i:{default:i};t.default={data:function(){return{page:"img"}},components:{"doc-component":u.default}},n.exports=t.default},660:function(n,t){}});