!function(n){function e(e){for(var t,l,r=e[0],u=e[1],s=e[2],a=0,c=[];a<r.length;a++)l=r[a],o[l]&&c.push(o[l][0]),o[l]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(n[t]=u[t]);for(m&&m(e);c.length;)c.shift()();return d.push.apply(d,s||[]),i()}function i(){for(var n,e=0;e<d.length;e++){for(var i=d[e],t=!0,r=1;r<i.length;r++){var u=i[r];0!==o[u]&&(t=!1)}t&&(d.splice(e--,1),n=l(l.s=i[0]))}return n}var t={},o={73:0};var d=[];function l(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=n,l.c=t,l.d=function(n,e,i){l.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:i})},l.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},l.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(e,"a",e),e},l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},l.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var s=0;s<r.length;s++)e(r[s]);var m=u;d.push([383,0]),i()}({1:function(n,e){n.exports=Vue},187:function(n,e,i){"use strict";i.d(e,"a",function(){return t}),i.d(e,"b",function(){return o});var t=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 视频播放 `<ui-video>`\n\n<doc-component-status page="video"></doc-component-status>\n\n[[[开始]]]\n\n定义一个视频播放，这是一个块元素。\n\n#### 使用\n\n:::democode/html\n<div style="width:400px">\n    <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|[src](#src)|播放源文件|视频文件网络地址|String|`\'\'`|\n|[poster](#poster)|视频的预览图|图片地址|String|`\'\'`|\n|[hide-time](#hide-time)|隐藏时间|`true`<br>`false`|Boolean|`false`|\n|[hide-progress](#hide-progress)|隐藏播放进度条|`true`<br>`false`|Boolean|`false`|\n|[autoplay](#autoplay)|自动播放|`true`<br>`false`|Boolean|`false`|\n|[allow-fullscreen](#allow-fullscreen)|是否允许视频全屏，若不允许则不会显示全屏按钮|`true`<br>`false`|Boolean|`true`|\n\n#### src\n\n:::democode/html\n<div style="width: 400px">\n    <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>\n</div>\n:::\n\n如果不设置则无法播放：\n\n:::democode/html\n<div style="width: 400px">\n    <ui-video></ui-video>\n</div>\n:::\n\n#### poster\n\n:::democode/html\n<div style="width: 400px">\n    <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4" poster="https://media.w3.org/2010/05/sintel/poster.png"></ui-video>\n</div>\n:::\n\n#### hide-time\n\n:::democode/html\n<div style="width: 400px">\n    <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4" :hide-time="true"></ui-video>\n</div>\n:::\n\n#### hide-progress\n\n:::democode/html\n<div style="width: 400px">\n    <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4" :hide-progress="true"></ui-video>\n</div>\n:::\n\n#### autoplay\n\n设置后视频会自动播放（此处不演示，可通过以下代码观看效果）：\n\n````html\n<div style="width: 400px">\n    <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4" :autoplay="true"></ui-video>\n</div>\n````\n\n#### allow-fullscreen\n\n:::democode/html\n<div style="width: 400px">\n    <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4" :allow-fullscreen="false"></ui-video>\n</div>\n:::\n\n[[[方法]]]\n\n#### play([play])\n\n切换视频播放状态。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|play|YES|切换到播放或暂停状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n\n:::democode/html\n<div style="width:400px">\n    <ui-video ref="demo1" src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>\n</div>\n<br>\n<ui-link js="window.morning.findVM(\'demo1\').play(true);">播放</ui-link>\n<ui-link js="window.morning.findVM(\'demo1\').play(false);">暂停</ui-link>\n<ui-link js="window.morning.findVM(\'demo1\').play();">切换到反向状态</ui-link>\n:::\n\n#### to([time])\n\n切换到视频指定位置。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|time|YES|切换到视频指定位置(单位秒)。若超出视频时间返回则会重置。|`undefined`<br>播放位置(秒)`|`Undefined`<br>`Number`|`undefined`|\n\n:::democode/html\n<div style="width:400px">\n    <ui-video ref="demo2" src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>\n</div>\n<br>\n<ui-link js="window.morning.findVM(\'demo2\').to(20);">切换到第20秒</ui-link>\n:::\n\n#### mute([toggle])\n\n切换静音。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|toggle|YES|切换至静音，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n\n:::democode/html\n<div style="width:400px">\n    <ui-video ref="demo3" src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>\n</div>\n<br>\n<ui-link js="window.morning.findVM(\'demo3\').mute(true);">静音</ui-link>\n<ui-link js="window.morning.findVM(\'demo3\').mute(false);">取消静音</ui-link>\n<ui-link js="window.morning.findVM(\'demo3\').mute();">切换到反向状态</ui-link>\n:::\n\n#### volume(value)\n\n调整音量大小。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|value|NO|音量大小|0-100之间的数字|`Number`|`0`|\n\n:::democode/html\n<div style="width:400px">\n    <ui-video ref="demo8" src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>\n</div>\n<br>\n<ui-link js="window.morning.findVM(\'demo8\').volume(0);">音量设为0</ui-link>\n<ui-link js="window.morning.findVM(\'demo8\').volume(30);">音量设为30</ui-link>\n<ui-link js="window.morning.findVM(\'demo8\').volume(100);">音量设为100</ui-link>\n:::\n\n#### getInfo()\n\n返回视频播放信息(包含视频源地址、时间长度、当前播放位置、静音状态、音量)。\n\n:::democode/html\n<div style="width:400px">\n    <ui-video ref="demo4" src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>\n</div>\n<br>\n<ui-link js="console.log(window.morning.findVM(\'demo4\').getInfo());">获取视频信息</ui-link>\n:::\n\n[[[事件]]]\n\n#### play\n\n当视频开始播放时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo5.play\', \'emit event!\');\n        }\n    }\n});\n---\n<div style="width:400px">\n    <ui-video ref="demo5" src="https://media.w3.org/2010/05/sintel/trailer.mp4" @play="echo"></ui-video>\n    <ui-link js="window.morning.findVM(\'demo5\').play(true);">点击触发play事件</ui-link>\n</div>\n:::\n\n#### pause\n\n当视频暂停播放时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo6.pause\', \'emit event!\');\n        }\n    }\n});\n---\n<div style="width:400px">\n    <ui-video ref="demo6" src="https://media.w3.org/2010/05/sintel/trailer.mp4" @pause="echo"></ui-video>\n    <ui-link js="window.morning.findVM(\'demo6\').play(true);setTimeout(()=>window.morning.findVM(\'demo6\').play(false))">点击触发pause事件</ui-link>\n</div>\n:::\n\n#### play-change\n\n当视频播放状态改变时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo10.play-change\', \'emit event!\');\n        }\n    }\n});\n---\n<div style="width:400px">\n    <ui-video ref="demo10" src="https://media.w3.org/2010/05/sintel/trailer.mp4" @play-change="echo"></ui-video>\n    <ui-link js="window.morning.findVM(\'demo10\').play();">点击触发play-change事件</ui-link>\n</div>\n:::\n\n#### mute-change\n\n静音状态改变时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo7.mute-change\', \'emit event!\');\n        }\n    }\n});\n---\n<div style="width:400px">\n    <ui-video ref="demo7" src="https://media.w3.org/2010/05/sintel/trailer.mp4" @mute-change="echo"></ui-video>\n    <ui-link js="window.morning.findVM(\'demo7\').mute();">点击触发mute-change事件</ui-link>\n</div>\n:::\n\n#### volume-change\n\n音量状态改变时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo9.volume-change\', \'emit event!\');\n        }\n    }\n});\n---\n<div style="width:400px">\n    <ui-video ref="demo9" src="https://media.w3.org/2010/05/sintel/trailer.mp4" @volume-change="echo"></ui-video>\n    <ui-link js="window.morning.findVM(\'demo9\').volume(30);">点击触发volume-change事件</ui-link>\n</div>\n:::\n\n#### fullscreen-change\n\n当视频全屏状态改变时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo10.fullscreen-change\', \'emit event!\');\n        }\n    }\n});\n---\n<div style="width:400px">\n    <ui-video ref="demo10" src="https://media.w3.org/2010/05/sintel/trailer.mp4" @fullscreen-change="echo"></ui-video>\n    <p>点击全屏来触发此事件</p>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : function () {\n        return {\n           text : \'视频\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n});\n---\n<div style="width:400px">\n    <ui-video\n        ref="demoEventLifecycle"\n        v-show="show"\n        src="https://media.w3.org/2010/05/sintel/trailer.mp4"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >{*text*}</ui-video>\n\n    <br><br>\n\n    <ui-link js="window.demoEventLifecycle.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="morning.findVM(\'demoEventLifecycle\').$destroy();">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/video/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];t._withStripped=!0},382:function(n,e,i){"use strict";i.r(e);var t=i(79),o=i.n(t);for(var d in t)"default"!==d&&function(n){i.d(e,n,function(){return t[n]})}(d);var l=i(187),r=i(0),u=!1;var s=function(n){u||i(770)},m=Object(r.a)(o.a,l.a,l.b,!1,s,null,null);m.options.__file="src/docs/pages/component/video/index.vue",e.default=m.exports},383:function(n,e,i){"use strict";var t=d(i(1)),o=d(i(382));function d(n){return n&&n.__esModule?n:{default:n}}new t.default({el:"#root",render:function(n){return n(o.default)}})},770:function(n,e){},79:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t,o=i(2),d=(t=o)&&t.__esModule?t:{default:t};e.default={data:function(){return{page:"video"}},components:{"doc-component":d.default}},n.exports=e.default}});