!function(n){function e(e){for(var t,i,a=e[0],f=e[1],s=e[2],c=0,p=[];c<a.length;c++)i=a[c],o[i]&&p.push(o[i][0]),o[i]=0;for(t in f)Object.prototype.hasOwnProperty.call(f,t)&&(n[t]=f[t]);for(d&&d(e);p.length;)p.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var n,e=0;e<u.length;e++){for(var r=u[e],t=!0,a=1;a<r.length;a++){var f=r[a];0!==o[f]&&(t=!1)}t&&(u.splice(e--,1),n=i(i.s=r[0]))}return n}var t={},o={84:0};var u=[];function i(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=n,i.c=t,i.d=function(n,e,r){i.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},i.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],f=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var d=f;u.push([393,0]),r()}({1:function(n,e){n.exports=Vue},192:function(n,e,r){"use strict";r.d(e,"a",function(){return t}),r.d(e,"b",function(){return o});var t=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 全局方法\n\nMorning UI引入后会返回一个`morning`对象，这个对象上有一些有用的属性及方法。\n\n> 注意`morning`对象上以下划线开头的都是私有属性，用法及变动不会再文档中提及，不应该访问及使用。\n\n### 属性\n\n- isMorning : Morning组件被引用的标记，数值为`true`。\n- version : Morning UI当前的版本，使用者可以根据不同版本增加不同的逻辑。\n- map : 所有组件的vm对象都会挂载到map对象上，对象的键名是组件的`_uiid`。\n\n### 方法\n\n#### findVM(ref)\n\n找到第一个匹配`ref`的组件vm对象。\n\n##### 参数\n\n|参数|可选|描述|类型|\n|-|-|-|-|\n|ref|NO|通过组件的`ref`名称来找到组件的vm对象|`string`|\n\n##### 返回值\n\n匹配组件的vm对象，若没有找到则返回`undefined`。\n\n#### findAllVM(ref)\n\n和`findVM`不同，`findAllVM`会返回一个数组，数组中是所有匹配`ref`的组件vm对象。\n\n##### 参数\n\n|参数|可选|描述|类型|\n|-|-|-|-|\n|ref|NO|通过组件的`ref`名称来找到组件的vm对象|`string`|\n\n##### 返回值\n\n所有匹配组件vm对象组成的数组。\n\n#### getGroup(groupName)\n\n获取一组表单的数值，详见：[表单组](/guide/form.html#表单组)。\n\n##### 参数\n\n|参数|可选|描述|类型|\n|-|-|-|-|\n|groupName|NO|需要获取数据表单组的名称|`string`|\n\n##### 返回值\n\n查找到的表单数据对象，键名是表单的KEY，键值是表单的值\n\n#### getGroupJson(groupName)\n\n获取一组表单的数值(JSON)，详见：[表单组](/guide/form.html#表单组)。\n\n##### 参数\n\n|参数|可选|描述|类型|\n|-|-|-|-|\n|groupName|NO|需要获取数据表单组的名称|`string`|\n\n##### 返回值\n\n查找到的表单数据对象的JSON字符串\n\n#### setGroup(groupName, dataObject)\n\n设置一组表单的数值(采用JSON)，详见：[表单组](/guide/form.html#表单组)。\n\n##### 参数\n\n|参数|可选|描述|类型|\n|-|-|-|-|\n|groupName|NO|需要设置数据表单组的名称|`string`|\n|dataObject|NO|一组键值对，键名为表单的KEY，键值是需要设置的表单值。可以只设置部分KEY。如果显示的设置键值为`undefined`则会清空对应的表单。|`object`|\n\n##### 返回值\n\nMorning对象\n\n#### setGroupJson(groupName, dataJson)\n\n设置一组表单的数值(采用JSON)，详见：[表单组](/guide/form.html#表单组)。\n\n##### 参数\n\n|参数|可选|描述|类型|\n|-|-|-|-|\n|groupName|NO|需要设置数据表单组的名称|`string`|\n|dataJson|NO|一组键值对的JSON字符串，键名为表单的KEY，键值是需要设置的表单值。可以只设置部分KEY。如果显示的设置键值为`'undefined'`则会清空对应的表单。|`object`|\n\n##### 返回值\n\nMorning对象。\n\n#### cleanGroup(groupName)\n\n清空一组表单的数值，详见：[清空一组表单的值](/guide/form.html#清空一组表单的值)。\n\n##### 参数\n\n|参数|可选|描述|类型|\n|-|-|-|-|\n|groupName|NO|需要清空数据表单组的名称|`string`|\n\n##### 返回值\n\nMorning对象\n\n")])])},o=[];t._withStripped=!0},392:function(n,e,r){"use strict";r.r(e);var t=r(88),o=r.n(t);for(var u in t)"default"!==u&&function(n){r.d(e,n,function(){return t[n]})}(u);var i=r(192),a=r(0),f=!1;var s=function(n){f||r(764)},d=Object(a.a)(o.a,i.a,i.b,!1,s,null,null);d.options.__file="src/docs/pages/guide/morning/index.vue",e.default=d.exports},393:function(n,e,r){"use strict";var t=u(r(1)),o=u(r(392));function u(n){return n&&n.__esModule?n:{default:n}}new t.default({el:"#root",render:function(n){return n(o.default)}})},764:function(n,e){},88:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t,o=r(3),u=(t=o)&&t.__esModule?t:{default:t};e.default={data:function(){return{page:"morning"}},components:{"doc-guide":u.default}},n.exports=e.default}});