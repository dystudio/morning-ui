!function(n){function t(t){for(var e,d,c=t[0],r=t[1],u=t[2],m=0,a=[];m<c.length;m++)d=c[m],o[d]&&a.push(o[d][0]),o[d]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e]);for(l&&l(t);a.length;)a.shift()();return s.push.apply(s,u||[]),i()}function i(){for(var n,t=0;t<s.length;t++){for(var i=s[t],e=!0,c=1;c<i.length;c++){var r=i[c];0!==o[r]&&(e=!1)}e&&(s.splice(t--,1),n=d(d.s=i[0]))}return n}var e={},o={16:0};var s=[];function d(t){if(e[t])return e[t].exports;var i=e[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,d),i.l=!0,i.exports}d.m=n,d.c=e,d.d=function(n,t,i){d.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:i})},d.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},d.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return d.d(t,"a",t),t},d.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},d.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=r;s.push([285,0]),i()}({1:function(n,t){n.exports=Vue},138:function(n,t,i){"use strict";i.d(t,"a",function(){return e}),i.d(t,"b",function(){return o});var e=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 轮播 `<ui-carousel>`\n\n<doc-component-status page="carousel"></doc-component-status>\n\n[[[开始]]]\n\n定义一个轮播，这是一个块元素。\n\n:::vue\n@name:使用\n---\n#demo\n>desc\n使用时请用`<div slot=item></div>`来定一个区域，内容可以是任意HTML，如果内容为单个`<img>`标签，则组件会有默认样式。\n>tpl\n<div style="width:480px;">\n    <ui-carousel>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n:::\n\n:::vue\n@name:使用HTML内容\n---\n#demo\n>tpl\n<div style="width:480px;">\n    <ui-carousel>\n        <div slot="item">\n            <div style="width:100%;height:240px;background:#E2E8EE;text-align:center;line-height:240px;font-size:48px;">\n                1\n            </div>\n        </div>\n        <div slot="item">\n            <div style="width:100%;height:240px;background:#F0F0F0;text-align:center;line-height:240px;font-size:48px;">\n                2\n            </div>\n        </div>\n        <div slot="item">\n            <div style="width:100%;height:240px;background:#E2E8EE;text-align:center;line-height:240px;font-size:48px;">\n                3\n            </div>\n        </div>\n    </ui-carousel>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n[[[配置]]]\n\n:::vue\n@name:toggle-time\n---\n#config\n>conf-desc\n轮播切换时间，若设为0则不会自动切换。\n>conf-accept\n时间(ms)\n>conf-type\nNumber\n>conf-default\n`0`\n---\n#demo\n>desc\n每2000ms切换下一张。\n>tpl\n<div style="width:480px;">\n    <ui-carousel :toggle-time="0">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n:::\n\n:::vue\n@name:toggle-type\n---\n#config\n>conf-desc\n轮播切换效果。\n>conf-accept\n`\'none\'` : 直接切换<br>`\'fade\'` : 渐隐渐显<br>`\'move\'` : 移动\n>conf-type\nString\n>conf-default\n`\'none\'`\n---\n#demo\n>desc\n渐隐渐显切换。\n>tpl\n<div style="width:480px;">\n    <ui-carousel toggle-type="fade">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n---\n#demo\n>desc\n移动切换。\n>tpl\n<div style="width:480px;">\n    <ui-carousel toggle-type="move">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n:::\n\n:::vue\n@name:toggle-btn\n---\n#config\n>conf-desc\n是否显示切换按钮。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>desc\n显示切换按钮。\n>tpl\n<div style="width:480px;">\n    <ui-carousel toggle-btn>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n:::\n\n:::vue\n@name:indicator-position\n---\n#config\n>conf-desc\n指示器的位置。\n>conf-accept\n`\'inside\'` : 轮播内<br>`\'outside\'` : 轮播外\n>conf-type\nString\n>conf-default\n`\'inside\'`\n---\n#demo\n>desc\n位于轮播外的指示器。\n>tpl\n<div style="width:480px;">\n    <ui-carousel indicator-position="outside">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n:::\n\n:::vue\n@name:indicator-type\n---\n#config\n>conf-desc\n指示器的类型。\n>conf-accept\n`\'dot\'` : 原点<br>`\'line\'` : 线条\n>conf-type\nString\n>conf-default\n`\'dot\'`\n---\n#demo\n>desc\n线条类型的指示器。\n>tpl\n<div style="width:480px;">\n    <ui-carousel indicator-type="line">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n:::\n\n:::vue\n@name:trigger\n---\n#config\n>conf-desc\n指示器的触发方式。\n>conf-accept\n`\'click\'` : 点击<br>`\'hover\'` : 鼠标移入\n>conf-type\nString\n>conf-default\n`\'click\'`\n---\n#demo\n>desc\n鼠标移入指示器触发切换。\n>tpl\n<div style="width:480px;">\n    <ui-carousel trigger="hover">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n:::\n\n:::vue\n@name:direction\n---\n#config\n>conf-desc\n轮播方向。\n>conf-accept\n`\'horizontal\'` : 横向<br>`\'vertical\'` : 竖向\n>conf-type\nString\n>conf-default\n`\'horizontal\'`\n---\n#demo\n>desc\n竖向的轮播。\n>tpl\n<div style="width:480px;">\n    <ui-carousel direction="vertical">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n---\n#demo\n>desc\n配合`toggle-type`一起使用。\n>tpl\n<div style="width:480px;">\n    <ui-carousel direction="vertical" toggle-type="move">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n---\n#demo\n>desc\n配合`toggle-btn`一起使用。\n>tpl\n<div style="width:480px;">\n    <ui-carousel direction="vertical" toggle-btn>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n---\n#demo\n>desc\n配合`indicator-position`一起使用。\n>tpl\n<div style="width:480px;">\n    <ui-carousel direction="vertical" indicator-position="outside">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n:::\n\n[[[方法]]]\n\n:::vue\n@name:next()\n---\n#method\n>method-desc\n切换到下一页轮播。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style="width:480px;">\n    <ui-carousel ref="demo1">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n    <ui-link js="morning.findVM(\'demo1\').next();">下一页</ui-link>\n</div>\n:::\n\n:::vue\n@name:prev()\n---\n#method\n>method-desc\n切换到上一页轮播。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style="width:480px;">\n    <ui-carousel ref="demo2">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n    <ui-link js="morning.findVM(\'demo2\').prev();">上一页</ui-link>\n</div>\n:::\n\n:::vue\n@name:switch(index)\n---\n#method\n>method-desc\n锁定按钮，锁定后按钮不会触发`emit`事件。\n>method-args\n|index|NO|切换到第几页轮播(从`0`开始)|`Number`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style="width:480px;">\n    <ui-carousel ref="demo3">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n    <ui-link js="morning.findVM(\'demo3\').switch(0);">切换到第1页</ui-link>\n    <ui-link js="morning.findVM(\'demo3\').switch(2);">切换到第3页</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::vue\n@name:emit\n---\n#event\n>event-desc\n当轮播切换时触发。\n---\n#demo\n>tpl\n<div style="width:480px;">\n    <ui-carousel @emit="echo">\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">\n        </div>\n    </ui-carousel>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo4.console1\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:生命周期事件\n---\n#event\n>event-desc\n组件的生命周期事件，详见:[基础/事件/生命周期事件](/guide/event.html#生命周期事件)。\n---\n#demo\n>tpl\n<div style="width:480px;">\n    <ui-carousel\n        ref="demoEventLifecycle"\n        v-show="show"\n        :total="10"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">\n        </div>\n        <div slot="item">\n            <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">\n        </div>\n        <div slot="item">\n            {*text*}\n        </div>\n    </ui-carousel>\n    <br><br>\n    <ui-link js="this.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="this.$refs[\'demoEventLifecycle\'].$destroy();">触发destroy</ui-link>\n</div>\n>script\n{\n    data : function () {\n        return {\n           text : \'轮播\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n}\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/carousel/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];e._withStripped=!0},19:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e,o=i(2),s=(e=o)&&e.__esModule?e:{default:e};t.default={data:function(){return{page:"carousel"}},components:{"doc-component":s.default}},n.exports=t.default},284:function(n,t,i){"use strict";i.r(t);var e=i(19),o=i.n(e);for(var s in e)"default"!==s&&function(n){i.d(t,n,function(){return e[n]})}(s);var d=i(138),c=i(0),r=!1;var u=function(n){r||i(687)},l=Object(c.a)(o.a,d.a,d.b,!1,u,null,null);l.options.__file="src/docs/pages/component/carousel/index.vue",t.default=l.exports},285:function(n,t,i){"use strict";var e=s(i(1)),o=s(i(284));function s(n){return n&&n.__esModule?n:{default:n}}new e.default({el:"#root",render:function(n){return n(o.default)}})},687:function(n,t){}});