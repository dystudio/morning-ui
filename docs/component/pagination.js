!function(n){function e(e){for(var i,r,u=e[0],d=e[1],s=e[2],l=0,p=[];l<u.length;l++)r=u[l],o[r]&&p.push(o[r][0]),o[r]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(n[i]=d[i]);for(m&&m(e);p.length;)p.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],i=!0,u=1;u<t.length;u++){var d=t[u];0!==o[d]&&(i=!1)}i&&(a.splice(e--,1),n=r(r.s=t[0]))}return n}var i={},o={52:0};var a=[];function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=i,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},r.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var m=d;a.push([357,0]),t()}({1:function(n,e){n.exports=Vue},174:function(n,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return o});var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 分页 `<ui-pagination>`\n\n<doc-component-status page="pagination"></doc-component-status>\n\n[[[开始]]]\n\n定义分页，这是一个内联块标签。\n\n分页组件有两种用法，后面示例中会演示：\n\n- 关联列表：必须配置`list`，会自动计算总页码。页码切换时，会根据页面从`list`中获取项目渲染内容。\n- 单独使用：必须配置`total`。页码切换时，会触发事件，页面内容由外部逻辑控制。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-pagination :total="10"></ui-pagination>\n:::\n\n:::vue\n@name:自动计算总页码\n---\n#demo\n>desc\n当配置`list`时组件会根据`page-size`自动计算总页码。\n>tpl\n<ui-pagination :list="[1,2,3,4,5,6,7,8]" :page-size="3"></ui-pagination>\n:::\n\n:::vue\n@name:关联列表使用\n---\n#demo\n>desc\n关联列表时，把内容模板放到`ui-pagination`标签内，当页码切换时，会根据页面选取`list`中指定的项目作为上下文渲染内容。\n<br><br>\n这里用到了Vue.js的[作用域插槽](https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD)。\n<br><br>\n通过`slot-scope`解构可以在内容模板中获取到的变量：\n<br><br>\n- `page` : 当前页码(从1开始)\n- `items` : 当前页的数据(数组，`list`中的区间)\n>tpl\n<ui-pagination :list="list" :page-size="3">\n    <template slot-scope="{page, items}">\n        <h5>这是第{*page*}页，内容是：</h5>\n        <ul>\n            <li v-for="item in items">Name : {*item.name*}, Age : {*item.age*}</li>\n        </ul>\n    </template>\n</ui-pagination>\n>script\n{\n    data : {\n        list : [\n            {name : \'Tim\', age : 15},\n            {name : \'Andrew\', age : 20},\n            {name : \'Gustavo\', age : 17},\n            {name : \'Victor\', age : 11},\n            {name : \'Shaun\', age : 30},\n            {name : \'Emir\', age : 24},\n            {name : \'Katherine\', age : 18},\n            {name : \'Jax\', age : 10}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:单独使用\n---\n#demo\n>desc\n单独使用时，通过监听分页的`emit`事件来获取页码变化，并在页码变化后通过修改`slot`来改变内容。\n>tpl\n<ui-pagination ref="demo1" :total="3" @emit="rerender">\n    <div v-html="content"></div>\n</ui-pagination>\n>script\n{\n    data : {\n        list : [\n            {name : \'Tim\', age : 15},\n            {name : \'Andrew\', age : 20},\n            {name : \'Gustavo\', age : 17},\n            {name : \'Victor\', age : 11},\n            {name : \'Shaun\', age : 30},\n            {name : \'Emir\', age : 24},\n            {name : \'Katherine\', age : 18},\n            {name : \'Jax\', age : 10}\n        ],\n        content : \'\'\n    },\n    methods : {\n        rerender : function () {\n\n            // 通过组件实例获取当前页码信息\n            let vm = window.morning.findVM(\'demo1\');\n            let page = vm.getPage();\n            let list = this.list.slice((page-1)*3, page*3);\n            let content = \'\';\n            \n            // 生成内容\n            content = `<h5>这是第${page}页，内容是：</h5><ul>`;\n            \n            for (let item of list) {\n\n                content += `<li>Name : ${item.name}, Age : ${item.age}</li>`;\n\n            }\n            \n            content += `</ul>`;\n\n            this.content = content;\n\n        }\n    }\n}\n:::\n\n:::vue\n@name:页面跳转\n---\n#demo\n>desc\n当总页数大于设置的显示页数，则默认启用页面跳转框。在右侧框中输入数字（非数字会被忽略，小数则向下取整），可快速跳转到该页面。\n<br><br>\n当输入值大于总页数则显示最后一页，输入负值则倒序跳转。\n>tpl\n<ui-pagination :total=\'16\'></ui-pagination>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部|`theme`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n:::vue\n@name:尺寸\n---\n#renderer\n>name\nsize-repeat\n>tpl\n<ui-pagination :total=\'10\' size="{$sizeKey}"></ui-pagination> &nbsp;&nbsp; <span>{$&sizeName}</span>\n<br>\n:::\n\n:::vue\n@layout:color\n---\n<ui-pagination :total=\'10\' color="{$colorKey}"></ui-pagination> &nbsp;&nbsp; <span>{$&colorName}</span>\n<br>\n:::\n\n[[[配置]]]\n\n:::vue\n@name:total\n---\n#config\n>conf-desc\n设置分页总页数，当设置`list`时，会根据`page-size`和`list`的长度自动计算total。\n>conf-accept\n总页数\n>conf-type\nNumber\n>conf-default\n`1`\n---\n#demo\n>tpl\n<ui-pagination :total="10"></ui-pagination>\n:::\n\n:::vue\n@name:list\n---\n#config\n>conf-desc\n需要分页的数据组，一个数组或对象。\n>conf-accept\n数据对象<br>数据数组\n>conf-type\nObject<br>Array\n>conf-default\n`undefined`\n---\n#demo\n>desc\n当配置`list`时组件会根据`page-size`自动计算总页码。\n>tpl\n<ui-pagination :list="[1,2,3,4,5,6,7,8]" :page-size=\'3\'></ui-pagination>\n:::\n\n:::vue\n@name:page-size\n---\n#config\n>conf-desc\n每页多少条记录，只有设置`list`时才有效。\n>conf-accept\n每页记录数量\n>conf-type\nNumber\n>conf-default\n`10`\n---\n#demo\n>tpl\n<ui-pagination :list="[1,2,3,4,5,6,7,8]" :page-size=\'5\'></ui-pagination>\n:::\n\n:::vue\n@name:page\n---\n#config\n>conf-desc\n默认在第几页。\n>conf-accept\n页码\n>conf-type\nNumber\n>conf-default\n`1`\n---\n#demo\n>tpl\n<ui-pagination :total="10" :page="4"></ui-pagination>\n:::\n\n:::vue\n@name:max-show\n---\n#config\n>conf-desc\n分页栏最多显示几页，超过的页码会隐藏。\n>conf-accept\n页码数，一般为奇数\n>conf-type\nNumber\n>conf-default\n`9`\n---\n#demo\n>tpl\n<ui-pagination :total="10" :page="4" :max-show="3"></ui-pagination>\n:::\n\n:::vue\n@name:jump-page\n---\n#config\n>conf-desc\n是否允许输入页码跳转。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>desc\n可以关闭通过页码跳转页面。\n>tpl\n<ui-pagination :total="10" :max-show="5" :jump-page="false"></ui-pagination>\n:::\n\n[[[方法]]]\n\n:::vue\n@name:getPage()\n---\n#method\n>method-desc\n获取当前页码。\n>method-return\n返回当前页码。\n---\n#demo\n>tpl\n<div>\n    <ui-pagination ref="demo2" :total="10"></ui-pagination>\n    <br><br>\n    <ui-link js="alert(morning.findVM(\'demo2\').getPage());">获取当前页码</ui-link>\n</div>\n:::\n\n:::vue\n@name:to(num)\n---\n#method\n>method-desc\n跳转到指定页码。\n>method-args\n|num|NO|需要跳转的页码|大于最大页数：跳转到最后一页<br>小于0：跳转到从最后开始往前`num`页<br>等于0：跳转到第一页|`Number`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-pagination ref="demo3" :total="10"></ui-pagination>\n    <br><br>\n    <ui-link js="morning.findVM(\'demo3\').to(5);">跳转到第5页</ui-link>\n    <br>\n    <ui-link js="morning.findVM(\'demo3\').to(20);">跳转到大于最大页数</ui-link>\n    <br>\n    <ui-link js="morning.findVM(\'demo3\').to(-5);">跳转到从后往前第5页</ui-link>\n    <br>\n    <ui-link js="morning.findVM(\'demo3\').to(1);">跳转到第1页(输入1)</ui-link>\n    <br>\n    <ui-link js="morning.findVM(\'demo3\').to(0);">跳转到第1页(输入0)</ui-link>\n</div>\n:::\n\n:::vue\n@name:next([offset])\n---\n#method\n>method-desc\n跳转到后几页。\n>method-args\n|offset|YES|需要往后跳转的页码数|页码数|`Number`|`1`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-pagination ref="demo4" :total="10"></ui-pagination>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo4\').next();">往后跳转1页</ui-link>\n    <ui-link js="morning.findVM(\'demo4\').next(3);">往后跳转3页</ui-link>\n</div>\n:::\n\n:::vue\n@name:prev([offset])\n---\n#method\n>method-desc\n跳转到前几页。\n>method-args\n|offset|YES|需要往前跳转的页码数|页码数|`Number`|`1`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-pagination ref="demo5" :total="10" :page="8"></ui-pagination>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo5\').prev();">往前跳转1页</ui-link>\n    <ui-link js="morning.findVM(\'demo5\').prev(3);">往前跳转3页</ui-link>\n</div>\n:::\n\n:::vue\n@name:setTotal(num)\n---\n#method\n>method-desc\n重新设置总页数。如果设置了`list`此方法无效。\n<br><br>\n如果新的页数小于当前所在的页码，则会跳到新页数的最后一页。\n>method-args\n|num|NO|总页码数|页码数|`Number`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-pagination ref="demo6" :total="2"></ui-pagination>\n    <br><br>\n    <ui-link js="morning.findVM(\'demo6\').setTotal(10);">总页数设为10</ui-link>\n    <ui-link js="morning.findVM(\'demo6\').setTotal(3);">总页数设为3</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::vue\n@name:emit\n---\n#event\n>event-desc\n当页码改变时时触发。\n---\n#demo\n>tpl\n<div>\n    <p>切换页码触发emit事件</p>\n    <ui-pagination @emit="echo" :total="10"></ui-pagination>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo7.console1\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:生命周期事件\n---\n#event\n>event-desc\n组件的生命周期事件，详见:[基础/事件/生命周期事件](/guide/event.html#生命周期事件)。\n---\n#demo\n>tpl\n<div>\n    <ui-pagination\n        ref="demoEventLifecycle"\n        v-show="show"\n        :total="10"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >{*text*}</ui-pagination>\n    <br><br>\n    <ui-link js="this.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="this.$refs[\'demoEventLifecycle\'].$destroy();">触发destroy</ui-link>\n</div>\n>script\n{\n    data : function () {\n        return {\n           text : \'分页\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n}\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/pagination/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];i._withStripped=!0},356:function(n,e,t){"use strict";t.r(e);var i=t(55),o=t.n(i);for(var a in i)"default"!==a&&function(n){t.d(e,n,function(){return i[n]})}(a);var r=t(174),u=t(0),d=!1;var s=function(n){d||t(759)},m=Object(u.a)(o.a,r.a,r.b,!1,s,null,null);m.options.__file="src/docs/pages/component/pagination/index.vue",e.default=m.exports},357:function(n,e,t){"use strict";var i=a(t(1)),o=a(t(356));function a(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(o.default)}})},55:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=t(2),a=(i=o)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"pagination"}},components:{"doc-component":a.default}},n.exports=e.default},759:function(n,e){}});