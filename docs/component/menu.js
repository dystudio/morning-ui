!function(n){function e(e){for(var t,m,d=e[0],u=e[1],r=e[2],a=0,l=[];a<d.length;a++)m=d[a],o[m]&&l.push(o[m][0]),o[m]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(n[t]=u[t]);for(c&&c(e);l.length;)l.shift()();return s.push.apply(s,r||[]),i()}function i(){for(var n,e=0;e<s.length;e++){for(var i=s[e],t=!0,d=1;d<i.length;d++){var u=i[d];0!==o[u]&&(t=!1)}t&&(s.splice(e--,1),n=m(m.s=i[0]))}return n}var t={},o={46:0};var s=[];function m(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,m),i.l=!0,i.exports}m.m=n,m.c=t,m.d=function(n,e,i){m.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:i})},m.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},m.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return m.d(e,"a",e),e},m.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},m.p="/";var d=window.webpackJsonp=window.webpackJsonp||[],u=d.push.bind(d);d.push=e,d=d.slice();for(var r=0;r<d.length;r++)e(d[r]);var c=u;s.push([341,0]),i()}({1:function(n,e){n.exports=Vue},166:function(n,e,i){"use strict";i.d(e,"a",function(){return t}),i.d(e,"b",function(){return o});var t=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 导航菜单 `<ui-menu>`\n\n<doc-component-status page=\"menu\"></doc-component-status>\n\n[[[开始]]]\n\n定义一个导航菜单，这是一个内联块元素。\n\n:::vue\n@name:使用\n---\n#demo\n>desc\n通过`menu`配置来设置菜单。\n>tpl\n<div style=\"width:700px;\">\n    <ui-menu :menu=\"menu\"></ui-menu>\n</div>\n>script\n{\n    data : {\n        menu : {\n            'home' : '首页',\n            'order' : '订单',\n            'history' : '历史',\n            'settings' : '设置'\n        }\n    }\n}\n:::\n\n:::vue\n@name:完整的菜单\n---\n#demo\n>desc\n上面的菜单设置是简写，下面是一个完整的菜单设置。\n>tpl\n<div style=\"width:700px;\">\n    <ui-menu :menu=\"menu\"></ui-menu>\n</div>\n>script\n{\n    data : function () {\n        return {\n            menu : {\n                'home' : '首页',                            // 若目录的值是字符串，则此字符串是目录名称，这是一种简写\n                'active' : {\n                    name : '活动'                           // 目录的值为对象时，可以通过`name`来设置目录的名称\n                },\n                'order' : {\n                    name : '订单',          \n                    childs : {\n                        'all' : '所有',\n                        'notshipped' : '待发货',\n                        'intransit' : '运输中',\n                        'done' : '已完成',\n                        'history' : '历史订单',\n                        'status' : '订单状态',\n                        'data' : '数据统计'\n                    },\n                    groups : {                              // `groups`可以用来给子菜单`childs`分组\n                        '订单列表' : ['all', 'done', 'notshipped', 'intransit'],\n                        '更多' : ['history', 'status', 'data']\n                    }\n                },\n                'search' : {\n                    name : '搜索',\n                    link : 'https://google.com/'            // 通过`link`设置点击后跳转的链接\n                },\n                'map' : {\n                    name : '地图',\n                    link : 'https://maps.google.com/',\n                    newtab : true                           // 通过`newtab`设置点击后新窗口打开链接\n                },             \n                'settings' : {\n                    name : '设置',\n                    childs : {                              // 通过`child`设置子目录，当一个目录包含`child`后，`link`会失效\n                        'common' : {\n                            name : '通用设置',\n                            childs : {                      // 支持多级子菜单\n                                'theme' : {\n                                    name : '模板',\n                                    childs : {\n                                        'modify' : '编辑',\n                                        'market' : '模板市场'\n                                    }\n                                },\n                                'goods' : '商品',\n                                'payment' : '支付'\n                            }\n                        },\n                        'account' : {\n                            name : '账户设置',\n                            childs : {\n                                'email' : '邮箱设置',\n                                'password' : '修改密码'\n                            }\n                        },\n                        'safity' : {\n                            name : '安全设置',\n                            childs : {\n                                'multiple' : '多重认证',\n                                'found' : '账户找回',\n                                'history' : '登录历史',\n                                'help' : '寻求帮助',\n                                'blocked' : '锁定账户'\n                            }\n                        }\n                    }\n                },\n                'logout' : {\n                    name : '注销',\n                    handler : this.logout                   // 通过`handler`为目录指定点击后的处理函数\n                },\n                'help' : {\n                    name : '帮助',\n                    disable : true                          // 禁用菜单项\n                }\n            }\n        };\n    },\n    methods : {\n        logout : function () {\n            alert('注销账户');\n        }\n    }\n}\n:::\n\n:::vue\n@name:线条风格的菜单\n---\n#demo\n>desc\n通过`line`样式类定义线条风格的菜单。\n>tpl\n<div style=\"width:700px;\">\n    <ui-menu :menu=\"menu\" class=\"line\"></ui-menu>\n</div>\n>script\n{\n    data : {\n        menu : {\n            'home' : '首页',\n            'order' : '订单',\n            'history' : '历史',\n            'settings' : {\n                name : '设置',\n                childs : {\n                    'common' : {\n                        name : '通用设置',\n                        childs : {\n                            'theme' : {\n                                name : '模板',\n                                childs : {\n                                    'modify' : '编辑',\n                                    'market' : '模板市场'\n                                }\n                            },\n                            'goods' : '商品',\n                            'payment' : '支付'\n                        }\n                    },\n                    'account' : {\n                        name : '账户设置',\n                        childs : {\n                            'email' : '邮箱设置',\n                            'password' : '修改密码'\n                        }\n                    },\n                    'safity' : {\n                        name : '安全设置',\n                        childs : {\n                            'multiple' : '多重认证',\n                            'found' : '账户找回',\n                            'history' : '登录历史',\n                            'help' : '寻求帮助',\n                            'blocked' : '锁定账户'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n---\n#demo\n>desc\n侧栏的线条风格的菜单。\n>tpl\n<div style=\"width:220px;\">\n    <ui-menu :menu=\"menu\" class=\"line\" position=\"side\"></ui-menu>\n</div>\n>script\n{\n    data : {\n        menu : {\n            'home' : '首页',\n            'order' : '订单',\n            'history' : '历史',            \n            'settings' : {\n                name : '设置',\n                childs : {\n                    'common' : {\n                        name : '通用设置',\n                        childs : {\n                            'theme' : {\n                                name : '模板',\n                                childs : {\n                                    'modify' : '编辑',\n                                    'market' : '模板市场'\n                                }\n                            },\n                            'goods' : '商品',\n                            'payment' : '支付'\n                        }\n                    },\n                    'account' : {\n                        name : '账户设置',\n                        childs : {\n                            'email' : '邮箱设置',\n                            'password' : '修改密码'\n                        }\n                    },\n                    'safity' : {\n                        name : '安全设置',\n                        childs : {\n                            'multiple' : '多重认证',\n                            'found' : '账户找回',\n                            'history' : '登录历史',\n                            'help' : '寻求帮助',\n                            'blocked' : '锁定账户'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:区块风格的菜单\n---\n#demo\n>desc\n通过`block`样式类定义区块风格的菜单。\n>tpl\n<div style=\"width:700px;\">\n    <ui-menu :menu=\"menu\" class=\"block\"></ui-menu>\n</div>\n>script\n{\n    data : {\n        menu : {\n            'home' : '首页',\n            'order' : '订单',\n            'history' : '历史',          \n            'settings' : {\n                name : '设置',\n                childs : {\n                    'common' : {\n                        name : '通用设置',\n                        childs : {\n                            'theme' : {\n                                name : '模板',\n                                childs : {\n                                    'modify' : '编辑',\n                                    'market' : '模板市场'\n                                }\n                            },\n                            'goods' : '商品',\n                            'payment' : '支付'\n                        }\n                    },\n                    'account' : {\n                        name : '账户设置',\n                        childs : {\n                            'email' : '邮箱设置',\n                            'password' : '修改密码'\n                        }\n                    },\n                    'safity' : {\n                        name : '安全设置',\n                        childs : {\n                            'multiple' : '多重认证',\n                            'found' : '账户找回',\n                            'history' : '登录历史',\n                            'help' : '寻求帮助',\n                            'blocked' : '锁定账户'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n---\n#demo\n>desc\n侧栏的区块风格的菜单。\n>tpl\n<div style=\"width:220px;\">\n    <ui-menu :menu=\"menu\" class=\"block\" position=\"side\"></ui-menu>\n</div>\n>script\n{\n    data : {\n        menu : {\n            'home' : '首页',\n            'order' : '订单',\n            'history' : '历史',        \n            'settings' : {\n                name : '设置',\n                childs : {\n                    'common' : {\n                        name : '通用设置',\n                        childs : {\n                            'theme' : {\n                                name : '模板',\n                                childs : {\n                                    'modify' : '编辑',\n                                    'market' : '模板市场'\n                                }\n                            },\n                            'goods' : '商品',\n                            'payment' : '支付'\n                        }\n                    },\n                    'account' : {\n                        name : '账户设置',\n                        childs : {\n                            'email' : '邮箱设置',\n                            'password' : '修改密码'\n                        }\n                    },\n                    'safity' : {\n                        name : '安全设置',\n                        childs : {\n                            'multiple' : '多重认证',\n                            'found' : '账户找回',\n                            'history' : '登录历史',\n                            'help' : '寻求帮助',\n                            'blocked' : '锁定账户'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:垂直填满容器的菜单\n---\n#demo\n>desc\n当菜单的`position`为`top`时，可以为菜单添加`fill`样式类，使得菜单的高度与父容器高度保持一致。\n>tpl\n<div style=\"width:700px;\">\n    <div style=\"height: 120px;\">\n        <ui-menu :menu=\"menu\" position=\"top\" class=\"fill line\"></ui-menu>\n    </div>\n</div>\n>script\n{\n    data : {\n        menu : {\n            'home' : '首页',\n            'order' : '订单',\n            'history' : '历史',\n            'settings' : '设置'\n        }\n    }\n}\n:::\n\n:::vue\n@name:绑定处理函数\n---\n#demo\n>desc\n帮点菜单点击后的处理函数有两种方法，第一方法是绑定在`menu`配置中，通过`handler`为每一个项目绑定处理函数。\n>tpl\n<div style=\"width:700px;\">\n    <ui-menu :menu=\"menu\"></ui-menu>\n</div>\n>script\n{\n    data : function () {\n        return {\n            menu : {\n                'home' : {\n                    name : '首页',\n                    handler : this.clickHome\n                },\n                'order' : {\n                    name : '订单',\n                    handler : this.clickOrder\n                },\n                'search' : {\n                    name : '搜索',\n                    hanlder : this.clickSearch\n                }\n            }\n        };\n    },\n    methods : {\n        clickHome : function () {\n            alert('点击首页');\n        },\n        clickOrder : function () {\n            alert('点击订单');\n        },\n        clickSearch : function () {\n            alert('点击搜索');\n        }\n    }\n}\n---\n#demo\n>desc\n第二种方法通过监听导航菜单组件的`emit`事件。\n>tpl\n<div style=\"width:700px;\">\n    <ui-menu :menu=\"menu\" @emit=\"itemClick\"></ui-menu>\n</div>\n>script\n{\n    data : function () {\n        return {\n            menu : {\n                'home' : '首页',\n                'order' : {\n                    name : '订单',\n                    childs : {\n                        'my' : '我的订单',\n                        'history' : '历史订单'\n                    }\n                },\n                'search' : '搜索'\n            }\n        };\n    },\n    methods : {\n        itemClick : function (item) {\n            // item是点击项目的对象\n            // 包含：\n            // item.key : 项目的KEY\n            // item.name : 项目的名称\n            // item.link : 跳转链接\n            // item.newtab : 是否新窗口打开\n            // item.childs : 子菜单对象\n            alert(`点击${item.name}(${item.key})`);\n        }\n    }\n}\n:::\n\n:::vue\n@name:多级子菜单\n---\n#demo\n>tpl\n<div style=\"width:700px;\">\n    <ui-menu :menu=\"menu\"></ui-menu>\n</div>\n>script\n{\n    data : {\n        menu : {\n            'home' : '首页',\n            'order' : '订单',\n            'history' : '历史',\n            'settings' : {\n                name : '设置',\n                childs : {\n                    'common' : {\n                        name : '通用设置',\n                        childs : {\n                            'theme' : {\n                                name : '模板',\n                                childs : {\n                                    'modify' : '编辑',\n                                    'market' : '模板市场'\n                                }\n                            },\n                            'goods' : '商品',\n                            'payment' : '支付'\n                        }\n                    },\n                    'account' : {\n                        name : '账户设置',\n                        childs : {\n                            'email' : '邮箱设置',\n                            'password' : '修改密码'\n                        }\n                    },\n                    'safity' : {\n                        name : '安全设置',\n                        childs : {\n                            'multiple' : '多重认证',\n                            'found' : '账户找回',\n                            'history' : '登录历史',\n                            'help' : '寻求帮助',\n                            'blocked' : '锁定账户'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:子菜单分组\n---\n#demo\n>desc\n从二级菜单开始，可以通过`groups`为菜单项目进行分组。需要注意的当指定了`groups`菜单项的顺序将按照`groups`为准，而不是`childs`中的顺序。\n>tpl\n<div style=\"width:700px;\">\n    <ui-menu :menu=\"menu\"></ui-menu>\n</div>\n>script\n{\n    data : function () {\n        return {\n            menu : {\n                'home' : '首页',\n                'order' : {\n                    name : '订单',\n                    childs : {\n                        'all' : '所有',\n                        'notshipped' : '待发货',\n                        'intransit' : '运输中',\n                        'done' : '已完成',\n                        'history' : '历史订单',\n                        'status' : '订单状态',\n                        'data' : '数据统计'\n                    },\n                    groups : {\n                        '订单列表' : ['all', 'done', 'notshipped', 'intransit'],\n                        '更多' : ['history', 'status', 'data']\n                    }\n                }\n            }\n        };\n    }\n}\n:::\n\n:::vue\n@name:带图标的菜单\n---\n#demo\n>desc\n你可以直接在`name`中增加`<i>`标签来为菜单增加图标。\n>tpl\n<div style=\"width:700px;\">\n    <ui-menu :menu=\"menu\"></ui-menu>\n</div>\n>script\n{\n    data : function () {\n        return {\n            menu : {\n                'home' : '<i class=\"mo-icon mo-icon-block-4\"></i>首页',\n                'order' : {\n                    name : '<i class=\"mo-icon mo-icon-menu\"></i>订单',\n                    childs : {\n                        'my' : '<i class=\"mo-icon mo-icon-list\"></i>我的订单',\n                        'history' : '<i class=\"mo-icon mo-icon-time-cf\"></i>历史订单'\n                    }\n                },\n                'search' : '<i class=\"mo-icon mo-icon-more\"></i>搜索'\n            }\n        };\n    }\n}\n:::\n\n:::vue\n@name:菜单禁用\n---\n#demo\n>desc\n通过`disabled`可以禁用菜单项，当项目被禁用后不会显示子菜单，也不会响应点击。\n>tpl\n<div style=\"width:700px;\">\n    <ui-menu :menu=\"menu\"></ui-menu>\n</div>\n>script\n{\n    data : function () {\n        return {\n            menu : {\n                'home' : '<i class=\"mo-icon mo-icon-block-4\"></i>首页',\n                'order' : {\n                    name : '<i class=\"mo-icon mo-icon-menu\"></i>订单',\n                    childs : {\n                        'my' : '<i class=\"mo-icon mo-icon-list\"></i>我的订单',\n                        'history' : {\n                            name : '<i class=\"mo-icon mo-icon-time-cf\"></i>历史订单',\n                            childs : {\n                                'week' : '最近一周',\n                                'month' : '最近一月'\n                            },\n                            disable : true\n                        }\n                    }\n                },\n                'search' : {\n                    name : '<i class=\"mo-icon mo-icon-more\"></i>搜索',\n                    disable : true\n                }\n            }\n        };\n    }\n}\n:::\n\n:::vue\n@name:高亮当前所在菜单\n---\n#demo\n>desc\n你可以通过`current-menu`配置来高亮当前的菜单，多级菜单用斜杠来分割每一级。\n>tpl\n<div style=\"width:700px;\">\n    <ui-menu :menu=\"menu\" current-menu=\"order/history/week\"></ui-menu>\n</div>\n>script\n{\n    data : function () {\n        return {\n            menu : {\n                'home' : '首页',\n                'order' : {\n                    name : '订单',\n                    childs : {\n                        'my' : '我的订单',\n                        'history' : {\n                            name : '历史订单',\n                            childs : {\n                                'week' : '最近一周',\n                                'month' : '最近一月'\n                            }\n                        }\n                    }\n                },\n                'search' : '搜索'\n            }\n        };\n    }\n}\n:::\n\n:::vue\n@name:侧边栏菜单\n---\n#demo\n>desc\n通过将`position`配置设为`side`，可以将菜单位置改为侧栏。\n>tpl\n<div style=\"width:220px;\">\n    <ui-menu :menu=\"menu\" position=\"side\"></ui-menu>\n</div>\n>script\n{\n    data : {\n        menu : {\n            'home' : '首页',\n            'order' : '订单',\n            'history' : '历史',\n            'settings' : '设置'\n        }\n    }\n}\n---\n#demo\n>desc\n有多级子菜单的侧边栏菜单。\n>tpl\n<div style=\"width:220px;\">\n    <ui-menu :menu=\"menu\" position=\"side\"></ui-menu>\n</div>\n>script\n{\n    data : {\n        menu : {\n            'home' : '首页',\n            'order' : '订单',\n            'history' : '历史',\n            'settings' : {\n                name : '设置',\n                childs : {\n                    'common' : {\n                        name : '通用设置',\n                        childs : {\n                            'theme' : {\n                                name : '模板',\n                                childs : {\n                                    'modify' : '编辑',\n                                    'market' : '模板市场'\n                                }\n                            },\n                            'goods' : '商品',\n                            'payment' : '支付'\n                        }\n                    },\n                    'account' : {\n                        name : '账户设置',\n                        childs : {\n                            'email' : '邮箱设置',\n                            'password' : '修改密码'\n                        }\n                    },\n                    'safity' : {\n                        name : '安全设置',\n                        childs : {\n                            'multiple' : '多重认证',\n                            'found' : '账户找回',\n                            'history' : '登录历史',\n                            'help' : '寻求帮助',\n                            'blocked' : '锁定账户'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n---\n#demo\n>desc\n带菜单分组的侧边栏菜单。\n>tpl\n<div style=\"width:220px;\">\n    <ui-menu :menu=\"menu\" position=\"side\"></ui-menu>\n</div>\n>script\n{\n    data : function () {\n        return {\n            menu : {\n                'home' : '首页',\n                'order' : {\n                    name : '订单',\n                    childs : {\n                        'all' : '所有',\n                        'notshipped' : '待发货',\n                        'intransit' : '运输中',\n                        'done' : '已完成',\n                        'history' : '历史订单',\n                        'status' : '订单状态',\n                        'data' : '数据统计'\n                    },\n                    groups : {\n                        '订单列表' : ['all', 'done', 'notshipped', 'intransit'],\n                        '更多' : ['history', 'status', 'data']\n                    }\n                }\n            }\n        };\n    }\n}\n---\n#demo\n>desc\n带图标的侧边栏菜单。\n>tpl\n<div style=\"width:220px;\">\n    <ui-menu :menu=\"menu\" position=\"side\"></ui-menu>\n</div>\n>script\n{\n    data : function () {\n        return {\n            menu : {\n                'home' : '<i class=\"mo-icon mo-icon-block-4\"></i>首页',\n                'order' : {\n                    name : '<i class=\"mo-icon mo-icon-menu\"></i>订单',\n                    childs : {\n                        'my' : '<i class=\"mo-icon mo-icon-list\"></i>我的订单',\n                        'history' : '<i class=\"mo-icon mo-icon-time-cf\"></i>历史订单'\n                    }\n                },\n                'search' : '<i class=\"mo-icon mo-icon-more\"></i>搜索'\n            }\n        };\n    }\n}\n---\n#demo\n>desc\n带禁用项的侧边栏菜单。\n>tpl\n<div style=\"width:220px;\">\n    <ui-menu :menu=\"menu\" position=\"side\"></ui-menu>\n</div>\n>script\n{\n    data : function () {\n        return {\n            menu : {\n                'home' : '<i class=\"mo-icon mo-icon-block-4\"></i>首页',\n                'order' : {\n                    name : '<i class=\"mo-icon mo-icon-menu\"></i>订单',\n                    childs : {\n                        'my' : '<i class=\"mo-icon mo-icon-list\"></i>我的订单',\n                        'history' : {\n                            name : '<i class=\"mo-icon mo-icon-time-cf\"></i>历史订单',\n                            childs : {\n                                'week' : '最近一周',\n                                'month' : '最近一月'\n                            },\n                            disable : true\n                        }\n                    }\n                },\n                'search' : {\n                    name : '<i class=\"mo-icon mo-icon-more\"></i>搜索',\n                    disable : true\n                }\n            }\n        };\n    }\n}\n---\n#demo\n>desc\n高亮当前所在菜单的侧边栏菜单。\n>tpl\n<div style=\"width:220px;\">\n    <ui-menu :menu=\"menu\" current-menu=\"order/history/week\" position=\"side\"></ui-menu>\n</div>\n>script\n{\n    data : function () {\n        return {\n            menu : {\n                'home' : '首页',\n                'order' : {\n                    name : '订单',\n                    childs : {\n                        'my' : '我的订单',\n                        'history' : {\n                            name : '历史订单',\n                            childs : {\n                                'week' : '最近一周',\n                                'month' : '最近一月'\n                            }\n                        }\n                    }\n                },\n                'search' : '搜索'\n            }\n        };\n    }\n}\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|`m` `s` `xs` `xxs`|`m`|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href=\"/guide/status.html\">查看形态文档</a>\n\n:::vue\n@name:尺寸\n---\n#renderer\n>name\nsize-repeat\n>rules\nm,s,xs,xxs\n>tpl\n<div style=\"width:700px;\">\n    <ui-menu\n        :menu=\"{\n            'size' : '尺寸{$sizeName}',\n            'home' : '首页',\n            'order' : '订单',\n            'history' : '历史',\n            'settings' : '设置'\n        }\"\n        size=\"{$sizeKey}\"\n    ></ui-menu>\n    <br>\n</div>\n---\n#renderer\n>name\nsize-repeat\n>rules\nm,s,xs,xxs\n>desc\n侧边栏导航菜单的尺寸。\n>tpl\n<div style=\"width:220px;\">\n    <ui-menu\n        :menu=\"{\n            'size' : '尺寸{$sizeName}',\n            'home' : '首页',\n            'order' : '订单',\n            'history' : '历史',\n            'settings' : '设置'\n        }\"\n        size=\"{$sizeKey}\"\n        position=\"side\"\n    ></ui-menu>\n    <br>\n</div>\n:::\n\n[[[配置]]]\n\n:::vue\n@name:menu\n---\n#config\n>conf-desc\n菜单对象，用来描述整个菜单树状结构。\n<br><br>\n可以简写成`key`:`name`的形式，`key`为菜单项的KEY，`name`为菜单项的名称。\n<br><br>\n完整的写法为`key`:`object`的形式，其中`object`包含以下字段：\n<br>\n`name`: 菜单项的名称\n<br>\n`link`: 点击后跳转的链接\n<br>\n`newtab`: 链接是否在新窗口打开(配合`link`一起使用)\n<br>\n`childs`: 子菜单，值为子菜单的对象树\n<br>\n`groups`: 配合`childs`一起使用，这是一个对象，`key`为分组名称，`value`是一个包含子菜单KEY的数组。子菜单会按照这个数组将对应的菜单项分为一组\n<br>\n`handler`: 点击菜单项后的处理函数\n<br>\n`disable`: 禁用此菜单项\n<br><br>\n注意：当一个`object`包含`childs`时`link`和`newtab`会失效。\n>conf-accept\n菜单树对象\n>conf-type\nObject\n>conf-default\n`{}`\n---\n#demo\n>desc\n简写\n>tpl\n<div style=\"width:700px;\">\n    <ui-menu :menu=\"menu\"></ui-menu>\n</div>\n>script\n{\n    data : {\n        menu : {\n            'home' : '首页',\n            'order' : '订单',\n            'history' : '历史',\n            'settings' : '设置'\n        }\n    }\n}\n---\n#demo\n>desc\n完整\n>tpl\n<div style=\"width:700px;\">\n    <ui-menu :menu=\"menu\"></ui-menu>\n</div>\n>script\n{\n    data : function () {\n        return {\n            menu : {\n                'home' : '首页',                            // 若目录的值是字符串，则此字符串是目录名称，这是一种简写\n                'active' : {\n                    name : '活动'                           // 目录的值为对象时，可以通过`name`来设置目录的名称\n                },\n                'order' : {\n                    name : '订单',          \n                    childs : {\n                        'all' : '所有',\n                        'notshipped' : '待发货',\n                        'intransit' : '运输中',\n                        'done' : '已完成',\n                        'history' : '历史订单',\n                        'status' : '订单状态',\n                        'data' : '数据统计'\n                    },\n                    groups : {                              // `groups`可以用来给子菜单`childs`分组\n                        '订单列表' : ['all', 'done', 'notshipped', 'intransit'],\n                        '更多' : ['history', 'status', 'data']\n                    }\n                },\n                'search' : {\n                    name : '搜索',\n                    link : 'https://google.com/'            // 通过`link`设置点击后跳转的链接\n                },\n                'map' : {\n                    name : '地图',\n                    link : 'https://maps.google.com/',\n                    newtab : true                           // 通过`newtab`设置点击后新窗口打开链接\n                },             \n                'settings' : {\n                    name : '设置',\n                    childs : {                              // 通过`child`设置子目录，当一个目录包含`child`后，`link`会失效\n                        'common' : {\n                            name : '通用设置',\n                            childs : {                      // 支持多级子菜单\n                                'theme' : {\n                                    name : '模板',\n                                    childs : {\n                                        'modify' : '编辑',\n                                        'market' : '模板市场'\n                                    }\n                                },\n                                'goods' : '商品',\n                                'payment' : '支付'\n                            }\n                        },\n                        'account' : {\n                            name : '账户设置',\n                            childs : {\n                                'email' : '邮箱设置',\n                                'password' : '修改密码'\n                            }\n                        },\n                        'safity' : {\n                            name : '安全设置',\n                            childs : {\n                                'multiple' : '多重认证',\n                                'found' : '账户找回',\n                                'history' : '登录历史',\n                                'help' : '寻求帮助',\n                                'blocked' : '锁定账户'\n                            }\n                        }\n                    }\n                },\n                'logout' : {\n                    name : '注销',\n                    handler : this.logout                   // 通过`handler`为目录指定点击后的处理函数\n                },\n                'help' : {\n                    name : '帮助',\n                    disable : true                          // 禁用菜单项\n                }\n            }\n        };\n    },\n    methods : {\n        logout : function () {\n            alert('注销账户');\n        }\n    }\n}\n:::\n\n:::vue\n@name:current-menu\n---\n#config\n>conf-desc\n高亮当前所在菜单项，接受一个路径字符串，由每一级的菜单项KEY组成，每级之间用斜杠分隔。例如:`settings/profile/email`。\n>conf-accept\n路径字符串\n>conf-type\nString\n>conf-default\n`''`\n---\n#demo\n>tpl\n<div style=\"width:700px;\">\n    <ui-menu :menu=\"menu\" current-menu=\"order/history/week\"></ui-menu>\n</div>\n>script\n{\n    data : function () {\n        return {\n            menu : {\n                'home' : '首页',\n                'order' : {\n                    name : '订单',\n                    childs : {\n                        'my' : '我的订单',\n                        'history' : {\n                            name : '历史订单',\n                            childs : {\n                                'week' : '最近一周',\n                                'month' : '最近一月'\n                            }\n                        }\n                    }\n                },\n                'search' : '搜索'\n            }\n        };\n    }\n}\n---\n#demo\n>desc\n配合`position`一起使用。\n>tpl\n<div style=\"width:220px;\">\n    <ui-menu :menu=\"menu\" current-menu=\"order/history/week\" position=\"side\"></ui-menu>\n</div>\n>script\n{\n    data : function () {\n        return {\n            menu : {\n                'home' : '首页',\n                'order' : {\n                    name : '订单',\n                    childs : {\n                        'my' : '我的订单',\n                        'history' : {\n                            name : '历史订单',\n                            childs : {\n                                'week' : '最近一周',\n                                'month' : '最近一月'\n                            }\n                        }\n                    }\n                },\n                'search' : '搜索'\n            }\n        };\n    }\n}\n:::\n\n:::vue\n@name:position\n---\n#config\n>conf-desc\n导航菜单的位置。\n>conf-accept\n`'top'` : 位于顶部<br>`'side'` : 位于侧边\n>conf-type\nString\n>conf-default\n`'top'`\n---\n#demo\n>desc\n位于侧栏的导航菜单。\n>tpl\n<div style=\"width:220px;\">\n    <ui-menu :menu=\"menu\" position=\"side\"></ui-menu>\n</div>\n>script\n{\n    data : {\n        menu : {\n            'home' : '首页',\n            'order' : '订单',\n            'history' : '历史',\n            'settings' : '设置'\n        }\n    }\n}\n:::\n\n:::vue\n@name:auto-toggle-current\n---\n#config\n>conf-desc\n用户切换菜单时，是否自动调整并高亮当前所在菜单项。注意：若开启此配置`current-menu`配置和用户操作同时生效。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>desc\n用户操作不会自动高亮。\n>tpl\n<div style=\"width:700px;\">\n    <ui-menu :menu=\"menu\" :auto-toggle-current=\"false\"></ui-menu>\n</div>\n>script\n{\n    data : {\n        menu : {\n            'home' : '首页',\n            'order' : '订单',\n            'history' : '历史',\n            'settings' : '设置'\n        }\n    }\n}\n---\n#demo\n>desc\n用户操作会自动高亮。\n>tpl\n<div style=\"width:700px;\">\n    <ui-menu :menu=\"menu\" :auto-toggle-current=\"true\"></ui-menu>\n</div>\n>script\n{\n    data : {\n        menu : {\n            'home' : '首页',\n            'order' : '订单',\n            'history' : '历史',\n            'settings' : '设置'\n        }\n    }\n}\n:::\n\n:::vue\n@name:position-current\n---\n#config\n>conf-desc\n定位到当前所在的菜单。开启此选项后，若配置了`current-menu`且是一个多层级菜单，菜单会逐级显示直到展示当前所在菜单项。<br>注意：当`position`为`top`时，定位到当前所在的菜单只是暂时显示，当鼠标在组件内移动，定位的菜单会消失。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style=\"width:700px;\">\n    <ui-menu :menu=\"menu\" current-menu=\"order/history/week\" :position-current=\"true\"></ui-menu>\n</div>\n>script\n{\n    data : function () {\n        return {\n            menu : {\n                'home' : '首页',\n                'order' : {\n                    name : '订单',\n                    childs : {\n                        'my' : '我的订单',\n                        'history' : {\n                            name : '历史订单',\n                            childs : {\n                                'week' : '最近一周',\n                                'month' : '最近一月'\n                            }\n                        }\n                    }\n                },\n                'search' : '搜索'\n            }\n        };\n    }\n}\n---\n#demo\n>desc\n配合`position`一起使用。\n>tpl\n<div style=\"width:220px;\">\n    <ui-menu :menu=\"menu\" current-menu=\"order/history/week\" position=\"side\" :position-current=\"true\"></ui-menu>\n</div>\n>script\n{\n    data : function () {\n        return {\n            menu : {\n                'home' : '首页',\n                'order' : {\n                    name : '订单',\n                    childs : {\n                        'my' : '我的订单',\n                        'history' : {\n                            name : '历史订单',\n                            childs : {\n                                'week' : '最近一周',\n                                'month' : '最近一月'\n                            }\n                        }\n                    }\n                },\n                'search' : '搜索'\n            }\n        };\n    }\n}\n:::\n\n:::vue\n@name:side-expand\n---\n#config\n>conf-desc\n侧边栏展开，启用后所有的子目录都会展开并且不可收缩。此配置仅在`position`为`side`时生效。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style=\"width:220px;\">\n    <ui-menu :menu=\"menu\" position=\"side\" :side-expand=\"true\"></ui-menu>\n</div>\n>script\n{\n    data : function () {\n        return {\n            menu : {\n                'home' : '首页',\n                'order' : {\n                    name : '订单',\n                    childs : {\n                        'my' : '我的订单',\n                        'history' : {\n                            name : '历史订单',\n                            childs : {\n                                'week' : '最近一周',\n                                'month' : '最近一月'\n                            }\n                        }\n                    }\n                },\n                'search' : '搜索'\n            }\n        };\n    }\n}\n:::\n\n[[[方法]]]\n\n<h1>暂无</h1>\n\n[[[事件]]]\n\n:::vue\n@name:emit\n---\n#event\n>event-desc\n当导航菜单被点击时触发（处于禁用状态的菜单项被点击不会触发）。\n>event-args\n|data|菜单触发的数据对象|`Object`|\n---\n#demo\n>tpl\n<div style=\"width:700px;\">\n    <ui-menu :menu=\"menu\" @emit=\"echo\"></ui-menu>\n    <br>\n    <p>点击菜单触发emit事件</p>\n</div>\n>script\n{\n    data : {\n        menu : {\n            'home' : '首页',\n            'order' : '订单',\n            'history' : '历史',\n            'settings' : '设置'\n        }\n    },\n    methods : {\n        echo : function () {\n            console.log('demo1.console1', 'emit event!');\n        }\n    }\n}\n:::\n\n:::vue\n@name:生命周期事件\n---\n#event\n>event-desc\n组件的生命周期事件，详见:[基础/事件/生命周期事件](/guide/event.html#生命周期事件)。\n---\n#demo\n>tpl\n<div>\n    <ui-menu\n        ref=\"demoEventLifecycle\"\n        v-show=\"show\"\n        :menu=\"{\n            'home' : '首页',\n            'order' : '订单',\n            'history' : '历史',\n            'settings' : '设置'\n        }\"\n        @created=\"echo('created')\"\n        @mounted=\"echo('mounted')\"\n        @before-update=\"echo('before-update')\"\n        @updated=\"echo('updated')\"\n        @before-destroy=\"echo('before-destroy')\"\n        @destroyed=\"echo('destroyed')\"\n    >{*text*}</ui-menu>\n    <br><br>\n    <ui-link js=\"this.text='生命周期事件';\">触发update</ui-link>\n    <ui-link js=\"this.$refs['demoEventLifecycle'].$destroy();\">触发destroy</ui-link>\n</div>\n>script\n{\n    data : function () {\n        return {\n           text : '导航菜单',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log('demoEventLifecycle.console1', name + ' event!');\n        }\n    }\n}\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/menu/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])},o=[];t._withStripped=!0},340:function(n,e,i){"use strict";i.r(e);var t=i(49),o=i.n(t);for(var s in t)"default"!==s&&function(n){i.d(e,n,function(){return t[n]})}(s);var m=i(166),d=i(0),u=!1;var r=function(n){u||i(739)},c=Object(d.a)(o.a,m.a,m.b,!1,r,null,null);c.options.__file="src/docs/pages/component/menu/index.vue",e.default=c.exports},341:function(n,e,i){"use strict";var t=s(i(1)),o=s(i(340));function s(n){return n&&n.__esModule?n:{default:n}}new t.default({el:"#root",render:function(n){return n(o.default)}})},49:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t,o=i(2),s=(t=o)&&t.__esModule?t:{default:t};e.default={data:function(){return{page:"menu"}},components:{"doc-component":s.default}},n.exports=e.default},739:function(n,e){}});