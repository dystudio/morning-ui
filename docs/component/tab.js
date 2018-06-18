!function(n){function i(i){for(var e,l,s=i[0],v=i[1],a=i[2],u=0,c=[];u<s.length;u++)l=s[u],d[l]&&c.push(d[l][0]),d[l]=0;for(e in v)Object.prototype.hasOwnProperty.call(v,e)&&(n[e]=v[e]);for(r&&r(i);c.length;)c.shift()();return o.push.apply(o,a||[]),t()}function t(){for(var n,i=0;i<o.length;i++){for(var t=o[i],e=!0,s=1;s<t.length;s++){var v=t[s];0!==d[v]&&(e=!1)}e&&(o.splice(i--,1),n=l(l.s=t[0]))}return n}var e={},d={55:0};var o=[];function l(i){if(e[i])return e[i].exports;var t=e[i]={i:i,l:!1,exports:{}};return n[i].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=n,l.c=e,l.d=function(n,i,t){l.o(n,i)||Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:t})},l.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},l.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(i,"a",i),i},l.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},l.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],v=s.push.bind(s);s.push=i,s=s.slice();for(var a=0;a<s.length;a++)i(s[a]);var r=v;o.push([339,0]),t()}({1:function(n,i){n.exports=Vue},165:function(n,i,t){"use strict";t.d(i,"a",function(){return e}),t.d(i,"b",function(){return d});var e=function(){var n=this.$createElement,i=this._self._c||n;return i("doc-component",{attrs:{page:this.page,hasPadding:!0}},[i("script",{attrs:{type:"text/markdown"}},[this._v('\n# 标签页 `<ui-tab>`\n\n<doc-component-status page="tab"></doc-component-status>\n\n[[[开始]]]\n\n定义一个标签页，标签页支持嵌套。\n\n使用`slot`属性标记内容对应的标签名，标签名是唯一索引，所以`slot`不能重复。\n\n标签页支持多种样式，通过不同的样式类来区分。\n\n#### 使用\n\n:::democode/html\n<ui-tab>\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n#### 无内边距\n\n标签页默认有一定内边距，通过`no-padding`样式类为标签页内容取消内边距：\n\n:::democode/html\n<ui-tab class="no-padding">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n#### 区块标签页\n\n通过`block`样式类定义区块风格的标签页：\n\n:::democode/html\n<ui-tab class="block">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n#### 线条标签页\n\n通过`line`样式类定义线条风格的标签页：\n\n:::democode/html\n<ui-tab class="line">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n#### 按钮式标签页\n\n:::democode/html\n<ui-tab class="btn">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n#### 无边框标签页\n\n通过`noborder`样式类定义无边框标签页，一般配合线条使用。\n\n:::democode/html\n<ui-tab class="line noborder">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n#### 嵌套使用\n\n:::democode/html\n<ui-tab class="block noborder">\n    <div slot="A">\n        <ui-tab class="line noborder">\n            <div slot="A1">\n                <ui-tab>\n                    <div slot="A11">A11</div>\n                    <div slot="A12">A12</div>\n                    <div slot="A13">A13</div>\n                </ui-tab>\n            </div>\n            <div slot="A2">A2</div>\n            <div slot="A3">A3</div>\n        </ui-tab>\n    </div>\n    <div slot="B">B</div>\n    <div slot="C">C</div>\n</ui-tab>\n:::\n\n#### 位于左侧的标签页\n\n通过标签页的`position`配置你可以调整标签页的位置：\n\n:::democode/html\n<ui-tab position="left">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n更多用法详见：[position配置](/component/tab.html#position)\n\n#### 锚点定位\n\n开启`anchor-target`配置后，当标签页检测到页面锚点变化时，会自动切换到对应的标签并定位：\n\n<a href="#锚点1">定位到第二章的锚点1</a><br>\n<a href="#锚点2">定位到第三章的锚点2</a>\n\n如果使用了多个标签页嵌套，组件会切换所有标签直到可以显示锚点定位内容：\n\n<a href="#锚点3">定位到`第四章`的`第二节`的`第三页`中的锚点3</a>\n\n多层嵌套的标签页进行切换时，如层级中某个标签页组件未开启`anchor-target`配置，则这个标签页不会进行切换。但不影响其他标签页切换。\n\n:::democode/html\n<ui-tab class="block noborder" anchor-target>\n    <div slot="第一章">第一章</div>\n    <div slot="第二章">\n        <div style="height:100px;">第二章</div>\n        <div id="锚点1">锚点1</div>\n    </div>\n    <div slot="第三章">\n        <div style="height:200px;">第三章</div>\n        <div id="锚点2">锚点2</div>\n    </div>\n    <div slot="第四章">\n        <ui-tab class="noborder" anchor-target>\n            <div slot="第一节">第一节</div>\n            <div slot="第二节">\n                <ui-tab class="noborder" anchor-target>\n                    <div slot="第一页">第一页</div>\n                    <div slot="第二页">第二页</div>\n                    <div slot="第三页">\n                        <div style="height:200px;">第三页</div>\n                        <div id="锚点3">锚点3</div>\n                    </div>\n                </ui-tab>\n            </div>\n            <div slot="第三节">第三节</div>\n        </ui-tab>\n    </div>\n</ui-tab>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|[tab](#tab)|需要展示的标签页|`slot`(标签名)|String|第一个标签名|\n|[prepend](#prepend)|在对应标签名之前插入内容(可以是HTML，一般用于插入icon)。若标签名在此对象中未找到则什么都不插入。|需要插入内容的hash(键名对应标签名，键值是需要插入的内容)|Object|`{}`|\n|[append](#append)|在对应标签名之后插入内容(可以是HTML，一般用于插入icon)。若标签名在此对象中未找到则什么都不插入。|需要插入内容的hash(键名对应标签名，键值是需要插入的内容)|Object|`{}`|\n|[anchor-target](#anchor-target)|是否启用锚点定位。启用后URL中锚点匹配到的元素所在的标签页，会切换标签并滚动到此元素。<br>多层嵌套的标签页进行切换时，如层级中某个标签页组件未开启此配置，则这个标签页不会进行切换。但不影响其他标签页切换。|`true`<br>`false`|Boolean|`false`|\n|[position](#position)|标签页的位置|`\'top\'`：上方<br>`\'left\'`：左侧|String|`\'top\'`|\n\n#### tab\n\n:::democode/html\n\x3c!-- 默认展示第三页 --\x3e\n<ui-tab tab="第三页">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n#### prepend\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : function () {\n        return {\n            // 需要插入的内容\n            prepend : {\n                \'应用\' : \''+this._s('<i class="iconfont">&#xe601;</i> ')+"',\n                '标签' : '"+this._s('<i class="iconfont">&#xe815;</i> ')+"'\n            }\n        }\n    }\n});\n---\n<div>\n    <ui-tab\n        :prepend=\"prepend\"\n    >\n        <div slot=\"应用\">应用</div>\n        <div slot=\"标签\">标签</div>\n        <div slot=\"其他\">其他</div>\n    </ui-tab>\n</div>\n:::\n\n#### append\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : function () {\n        return {\n            // 需要插入的内容\n            append : {\n                '应用' : '"+this._s(' <i class="iconfont">&#xe601;</i>')+"',\n                '标签' : '"+this._s(' <i class="iconfont">&#xe815;</i>')+'\'\n            }\n        }\n    }\n});\n---\n<div>\n    <ui-tab\n        :append="append"\n    >\n        <div slot="应用">应用</div>\n        <div slot="标签">标签</div>\n        <div slot="其他">其他</div>\n    </ui-tab>\n</div>\n:::\n\n#### anchor-target\n\n开启`anchor-target`配置后，当标签页检测到页面锚点变化时，会自动切换到对应的标签并定位：\n\n<a href="#锚点2-1">定位到第二章的锚点2-1</a><br>\n<a href="#锚点2-2">定位到第三章的锚点2-2</a>\n\n如果使用了多个标签页嵌套，组件会切换所有标签直到可以显示锚点定位内容：\n\n<a href="#锚点2-3">定位到`第四章`的`第二节`的`第三页`中的锚点2-3</a>\n\n多层嵌套的标签页进行切换时，如层级中某个标签页组件未开启`anchor-target`配置，则这个标签页不会进行切换。但不影响其他标签页切换。\n\n:::democode/html\n<ui-tab class="block noborder" anchor-target>\n    <div slot="第一章">第一章</div>\n    <div slot="第二章">\n        <div style="height:100px;">第二章</div>\n        <div id="锚点2-1">锚点2-1</div>\n    </div>\n    <div slot="第三章">\n        <div style="height:200px;">第三章</div>\n        <div id="锚点2-2">锚点2-2</div>\n    </div>\n    <div slot="第四章">\n        <ui-tab class="noborder" anchor-target>\n            <div slot="第一节">第一节</div>\n            <div slot="第二节">\n                <ui-tab class="noborder" anchor-target>\n                    <div slot="第一页">第一页</div>\n                    <div slot="第二页">第二页</div>\n                    <div slot="第三页">\n                        <div style="height:200px;">第三页</div>\n                        <div id="锚点2-3">锚点2-3</div>\n                    </div>\n                </ui-tab>\n            </div>\n            <div slot="第三节">第三节</div>\n        </ui-tab>\n    </div>\n</ui-tab>\n:::\n\n#### position\n\n标签页在上方：\n\n:::democode/html\n<ui-tab>\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n标签页在左侧：\n\n:::democode/html\n<ui-tab position="left">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n配合无边框：\n\n:::democode/html\n<ui-tab position="left" class="noborder">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n配合区块标签页：\n\n:::democode/html\n<ui-tab position="left" class="block">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n配合线条标签页：\n\n:::democode/html\n<ui-tab position="left" class="line">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n配合按钮式标签页：\n\n:::democode/html\n<ui-tab position="left" class="btn">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n[[[方法]]]\n\n#### switch(name)\n\n切换到指定的标签。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|name|NO|切换到的标签名|标签的名称`slot`|`String`|`undefined`|\n\n:::democode/html\n<ui-tab ref="demo3">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n<br><br> \n<ui-link js="morning.findVM(\'demo3\').switch(\'第一页\');">切换到第一页</ui-link>\n<ui-link js="morning.findVM(\'demo3\').switch(\'第二页\');">切换到第二页</ui-link>\n<ui-link js="morning.findVM(\'demo3\').switch(\'第三页\');">切换到第三页</ui-link>\n:::\n\n#### next()\n\n切换到下一个标签，若是最后一个则切换到第一个。\n\n:::democode/html\n<ui-tab ref="demo4">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n<br><br> \n<ui-link js="morning.findVM(\'demo4\').next();">切换到下一个标签</ui-link>\n:::\n\n#### prev()\n\n切换到上一个标签，若是第一个则切换到最后一个。\n\n:::democode/html\n<ui-tab ref="demo5">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n<br><br>\n<ui-link js="morning.findVM(\'demo5\').prev();">切换到上一个标签</ui-link>\n:::\n\n[[[事件]]]\n\n#### switch\n\n当标签页切换后触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo6.console1\', \'switch event!\');\n        }\n    }\n});\n---\n<div>\n    <ui-tab @switch="echo" ref="demo6">\n        <div slot="第一页">第一页</div>\n        <div slot="第二页">第二页</div>\n        <div slot="第三页">第三页</div>\n    </ui-tab>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : function () {\n        return {\n           text : \'标签页\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', `${name} event!`);\n        }\n    }\n});\n---\n<div>\n    <ui-tab\n        ref="demoEventLifecycle"\n        v-show="show"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >\n        <div slot="第一页">{*text*}</div>\n        <div slot="第二页">第二页</div>\n        <div slot="第三页">第三页</div>\n    </ui-tab>\n\n    <br><br>\n\n    <ui-link js="window.demoEventLifecycle.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="morning.findVM(\'demoEventLifecycle\').$destroy();">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/tab/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},d=[];e._withStripped=!0},338:function(n,i,t){"use strict";t.r(i);var e=t(58),d=t.n(e);for(var o in e)"default"!==o&&function(n){t.d(i,n,function(){return e[n]})}(o);var l=t(165),s=t(0),v=!1;var a=function(n){v||t(716)},r=Object(s.a)(d.a,l.a,l.b,!1,a,null,null);r.options.__file="src/docs/pages/component/tab/index.vue",i.default=r.exports},339:function(n,i,t){"use strict";var e=o(t(1)),d=o(t(338));function o(n){return n&&n.__esModule?n:{default:n}}new e.default({el:"#root",render:function(n){return n(d.default)}})},58:function(n,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e,d=t(2),o=(e=d)&&e.__esModule?e:{default:e};i.default={data:function(){return{page:"tab"}},components:{"doc-component":o.default}},n.exports=i.default},716:function(n,i){}});