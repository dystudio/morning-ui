!function(n){function e(e){for(var r,u,a=e[0],d=e[1],c=e[2],m=0,s=[];m<a.length;m++)u=a[m],o[u]&&s.push(o[u][0]),o[u]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(n[r]=d[r]);for(l&&l(e);s.length;)s.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],r=!0,a=1;a<t.length;a++){var d=t[a];0!==o[d]&&(r=!1)}r&&(i.splice(e--,1),n=u(u.s=t[0]))}return n}var r={},o={20:0};var i=[];function u(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=r,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},u.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],d=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=d;i.push([289,0]),t()}({1:function(n,e){n.exports=Vue},140:function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o});var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 计数器 `<ui-counter>`\n\n<doc-component-status page="counter"></doc-component-status>\n\n[[[开始]]]\n\n定义计数器，这是一个块元素，具有最小宽度。\n\n#### 使用\n\n:::democode/html\n<div style="width:130px;">\n    <ui-counter form-name="数字"></ui-counter>\n</div>\n:::\n\n#### 长按加速\n\n当你长按计数器的按钮时，会增加计数器变化的频率。\n\n[[[形态]]]\n\n:::preset/html\nformStatus\n---\nuikey:counter\nstatusDefaultValue:5\nstatusDivStyle:width:130px;\n:::\n\n[[[配置]]]\n\n:::preset/html\nformConfigTable\n---\n|[step](#step)|计数器每次变动的步长，用户点击增加或减少时最小的数值调整单位。|大于0的数字|Number|`1`|\n|[max](#max)|计数器的最大值。|数字|Number|`Infinity`|\n|[min](#min)|计数器的最小值。|数字|Number|`-Infinity`|\n|[formater](#formater)|计数器显示格式化，这是一个函数。第一个参数是当前的数值，返回一个字符串用于显示。<br>必须和`parser`配置一起使用，互为逆向函数。<br>注意：若设置了`precision`此函数的参数需要作为字符串处理，否则会丢失精度。|函数|Function|`value => value`|\n|[parser](#parser)|计数器显示内容的解析函数，这是一个函数。第一个参数是当前显示的内容，返回一个数字表示解析后对应的数值。<br>必须和`formater`配置一起使用，互为逆向函数。<br>注意：若设置了`precision`需要解析小数点，否则会丢失精度|函数|Function|`value => value`|\n|[precision](#precision)|数字的精度，若为`auto`则会取数字的最精确位数。若设置了具体的精度位数则在采用四舍五入。|精度(小数点后位数)|String : 只能设为`auto`，表示自动精度<br>Number : 精度为小数点后几位|`\'auto\'`|\n:::\n\n:::preset/html\nformConfigDemo\n---\nuikey:counter\nconfigDefaultValue:5\nconfigDivStyle:width:130px;\n:::\n\n#### step\n\n:::democode/html\n<div style="width:130px;">\n    <ui-counter form-name="数字" step="3"></ui-counter>\n</div>\n:::\n\n:::democode/html\n<div style="width:130px;">\n    <ui-counter form-name="数字" step="1.25"></ui-counter>\n</div>\n:::\n\n#### max\n\n:::democode/html\n<div style="width:130px;">\n    <ui-counter form-name="数字" max="5"></ui-counter>\n</div>\n:::\n\n#### min\n\n:::democode/html\n<div style="width:130px;">\n    <ui-counter form-name="数字" min="-5"></ui-counter>\n</div>\n:::\n\n#### formater\n\n:::democode/html\n<div style="width:130px;">\n    <ui-counter form-name="数字" :formater="(value => value + \'%\')" :parser="(value => +value.replace(/%$/, \'\'))"></ui-counter>\n</div>\n:::\n\n#### parser\n\n:::democode/html\n<div style="width:130px;">\n    <ui-counter form-name="数字" :formater="(value => value + \'%\')" :parser="(value => +value.replace(/%$/, \'\'))"></ui-counter>\n</div>\n:::\n\n#### precision\n\n整数精度：\n\n:::democode/html\n<div style="width:130px;">\n    <ui-counter form-name="数字" step="1.4" :precision="0"></ui-counter>\n</div>\n:::\n\n两位小数精度：\n\n:::democode/html\n<div style="width:130px;">\n    <ui-counter form-name="数字" step="0.2" :precision="2"></ui-counter>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset/html\nformMethod\n---\nuikey:counter\nmethodValue:5\nmethodDefaultValue:5\nmethodDivStyle:width:130px;\n:::\n\n#### add([steps])\n\n计数器增加指定数量的步长。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|steps|YES|数值增加几个单位(单位步长)。|数字|`Number`<br>`Undefined`|`1`|\n\n:::democode/html\n<div style="width:130px;">\n    <ui-counter form-name="数字" ref="demo1"></ui-counter>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo1\').add();">增加1个单位步长</ui-link>\n    <ui-link js="morning.findVM(\'demo1\').add(5);">增加5个单位步长</ui-link>\n</div>\n:::\n\n#### sub([steps])\n\n计数器减少指定数量的步长。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|steps|YES|数值减少几个单位(单位步长)。|数字|`Number`<br>`Undefined`|`1`|\n\n:::democode/html\n<div style="width:130px;">\n    <ui-counter form-name="数字" ref="demo2"></ui-counter>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo2\').sub();">减少1个单位步长</ui-link>\n    <ui-link js="morning.findVM(\'demo2\').sub(5);">减少5个单位步长</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::preset/html\nformEvent\n---\nuikey:counter\neventValue:5\neventDivStyle:width:130px;\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Number` : 数字\n\n#### 值过滤\n\n- 所有包含非数字及小数点的字符串，会过滤非数字的字符，如果存在多个小数点取最后一个\n- 非数字类型会转换成数字，如转换后为`NaN`则取`0`\n- 超过`max`配置的数字，会设置为`max`\n- 低于`min`配置的数字，会设置为`min`\n\n#### 值格式\n\n数字\n\n#### 默认值\n\n`0`\n\n#### 输入/输出示例\n\n:::repeat/html\nformValueType:counter\n---\n<div>\n    <p>{$valueType}类型</p>\n    <div style="width:130px;">\n        <ui-counter ref="demoType{$valueType}" form-name="计数器"></ui-counter>\n    </div>\n    <br>\n    <ui-link js="window.morning.findVM(\'demoType{$valueType}\').set({$&valueContent})">设置{$valueType}类型</ui-link>\n    <ui-link js="alert(window.morning.findVM(\'demoType{$valueType}\').getJson())">获取表单JSON值</ui-link>\n</div>\n<br>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/counter/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];r._withStripped=!0},23:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(2),i=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"counter"}},components:{"doc-component":i.default}},n.exports=e.default},288:function(n,e,t){"use strict";t.r(e);var r=t(23),o=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,function(){return r[n]})}(i);var u=t(140),a=t(0),d=!1;var c=function(n){d||t(686)},l=Object(a.a)(o.a,u.a,u.b,!1,c,null,null);l.options.__file="src/docs/pages/component/counter/index.vue",e.default=l.exports},289:function(n,e,t){"use strict";var r=i(t(1)),o=i(t(288));function i(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},686:function(n,e){}});