!function(n){function e(e){for(var i,l,r=e[0],s=e[1],a=e[2],v=0,c=[];v<r.length;v++)l=r[v],o[l]&&c.push(o[l][0]),o[l]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(n[i]=s[i]);for(u&&u(e);c.length;)c.shift()();return d.push.apply(d,a||[]),t()}function t(){for(var n,e=0;e<d.length;e++){for(var t=d[e],i=!0,r=1;r<t.length;r++){var s=t[r];0!==o[s]&&(i=!1)}i&&(d.splice(e--,1),n=l(l.s=t[0]))}return n}var i={},o={50:0};var d=[];function l(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=n,l.c=i,l.d=function(n,e,t){l.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},l.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},l.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(e,"a",e),e},l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},l.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var a=0;a<r.length;a++)e(r[a]);var u=s;d.push([317,0]),t()}({1:function(n,e){n.exports=Vue},154:function(n,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return o});var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 标签页 `<ui-tab>`\n\n<doc-component-status page="tab"></doc-component-status>\n\n[[[开始]]]\n\n定义一个标签页，标签页支持嵌套。\n\n使用`slot`属性标记内容对应的标签名，标签名是唯一索引，所以`slot`不能重复。\n\n标签页支持多种样式，通过不同的样式类来区分。\n\n#### 使用\n\n:::democode/html\n<ui-tab>\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n#### 区块标签页\n\n:::democode/html\n<ui-tab class="block">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n#### 下划线标签页\n\n:::democode/html\n<ui-tab class="underline">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n#### 无边框标签页\n\n无边框标签页一般配合下划线使用。\n\n:::democode/html\n<ui-tab class="underline noborder">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n#### 嵌套使用\n\n:::democode/html\n<ui-tab class="block noborder">\n    <div slot="A">\n        <ui-tab class="underline noborder">\n            <div slot="A1">\n                <ui-tab>\n                    <div slot="A11">A11</div>\n                    <div slot="A12">A12</div>\n                    <div slot="A13">A13</div>\n                </ui-tab>\n            </div>\n            <div slot="A2">A2</div>\n            <div slot="A3">A3</div>\n        </ui-tab>\n    </div>\n    <div slot="B">B</div>\n    <div slot="C">C</div>\n</ui-tab>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|[tab](#tab)|需要展示的tab|`slot`(标签名)|String|第一个标签名|\n|[prepend](#prepend)|在对应标签名之前插入内容(可以是HTML，一般用于插入icon)。若标签名在此对象中未找到则什么都不插入。|需要插入内容的hash(键名对应标签名，键值是需要插入的内容)|Object|`{}`|\n|[append](#append)|在对应标签名之后插入内容(可以是HTML，一般用于插入icon)。若标签名在此对象中未找到则什么都不插入。|需要插入内容的hash(键名对应标签名，键值是需要插入的内容)|Object|`{}`|\n\n#### tab\n\n:::democode/html\n\x3c!-- 默认展示第三页 --\x3e\n<ui-tab tab="第三页">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n#### prepend\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : function () {\n        return {\n            // 需要插入的内容\n            prepend : {\n                \'应用\' : \''+this._s('<i class="iconfont">&#xe601;</i> ')+"',\n                '标签' : '"+this._s('<i class="iconfont">&#xe815;</i> ')+"'\n            }\n        }\n    }\n});\n---\n<div>\n    <ui-tab\n        :prepend=\"prepend\"\n    >\n        <div slot=\"应用\">应用</div>\n        <div slot=\"标签\">标签</div>\n        <div slot=\"其他\">其他</div>\n    </ui-tab>\n</div>\n:::\n\n#### append\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : function () {\n        return {\n            // 需要插入的内容\n            append : {\n                '应用' : '"+this._s(' <i class="iconfont">&#xe601;</i>')+"',\n                '标签' : '"+this._s(' <i class="iconfont">&#xe815;</i>')+'\'\n            }\n        }\n    }\n});\n---\n<div>\n    <ui-tab\n        :append="append"\n    >\n        <div slot="应用">应用</div>\n        <div slot="标签">标签</div>\n        <div slot="其他">其他</div>\n    </ui-tab>\n</div>\n:::\n\n[[[方法]]]\n\n#### switch(name)\n\n切换到指定的标签。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|name|NO|切换到的标签名|标签的名称`slot`|`String`|`undefined`|\n\n:::democode/html\n<ui-tab ref="demo3">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n<br><br> \n<ui-link js="morning.findVM(\'demo3\').switch(\'第一页\');">切换到第一页</ui-link>\n<ui-link js="morning.findVM(\'demo3\').switch(\'第二页\');">切换到第二页</ui-link>\n<ui-link js="morning.findVM(\'demo3\').switch(\'第三页\');">切换到第三页</ui-link>\n:::\n\n#### next()\n\n切换到下一个标签，若是最后一个则切换到第一个。\n\n:::democode/html\n<ui-tab ref="demo4">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n<br><br> \n<ui-link js="morning.findVM(\'demo4\').next();">切换到下一个标签</ui-link>\n:::\n\n#### prev()\n\n切换到上一个标签，若是第一个则切换到最后一个。\n\n:::democode/html\n<ui-tab ref="demo5">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n<br><br>\n<ui-link js="morning.findVM(\'demo5\').prev();">切换到上一个标签</ui-link>\n:::\n\n[[[事件]]]\n\n#### switch\n\n当标签页切换后触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo6.console1\', \'switch event!\');\n        }\n    }\n});\n---\n<div>\n    <ui-tab @switch="echo" ref="demo6">\n        <div slot="第一页">第一页</div>\n        <div slot="第二页">第二页</div>\n        <div slot="第三页">第三页</div>\n    </ui-tab>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : function () {\n        return {\n           text : \'标签页\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', `${name} event!`);\n        }\n    }\n});\n---\n<div>\n    <ui-tab\n        ref="demoEventLifecycle"\n        v-show="show"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >\n        <div slot="第一页">{*text*}</div>\n        <div slot="第二页">第二页</div>\n        <div slot="第三页">第三页</div>\n    </ui-tab>\n\n    <br><br>\n\n    <ui-link js="window.demoEventLifecycle.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="morning.findVM(\'demoEventLifecycle\').$destroy();">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/tab/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];i._withStripped=!0},316:function(n,e,t){"use strict";t.r(e);var i=t(53),o=t.n(i);for(var d in i)"default"!==d&&function(n){t.d(e,n,function(){return i[n]})}(d);var l=t(154),r=t(0),s=!1;var a=function(n){s||t(682)},u=Object(r.a)(o.a,l.a,l.b,!1,a,null,null);u.options.__file="src/docs/pages/component/tab/index.vue",e.default=u.exports},317:function(n,e,t){"use strict";var i=d(t(1)),o=d(t(316));function d(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(o.default)}})},53:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=t(2),d=(i=o)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"tab"}},components:{"doc-component":d.default}},n.exports=e.default},682:function(n,e){}});