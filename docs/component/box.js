!function(n){function e(e){for(var r,i,a=e[0],l=e[1],c=e[2],s=0,f=[];s<a.length;s++)i=a[s],o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(n[r]=l[r]);for(d&&d(e);f.length;)f.shift()();return u.push.apply(u,c||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],r=!0,a=1;a<t.length;a++){var l=t[a];0!==o[l]&&(r=!1)}r&&(u.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},o={11:0},u=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var d=l;u.push([827,0]),t()}({1:function(n,e){n.exports=Vue},238:function(n,e,t){"use strict";t.r(e);var r=t(239),o=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,function(){return r[n]})}(u);e.default=o.a},239:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(2),u=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"box"}},components:{"doc-component":u.default}},n.exports=e.default},370:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 容器 `<ui-box>`\n\n<doc-component-status page="box"></doc-component-status>\n\n[[[开始]]]\n\n定义一个容器，`ui-box`常用来作为最外部的容器，容器是块级元素。\n\n容器默认高度是自适应的。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:400px;height:200px;">\n    <ui-box style="background-color:#e0e0e0">\n        容器\n    </ui-box>\n</div>\n:::\n\n:::vue\n@name:有边距的容器\n---\n#demo\n>tpl\n<div style="width:400px;height:200px;">\n    <ui-box class="margin" style="background-color:#e0e0e0">\n        有边距的容器\n    </ui-box>\n</div>\n:::\n\n:::vue\n@name:填满的容器\n---\n#demo\n>desc\n填满的容器高度为100%。\n>tpl\n<div>\n    <div style="width:400px;height:200px;">\n        <ui-box class="fill" style="background-color:#e0e0e0">\n            填满的容器\n        </ui-box>\n    </div>\n    \n    <br>\n\n    <div style="width:400px;height:200px;">\n        <ui-box class="margin fill" style="background-color:#e0e0e0">\n            有边距填满的容器\n        </ui-box>\n    </div>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/box/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0,t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o})},827:function(n,e,t){"use strict";var r=u(t(1)),o=u(t(828));function u(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},828:function(n,e,t){"use strict";t.r(e);var r=t(370),o=t(238);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);var i=t(0),a=Object(i.a)(o.default,r.a,r.b,!1,null,null,null);a.options.__file="src/docs/pages/component/box/index.vue",e.default=a.exports}});