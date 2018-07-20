!function(n){function e(e){for(var i,r,p=e[0],d=e[1],l=e[2],m=0,s=[];m<p.length;m++)r=p[m],u[r]&&s.push(u[r][0]),u[r]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(n[i]=d[i]);for(a&&a(e);s.length;)s.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],i=!0,p=1;p<t.length;p++){var d=t[p];0!==u[d]&&(i=!1)}i&&(o.splice(e--,1),n=r(r.s=t[0]))}return n}var i={},u={65:0};var o=[];function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=i,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},r.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="/";var p=window.webpackJsonp=window.webpackJsonp||[],d=p.push.bind(p);p.push=e,p=p.slice();for(var l=0;l<p.length;l++)e(p[l]);var a=d;o.push([369,0]),t()}({1:function(n,e){n.exports=Vue},180:function(n,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return u});var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 文本输入框 `<ui-textinput>`\n\n<doc-component-status page="textinput"></doc-component-status>\n\n[[[开始]]]\n\n定义文本输入框。\n\n#### 使用\n\n:::democode/html\n<div style="width:300px;">\n    <ui-textinput form-name="姓名"></ui-textinput>\n</div>\n:::\n\n#### 支持前缀、后缀\n\n:::democode/html\n<div style="width:300px;">\n    <ui-textinput form-name="姓名" prepend="@"></ui-textinput>\n</div>\n:::\n\n:::democode/html\n<div style="width:300px;">\n    <ui-textinput form-name="百分比" append="%"></ui-textinput>\n</div>\n:::\n\n:::democode/html\n<div style="width:300px;">\n    <ui-textinput form-name="价格" prepend="价格" append="元"></ui-textinput>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset/html\nformStatus\n---\nuikey:textinput\nstatusDefaultValue:\'\'\n:::\n\n[[[配置]]]\n\n:::preset/html\nformConfigTable\n---\n|[hide-value](#hide-value)|表单的数值不可见，一般用于密码表单|`true`<br>`false`|Boolean|`false`|\n|[prepend](#prepend)|表单前缀|任意字符串(支持HTML)|String|`undefined`|\n|[append](#append)|表单后缀|任意字符串(支持HTML)|String|`undefined`|\n|[append-type](#append-type)|表单前后缀内容的展现类型|`\'block\'`：块状<br>`\'inline\'`：行内|String|`\'block\'`|\n|[align](#align)|内容对齐方式|`\'left\'` : 左对齐<br>`\'center\'` : 居中对齐<br>`\'right\'` : 右对齐|String|`\'left\'`|\n|[maxlength](#maxlength)|输入内容的最大长度|最大长度|Number|`Infinity`|\n:::\n\n:::preset/html\nformConfigDemo\n---\nuikey:textinput\nconfigDefaultValue:\'默认值\'\n:::\n\n#### hide-value\n\n隐藏数值后表单的值在界面中不可见。\n\n:::democode/html\n<div style="width:300px;">\n    <ui-textinput hide-value default-value="this is password"></ui-textinput>\n</div>\n:::\n\n#### prepend\n\n:::democode/html\n<div style="width:300px;">\n    <ui-textinput form-name="姓名" prepend="@"></ui-textinput>\n</div>\n:::\n\n#### append\n\n:::democode/html\n<div style="width:300px;">\n    <ui-textinput form-name="百分比" append="%"></ui-textinput>\n</div>\n:::\n\n#### append-type\n\n行内类型的前后缀：\n\n:::democode/html\n<div style="width:180px;">\n    <ui-textinput form-name="当天消费" prepend="支出"  append="人名币" append-type="inline"></ui-textinput>\n</div>\n:::\n\n#### align\n\n:::democode/html\n<div style="width:300px;">\n    <ui-textinput form-name="内容居中对齐" align="center"></ui-textinput>\n</div>\n:::\n\n:::democode/html\n<div style="width:300px;">\n    <ui-textinput form-name="内容右对齐" align="right"></ui-textinput>\n</div>\n:::\n\n#### maxlength\n\n:::democode/html\n<div style="width:300px;">\n    <ui-textinput form-name="姓名" :maxlength="10"></ui-textinput>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset/html\nformMethod\n---\nuikey:textinput\nmethodValue:\'Jim\'\nmethodDefaultValue:\'Jim\'\n:::\n\n[[[事件]]]\n\n#### focus\n\n当表单聚焦后触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo2.console1\', \'focus event!\');\n        }\n    }\n});\n---\n<div style="width:300px;">\n    <ui-textinput @focus="echo" ref="demo2"></ui-textinput>\n</div>\n:::\n\n#### blur\n\n当表单失焦后触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo3.console1\', \'blur event!\');\n        }\n    }\n});\n---\n<div style="width:300px;">\n    <ui-textinput @blur="echo" ref="demo3"></ui-textinput>\n</div>\n:::\n\n:::preset/html\nformEvent\n---\nuikey:textinput\neventValue:\'Jim\'\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`String` : 字符串\n\n#### 值过滤\n\n- 如果数值的类型是对象，会被转换成JSON序列化字符串。\n- 非对象且不支持的值类型，都会被尝试转换成字符串，使用`String(value)`。\n\n#### 值格式\n\n内容值字符串。\n\n#### 默认值\n\n`\'\'`\n\n#### 输入/输出示例\n\n:::repeat/html\nformValueType\n---\n<div>\n    <p>{$valueType}类型</p>\n    <div style="width:300px;">\n        <ui-textinput ref="demoType{$valueType}"></ui-textinput>\n    </div>\n    <br>\n    <ui-link js="window.morning.findVM(\'demoType{$valueType}\').set({$&valueContent})">设置{$valueType}类型</ui-link>\n    <ui-link js="alert(window.morning.findVM(\'demoType{$valueType}\').getJson())">获取表单JSON值</ui-link>\n</div>\n<br>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/textinput/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},u=[];i._withStripped=!0},368:function(n,e,t){"use strict";t.r(e);var i=t(68),u=t.n(i);for(var o in i)"default"!==o&&function(n){t.d(e,n,function(){return i[n]})}(o);var r=t(180),p=t(0),d=!1;var l=function(n){d||t(756)},a=Object(p.a)(u.a,r.a,r.b,!1,l,null,null);a.options.__file="src/docs/pages/component/textinput/index.vue",e.default=a.exports},369:function(n,e,t){"use strict";var i=o(t(1)),u=o(t(368));function o(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(u.default)}})},68:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,u=t(2),o=(i=u)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"textinput"}},components:{"doc-component":o.default}},n.exports=e.default},756:function(n,e){}});