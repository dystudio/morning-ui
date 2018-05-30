!function(n){function e(e){for(var t,r,u=e[0],c=e[1],d=e[2],s=0,m=[];s<u.length;s++)r=u[s],i[r]&&m.push(i[r][0]),i[r]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(n[t]=c[t]);for(a&&a(e);m.length;)m.shift()();return l.push.apply(l,d||[]),o()}function o(){for(var n,e=0;e<l.length;e++){for(var o=l[e],t=!0,u=1;u<o.length;u++){var c=o[u];0!==i[c]&&(t=!1)}t&&(l.splice(e--,1),n=r(r.s=o[0]))}return n}var t={},i={35:0};var l=[];function r(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=t,r.d=function(n,e,o){r.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},r.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var a=c;l.push([291,0]),o()}({1:function(n,e){n.exports=Vue},141:function(n,e,o){"use strict";o.d(e,"a",function(){return t}),o.d(e,"b",function(){return i});var t=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 链接 `<ui-link>`\n\n<doc-component-status page="link"></doc-component-status>\n\n[[[开始]]]\n\n定义一个链接，这是一个内联块元素。\n\n#### 使用\n\n:::democode/html\n<ui-link>链接</ui-link>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部|`theme`|\n|状态|全部|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 尺寸\n\n:::repeat/html\nsize\n---\n<ui-link size="{$sizeKey}">{$&sizeName}</ui-link>\n:::\n\n:::repeat/html\nsize\n---\n<ui-link size="{$sizeKey}" locked>{$&sizeName}</ui-link>\n:::\n\n#### 色彩\n\n:::repeat/html\ncolor:theme\ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<ui-link color="{$colorKey}">{$&colorName}</ui-link>\n<ui-link color="{$colorKey}" locked>{$&colorName}</ui-link>\n<br><br>\n:::\n\n#### 状态\n\n:::repeat/html\nstate|br:2|color:theme\nstate|br:2|color:feature\nstate|br:2|color:black\nstate|br:2|color:blue\nstate|br:2|color:silver\nstate|br:2|color:gray\n---\n<ui-link state="{$stateKey}" color="{$colorKey}">{$&stateName}</ui-link>\n:::\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|[link](#link)|链接地址，若为空则不跳转|url地址|String|`\'\'`|\n|[js](#js)|点击后执行JS逻辑|JS代码|String|`\'\'`|\n|[locked](#locked)|锁定模式，用来防止组件在短时间内被重复触发。若设置一个时间数值(ms)，该组件在时间内只触发一次。也可设为`true`，触发后需要通过`unlock()`方法来解锁组件。|`true`<br>`false`<br>数值(单位ms)|Number<br>Boolean|`false`|\n|[new-tab](#new-tab)|是否在新窗口中打开链接|`true`<br>`false`|Boolean|`false`|\n\n#### link\n\n:::democode/html\n<ui-link :link="\'https://www.google.com\'">链接</ui-link>\n:::\n\n#### js\n\n:::democode/html\n<ui-link :js="\'alert(\\\'hello.\\\')\'">执行JS</ui-link>\n:::\n\n#### locked\n\n:::democode/html\n<ui-link :locked="3000">3秒后自动解锁</ui-link>\n:::\n\n:::democode/html\n<ui-link ref="demo1" locked>手动解锁</ui-link>\n<ui-link js="morning.findVM(\'demo1\').unlock();">解锁</ui-link>\n:::\n\n#### new-tab\n\n:::democode/html\n<ui-link new-tab :link="\'https://www.google.com\'">新窗口打开链接</ui-link>\n:::\n\n[[[方法]]]\n\n#### lock([time])\n\n锁定按钮，锁定后按钮不会触发`emit`事件。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|time|YES|解锁的时间，单位ms。设置后组件将在解锁时间后自动解锁，不设置则需要调用`unlock()`方法解锁|`undefined`<br>数值(单位ms)|`Undefined`<br>`Number`|`undefined`|\n\n:::democode/html\n<ui-link ref="demo2">按钮</ui-link>\n<br><br> \n<ui-link js="morning.findVM(\'demo2\').lock();">锁定</ui-link>\n<ui-link js="morning.findVM(\'demo2\').lock(2000);">锁定2s</ui-link>\n<ui-link js="morning.findVM(\'demo2\').unlock();">解锁</ui-link>\n:::\n\n#### unlock()\n\n解锁按钮，解锁后按钮可触发`emit`事件。\n\n:::democode/html\n<ui-link ref="demo3" locked>按钮</ui-link>\n<br><br> \n<ui-link js="morning.findVM(\'demo3\').unlock();">解锁</ui-link>\n:::\n\n[[[事件]]]\n\n#### emit\n\n当按钮被点击时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo3.console1\', \'emit event!\');\n        }\n    }\n});\n---\n<div>\n    <ui-link @emit="echo">点击触发emit事件</ui-link>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : function () {\n        return {\n           text : \'链接\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n});\n---\n<div>\n    <ui-link\n        ref="demoEventLifecycle"\n        v-show="show"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >{*text*}</ui-link>\n\n    <br><br>\n\n    <ui-link js="window.demoEventLifecycle.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="morning.findVM(\'demoEventLifecycle\').$destroy();">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/link/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},i=[];t._withStripped=!0},290:function(n,e,o){"use strict";o.r(e);var t=o(38),i=o.n(t);for(var l in t)"default"!==l&&function(n){o.d(e,n,function(){return t[n]})}(l);var r=o(141),u=o(0),c=!1;var d=function(n){c||o(660)},a=Object(u.a)(i.a,r.a,r.b,!1,d,null,null);a.options.__file="src/docs/pages/component/link/index.vue",e.default=a.exports},291:function(n,e,o){"use strict";var t=l(o(1)),i=l(o(290));function l(n){return n&&n.__esModule?n:{default:n}}new t.default({el:"#root",render:function(n){return n(i.default)}})},38:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t,i=o(2),l=(t=i)&&t.__esModule?t:{default:t};e.default={data:function(){return{page:"link"}},components:{"doc-component":l.default}},n.exports=e.default},660:function(n,e){}});