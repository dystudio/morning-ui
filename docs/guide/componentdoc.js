!function(n){function t(t){for(var r,c,i=t[0],a=t[1],d=t[2],p=0,l=[];p<i.length;p++)c=i[p],o[c]&&l.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r]);for(f&&f(t);l.length;)l.shift()();return u.push.apply(u,d||[]),e()}function e(){for(var n,t=0;t<u.length;t++){for(var e=u[t],r=!0,i=1;i<e.length;i++){var a=e[i];0!==o[a]&&(r=!1)}r&&(u.splice(t--,1),n=c(c.s=e[0]))}return n}var r={},o={93:0},u=[];function c(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=n,c.c=r,c.d=function(n,t,e){c.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,t){if(1&t&&(n=c(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)c.d(e,r,function(t){return n[t]}.bind(null,r));return e},c.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(t,"a",t),t},c.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},c.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=a;u.push([636,0]),e()}({1:function(n,t){n.exports=Vue},282:function(n,t,e){"use strict";var r=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 查阅文档\n\nMorning UI的每个组件都有文档，可以帮助你更好的使用组件。下面的内容为你介绍了组件文档的内容结构，可以帮助你更好的阅读文档。\n\nMorning UI中包含三类组件：\n\n- 样式组件：只有样式的组件，不包含JS逻辑\n- 交互组件：包含样式及JS逻辑的组件\n- 表单组件：在交互组件的基础上，可以输入/输出值的组件\n\n不同类型的组件文档内容也不一样：\n\n- 样式组件包含：标题、组件状态栏、开始、形态、源码\n- 交互组件包含：标题、组件状态栏、开始、形态、配置、方法、事件、源码\n- 表单组件包含：标题、组件状态栏、开始、形态、配置、方法、事件、表单值、源码\n\n下面拿`多项输入框`组件举例详细介绍这些文档内容，文档地址：[组件/多项输入框](/component/multiinput.html)\n\n## 标题\n\n组件的名称及默认DOM标签。\n\n<img src="https://h0.hucdn.com/open/201744/e2af23248b761b45_1043x123.png" width="540" alt="">\n\n## 组件状态栏\n\n组件的单元/集成测试情况，测试覆盖率。组件最后更新日期、作者、`commid id`以及所有贡献者。\n\n其中单元/集成测试标签中，前面的数字表示通过的测试数量，后面的数字表示测试总数。\n\n<img src="https://h0.hucdn.com/open/201744/815bd2bbc0cf5c7c_809x147.png" width="404" alt="">\n\n## 开始\n\n简单介绍组件，并从组件最简单的用法开始，一一列举组件常见的用法。\n\n<img src="https://h0.hucdn.com/open/201744/06b2eab34c600af0_1625x1160.png" width="812" alt="">\n\n## 形态\n\n组件的形态支持情况，及所有形态的演示。\n\n<img src="https://h0.hucdn.com/open/201744/75da76aa5299a1ac_1619x1371.png" width="809" alt="">\n\n## 配置\n\n组件的配置详情，及配置的演示。\n\n配置详情：\n\n<img src="https://h0.hucdn.com/open/201744/7ffbd85fd965bba4_1623x1116.png" width="811" alt="">\n\n配置的演示：\n\n<img src="https://h0.hucdn.com/open/201744/8ff1598d2430d2ed_1624x438.png" width="812" alt="">\n\n## 方法\n\n组件所有方法的演示及文档。\n\n<img src="https://h0.hucdn.com/open/201744/78388839eea94807_1619x1266.png" width="808" alt="">\n\n## 事件\n\n组件所有的事件演示及文档。\n\n<img src="https://h0.hucdn.com/open/201744/f4d532c2c45a4716_1616x1237.png" width="808" alt="">\n\n## 表单值\n\n组件的值类型、格式、默认值及输入/输出演示。\n\n<img src="https://h0.hucdn.com/open/201744/27a57ff0bb3101f0_1628x877.png" width="814" alt="">\n\n## 源码\n\n组件的`.vue`文件，及测试覆盖情况。\n\n其中红色的部分表示测试未覆盖。\n\n<img src="https://h0.hucdn.com/open/201744/67ead81ed079ad1c_1622x1174.png" width="811" alt="">\n\n')])])},o=[];r._withStripped=!0,e.d(t,"a",function(){return r}),e.d(t,"b",function(){return o})},62:function(n,t,e){"use strict";e.r(t);var r=e(63),o=e.n(r);for(var u in r)"default"!==u&&function(n){e.d(t,n,function(){return r[n]})}(u);t.default=o.a},63:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=e(3),u=(r=o)&&r.__esModule?r:{default:r};t.default={data:function(){return{page:"componentdoc"}},components:{"doc-guide":u.default}},n.exports=t.default},636:function(n,t,e){"use strict";var r=u(e(1)),o=u(e(637));function u(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},637:function(n,t,e){"use strict";e.r(t);var r=e(282),o=e(62);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);var c=e(0),i=Object(c.a)(o.default,r.a,r.b,!1,null,null,null);i.options.__file="src/docs/pages/guide/componentdoc/index.vue",t.default=i.exports}});