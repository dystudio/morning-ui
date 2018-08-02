!function(e){function n(n){for(var i,m,l=n[0],s=n[1],o=n[2],u=0,p=[];u<l.length;u++)m=l[u],r[m]&&p.push(r[m][0]),r[m]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);for(d&&d(n);p.length;)p.shift()();return a.push.apply(a,o||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],i=!0,l=1;l<t.length;l++){var s=t[l];0!==r[s]&&(i=!1)}i&&(a.splice(n--,1),e=m(m.s=t[0]))}return e}var i={},r={70:0};var a=[];function m(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,m),t.l=!0,t.exports}m.m=e,m.c=i,m.d=function(e,n,t){m.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},m.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},m.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return m.d(n,"a",n),n},m.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},m.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var o=0;o<l.length;o++)n(l[o]);var d=s;a.push([383,0]),t()}({1:function(e,n){e.exports=Vue},187:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return r});var i=function(){var e=this.$createElement,n=this._self._c||e;return n("doc-component",{attrs:{page:this.page,hasPadding:!0}},[n("script",{attrs:{type:"text/markdown"}},[this._v('\n# 时间选择器 `<ui-timepicker>`\n\n<doc-component-status page="timepicker"></doc-component-status>\n\n[[[开始]]]\n\n定义时间选择器。\n\n#### 使用\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间"></ui-timepicker>\n</div>\n:::\n\n#### 自定义时间格式\n\n时间选择器允许用户自定时间格式，使用中文时间：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" format="HH时mm分ss秒" default-value="12时30分24秒"></ui-timepicker>\n</div>\n:::\n\n使用12小时制：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" format="h:m:s aa" default-value="12:30:24 a.m."></ui-timepicker>\n</div>\n:::\n\n更多自定义格式见：[format配置](/component/timepicker.html#format)。\n\n#### 高亮当前修改时间单位\n\n当用户在选择器上切换时，对应修改的时间单位区域会高亮：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" format="h:m:s" default-value="8:30:24"></ui-timepicker>\n</div>\n:::\n\n当同时有多个时间单位匹配时，只会高亮第一个匹配到的：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" format="h:m:s aa | HH:mm:ss" default-value="8:30:24 a.m. | 08:30:24"></ui-timepicker>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset/html\nformStatus\n---\nuikey:timepicker\nstatusDefaultValue:\'12:30:24\'\n:::\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker state="normal" :is-list="true" :list="[\'09:00:00\', \'10:00:00\', \'11:00:00\']" :default-value="[\'10:00:00\']" form-name="正常" ></ui-timepicker>\n</div>\n<br>\n<div style="width:300px;">\n    <ui-timepicker state="disabled" :is-list="true" :list="[\'09:00:00\', \'10:00:00\', \'11:00:00\']" :default-value="[\'10:00:00\']" form-name="禁用" ></ui-timepicker>\n</div>\n<br>\n:::\n\n[[[配置]]]\n\n:::preset/html\nformConfigTable\n---\n|[format](#format)|格式化展示的时间|时间格式化字符串(支持时间占位符见下方的演示)|String|`\'HH:mm:ss\'`|\n|[align](#align)|时间对齐方式|`\'left\'` : 左对齐<br>`\'center\'` : 居中对齐<br>`\'right\'` : 右对齐|String|`\'left\'`|\n|[selectable-range](#selectable-range)|可选时间范围，若不设置则不限。这是一个数组，支持以下格式：<br><br>`[开始时间, 结束时间]`: 指定单个可选范围<br>`[[开始时间1, 结束时间1], [开始时间2, 结束时间2]]`: 指定多个可选范围<br><br>可选时间将大于等于`开始时间`，小于等于`结束时间`。<br><br>`开始时间`和`结束时间`均为时间字符串需要符合`format`配置的时间格式。|时间范围数组|Array|`undefined`|\n|[is-range](#is-range)|选择时间区间，开启后可以选在一个时间段|`true`<br>`false`|Boolean|`false`|\n|[separator](#separator)|时间区间选择时中间的分隔内容，只有开启`is-range`才有效|分隔字符串|String|`\'至\'`|\n|[separator-type](#separator-type)|时间区间选择时中间的分隔内容的展现类型|`\'block\'`：块状<br>`\'inline\'`：行内|String|`\'block\'`|\n|[start-name](#start-name)|时间区间选择时`开始时间`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效|任意字符串<br>`false`:显示`form-name`|String<br>Boolean|`\'开始时间\'`|\n|[end-name](#end-name)|时间区间选择时`结束时间`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效。若设置了`hide-name`则不会显示|任意字符串`false`:显示`form-name`|String<br>Boolean|`\'结束时间\'`|\n|[is-list](#is-list)|选择时间列表，开启后可指定可选的时间点。<br><br>通过`list`配置可以指定可选时间点的列表<br>通过`list-start`、`list-end`、`list-step`，可以设置开始/结束时间和步进来生成可选时间点的列表|`true`<br>`false`|Boolean|`false`|\n|[list](#list)|可选时间列表，这是一个数组，数组中每一项都是一个可选时间(需要符合`format`配置的时间格式)。当此配置和`list-start`、`list-end`、`list-step`一起使用时，组件会将这几个配置的可选时间进行合并|可选时间数组|Array|`[]`|\n|[list-start](#list-startlist-endlist-step)|可选时间的起始时间，设为时间字符串启用，设为`false`停用。<br><br>必需配合`list-end`、`list-step`一起使用。|可选时间的起始时间字符串(需要符合`format`配置的时间格式)|String<br>Boolean|`false`|\n|[list-end](#list-startlist-endlist-step)|可选时间的结束时间，设为时间字符串启用，设为`false`停用。<br><br>必需配合`list-start`、`list-step`一起使用。|可选时间的结束时间字符串(需要符合`format`配置的时间格式)|String<br>Boolean|`false`|\n|[list-step](#list-startlist-endlist-step)|可选时间的间隔时间，当设置了`list-start`、`list-end`后，会将这段时间按`list-step`分割成多个可选时间点。<br><br>必需配合`list-start`、`list-end`一起使用。|间隔时间字符串(必须是`时:分:秒`的格式)|String|`00:30:00`|\n:::\n\n:::preset/html\nformConfigDemo\n---\nuikey:timepicker\nconfigDefaultValue:\'12:30:24\'\n:::\n\n#### format\n    \n`format`允许自定义组件展示的时间格式，支持以下占位符：\n\n|单位|占位符|示例|\n|-|-|-|\n|上午/下午|A|AM, PM|\n||a|am, pm|\n||aa|a.m., p.m.|\n|小时|H|0, 1, ... 23|\n||HH|00, 01, ... 23|\n||h|0, 1, ... 12|\n||hh|00, 01, ... 12|\n|分钟|mm|00, 01, ... 59|\n||m|0, 1, ... 59|\n|秒|ss|00, 01, ... 59|\n||s|0, 1, ... 59|\n\n<ui-quote color="light-blue">注意：使用12小时制时，需要加上午/下午占位符，否则可能出现无法正确解析时间的情况</ui-quote>\n\n采用`|`分隔时间：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" format="HH | mm | ss" default-value="12 | 30 | 24"></ui-timepicker>\n</div>\n:::\n\n同时显示多种时间格式(显示多个时间时，最后一个优先级最高)：\n\n:::democode/html\n<div style="width:400px;">\n    <ui-timepicker form-name="时间" format="HH:mm:ss(24小时制), h:m:s aa(12小时制)" default-value="08:30:24(24小时制), 8:30:24 a.m.(12小时制)"></ui-timepicker>\n</div>\n:::\n\n#### align\n\n居中对齐：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" default-value="12:30:24" align="center"></ui-timepicker>\n</div>\n:::\n\n右对齐：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" default-value="12:30:24" align="right"></ui-timepicker>\n</div>\n:::\n\n#### selectable-range\n\n设置单个可选范围(8:30-12:00)：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :selectable-range="[\'08:30:00\', \'12:00:00\']"></ui-timepicker>\n</div>\n:::\n\n设置多个可选范围(08:03:02-12:30:00, 12:00:00-14:59:59, 20:30:10-21:30:20)：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :selectable-range="[[\'08:03:02\', \'12:30:00\'], [\'12:00:00\', \'14:59:59\'], [\'20:30:10\', \'21:30:20\']]"></ui-timepicker>\n</div>\n:::\n\n如果`default-value`超过`selectable-range`范围：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :selectable-range="[\'08:00:00\', \'12:30:00\']" :default-value="[\'06:30:00\', \'13:45:30\']" is-range></ui-timepicker>\n</div>\n:::\n\n#### is-range\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-range="true"></ui-timepicker>\n</div>\n:::\n\n在开启`is-range`的情况下设置`default-value`:\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-range="true" :default-value="[\'09:00:00\', \'10:30:30\']"></ui-timepicker>\n</div>\n:::\n\n#### separator\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-range="true" separator="~"></ui-timepicker>\n</div>\n:::\n\n#### separator-type\n\n`inline`的分隔(一般配合`align`居中一起使用)：\n\n:::democode/html\n<div style="width:260px;">\n    <ui-timepicker form-name="时间" :is-range="true" separator="~" separator-type="inline" align="center"></ui-timepicker>\n</div>\n:::\n\n#### start-name\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-range="true" start-name="发车时间"></ui-timepicker>\n</div>\n:::\n\n若设为`false`则显示`form-name`：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-range="true" :start-name="false"></ui-timepicker>\n</div>\n:::\n\n#### end-name\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-range="true" end-name="到达时间"></ui-timepicker>\n</div>\n:::\n\n若设为`false`则显示`form-name`：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-range="true" :end-name="false"></ui-timepicker>\n</div>\n:::\n\n#### is-list\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-list="true" :list="[\'09:00:00\', \'10:00:00\', \'11:00:00\']"></ui-timepicker>\n</div>\n:::\n\n`is-list`和`is-range`一起使用：\n\n:::democode/html\n<div style="width:340px;">\n    <ui-timepicker form-name="时间" :is-list="true" :is-range="true" :list="[\'09:00:00\', \'10:00:00\', \'11:00:00\']"></ui-timepicker>\n</div>\n:::\n\n#### list\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-list="true" :list="[\'09:00:00\', \'10:00:00\', \'11:00:00\']"></ui-timepicker>\n</div>\n:::\n\n#### list-start & list-end & list-step\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-list="true" list-start="09:00:00" list-end="15:00:00" list-step="01:30:00"></ui-timepicker>\n</div>\n:::\n\n配合`list`一起使用：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-list="true" list-start="09:00:00" list-end="15:00:00" list-step="01:30:00" :list="[\'21:00:00\', \'22:00:00\']"></ui-timepicker>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset/html\nformMethod\n---\nuikey:timepicker\nmethodValue:\'12:30:24\'\nmethodDefaultValue:\'12:30:24\'\n:::\n\n#### getDate()\n\n获取当前选中时间的日期对象。\n\n:::democode/html\n<div style="width:300px;">\n    <ui-timepicker ref="demo1" form-name="时间"></ui-timepicker>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo1\').getDate();">获取当前选中时间的日期对象</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::preset/html\nformEvent\n---\nuikey:timepicker\neventValue:\'12:30:24\'\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n- `Array` : 数组\n- `String` : 字符串(按`format`配置格式化)\n\n#### 值过滤\n\n- 若是范围时间选择(开启`isRange`配置)，则数值是一个字符串，则将数值转换成数组，该字符串作为第一项       \n- 若是单一时间选择(未开启`isRange`配置)，且数值是一个数组，则取第一项\n- 若数值的类型是字符串则检测字符串的时间格式是否符合`format`配置，若不符合尝试转换成符合的格式，若无法转换则转换成`00:00:00`的符合`format`的时间字符串。\n- 若数值的类型是一个数组，且数组长度为`0`则转换为`undefined`\n- 若数值的类型是一个数组，且数组长度大于`2`，则过滤多余的项目，只保留两项\n- 若数值的类型是一个数组，且数组长度大于`0`且小于`3`，会过滤数组中所有不是字符串类型的项目，然后按照第三条规则，对所有字符串项目进行过滤\n\n#### 值格式\n\n若是单一时间选择，则是时间字符串(符合`format`的格式化规则)\n若是范围时间选择，则是长度为2的数组，数组中第一项是开始时间点的时间字符串(符合`format`的格式化规则)，数组中第二项是结束时间点的时间字符串(符合`format`的格式化规则)。\n\n#### 默认值\n\n`undefined`\n\n#### 输入/输出示例\n\n:::repeat/html\nformValueType:timepicker\n---\n<div>\n    <p>{$valueType}类型</p>\n    <div style="width:300px;">\n        <ui-timepicker ref="demoType{$valueType}"></ui-timepicker>\n    </div>\n    <br>\n    <ui-link js="window.morning.findVM(\'demoType{$valueType}\').set({$&valueContent})">设置{$valueType}类型</ui-link>\n    <ui-link js="alert(window.morning.findVM(\'demoType{$valueType}\').getJson())">获取表单JSON值</ui-link>\n</div>\n<br>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/timepicker/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},r=[];i._withStripped=!0},382:function(e,n,t){"use strict";t.r(n);var i=t(73),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,function(){return i[e]})}(a);var m=t(187),l=t(0),s=!1;var o=function(e){s||t(774)},d=Object(l.a)(r.a,m.a,m.b,!1,o,null,null);d.options.__file="src/docs/pages/component/timepicker/index.vue",n.default=d.exports},383:function(e,n,t){"use strict";var i=a(t(1)),r=a(t(382));function a(e){return e&&e.__esModule?e:{default:e}}new i.default({el:"#root",render:function(e){return e(r.default)}})},73:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i,r=t(2),a=(i=r)&&i.__esModule?i:{default:i};n.default={data:function(){return{page:"timepicker"}},components:{"doc-component":a.default}},e.exports=n.default},774:function(e,n){}});