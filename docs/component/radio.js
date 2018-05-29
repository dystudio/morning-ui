!function(n){function e(e){for(var i,a,l=e[0],d=e[1],u=e[2],s=0,m=[];s<l.length;s++)a=l[s],r[a]&&m.push(r[a][0]),r[a]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(n[i]=d[i]);for(c&&c(e);m.length;)m.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],i=!0,l=1;l<t.length;l++){var d=t[l];0!==r[d]&&(i=!1)}i&&(o.splice(e--,1),n=a(a.s=t[0]))}return n}var i={},r={46:0};var o=[];function a(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=i,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},a.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=d;o.push([313,0]),t()}({1:function(n,e){n.exports=Vue},152:function(n,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return r});var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 单选框组 `<ui-radio>`\n\n<doc-component-status page=\"radio\"></doc-component-status>\n\n[[[开始]]]\n\n定义单选框组，单选框组只能单选，若需要多选请使用`ui-checkbox`。\n\n#### 使用\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-radio form-name=\"姓名\" :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"></ui-radio>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset/html\nformStatusWithStyle\n---\nuikey:radio\nstatusDefaultValue:'Tim'\nstatusMoreAttr::list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n[[[配置]]]\n\n:::preset/html\nformConfigTable\n---\n|[accept-html](#accept-html)|项目的的名称可以使用HTML|`true`<br>`false`|Boolean|`false`|\n|[list](#list)|可选项目列表|可选项目列表的对象，键名是key，键值是name用于显示|Object|`{}`|\n:::\n\n:::preset/html\nformConfigDemo\n---\nuikey:radio\nconfigDefaultValue:'Tim'\nconfigMoreAttr::list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n#### accept-html\n\n如果让`ui-radio`的显示文本，渲染成HTML，而不是字符串。可以设置`accept-html`。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : function () {\n        return {\n            list : {\n                Red : '<span style=\"color:red;\">我是红色span</span>',\n                Green : '<span style=\"color:green;\">我是绿色span</span>'\n            }\n        }\n    }\n});\n---\n<div style=\"width:300px;\">\n    <ui-radio\n        form-name=\"姓名\"\n        accept-html\n        :list=\"list\"\n    ></ui-radio>\n</div>\n:::\n\n#### list\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-radio form-name=\"姓名\" :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"></ui-radio>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset/html\nformMethod\n---\nuikey:radio\nmethodValue:'Tim'\nmethodDefaultValue:'Tim'\nmethodMoreAttr::list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n#### toggle(key)\n\n选中单个选项。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|key|NO|需要选中选项的键值|键值字符串|`String`|`undefined`|\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-radio ref=\"demo2\" form-name=\"姓名\" :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"></ui-radio>\n</div>\n<br>\n<ui-link js=\"morning.findVM('demo2').toggle('Tim');\">选中Tim</ui-link>\n<ui-link js=\"morning.findVM('demo2').toggle('Andrew');\">选中Andrew</ui-link>\n:::\n\n[[[事件]]]\n\n:::preset/html\nformEvent\n---\nuikey:radio\neventValue:'Tim'\neventMoreAttr::list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`String` : 字符串(键值列表`list`中的一项)\n\n#### 值过滤\n\n- 所有不支持的值类型，都会被尝试转换成`undefined`。\n- 若数不在键值列表(`list`)中，会被转换成`undefined`。\n\n#### 值格式\n\n选中项目的键值，或是未选中(`undefined`)。\n\n#### 默认值\n\n`undefined`\n\n#### 输入/输出示例\n\n:::repeat/html\nformValueType\n---\n<div>\n    <p>{$valueType}类型</p>\n    <div style=\"width:300px;\">\n        <ui-radio ref=\"demoType{$valueType}\" :list=\"{Jim:'Jim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"></ui-radio>\n    </div>\n    <br>\n    <ui-link js=\"window.morning.findVM('demoType{$valueType}').set({$&valueContent})\">设置{$valueType}类型</ui-link>\n    <ui-link js=\"alert(window.morning.findVM('demoType{$valueType}').getJson())\">获取表单JSON值</ui-link>\n</div>\n<br>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/radio/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])},r=[];i._withStripped=!0},312:function(n,e,t){"use strict";t.r(e);var i=t(49),r=t.n(i);for(var o in i)"default"!==o&&function(n){t.d(e,n,function(){return i[n]})}(o);var a=t(152),l=t(0),d=!1;var u=function(n){d||t(682)},c=Object(l.a)(r.a,a.a,a.b,!1,u,null,null);c.options.__file="src/docs/pages/component/radio/index.vue",e.default=c.exports},313:function(n,e,t){"use strict";var i=o(t(1)),r=o(t(312));function o(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(r.default)}})},49:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(2),o=(i=r)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"radio"}},components:{"doc-component":o.default}},n.exports=e.default},682:function(n,e){}});