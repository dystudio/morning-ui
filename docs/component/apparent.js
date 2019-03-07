!function(n){function e(e){for(var r,i,u=e[0],l=e[1],c=e[2],s=0,d=[];s<u.length;s++)i=u[s],a[i]&&d.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(n[r]=l[r]);for(p&&p(e);d.length;)d.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],r=!0,u=1;u<t.length;u++){var l=t[u];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},a={4:0},o=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var p=l;o.push([827,0]),t()}({1:function(n,e){n.exports=Vue},246:function(n,e,t){"use strict";t.r(e);var r=t(247),a=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,function(){return r[n]})}(o);e.default=a.a},247:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,a=t(2),o=(r=a)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"apparent"}},components:{"doc-component":o.default}},n.exports=e.default},262:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 醒目内容 `<ui-apparent>`\n\n<doc-component-status page="apparent"></doc-component-status>\n\n[[[开始]]]\n\n定义醒目的内容，这是一个内联元素。\n\n此组件作为无醒目状态组件以及HTML元素的补充，若组件自带醒目状态请使用组件自身状态。\n\n:::vue\n@name:使用\n---\n#demo\n>desc\n由于`ui-apparent`需要配合其他元素使用，因此你可以通过样式类来修改它的元素类型：\n<br><br>\n- `inline` : 内联元素(默认)\n- `inline-block` : 内联块元素\n- `block` : 块级元素\n>tpl\n<ui-apparent>醒目内容</ui-apparent>\n:::\n\n:::vue\n@name:配合内联元素\n---\n#demo\n>desc\n配合内联元素使用时，需要添加`inline`类。\n>tpl\n<ui-apparent class="inline">\n    <span>This is inline element</span>\n</ui-apparent>\n:::\n\n:::vue\n@name:配合内联块元素\n---\n#demo\n>desc\n配合内联块元素使用时，需要添加`inline-block`类。\n>tpl\n<ui-apparent class="inline-block">\n    <div style="background:#eee;display:inline-block">\n        This is inline-block element\n    </div>\n</ui-apparent>\n:::\n\n:::vue\n@name:配合块级元素\n---\n#demo\n>desc\n配合块元素使用时，需要添加`block`类。\n>tpl\n<ui-apparent class="block">\n    <div style="width:200px;height:50px;background:#eee;">\n        This is block element\n    </div>\n</ui-apparent>\n:::\n\n:::vue\n@name:配合无`apparent`状态组件\n---\n#demo\n>desc\n由于`ui-block`是块级元素，需要为`ui-apparent`添加`block`样式类。\n>tpl\n<ui-apparent class="block">\n    <ui-block>区块</ui-block>\n</ui-apparent>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/apparent/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},a=[];r._withStripped=!0,t.d(e,"a",function(){return r}),t.d(e,"b",function(){return a})},827:function(n,e,t){"use strict";var r=o(t(1)),a=o(t(828));function o(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(a.default)}})},828:function(n,e,t){"use strict";t.r(e);var r=t(262),a=t(246);for(var o in a)"default"!==o&&function(n){t.d(e,n,function(){return a[n]})}(o);var i=t(0),u=Object(i.a)(a.default,r.a,r.b,!1,null,null,null);u.options.__file="src/docs/pages/component/apparent/index.vue",e.default=u.exports}});