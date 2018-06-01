!function(n){function e(e){for(var t,o,l=e[0],s=e[1],u=e[2],a=0,m=[];a<l.length;a++)o=l[a],r[o]&&m.push(r[o][0]),r[o]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t]);for(p&&p(e);m.length;)m.shift()();return d.push.apply(d,u||[]),i()}function i(){for(var n,e=0;e<d.length;e++){for(var i=d[e],t=!0,l=1;l<i.length;l++){var s=i[l];0!==r[s]&&(t=!1)}t&&(d.splice(e--,1),n=o(o.s=i[0]))}return n}var t={},r={48:0};var d=[];function o(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=n,o.c=t,o.d=function(n,e,i){o.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:i})},o.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=s;d.push([321,0]),i()}({1:function(n,e){n.exports=Vue},156:function(n,e,i){"use strict";i.d(e,"a",function(){return t}),i.d(e,"b",function(){return r});var t=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 滑块输入 `<ui-slider>`\n\n<doc-component-status page="slider"></doc-component-status>\n\n[[[开始]]]\n\n定义一个滑块输入。\n\n#### 使用\n\n:::democode/html\n<div style="width:300px;">\n    <ui-slider form-name="进度"></ui-slider>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset/html\nformStatus\n---\nuikey:slider\nstatusDefaultValue:40\n:::\n\n[[[配置]]]\n\n:::preset/html\nformConfigTable\n---\n|[max](#max)|滑块输入允许输入的最大值。|数字|Number|`100`|\n|[min](#min)|滑块输入允许输入的最小值。|数字|Number|`0`|\n|[step](#step)|滑动的步长，用户移动滑块时最小的数值调整单位。|大于0的数字|Number|`1`|\n|[show-tip](#show-tip)|在移动时显示滑块当前的数值。|`true`<br/>`false`|Boolean|`true`|\n|[tip-formatter](#tip-formatter)|格式化滑块显示的数值。<br/>接受一个函数，函数的第一个参数是滑块的数值(数字)。<br/>如果开启了`is-range`则是一个数组，数组包含两个数字，分别是开始和结束两个滑块的数值。<br/><br/>此函数必须返回数字或字符串内容，将会显示在滑块上方。|格式化函数|Function|`value => value`|\n|[prepend](#prepend)|滑块前部显示内容（太长的内容会被隐藏）|内容字符串(可使用HTML)|String|`\'\'`|\n|[append](#append)|滑块后部显示内容（太长的内容会被隐藏）|内容字符串(可使用HTML)|String|`\'\'`|\n|[show-point](#show-point)|显示步长的间断点(按`step`配置)。若间断点过于密集，组件会自动调整隐藏部分间断点。|`true`<br/>`false`|Boolean|`true`|\n\n:::\n\n:::preset/html\nformConfigDemo\n---\nuikey:slider\nconfigDefaultValue:40\n:::\n\n#### max\n\n:::democode/html\n<div style="width:300px;">\n    <ui-slider :max="10"></ui-slider>\n</div>\n:::\n\n#### min\n\n:::democode/html\n<div style="width:300px;">\n    <ui-slider :min="50"></ui-slider>\n</div>\n:::\n\n`max`和`min`一起使用：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-slider :min="1000" max="2000"></ui-slider>\n</div>\n:::\n\n#### step\n\n每次调整以5为最小单位：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-slider :step="5"></ui-slider>\n</div>\n:::\n\n`step`也可以不是正数：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-slider :step="1.2"></ui-slider>\n</div>\n:::\n\n`step`配合`max`、`min`一起使用：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-slider :step="100" :min="1000" :max="2000"></ui-slider>\n</div>\n:::\n\n#### show-tip\n\n不显示数值：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-slider :show-tip="false"></ui-slider>\n</div>\n:::\n\n#### tip-formatter\n\n:::democode/html\n<div style="width:300px;">\n    <ui-slider :tip-formatter="(value) => `进度：${value}%`"></ui-slider>\n</div>\n:::\n\n#### prepend\n\n:::democode/html\n<div style="width:300px;">\n    <ui-slider prepend="进度"></ui-slider>\n</div>\n:::\n\n也可以使用HTML内容：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-slider :prepend="\'<i class=\\\'mo-icon-set\\\'></i>\'"></ui-slider>\n</div>\n:::\n\n#### append\n\n:::democode/html\n<div style="width:300px;">\n    <ui-slider append="进度"></ui-slider>\n</div>\n:::\n\n也可以使用HTML内容：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-slider :append="\'<i class=\\\'mo-icon-set\\\'></i>\'"></ui-slider>\n</div>\n:::\n\n`prepend`和`append`一起使用：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-slider :prepend="\'<i class=\\\'mo-icon-love-o\\\'></i>\'" :append="\'<i class=\\\'mo-icon-love-f\\\'></i>\'"></ui-slider>\n</div>\n:::\n\n#### show-point\n\n:::democode/html\n<div style="width:300px;">\n    <ui-slider :step="10" show-point></ui-slider>\n</div>\n:::\n\n如果间断点过于密集，会自动隐藏部分间断点：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-slider show-point :min="30" :max="260" :step="2"></ui-slider>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset/html\nformMethod\n---\nuikey:slider\nmethodValue:40\nmethodDefaultValue:40\n:::\n\n[[[事件]]]\n\n:::preset/html\nformEvent\n---\nuikey:slider\neventValue:40\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Number` : 数字\n\n#### 值过滤\n\n- 如果数值的类型不是数字，会被转换成数字(通过`Number(n)`)\n- 如果数字是NaN，则取`min`配置的最小值\n- 如果数字小于`min`配置，则取`min`配置的最小值\n- 如果数字大于`max`配置，则取`max`配置的最大值\n\n#### 值格式\n\n取值的数字。\n\n#### 默认值\n\n`0`(`min`配置的最小值)\n\n#### 输入/输出示例\n\n:::repeat/html\nformValueType:slider\n---\n<div>\n    <p>{$valueType}类型</p>\n    <div style="width:300px;">\n        <ui-slider ref="demoType{$valueType}"></ui-slider>\n    </div>\n    <br>\n    <ui-link js="window.morning.findVM(\'demoType{$valueType}\').set({$&valueContent})">设置{$valueType}类型</ui-link>\n    <ui-link js="alert(window.morning.findVM(\'demoType{$valueType}\').getJson())">获取表单JSON值</ui-link>\n</div>\n<br>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/slider/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},r=[];t._withStripped=!0},320:function(n,e,i){"use strict";i.r(e);var t=i(51),r=i.n(t);for(var d in t)"default"!==d&&function(n){i.d(e,n,function(){return t[n]})}(d);var o=i(156),l=i(0),s=!1;var u=function(n){s||i(694)},p=Object(l.a)(r.a,o.a,o.b,!1,u,null,null);p.options.__file="src/docs/pages/component/slider/index.vue",e.default=p.exports},321:function(n,e,i){"use strict";var t=d(i(1)),r=d(i(320));function d(n){return n&&n.__esModule?n:{default:n}}new t.default({el:"#root",render:function(n){return n(r.default)}})},51:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t,r=i(2),d=(t=r)&&t.__esModule?t:{default:t};e.default={data:function(){return{page:"slider"}},components:{"doc-component":d.default}},n.exports=e.default},694:function(n,e){}});