!function(n){function e(e){for(var r,c,l=e[0],a=e[1],d=e[2],u=0,p=[];u<l.length;u++)c=l[u],t[c]&&p.push(t[c][0]),t[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r]);for(f&&f(e);p.length;)p.shift()();return i.push.apply(i,d||[]),o()}function o(){for(var n,e=0;e<i.length;e++){for(var o=i[e],r=!0,l=1;l<o.length;l++){var a=o[l];0!==t[a]&&(r=!1)}r&&(i.splice(e--,1),n=c(c.s=o[0]))}return n}var r={},t={21:0},i=[];function c(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=n,c.c=r,c.d=function(n,e,o){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)c.d(o,r,function(e){return n[e]}.bind(null,r));return o},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=a;i.push([783,0]),o()}({1:function(n,e){n.exports=Vue},208:function(n,e,o){"use strict";o.r(e);var r=o(209),t=o.n(r);for(var i in r)"default"!==i&&function(n){o.d(e,n,function(){return r[n]})}(i);e.default=t.a},209:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,t=o(2),i=(r=t)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"colorpicker"}},components:{"doc-component":i.default}},n.exports=e.default},355:function(n,e,o){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 颜色选择器 `<ui-colorpicker>`\n\n<doc-component-status page=\"colorpicker\"></doc-component-status>\n\n[[[开始]]]\n\n定义颜色选择器。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-colorpicker form-name=\"颜色选择\"></ui-colorpicker>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset\n@name:formStatus\n@uikey:colorpicker\n@defaultValue:'#ff0000'\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:colorpicker\n@defaultValue:'#ff0000'\n:::\n\n:::vue\n@name:value-type\n---\n#config\n>conf-desc\n通过`get()`方法获取颜色的数值类型。若颜色没有透明度，在数值上会自动过滤透明度。\n>conf-accept\n`'hex'`<br>`'rgba'`<br>`'hsla'`\n>conf-type\nString\n>conf-default\n`'hex'`\n---\n#demo\n>desc\n获取颜色的HEX。\n>tpl\n<div style=\"width:300px;\">\n    <ui-colorpicker ref=\"demo1\" form-name=\"颜色选择\" value-type=\"hex\"></ui-colorpicker><br>\n    <ui-link js=\"alert(window.morning.findVM('demo1').get())\">获取颜色值</ui-link>\n</div>\n---\n#demo\n>desc\n获取颜色的RGBA。\n>tpl\n<div style=\"width:300px;\">\n    <ui-colorpicker ref=\"demo2\" form-name=\"颜色选择\" value-type=\"rgba\"></ui-colorpicker><br>\n    <ui-link js=\"alert(window.morning.findVM('demo2').get())\">获取颜色值</ui-link>\n</div>\n---\n#demo\n>desc\n获取颜色的HSLA。\n>tpl\n<div style=\"width:300px;\">\n    <ui-colorpicker ref=\"demo3\" form-name=\"颜色选择\" value-type=\"hsla\"></ui-colorpicker><br>\n    <ui-link js=\"alert(window.morning.findVM('demo3').get())\">获取颜色值</ui-link>\n</div>\n:::\n\n:::vue\n@name:allow-alpha\n---\n#config\n>conf-desc\n是否允许颜色具有透明度。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-colorpicker form-name=\"颜色选择\" :allow-alpha=\"false\"></ui-colorpicker>\n</div>\n:::\n\n:::vue\n@name:palettes\n---\n#config\n>conf-desc\n显示调色板，调色板包含一组或多组预设颜色，让用户可以快速选择。\n>conf-accept\n包含颜色色值(支持`hex`、`rgba`、`hsla`)的数组。<br>包含一组色值对象的数组，色值对象包含两个属性：`name`：调色板名称，`colors`：预设颜色色值(支持`hex`、`rgba`、`hsla`)数组。\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-colorpicker form-name=\"颜色选择\"\n        :palettes=\"[\n            '#f44336',\n            '#e91e63',\n            '#9c27b0',\n            '#3f51b5',\n            '#2196f3',\n            '#009688',\n            '#8bc34a',\n            '#ff9800'\n        ]\"\n    ></ui-colorpicker>\n</div>\n---\n#demo\n>desc\n预设颜色也支持`hex`、`rgba`、`hsla`类型，若和`value-type`不一致则会自动转换。\n>tpl\n<div style=\"width:300px;\">\n    <ui-colorpicker form-name=\"颜色选择\"\n        value-type=\"hex\"\n        :palettes=\"[\n            'rgb(244, 67, 54)',\n            'rgb(233, 30, 99)',\n            'rgb(156, 39, 176)',\n            'rgb(63, 81, 181)',\n            'rgb(33, 150, 243)',\n            'hsl(174, 100%, 29%)',\n            'hsl(88, 50%, 53%)',\n            'hsl(36, 100%, 50%)'\n        ]\"\n    ></ui-colorpicker>\n</div>\n---\n#demo\n>desc\n预设颜色也支持透明度。\n>tpl\n<div style=\"width:300px;\">\n    <ui-colorpicker form-name=\"颜色选择\"\n        :palettes=\"[\n            'rgb(244, 67, 54, 0.7)',\n            'rgb(233, 30, 99, 0.7)',\n            'rgb(156, 39, 176, 0.7)',\n            'rgb(63, 81, 181, 0.7)',\n            'rgb(33, 150, 243, 0.7)',\n            '#009688aa',\n            '#8bc34aaa',\n            '#ff9800aa'\n        ]\"\n    ></ui-colorpicker>\n</div>\n---\n#demo\n>desc\n预设颜色也支持透明度。\n>tpl\n<div style=\"width:300px;\">\n    <ui-colorpicker form-name=\"颜色选择\"\n        :palettes=\"[\n            'rgb(244, 67, 54, 0.7)',\n            'rgb(233, 30, 99, 0.7)',\n            'rgb(156, 39, 176, 0.7)',\n            'rgb(63, 81, 181, 0.7)',\n            'rgb(33, 150, 243, 0.7)',\n            '#009688aa',\n            '#8bc34aaa',\n            '#ff9800aa'\n        ]\"\n    ></ui-colorpicker>\n</div>\n---\n#demo\n>desc\n设置多个调色板。\n<br>\n需要注意当使用多个调色板时`palettes`数组中的每一项都必须是对象，不能混用色值字符串和对象两种写法。\n<br>\n<br>\n在调色板选择界面，最多可以预览每组颜色的前6个颜色。\n>tpl\n<div style=\"width:300px;\">\n    <ui-colorpicker form-name=\"颜色选择\"\n        :palettes=\"[\n            {\n                name : '红色系',\n                colors : ['#b71c1c', '#c62828', '#d32f2f', '#e53935', '#f44336', '#ef5350', '#e57373', '#ef9a9a', '#ffcdd2', '#ffebee']\n            },\n            {\n                name : '蓝色系',\n                colors : ['#0d47a1', '#1565c0', '#1976d2', '#1e88e5', '#2196f3', '#42a5f5', '#64b5f6', '#90caf9', '#bbdefb', '#e3f2fd']\n            },\n            {\n                name : '绿色系',\n                colors : ['#1b5e20', '#2e7d32', '#388e3c', '#43a047', '#4caf50', '#66bb6a', '#81c784', '#a5d6a7', '#c8e6c9', '#e8f5e9']\n            },\n            {\n                name : '橙色系',\n                colors : ['#e65100', '#ef6c00', '#f57c00', '#fb8c00', '#ff9800', '#ffa726', '#ffb74d', '#ffcc80', '#ffe0b2', '#fff3e0']\n            }\n        ]\"\n    ></ui-colorpicker>\n</div>\n:::\n\n:::vue\n@name:only-palettes\n---\n#config\n>conf-desc\n仅使用色板选取颜色。使用此配置时需要确保`palettes`配置中至少有一组色彩，否则此配置不生效。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-colorpicker form-name=\"颜色选择\"\n        :only-palettes=\"true\"\n        :palettes=\"[\n            '#f44336',\n            '#e91e63',\n            '#9c27b0',\n            '#3f51b5',\n            '#2196f3',\n            '#009688',\n            '#8bc34a',\n            '#ff9800'\n        ]\"\n    ></ui-colorpicker>\n</div>\n---\n#demo\n>desc\n可通过`palettes`配置设置多个调色板。\n>tpl\n<div style=\"width:300px;\">\n    <ui-colorpicker form-name=\"颜色选择\"\n        :only-palettes=\"true\"\n        :palettes=\"[\n            {\n                name : '红色系',\n                colors : ['#b71c1c', '#c62828', '#d32f2f', '#e53935', '#f44336', '#ef5350', '#e57373', '#ef9a9a', '#ffcdd2', '#ffebee']\n            },\n            {\n                name : '蓝色系',\n                colors : ['#0d47a1', '#1565c0', '#1976d2', '#1e88e5', '#2196f3', '#42a5f5', '#64b5f6', '#90caf9', '#bbdefb', '#e3f2fd']\n            },\n            {\n                name : '绿色系',\n                colors : ['#1b5e20', '#2e7d32', '#388e3c', '#43a047', '#4caf50', '#66bb6a', '#81c784', '#a5d6a7', '#c8e6c9', '#e8f5e9']\n            },\n            {\n                name : '橙色系',\n                colors : ['#e65100', '#ef6c00', '#f57c00', '#fb8c00', '#ff9800', '#ffa726', '#ffb74d', '#ffcc80', '#ffe0b2', '#fff3e0']\n            }\n        ]\"\n    ></ui-colorpicker>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:colorpicker\n@value:'#ff0000'\n@defaultValue:'#ff0000'\n:::\n\n:::vue\n@name:togglePicker([toggle])\n---\n#method\n>method-desc\n显示/隐藏颜色选择器的下拉框。\n>method-args\n|show|YES|颜色选择器的下拉框切换到隐藏或显示，若不设置则切换到相反的状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style=\"width:300px\">\n        <ui-colorpicker ref=\"demo5\"></ui-colorpicker>\n    </div>\n    <br>\n    <ui-link js=\"window.morning.findVM('demo5').togglePicker();\">切换相反状态</ui-link>\n    <ui-link js=\"window.morning.findVM('demo5').togglePicker(true);\">切换至显示</ui-link>\n    <ui-link js=\"window.morning.findVM('demo5').togglePicker(false);\">切换至隐藏</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:颜色选择器\n@uikey:colorpicker\n@value:'#ff0000'\n@wrapStyle:width:300px;\n:::\n\n:::vue\n@name:show-picker\n---\n#event\n>event-desc\n当颜色选择器的下拉框显示时触发。\n---\n#demo\n>tpl\n<div style=\"width:300px\">\n    <ui-colorpicker ref=\"demo4\" @show-picker=\"echo\"></ui-colorpicker>\n    <br> \n    <ui-link js=\"window.morning.findVM('demo4').togglePicker(true);\">点击触发show-picker事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log('demo4.show-picker', 'emit event!');\n        }\n    }\n}\n:::\n\n:::vue\n@name:hide-picker\n---\n#event\n>event-desc\n当颜色选择器的下拉框隐藏时触发。\n---\n#demo\n>tpl\n<div style=\"width:300px\">\n    <ui-colorpicker ref=\"demo6\" @hide-picker=\"echo\"></ui-colorpicker>\n    <br> \n    <ui-link js=\"window.morning.findVM('demo4').togglePicker(true);setTimeout(()=>(window.morning.findVM('demo6').togglePicker(false)));\">点击触发hide-picker事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log('demo6.hide-picker', 'emit event!');\n        }\n    }\n}\n:::\n\n:::vue\n@name:hue-slider-change\n---\n#event\n>event-desc\n当颜色选择器的HUE滑块移动时触发。\n---\n#demo\n>tpl\n<div style=\"width:300px\">\n    <ui-colorpicker ref=\"demo7\" @hue-slider-change=\"echo\"></ui-colorpicker>\n    <br> \n    <p>拖动HUE滑块来触发此事件</p>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log('demo7.hue-slider-change', 'emit event!');\n        }\n    }\n}\n:::\n\n:::vue\n@name:alpha-slider-change\n---\n#event\n>event-desc\n当颜色选择器的透明度滑块移动时触发。\n---\n#demo\n>tpl\n<div style=\"width:300px\">\n    <ui-colorpicker ref=\"demo8\" @alpha-slider-change=\"echo\"></ui-colorpicker>\n    <br> \n    <p>拖动透明度滑块来触发此事件</p>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log('demo8.alpha-slider-change', 'emit event!');\n        }\n    }\n}\n:::\n\n:::vue\n@name:input-type-change\n---\n#event\n>event-desc\n当颜色选择器的色值输入类型变化时触发。\n---\n#demo\n>tpl\n<div style=\"width:300px\">\n    <ui-colorpicker ref=\"demo9\" @input-type-change=\"echo\"></ui-colorpicker>\n    <br> \n    <p>切换颜色输入类型来触发此事件</p>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log('demo9.input-type-change', 'emit event!');\n        }\n    }\n}\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n- `String` : 字符串\n\n#### 值过滤\n\n- 转换成字符串类型\n- 检测值是否是合法的颜色值字符串(采用[color-string](https://www.npmjs.com/package/color-string)检测)，若不合法则返回纯黑色的值\n\n#### 值格式\n\n颜色值的字符串，根据`value-type`配置角色是哪种颜色标准。\n\n#### 默认值\n\n`#000000`(若设置了`value-type`则是纯黑色的其他表达形式)\n\n:::preset\n@name:formValue\n@uikey:colorpicker\n@uiname:颜色选择器\n@valueType:colorpicker\n@wrapStyle:width:300px;\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/colorpicker/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])},t=[];r._withStripped=!0,o.d(e,"a",function(){return r}),o.d(e,"b",function(){return t})},783:function(n,e,o){"use strict";var r=i(o(1)),t=i(o(784));function i(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(t.default)}})},784:function(n,e,o){"use strict";o.r(e);var r=o(355),t=o(208);for(var i in t)"default"!==i&&function(n){o.d(e,n,function(){return t[n]})}(i);var c=o(0),l=Object(c.a)(t.default,r.a,r.b,!1,null,null,null);l.options.__file="src/docs/pages/component/colorpicker/index.vue",e.default=l.exports}});