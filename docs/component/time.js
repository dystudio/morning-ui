!function(e){function n(n){for(var i,m,u=n[0],o=n[1],c=n[2],d=0,s=[];d<u.length;d++)m=u[d],r[m]&&s.push(r[m][0]),r[m]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);for(l&&l(n);s.length;)s.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],i=!0,u=1;u<t.length;u++){var o=t[u];0!==r[o]&&(i=!1)}i&&(a.splice(n--,1),e=m(m.s=t[0]))}return e}var i={},r={80:0},a=[];function m(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,m),t.l=!0,t.exports}m.m=e,m.c=i,m.d=function(e,n,t){m.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},m.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m.t=function(e,n){if(1&n&&(e=m(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(m.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)m.d(t,i,function(n){return e[n]}.bind(null,i));return t},m.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return m.d(n,"a",n),n},m.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},m.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],o=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var l=o;a.push([678,0]),t()}({1:function(e,n){e.exports=Vue},352:function(e,n,t){"use strict";var i=function(){var e=this.$createElement,n=this._self._c||e;return n("doc-component",{attrs:{page:this.page,hasPadding:!0}},[n("script",{attrs:{type:"text/markdown"}},[this._v('\n# 时间 `<ui-time>`\n\n<doc-component-status page="time"></doc-component-status>\n\n[[[开始]]]\n\n定义一个时间展示组件，这是一个内联块级元素。\n\n时间展示组件可以用来展示各种格式的绝对时间和相对时间，时间组件本身无样式可以通过额外的CSS来为时间组件添加样式。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-time :time="new Date(\'2019-03-01 15:00:00\')"></ui-time>\n:::\n\n:::vue\n@name:设置相对时间\n---\n#demo\n>desc\n设置的`time`与当前时间相差多久(默认采用模糊的用语，但更具可读性)。\n>tpl\n<div>\n    \x3c!-- 几秒前 --\x3e\n    <ui-time :time="new Date()" relative></ui-time><br>\n    \x3c!-- 几分钟前 --\x3e\n    <ui-time :time="new Date(Date.now() - 60*1000 + 1000)" relative></ui-time><br>\n    <ui-time :time="new Date(Date.now() - 3*60*1000 + 1000)" relative></ui-time><br>\n    \x3c!-- 几小时前 --\x3e\n    <ui-time :time="new Date(Date.now() - 2*3600*1000 + 1000)" relative></ui-time><br>\n    \x3c!-- 几天前 --\x3e\n    <ui-time :time="new Date(Date.now() - 2*24*3600*1000 + 1000)" relative></ui-time><br>\n    \x3c!-- 几月前 --\x3e\n    <ui-time :time="new Date(Date.now() - 2*30*24*3600*1000 + 1000)" relative></ui-time><br>\n    \x3c!-- 几年前 --\x3e\n    <ui-time :time="new Date(Date.now() - 1.4*365*24*3600*1000 + 1000)" relative></ui-time><br>\n    <ui-time :time="new Date(Date.now() - 1.8*365*24*3600*1000 + 1000)" relative></ui-time><br>\n</div>\n---\n#demo\n>desc\n也可以通过`strict`来显示精确的相对时间。\n>tpl\n<div>\n    \x3c!-- 几秒前 --\x3e\n    <ui-time :time="new Date()" relative></ui-time><br>\n    \x3c!-- 几分钟前 --\x3e\n    <ui-time :time="new Date(Date.now() - 60*1000 + 1000)" relative strict></ui-time><br>\n    <ui-time :time="new Date(Date.now() - 3*60*1000 + 1000)" relative strict></ui-time><br>\n    \x3c!-- 几小时前 --\x3e\n    <ui-time :time="new Date(Date.now() - 2*3600*1000 + 1000)" relative strict></ui-time><br>\n    \x3c!-- 几天前 --\x3e\n    <ui-time :time="new Date(Date.now() - 2*24*3600*1000 + 1000)" relative strict></ui-time><br>\n    \x3c!-- 几月前 --\x3e\n    <ui-time :time="new Date(Date.now() - 2*30*24*3600*1000 + 1000)" relative strict></ui-time><br>\n    \x3c!-- 几年前 --\x3e\n    <ui-time :time="new Date(Date.now() - 1.4*365*24*3600*1000 + 1000)" relative strict></ui-time><br>\n    <ui-time :time="new Date(Date.now() - 1.8*365*24*3600*1000 + 1000)" relative strict></ui-time><br>\n</div>\n:::\n\n:::vue\n@name:实时更新时间\n---\n#demo\n>desc\n可以通过`real-time`设置某一时刻开始实时变化的绝对时间。\n>tpl\n<div>\n    <ui-time :time="new Date()" real-time></ui-time><br>\n</div>\n---\n#demo\n>desc\n指定`real-time`为数字，可以设置更新间隔，单位为`ms`。\n>tpl\n<div>\n    <ui-time :time="new Date()" :real-time="3000"></ui-time><br>\n</div>\n---\n#demo\n>desc\n若时间是相对的通过`real-time`可以实时更新相对时间，但是更新间隔较久。\n>tpl\n<div>\n    <ui-time :time="new Date()" relative real-time></ui-time><br>\n</div>\n---\n#demo\n>desc\n当`real-time`配合`relative`和`strict`一起使用，可以较实时的更新相对时间。\n>tpl\n<div>\n    <ui-time :time="new Date()" relative strict real-time></ui-time><br>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n[[[配置]]]\n\n:::vue\n@name:time\n---\n#config\n>conf-desc\n设置一个时间，用于显示此时刻的绝对时间，或计算当前时刻与此时刻的相对时间。\n>conf-accept\n标准日期对象\n>conf-type\nDate\n>conf-default\n`new Date()`\n---\n#demo\n>tpl\n<ui-time :time="new Date(\'2015-11-11\')"></ui-time>\n:::\n\n:::vue\n@name:format\n---\n#config\n>conf-desc\n绝对时间的展示格式，仅在关闭`relative`时有效。\n<br><br>\n`format`允许自定义组件展示的日期时间格式，支持以下占位符：\n<br><br>\n|单位|占位符|示例|\n|-|-|-|\n|年份|yy|00, 01, ..., 99|\n||yyyy|1900, 1901, ..., 2099|\n|季度|Q|1, 2, 3, 4|\n||Qo|1st, 2nd, 3rd, 4th|\n||QQ|01, 02, 03, 04|\n||QQQ|Q1, Q2, Q3, Q4|\n|月份|M|1, 2, ..., 12|\n||Mo|1st, 2nd, ..., 12th|\n||MM|01, 02, ..., 12|\n||MMM|Jan, Feb, ..., Dec|\n||MMMM|January, February, ..., December|\n|一月中第几天|d|1, 2, ..., 31|\n||do|1st, 2nd, ..., 31st|\n||dd|01, 02, ..., 31|\n|一周中第几天|i|1, 2, 3, ..., 7|\n||io|1st, 2nd, ..., 7th|\n||iii|Mon, Tue, Wed, ..., Su|\n||iiii|Monday, Tuesday, ..., Sunday|\n||iiiiii|Mo, Tu, We, Th, Fr, Su, Sa|\n|一年中第几天|D|1, 2, ..., 366|\n||DDD|001, 002, ..., 366|\n||DDDo|1st, 2nd, ..., 366th|\n|上午/下午|a|AM, PM|\n||aaaa|a.m., p.m.|\n|小时|H|0, 1, ... 23|\n||HH|00, 01, ... 23|\n||h|0, 1, ... 12|\n||hh|00, 01, ... 12|\n|分钟|mm|00, 01, ... 59|\n||m|0, 1, ... 59|\n|秒|ss|00, 01, ... 59|\n||s|0, 1, ... 59|\n|毫秒|S|0, 1, ..., 9|\n||SS|00, 01, ..., 99|\n||SSS|000, 001, ..., 999|\n>conf-accept\n日期时间格式化字符串(支持日期占位符见下方的演示)\n>conf-type\nString\n>conf-default\n`\'yyyy-MM-dd HH:mm:ss\'`\n---\n#demo\n>desc\n自定义绝对时间展示格式。\n>tpl\n<ui-time :time="new Date()" format="yyyy | MM | dd | HH | mm | ss"></ui-time>\n:::\n\n:::vue\n@name:relative\n---\n#config\n>conf-desc\n展示相对时间，相对时间为当前时刻与`time`所设置时刻的差。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div>\n    \x3c!-- 几秒前 --\x3e\n    <ui-time :time="new Date()" relative></ui-time><br>\n    \x3c!-- 几分钟前 --\x3e\n    <ui-time :time="new Date(Date.now() - 60*1000 + 1000)" relative></ui-time><br>\n    <ui-time :time="new Date(Date.now() - 3*60*1000 + 1000)" relative></ui-time><br>\n    \x3c!-- 几小时前 --\x3e\n    <ui-time :time="new Date(Date.now() - 2*3600*1000 + 1000)" relative></ui-time><br>\n    \x3c!-- 几天前 --\x3e\n    <ui-time :time="new Date(Date.now() - 2*24*3600*1000 + 1000)" relative></ui-time><br>\n    \x3c!-- 几月前 --\x3e\n    <ui-time :time="new Date(Date.now() - 2*30*24*3600*1000 + 1000)" relative></ui-time><br>\n    \x3c!-- 几年前 --\x3e\n    <ui-time :time="new Date(Date.now() - 1.4*365*24*3600*1000 + 1000)" relative></ui-time><br>\n    <ui-time :time="new Date(Date.now() - 1.8*365*24*3600*1000 + 1000)" relative></ui-time><br>\n</div>\n:::\n\n:::vue\n@name:strict\n---\n#config\n>conf-desc\n显示相对时间时使用更精确的展现方式，仅在`relative`开启时有效。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div>\n    \x3c!-- 几秒前 --\x3e\n    <ui-time :time="new Date()" relative></ui-time><br>\n    \x3c!-- 几分钟前 --\x3e\n    <ui-time :time="new Date(Date.now() - 60*1000 + 1000)" relative strict></ui-time><br>\n    <ui-time :time="new Date(Date.now() - 3*60*1000 + 1000)" relative strict></ui-time><br>\n    \x3c!-- 几小时前 --\x3e\n    <ui-time :time="new Date(Date.now() - 2*3600*1000 + 1000)" relative strict></ui-time><br>\n    \x3c!-- 几天前 --\x3e\n    <ui-time :time="new Date(Date.now() - 2*24*3600*1000 + 1000)" relative strict></ui-time><br>\n    \x3c!-- 几月前 --\x3e\n    <ui-time :time="new Date(Date.now() - 2*30*24*3600*1000 + 1000)" relative strict></ui-time><br>\n    \x3c!-- 几年前 --\x3e\n    <ui-time :time="new Date(Date.now() - 1.4*365*24*3600*1000 + 1000)" relative strict></ui-time><br>\n    <ui-time :time="new Date(Date.now() - 1.8*365*24*3600*1000 + 1000)" relative strict></ui-time><br>\n</div>\n:::\n\n:::vue\n@name:real-time\n---\n#config\n>conf-desc\n实时更新展示的时间。\n<br>\n在绝对时间展示模式下(关闭`relative`)：会实时更新`time`所配置的时间（递增）。\n<br>\n在相对时间展示模式下(开启`relative`)：会实时更新当前时刻与`time`所设置时刻的差。\n>conf-accept\n`true`: 开启实时更新(默认`1000ms`间隔)<br>\n`false` : 关闭实时更新<br>\nNumber : 设置实时更新间隔(单位`ms`)\n>conf-type\nBoolean<br>Number\n>conf-default\n`true`\n---\n#demo\n>desc\n可以通过`real-time`设置某一时刻开始实时变化的绝对时间。\n>tpl\n<div>\n    <ui-time :time="new Date()" real-time></ui-time><br>\n</div>\n---\n#demo\n>desc\n减缓实时更新间隔，提升性能。\n>tpl\n<div>\n    <ui-time :time="new Date()" :real-time="3000"></ui-time><br>\n</div>\n---\n#demo\n>desc\n加快实时更新间隔，获得更好体验。\n>tpl\n<div>\n    <ui-time :time="new Date()" format="HH:mm:ss:SSS" :real-time="50"></ui-time><br>\n</div>\n---\n#demo\n>desc\n若时间是相对的通过`real-time`可以实时更新相对时间，但是更新间隔较久。\n>tpl\n<div>\n    <ui-time :time="new Date()" relative real-time></ui-time><br>\n</div>\n---\n#demo\n>desc\n当`real-time`配合`relative`和`strict`一起使用，可以较实时的更新相对时间。\n>tpl\n<div>\n    <ui-time :time="new Date()" relative strict real-time></ui-time><br>\n</div>\n:::\n\n:::vue\n@name:countdown\n---\n#config\n>conf-desc\n倒计时到某个时间点，使用此配置后将无视`time`、`format`、`relative`、`strict`配置。\n<br>\n暂时不支持自定义格式。\n>conf-accept\n标准日期对象\n>conf-type\nDate\n>conf-default\n`new Date()`\n---\n#demo\n>tpl\n<ui-time :countdown="new Date(\'2099-12-12\')"></ui-time>\n---\n#demo\n>desc\n使用`real-time`开启实时倒计时。\n>tpl\n<ui-time :countdown="new Date(\'2099-12-12\')" real-time></ui-time>\n:::\n\n[[[方法]]]\n\n<h1>暂无</h1>\n\n[[[事件]]]\n\n:::vue\n@layout:lifecycle-event\n---\ntime\n时间\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/time/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},r=[];i._withStripped=!0,t.d(n,"a",function(){return i}),t.d(n,"b",function(){return r})},678:function(e,n,t){"use strict";var i=a(t(1)),r=a(t(679));function a(e){return e&&e.__esModule?e:{default:e}}new i.default({el:"#root",render:function(e){return e(r.default)}})},679:function(e,n,t){"use strict";t.r(n);var i=t(352),r=t(96);for(var a in r)"default"!==a&&function(e){t.d(n,e,function(){return r[e]})}(a);var m=t(0),u=Object(m.a)(r.default,i.a,i.b,!1,null,null,null);u.options.__file="src/docs/pages/component/time/index.vue",n.default=u.exports},96:function(e,n,t){"use strict";t.r(n);var i=t(97),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,function(){return i[e]})}(a);n.default=r.a},97:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i,r=t(2),a=(i=r)&&i.__esModule?i:{default:i};n.default={data:function(){return{page:"time"}},components:{"doc-component":a.default}},e.exports=n.default}});