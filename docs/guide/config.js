!function(n){function e(e){for(var o,a,l=e[0],c=e[1],s=e[2],p=0,d=[];p<l.length;p++)a=l[p],i[a]&&d.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);for(u&&u(e);d.length;)d.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],o=!0,l=1;l<t.length;l++){var c=t[l];0!==i[c]&&(o=!1)}o&&(r.splice(e--,1),n=a(a.s=t[0]))}return n}var o={},i={94:0},r=[];function a(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=o,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)a.d(t,o,function(e){return n[e]}.bind(null,o));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;r.push([634,0]),t()}({1:function(n,e){n.exports=Vue},281:function(n,e,t){"use strict";var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 配置\n\n配置可以为组件提供不同的JS逻辑或样式。只有交互和表单组件支持配置，因为样式组件不支持JS逻辑。\n\n配置与形态的区别：\n\n- 形态是一种通用的组件属性，可以区分样式及JS逻辑，有一套全局的规范，大部分组件都支持。\n- 不通的组件可以有不同的配置，常用于区分JS逻辑，也可以区分样式，全局仅在命名上有规范，只有交互和表单组件支持。\n\n## 初始化配置\n\n在使用组件时，可以在组件标签`<ui-*>`的`attr`属性中传入初始化配置：\n\n:::vue\n#demo\n>tpl\n\x3c!-- ui-btn设置link配置 --\x3e\n\x3c!-- 配置名称是: link --\x3e\n\x3c!-- 配置数值是: https://www.google.com --\x3e\n<ui-btn new-tab link=\"https://www.google.com\">Google</ui-btn>\n:::\n\n键名为配置的名称，键值是配置的数值。\n\n由于初始化配置基于`Vue`的`props`，你也可以使用`v-bind`来传入配置，或使用JavaScript表达式。\n\n:::vue\n#demo\n>tpl\n<div>\n    \x3c!-- 通过v-bind为ui-btn设置link --\x3e\n    <ui-btn new-tab :link=\"link\">Google</ui-btn>\n\n    \x3c!-- 通过JavaScript表达式为ui-btn设置link --\x3e\n    <ui-btn new-tab :link=\"'https://www.google.com'\">Google</ui-btn>\n</div>\n>script\n{\n    data : {\n        link : 'https://www.google.com'\n    }\n}\n:::\n\n更多用法见:[Vue/模板语法](https://cn.vuejs.org/v2/guide/syntax.html)。\n\n## camelCase 和 kebab-case\n\nHTML特性是不区分大小写的。所以，当配置的名称是camelCased(驼峰式)命名的prop，在HTML中需要转换为相对应的kebab-case(短横线隔开式)命名：\n\n:::vue\n#demo\n>tpl\n<div>\n    \x3c!-- new-tab在HTML中是kebab-case命名 --\x3e\n    <ui-btn new-tab :link=\"link\">Google</ui-btn>\n</div>\n>script\n{\n    data : {\n        link : 'https://www.google.com'\n    }\n}\n:::\n\n## 单向数据流\n\n配置是基于Vue的[Prop](https://cn.vuejs.org/v2/guide/components.html#Prop)实现的，所以具有`Prop`的特性。\n\n使用`v-bind`初始化配置时，配置会和父实例的数据发生变化时，将传导给组件的配置，但是反过来不会。在上面的示例中这意味着：\n\n- 当组件的配置`link`发生变更时，并不会同步到父实例的`link`中\n- 当父实例的`link`发生变更时，会同步到组件的配置`link`中\n\n:::vue\n#demo\n>tpl\n<div>\n    \x3c!-- 通过v-bind为ui-btn设置link --\x3e\n    <ui-btn ref=\"demo2\" new-tab :link=\"link\">Google</ui-btn>\n</div>\n>script\n{\n    data : {\n        link : 'https://www.google.com'\n    },\n    mounted : function () {\n\n        // 组件的配置`link`改变时，父实例获取不到变化的配置\n        morning.findVM('demo2').conf.link = 'https://www.baidu.com';\n        console.log('demo2.console1', this.link); // `https://www.google.com`\n\n        // 父实例的`link`改变会同步到组件的配置中\n        this.link = 'https://bing.com';\n        Vue.nextTick(() => {\n            console.log('demo2.console2', morning.findVM('demo2').getConf().link); // `https://bing.com`\n        });\n\n    }\n}\n:::\n\n下面有张图可以帮助你更好的理解上面的概念：\n\n<img src=\"http://h0.hucdn.com/open/201746/cd9651aaab8bcc76_1300x213.png\" width=\"650\" alt=\"\">\n\n父实例的配置变化时，会引起`Prop`的变化，`Prop`的变化会同步到组件的配置`vm.conf`中。\n\n## 获取配置\n\n获取组件的配置应该使用组件上的`getConf()`方法，这个方法会对组件的配置进行一次拷贝然后返回，避免对配置的意外修改。\n\n#### getConf([name])\n\n##### 参数\n\n|参数|可选|描述|类型|\n|-|-|-|-|\n|name|YES|获取的配置key，若不传则返回包含所有配置的对象|`undefined` `string`|\n\n##### 返回值\n\n单项配置数值，或包含所有配置的对象，键名是配置的名称，键值是配置的数值。返回的配置内容经过拷贝，所以修改返回值并不会影响组件当前的配置。\n\n## 配置属性\n\n任何一项配置都包含五个关键属性：\n\n- key : 配置的名称\n- desc : 配置描述\n- accept : 接受值(可以是一个范围，也可以是几个值)\n- type : 值类型\n- default : 默认值\n\n组件的逻辑及文档必须响应这些关键属性。\n\n## 独立性\n\n不同的配置之间应该是相互独立的，尽可能是无依赖的。\n\n## 配置全局命名规范\n\n配置在全局有一套命名规范，这样是为了防止不同的组件对于某个名词理解不同，导致同一名词在不同组件的不同行为。\n\n在为组件添加配置前应先检查下面的列表，是否有含义相同的配置，若有请使用，若没有请将新的配置添加到下面列表并注明它的含义。\n\n- `size` : 尺寸\n- `color` : 颜色\n- `state` : 状态\n- `link` : 链接\n- `js` : JS代码\n- `locked` : 锁定\n- `new-tab` : 新标签\n- `auto-close` : 点击组件外区域关闭\n- `tab` : 标签\n- `prepend` : 在之后插入\n- `append` : 在之前插入\n- `width` : 宽度\n- `height` : 高度\n- `show-type` : 展示方式\n- `time` : 时间\n- `note` : 提示\n- `root-name` : 跟节点名称\n- `choose-root` : 选择跟节点\n- `list` : 内容列表\n- `max-history` : 最大历史纪录\n- `target` : 目标\n- `placement` : 位置\n- `offset` : 偏移量\n- `trigger` : 触发类型\n- `form-name` : 表单名\n- `form-key` : 表单Key\n- `group` : 表单组\n- `hide-name` : 隐藏表单名\n- `hide-value` : 表单数值不可见\n- `rows` : 行数\n- `auto-hide-name` : 自动隐藏表单名\n- `max-show` : 最大显示项目\n- `max-show-height` : 最大显示高度\n- `can-search` : 可搜索\n- `multi-select` : 多选\n- `max` : 最大\n- `inline-img-size` : 内联图片尺寸\n- `item-tip` : 项目提示\n- `item-tip-direct` : 项目提示方向\n- `accept-html` : 可使用HTML\n- `can-move` : 可移动\n- `total` : 总数\n- `page-size` : 每页数量\n- `page` : 页数\n- `jump-page` : 跳转页面\n- `item-name` : 项目名称\n- `item-filler` : 项目填充\n- `item-validator` : 项目验证\n- `input-type` : 输入类型\n- `batch-reg` : 批量输入正则表达式\n- `batch-filler` : 批量输入填充\n- `batch-uniq` : 批量输入去重\n- `empty-cell-value` : 空单元格的数值\n- `title` : 标题\n- `zebra-pattern` : 斑马线\n- `vertical-border` : 竖向边框\n- `horizontal-border` : 横向边框\n- `align` : 对齐\n- `show-col-name` : 显示列名称\n- `fixed-title-col` : 固定标题列\n- `col-set` : 列设置\n- `row-set` : 行设置\n- `cell-set` : 单元格设置\n- `export-csv` : 导出CSV文件\n- `csv-name` : CSV文件的名称\n- `close-btn` : 关闭按钮\n- `done-time` : 完成/关闭时间\n- `date` : 日期\n- `highlight-now` : 高亮当日\n- `highlight-day` : 高亮日期\n- `pick-year-month` : 选择年月\n- `accept-type` : 接受类型\n- `allow-url` : 允许URL\n- `allow-drag` : 允许拖拽\n- `validate` : 验证\n- `uploader` : 上传适配器\n- `clean-zone` : 清空区域\n- `clearable` : 清空数值\n- `format` : 格式\n- `selectable-range` : 可选范围\n- `date-selectable-range` : 日期可选范围\n- `time-selectable-range` : 时间可选范围\n- `is-range` : 区间选择\n- `is-list` : 列表选择\n- `list-start` : 列表开始\n- `list-end` : 列表结束\n- `list-step` : 列表步长\n- `separator` : 分隔符\n- `start-name` : 开始名称\n- `end-name` : 结束名称\n- `auto-reset-search` : 重置搜索\n- `hide-selected` : 隐藏选中\n- `clean-allzone-btn` : 清空所有区域按钮\n- `quick-pick` : 快速选择\n- `anchor-target` : 锚点定位\n- `separate-emit` : 外部触发(触发分离)\n- `separator-type` : 分隔内容类型\n- `append-type` : 附加内容类型\n- `list-width` : 列表宽度\n- `max-rows` : 最大行数\n- `auto-size` : 自动调整尺寸\n- `keep-origin-name` : 保留原始名\n- `dynamic-list` : 动态列表\n- `position` : 位置\n- `disabled-options` : 禁用选项\n- `parent` : 父级\n- `method` : 方式\n- `open-note` : 开启备注\n- `close-note` : 关闭备注\n- `open-mark` : 开启标记\n- `close-mark` : 关闭标记\n- `done-hidden` : 完成后隐藏\n- `top` : 距离顶部\n- `bottom` : 距离底部\n- `src` :  源\n- `hide-time` : 隐藏时间\n- `hide-progress` : 隐藏进度条\n- `autoplay` : 自动播放\n- `poster` : 视频预览图\n- `allow-fullscreen` : 允许全屏\n- `tools` : 工具\n- `placeholder` : 占位符\n- `min` : 最小\n- `step` : 步长\n- `show-tip` : 显示提示\n- `tip-formatter` : 提示格式化\n- `show-point` : 显示点\n- `mark-range` : 标记范围\n- `value-type` : 值类型\n- `allow-alpha` : 允许透明\n- `title-col-width` : 标题列宽度\n- `shows` : 显示的项目\n- `formater` : 格式化函数\n- `parser` : 解析函数\n- `precision` : 精度\n- `can-close` : 可关闭\n- `close-content` : 关闭内容\n- `type` : 类型\n- `show-icon` : 显示图标\n- `show-counter` : 显示计数器\n- `menu` : 菜单\n- `current-menu` : 当前菜单\n- `auto-toggle-current` : 自动切换当前\n- `position-current` : 定位到当前\n- `side-expand` : 侧边展开\n- `failed` : 失败\n- `progressing` : 处理中\n- `percent` : 百分比\n- `inside-name` : 内部名称\n- `done-step` : 完成步骤\n- `mark-current` : 标记当前\n- `current-type` : 当前的类型\n- `toggle-time` : 切换时间\n- `toggle-type` : 切换类型\n- `toggle-btn` : 切换按钮\n- `indicator-position` : 指示器位置\n- `indicator-type` : 指示器类型\n- `sticky` : 吸附\n- `controls-position` : 控制器位置\n- `tree` : 树状列表数据\n- `foldable` : 可折叠\n- `cable` : 连接线\n- `can-click` : 可点击\n- `custom-fold-icon` : 自定义折叠后图标\n- `custom-unfold-icon` : 自定义未折叠图标\n- `custom-leafnode-icon` : 自定义叶子结点图标\n- `fold-style` : 折叠图标样式\n- `side-collapse` : 侧边可折叠\n- `image` : 图片\n- `allow-half` : 允许半值\n- `show-note` : 显示提示\n- `formater` : 格式化函数\n- `icon` : 图标\n- `source-title` : 源标题\n- `target-title` : 目标标题\n- `checked-options` : 选中选项\n- `submenu-trigger` : 子菜单触发时机\n- `show-last-name` : 显示最后一级名字\n- `change-on-select` : 选中即改变\n- `source-to-target-text` : 源至目标文案\n- `target-to-source-text` : 目标至源文案\n- `palettes` : 色板\n- `only-palettes` : 仅使用色板\n- `inside-padding` : 内部填充\n- `relative` : 相对\n- `strict` : 严格\n- `real-time` : 实时\n- `countdown` : 倒计\n\n")])])},i=[];o._withStripped=!0,t.d(e,"a",function(){return o}),t.d(e,"b",function(){return i})},60:function(n,e,t){"use strict";t.r(e);var o=t(61),i=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);e.default=i.a},61:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i=t(3),r=(o=i)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"config"}},components:{"doc-guide":r.default}},n.exports=e.default},634:function(n,e,t){"use strict";var o=r(t(1)),i=r(t(635));function r(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(i.default)}})},635:function(n,e,t){"use strict";t.r(e);var o=t(281),i=t(60);for(var r in i)"default"!==r&&function(n){t.d(e,n,function(){return i[n]})}(r);var a=t(0),l=Object(a.a)(i.default,o.a,o.b,!1,null,null,null);l.options.__file="src/docs/pages/guide/config/index.vue",e.default=l.exports}});