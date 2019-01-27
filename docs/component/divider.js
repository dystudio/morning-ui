!function(n){function e(e){for(var t,u,o=e[0],c=e[1],s=e[2],a=0,p=[];a<o.length;a++)u=o[a],r[u]&&p.push(r[u][0]),r[u]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(n[t]=c[t]);for(l&&l(e);p.length;)p.shift()();return d.push.apply(d,s||[]),i()}function i(){for(var n,e=0;e<d.length;e++){for(var i=d[e],t=!0,o=1;o<i.length;o++){var c=i[o];0!==r[c]&&(t=!1)}t&&(d.splice(e--,1),n=u(u.s=i[0]))}return n}var t={},r={25:0};var d=[];function u(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,u),i.l=!0,i.exports}u.m=n,u.c=t,u.d=function(n,e,i){u.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:i})},u.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var l=c;d.push([299,0]),i()}({1:function(n,e){n.exports=Vue},145:function(n,e,i){"use strict";i.d(e,"a",function(){return t}),i.d(e,"b",function(){return r});var t=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 分频器 `<ui-divider>`\n\n<doc-component-status page="divider"></doc-component-status>\n\n[[[开始]]]\n\n定义一个分频器，分频器用来区分一个区块内的左右或上下两部分。\n\n分频器常配合`ui-grid`使用。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:500px;height:300px;border:1px solid #eee;">\n    <ui-grid class="fill">\n        <div class="c-11">\n            <ui-center class="fill"><p>LEFT</p></ui-center>\n        </div>\n        <div class="c-2">\n            <ui-divider>OR</ui-divider>\n        </div>\n        <div class="c-11">\n            <ui-center class="fill"><p>RIGHT</p></ui-center>\n        </div>\n    </ui-grid>\n</div>\n:::\n\n:::vue\n@name:竖直的分频器\n---\n#demo\n>desc\n添加`vertical`类可使用竖直的分频器。\n>tpl\n<div style="width:500px;height:300px;border:1px solid #eee;">\n    <div style="width:100%;height:140px;">\n        <ui-center class="fill"><p>TOP</p></ui-center>\n    </div>\n    <div style="width:100%;height:20px;">\n        <ui-divider class="vertical">OR</ui-divider>\n    </div>\n    <div style="width:100%;height:140px;">\n        <ui-center class="fill"><p>BOTTOM</p></ui-center>\n    </div>\n</div>\n:::\n\n:::vue\n@name:无内容的分频器\n---\n#demo\n>tpl\n<div style="width:500px;height:300px;border:1px solid #eee;">\n    <ui-grid class="fill">\n        <div class="c-11">\n            <ui-center class="fill"><p>LEFT</p></ui-center>\n        </div>\n        <div class="c-2">\n            <ui-divider></ui-divider>\n        </div>\n        <div class="c-11">\n            <ui-center class="fill"><p>RIGHT</p></ui-center>\n        </div>\n    </ui-grid>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/divider/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},r=[];t._withStripped=!0},28:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t,r=i(2),d=(t=r)&&t.__esModule?t:{default:t};e.default={data:function(){return{page:"divider"}},components:{"doc-component":d.default}},n.exports=e.default},298:function(n,e,i){"use strict";i.r(e);var t=i(28),r=i.n(t);for(var d in t)"default"!==d&&function(n){i.d(e,n,function(){return t[n]})}(d);var u=i(145),o=i(0),c=!1;var s=function(n){c||i(697)},l=Object(o.a)(r.a,u.a,u.b,!1,s,null,null);l.options.__file="src/docs/pages/component/divider/index.vue",e.default=l.exports},299:function(n,e,i){"use strict";var t=d(i(1)),r=d(i(298));function d(n){return n&&n.__esModule?n:{default:n}}new t.default({el:"#root",render:function(n){return n(r.default)}})},697:function(n,e){}});