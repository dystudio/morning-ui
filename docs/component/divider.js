!function(n){function e(e){for(var i,o,u=e[0],l=e[1],c=e[2],a=0,p=[];a<u.length;a++)o=u[a],r[o]&&p.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(n[i]=l[i]);for(s&&s(e);p.length;)p.shift()();return d.push.apply(d,c||[]),t()}function t(){for(var n,e=0;e<d.length;e++){for(var t=d[e],i=!0,u=1;u<t.length;u++){var l=t[u];0!==r[l]&&(i=!1)}i&&(d.splice(e--,1),n=o(o.s=t[0]))}return n}var i={},r={29:0},d=[];function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=i,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)o.d(t,i,function(e){return n[e]}.bind(null,i));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var s=l;d.push([782,0]),t()}({1:function(n,e){n.exports=Vue},198:function(n,e,t){"use strict";t.r(e);var i=t(199),r=t.n(i);for(var d in i)"default"!==d&&function(n){t.d(e,n,function(){return i[n]})}(d);e.default=r.a},199:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(2),d=(i=r)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"divider"}},components:{"doc-component":d.default}},n.exports=e.default},301:function(n,e,t){"use strict";var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 分频器 `<ui-divider>`\n\n<doc-component-status page="divider"></doc-component-status>\n\n[[[开始]]]\n\n定义一个分频器，分频器用来区分一个区块内的左右或上下两部分。\n\n分频器常配合`ui-grid`使用。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:500px;height:300px;border:1px solid #eee;">\n    <ui-grid class="fill">\n        <div class="row">\n            <div class="col-11">\n                <ui-center class="fill"><p>LEFT</p></ui-center>\n            </div>\n            <div class="col-2">\n                <ui-divider>OR</ui-divider>\n            </div>\n            <div class="col-11">\n                <ui-center class="fill"><p>RIGHT</p></ui-center>\n            </div>\n        </div>\n    </ui-grid>\n</div>\n:::\n\n:::vue\n@name:竖直的分频器\n---\n#demo\n>desc\n添加`vertical`类可使用竖直的分频器。\n>tpl\n<div style="width:500px;height:300px;border:1px solid #eee;">\n    <div style="width:100%;height:140px;">\n        <ui-center class="fill"><p>TOP</p></ui-center>\n    </div>\n    <div style="width:100%;height:20px;">\n        <ui-divider class="vertical">OR</ui-divider>\n    </div>\n    <div style="width:100%;height:140px;">\n        <ui-center class="fill"><p>BOTTOM</p></ui-center>\n    </div>\n</div>\n:::\n\n:::vue\n@name:无内容的分频器\n---\n#demo\n>tpl\n<div style="width:500px;height:300px;border:1px solid #eee;">\n    <ui-grid class="fill">\n        <div class="row">\n            <div class="col-11">\n                <ui-center class="fill"><p>LEFT</p></ui-center>\n            </div>\n            <div class="col-2">\n                <ui-divider></ui-divider>\n            </div>\n            <div class="col-11">\n                <ui-center class="fill"><p>RIGHT</p></ui-center>\n            </div>\n        </div>\n    </ui-grid>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/divider/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},r=[];i._withStripped=!0,t.d(e,"a",function(){return i}),t.d(e,"b",function(){return r})},782:function(n,e,t){"use strict";var i=d(t(1)),r=d(t(783));function d(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(r.default)}})},783:function(n,e,t){"use strict";t.r(e);var i=t(301),r=t(198);for(var d in r)"default"!==d&&function(n){t.d(e,n,function(){return r[n]})}(d);var o=t(0),u=Object(o.a)(r.default,i.a,i.b,!1,null,null,null);u.options.__file="src/docs/pages/component/divider/index.vue",e.default=u.exports}});