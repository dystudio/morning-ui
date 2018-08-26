!function(n){function e(e){for(var i,l,c=e[0],u=e[1],d=e[2],a=0,s=[];a<c.length;a++)l=c[a],t[l]&&s.push(t[l][0]),t[l]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(n[i]=u[i]);for(p&&p(e);s.length;)s.shift()();return r.push.apply(r,d||[]),o()}function o(){for(var n,e=0;e<r.length;e++){for(var o=r[e],i=!0,c=1;c<o.length;c++){var u=o[c];0!==t[u]&&(i=!1)}i&&(r.splice(e--,1),n=l(l.s=o[0]))}return n}var i={},t={19:0};var r=[];function l(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=n,l.c=i,l.d=function(n,e,o){l.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},l.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},l.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(e,"a",e),e},l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},l.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;r.push([287,0]),o()}({1:function(n,e){n.exports=Vue},139:function(n,e,o){"use strict";o.d(e,"a",function(){return i}),o.d(e,"b",function(){return t});var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 颜色选择器 `<ui-colorpicker>`\n\n<doc-component-status page="colorpicker"></doc-component-status>\n\n[[[开始]]]\n\n定义颜色选择器。\n\n#### 使用\n\n:::democode/html\n<div style="width:300px;">\n    <ui-colorpicker form-name="颜色选择"></ui-colorpicker>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset/html\nformStatus\n---\nuikey:colorpicker\nstatusDefaultValue:\'#ff0000\'\n:::\n\n[[[配置]]]\n\n:::preset/html\nformConfigTable\n---\n|[value-type](#value-type)|通过`set()`方法获取颜色的数值类型。若颜色没有透明度，在数值上会自动过滤透明度。|`\'hex\'`<br>`\'rgba\'`<br>`\'hsla\'`|String|`\'hex\'`|\n|[allow-alpha](#allow-alpha)|是否允许颜色具有透明度|`true`<br>`false`|Boolean|`true`|\n:::\n\n:::preset/html\nformConfigDemo\n---\nuikey:colorpicker\nconfigDefaultValue:\'#ff0000\'\n:::\n\n#### value-type\n\n获取颜色的HEX：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-colorpicker ref="demo1" form-name="颜色选择" value-type="hex"></ui-colorpicker><br>\n    <ui-link js="alert(window.morning.findVM(\'demo1\').get())">获取颜色值</ui-link>\n</div>\n:::\n\n\n获取颜色的RGBA：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-colorpicker ref="demo2" form-name="颜色选择" value-type="rgba"></ui-colorpicker><br>\n    <ui-link js="alert(window.morning.findVM(\'demo2\').get())">获取颜色值</ui-link>\n</div>\n:::\n\n获取颜色的HSLA：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-colorpicker ref="demo3" form-name="颜色选择" value-type="hsla"></ui-colorpicker><br>\n    <ui-link js="alert(window.morning.findVM(\'demo3\').get())">获取颜色值</ui-link>\n</div>\n:::\n\n#### allow-alpha\n\n:::democode/html\n<div style="width:300px;">\n    <ui-colorpicker form-name="颜色选择" :allow-alpha="false"></ui-colorpicker>\n</div>\n:::\n\n[[[方法]]]\n\n#### togglePicker([toggle])\n\n显示/隐藏颜色选择器的下拉框。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|show|YES|颜色选择器的下拉框切换到隐藏或显示，若不设置则切换到相反的状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n\n:::democode/html\n<div style="width:300px">\n    <ui-colorpicker ref="demo5"></ui-colorpicker>\n</div>\n<br>\n<ui-link js="window.morning.findVM(\'demo5\').togglePicker();">切换相反状态</ui-link>\n<ui-link js="window.morning.findVM(\'demo5\').togglePicker(true);">切换至显示</ui-link>\n<ui-link js="window.morning.findVM(\'demo5\').togglePicker(false);">切换至隐藏</ui-link>\n:::\n\n:::preset/html\nformMethod\n---\nuikey:colorpicker\nmethodValue:\'#ff0000\'\nmethodDefaultValue:\'#ff0000\'\n:::\n\n[[[事件]]]\n\n#### show-picker\n\n当颜色选择器的下拉框显示时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo4.show-picker\', \'emit event!\');\n        }\n    }\n});\n---\n<div style="width:300px">\n    <ui-colorpicker ref="demo4" @show-picker="echo"></ui-colorpicker>\n    <br> \n    <ui-link js="window.morning.findVM(\'demo4\').togglePicker(true);">点击触发show-picker事件</ui-link>\n</div>\n:::\n\n#### hide-picker\n\n当颜色选择器的下拉框隐藏时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo6.hide-picker\', \'emit event!\');\n        }\n    }\n});\n---\n<div style="width:300px">\n    <ui-colorpicker ref="demo6" @hide-picker="echo"></ui-colorpicker>\n    <br> \n    <ui-link js="window.morning.findVM(\'demo4\').togglePicker(true);setTimeout(()=>(window.morning.findVM(\'demo6\').togglePicker(false)));">点击触发hide-picker事件</ui-link>\n</div>\n:::\n\n#### hue-slider-change\n\n当颜色选择器的HUE滑块移动时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo7.hue-slider-change\', \'emit event!\');\n        }\n    }\n});\n---\n<div style="width:300px">\n    <ui-colorpicker ref="demo7" @hue-slider-change="echo"></ui-colorpicker>\n    <br> \n    <p>拖动HUE滑块来触发此事件</p>\n</div>\n:::\n\n#### alpha-slider-change\n\n当颜色选择器的透明度滑块移动时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo8.alpha-slider-change\', \'emit event!\');\n        }\n    }\n});\n---\n<div style="width:300px">\n    <ui-colorpicker ref="demo8" @alpha-slider-change="echo"></ui-colorpicker>\n    <br> \n    <p>拖动透明度滑块来触发此事件</p>\n</div>\n:::\n\n#### input-type-change\n\n当颜色选择器的色值输入类型变化时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo9.input-type-change\', \'emit event!\');\n        }\n    }\n});\n---\n<div style="width:300px">\n    <ui-colorpicker ref="demo9" @input-type-change="echo"></ui-colorpicker>\n    <br> \n    <p>切换颜色输入类型来触发此事件</p>\n</div>\n:::\n\n:::preset/html\nformEvent\n---\nuikey:colorpicker\neventValue:\'#ff0000\'\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n- `String` : 字符串\n\n#### 值过滤\n\n- 转换成字符串类型\n- 检测值是否是合法的颜色值字符串(采用[color-string](https://www.npmjs.com/package/color-string)检测)，若不合法则返回纯黑色的值\n\n#### 值格式\n\n颜色值的字符串，根据`value-type`配置角色是哪种颜色标准。\n\n#### 默认值\n\n`#000000`(若设置了`value-type`则是纯黑色的其他表达形式)\n\n#### 输入/输出示例\n\n:::repeat/html\nformValueType:colorpicker\n---\n<div>\n    <p>{$valueType}类型</p>\n    <div style="width:300px;">\n        <ui-colorpicker ref="demoType{$valueType}"></ui-colorpicker>\n    </div>\n    <br>\n    <ui-link js="window.morning.findVM(\'demoType{$valueType}\').set({$&valueContent})">设置{$valueType}类型</ui-link>\n    <ui-link js="alert(window.morning.findVM(\'demoType{$valueType}\').getJson())">获取表单JSON值</ui-link>\n</div>\n<br>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/colorpicker/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},t=[];i._withStripped=!0},22:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,t=o(2),r=(i=t)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"colorpicker"}},components:{"doc-component":r.default}},n.exports=e.default},286:function(n,e,o){"use strict";o.r(e);var i=o(22),t=o.n(i);for(var r in i)"default"!==r&&function(n){o.d(e,n,function(){return i[n]})}(r);var l=o(139),c=o(0),u=!1;var d=function(n){u||o(684)},p=Object(c.a)(t.a,l.a,l.b,!1,d,null,null);p.options.__file="src/docs/pages/component/colorpicker/index.vue",e.default=p.exports},287:function(n,e,o){"use strict";var i=r(o(1)),t=r(o(286));function r(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(t.default)}})},684:function(n,e){}});