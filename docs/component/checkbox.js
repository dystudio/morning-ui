!function(n){function e(e){for(var o,c,a=e[0],l=e[1],s=e[2],u=0,m=[];u<a.length;u++)c=a[u],t[c]&&m.push(t[c][0]),t[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o]);for(d&&d(e);m.length;)m.shift()();return r.push.apply(r,s||[]),i()}function i(){for(var n,e=0;e<r.length;e++){for(var i=r[e],o=!0,a=1;a<i.length;a++){var l=i[a];0!==t[l]&&(o=!1)}o&&(r.splice(e--,1),n=c(c.s=i[0]))}return n}var o={},t={15:0};var r=[];function c(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=n,c.c=o,c.d=function(n,e,i){c.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:i})},c.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var d=l;r.push([263,0]),i()}({1:function(n,e){n.exports=Vue},127:function(n,e,i){"use strict";i.d(e,"a",function(){return o}),i.d(e,"b",function(){return t});var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 复选框组 `<ui-checkbox>`\n\n<doc-component-status page=\"checkbox\"></doc-component-status>\n\n[[[开始]]]\n\n定义复选框组，复选框组可以多选，若需要单选请使用`ui-radio`。\n\n#### 使用\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-checkbox form-name=\"姓名\" :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"></ui-checkbox>\n</div>\n:::\n\n#### 带边框的复选框组\n\n通过`border`样式类指定复选框组以带边框的样式显示：\n\n:::democode/html\n<div style=\"width:320px;\">\n    <ui-checkbox form-name=\"姓名\" class=\"border\" :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"></ui-checkbox>\n</div>\n:::\n\n#### 垂直布局的复选框组\n\n:::democode/html\n<div style=\"width:320px;\">\n    <ui-checkbox form-name=\"姓名\" class=\"vertical\" :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"></ui-checkbox>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset/html\nformStatusWithStyle\n---\nuikey:checkbox\nstatusDefaultValue:['Tim']\nstatusMoreAttr::list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n[[[配置]]]\n\n:::preset/html\nformConfigTable\n---\n|[accept-html](#accept-html)|项目的的名称可以使用HTML|`true`<br>`false`|Boolean|`false`|\n|[list](#list)|可选项目列表|可选项目列表的对象，键名是key，键值是name用于显示|Object|`{}`|\n|[disabled-options](#disabled-options)|禁止选中的项目（`set()`方法仍然可以选中禁止的项目，但`toggle()`方法无法选中禁止的项目）。|由禁止修改项目键名(key)组成的数组|Array|`[]`|\n|[max](#max)|最多可选项目的数量|数量|Number|`Infinity`|\n|[parent](#parent)|此配置可以将当前的复选框组件关联到另一个复选框的某个选项上，建立从属关系。<br><br>如果父选项被选中，那么所关联的子选项都会被选中。<br>如果部分子选项被选中，那么父选项会处于部分选中状态。<br><br>每个父选项只能关联到一个复选框组件上。关联时会优先取子复选框组件的状态。|`[关联复选框的选择器]:[关联选项的key]`|String|`''`|\n:::\n\n:::preset/html\nformConfigDemo\n---\nuikey:checkbox\nconfigDefaultValue:['Tim']\nconfigMoreAttr::list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n#### accept-html\n\n如果让`ui-checkbox`的显示文本，渲染成HTML，而不是字符串。可以设置`accept-html`。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : function () {\n        return {\n            list : {\n                Red : '<span style=\"color:red;\">我是红色span</span>',\n                Green : '<span style=\"color:green;\">我是绿色span</span>'\n            }\n        }\n    }\n});\n---\n<div style=\"width:300px;\">\n    <ui-checkbox\n        form-name=\"姓名\"\n        accept-html\n        :list=\"list\"\n    ></ui-checkbox>\n</div>\n:::\n\n#### list\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-checkbox form-name=\"姓名\" :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"></ui-checkbox>\n</div>\n:::\n\n#### disabled-options\n\n被禁止的项目将无法选中：\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-checkbox form-name=\"姓名\" :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon',Shaun:'Shaun Moynihan',Emir:'Emir Ayouni'}\" :disabled-options=\"['Tim', 'Victor']\"></ui-checkbox>\n</div>\n:::\n\n若禁止的项目已经被选中，则不可修改：\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-checkbox form-name=\"姓名\" :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon',Shaun:'Shaun Moynihan',Emir:'Emir Ayouni'}\" :disabled-options=\"['Tim', 'Victor']\" :default-value=\"['Tim', 'Emir']\"></ui-checkbox>\n</div>\n:::\n\n#### max\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-checkbox form-name=\"姓名\" :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon',Shaun:'Shaun Moynihan',Emir:'Emir Ayouni'}\" :max=\"3\"></ui-checkbox>\n</div>\n:::\n\n#### parent\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-checkbox form-name=\"Continents\" id=\"continents\" :list=\"{asia:'Asia',na:'North America',europe:'Europe',africa:'Africa'}\"></ui-checkbox>\n    <ui-checkbox form-name=\"Asia\" parent=\"#continents:asia\" :list=\"{beijing:'Beijing',hk:'Hong Kong',singapore:'Singapore',tokyo:'Tokyo'}\"></ui-checkbox>\n    <ui-checkbox form-name=\"North America\" parent=\"#continents:na\" :list=\"{ny:'New York',toronto:'Toronto',la:'Los Angeles'}\"></ui-checkbox>\n    <ui-checkbox form-name=\"Europe\" parent=\"#continents:europe\" :list=\"{london:'London',paris:'Paris',berlin:'Berlin',rome:'Rome',copenhagen:'Copenhagen',madrid:'Madrid'}\"></ui-checkbox>\n    <ui-checkbox form-name=\"Africa\" parent=\"#continents:africa\" :list=\"{cairo:'Cairo',cuba:'Cuba'}\"></ui-checkbox>\n</div>\n:::\n\n有默认值的情况：\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-checkbox form-name=\"Continents\" id=\"continents2\" :default-value=\"['europe']\" :list=\"{asia:'Asia',na:'North America',europe:'Europe',africa:'Africa'}\"></ui-checkbox>\n    <ui-checkbox form-name=\"Asia\" parent=\"#continents2:asia\" :list=\"{beijing:'Beijing',hk:'Hong Kong',singapore:'Singapore',tokyo:'Tokyo'}\"></ui-checkbox>\n    <ui-checkbox form-name=\"North America\" parent=\"#continents2:na\" :default-value=\"['ny']\" :list=\"{ny:'New York',toronto:'Toronto',la:'Los Angeles'}\"></ui-checkbox>\n    <ui-checkbox form-name=\"Europe\" parent=\"#continents2:europe\" :list=\"{london:'London',paris:'Paris',berlin:'Berlin',rome:'Rome',copenhagen:'Copenhagen',madrid:'Madrid'}\"></ui-checkbox>\n    <ui-checkbox form-name=\"Africa\" parent=\"#continents2:africa\" :default-value=\"['cairo', 'cuba']\" :list=\"{cairo:'Cairo',cuba:'Cuba'}\"></ui-checkbox>\n</div>\n:::\n\n配合`disabled-options`一起使用：\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-checkbox form-name=\"Continents\" id=\"continents3\" :list=\"{asia:'Asia'}\"></ui-checkbox>\n    <ui-checkbox form-name=\"Asia\" parent=\"#continents3:asia\" :disabled-options=\"['beijing', 'hk']\" :list=\"{beijing:'Beijing',hk:'Hong Kong',singapore:'Singapore',tokyo:'Tokyo'}\"></ui-checkbox>\n</div>\n:::\n\n配合`max`一起使用：\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-checkbox form-name=\"Continents\" id=\"continents4\" :list=\"{asia:'Asia'}\"></ui-checkbox>\n    <ui-checkbox form-name=\"Asia\" parent=\"#continents4:asia\" :max=\"2\" :list=\"{beijing:'Beijing',hk:'Hong Kong',singapore:'Singapore',tokyo:'Tokyo'}\"></ui-checkbox>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset/html\nformMethod\n---\nuikey:checkbox\nmethodValue:['Tim', 'Andrew']\nmethodDefaultValue:['Tim']\nmethodMoreAttr::list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n#### toggle(key, [checked])\n\n切换单个选项的选中状态。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|key|NO|需要切换状态的选项的键值|键值字符串|`String`|`undefined`|\n|checked|YES|需要切换的状态|`undefined`: 切换到相反的状态<br>`true`: 切换到选中状态<br>`false`: 切换到未选中状态|`Undefined`<br>`Boolean`|`undefined`|\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-checkbox ref=\"demo2\" form-name=\"姓名\" :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"></ui-checkbox>\n</div>\n<br>\n<ui-link js=\"morning.findVM('demo2').toggle('Tim');\">切换Tim至相反状态</ui-link>\n<ui-link js=\"morning.findVM('demo2').toggle('Tim', true);\">切换Tim至选中</ui-link>\n<ui-link js=\"morning.findVM('demo2').toggle('Tim', false);\">切换Tim至未选中</ui-link>\n:::\n\n[[[事件]]]\n\n:::preset/html\nformEvent\n---\nuikey:checkbox\neventValue:['Tim', 'Andrew']\neventMoreAttr::list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Array` : 数组\n\n#### 值过滤\n\n- 所有不支持的值类型，都会被尝试转换成空数组(`[]`)。\n- 若数组中的键值不在键值列表(`list`)中，会被过滤。\n- 若数组的长度大于`max`配置，则会取头开始取`max`配置长度的项目，多余的项目会被丢弃。\n\n#### 值格式\n\n包含选中键值的无序数组，键值是字符串。\n\n#### 默认值\n\n`[]`\n\n#### 输入/输出示例\n\n:::repeat/html\nformValueType:checkbox\n---\n<div>\n    <p>{$valueType}类型</p>\n    <div style=\"width:300px;\">\n        <ui-checkbox ref=\"demoType{$valueType}\" :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"></ui-checkbox>\n    </div>\n    <br>\n    <ui-link js=\"window.morning.findVM('demoType{$valueType}').set({$&valueContent})\">设置{$valueType}类型</ui-link>\n    <ui-link js=\"alert(window.morning.findVM('demoType{$valueType}').getJson())\">获取表单JSON值</ui-link>\n</div>\n<br>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/checkbox/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])},t=[];o._withStripped=!0},18:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,t=i(2),r=(o=t)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"checkbox"}},components:{"doc-component":r.default}},n.exports=e.default},262:function(n,e,i){"use strict";i.r(e);var o=i(18),t=i.n(o);for(var r in o)"default"!==r&&function(n){i.d(e,n,function(){return o[n]})}(r);var c=i(127),a=i(0),l=!1;var s=function(n){l||i(644)},d=Object(a.a)(t.a,c.a,c.b,!1,s,null,null);d.options.__file="src/docs/pages/component/checkbox/index.vue",e.default=d.exports},263:function(n,e,i){"use strict";var o=r(i(1)),t=r(i(262));function r(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(t.default)}})},644:function(n,e){}});