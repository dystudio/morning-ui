!function(n){function e(e){for(var t,u,r=e[0],a=e[1],l=e[2],s=0,c=[];s<r.length;s++)u=r[s],o[u]&&c.push(o[u][0]),o[u]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t]);for(m&&m(e);c.length;)c.shift()();return d.push.apply(d,l||[]),i()}function i(){for(var n,e=0;e<d.length;e++){for(var i=d[e],t=!0,r=1;r<i.length;r++){var a=i[r];0!==o[a]&&(t=!1)}t&&(d.splice(e--,1),n=u(u.s=i[0]))}return n}var t={},o={4:0};var d=[];function u(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,u),i.l=!0,i.exports}u.m=n,u.c=t,u.d=function(n,e,i){u.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:i})},u.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var m=a;d.push([237,0]),i()}({1:function(n,e){n.exports=Vue},114:function(n,e,i){"use strict";i.d(e,"a",function(){return t}),i.d(e,"b",function(){return o});var t=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 音频播放 `<ui-audio>`\n\n<doc-component-status page="audio"></doc-component-status>\n\n[[[开始]]]\n\n定义一个音频播放，这是一个块元素。\n\n#### 使用\n\n:::democode/html\n<div style="width: 300px">\n    <ui-audio src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|[src](#src)|播放源文件|音频文件网络地址|String|`\'\'`|\n|[hide-time](#hide-time)|隐藏时间|`true`<br>`false`|Boolean|`false`|\n|[hide-progress](#hide-progress)|隐藏播放进度条|`true`<br>`false`|Boolean|`false`|\n|[autoplay](#autoplay)|自动播放|`true`<br>`false`|Boolean|`false`|\n\n#### src\n\n:::democode/html\n<div style="width: 300px">\n    <ui-audio src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>\n</div>\n:::\n\n如果不设置则无法播放：\n\n:::democode/html\n<div style="width: 300px">\n    <ui-audio></ui-audio>\n</div>\n:::\n\n#### hide-time\n\n:::democode/html\n<div style="width: 300px">\n    <ui-audio src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" :hide-time="true"></ui-audio>\n</div>\n:::\n\n#### hide-progress\n\n:::democode/html\n<div style="width: 300px">\n    <ui-audio src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" :hide-progress="true"></ui-audio>\n</div>\n:::\n\n#### autoplay\n\n设置后音频会自动播放（此处不演示，可通过以下代码观看效果）：\n\n````html\n<div style="width: 300px">\n    <ui-audio src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" :autoplay="true"></ui-audio>\n</div>\n````\n\n[[[方法]]]\n\n#### play([play])\n\n切换音频播放状态。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|play|YES|切换到播放或暂停状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n\n:::democode/html\n<div style="width:300px">\n    <ui-audio ref="demo1" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>\n</div>\n<br>\n<ui-link js="window.morning.findVM(\'demo1\').play(true);">播放</ui-link>\n<ui-link js="window.morning.findVM(\'demo1\').play(false);">暂停</ui-link>\n<ui-link js="window.morning.findVM(\'demo1\').play();">切换到反向状态</ui-link>\n:::\n\n#### to([time])\n\n切换到音频指定位置。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|time|YES|切换到音频指定位置(单位秒)。若超出音频时间返回则会重置。|`undefined`<br>播放位置(秒)`|`Undefined`<br>`Number`|`undefined`|\n\n:::democode/html\n<div style="width:300px">\n    <ui-audio ref="demo2" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>\n</div>\n<br>\n<ui-link js="window.morning.findVM(\'demo2\').to(50);">切换到第50秒</ui-link>\n:::\n\n#### mute([toggle])\n\n切换静音。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|toggle|YES|切换至静音，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n\n:::democode/html\n<div style="width:300px">\n    <ui-audio ref="demo3" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>\n</div>\n<br>\n<ui-link js="window.morning.findVM(\'demo3\').mute(true);">静音</ui-link>\n<ui-link js="window.morning.findVM(\'demo3\').mute(false);">取消静音</ui-link>\n<ui-link js="window.morning.findVM(\'demo3\').mute();">切换到反向状态</ui-link>\n:::\n\n#### volume(value)\n\n调整音量大小。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|value|NO|音量大小|0-100之间的数字|`Number`|`0`|\n\n:::democode/html\n<div style="width:300px">\n    <ui-audio ref="demo8" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>\n</div>\n<br>\n<ui-link js="window.morning.findVM(\'demo8\').volume(0);">音量设为0</ui-link>\n<ui-link js="window.morning.findVM(\'demo8\').volume(30);">音量设为30</ui-link>\n<ui-link js="window.morning.findVM(\'demo8\').volume(100);">音量设为100</ui-link>\n:::\n\n#### getInfo()\n\n返回音频播放信息(包含音频源地址、时间长度、当前播放位置、静音状态、音量)。\n\n:::democode/html\n<div style="width:300px">\n    <ui-audio ref="demo4" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>\n</div>\n<br>\n<ui-link js="console.log(window.morning.findVM(\'demo4\').getInfo());">获取音频信息</ui-link>\n:::\n\n[[[事件]]]\n\n#### play\n\n当音频开始播放时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo5.play\', \'emit event!\');\n        }\n    }\n});\n---\n<div style="width:300px">\n    <ui-audio ref="demo5" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" @play="echo"></ui-audio>\n    <ui-link js="window.morning.findVM(\'demo5\').play(true);">点击触发play事件</ui-link>\n</div>\n:::\n\n#### pause\n\n当音频暂停播放时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo6.pause\', \'emit event!\');\n        }\n    }\n});\n---\n<div style="width:300px">\n    <ui-audio ref="demo6" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" @pause="echo"></ui-audio>\n    <ui-link js="window.morning.findVM(\'demo6\').play(true);setTimeout(()=>window.morning.findVM(\'demo6\').play(false))">点击触发pause事件</ui-link>\n</div>\n:::\n\n#### play-change\n\n当音频播放状态改变时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo10.play-change\', \'emit event!\');\n        }\n    }\n});\n---\n<div style="width:300px">\n    <ui-audio ref="demo10" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" @play-change="echo"></ui-audio>\n    <ui-link js="window.morning.findVM(\'demo10\').play();">点击触发play-change事件</ui-link>\n</div>\n:::\n\n#### mute-change\n\n静音状态改变时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo7.mute-change\', \'emit event!\');\n        }\n    }\n});\n---\n<div style="width:300px">\n    <ui-audio ref="demo7" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" @mute-change="echo"></ui-audio>\n    <ui-link js="window.morning.findVM(\'demo7\').mute();">点击触发mute-change事件</ui-link>\n</div>\n:::\n\n#### volume-change\n\n音量状态改变时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo9.volume-change\', \'emit event!\');\n        }\n    }\n});\n---\n<div style="width:300px">\n    <ui-audio ref="demo9" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" @volume-change="echo"></ui-audio>\n    <ui-link js="window.morning.findVM(\'demo9\').volume(30);">点击触发volume-change事件</ui-link>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : function () {\n        return {\n           text : \'按钮\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n});\n---\n<div style="width:300px">\n    <ui-audio\n        ref="demoEventLifecycle"\n        v-show="show"\n        src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >{*text*}</ui-audio>\n\n    <br><br>\n\n    <ui-link js="window.demoEventLifecycle.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="morning.findVM(\'demoEventLifecycle\').$destroy();">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/audio/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];t._withStripped=!0},236:function(n,e,i){"use strict";i.r(e);var t=i(7),o=i.n(t);for(var d in t)"default"!==d&&function(n){i.d(e,n,function(){return t[n]})}(d);var u=i(114),r=i(0),a=!1;var l=function(n){a||i(614)},m=Object(r.a)(o.a,u.a,u.b,!1,l,null,null);m.options.__file="src/docs/pages/component/audio/index.vue",e.default=m.exports},237:function(n,e,i){"use strict";var t=d(i(1)),o=d(i(236));function d(n){return n&&n.__esModule?n:{default:n}}new t.default({el:"#root",render:function(n){return n(o.default)}})},614:function(n,e){},7:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t,o=i(2),d=(t=o)&&t.__esModule?t:{default:t};e.default={data:function(){return{page:"audio"}},components:{"doc-component":d.default}},n.exports=e.default}});