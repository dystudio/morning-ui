!function(n){function t(t){for(var i,o,r=t[0],l=t[1],u=t[2],d=0,v=[];d<r.length;d++)o=r[d],a[o]&&v.push(a[o][0]),a[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(n[i]=l[i]);for(c&&c(t);v.length;)v.shift()();return s.push.apply(s,u||[]),e()}function e(){for(var n,t=0;t<s.length;t++){for(var e=s[t],i=!0,r=1;r<e.length;r++){var l=e[r];0!==a[l]&&(i=!1)}i&&(s.splice(t--,1),n=o(o.s=e[0]))}return n}var i={},a={61:0},s=[];function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=i,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)o.d(e,i,function(t){return n[t]}.bind(null,i));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var c=l;s.push([666,0]),e()}({1:function(n,t){n.exports=Vue},118:function(n,t,e){"use strict";e.r(t);var i=e(119),a=e.n(i);for(var s in i)"default"!==s&&function(n){e.d(t,n,function(){return i[n]})}(s);t.default=a.a},119:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a=e(2),s=(i=a)&&i.__esModule?i:{default:i};t.default={data:function(){return{page:"statistic"}},components:{"doc-component":s.default}},n.exports=t.default},347:function(n,t,e){"use strict";var i=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 统计 `<ui-statistic>`\n\n<doc-component-status page="statistic"></doc-component-status>\n\n[[[开始]]]\n\n定义统计区域，统计包含数值和名称，这是一个内联块标签。\n\n:::vue\n@name:使用\n---\n#demo\n>desc\n统计可包含：\n<br><br>\n- 数值: `.value`\n- 名称: `.label`\n>tpl\n<ui-statistic>\n    <div class="value">5,550</div>\n    <div class="label">downloads</div>\n</ui-statistic>\n:::\n\n:::vue\n@name:带图片统计\n---\n#demo\n>tpl\n<ui-statistic>\n    <div class="value"><img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/><span>5,550</span></div>\n    <div class="label">downloads</div>\n</ui-statistic>\n:::\n\n:::vue\n@name:带图标统计\n---\n#demo\n>tpl\n<ui-statistic>\n    <div class="value"><i class="iconfont">&#xe6e2;</i><span>5,550</span></div>\n    <div class="label">downloads</div>\n</ui-statistic>\n:::\n\n:::vue\n@name:水平名称\n---\n#demo\n>desc\n通过添加`horizontal`类可实现水平的名称。\n>tpl\n<div>\n    <ui-statistic class="horizontal">\n        <div class="value">5,550</div>\n        <div class="label">downloads</div>\n    </ui-statistic>\n\n\n    <ui-statistic class="horizontal">\n        <div class="label">downloads</div>\n        <div class="value">5,550</div>\n    </ui-statistic>\n</div>\n:::\n\n:::vue\n@name:上方名称\n---\n#demo\n>tpl\n<ui-statistic>\n    <div class="label">downloads</div>\n    <div class="value">5,550</div>\n</ui-statistic>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部|`black`|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n:::vue\n@layout:size\n---\n<ui-statistic size="{$sizeKey}">\n    <div class="value">5,550</div>\n    <div class="label">{$&sizeName}</div>\n</ui-statistic>\n:::\n\n:::vue\n@layout:color\n---\n<ui-statistic color="{$colorKey}">\n    <div class="value">5,550</div>\n    <div class="label">{$&colorName}</div>\n</ui-statistic>\n:::\n\n:::vue\n@layout:state-na\n---\n<ui-statistic state="{$stateKey}">\n    <div class="value">5,550</div>\n    <div class="label">{$&stateName}</div>\n</ui-statistic>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/statistic/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},a=[];i._withStripped=!0,e.d(t,"a",function(){return i}),e.d(t,"b",function(){return a})},666:function(n,t,e){"use strict";var i=s(e(1)),a=s(e(667));function s(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(a.default)}})},667:function(n,t,e){"use strict";e.r(t);var i=e(347),a=e(118);for(var s in a)"default"!==s&&function(n){e.d(t,n,function(){return a[n]})}(s);var o=e(0),r=Object(o.a)(a.default,i.a,i.b,!1,null,null,null);r.options.__file="src/docs/pages/component/statistic/index.vue",t.default=r.exports}});