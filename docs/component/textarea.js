!function(n){function e(e){for(var r,u,i=e[0],c=e[1],d=e[2],l=0,s=[];l<i.length;l++)u=i[l],o[u]&&s.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(f&&f(e);s.length;)s.shift()();return a.push.apply(a,d||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],r=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),n=u(u.s=t[0]))}return n}var r={},o={73:0},a=[];function u(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=r,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)u.d(t,r,function(e){return n[e]}.bind(null,r));return t},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var f=c;a.push([692,0]),t()}({1:function(n,e){n.exports=Vue},110:function(n,e,t){"use strict";t.r(e);var r=t(111),o=t.n(r);for(var a in r)"default"!==a&&function(n){t.d(e,n,function(){return r[n]})}(a);e.default=o.a},111:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(2),a=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"textarea"}},components:{"doc-component":a.default}},n.exports=e.default},366:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 段落输入框 `<ui-textarea>`\n\n<doc-component-status page="textarea"></doc-component-status>\n\n[[[开始]]]\n\n定义段落输入框。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-textarea form-name="姓名"></ui-textarea>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset\n@name:formStatusWithSize\n@uikey:textarea\n@defaultValue:\'默认文本\'\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:textarea\n@defaultValue:\'默认文本\'\n:::\n\n:::vue\n@name:inside-name\n---\n#config\n>conf-desc\n在组件内显示的名称，和`form-name`互为补充。\n>conf-accept\n名称\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-textarea inside-name="段落"></ui-textarea>\n</div>\n:::\n\n:::vue\n@name:rows\n---\n#config\n>conf-desc\n段落输入框的默认高度对应的行数，若设置了`max-rows`则此数值不会超过`max-rows`。\n>conf-accept\n大于0的数字\n>conf-type\nNumber\n>conf-default\n`4`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-textarea :rows="8"></ui-textarea>\n</div>\n:::\n\n:::vue\n@name:auto-size\n---\n#config\n>conf-desc\n段落内容超过输入框并将出现滚动条时，自动增加输入框的高度。当内容减少时，自动减少输入框高度。最小高度将维持在`rows`配置设置的高度(最小为2行的高度)，最大高度不超过`max-rows`。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>desc\n尝试输入5行内容，段落输入框会自动增加高度。\n>tpl\n<div style="width:300px;">\n    <ui-textarea auto-size></ui-textarea>\n</div>\n:::\n\n:::vue\n@name:max-rows\n---\n#config\n>conf-desc\n段落内容的最大高度对应的行数。若同时设置了`auto-size`配置，则超过`max-rows`后会出现滚动条。\n>conf-accept\n大于0的数字\n>conf-type\nNumber\n>conf-default\n`Infinity`\n---\n#demo\n>desc\n超过8行后会出现滚动条。\n>tpl\n<div style="width:300px;">\n    <ui-textarea auto-size :max-rows="8"></ui-textarea>\n</div>\n---\n#demo\n>desc\n同时设置最小3行，最大6行。\n>tpl\n<div style="width:300px;">\n    <ui-textarea auto-size :rows="3" :max-rows="6"></ui-textarea>\n</div>\n:::\n\n:::vue\n@name:maxlength\n---\n#config\n>conf-desc\n输入内容的最大长度。\n>conf-accept\n最大长度\n>conf-type\nNumber\n>conf-default\n`Infinity`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-textarea :maxlength="50"></ui-textarea>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:textarea\n@value:\'Jim\'\n@defaultValue:\'Jim\'\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:段落输入框\n@uikey:textarea\n@value:\'Jim\'\n@wrapStyle:width:300px;\n:::\n\n:::vue\n@name:focus\n---\n#event\n>event-desc\n当表单聚焦后触发。\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-textarea @focus="echo" ref="demo2"></ui-textarea>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo2.console1\', \'focus event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:blur\n---\n#event\n>event-desc\n当表单失焦后触发。\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-textarea @blur="echo" ref="demo3"></ui-textarea>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo3.console1\', \'blur event!\');\n        }\n    }\n}\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`String` : 字符串\n\n#### 值过滤\n\n- 如果数值的类型是对象，会被转换成JSON序列化字符串。\n- 非对象且不支持的值类型，都会被尝试转换成字符串，使用`String(value)`。\n\n#### 值格式\n\n内容值字符串。\n\n#### 默认值\n\n`\'\'`\n\n:::preset\n@name:formValue\n@uikey:textarea\n@uiname:段落输入框\n@valueType:default\n@wrapStyle:width:300px;\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/textarea/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];r._withStripped=!0,t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o})},692:function(n,e,t){"use strict";var r=a(t(1)),o=a(t(693));function a(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},693:function(n,e,t){"use strict";t.r(e);var r=t(366),o=t(110);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);var u=t(0),i=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);i.options.__file="src/docs/pages/component/textarea/index.vue",e.default=i.exports}});