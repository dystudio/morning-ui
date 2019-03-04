!function(n){function e(e){for(var r,i,d=e[0],s=e[1],l=e[2],h=0,u=[];h<d.length;h++)i=d[h],t[i]&&u.push(t[i][0]),t[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r]);for(o&&o(e);u.length;)u.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var n,e=0;e<c.length;e++){for(var a=c[e],r=!0,d=1;d<a.length;d++){var s=a[d];0!==t[s]&&(r=!1)}r&&(c.splice(e--,1),n=i(i.s=a[0]))}return n}var r={},t={18:0},c=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return n[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=n,i.c=r,i.d=function(n,e,a){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(a,r,function(e){return n[e]}.bind(null,r));return a},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var d=window.webpackJsonp=window.webpackJsonp||[],s=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var o=s;c.push([794,0]),a()}({1:function(n,e){n.exports=Vue},216:function(n,e,a){"use strict";a.r(e);var r=a(217),t=a.n(r);for(var c in r)"default"!==c&&function(n){a.d(e,n,function(){return r[n]})}(c);e.default=t.a},217:function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,t=a(2),c=(r=t)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"cascader"}},components:{"doc-component":c.default}},n.exports=e.default},277:function(n,e,a){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 级联选择 `<ui-cascader>`\n\n<doc-component-status page="cascader"></doc-component-status>\n\n[[[开始]]]\n\n定义文本输入框。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-cascader form-name="地址" :list="list"></ui-cascader>\n</div>\n>script\n{\n    data : {\n        list : {\n            "zj" : {\n                name : "浙江省",\n                children : {\n                    "hz" : {\n                        name : "杭州",\n                        children : {\n                            "xcq" : "下城区",\n                            "xhq" : "西湖区",\n                            "jgq" : "江干区"\n                        }\n                    },\n                    "nb" : {\n                        name : "宁波",\n                        children : {\n                            "jbq" : "江北区",\n                            "zhq" : "镇海区"\n                        }\n                    },\n                    "wz" : "温州"\n                }\n            },\n            "js" : {\n                name : "江苏省",\n                children : {\n                    "nj" : {\n                        name : "南京",\n                        children : {\n                            "xwq" : "玄武区",\n                            "jnq" : "江宁区"\n                        }\n                    },\n                    "sz" : "苏州"\n                }\n            },\n            "gd" : {\n                name : "广东省",\n                children : {\n                    "gz" : "广州",\n                    "sz" : "深圳",\n                    "fs" : "佛山"\n                }\n            }\n        }\n    }\n}\n:::\n\n[[[形态]]]\n\n:::preset\n@name:formStatus\n@uikey:cascader\n@defaultValue:[\'zj\', \'hz\', \'jgq\']\n@attrs: :list="{\'zj\':{name:\'浙江省\',children:{\'hz\':{name:\'杭州\',children:{\'xcq\':\'下城区\',\'xhq\':\'西湖区\',\'jgq\':\'江干区\'}},\'nb\':{name:\'宁波\',children:{\'jbq\':\'江北区\',\'zhq\':\'镇海区\'}},\'wz\':\'温州\'}},\'js\':{name:\'江苏省\',children:{\'nj\':{name:\'南京\',children:{\'xwq\':\'玄武区\',\'jnq\':\'江宁区\'}},\'sz\':\'苏州\'}},\'gd\':{name:\'广东省\',children:{\'gz\':\'广州\',\'sz\':\'深圳\',\'fs\':\'佛山\'}}}"\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:cascader\n@defaultValue:[\'zj\', \'hz\', \'jgq\']\n@attrs: :list="{\'zj\':{name:\'浙江省\',children:{\'hz\':{name:\'杭州\',children:{\'xcq\':\'下城区\',\'xhq\':\'西湖区\',\'jgq\':\'江干区\'}},\'nb\':{name:\'宁波\',children:{\'jbq\':\'江北区\',\'zhq\':\'镇海区\'}},\'wz\':\'温州\'}},\'js\':{name:\'江苏省\',children:{\'nj\':{name:\'南京\',children:{\'xwq\':\'玄武区\',\'jnq\':\'江宁区\'}},\'sz\':\'苏州\'}},\'gd\':{name:\'广东省\',children:{\'gz\':\'广州\',\'sz\':\'深圳\',\'fs\':\'佛山\'}}}"\n:::\n\n:::vue\n@name:inside-name\n---\n#config\n>conf-desc\n在组件内显示的名称，和`form-name`互为补充。\n>conf-accept\n字符串\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-cascader inside-name="请选择地址" :list="list"></ui-cascader>\n</div>\n>script\n{\n    data : {\n        list : {\n            "zj" : {\n                name : "浙江省",\n                children : {\n                    "hz" : {\n                        name : "杭州",\n                        children : {\n                            "xcq" : "下城区",\n                            "xhq" : "西湖区",\n                            "jgq" : "江干区"\n                        }\n                    },\n                    "nb" : {\n                        name : "宁波",\n                        children : {\n                            "jbq" : "江北区",\n                            "zhq" : "镇海区"\n                        }\n                    },\n                    "wz" : "温州"\n                }\n            },\n            "js" : {\n                name : "江苏省",\n                children : {\n                    "nj" : {\n                        name : "南京",\n                        children : {\n                            "xwq" : "玄武区",\n                            "jnq" : "江宁区"\n                        }\n                    },\n                    "sz" : "苏州"\n                }\n            },\n            "gd" : {\n                name : "广东省",\n                children : {\n                    "gz" : "广州",\n                    "sz" : "深圳",\n                    "fs" : "佛山"\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:list\n---\n#config\n>conf-desc\n可选对象，这是一个树状对象。\n<br><br>\n可以简写成`key`:`name`的形式，`key`为可选项的KEY，`name`为可选项的名称。\n<br><br>\n完整的写法为`key`:`object`的形式，其中`object`包含以下字段：\n<br>\n`name`: 可选项的名称\n<br>\n`children`: 子选项，值为子选项的对象树\n<br>\n`disable`: 禁用此选项\n>conf-accept\n选项树对象\n>conf-type\nObject\n>conf-default\n`{}`\n---\n#demo\n>desc\n简写。\n>tpl\n<div style="width:300px;">\n    <ui-cascader form-name="地址" :list="list"></ui-cascader>\n</div>\n>script\n{\n    data : {\n        list : {\n            "zj" : "浙江省",\n            "js" : "江苏省",\n            "gd" : "广东省"\n        }\n    }\n}\n---\n#demo\n>desc\n完整写法。\n>tpl\n<div style="width:300px;">\n    <ui-cascader form-name="地址" :list="list"></ui-cascader>\n</div>\n>script\n{\n    data : {\n        list : {\n            "zj" : {\n                name : "浙江省",\n                children : {\n                    "hz" : {\n                        name : "杭州",\n                        children : {\n                            "xcq" : "下城区",\n                            "xhq" : "西湖区",\n                            "jgq" : "江干区"\n                        }\n                    },\n                    "nb" : {\n                        name : "宁波",\n                        children : {\n                            "jbq" : "江北区",\n                            "zhq" : "镇海区"\n                        }\n                    },\n                    "wz" : "温州"\n                }\n            },\n            "js" : {\n                name : "江苏省",\n                children : {\n                    "nj" : {\n                        name : "南京",\n                        children : {\n                            "xwq" : "玄武区",\n                            "jnq" : "江宁区"\n                        }\n                    },\n                    "sz" : "苏州"\n                }\n            },\n            "gd" : {\n                name : "广东省",\n                children : {\n                    "gz" : "广州",\n                    "sz" : "深圳",\n                    "fs" : "佛山"\n                }\n            }\n        }\n    }\n}\n---\n#demo\n>desc\n禁用某些选项。\n>tpl\n<div style="width:300px;">\n    <ui-cascader form-name="地址" :list="list"></ui-cascader>\n</div>\n>script\n{\n    data : {\n        list : {\n            "zj" : {\n                name : "浙江省",\n                children : {\n                    "hz" : {\n                        name : "杭州",\n                        children : {\n                            "xcq" : "下城区",\n                            "xhq" : "西湖区",\n                            "jgq" : "江干区"\n                        }\n                    },\n                    "nb" : {\n                        name : "宁波",\n                        children : {\n                            "jbq" : "江北区",\n                            "zhq" : "镇海区"\n                        }\n                    },\n                    "wz" : {\n                        name : "温州",\n                        disable : true\n                    }\n                }\n            },\n            "js" : {\n                name : "江苏省",\n                children : {\n                    "nj" : {\n                        name : "南京",\n                        disable : true,\n                        children : {\n                            "xwq" : "玄武区",\n                            "jnq" : "江宁区"\n                        }\n                    },\n                    "sz" : "苏州"\n                }\n            },\n            "gd" : {\n                name : "广东省",\n                children : {\n                    "gz" : "广州",\n                    "sz" : "深圳",\n                    "fs" : "佛山"\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:submenu-trigger\n---\n#config\n>conf-desc\n触发子菜单的时机。\n>conf-accept\n`hover`：鼠标移入显示<br>`click`：鼠标点击显示\n>conf-type\nString\n>conf-default\n`\'click\'`\n---\n#demo\n>desc\n当鼠标移入时触发显示子菜单。\n>tpl\n<div style="width:300px;">\n    <ui-cascader form-name="地址" :list="list" submenu-trigger="hover"></ui-cascader>\n</div>\n>script\n{\n    data : {\n        list : {\n            "zj" : {\n                name : "浙江省",\n                children : {\n                    "hz" : {\n                        name : "杭州",\n                        children : {\n                            "xcq" : "下城区",\n                            "xhq" : "西湖区",\n                            "jgq" : "江干区"\n                        }\n                    },\n                    "nb" : {\n                        name : "宁波",\n                        children : {\n                            "jbq" : "江北区",\n                            "zhq" : "镇海区"\n                        }\n                    },\n                    "wz" : "温州"\n                }\n            },\n            "js" : {\n                name : "江苏省",\n                children : {\n                    "nj" : {\n                        name : "南京",\n                        children : {\n                            "xwq" : "玄武区",\n                            "jnq" : "江宁区"\n                        }\n                    },\n                    "sz" : "苏州"\n                }\n            },\n            "gd" : {\n                name : "广东省",\n                children : {\n                    "gz" : "广州",\n                    "sz" : "深圳",\n                    "fs" : "佛山"\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:show-last-name\n---\n#config\n>conf-desc\n选中后仅显示最后一级的名字。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-cascader form-name="地址" :list="list" :show-last-name="true"></ui-cascader>\n</div>\n>script\n{\n    data : {\n        list : {\n            "zj" : {\n                name : "浙江省",\n                children : {\n                    "hz" : {\n                        name : "杭州",\n                        children : {\n                            "xcq" : "下城区",\n                            "xhq" : "西湖区",\n                            "jgq" : "江干区"\n                        }\n                    },\n                    "nb" : {\n                        name : "宁波",\n                        children : {\n                            "jbq" : "江北区",\n                            "zhq" : "镇海区"\n                        }\n                    },\n                    "wz" : "温州"\n                }\n            },\n            "js" : {\n                name : "江苏省",\n                children : {\n                    "nj" : {\n                        name : "南京",\n                        children : {\n                            "xwq" : "玄武区",\n                            "jnq" : "江宁区"\n                        }\n                    },\n                    "sz" : "苏州"\n                }\n            },\n            "gd" : {\n                name : "广东省",\n                children : {\n                    "gz" : "广州",\n                    "sz" : "深圳",\n                    "fs" : "佛山"\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:change-on-select\n---\n#config\n>conf-desc\n选中即改变。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-cascader form-name="地址" :list="list" :change-on-select="true"></ui-cascader>\n</div>\n>script\n{\n    data : {\n        list : {\n            "zj" : {\n                name : "浙江省",\n                children : {\n                    "hz" : {\n                        name : "杭州",\n                        children : {\n                            "xcq" : "下城区",\n                            "xhq" : "西湖区",\n                            "jgq" : "江干区"\n                        }\n                    },\n                    "nb" : {\n                        name : "宁波",\n                        children : {\n                            "jbq" : "江北区",\n                            "zhq" : "镇海区"\n                        }\n                    },\n                    "wz" : "温州"\n                }\n            },\n            "js" : {\n                name : "江苏省",\n                children : {\n                    "nj" : {\n                        name : "南京",\n                        children : {\n                            "xwq" : "玄武区",\n                            "jnq" : "江宁区"\n                        }\n                    },\n                    "sz" : "苏州"\n                }\n            },\n            "gd" : {\n                name : "广东省",\n                children : {\n                    "gz" : "广州",\n                    "sz" : "深圳",\n                    "fs" : "佛山"\n                }\n            }\n        }\n    }\n}\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:cascader\n@value:[\'zj\', \'hz\', \'jgq\']\n@defaultValue:[\'zj\', \'hz\', \'jgq\']\n@attrs: :list="{\'zj\':{name:\'浙江省\',children:{\'hz\':{name:\'杭州\',children:{\'xcq\':\'下城区\',\'xhq\':\'西湖区\',\'jgq\':\'江干区\'}},\'nb\':{name:\'宁波\',children:{\'jbq\':\'江北区\',\'zhq\':\'镇海区\'}},\'wz\':\'温州\'}},\'js\':{name:\'江苏省\',children:{\'nj\':{name:\'南京\',children:{\'xwq\':\'玄武区\',\'jnq\':\'江宁区\'}},\'sz\':\'苏州\'}},\'gd\':{name:\'广东省\',children:{\'gz\':\'广州\',\'sz\':\'深圳\',\'fs\':\'佛山\'}}}"\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:级联选择\n@uikey:cascader\n@value:[\'zj\', \'hz\', \'jgq\']\n@wrapStyle:width:300px;\n@attrs: :list="{\'zj\':{name:\'浙江省\',children:{\'hz\':{name:\'杭州\',children:{\'xcq\':\'下城区\',\'xhq\':\'西湖区\',\'jgq\':\'江干区\'}},\'nb\':{name:\'宁波\',children:{\'jbq\':\'江北区\',\'zhq\':\'镇海区\'}},\'wz\':\'温州\'}},\'js\':{name:\'江苏省\',children:{\'nj\':{name:\'南京\',children:{\'xwq\':\'玄武区\',\'jnq\':\'江宁区\'}},\'sz\':\'苏州\'}},\'gd\':{name:\'广东省\',children:{\'gz\':\'广州\',\'sz\':\'深圳\',\'fs\':\'佛山\'}}}"\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Array` : 数组\n\n#### 值过滤\n\n- 所有不支持的值类型，都会被尝试转换成空数组(`[]`)。\n- 若数组中的KEY无法匹配对应层级的`list`配置，则数组仅保留可匹配部分。\n\n#### 值格式\n\n包含选中键值的数组(含层级关系)，键值是字符串。\n\n#### 默认值\n\n`[]`\n\n:::preset\n@name:formValue\n@uikey:cascader\n@uiname:下拉选择框\n@valueType:cascader\n@wrapStyle:width:300px;\n@attrs: :list="{\'zj\':{name:\'浙江省\',children:{\'hz\':{name:\'杭州\',children:{\'xcq\':\'下城区\',\'xhq\':\'西湖区\',\'jgq\':\'江干区\'}},\'nb\':{name:\'宁波\',children:{\'jbq\':\'江北区\',\'zhq\':\'镇海区\'}},\'wz\':\'温州\'}},\'js\':{name:\'江苏省\',children:{\'nj\':{name:\'南京\',children:{\'xwq\':\'玄武区\',\'jnq\':\'江宁区\'}},\'sz\':\'苏州\'}},\'gd\':{name:\'广东省\',children:{\'gz\':\'广州\',\'sz\':\'深圳\',\'fs\':\'佛山\'}}}"\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/cascader/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},t=[];r._withStripped=!0,a.d(e,"a",function(){return r}),a.d(e,"b",function(){return t})},794:function(n,e,a){"use strict";var r=c(a(1)),t=c(a(795));function c(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(t.default)}})},795:function(n,e,a){"use strict";a.r(e);var r=a(277),t=a(216);for(var c in t)"default"!==c&&function(n){a.d(e,n,function(){return t[n]})}(c);var i=a(0),d=Object(i.a)(t.default,r.a,r.b,!1,null,null,null);d.options.__file="src/docs/pages/component/cascader/index.vue",e.default=d.exports}});