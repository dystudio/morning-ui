!function(n){function o(o){for(var i,u,d=o[0],l=o[1],c=o[2],s=0,m=[];s<d.length;s++)u=d[s],e[u]&&m.push(e[u][0]),e[u]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(n[i]=l[i]);for(b&&b(o);m.length;)m.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var n,o=0;o<r.length;o++){for(var t=r[o],i=!0,d=1;d<t.length;d++){var l=t[d];0!==e[l]&&(i=!1)}i&&(r.splice(o--,1),n=u(u.s=t[0]))}return n}var i={},e={26:0};var r=[];function u(o){if(i[o])return i[o].exports;var t=i[o]={i:o,l:!1,exports:{}};return n[o].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=i,u.d=function(n,o,t){u.o(n,o)||Object.defineProperty(n,o,{configurable:!1,enumerable:!0,get:t})},u.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},u.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(o,"a",o),o},u.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},u.p="/";var d=window.webpackJsonp=window.webpackJsonp||[],l=d.push.bind(d);d.push=o,d=d.slice();for(var c=0;c<d.length;c++)o(d[c]);var b=l;r.push([295,0]),t()}({1:function(n,o){n.exports=Vue},143:function(n,o,t){"use strict";t.d(o,"a",function(){return i}),t.d(o,"b",function(){return e});var i=function(){var n=this.$createElement,o=this._self._c||n;return o("doc-component",{attrs:{page:this.page,hasPadding:!0}},[o("script",{attrs:{type:"text/markdown"}},[this._v('\n# 下拉菜单 `<ui-dropdown>`\n\n<doc-component-status page="dropdown"></doc-component-status>\n\n[[[开始]]]\n\n定义下拉菜单，这是一个内联块元素。\n\n`ui-dropdown`内包含一组`ui-btn`或`ui-btngroup`，可以标记两个特定的按钮:\n\n- `slot="showbtn"` : 标记默认显示的按钮\n- `emitbtn` : 标记触发按钮组的按钮。\n\n组件内支持一个向下箭头图标，可以通过`<i class="mo-icon mo-icon-dropdown"></i>`使用。\n\n#### 使用\n\n:::democode/html\n<ui-dropdown>\n    <ui-btn slot="showbtn" emitbtn>更多 <i class="mo-icon mo-icon-dropdown"></i></ui-btn>\n    <ui-btn color="white">收藏</ui-btn>\n    <ui-btn color="white">修改</ui-btn>\n    <ui-btn color="danger">删除</ui-btn>\n</ui-dropdown>\n:::\n\n#### 分别标记`showbtn`和`emitbtn`\n\n分开标记`showbtn`和`emitbtn`，再配合`ui-btngroup`可以实现非常棒的效果。\n\n:::democode/html\n<ui-dropdown>\n    <ui-btngroup slot="showbtn">\n        <ui-btn color="success">立即购买</ui-btn>\n        \x3c!-- 这里的mo-icon组件附带，可直接使用 --\x3e\n        <ui-btn color="minor" emitbtn><i class="mo-icon mo-icon-dropdown"></i></ui-btn>\n    </ui-btngroup>\n    <ui-btn color="info">加入购物车</ui-btn>\n    <ui-btn color="white"><i class="mo-icon mo-icon-star-f"></i> 收藏</ui-btn>\n    <ui-btn color="white"><i class="mo-icon mo-icon-share-f"></i> 分享</ui-btn>\n</ui-dropdown>\n:::\n\n#### 配合链接使用\n\n:::democode/html\n<ui-dropdown>\n    <ui-link slot="showbtn" emitbtn>更多 <i class="mo-icon mo-icon-dropdown"></i></ui-link>\n    <ui-btn color="white">收藏</ui-btn>\n    <ui-btn color="white">修改</ui-btn>\n    <ui-btn color="danger">删除</ui-btn>\n</ui-dropdown>\n:::\n\n#### 不同的尺寸及颜色\n\n通过设置按钮或链接本身的尺寸和颜色来修改。\n\n:::democode/html\n<ui-dropdown>\n    <ui-btn slot="showbtn" emitbtn size="xs">更多 <i class="mo-icon mo-icon-dropdown"></i></ui-btn>\n    <ui-btn color="white" size="xs">打开</ui-btn>\n    <ui-btn color="white" size="xs">关闭</ui-btn>\n    <ui-btn color="danger" size="xs">删除</ui-btn>\n</ui-dropdown>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n下拉菜单不支持形态，但可通过`ui-btn` / `ui-btngroup`自身的形态来控制。\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|[auto-close](#auto-close)|点击下拉菜单中按钮后自动隐藏|`true`<br>`false`|Boolean|`true`|\n|[trigger](#trigger)|触发下拉菜单方式。触发方式一旦改变，已有的触发状态都会被重置。|`hover`：鼠标移入目标元素<br>`click`：鼠标点击目标元素<br>`focus`：目标元素处于焦点状态<br>`method`：通过组件方法触发|String|`click`|\n|[trigger-in-delay](#trigger-in-delay)|目标触发下拉菜单时进行延迟。<br>此延迟仅在`trigger`为`hover`时生效。<br>使用一定的延迟，可以减少误触的情况，提升页面体验。|延迟触发时间(ms)|Number|`200`|\n\n#### auto-close\n\n点击菜单中按钮后不会自动隐藏，需要点击`更多`来隐藏。\n\n:::democode/html\n<ui-dropdown :auto-close="false">\n    <ui-btn slot="showbtn" emitbtn>更多</ui-btn>\n    <ui-btn color="white">收藏</ui-btn>\n    <ui-btn color="white">修改</ui-btn>\n    <ui-btn color="danger">删除</ui-btn>\n</ui-dropdown>\n:::\n\n#### trigger\n\n采用鼠标右键触发：\n\n:::democode/html\n<ui-dropdown trigger="rclick">\n    <ui-link slot="showbtn" emitbtn>右键点击查看更多</ui-link>\n    <ui-btn color="white">收藏</ui-btn>\n    <ui-btn color="white">修改</ui-btn>\n    <ui-btn color="danger">删除</ui-btn>\n</ui-dropdown>\n:::\n\n采用hover方式触发：\n\n:::democode/html\n<ui-dropdown trigger="hover">\n    <ui-btn slot="showbtn" emitbtn>更多</ui-btn>\n    <ui-btn color="white">收藏</ui-btn>\n    <ui-btn color="white">修改</ui-btn>\n    <ui-btn color="danger">删除</ui-btn>\n</ui-dropdown>\n:::\n\n`trigger`和`auto-close`配合使用：\n\n:::democode/html\n<ui-dropdown :auto-close="false" trigger="hover">\n    <ui-btn slot="showbtn" emitbtn>更多</ui-btn>\n    <ui-btn color="white">收藏</ui-btn>\n    <ui-btn color="white">修改</ui-btn>\n    <ui-btn color="danger">删除</ui-btn>\n</ui-dropdown>\n:::\n\n`trigger`也可以设置为`method`，这样只能通过组件方法来触发：\n\n:::democode/html\n<ui-dropdown ref="demo4" trigger="method">\n    <ui-btn slot="showbtn" emitbtn>更多 <i class="mo-icon  mo-icon-dropdown"></i></ui-btn>\n    <ui-btn color="white">收藏</ui-btn>\n    <ui-btn color="white">修改</ui-btn>\n    <ui-btn color="danger">删除</ui-btn>\n</ui-dropdown>\n\n<br><br>\n\n<ui-link js="morning.findVM(\'demo4\').toggle(true);">通过组件方法显示</ui-link><br>\n<ui-link js="morning.findVM(\'demo4\').toggle(false);">通过组件方法隐藏</ui-link>\n:::\n\n#### trigger-in-delay\n\n鼠标移入元素时延迟300ms触发提示：\n\n:::democode/html\n<ui-dropdown trigger="hover" :trigger-in-delay="300">\n    <ui-btn slot="showbtn" emitbtn>更多</ui-btn>\n    <ui-btn color="white">收藏</ui-btn>\n    <ui-btn color="white">修改</ui-btn>\n    <ui-btn color="danger">删除</ui-btn>\n</ui-dropdown>\n:::\n\n鼠标移入元素时立即触发提示：\n\n:::democode/html\n<ui-dropdown trigger="hover" :trigger-in-delay="0">\n    <ui-btn slot="showbtn" emitbtn>更多</ui-btn>\n    <ui-btn color="white">收藏</ui-btn>\n    <ui-btn color="white">修改</ui-btn>\n    <ui-btn color="danger">删除</ui-btn>\n</ui-dropdown>\n:::\n\n[[[方法]]]\n\n#### toggle([show])\n\n切换下拉按钮组是否显示。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|show|YES|指定按钮组需要切换到隐藏或显示，若不设置则切换到相反的状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n\n:::democode/html\n<ui-dropdown ref="demo1">\n    <ui-btn slot="showbtn" emitbtn>更多 <i class="mo-icon  mo-icon-dropdown"></i></ui-btn>\n    <ui-btn color="white">收藏</ui-btn>\n    <ui-btn color="white">修改</ui-btn>\n    <ui-btn color="danger">删除</ui-btn>\n</ui-dropdown>\n<br><br> \n<ui-link js="morning.findVM(\'demo1\').toggle();">切换相反状态</ui-link>\n<ui-link js="morning.findVM(\'demo1\').toggle(true);">切换至显示</ui-link>\n<ui-link js="morning.findVM(\'demo1\').toggle(false);">切换至隐藏</ui-link>\n:::\n\n[[[事件]]]\n\n#### emit\n\n当按钮组显示或隐藏时触发`emit`事件。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo1.console1\', \'emit event!\');\n        }\n    }\n});\n---\n<div>\n    <ui-dropdown @emit="echo">\n        <ui-btn slot="showbtn" emitbtn>emit事件 <i class="mo-icon mo-icon-dropdown"></i></ui-btn>\n        <ui-btn color="white">收藏</ui-btn>\n        <ui-btn color="white">修改</ui-btn>\n        <ui-btn color="danger">删除</ui-btn>\n    </ui-dropdown>\n</div>\n:::\n\n#### show\n\n当按钮组显示时触发`show`事件。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo2.console1\', \'show event!\');\n        }\n    }\n});\n---\n<div>\n    <ui-dropdown @show="echo">\n        <ui-btn slot="showbtn" emitbtn>show事件 <i class="mo-icon mo-icon-dropdown"></i></ui-btn>\n        <ui-btn color="white">收藏</ui-btn>\n        <ui-btn color="white">修改</ui-btn>\n        <ui-btn color="danger">删除</ui-btn>\n    </ui-dropdown>\n</div>\n:::\n\n#### hide\n\n当按钮组隐藏时触发`hide`事件。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo3.console1\', \'hide event!\');\n        }\n    }\n});\n---\n<div>\n    <ui-dropdown @hide="echo">\n        <ui-btn slot="showbtn" emitbtn>hide事件 <i class="mo-icon mo-icon-dropdown"></i></ui-btn>\n        <ui-btn color="white">收藏</ui-btn>\n        <ui-btn color="white">修改</ui-btn>\n        <ui-btn color="danger">删除</ui-btn>\n    </ui-dropdown>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : function () {\n        return {\n           text : \'下拉菜单\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', `${name} event!`);\n        }\n    }\n});\n---\n<div>\n    <ui-dropdown\n        ref="demoEventLifecycle"\n        v-show="show"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >\n\n        <ui-btn slot="showbtn" emitbtn>{*text*} <i class="mo-icon mo-icon-dropdown"></i></ui-btn>\n        <ui-btn color="white">收藏</ui-btn>\n        <ui-btn color="white">修改</ui-btn>\n        <ui-btn color="danger">删除</ui-btn>\n\n    </ui-dropdown>\n\n    <br><br>\n\n    <ui-link js="window.demoEventLifecycle.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="morning.findVM(\'demoEventLifecycle\').$destroy();">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/dropdown/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},e=[];i._withStripped=!0},29:function(n,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i,e=t(2),r=(i=e)&&i.__esModule?i:{default:i};o.default={data:function(){return{page:"dropdown"}},components:{"doc-component":r.default}},n.exports=o.default},294:function(n,o,t){"use strict";t.r(o);var i=t(29),e=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(o,n,function(){return i[n]})}(r);var u=t(143),d=t(0),l=!1;var c=function(n){l||t(686)},b=Object(d.a)(e.a,u.a,u.b,!1,c,null,null);b.options.__file="src/docs/pages/component/dropdown/index.vue",o.default=b.exports},295:function(n,o,t){"use strict";var i=r(t(1)),e=r(t(294));function r(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(e.default)}})},686:function(n,o){}});