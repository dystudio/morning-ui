!function(n){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],p=0,d=[];p<s.length;p++)o=s[p],i[o]&&d.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(a&&a(t);d.length;)d.shift()();return u.push.apply(u,l||[]),e()}function e(){for(var n,t=0;t<u.length;t++){for(var e=u[t],r=!0,s=1;s<e.length;s++){var c=e[s];0!==i[c]&&(r=!1)}r&&(u.splice(t--,1),n=o(o.s=e[0]))}return n}var r={},i={76:0};var u=[];function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=r,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},o.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var a=c;u.push([369,0]),e()}({1:function(n,t){n.exports=Vue},180:function(n,t,e){"use strict";e.d(t,"a",function(){return r}),e.d(t,"b",function(){return i});var r=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n\n# 介绍\n\n### Morning UI是什么？\n\nMorning UI是一套桌面Web端的UI库，基于[Vue.js](https://vuejs.org/)。\n\n### 快速开始\n\n首先确保你的页面采用了Vue.js，然后只需简单三步即可使用Morning UI:\n\n1. 首先[获取Morning UI](/guide/install.html)，并在页面中引用Vue.js以及Morning UI的JS和CSS：\n    - `<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue">&lt;/script>`\n    - `<script type="text/javascript" src="path-to-morning/morning-ui.js">&lt;/script>`\n    - `<style rel="stylesheet" link="path-to-morning/morning-ui.css">&lt;/style>`\n2. 在Vue的模板中使用组件： `<ui-btn>Hello Mroning.</ui-btn>`\n3. 初始化Morning UI及Vue模板：\n\n```js\nVue.use(morning);\nnew Vue({\n    el : \'#vue-template\'\n});\n```\n\n完整的代码如下：\n\n```html\n<html>\n    <head>\n        \x3c!-- ... --\x3e\n        \x3c!-- 引入Morning UI的css --\x3e\n        <style rel="stylesheet" link="path-to-morning/morning-ui.css">&lt;/style>\n    </head>\n    <body>\n        \x3c!-- 引入Vue.js和Morning UI的js  --\x3e\n        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue">&lt;/script>\n        <script type="text/javascript" src="path-to-morning/morning-ui.js">&lt;/script>\n\n        \x3c!-- 在Vue的模板中使用组件 --\x3e\n        <div id="vue-template">\n            <ui-btn>Hello Mroning.</ui-btn>\n        </div>\n\n        \x3c!-- 初始化Morning UI及Vue模板 --\x3e\n        <script type="text/javascript">\n        Vue.use(morning);\n        new Vue({\n            el : \'#vue-template\'\n        });\n        &lt;/script>\n    </body>\n</html>\n```\n\n然后即可看到：\n\n<ui-btn>Hello Mroning.</ui-btn>\n\n恭喜你使用了第一个Morning UI组件。\n\n> 注意：请使用2.5.4版本以上的Vue\n\n### 接下来\n\n通过CDN、Webpack或更多途径使用Morning UI，见：[安装](/guide/install.html)\n\n使用Morning UI的更多特性，见：[使用](/guide/usage.html)\n\n为Morning UI贡献自己的力量，见：[成为贡献者](/guide/becontributor.html)\n\n')])])},i=[];r._withStripped=!0},368:function(n,t,e){"use strict";e.r(t);var r=e(80),i=e.n(r);for(var u in r)"default"!==u&&function(n){e.d(t,n,function(){return r[n]})}(u);var o=e(180),s=e(0),c=!1;var l=function(n){c||e(732)},a=Object(s.a)(i.a,o.a,o.b,!1,l,null,null);a.options.__file="src/docs/pages/guide/introduction/index.vue",t.default=a.exports},369:function(n,t,e){"use strict";var r=u(e(1)),i=u(e(368));function u(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(i.default)}})},732:function(n,t){},80:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=e(3),u=(r=i)&&r.__esModule?r:{default:r};t.default={data:function(){return{page:"introduction"}},components:{"doc-guide":u.default}},n.exports=t.default}});