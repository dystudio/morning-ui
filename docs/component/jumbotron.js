!function(n){function t(t){for(var r,i,a=t[0],c=t[1],l=t[2],s=0,d=[];s<a.length;s++)i=a[s],o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(f&&f(t);d.length;)d.shift()();return u.push.apply(u,l||[]),e()}function e(){for(var n,t=0;t<u.length;t++){for(var e=u[t],r=!0,a=1;a<e.length;a++){var c=e[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),n=i(i.s=e[0]))}return n}var r={},o={40:0},u=[];function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=r,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)i.d(e,r,function(t){return n[t]}.bind(null,r));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var f=c;u.push([708,0]),e()}({1:function(n,t){n.exports=Vue},160:function(n,t,e){"use strict";e.r(t);var r=e(161),o=e.n(r);for(var u in r)"default"!==u&&function(n){e.d(t,n,function(){return r[n]})}(u);t.default=o.a},161:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=e(2),u=(r=o)&&r.__esModule?r:{default:r};t.default={data:function(){return{page:"jumbotron"}},components:{"doc-component":u.default}},n.exports=t.default},309:function(n,t,e){"use strict";var r=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 巨幕 `<ui-jumbotron>`\n\n<doc-component-status page="jumbotron"></doc-component-status>\n\n[[[开始]]]\n\n定义一个巨幕，巨幕包含标题、内容和一组按钮或链接，巨幕往往用来定义一个显眼的行动区域。\n\n:::vue\n@name:使用\n---\n#demo\n>desc\n巨幕可包含：\n<br><br>\n- 标题: `h1`\n- 说明: `p`\n- 行动区域\n>tpl\n<ui-jumbotron>\n    <h1>标题</h1>\n    <p>这个一个介绍区域，用来放置一些介绍内容。<br>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n    <ui-btn size="m">行动</ui-btn> &nbsp;\n    <ui-link color="minor" size="m">查看更多</ui-link>\n</ui-jumbotron>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/jumbotron/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0,e.d(t,"a",function(){return r}),e.d(t,"b",function(){return o})},708:function(n,t,e){"use strict";var r=u(e(1)),o=u(e(709));function u(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},709:function(n,t,e){"use strict";e.r(t);var r=e(309),o=e(160);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);var i=e(0),a=Object(i.a)(o.default,r.a,r.b,!1,null,null,null);a.options.__file="src/docs/pages/component/jumbotron/index.vue",t.default=a.exports}});