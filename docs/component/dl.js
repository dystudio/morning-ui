!function(n){function t(t){for(var r,u,i=t[0],a=t[1],l=t[2],c=0,f=[];c<i.length;c++)u=i[c],d[u]&&f.push(d[u][0]),d[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r]);for(s&&s(t);f.length;)f.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var n,t=0;t<o.length;t++){for(var e=o[t],r=!0,i=1;i<e.length;i++){var a=e[i];0!==d[a]&&(r=!1)}r&&(o.splice(t--,1),n=u(u.s=e[0]))}return n}var r={},d={28:0},o=[];function u(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=n,u.c=r,u.d=function(n,t,e){u.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,t){if(1&t&&(n=u(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)u.d(e,r,function(t){return n[t]}.bind(null,r));return e},u.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(t,"a",t),t},u.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},u.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=a;o.push([754,0]),e()}({1:function(n,t){n.exports=Vue},188:function(n,t,e){"use strict";e.r(t);var r=e(189),d=e.n(r);for(var o in r)"default"!==o&&function(n){e.d(t,n,function(){return r[n]})}(o);t.default=d.a},189:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,d=e(2),o=(r=d)&&r.__esModule?r:{default:r};t.default={data:function(){return{page:"dl"}},components:{"doc-component":o.default}},n.exports=t.default},289:function(n,t,e){"use strict";var r=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 描述列表 `<ui-dl>`\n\n<doc-component-status page="dl"></doc-component-status>\n\n[[[开始]]]\n\n定义一个描述列表，不支持嵌套，列表中每一项包含两个标签`<dt>`和`<dd>`。\n\n描述列表是一个块级元素。\n\n描述列表支持多种布局样式，可以通过额外的`class`来使用。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-dl>\n    <dt>Foo</dt>\n    <dd>this is detail of foo</dd>\n    <dt>Bar</dt>\n    <dd>this is detail of bar</dd>\n</ui-dl>\n:::\n\n:::vue\n@name:水平排列布局\n---\n#demo\n>desc\n通过添加`horizontal`可以实现水平排列布局。\n>tpl\n<ui-dl class="horizontal">\n    <dt>Horizon</dt>\n    <dd>this is horizontal ui-dl</dd>\n    <dt>Horizon</dt>\n    <dd>this is horizontal ui-dl</dd>\n</ui-dl>\n:::\n\n:::vue\n@name:下划线布局\n---\n#demo\n>desc\n通过添加`underline`可以添加下划线。\n>tpl\n<ui-dl class="underline">\n    <dt>Underline</dt>\n    <dd>this is underline ui-dl</dd>\n    <dt>Underline</dt>\n    <dd>this is underline ui-dl</dd>\n</ui-dl>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n:::vue\n@layout:state-na\n---\n<ui-dl state="{$stateKey}">\n    <dt>{$&stateName}</dt>\n    <dd>this is normal ui-dl</dd>\n    <dt>{$&stateName}</dt>\n    <dd>this is normal ui-dl</dd>\n</ui-dl>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/dl/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},d=[];r._withStripped=!0,e.d(t,"a",function(){return r}),e.d(t,"b",function(){return d})},754:function(n,t,e){"use strict";var r=o(e(1)),d=o(e(755));function o(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(d.default)}})},755:function(n,t,e){"use strict";e.r(t);var r=e(289),d=e(188);for(var o in d)"default"!==o&&function(n){e.d(t,n,function(){return d[n]})}(o);var u=e(0),i=Object(u.a)(d.default,r.a,r.b,!1,null,null,null);i.options.__file="src/docs/pages/component/dl/index.vue",t.default=i.exports}});