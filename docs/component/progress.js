!function(n){function e(e){for(var r,s,d=e[0],c=e[1],p=e[2],l=0,a=[];l<d.length;l++)s=d[l],o[s]&&a.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(u&&u(e);a.length;)a.shift()();return i.push.apply(i,p||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],r=!0,d=1;d<t.length;d++){var c=t[d];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),n=s(s.s=t[0]))}return n}var r={},o={49:0};var i=[];function s(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=n,s.c=r,s.d=function(n,e,t){s.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},s.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},s.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="/";var d=window.webpackJsonp=window.webpackJsonp||[],c=d.push.bind(d);d.push=e,d=d.slice();for(var p=0;p<d.length;p++)e(d[p]);var u=c;i.push([337,0]),t()}({1:function(n,e){n.exports=Vue},164:function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o});var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 进度条 `<ui-progress>`\n\n<doc-component-status page="progress"></doc-component-status>\n\n[[[开始]]]\n\n定义进度条，这是一个块元素。\n\n#### 使用\n\n:::democode/html\n<div style="width:320px">\n    <ui-progress></ui-progress>\n</div>\n:::\n\n#### 设置进度\n\n:::democode/html\n<div style="width:320px">\n    <ui-progress :percent="30"></ui-progress>\n</div>\n:::\n\n#### 标记正在处理\n\n开启`progressing`配置后进度条会通过动画效果表示正在处理：\n\n:::democode/html\n<div style="width:320px">\n    <ui-progress progressing :percent="60"></ui-progress>\n</div>\n:::\n\n#### 环状进度条\n\n:::democode/html\n<div style="width:160px">\n    <ui-progress type="ring" :percent="30"></ui-progress>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部|`theme`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 色彩\n\n:::repeat/html\ncolor:theme\ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<div style="width:320px">\n    <ui-progress :percent="30" color="{$colorKey}"></ui-progress>\n</div>\n<br>\n:::\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|[percent](#percent)|进度百分比|0%至100%|Number|`0`|\n|[progressing](#progressing)|是否显示正在处理的动画效果|`true`<br>`false`|Boolean|`false`|\n|[type](#type)|进度条类型|`\'line\'` : 直线型<br>`\'ring\'` : 环形|String|`\'line\'`|\n|[failed](#failed)|显示失败状态|`true`<br>`false`|Boolean|`false`|\n\n#### percent\n\n:::democode/html\n<div style="width:320px">\n    <ui-progress :percent="60"></ui-progress>\n</div>\n:::\n\n#### progressing\n\n:::democode/html\n<div style="width:320px">\n    <ui-progress :percent="60" progressing></ui-progress>\n</div>\n:::\n\n配合`type`一起使用：\n\n:::democode/html\n<div style="width:160px">\n    <ui-progress :percent="60" progressing type="ring"></ui-progress>\n</div>\n:::\n\n#### type\n\n环形进度条：\n\n:::democode/html\n<div style="width:160px">\n    <ui-progress :percent="60" type="ring"></ui-progress>\n</div>\n:::\n\n#### failed\n\n失败状态的进度条：\n\n:::democode/html\n<div style="width:320px">\n    <ui-progress :percent="60" :failed="true"></ui-progress>\n</div>\n:::\n\n配合`type`一起使用：\n\n:::democode/html\n<div style="width:160px">\n    <ui-progress :percent="60" type="ring" :failed="true"></ui-progress>\n</div>\n:::\n\n[[[方法]]]\n\n<h1>暂无</h1>\n\n[[[事件]]]\n\n#### emit\n\n当进度变化时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : {\n        percent : 0\n    },\n    methods : {\n        changePercent : function () {\n           this.percent = 50;\n        },\n        echo : function () {\n            console.log(\'demo1.console1\', \'emit event!\');\n        }\n    }\n});\n---\n<div style="width:320px">\n    <ui-progress :percent="percent" ref="demo1" @emit="echo"></ui-progress>\n    <ui-link @emit="changePercent">点击触发emit事件</ui-link>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : function () {\n        return {\n           text : \'进度条\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n});\n---\n<div style="width:320px">\n    <ui-progress\n        ref="demoEventLifecycle"\n        v-show="show"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >{*text*}</ui-progress>\n\n    <br><br>\n\n    <ui-link js="window.demoEventLifecycle.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="morning.findVM(\'demoEventLifecycle\').$destroy();">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/progress/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];r._withStripped=!0},336:function(n,e,t){"use strict";t.r(e);var r=t(52),o=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,function(){return r[n]})}(i);var s=t(164),d=t(0),c=!1;var p=function(n){c||t(724)},u=Object(d.a)(o.a,s.a,s.b,!1,p,null,null);u.options.__file="src/docs/pages/component/progress/index.vue",e.default=u.exports},337:function(n,e,t){"use strict";var r=i(t(1)),o=i(t(336));function i(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},52:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(2),i=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"progress"}},components:{"doc-component":i.default}},n.exports=e.default},724:function(n,e){}});