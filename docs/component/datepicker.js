!function(n){function e(e){for(var i,d,o=e[0],u=e[1],c=e[2],m=0,p=[];m<o.length;m++)d=o[m],a[d]&&p.push(a[d][0]),a[d]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(n[i]=u[i]);for(l&&l(e);p.length;)p.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],i=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(i=!1)}i&&(r.splice(e--,1),n=d(d.s=t[0]))}return n}var i={},a={15:0};var r=[];function d(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.m=n,d.c=i,d.d=function(n,e,t){d.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},d.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},d.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;r.push([245,0]),t()}({1:function(n,e){n.exports=Vue},118:function(n,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return a});var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 日期选择器 `<ui-datepicker>`\n\n<doc-component-status page="datepicker"></doc-component-status>\n\n[[[开始]]]\n\n定义日期选择器。\n\n#### 使用\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datepicker form-name="日期"></ui-datepicker>\n</div>\n:::\n\n#### 自定义日期格式\n\n日期选择器允许用户自定日期格式，使用中文时间：\n    \n:::democode/html\n<div style="width:300px;">\n    <ui-datepicker form-name="日期" :date="+new Date(\'2018-03-23\')" format="YYYY年MM月DD日" default-value="2018年03月23日"></ui-datepicker>\n</div>\n:::\n\n使用简短的年份：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datepicker form-name="日期" :date="+new Date(\'2018-03-23\')" format="YY年MM月DD日" default-value="18年03月23日"></ui-datepicker>\n</div>\n:::\n\n更多自定义格式见`format`配置。\n\n#### 范围日期选择\n\n:::democode/html\n<div style="width:360px;">\n    <ui-datepicker form-name="日期" :is-range="true"></ui-datepicker>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset/html\nformStatus\n---\nuikey:datepicker\nstatusDefaultValue:\'2018-03-23\'\nstatusMoreAttr::date="+new Date(\'2018-03-23\')"\n:::\n\n[[[配置]]]\n\n:::preset/html\nformConfigTable\n---\n|[date](#date)|日历所在的日期，日历将会切换到`date`所在的月份|时间戳|Number|`+new Date()`|\n|[format](#format)|格式化展示的日期|日期格式化字符串(支持日期占位符见下方的演示)|String|`\'YYYY-MM-DD\'`|\n|[align](#align)|日期对齐方式|`\'left\'` : 左对齐<br>`\'center\'` : 居中对齐<br>`\'right\'` : 右对齐|String|`\'left\'`|\n|[quick-pick](#quick-pick)|显示快速选择项，这个配置是一个数组，数组中的每一项都是一个快速选择项目。<br><br>数组项支持两种类型：<br><br>__关键词__ ：支持字符串格式的快速选择关键词。<br><br>未开启`is-range`情况下包括：`今天`、`昨天`、`明天`、`n 天前`、`n 周前`、`n 月前`、`n 年前`、`n 天后`、`n 周后`、`n 月后`、`n 年后`(需要注意`n`后面有空格)，例如：`2 天前`、`3 周前`。<br><br>开启`is-range`情况下包括：`本周`、`本月`、`今年`、`最近 n 周`、`最近 n 月`、`最近 n 年`、`未来 n 周`、`未来 n 月`、`未来 n 年`(需要注意`n`前后有空格)，例如：`未来 2 周`、`最近 3 月`。<br><br>__时间设置__：是一个对象。<br><br>未开启`is-range`情况下包含`name`和`pick`两个属性。<br>`name`是快速选择项展现的名称。<br>`pick`支持`数字`或`日期对象`。若`pick`是`数字`则代表相对天数，会选中当前日期和`pick`相加后的日期，所以`pick`是负数代表过去的日期，正数则代表未来的日期。若`pick`是`日期对象`则会选中`pick`所表示的日期。<br><br>开启`is-range`情况下包含`name`、`start`、`end`三个属性。<br>`name`是快速选择项展现的名称。<br>`start`和`end`是`日期对象`分别表示选择日期段的开始和结束。<br><br>你可以混合使用多种类型的快速选择项(详见[下面的示例](#quick-pick))。|字符串(关键词)<br>对象(时间设置)|Array|`[]`|\n|[selectable-range](#selectable-range)|可选日期范围，若不设置则不限。这是一个数组，支持以下格式：<br><br>`[开始日期, 结束日期]`: 指定单个可选范围<br>`[[开始日期1, 结束日期1], [开始日期2, 结束日期2]]`: 指定多个可选范围<br><br>可选日期将大于等于`开始日期`，小于等于`结束日期`。<br><br>`开始日期`和`结束日期`均为日期字符串需要符合`format`配置的日期格式。|日期范围数组|Array|`undefined`|\n|[is-range](#is-range)|选择日期区间，开启后可以选在一个日期段|`true`<br>`false`|Boolean|`false`|\n|[separator](#separator)|日期区间选择时中间的分隔内容，只有开启`is-range`才有效|分隔字符串|String|`\'至\'`|\n|[start-name](#start-name)|日期区间选择时`开始日期`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效|任意字符串<br>`false`:显示`form-name`|String<br>Boolean|`\'开始日期\'`|\n|[end-name](#end-name)|日期区间选择时`结束日期`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效。若设置了`hide-name`则不会显示|任意字符串`false`:显示`form-name`|String<br>Boolean|`\'结束日期\'`|\n:::\n\n:::preset/html\nformConfigDemo\n---\nuikey:datepicker\nconfigDefaultValue:\'2018-03-23\'\nconfigMoreAttr::date="+new Date(\'2018-03-23\')"\n:::\n\n#### date\n\n:::democode/html\n<div style="width:300px">\n    <ui-datepicker :date="+new Date(\'2018-03-23\')"></ui-datepicker>\n</div>\n:::\n\n#### format\n    \n`format`允许自定义组件展示的日期格式，支持以下占位符：\n\n|单位|占位符|示例|\n|-|-|-|\n|年份|YY|00, 01, ..., 99|\n||YYYY|1900, 1901, ..., 2099|\n|季度|Q|1, 2, 3, 4|\n||Qo|1st, 2nd, 3rd, 4th|\n|月份|M|1, 2, ..., 12|\n||Mo|1st, 2nd, ..., 12th|\n||MM|01, 02, ..., 12|\n||MMM|Jan, Feb, ..., Dec|\n||MMMM|January, February, ..., December|\n|一月中第几天|D|1, 2, ..., 31|\n||Do|1st, 2nd, ..., 31st|\n||DD|01, 02, ..., 31|\n|一周中第几天|d|0, 1, ..., 6|\n||do|0th, 1st, ..., 6th|\n||dd|Su, Mo, ..., Sa|\n||ddd|Sun, Mon, ..., Sat|\n||dddd|Sunday, Monday, ..., Saturday|\n|一年中第几天|DDD|1, 2, ..., 366|\n||DDDo|1st, 2nd, ..., 366th|\n||DDDD|001, 002, ..., 366|\n\n采用`|`分隔日期：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datepicker form-name="日期" :date="+new Date(\'2018-03-23\')" format="YYYY | MM | DD" default-value="2018 | 03 | 23"></ui-datepicker>\n</div>\n:::\n\n同时显示多种日期格式(显示多个日期时，最后一个优先级最高)：\n\n:::democode/html\n<div style="width:400px;">\n    <ui-datepicker form-name="日期" :date="+new Date(\'2018-03-23\')" format="YYYY-MM-DD | MMM DD, YYYY" default-value="2018-03-23 | Mar 23, 2018"></ui-datepicker>\n</div>\n:::\n\n#### align\n\n居中对齐：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datepicker form-name="日期" :date="+new Date(\'2018-03-23\')" default-value="2018-03-23" align="center"></ui-datepicker>\n</div>\n:::\n\n右对齐：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datepicker form-name="日期" :date="+new Date(\'2018-03-23\')" default-value="2018-03-23" align="right"></ui-datepicker>\n</div>\n:::\n\n#### quick-pick\n    \n你可以通过预设的关键词来设置日期快速选择项：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datepicker form-name="日期" :quick-pick="[\'今天\', \'昨天\', \'2 天前\', \'3 天前\', \'1 周前\', \'2 周前\', \'3 周前\', \'1 月前\', \'2 月前\', \'3 月前\', \'6 月前\', \'1 年前\', \'2 年前\', \'3 年前\']"></ui-datepicker>\n</div>\n:::\n\n未来的时间也可以设置：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datepicker form-name="日期" :quick-pick="[\'明天\', \'3 天后\', \'3 周后\', \'3 月后\', \'1 年后\']"></ui-datepicker>\n</div>\n:::\n\n也可以通过选中日期相对与当天的天数(正数为未来，负数为过去)来设置：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datepicker form-name="日期" :quick-pick="[{name: \'今天\', pick: 0}, {name: \'昨天\', pick: -1}, {name: \'明天\', pick: 1}]"></ui-datepicker>\n</div>\n:::\n\n也可以通过选中日期的绝对值来设置：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datepicker form-name="日期" :quick-pick="[{name: \'劳动节\', pick: new Date(\'2018-5-1\')}, {name: \'国庆节\', pick: new Date(\'2018-10-1\')}]"></ui-datepicker>\n</div>\n:::\n\n配合`is-range`使用时：\n\n:::democode/html\n<div style="width:360px;">\n    <ui-datepicker form-name="日期" :quick-pick="[\'本周\', \'本月\', \'今年\', \'最近 1 周\', \'最近 2 月\', \'最近 3 年\', \'未来 1 周\', \'未来 2 月\', \'未来 3 年\', {name: \'2015-2017年\', start: new Date(\'2015-01-01\'), end: new Date(\'2017-01-01\')}]" is-range></ui-datepicker>\n</div>\n:::\n\n#### selectable-range\n\n设置单个可选范围(2018-03-08至2018-03-23)：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datepicker form-name="日期" :date="+new Date(\'2018-03-23\')" :selectable-range="[\'2018-03-08\', \'2018-03-23\']"></ui-datepicker>\n</div>\n:::\n\n设置多个可选范围(2018-02-10至2018-02-20, 2018-02-20至2018-03-02, 2018-03-15至2018-03-25, 2018-03-20至2018-03-28, 2018-04-02至2018-04-05)：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datepicker form-name="日期" :date="+new Date(\'2018-03-23\')" :selectable-range="[[\'2018-02-10\', \'2018-02-20\'], [\'2018-02-23\', \'2018-03-02\'], [\'2018-03-15\', \'2018-03-25\'], [\'2018-03-20\', \'2018-03-28\'], [\'2018-04-02\', \'2018-04-05\']]"></ui-datepicker>\n</div>\n:::\n\n在使用`selectable-range`的同时开启`is-range`：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datepicker form-name="日期" :date="+new Date(\'2018-03-23\')" :selectable-range="[\'2018-03-08\', \'2018-03-23\']" is-range></ui-datepicker>\n</div>\n:::\n\n#### is-range\n\n:::democode/html\n<div style="width:360px;">\n    <ui-datepicker form-name="日期" :is-range="true"></ui-datepicker>\n</div>\n:::\n\n在开启`is-range`的情况下设置`default-value`:\n\n:::democode/html\n<div style="width:360px;">\n    <ui-datepicker form-name="日期" :date="+new Date(\'2018-03-23\')" :is-range="true" :default-value="[\'2018-03-10\', \'2018-03-20\']"></ui-datepicker>\n</div>\n:::\n\n#### separator\n\n:::democode/html\n<div style="width:360px;">\n    <ui-datepicker form-name="日期" :is-range="true" separator="~"></ui-datepicker>\n</div>\n:::\n\n#### start-name\n\n:::democode/html\n<div style="width:360px;">\n    <ui-datepicker form-name="日期" :is-range="true" start-name="发车日期"></ui-datepicker>\n</div>\n:::\n\n若设为`false`则显示`form-name`：\n\n:::democode/html\n<div style="width:360px;">\n    <ui-datepicker form-name="日期" :is-range="true" :start-name="false"></ui-datepicker>\n</div>\n:::\n\n#### end-name\n\n:::democode/html\n<div style="width:360px;">\n    <ui-datepicker form-name="日期" :is-range="true" end-name="到达日期"></ui-datepicker>\n</div>\n:::\n\n若设为`false`则显示`form-name`：\n\n:::democode/html\n<div style="width:360px;">\n    <ui-datepicker form-name="日期" :is-range="true" :end-name="false"></ui-datepicker>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset/html\nformMethod\n---\nuikey:datepicker\nmethodValue:\'2018-03-23\'\nmethodDefaultValue:\'2018-03-23\'\n:::\n\n[[[事件]]]\n\n:::preset/html\nformEvent\n---\nuikey:datepicker\neventValue:\'2018-03-23\'\n:::\n    \n#### input-focus\n\n当日期选择器的输入框聚焦时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo1.console1\', \'input-focus event!\');\n        }\n    }\n});\n---\n<div>\n    <div style="width:300px;">\n        <ui-datepicker ref="demo1" @input-focus="echo"></ui-datepicker>\n    </div>\n</div>\n:::\n    \n#### input-blur\n\n当日期选择器的输入框失焦时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo2.console1\', \'input-blur event!\');\n        }\n    }\n});\n---\n<div>\n    <div style="width:300px;">\n        <ui-datepicker ref="demo2" @input-blur="echo"></ui-datepicker>\n    </div>\n</div>\n:::\n    \n#### focus\n\n当日期选择器聚焦时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo3.console1\', \'focus event!\');\n        }\n    }\n});\n---\n<div>\n    <div style="width:300px;">\n        <ui-datepicker ref="demo3" @focus="echo"></ui-datepicker>\n    </div>\n</div>\n:::\n    \n#### blur\n\n当日期选择器失焦时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo4.console1\', \'blur event!\');\n        }\n    }\n});\n---\n<div>\n    <div style="width:300px;">\n        <ui-datepicker ref="demo4" @blur="echo"></ui-datepicker>\n    </div>\n</div>\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n- `Array` : 数组\n- `String` : 字符串(按`format`配置格式化)\n\n#### 值过滤\n\n- 若是范围日期选择(开启`isRange`配置)，则数值是一个字符串，则将数值转换成数组，该字符串作为第一项       \n- 若是单一日期选择(未开启`isRange`配置)，且数值是一个数组，则取第一项\n- 若数值的类型是字符串则检测字符串的日期格式是否符合`format`配置，若不符合尝试转换成符合的格式，若无法转换则转换成`1971-01-01`的符合`format`的日期字符串。\n- 若数值的类型是一个数组，且数组长度为`0`则转换为`undefined`\n- 若数值的类型是一个数组，且数组长度大于`2`，则过滤多余的项目，只保留两项\n- 若数值的类型是一个数组，且数组长度大于`0`且小于`3`，会过滤数组中所有不是字符串类型的项目，然后按照第三条规则，对所有字符串项目进行过滤\n- 若数值的类型是一个数组，且第二项代表的日期时间大于第一项，则对换数组的两项\n\n#### 值格式\n\n若是单一日期选择，则是日期字符串(符合`format`的格式化规则)\n若是范围日期选择，则是长度为2的数组，数组中第一项是开始日期的日期字符串(符合`format`的格式化规则)，数组中第二项是结束日期的日期字符串(符合`format`的格式化规则)。\n\n#### 默认值\n\n`undefined`\n\n#### 输入/输出示例\n\n:::repeat/html\nformValueType:datepicker\n---\n<div>\n    <p>{$valueType}类型</p>\n    <div style="width:300px;">\n        <ui-datepicker ref="demoType{$valueType}"></ui-datepicker>\n    </div>\n    <br>\n    <ui-link js="window.morning.findVM(\'demoType{$valueType}\').set({$&valueContent})">设置{$valueType}类型</ui-link>\n    <ui-link js="alert(window.morning.findVM(\'demoType{$valueType}\').getJson())">获取表单JSON值</ui-link>\n</div>\n<br>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/datepicker/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},a=[];i._withStripped=!0},18:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=t(2),r=(i=a)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"datepicker"}},components:{"doc-component":r.default}},n.exports=e.default},244:function(n,e,t){"use strict";t.r(e);var i=t(18),a=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,function(){return i[n]})}(r);var d=t(118),o=t(0),u=!1;var c=function(n){u||t(608)},l=Object(o.a)(a.a,d.a,d.b,!1,c,null,null);l.options.__file="src/docs/pages/component/datepicker/index.vue",e.default=l.exports},245:function(n,e,t){"use strict";var i=r(t(1)),a=r(t(244));function r(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(a.default)}})},608:function(n,e){}});