!function(n){function e(e){for(var l,i,c=e[0],s=e[1],r=e[2],m=0,u=[];m<c.length;m++)i=c[m],a[i]&&u.push(a[i][0]),a[i]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(n[l]=s[l]);for(d&&d(e);u.length;)u.shift()();return o.push.apply(o,r||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],l=!0,c=1;c<t.length;c++){var s=t[c];0!==a[s]&&(l=!1)}l&&(o.splice(e--,1),n=i(i.s=t[0]))}return n}var l={},a={69:0},o=[];function i(e){if(l[e])return l[e].exports;var t=l[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=l,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var l in n)i.d(t,l,function(e){return n[e]}.bind(null,l));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var d=s;o.push([675,0]),t()}({1:function(n,e){n.exports=Vue},108:function(n,e,t){"use strict";t.r(e);var l=t(109),a=t.n(l);for(var o in l)"default"!==o&&function(n){t.d(e,n,function(){return l[n]})}(o);e.default=a.a},109:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l,a=t(2),o=(l=a)&&l.__esModule?l:{default:l};e.default={data:function(){return{page:"table"}},created:function(){window.demodata={list:[{name:"Tim Boelaars",age:20,gender:"male",job:"driver"},{name:"Andrew Colin Beck",age:41,gender:"female",job:"engineer"},{name:"Gustavo Zambelli",age:23,gender:"male",job:"teacher"},{name:"Victor Erixon",age:15,gender:"female",job:"doctors"},{name:"Shaun Moynihan",age:27,gender:"female",job:"driver"},{name:"Emir Ayouni",age:21,gender:"male",job:"gardener"}],biglist:[{name:"Tim Boelaars",age:20,gender:"male",job:"driver",country:"England",height:187,weight:160},{name:"Andrew Colin Beck",age:41,gender:"female",job:"engineer",country:"United States",height:165,weight:116},{name:"Gustavo Zambelli",age:23,gender:"male",job:"teacher",country:"Thailand",height:178,weight:132},{name:"Victor Erixon",age:15,gender:"female",job:"doctors",country:"United States",height:159,weight:100},{name:"Shaun Moynihan",age:27,gender:"female",job:"driver",country:"England",height:163,weight:116},{name:"Emir Ayouni",age:21,gender:"male",job:"gardener",country:"United States",height:173,weight:122}]}},components:{"doc-component":o.default}},n.exports=e.default},301:function(n,e,t){"use strict";var l=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 表格 `<ui-table>`\n\n<doc-component-status page=\"table\"></doc-component-status>\n\n[[[开始]]]\n\n定义一个表格，这是一个块级元素。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-table :list=\"list\"></ui-table>\n>script\n{\n    data : {\n        list : [\n            {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},\n            {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},\n            {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},\n            {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},\n            {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},\n            {name : 'Emir Ayouni', age : 21, gender : 'male', job : 'gardener'}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:单列控制\n---\n#demo\n>desc\n`ui-table`通过`col-set`配置，可以设置单列的：\n<br><br>\n- 宽度\n- 最小宽度\n- 最大宽度\n- 样式\n- 禁用状态\n- 对齐方式\n- 是否是标题列(标题列将被聚合在一起)\n<br><br>\n更多单列控制见：[col-set配置](/component/table.html#col-set)。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name', title : true},\n            {col : 'age', name : 'Age', minwidth : '150px'},\n            {col : 'gender', name : 'Gender', disabled : true},\n            {col : 'job', name : 'Job', align : 'right', style : 'success'}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:单行控制\n---\n#demo\n>desc\n`ui-table`通过`row-set`配置，可以设置行的：\n<br><br>\n- 样式\n- 禁用状态\n- 对齐方式\n<br><br>\n更多单行控制见：[row-set配置](/component/table.html#row-set)。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :row-set=\"rowset\" :show-col-name=\"true\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name'},\n            {col : 'age', name : 'Age'},\n            {col : 'gender', name : 'Gender'},\n            {col : 'job', name : 'Job'}\n        ],\n        rowset : [\n            {row : 1, align : 'left'},\n            {row : 2, style : 'warning'},\n            {row : 4, disabled : true}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:单元格控制\n---\n#demo\n>desc\n`ui-table`通过`cell-set`配置，可以设置单元格的：\n<br><br>\n- 样式\n- 禁用状态\n- 对齐方式\n<br><br>\n更多单元格控制见：[cell-set配置](/component/table.html#cell-set)。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :cell-set=\"cellset\" :show-col-name=\"true\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name'},\n            {col : 'age', name : 'Age'},\n            {col : 'gender', name : 'Gender'},\n            {col : 'job', name : 'Job'}\n        ],\n        cellset : [\n            {row : 0, col : 'age', style : 'success'},\n            {row : 2, col : 'gender', disabled : true},\n            {row : 3, col : 'job', style : 'danger'},\n            {row : 4, col : 'job', align : 'left'}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:内嵌HTML\n---\n#demo\n>desc\n表格数据列表支持传入HTML内容，在渲染时这些HTML也会被渲染。\n>tpl\n<ui-table :list=\"list\"></ui-table>\n>script\n{\n    data : {\n        list : [\n            {name : 'Tim Boelaars', age : 20, gender : 'male', action : '<a href=\"#\">发送</a>'},\n            {name : 'Andrew Colin Beck', age : 41, gender : 'female', action : '<a href=\"#\">发送</a>'},\n            {name : 'Gustavo Zambelli', age : 23, gender : 'male', action : '<a href=\"#\">发送</a>'},\n            {name : 'Victor Erixon', age : 15, gender : 'female', action : '<a href=\"#\">发送</a>'},\n            {name : 'Shaun Moynihan', age : 27, gender : 'female', action : '<a href=\"#\">发送</a>'},\n            {name : 'Emir Ayouni', age : 21, gender : 'male', action : '<a href=\"#\">发送</a>'}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:内嵌Vue组件\n---\n#demo\n>desc\n表格数据列表的内容会通过Vue渲染，所以你可以使用Vue组件。\n>tpl\n<ui-table :list=\"list\"></ui-table>\n>script\n{\n    data : {\n        list : [\n            {name : 'Tim Boelaars', age : 20, gender : 'male', action : '<ui-btn color=\"success\" size=\"xs\">发送</ui-btn> <ui-link color=\"minor\" size=\"xs\">详情</ui-link>'},\n            {name : 'Andrew Colin Beck', age : 41, gender : 'female', action : '<ui-btn color=\"success\" size=\"xs\">发送</ui-btn> <ui-link color=\"minor\" size=\"xs\">详情</ui-link>'},\n            {name : 'Gustavo Zambelli', age : 23, gender : 'male', action : '<ui-btn color=\"success\" size=\"xs\">发送</ui-btn> <ui-link color=\"minor\" size=\"xs\">详情</ui-link>'}\n        ]\n    }\n}\n---\n#demo\n>desc\n但需要注意的是由于在`list`配置中通过字符串模板的形式使用，所以在模板中的组件无法直接使用上下文的`props`、`data`、`methods`等属性或方法。\n<br><br>\n为此表格组件通过`context`来帮你精确定位上下文。\n>tpl\n<div>\n    <ui-table ref=\"demoPropsData\" :list=\"list\"></ui-table>\n    <ui-link js=\"this.btntext = '发送至邮箱'\">修改btntext</ui-link>\n</div>\n>script\n{\n    data : {\n        btntext : '发送',\n        list : [\n            {name : 'Tim Boelaars', age : 20, gender : 'male', action : '<ui-btn color=\"success\" size=\"xs\">{*context.btntext*}</ui-btn> <ui-link color=\"minor\" size=\"xs\">详情</ui-link>'},\n            {name : 'Andrew Colin Beck', age : 41, gender : 'female', action : '<ui-btn color=\"success\" size=\"xs\">{*context.btntext*}</ui-btn> <ui-link color=\"minor\" size=\"xs\">详情</ui-link>'},\n            {name : 'Gustavo Zambelli', age : 23, gender : 'male', action : '<ui-btn color=\"success\" size=\"xs\">{*context.btntext*}</ui-btn> <ui-link color=\"minor\" size=\"xs\">详情</ui-link>'}\n        ]\n    }\n}\n---\n#demo\n>desc\n`methods`也同样可以通过`context`访问上下文。\n>tpl\n<ui-table :list=\"list\"></ui-table>\n>script\n{\n    data : {\n        list : [\n            {name : 'Tim Boelaars', age : 20, gender : 'male', action : '<ui-btn color=\"success\" size=\"xs\" @emit=\"context.send(0);\">第一个发送</ui-btn> <ui-link color=\"minor\" size=\"xs\">详情</ui-link>'},\n            {name : 'Andrew Colin Beck', age : 41, gender : 'female', action : '<ui-btn color=\"success\" size=\"xs\" @emit=\"context.send(1);\">第二个发送</ui-btn> <ui-link color=\"minor\" size=\"xs\">详情</ui-link>'},\n            {name : 'Gustavo Zambelli', age : 23, gender : 'male', action : '<ui-btn color=\"success\" size=\"xs\">发送</ui-btn> <ui-link color=\"minor\" size=\"xs\">详情</ui-link>'}\n        ]\n    },\n    methods : {\n        send : function (id) {\n            alert(`${this.list[id].name}发送成功!`);\n        }\n    }\n}\n:::\n\n:::vue\n@name:无数据\n---\n#demo\n>desc\n当表格无数据时会显示提示信息。\n>tpl\n<ui-table :list=\"list\"></ui-table>\n>script\n{\n    data : {\n        list : []\n    }\n}\n---\n#demo\n>desc\n如果设置了表头，表头仍然会显示。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\" export-csv title=\"无数据演示\"></ui-table>\n>script\n{\n    data : {\n        list : [],\n        colset : [\n            {col : 'name', name : 'Name'},\n            {col : 'age', name : 'Age'},\n            {col : 'gender', name : 'Gender'},\n            {col : 'job', name : 'Job'}\n        ]\n    }\n}\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部|`light-gray`|\n|状态|不支持|-|\n\n<a href=\"/guide/status.html\">查看形态文档</a>\n\n:::vue\n@layout:color\n---\n<br>\n<p>{$colorName}</p>\n<ui-table :list=\"window.demodata.list\" color=\"{$colorKey}\"></ui-table>\n:::\n\n[[[配置]]]\n\n:::vue\n@name:list\n---\n#config\n>conf-desc\n表格数据，这是一个数组，数组中每个对象是一行。对象的每个键是一列，键名是列的KEY，键值是列的数值。<br><br>表格的列是对象中所有键的合集，若某项缺少键，对应的单元格内会显示为`empty-cell`的内容。\n>conf-accept\n数组\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>desc\n用于设置表格的数据，`list`数组内每一个对象是一行，对象的每个键是一列。\n>tpl\n<ui-table :list=\"list\"></ui-table>\n>script\n{\n    data : {\n        list : [\n            {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},\n            {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},\n            {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},\n            {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},\n            {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},\n            {name : 'Emir Ayouni', age : 21, gender : 'male', job : 'gardener'}\n        ]\n    }\n}\n---\n#demo\n>desc\n表格的列是`list`中所有对象键的合集，若`list`中对象的键是不完全。\n>tpl\n<ui-table :list=\"list\"></ui-table>\n>script\n{\n    data : {\n        list : [\n            {name : 'Tim Boelaars', gender : 'male', job : 'driver'},\n            {name : 'Andrew Colin Beck', age : 41, gender : 'female'},\n            {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},\n            {name : 'Victor Erixon', job : 'doctors'},\n            {name : 'Shaun Moynihan'},\n            {}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:empty-cell-value\n---\n#config\n>conf-desc\n如果某个单元格的内容是`undefined`，则设置的默认值。\n>conf-accept\n字符串\n>conf-type\nString\n>conf-default\n`'-'`\n---\n#demo\n>tpl\n<ui-table :list=\"list\" empty-cell-value=\"空\"></ui-table>\n>script\n{\n    data : {\n        list : [\n            {name : 'Tim Boelaars', gender : 'male', job : 'driver'},\n            {name : 'Andrew Colin Beck', age : 41, gender : 'female'},\n            {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},\n            {name : 'Victor Erixon', job : 'doctors'},\n            {name : 'Shaun Moynihan'},\n            {}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:title\n---\n#config\n>conf-desc\n表格的标题。\n>conf-accept\n标题字符串\n>conf-type\nString\n>conf-default\n`undefined`\n---\n#demo\n>tpl\n<ui-table :list=\"window.demodata.list\" title=\"这里是表格标题\"></ui-table>\n:::\n\n:::vue\n@name:zebra-pattern\n---\n#config\n>conf-desc\n表格斑马线样式。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>desc\n关闭斑马线样式。\n>tpl\n<ui-table :list=\"window.demodata.list\" :zebra-pattern=\"false\"></ui-table>\n:::\n\n:::vue\n@name:vertical-border\n---\n#config\n>conf-desc\n显示表格内的竖直边框。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>desc\n隐藏表格内竖直边框。\n>tpl\n<ui-table :list=\"window.demodata.list\" :vertical-border=\"false\"></ui-table>\n:::\n\n:::vue\n@name:horizontal-border\n---\n#config\n>conf-desc\n显示表格内的横向边框。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>desc\n隐藏表格内横向边框。\n>tpl\n<ui-table :list=\"window.demodata.list\" :horizontal-border=\"false\"></ui-table>\n---\n#demo\n>desc\n隐藏表格内所有边框。\n>tpl\n<ui-table :list=\"window.demodata.list\" :vertical-border=\"false\" :horizontal-border=\"false\"></ui-table>\n:::\n\n:::vue\n@name:align\n---\n#config\n>conf-desc\n列的对齐方式，这是单个表格的全局设置，可以使用`col-set`来单独设置某一列的对齐方式。\n>conf-accept\n`'left'`: 左对齐<br>`'center'`: 居中对齐<br>`'right'`: 右对齐\n>conf-type\nString\n>conf-default\n`'center'`\n---\n#demo\n>desc\n列内容右对齐。\n>tpl\n<ui-table :list=\"window.demodata.list\" align=\"right\"></ui-table>\n---\n#demo\n>desc\n列内容左对齐。\n>tpl\n<ui-table :list=\"window.demodata.list\" align=\"left\"></ui-table>\n:::\n\n:::vue\n@name:show-col-name\n---\n#config\n>conf-desc\n在标题行显示列的名称，需要先在`col-set`中设置每列的名称。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name'},\n            {col : 'age', name : 'Age'},\n            {col : 'gender', name : 'Gender'},\n            {col : 'job', name : 'Job'}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:fixed-title-col\n---\n#config\n>conf-desc\n标题列的位置，可以设置左侧或右侧。对于列数较多的表格，可以使用固定标题列。\n>conf-accept\n`'left'`: 位于左侧，不固定<br>`'right'`: 位于右侧，不固定<br>`'left-fixed'`: 位于左侧，固定<br>`'right-fixed'`: 位于右侧，固定\n>conf-type\nString\n>conf-default\n`'left'`\n---\n#demo\n>desc\n此配置需要先在`col-set`中设置标题列。\n<br><br>\n将标题列放到右侧。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\" fixed-title-col=\"right\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name', title : true},\n            {col : 'age', name : 'Age'},\n            {col : 'gender', name : 'Gender', title : true},\n            {col : 'job', name : 'Job'}\n        ]\n    }\n}\n---\n#demo\n>desc\n将标题列固定在左侧。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\" fixed-title-col=\"left-fixed\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.biglist,\n        colset : [\n            {col : 'name', name : 'Name', title : true, minwidth : '120px'},\n            {col : 'age', name : 'Age', minwidth : '300px'},\n            {col : 'gender', name : 'Gender', title : true, minwidth : '80px'},\n            {col : 'job', name : 'Job', minwidth : '300px'},\n            {col : 'country', name : 'Country', minwidth : '300px'},\n            {col : 'height', name : 'Height', minwidth : '300px'},\n            {col : 'weight', name : 'Body weight', minwidth : '300px'}\n        ]\n    }\n}\n---\n#demo\n>desc\n将标题列固定在右侧，且导出的表格的列顺序也一样。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\" fixed-title-col=\"right-fixed\" export-csv></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.biglist,\n        colset : [\n            {col : 'name', name : 'Name', title : true, minwidth : '120px'},\n            {col : 'age', name : 'Age', minwidth : '300px'},\n            {col : 'gender', name : 'Gender', title : true, minwidth : '80px'},\n            {col : 'job', name : 'Job', minwidth : '300px'},\n            {col : 'country', name : 'Country', minwidth : '300px'},\n            {col : 'height', name : 'Height', minwidth : '300px'},\n            {col : 'weight', name : 'Body weight', minwidth : '300px'}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:title-col-width\n---\n#config\n>conf-desc\n设置标题列的绝对宽度，请谨慎使用此配置，因为此宽度优先于其他配置的宽度。<br>若此配置为`0`，则不会启用。<br><br>此配置一般用来调整标题列与表格整体的占比。\n>conf-accept\n宽度数值(单位为px，无需添加单位)\n>conf-type\nNumber\n>conf-default\n`0`\n---\n#demo\n>desc\n将宽度设为`150`。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\" fixed-title-col=\"left\" :title-col-width=\"150\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.biglist,\n        colset : [\n            {col : 'name', name : 'Name', title : true},\n            {col : 'age', name : 'Age'},\n            {col : 'gender', name : 'Gender', title : true},\n            {col : 'job', name : 'Job'},\n            {col : 'country', name : 'Country'},\n            {col : 'height', name : 'Height'},\n            {col : 'weight', name : 'Body weight'}\n        ]\n    }\n}\n---\n#demo\n>desc\n将标题列固定在左侧并将宽度设为`150`。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\" fixed-title-col=\"left-fixed\" :title-col-width=\"150\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.biglist,\n        colset : [\n            {col : 'name', name : 'Name', title : true, minwidth : '120px'},\n            {col : 'age', name : 'Age', minwidth : '300px'},\n            {col : 'gender', name : 'Gender', title : true, minwidth : '80px'},\n            {col : 'job', name : 'Job', minwidth : '300px'},\n            {col : 'country', name : 'Country', minwidth : '300px'},\n            {col : 'height', name : 'Height', minwidth : '300px'},\n            {col : 'weight', name : 'Body weight', minwidth : '300px'}\n        ]\n    }\n}\n---\n#demo\n>desc\n将标题列固定在右侧并将宽度设为`150`。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\" fixed-title-col=\"right-fixed\" :title-col-width=\"150\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.biglist,\n        colset : [\n            {col : 'name', name : 'Name', title : true, minwidth : '120px'},\n            {col : 'age', name : 'Age', minwidth : '300px'},\n            {col : 'gender', name : 'Gender', title : true, minwidth : '80px'},\n            {col : 'job', name : 'Job', minwidth : '300px'},\n            {col : 'country', name : 'Country', minwidth : '300px'},\n            {col : 'height', name : 'Height', minwidth : '300px'},\n            {col : 'weight', name : 'Body weight', minwidth : '300px'}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:col-set\n---\n#config\n>conf-desc\n列设置可以用来控制单独的一列。\n<br><br>\n`col-set`用于列控制，是一个数组，数组的每项都是一个配置对象。\n<br><br>\n配置对象包含下面这些属性，其中`col`用来定位需要设置列的位置。\n<br><br>\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|col|需要设置列的KEY|列的KEY(`list`配置中设置)|String|`undefined`|\n|name|列的名称，如果开启`show-col-name`配置，名称会显示在标题行|名称|String|`undefined`|\n|width|列的宽度，此配置会改变列在宽度分配时的权重，但不一定完全符合设置的宽度值，如果需要最小最大宽度使用`minwidth`和`maxwidth`。<br>如果需要设置标题列的宽度请使用`title-col-width`配置。|宽度数值(必需包含单位`px`或`%`)|String|`undefined`|\n|minwidth|列的最小宽度，注意列会尽可能遵循此值，但不是绝对一致的。|宽度数值(必需包含单位`px`或`%`)|String|`undefined`|\n|maxwidth|列的最小宽度，注意列会尽可能遵循此值，但不是绝对一致的。|宽度数值(必需包含单位`px`或`%`)|String|`undefined`|\n|style|设置列的色彩样式|[形态/颜色](/guide/status.html#颜色)中所有的颜色值|String|`undefined`|\n|disabled|是否展示列的禁用样式|`true`<br>`false`|Boolean|`false`|\n|align|列的对齐方式|`'left'`<br>`'right'`<br>`'align'`|String|`'align'`|\n|title|此列是否是标题列，根据`fixed-title-col`的设置所有的标题列会被放到最左或最右|`true`<br>`false`|Boolean|`false`|\n|hide|在表格中隐藏列，用于某些在`list`存在但不需要在展示的数据。列隐藏后在导出`.csv`文件时仍然会存在，如在导出`.csv`文件时也要排除，使用`col-set`配置的`export`属性来控制|`true`<br>`false`|Boolean|`false`|\n|export|导出`.csv`文件时，是否包含此列，若设为`false`此列不会被导出。一般包含行动区域的列会将此配置设为`false`|`true`<br>`false`|Boolean|`true`|\n|sort|开启单列排序，必需启用`show-col-name`才有效。多列排序需要启用`multi-sort`配置|`true`<br>`false`|Boolean|`false`|\n|pos|列的位置，这是一个数字，默认为0，表示按照数据输入的顺序。数值越大的列将会显示的越后面，数值也可以为负数。|位置数值|Number|`0`|\n<br>\n注意：在设置`width`、`minwidth`、`maxwidth`为0时，需要加上单位，如：`0px`或`0%`。\n>conf-accept\n数组\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>title\nname\n>desc\n通过`name`及`show-col-name`设置标题行。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name'},\n            {col : 'age', name : 'Age'},\n            {col : 'gender', name : 'Gender'},\n            {col : 'job', name : 'Job'}\n        ]\n    }\n}\n---\n#demo\n>title\nname\n>desc\n标题行结合表头。\n>tpl\n<ui-table :list=\"list\" title=\"表名\" :col-set=\"colset\" :show-col-name=\"true\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name'},\n            {col : 'age', name : 'Age'},\n            {col : 'gender', name : 'Gender'},\n            {col : 'job', name : 'Job'}\n        ]\n    }\n}\n---\n#demo\n>title\nwidth、minwidth、maxwidth\n>desc\n设置列的`width` 、 `minwidth` 、 `maxwidth`。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name', maxwidth : '50px'},\n            {col : 'age', name : 'Age', width : '150px'},\n            {col : 'gender', name : 'Gender', minwidth : '150px'},\n            {col : 'job', name : 'Job'}\n        ]\n    }\n}\n---\n#demo\n>title\nstyle\n>desc\n设置指定列的样式（仅支持形态中的色彩）。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name'},\n            {col : 'age', name : 'Age', style : 'primary'},\n            {col : 'gender', name : 'Gender'},\n            {col : 'job', name : 'Job'}\n        ]\n    }\n}\n---\n#demo\n>title\ndisabled\n>desc\n将单元格设置为禁用样式。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name'},\n            {col : 'age', name : 'Age', disabled : true},\n            {col : 'gender', name : 'Gender'},\n            {col : 'job', name : 'Job'}\n        ]\n    }\n}\n---\n#demo\n>title\nalign\n>desc\n使用`align`来单独设置某一列的对齐方式。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name', align : 'right'},\n            {col : 'age', name : 'Age', align : 'left'},\n            {col : 'gender', name : 'Gender', align : 'center'},\n            {col : 'job', name : 'Job'}\n        ]\n    }\n}\n---\n#demo\n>title\ntitle\n>desc\n使用`title`来置标题列，标题列会被放置在最左或最右（通过`fixed-title-col`设置）。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name', title : true},\n            {col : 'age', name : 'Age'},\n            {col : 'gender', name : 'Gender', title : true},\n            {col : 'job', name : 'Job'}\n        ]\n    }\n}\n---\n#demo\n>title\ntitle\n>desc\n使用`title`设置标题列之后，导出的`csv`的列顺序也会保持一致。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\" export-csv></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name', title : true},\n            {col : 'age', name : 'Age'},\n            {col : 'gender', name : 'Gender', title : true},\n            {col : 'job', name : 'Job'}\n        ]\n    }\n}\n---\n#demo\n>title\ntitle\n>desc\n使用`title`设置标题列之后，若未开启`show-col-name`，导出的`csv`不会包含标题行。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" export-csv></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name', title : true},\n            {col : 'age', name : 'Age'},\n            {col : 'gender', name : 'Gender', title : true},\n            {col : 'job', name : 'Job'}\n        ]\n    }\n}\n---\n#demo\n>title\nhide\n>desc\n在表格中隐藏`Job`和`Gender`列，同时不导出`Gender`列。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\" export-csv></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name'},\n            {col : 'age', name : 'Age'},\n            {col : 'gender', name : 'Gender', hide : true, export : false},\n            {col : 'job', name : 'Job', hide : true}\n        ]\n    }\n}\n---\n#demo\n>title\nexport\n>desc\n不导出`Gender`列。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\" export-csv></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name'},\n            {col : 'age', name : 'Age'},\n            {col : 'gender', name : 'Gender', export : false},\n            {col : 'job', name : 'Job'}\n        ]\n    }\n}\n---\n#demo\n>title\nsort\n>desc\n通过`sort`字段可以开启单列排序(多列排序需要开启`multi-sort`配置)，并且导出的`csv`也是排序之后的顺序。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\" export-csv></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name', sort : true},\n            {col : 'age', name : 'Age', sort : true},\n            {col : 'gender', name : 'Gender'},\n            {col : 'job', name : 'Job'}\n        ]\n    }\n}\n---\n#demo\n>title\nsort\n>desc\n标题列也可以使用`sort`。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\" export-csv></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name', sort : true, title : true},\n            {col : 'age', name : 'Age', sort : true},\n            {col : 'gender', name : 'Gender'},\n            {col : 'job', name : 'Job'}\n        ]\n    }\n}\n---\n#demo\n>title\npos\n>desc\n将`Name`的位置放到第三列，将`Age`放到第四列。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :show-col-name=\"true\" export-csv></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name', pos : 1},\n            {col : 'age', name : 'Age', pos : 2},\n            {col : 'gender', name : 'Gender'},\n            {col : 'job', name : 'Job'}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:row-set\n---\n#config\n>conf-desc\n单行设置可以用来控制一行。\n<br><br>\n`row-set`用于行控制，是一个数组，数组的每项都是一个配置对象，用来设置单行。\n<br><br>\n配置对象包含下面这些属性，其中`row`用来定位需要设置行的位置。\n<br><br>\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|row|需要设置的行数(从0开始，0表示标题行)|行数|Number|`undefined`|\n|style|设置行的色彩样式|[形态/颜色](/guide/status.html#颜色)中所有的颜色值|String|`undefined`|\n|disabled|是否展示行的禁用样式|`true`<br>`false`|Boolean|`false`|\n|align|行的对齐方式|`'left'`<br>`'right'`<br>`'align'`|String|`'align'`|\n<br>\n注意：在设置`width`、`minwidth`、`maxwidth`为0时，需要加上单位，如：`0px`或`0%`。\n>conf-accept\n数组\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>title\nstyle\n>desc\n设置指定行的样式（仅支持形态中的色彩）。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :row-set=\"rowset\" :show-col-name=\"true\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name'},\n            {col : 'age', name : 'Age'},\n            {col : 'gender', name : 'Gender'},\n            {col : 'job', name : 'Job'}\n        ],\n        rowset : [\n            {row : 0, style : 'success'},\n            {row : 2, style : 'warning'}\n        ]\n    }\n}\n---\n#demo\n>title\ndisabled\n>desc\n将单行设置为禁用样式。\n>tpl\n<ui-table :list=\"list\" :row-set=\"rowset\" export-csv></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        rowset : [\n            {row : 1, disabled : true}\n        ]\n    }\n}\n---\n#demo\n>title\nalign\n>desc\n使用`align`来设置单行的对齐方式。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :row-set=\"rowset\" :show-col-name=\"true\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name'},\n            {col : 'age', name : 'Age'},\n            {col : 'gender', name : 'Gender'},\n            {col : 'job', name : 'Job'}\n        ],\n        rowset : [\n            {row : 0, align : 'left'},\n            {row : 1, align : 'right'},\n            {row : 2, align : 'center'}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:cell-set\n---\n#config\n>conf-desc\n单元格设置可以用来控制单个单元格。\n<br><br>\n`cell-set`用于单元格控制，是一个数组，数组的每项都是一个配置对象，用来设置单个单元格。\n<br><br>\n配置对象包含下面这些属性，其中`row`和`col`用来定位需要设置单元格的位置。\n<br><br>\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|row|需要设置单元格的行数(从0开始，0表示标题行)|行数|Number|`undefined`|\n|col|需要设置单元格所在列的KEY|列的KEY(`list`配置中设置)|String|`undefined`|\n|style|设置单元格的色彩样式|[形态/颜色](/guide/status.html#颜色)中所有的颜色值|String|`undefined`|\n|disabled|是否展示单元格的禁用样式|`true`<br>`false`|Boolean|`false`|\n|align|单元格的对齐方式|`'left'`<br>`'right'`<br>`'align'`|String|`'align'`|\n<br>\n注意：在设置`width`、`minwidth`、`maxwidth`为0时，需要加上单位，如：`0px`或`0%`。\n>conf-accept\n数组\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>title\nstyle\n>desc\n设置指定单元格的样式（仅支持形态中的色彩）。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :cell-set=\"cellset\" :show-col-name=\"true\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name'},\n            {col : 'age', name : 'Age'},\n            {col : 'gender', name : 'Gender'},\n            {col : 'job', name : 'Job'}\n        ],\n        cellset : [\n            {row : 0, col : 'age', style : 'success'},\n            {row : 2, col : 'age', style : 'warning'},\n            {row : 3, col : 'job', style : 'danger'}\n        ]\n    }\n}\n---\n#demo\n>title\ndisabled\n>desc\n设将单元格设置为禁用样式。\n>tpl\n<ui-table :list=\"list\" :cell-set=\"cellset\" export-csv></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        cellset : [\n            {row : 1, col : 'age', disabled : true}\n        ]\n    }\n}\n---\n#demo\n>title\nalign\n>desc\n使用`align`来单独设置单元格的对齐方式。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" :cell-set=\"cellset\" :show-col-name=\"true\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name'},\n            {col : 'age', name : 'Age'},\n            {col : 'gender', name : 'Gender'},\n            {col : 'job', name : 'Job'}\n        ],\n        cellset : [\n            {row : 0, col : 'age', align : 'left'},\n            {row : 1, col : 'age', align : 'right'},\n            {row : 2, col : 'age', align : 'center'},\n            {row : 3, col : 'age', align : 'left'},\n            {row : 4, col : 'age', align : 'right'}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:export-csv\n---\n#config\n>conf-desc\n开启将表格导出csv文件的功能。<br><br>导出的表格单元格内容中若包含HTML，则会被过滤仅保留文本内容(若存在`<br>`则会被替换成换行符)。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<ui-table :list=\"list\" export-csv></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list\n    }\n}\n:::\n\n:::vue\n@name:csv-name\n---\n#config\n>conf-desc\n导出csv文件的名称。\n>conf-accept\n文件名称(不需要加尾缀)\n>conf-type\nString\n>conf-default\n`undefined`\n---\n#demo\n>tpl\n<ui-table :list=\"list\" export-csv csv-name=\"demo\"></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list\n    }\n}\n:::\n\n:::vue\n@name:multi-sort\n---\n#config\n>conf-desc\n支持多列排序，默认只支持单列排序。多列排序时会根据所选排序列的顺序进行多次排序。使用此配置前需要先通过`col-set`的指定排序列。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>desc\n使用`multi-sort`后设置多个排序列，当多个列进行排序时会按照先后顺序对表格进行多次排序。\n>tpl\n<ui-table :list=\"list\" :col-set=\"colset\" show-col-name multi-sort export-csv></ui-table>\n>script\n{\n    data : {\n        list : window.demodata.list,\n        colset : [\n            {col : 'name', name : 'Name', sort : true},\n            {col : 'age', name : 'Age', sort : true},\n            {col : 'gender', name : 'Gender', sort : true},\n            {col : 'job', name : 'Job'}\n        ]\n    }\n}\n:::\n\n[[[方法]]]\n\n<h1>暂无</h1>\n\n[[[事件]]]\n\n:::vue\n@name:list-change\n---\n#event\n>event-desc\n当表格数据变化后触发。\n---\n#demo\n>tpl\n<div>\n    <ui-table ref=\"demo2\" :list=\"list\" @list-change=\"echo\"></ui-table>\n    <br><br>\n    <ui-link js=\"morning.findVM('demo2').conf.list = window.demodata.biglist;\">重新设置表格数据</ui-link>\n</div>\n>script\n{\n    data : {\n        list : window.demodata.list\n    },\n    methods : {\n        echo : function () {\n            console.log('demo2.console1', `list-change event!`);\n        }\n    }\n}\n:::\n\n:::vue\n@layout:lifecycle-event\n---\ntable\n表格\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/table/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])},a=[];l._withStripped=!0,t.d(e,"a",function(){return l}),t.d(e,"b",function(){return a})},675:function(n,e,t){"use strict";var l=o(t(1)),a=o(t(676));function o(n){return n&&n.__esModule?n:{default:n}}new l.default({el:"#root",render:function(n){return n(a.default)}})},676:function(n,e,t){"use strict";t.r(e);var l=t(301),a=t(108);for(var o in a)"default"!==o&&function(n){t.d(e,n,function(){return a[n]})}(o);var i=t(0),c=Object(i.a)(a.default,l.a,l.b,!1,null,null,null);c.options.__file="src/docs/pages/component/table/index.vue",e.default=c.exports}});