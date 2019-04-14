!function(n){function e(e){for(var o,i,c=e[0],a=e[1],l=e[2],s=0,f=[];s<c.length;s++)i=c[s],r[i]&&f.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o]);for(d&&d(e);f.length;)f.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],o=!0,c=1;c<t.length;c++){var a=t[c];0!==r[a]&&(o=!1)}o&&(u.splice(e--,1),n=i(i.s=t[0]))}return n}var o={},r={101:0},u=[];function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)i.d(t,o,function(e){return n[e]}.bind(null,o));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=a;u.push([644,0]),t()}({1:function(n,e){n.exports=Vue},280:function(n,e,t){"use strict";var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 事件\n\n组件改变状态时会触发事件，通过监听事件，外部逻辑可以响应组件的变化。\n\n事件包含三类：\n\n- 生命周期事件 : 基于Vue生命周期的钩子函数，所有组件都支持。\n- 值变更事件 : 只有表单组件有，并且所有的表单组件都支持，当表单的数值发生变化时触发。\n- 组件事件 : 只有交互及表单组件有，每个组件根据的自身情况触发的事件。\n\n所有的事件都需要遵循全局命名规范。\n\n## 监听事件\n\n组件的事件监听，基于Vue的自定义事件，你可以在模板中通过`v-on`指令监听事件：\n\n:::vue\n#demo\n>tpl\n<div>\n    \x3c!-- 监听emit事件，并调用echo方法 --\x3e\n    <ui-btn v-on:emit=\"echo\">监听emit事件</ui-btn>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log('demo1.console1', 'emit event!');\n        }\n    }\n}\n:::\n\n#### v-on缩写\n\n你也可以通过`@`来缩写`v-on`用法：\n\n:::vue\n#demo\n>tpl\n<div>\n    \x3c!-- 监听emit事件，并调用echo方法 --\x3e\n    <ui-btn @emit=\"echo\">监听emit事件</ui-btn>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log('demo2.console1', 'emit event!');\n        }\n    }\n}\n:::\n\n#### $on监听\n\n你还可以通过组件vm上的`$on`方法来监听事件：\n\n:::vue\n#demo\n>tpl\n<div>\n    <ui-btn ref=\"demo3\">监听emit事件</ui-btn>\n</div>\n>script\n{\n    mounted : function () {\n\n        // 通过$on监听事件\n        window.morning.findVM('demo3').$on('emit', () => {\n            console.log('demo3.console1', 'emit event!');\n        });\n\n    }\n}\n:::\n\n你可以查看[Vue/事件处理](https://vuejs.org/v2/guide/events.html)获取更多细节，但是需要注意Vue中的事件修饰符、键值修饰符、鼠标按钮修饰符等特性在MorningUI的组件事件中并不支持，仅支持原生事件。\n\n#### 原生事件\n\n可以通过`.native`修饰符来为Morning UI的组件绑定原生事件，详见：[Vue/将原生事件绑定到组件](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6)\n\n## 生命周期事件\n\n组件的生命周期事件是Vue生命周期钩子函数的子集，所有组件都支持，包含：\n\n- `created` : 创建之后\n- `mounted` : 挂载之后\n- `before-update` : 更新之前\n- `updated` : 更新之后\n- `before-destroy` : 销毁之前\n\n通过生命周期事件，可以让组件在不同周期中执行父vm的逻辑。\n\n## 值变更事件\n\n表单组件的值发生变化时会触发值变更事件：`value-change`。\n\n## 组件事件\n\n组件事件是不同组件根据自身的情况支持的额外事件，仅交互和表单组件支持，每个都有不同的组件事件，你可以在组件文档中查看该组件支持的事件及触发时机。\n\n## 事件全局命名规范\n\n事件在全局有一套命名规范，这样是为了防止不同的组件对于某个名词理解不同，导致同一名词在不同组件的不同行为。\n\n由于Vue支持in-DOM template，所以请勿使用驼峰法命名事件名称，这是因为在HTML的标签中属性名不区分大小写。\n\n在为组件添加事件前应先检查下面的列表，是否有含义相同的事件，若有请使用，若没有请将新的事件添加到下面列表并注明它的含义。\n\n- `created` : 创建之后\n- `mounted` : 挂载之后\n- `before-update` : 更新之前\n- `updated` : 更新之后\n- `before-destroy` : 销毁之前\n- `emit` : 组件被触发\n- `switch` : 切换\n- `show` : 显示\n- `hide` : 隐藏\n- `done` : 完成\n- `fail` : 失败\n- `value-change` : 表单值改变\n- `focus` : 表单聚焦\n- `blur` : 表单失焦\n- `list-show` : 列表显示\n- `list-hide` : 列表隐藏\n- `input-value-change` : 输入框值变化\n- `input-focus` : 输入框聚焦\n- `input-blur` : 输入框失焦\n- `list-change` : 列表数值变化\n- `push` : 推送\n- `close` : 关闭\n- `change` : 改变\n- `month-change` : 月份改变\n- `year-change` : 年份改变\n- `highlight` : 高亮变化\n- `search` : 搜索\n- `play` : 播放\n- `pause` : 暂停\n- `play-change` : 播放状态改变\n- `mute-change` : 静音状态改变\n- `volume-change` : 音量改变\n- `fullscreen-change` : 全屏状态改变\n- `selection-change` : 选取改变\n- `show-picker` : 显示选择器\n- `hide-picker` : 隐藏选择器\n- `hue-slider-change` : HUE选择器变化\n- `alpha-slider-change` : 透明度选择器变化\n- `input-type-change` : 输入类型变化\n- `node-emit` : 节点触发\n- `node-fold` : 节点折叠\n- `node-unfold` : 节点展开\n- `rating` : 评分\n\n")])])},r=[];o._withStripped=!0,t.d(e,"a",function(){return o}),t.d(e,"b",function(){return r})},56:function(n,e,t){"use strict";t.r(e);var o=t(57),r=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);e.default=r.a},57:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=t(3),u=(o=r)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"event"}},components:{"doc-guide":u.default}},n.exports=e.default},644:function(n,e,t){"use strict";var o=u(t(1)),r=u(t(645));function u(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(r.default)}})},645:function(n,e,t){"use strict";t.r(e);var o=t(280),r=t(56);for(var u in r)"default"!==u&&function(n){t.d(e,n,function(){return r[n]})}(u);var i=t(0),c=Object(i.a)(r.default,o.a,o.b,!1,null,null,null);c.options.__file="src/docs/pages/guide/event/index.vue",e.default=c.exports}});