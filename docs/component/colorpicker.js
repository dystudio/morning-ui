!function(n){function e(e){for(var i,c,l=e[0],d=e[1],u=e[2],a=0,s=[];a<l.length;a++)c=l[a],r[c]&&s.push(r[c][0]),r[c]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(n[i]=d[i]);for(p&&p(e);s.length;)s.shift()();return t.push.apply(t,u||[]),o()}function o(){for(var n,e=0;e<t.length;e++){for(var o=t[e],i=!0,l=1;l<o.length;l++){var d=o[l];0!==r[d]&&(i=!1)}i&&(t.splice(e--,1),n=c(c.s=o[0]))}return n}var i={},r={19:0};var t=[];function c(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=n,c.c=i,c.d=function(n,e,o){c.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},c.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=d;t.push([287,0]),o()}({1:function(n,e){n.exports=Vue},139:function(n,e,o){"use strict";o.d(e,"a",function(){return i}),o.d(e,"b",function(){return r});var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 颜色选择器 `<ui-colorpicker>`\n\n<doc-component-status page="colorpicker"></doc-component-status>\n\n[[[开始]]]\n\n定义颜色选择器。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-colorpicker form-name="颜色选择"></ui-colorpicker>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset\n@name:formStatus\n@uikey:colorpicker\n@defaultValue:\'#ff0000\'\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:colorpicker\n@defaultValue:\'#ff0000\'\n:::\n\n:::vue\n@name:value-type\n---\n#config\n>conf-desc\n通过`set()`方法获取颜色的数值类型。若颜色没有透明度，在数值上会自动过滤透明度。\n>conf-accept\n`\'hex\'`<br>`\'rgba\'`<br>`\'hsla\'`\n>conf-type\nString\n>conf-default\n`\'hex\'`\n---\n#demo\n>desc\n获取颜色的HEX。\n>tpl\n<div style="width:300px;">\n    <ui-colorpicker ref="demo1" form-name="颜色选择" value-type="hex"></ui-colorpicker><br>\n    <ui-link js="alert(window.morning.findVM(\'demo1\').get())">获取颜色值</ui-link>\n</div>\n---\n#demo\n>desc\n获取颜色的RGBA。\n>tpl\n<div style="width:300px;">\n    <ui-colorpicker ref="demo2" form-name="颜色选择" value-type="rgba"></ui-colorpicker><br>\n    <ui-link js="alert(window.morning.findVM(\'demo2\').get())">获取颜色值</ui-link>\n</div>\n---\n#demo\n>desc\n获取颜色的HSLA。\n>tpl\n<div style="width:300px;">\n    <ui-colorpicker ref="demo3" form-name="颜色选择" value-type="hsla"></ui-colorpicker><br>\n    <ui-link js="alert(window.morning.findVM(\'demo3\').get())">获取颜色值</ui-link>\n</div>\n:::\n\n:::vue\n@name:allow-alpha\n---\n#config\n>conf-desc\n是否允许颜色具有透明度。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-colorpicker form-name="颜色选择" :allow-alpha="false"></ui-colorpicker>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:colorpicker\n@value:\'#ff0000\'\n@defaultValue:\'#ff0000\'\n:::\n\n:::vue\n@name:togglePicker([toggle])\n---\n#method\n>method-desc\n显示/隐藏颜色选择器的下拉框。\n>method-args\n|show|YES|颜色选择器的下拉框切换到隐藏或显示，若不设置则切换到相反的状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width:300px">\n        <ui-colorpicker ref="demo5"></ui-colorpicker>\n    </div>\n    <br>\n    <ui-link js="window.morning.findVM(\'demo5\').togglePicker();">切换相反状态</ui-link>\n    <ui-link js="window.morning.findVM(\'demo5\').togglePicker(true);">切换至显示</ui-link>\n    <ui-link js="window.morning.findVM(\'demo5\').togglePicker(false);">切换至隐藏</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:颜色选择器\n@uikey:colorpicker\n@value:\'#ff0000\'\n@wrapStyle:width:300px;\n:::\n\n:::vue\n@name:show-picker\n---\n#event\n>event-desc\n当颜色选择器的下拉框显示时触发。\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-colorpicker ref="demo4" @show-picker="echo"></ui-colorpicker>\n    <br> \n    <ui-link js="window.morning.findVM(\'demo4\').togglePicker(true);">点击触发show-picker事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo4.show-picker\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:hide-picker\n---\n#event\n>event-desc\n当颜色选择器的下拉框隐藏时触发。\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-colorpicker ref="demo6" @hide-picker="echo"></ui-colorpicker>\n    <br> \n    <ui-link js="window.morning.findVM(\'demo4\').togglePicker(true);setTimeout(()=>(window.morning.findVM(\'demo6\').togglePicker(false)));">点击触发hide-picker事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo6.hide-picker\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:hue-slider-change\n---\n#event\n>event-desc\n当颜色选择器的HUE滑块移动时触发。\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-colorpicker ref="demo7" @hue-slider-change="echo"></ui-colorpicker>\n    <br> \n    <p>拖动HUE滑块来触发此事件</p>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo7.hue-slider-change\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:alpha-slider-change\n---\n#event\n>event-desc\n当颜色选择器的透明度滑块移动时触发。\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-colorpicker ref="demo8" @alpha-slider-change="echo"></ui-colorpicker>\n    <br> \n    <p>拖动透明度滑块来触发此事件</p>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo8.alpha-slider-change\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:input-type-change\n---\n#event\n>event-desc\n当颜色选择器的色值输入类型变化时触发。\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-colorpicker ref="demo9" @input-type-change="echo"></ui-colorpicker>\n    <br> \n    <p>切换颜色输入类型来触发此事件</p>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo9.input-type-change\', \'emit event!\');\n        }\n    }\n}\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n- `String` : 字符串\n\n#### 值过滤\n\n- 转换成字符串类型\n- 检测值是否是合法的颜色值字符串(采用[color-string](https://www.npmjs.com/package/color-string)检测)，若不合法则返回纯黑色的值\n\n#### 值格式\n\n颜色值的字符串，根据`value-type`配置角色是哪种颜色标准。\n\n#### 默认值\n\n`#000000`(若设置了`value-type`则是纯黑色的其他表达形式)\n\n:::preset\n@name:formValue\n@uikey:colorpicker\n@uiname:颜色选择器\n@valueType:colorpicker\n@wrapStyle:width:300px;\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/colorpicker/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},r=[];i._withStripped=!0},22:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=o(2),t=(i=r)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"colorpicker"}},components:{"doc-component":t.default}},n.exports=e.default},286:function(n,e,o){"use strict";o.r(e);var i=o(22),r=o.n(i);for(var t in i)"default"!==t&&function(n){o.d(e,n,function(){return i[n]})}(t);var c=o(139),l=o(0),d=!1;var u=function(n){d||o(685)},p=Object(l.a)(r.a,c.a,c.b,!1,u,null,null);p.options.__file="src/docs/pages/component/colorpicker/index.vue",e.default=p.exports},287:function(n,e,o){"use strict";var i=t(o(1)),r=t(o(286));function t(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(r.default)}})},685:function(n,e){}});