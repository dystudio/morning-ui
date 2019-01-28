!function(n){function t(t){for(var i,r,b=t[0],a=t[1],s=t[2],c=0,l=[];c<b.length;c++)r=b[c],e[r]&&l.push(e[r][0]),e[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i]);for(p&&p(t);l.length;)l.shift()();return o.push.apply(o,s||[]),u()}function u(){for(var n,t=0;t<o.length;t++){for(var u=o[t],i=!0,b=1;b<u.length;b++){var a=u[b];0!==e[a]&&(i=!1)}i&&(o.splice(t--,1),n=r(r.s=u[0]))}return n}var i={},e={12:0};var o=[];function r(t){if(i[t])return i[t].exports;var u=i[t]={i:t,l:!1,exports:{}};return n[t].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=n,r.c=i,r.d=function(n,t,u){r.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:u})},r.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="/";var b=window.webpackJsonp=window.webpackJsonp||[],a=b.push.bind(b);b.push=t,b=b.slice();for(var s=0;s<b.length;s++)t(b[s]);var p=a;o.push([277,0]),u()}({1:function(n,t){n.exports=Vue},134:function(n,t,u){"use strict";u.d(t,"a",function(){return i}),u.d(t,"b",function(){return e});var i=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 按钮组 `<ui-btngroup>`\n\n<doc-component-status page="em"></doc-component-status>\n\n[[[开始]]]\n\n定义一个按钮组，按钮组可以通过特定的HTML结构格式化按钮。\n\n按钮组默认水平排列。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-btngroup>\n    <ui-btn>按钮一</ui-btn>\n    <ui-btn>按钮二</ui-btn>\n    <ui-btn>按钮三</ui-btn>\n    <ui-btn>按钮四</ui-btn>\n</ui-btngroup>\n:::\n\n:::vue\n@name:水平排列示例\n---\n#demo\n>desc\n添加`horizontal`样式类可以实现按钮水平排列。\n>tpl\n<ui-btngroup class="horizontal">\n    <ui-btn>按钮一</ui-btn>\n    <ui-btn>按钮二</ui-btn>\n    <ui-btn>按钮三</ui-btn>\n    <ui-btn>按钮四</ui-btn>\n</ui-btngroup>\n:::\n\n:::vue\n@name:垂直排列示例\n---\n#demo\n>desc\n添加`vertical`样式类可以实现按钮垂直排列。\n>tpl\n<ui-btngroup class="vertical">\n    <ui-btn>按钮一</ui-btn>\n    <ui-btn>按钮二</ui-btn>\n    <ui-btn>按钮三</ui-btn>\n    <ui-btn>按钮四</ui-btn>\n</ui-btngroup>\n:::\n\n:::vue\n@name:无间隔按钮组\n---\n#demo\n>desc\n添加`nogap`样式类可以实现无间隔按钮组。\n>tpl\n<div>\n    <ui-btngroup class="nogap">\n        <ui-btn color="success">确认</ui-btn>\n        <ui-btn color="minor">取消</ui-btn>\n    </ui-btngroup>\n\n    <br/><br/>\n\n    <ui-btngroup class="vertical nogap">\n        <ui-btn color="success">确认</ui-btn>\n        <ui-btn color="minor">取消</ui-btn>\n    </ui-btngroup>\n</div>\n:::\n\n:::vue\n@name:分隔按钮组\n---\n#demo\n>desc\n添加`split`样式类按钮之间可以插入文本分隔。\n>tpl\n<div>\n    <ui-btngroup class="split">\n        <ui-btn color="success">确认</ui-btn>\n        <span>或</span>\n        <ui-btn color="minor">取消</ui-btn>\n    </ui-btngroup>\n\n    <br><br>\n\n    <ui-btngroup class="split">\n        <ui-btn color="minor">选择一</ui-btn>\n        <span>或</span>\n        <ui-btn color="minor">选择二</ui-btn>\n        <span>或</span>\n        <ui-btn info>热门选择</ui-btn>\n    </ui-btngroup>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n:::vue\n@name:组合不同的形态\n---\n#demo\n>desc\n按钮组不支持形态，但可通过`ui-btn`自身的形态来控制。\n<br><br>\n这也意味着你可以组合不同形态的按钮，这是一个十分有用的特性。\n>tpl\n<div>\n    <p>不同尺寸组合</p>\n    <ui-btngroup>\n        <ui-btn size="l">按钮一</ui-btn>\n        <ui-btn size="m" color="minor">按钮二</ui-btn>\n    </ui-btngroup>\n\n    <br><br>\n\n    <p>不同色彩组合</p>\n    <ui-btngroup>\n        <ui-btn color="success">按钮一</ui-btn>\n        <ui-btn color="minor">按钮二</ui-btn>\n    </ui-btngroup>\n\n    <br><br>\n\n    <p>不同状态组合</p>\n    <ui-btngroup>\n        <ui-btn state="normal" color="minor">按钮一</ui-btn>\n        <ui-btn state="apparent">按钮二</ui-btn>\n    </ui-btngroup>\n\n    <br><br>\n\n    <ui-btngroup>\n        <ui-btn state="normal">按钮一</ui-btn>\n        <ui-btn state="disabled">按钮二</ui-btn>\n    </ui-btngroup>\n</div>\n:::\n\n#### `ui-btn`尺寸\n\n`ui-btngroup`本身不支持尺寸，可以使用`ui-btn`来设置尺寸。\n\n:::vue\n@layout:size\n---\n<ui-btngroup>\n    <ui-btn size="{$sizeKey}">{$&sizeName}</ui-btn>\n    <ui-btn size="{$sizeKey}">{$&sizeName}</ui-btn>\n</ui-btngroup>\n\n<br><br>\n:::\n\n#### `ui-btn`色彩\n\n`ui-btngroup`本身不支持色彩，可以使用`ui-btn`来设置色彩。\n\n:::vue\n@layout:color\n---\n<ui-btngroup>\n    <ui-btn color="{$colorKey}">{$&colorName}</ui-btn>\n    <ui-btn color="{$colorKey}">{$&colorName}</ui-btn>\n</ui-btngroup>\n\n<br><br>\n:::\n\n#### `ui-btn`状态\n\n`ui-btngroup`本身不支持状态，可以使用`ui-btn`来设置状态。\n\n:::vue\n@layout:state-na\n---\n<ui-btngroup>\n    <ui-btn state="{$stateKey}">{$&stateName}</ui-btn>\n    <ui-btn state="{$stateKey}">{$&stateName}</ui-btn>\n</ui-btngroup>\n\n<br><br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/em/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},e=[];i._withStripped=!0},15:function(n,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,e=u(2),o=(i=e)&&i.__esModule?i:{default:i};t.default={data:function(){return{page:"btngroup"}},components:{"doc-component":o.default}},n.exports=t.default},276:function(n,t,u){"use strict";u.r(t);var i=u(15),e=u.n(i);for(var o in i)"default"!==o&&function(n){u.d(t,n,function(){return i[n]})}(o);var r=u(134),b=u(0),a=!1;var s=function(n){a||u(679)},p=Object(b.a)(e.a,r.a,r.b,!1,s,null,null);p.options.__file="src/docs/pages/component/btngroup/index.vue",t.default=p.exports},277:function(n,t,u){"use strict";var i=o(u(1)),e=o(u(276));function o(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(e.default)}})},679:function(n,t){}});