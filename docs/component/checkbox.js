!function(n){function e(e){for(var o,c,a=e[0],d=e[1],u=e[2],l=0,m=[];l<a.length;l++)c=a[l],t[c]&&m.push(t[c][0]),t[c]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(n[o]=d[o]);for(s&&s(e);m.length;)m.shift()();return r.push.apply(r,u||[]),i()}function i(){for(var n,e=0;e<r.length;e++){for(var i=r[e],o=!0,a=1;a<i.length;a++){var d=i[a];0!==t[d]&&(o=!1)}o&&(r.splice(e--,1),n=c(c.s=i[0]))}return n}var o={},t={21:0},r=[];function c(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=n,c.c=o,c.d=function(n,e,i){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)c.d(i,o,function(e){return n[e]}.bind(null,o));return i},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],d=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var s=d;r.push([798,0]),i()}({1:function(n,e){n.exports=Vue},214:function(n,e,i){"use strict";i.r(e);var o=i(215),t=i.n(o);for(var r in o)"default"!==r&&function(n){i.d(e,n,function(){return o[n]})}(r);e.default=t.a},215:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,t=i(2),r=(o=t)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"checkbox"}},components:{"doc-component":r.default}},n.exports=e.default},285:function(n,e,i){"use strict";var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 复选框组 `<ui-checkbox>`\n\n<doc-component-status page=\"checkbox\"></doc-component-status>\n\n[[[开始]]]\n\n定义复选框组，复选框组可以多选，若需要单选请使用`ui-radio`。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-checkbox\n        form-name=\"姓名\"\n        :list=\"{\n            Tim : 'Tim Boelaars',\n            Andrew : 'Andrew Colin Beck',\n            Victor : 'Victor Erixon'\n        }\"\n    ></ui-checkbox>\n</div>\n:::\n\n:::vue\n@name:带边框的复选框组\n---\n#demo\n>desc\n通过`border`样式类指定复选框组以带边框的样式显示。\n>tpl\n<div style=\"width:320px;\">\n    <ui-checkbox\n        form-name=\"姓名\"\n        class=\"border\"\n        :list=\"{\n            Tim : 'Tim Boelaars',\n            Andrew : 'Andrew Colin Beck',\n            Victor : 'Victor Erixon'\n        }\"\n    ></ui-checkbox>\n</div>\n:::\n\n:::vue\n@name:垂直布局的复选框组\n---\n#demo\n>tpl\n<div style=\"width:320px;\">\n    <ui-checkbox\n        form-name=\"姓名\"\n        class=\"vertical\"\n        :list=\"{\n            Tim : 'Tim Boelaars',\n            Andrew : 'Andrew Colin Beck',\n            Victor : 'Victor Erixon'\n        }\"\n    ></ui-checkbox>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset\n@name:formStatusWithStyle\n@uikey:checkbox\n@defaultValue:['Tim']\n@attrs: :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:checkbox\n@defaultValue:['Tim']\n@attrs: :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n:::vue\n@name:accept-html\n---\n#config\n>conf-desc\n项目的的名称可以使用HTML。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>desc\n如果让`ui-checkbox`的显示文本，渲染成HTML，而不是字符串。可以设置`accept-html`。\n>tpl\n<div style=\"width:300px;\">\n    <ui-checkbox\n        form-name=\"姓名\"\n        accept-html\n        :list=\"list\"\n    ></ui-checkbox>\n</div>\n>script\n{\n    data : function () {\n        return {\n            list : {\n                Red : '<span style=\"color:red;\">我是红色span</span>',\n                Green : '<span style=\"color:green;\">我是绿色span</span>'\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:list\n---\n#config\n>conf-desc\n可选项目列表。\n>conf-accept\n可选项目列表的对象，键名是key，键值是name用于显示\n>conf-type\nObject\n>conf-default\n`{}`\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-checkbox\n        form-name=\"姓名\"\n        :list=\"{\n            Tim : 'Tim Boelaars',\n            Andrew : 'Andrew Colin Beck',\n            Victor : 'Victor Erixon'\n        }\"\n    ></ui-checkbox>\n</div>\n:::\n\n:::vue\n@name:disabled-options\n---\n#config\n>conf-desc\n禁止选中的项目（`set()`方法仍然可以选中禁止的项目，但`toggle()`方法无法选中禁止的项目）。\n>conf-accept\n由禁止修改项目键名(key)组成的数组\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>desc\n被禁止的项目将无法选中。\n>tpl\n<div style=\"width:300px;\">\n    <ui-checkbox \n        form-name=\"姓名\" \n        :list=\"{\n            Tim : 'Tim Boelaars',\n            Andrew : 'Andrew Colin Beck',\n            Victor : 'Victor Erixon',\n            Shaun : 'Shaun Moynihan',\n            Emir : 'Emir Ayouni'\n        }\" \n        :disabled-options=\"['Tim', 'Victor']\"\n    ></ui-checkbox>\n</div>\n---\n#demo\n>desc\n若禁止的项目已经被选中，则不可修改。\n>tpl\n<div style=\"width:300px;\">\n    <ui-checkbox \n        form-name=\"姓名\" \n        :list=\"{\n            Tim : 'Tim Boelaars',\n            Andrew : 'Andrew Colin Beck',\n            Victor : 'Victor Erixon',\n            Shaun : 'Shaun Moynihan',\n            Emir : 'Emir Ayouni'\n        }\" \n        :disabled-options=\"['Tim', 'Victor']\" \n        v-model=\"value\"\n    ></ui-checkbox>\n</div>\n>script\n{\n    data : {\n        value : ['Tim', 'Emir']\n    }\n}\n:::\n\n:::vue\n@name:hidden-options\n---\n#config\n>conf-desc\n隐藏指定的选项。注意：隐藏仅仅是视觉上的，若隐藏的选项已经选中，并不会改变其选中状态。\n>conf-accept\n由需要隐藏项目键名(key)组成的数组\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-checkbox\n        form-name=\"姓名\"\n        :list=\"{\n            Tim : 'Tim Boelaars',\n            Andrew : 'Andrew Colin Beck',\n            Victor : 'Victor Erixon',\n            Shaun : 'Shaun Moynihan',\n            Emir : 'Emir Ayouni'\n        }\"\n        :hidden-options=\"['Tim', 'Victor']\"\n    ></ui-checkbox>\n</div>\n:::\n\n:::vue\n@name:max\n---\n#config\n>conf-desc\n最多可选项目的数量。\n>conf-accept\n数量\n>conf-type\nNumber\n>conf-default\n`Infinity`\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-checkbox\n        form-name=\"姓名\"\n        :list=\"{\n            Tim : 'Tim Boelaars',\n            Andrew : 'Andrew Colin Beck',\n            Victor : 'Victor Erixon',\n            Shaun : 'Shaun Moynihan',\n            Emir : 'Emir Ayouni'\n        }\"\n        :max=\"3\"\n    ></ui-checkbox>\n</div>\n:::\n\n:::vue\n@name:parent\n---\n#config\n>conf-desc\n此配置可以将当前的复选框组件关联到另一个复选框的某个选项上，建立从属关系。<br><br>如果父选项被选中，那么所关联的子选项都会被选中。<br>如果部分子选项被选中，那么父选项会处于部分选中状态。<br><br>每个父选项只能关联到一个复选框组件上。关联时会优先取子复选框组件的状态。\n>conf-accept\n`[关联复选框的选择器]:[关联选项的key]`\n>conf-type\nString\n>conf-default\n`''`\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-checkbox\n        form-name=\"Continents\"\n        id=\"continents\"\n        :list=\"{\n            asia : 'Asia',\n            na : 'North America',\n            europe : 'Europe',\n            africa : 'Africa'\n        }\"></ui-checkbox>\n    <ui-checkbox\n        form-name=\"Asia\"\n        parent=\"#continents:asia\"\n        :list=\"{\n            beijing : 'Beijing',\n            hk : 'Hong Kong',\n            singapore : 'Singapore',\n            tokyo : 'Tokyo'\n        }\"\n    ></ui-checkbox>\n    <ui-checkbox\n        form-name=\"North America\"\n        parent=\"#continents:na\"\n        :list=\"{\n            ny : 'New York',\n            toronto : 'Toronto',\n            la : 'Los Angeles'\n        }\"\n    ></ui-checkbox>\n    <ui-checkbox\n        form-name=\"Europe\"\n        parent=\"#continents:europe\"\n        :list=\"{\n            london : 'London',\n            paris : 'Paris',\n            berlin : 'Berlin',\n            rome : 'Rome',\n            copenhagen : 'Copenhagen',\n            madrid : 'Madrid'\n        }\"\n    ></ui-checkbox>\n    <ui-checkbox\n        form-name=\"Africa\"\n        parent=\"#continents:africa\"\n        :list=\"{\n            cairo : 'Cairo',\n            cuba : 'Cuba'\n        }\"\n    ></ui-checkbox>\n</div>\n---\n#demo\n>desc\n有默认值的情况。\n>tpl\n<div style=\"width:300px;\">\n    <ui-checkbox\n        form-name=\"Continents\"\n        id=\"continents2\"\n        v-model=\"value1\"\n        :list=\"{\n            asia : 'Asia',\n            na : 'North America',\n            europe : 'Europe',\n            africa : 'Africa'\n        }\"\n    ></ui-checkbox>\n    <ui-checkbox\n        form-name=\"Asia\"\n        parent=\"#continents2:asia\"\n        :list=\"{\n            beijing : 'Beijing',\n            hk : 'Hong Kong',\n            singapore : 'Singapore',\n            tokyo : 'Tokyo'\n        }\"\n    ></ui-checkbox>\n    <ui-checkbox\n        form-name=\"North America\"\n        parent=\"#continents2:na\"\n        v-model=\"value2\"\n        :list=\"{\n            ny : 'New York',\n            toronto : 'Toronto',\n            la : 'Los Angeles'\n        }\"\n    ></ui-checkbox>\n    <ui-checkbox\n        form-name=\"Europe\"\n        parent=\"#continents2:europe\"\n        :list=\"{\n            london : 'London',\n            paris : 'Paris',\n            berlin : 'Berlin',\n            rome : 'Rome',\n            copenhagen : 'Copenhagen',\n            madrid : 'Madrid'\n        }\"\n    ></ui-checkbox>\n    <ui-checkbox\n        form-name=\"Africa\"\n        parent=\"#continents2:africa\"\n        v-model=\"value3\"\n        :list=\"{\n            cairo : 'Cairo',\n            cuba : 'Cuba'\n        }\"\n    ></ui-checkbox>\n</div>\n>script\n{\n    data : {\n        value1 : ['europe'],\n        value2 : ['ny'],\n        value3 : ['cairo', 'cuba']\n    }\n}\n---\n#demo\n>desc\n配合`disabled-options`一起使用。\n>tpl\n<div style=\"width:300px;\">\n    <ui-checkbox\n        form-name=\"Continents\"\n        id=\"continents3\"\n        :list=\"{asia:'Asia'}\"\n    ></ui-checkbox>\n    <ui-checkbox\n        form-name=\"Asia\"\n        parent=\"#continents3:asia\"\n        :disabled-options=\"['beijing', 'hk']\"\n        :list=\"{\n            beijing : 'Beijing',\n            hk : 'Hong Kong',\n            singapore : 'Singapore',\n            tokyo : 'Tokyo'\n        }\"\n    ></ui-checkbox>\n</div>\n---\n#demo\n>desc\n配合`max`一起使用。\n>tpl\n<div style=\"width:300px;\">\n    <ui-checkbox \n        form-name=\"Continents\" \n        id=\"continents4\" \n        :list=\"{asia:'Asia'}\"\n    ></ui-checkbox>\n    <ui-checkbox \n        form-name=\"Asia\" \n        parent=\"#continents4:asia\" \n        :max=\"2\" \n        :list=\"{\n            beijing : 'Beijing',\n            hk : 'Hong Kong',\n            singapore : 'Singapore',\n            tokyo : 'Tokyo'\n        }\"\n    ></ui-checkbox>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:checkbox\n@value:['Tim', 'Andrew']\n@defaultValue:['Tim']\n@attrs: :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n:::vue\n@name:toggle(key, [checked])\n---\n#method\n>method-desc\n切换单个选项的选中状态。\n>method-args\n|key|NO|需要切换状态的选项的键值|键值字符串|`String`|`undefined`|\n|checked|YES|需要切换的状态|`undefined`: 切换到相反的状态<br>`true`: 切换到选中状态<br>`false`: 切换到未选中状态|`Undefined`<br>`Boolean`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style=\"width:300px;\">\n        <ui-checkbox\n            ref=\"demo2\"\n            form-name=\"姓名\"\n            :list=\"{\n                Tim : 'Tim Boelaars',\n                Andrew : 'Andrew Colin Beck',\n                Victor : 'Victor Erixon'\n            }\"\n        ></ui-checkbox>\n    </div>\n    <br>\n    <ui-link js=\"morning.findVM('demo2').toggle('Tim');\">切换Tim至相反状态</ui-link>\n    <ui-link js=\"morning.findVM('demo2').toggle('Tim', true);\">切换Tim至选中</ui-link>\n    <ui-link js=\"morning.findVM('demo2').toggle('Tim', false);\">切换Tim至未选中</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:复选框组\n@uikey:checkbox\n@value:['Tim', 'Andrew']\n@attrs: :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Array` : 数组\n\n#### 值过滤\n\n- 所有不支持的值类型，都会被尝试转换成空数组(`[]`)。\n- 若数组中的键值不在键值列表(`list`)中，会被过滤。\n- 若数组的长度大于`max`配置，则会取头开始取`max`配置长度的项目，多余的项目会被丢弃。\n\n#### 值格式\n\n包含选中键值的无序数组，键值是字符串。\n\n#### 默认值\n\n`[]`\n\n:::preset\n@name:formValue\n@uikey:checkbox\n@uiname:复选框组\n@valueType:checkbox\n@attrs: :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/checkbox/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])},t=[];o._withStripped=!0,i.d(e,"a",function(){return o}),i.d(e,"b",function(){return t})},798:function(n,e,i){"use strict";var o=r(i(1)),t=r(i(799));function r(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(t.default)}})},799:function(n,e,i){"use strict";i.r(e);var o=i(285),t=i(214);for(var r in t)"default"!==r&&function(n){i.d(e,n,function(){return t[n]})}(r);var c=i(0),a=Object(c.a)(t.default,o.a,o.b,!1,null,null,null);a.options.__file="src/docs/pages/component/checkbox/index.vue",e.default=a.exports}});