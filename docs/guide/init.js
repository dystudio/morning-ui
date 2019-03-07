!function(n){function e(e){for(var r,i,a=e[0],f=e[1],l=e[2],c=0,d=[];c<a.length;c++)i=a[c],u[i]&&d.push(u[i][0]),u[i]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(n[r]=f[r]);for(s&&s(e);d.length;)d.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],r=!0,a=1;a<t.length;a++){var f=t[a];0!==u[f]&&(r=!1)}r&&(o.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},u={101:0},o=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],f=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var s=f;o.push([630,0]),t()}({1:function(n,e){n.exports=Vue},280:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 初始化\n\n在使用Morning UI之前，需要先通过`Vue.use(morning, [options])`方法来初始化。\n\n初始化方法接受一个`options`对象来对Morning UI进行初始化配置，`options`的参数都是可选的，详见下表：\n\n|参数|描述|类型|\n|-|-|-|\n|prefix|组件标签前缀，默认为ui，可在冲突时使用自定义|`string`|\n|uploader|文件上传组件的适配器，用来将文件上传到服务端|`function`|\n|zIndex|Morning UI在管理`z-index`时初始的值，以此开始递增|`number`|\n\n## 更改组件标签前缀\n\n默认情况下Morning UI采用`ui`作为组件标签的前缀，比如使用按钮组件时，需要使用`<ui-btn></ui-btn>`标签。但在某些场景下可能`<ui-*>`这样的标签已经被占用，因此Morning UI允许你在初始化时修改组件标签的前缀：\n\n```js\nVue.use(morning, {\n    prefix : 'v'\n});\n```\n\n比如通过上面的代码初始化后，需要使用`<v-btn><v-btn>`来使用按钮组件。注意`前缀`和`组件名`之间的中划线是固定的无法改变。\n\n由于Morning UI最终生成的HTML标签以`mor-`为前缀，所以`prefix`无法设置为`mor`。\n\n## 全局文件上传适配器\n\n你可以设置全局的文件上传适配器，在没有为文件组件指定适配器时，将使用全局的适配器。\n\n```js\nVue.use(morning, {\n    uploader : () => {\n        // 上传文件逻辑...\n    }\n});\n```\n\n详见：[文件上传适配器](/component/upload.html#文件上传适配器)\n\n## 配置初始`z-index`值\n\nMorning UI在全局管理了所有组件的`z-index`值，默认从`100`或组件指定的值开始递增，若使用了此配置则组件的`z-index`将从（配置值）或（组件指定的值 + 配置值）开始递增。\n\n同时部分用于固定展示的组件（比如：`ui-sticky`）会默认将`z-index`设为初始值减1。\n\n你可以像下面这样修改初始`z-index`值：\n\n```js\nVue.use(morning, {\n    zIndex : 1000\n});\n```\n\n\n\n")])])},u=[];r._withStripped=!0,t.d(e,"a",function(){return r}),t.d(e,"b",function(){return u})},50:function(n,e,t){"use strict";t.r(e);var r=t(51),u=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,function(){return r[n]})}(o);e.default=u.a},51:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,u=t(3),o=(r=u)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"init"}},components:{"doc-guide":o.default}},n.exports=e.default},630:function(n,e,t){"use strict";var r=o(t(1)),u=o(t(631));function o(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(u.default)}})},631:function(n,e,t){"use strict";t.r(e);var r=t(280),u=t(50);for(var o in u)"default"!==o&&function(n){t.d(e,n,function(){return u[n]})}(o);var i=t(0),a=Object(i.a)(u.default,r.a,r.b,!1,null,null,null);a.options.__file="src/docs/pages/guide/init/index.vue",e.default=a.exports}});