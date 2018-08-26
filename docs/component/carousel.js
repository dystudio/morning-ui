!function(n){function t(t){for(var e,r,d=t[0],u=t[1],l=t[2],m=0,a=[];m<d.length;m++)r=d[m],o[r]&&a.push(o[r][0]),o[r]=0;for(e in u)Object.prototype.hasOwnProperty.call(u,e)&&(n[e]=u[e]);for(c&&c(t);a.length;)a.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var n,t=0;t<s.length;t++){for(var i=s[t],e=!0,d=1;d<i.length;d++){var u=i[d];0!==o[u]&&(e=!1)}e&&(s.splice(t--,1),n=r(r.s=i[0]))}return n}var e={},o={15:0};var s=[];function r(t){if(e[t])return e[t].exports;var i=e[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=n,r.c=e,r.d=function(n,t,i){r.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:i})},r.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="/";var d=window.webpackJsonp=window.webpackJsonp||[],u=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var c=u;s.push([279,0]),i()}({1:function(n,t){n.exports=Vue},135:function(n,t,i){"use strict";i.d(t,"a",function(){return e}),i.d(t,"b",function(){return o});var e=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 轮播 `<ui-carousel>`\n\n<doc-component-status page="carousel"></doc-component-status>\n\n[[[开始]]]\n\n定义一个轮播，这是一个块元素。\n\n使用时请用`<div slot=item></div>`来定一个区域，内容可以是任意HTML，如果内容为单个`<img>`标签，则组件会有默认样式。\n\n#### 使用\n\n:::democode/html\n<div style="width:480px;">\n    <ui-carousel>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n:::\n\n#### 使用HTML内容\n\n:::democode/html\n<div style="width:480px;">\n    <ui-carousel>\n        <div slot="item">\n            <div style="width:100%;height:240px;background:#E2E8EE;text-align:center;line-height:240px;font-size:48px;">\n                1\n            </div>\n        </div>\n        <div slot="item">\n            <div style="width:100%;height:240px;background:#F0F0F0;text-align:center;line-height:240px;font-size:48px;">\n                2\n            </div>\n        </div>\n        <div slot="item">\n            <div style="width:100%;height:240px;background:#E2E8EE;text-align:center;line-height:240px;font-size:48px;">\n                3\n            </div>\n        </div>\n    </ui-carousel>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|[toggle-time](#toggle-time)|轮播切换时间，若设为0则不会自动切换|时间(ms)|Number|`0`|\n|[toggle-type](#toggle-type)|轮播切换效果|`\'none\'` : 直接切换<br>`\'fade\'` : 渐隐渐显<br>`\'move\'` : 移动|String|`\'none\'`|\n|[toggle-btn](#toggle-btn)|是否显示切换按钮|`true`<br>`false`|Boolean|`false`|\n|[indicator-position](#indicator-position)|指示器的位置|`\'inside\'` : 轮播内<br>`\'outside\'` : 轮播外|String|`\'inside\'`|\n|[indicator-type](#indicator-type)|指示器的类型|`\'dot\'` : 原点<br>`\'line\'` : 线条|String|`\'dot\'`|\n|[trigger](#trigger)|指示器的触发方式|`\'click\'` : 点击<br>`\'hover\'` : 鼠标移入|String|`\'click\'`|\n\n#### toggle-time\n\n每2000ms切换下一张：\n\n:::democode/html\n<div style="width:480px;">\n    <ui-carousel :toggle-time="0">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n:::\n\n#### toggle-type\n\n渐隐渐显切换：\n\n:::democode/html\n<div style="width:480px;">\n    <ui-carousel toggle-type="fade">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n:::\n\n移动切换：\n\n:::democode/html\n<div style="width:480px;">\n    <ui-carousel toggle-type="move">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n:::\n\n#### toggle-btn\n\n显示切换按钮：\n\n:::democode/html\n<div style="width:480px;">\n    <ui-carousel toggle-btn>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n:::\n\n#### indicator-position\n\n位于轮播外的指示器：\n\n:::democode/html\n<div style="width:480px;">\n    <ui-carousel indicator-position="outside">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n:::\n\n#### indicator-type\n\n线条类型的指示器：\n\n:::democode/html\n<div style="width:480px;">\n    <ui-carousel indicator-type="line">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n:::\n\n#### trigger\n\n鼠标移入指示器触发切换：\n\n:::democode/html\n<div style="width:480px;">\n    <ui-carousel trigger="hover">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n:::\n\n[[[方法]]]\n\n#### next()\n\n切换到下一页轮播。\n\n:::democode/html\n<div style="width:480px;">\n    <ui-carousel ref="demo1">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n<ui-link js="morning.findVM(\'demo1\').next();">下一页</ui-link>\n:::\n\n#### prev()\n\n切换到上一页轮播。\n\n:::democode/html\n<div style="width:480px;">\n    <ui-carousel ref="demo2">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n<ui-link js="morning.findVM(\'demo2\').prev();">上一页</ui-link>\n:::\n\n#### switch(index)\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|index|NO|切换到第几页轮播(从`0`开始)|`Number`|`undefined`|\n\n:::democode/html\n<div style="width:480px;">\n    <ui-carousel ref="demo3">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n<ui-link js="morning.findVM(\'demo3\').switch(0);">切换到第1页</ui-link>\n<ui-link js="morning.findVM(\'demo3\').switch(2);">切换到第3页</ui-link>\n:::\n\n[[[事件]]]\n\n#### emit\n\n当轮播切换时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo4.console1\', \'emit event!\');\n        }\n    }\n});\n---\n<div style="width:480px;">\n    <ui-carousel @emit="echo">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : function () {\n        return {\n           text : \'轮播\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n});\n---\n<div style="width:480px;">\n    <ui-carousel\n        ref="demoEventLifecycle"\n        v-show="show"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            {*text*}\n        </div>\n    </ui-carousel>\n\n    <br><br>\n\n    <ui-link js="window.demoEventLifecycle.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="morning.findVM(\'demoEventLifecycle\').$destroy();">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/carousel/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];e._withStripped=!0},18:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e,o=i(2),s=(e=o)&&e.__esModule?e:{default:e};t.default={data:function(){return{page:"carousel"}},components:{"doc-component":s.default}},n.exports=t.default},278:function(n,t,i){"use strict";i.r(t);var e=i(18),o=i.n(e);for(var s in e)"default"!==s&&function(n){i.d(t,n,function(){return e[n]})}(s);var r=i(135),d=i(0),u=!1;var l=function(n){u||i(676)},c=Object(d.a)(o.a,r.a,r.b,!1,l,null,null);c.options.__file="src/docs/pages/component/carousel/index.vue",t.default=c.exports},279:function(n,t,i){"use strict";var e=s(i(1)),o=s(i(278));function s(n){return n&&n.__esModule?n:{default:n}}new e.default({el:"#root",render:function(n){return n(o.default)}})},676:function(n,t){}});