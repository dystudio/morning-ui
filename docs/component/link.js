!function(n){function e(e){for(var o,l,u=e[0],c=e[1],d=e[2],s=0,m=[];s<u.length;s++)l=u[s],i[l]&&m.push(i[l][0]),i[l]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);for(a&&a(e);m.length;)m.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],o=!0,u=1;u<t.length;u++){var c=t[u];0!==i[c]&&(o=!1)}o&&(r.splice(e--,1),n=l(l.s=t[0]))}return n}var o={},i={35:0};var r=[];function l(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=n,l.c=o,l.d=function(n,e,t){l.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},l.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},l.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(e,"a",e),e},l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},l.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var a=c;r.push([291,0]),t()}({1:function(n,e){n.exports=Vue},141:function(n,e,t){"use strict";t.d(e,"a",function(){return o}),t.d(e,"b",function(){return i});var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 链接 `<ui-link>`\n\n<doc-component-status page="link"></doc-component-status>\n\n[[[开始]]]\n\n定义一个链接，这是一个内联块元素。\n\n#### 使用\n\n:::democode/html\n<ui-link>链接</ui-link>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部|`theme`|\n|状态|全部|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 尺寸\n\n:::repeat/html\nsize\n---\n<ui-link size="{$sizeKey}">{$&sizeName}</ui-link>\n:::\n\n#### 色彩\n\n:::preset/html\nstatusColor\n---\nuikey:link\n:::\n\n#### 状态\n\n:::repeat/html\nstate|br:2|color:theme\nstate|br:2|color:feature\nstate|br:2|color:black\nstate|br:2|color:blue\nstate|br:2|color:silver\nstate|br:2|color:gray\n---\n<ui-link state="{$stateKey}" color="{$colorKey}">{$&stateName}</ui-link>\n:::\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|[link](#link)|链接地址，若为空则不跳转|url地址|String|`\'\'`|\n|[js](#js)|点击后执行JS逻辑|JS代码|String|`\'\'`|\n|[locked](#locked)|锁定模式，用来防止组件在短时间内被重复触发。若设置一个时间数值(ms)，该组件在时间内只触发一次。也可设为`true`，触发后需要通过`unlock()`方法来解锁组件。|`true`<br>`false`<br>数值(单位ms)|Number<br>Boolean|`false`|\n|[new-tab](#new-tab)|是否在新窗口中打开链接|`true`<br>`false`|Boolean|`false`|\n\n#### link\n\n:::democode/html\n<ui-link :link="\'https://www.google.com\'">链接</ui-link>\n:::\n\n#### js\n\n:::democode/html\n<ui-link :js="\'alert(\\\'hello.\\\')\'">执行JS</ui-link>\n:::\n\n#### locked\n\n:::democode/html\n<ui-link :locked="3000">3秒后自动解锁</ui-link>\n:::\n\n:::democode/html\n<ui-link ref="demo1" locked>手动解锁</ui-link>\n<ui-link js="morning.findVM(\'demo1\').unlock();">解锁</ui-link>\n:::\n\n#### new-tab\n\n:::democode/html\n<ui-link new-tab :link="\'https://www.google.com\'">新窗口打开链接</ui-link>\n:::\n\n[[[方法]]]\n\n#### lock([time])\n\n锁定按钮，锁定后按钮不会触发`emit`事件。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|time|YES|解锁的时间，单位ms。设置后组件将在解锁时间后自动解锁，不设置则需要调用`unlock()`方法解锁|`undefined`<br>数值(单位ms)|`Undefined`<br>`Number`|`undefined`|\n\n:::democode/html\n<ui-link ref="demo2">按钮</ui-link>\n<br><br> \n<ui-link js="morning.findVM(\'demo2\').lock();">锁定</ui-link>\n<ui-link js="morning.findVM(\'demo2\').lock(2000);">锁定2s</ui-link>\n<ui-link js="morning.findVM(\'demo2\').unlock();">解锁</ui-link>\n:::\n\n#### unlock()\n\n解锁按钮，解锁后按钮可触发`emit`事件。\n\n:::democode/html\n<ui-link ref="demo3" locked>按钮</ui-link>\n<br><br> \n<ui-link js="morning.findVM(\'demo3\').unlock();">解锁</ui-link>\n:::\n\n[[[事件]]]\n\n#### emit\n\n当按钮被点击时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo3.console1\', \'emit event!\');\n        }\n    }\n});\n---\n<div>\n    <ui-link @emit="echo">点击触发emit事件</ui-link>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : function () {\n        return {\n           text : \'链接\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n});\n---\n<div>\n    <ui-link\n        ref="demoEventLifecycle"\n        v-show="show"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >{*text*}</ui-link>\n\n    <br><br>\n\n    <ui-link js="window.demoEventLifecycle.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="morning.findVM(\'demoEventLifecycle\').$destroy();">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/link/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},i=[];o._withStripped=!0},290:function(n,e,t){"use strict";t.r(e);var o=t(38),i=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);var l=t(141),u=t(0),c=!1;var d=function(n){c||t(660)},a=Object(u.a)(i.a,l.a,l.b,!1,d,null,null);a.options.__file="src/docs/pages/component/link/index.vue",e.default=a.exports},291:function(n,e,t){"use strict";var o=r(t(1)),i=r(t(290));function r(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(i.default)}})},38:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i=t(2),r=(o=i)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"link"}},components:{"doc-component":r.default}},n.exports=e.default},660:function(n,e){}});