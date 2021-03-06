<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 方法
    
    交互及表单组件都提供组件方法，通过调用组件方法可以修改及获取组件内部的状态。

    所有的方法都需要遵循全局命名规范。

    ## 使用

    组件的方法挂载在组件的vm上，调用方法需要先找到组件的vm。

    目前可以通过两种方式找到组件的vm:

    - 父vm的子组件索引调用
    - 全局查找调用

    不过这两种方法实际都是基于Vue的子组件索引(ref)来实现的，你可以查看[Vue/子组件索引](https://vuejs.org/v2/guide/components.html#Child-Component-Refs)获取更多细节。

    #### 父vm的子组件索引调用

    使用前需要在被调用的组件上通过`ref`指定一个索引ID，然后在父vm中通过`this.$refs.[refId]`即可找到组件的vm：

    :::vue
    #demo
    >tpl
    <div>
        <!-- 在组件上添加`ref`，指定索引ID -->
        <ui-btn ref="demo1">按钮</ui-btn>
        
        <br><br>

        <!-- 在父vm中通过`$refs`找到组件vm并调用挂载的方法 -->
        <ui-link @emit="lockFromParent">锁定按钮</ui-link>
        <ui-link @emit="unloackFromParent">解锁按钮</ui-link>
    </div>
    >script
    {
        methods : {
            lockFromParent : function () {
                this.$refs.demo1.lock();
            },
            unloackFromParent : function () {
                this.$refs.demo1.unlock();
            }
        }
    }
    :::

    #### 全局查找调用

    使用前需要在被调用的组件上通过ref指定一个索引ID，然后通过Morning UI提供的全局方法`morning.findVM()`查找组件vm：

    :::vue
    #demo
    >tpl
    <div>
        <!-- 在组件上添加`ref`，指定索引ID -->
        <ui-btn ref="demo2">按钮</ui-btn>
        
        <br><br>

        <!-- 通过findVM方法全局查找组件vm并调用挂载的方法 -->
        <ui-link js="window.morning.findVM('demo2').lock();">锁定按钮</ui-link>
        <ui-link js="window.morning.findVM('demo2').unlock();">解锁按钮</ui-link>
    </div>
    :::

    `findVM()`方法本质上也是基于`ref`来实现的，只是提供了一个全局查找的快捷方法。[查看findVM()方法详情](/guide/morning.html#findVMref)

    `findVM()`方法只会返回第一个匹配`ref`的组件vm，如果你需要查询所有匹配`ref`的组件vm，可以使用`findAllVM()`方法。这个方法将会返回一个数组：

    :::vue
    #demo
    >tpl
    <div>
        <!-- 在组件上添加`ref`，指定索引ID -->
        <ui-link v-for="n in 5" ref="demo3">(链接)</ui-link>

        <br><br>
        
        <!-- 通过findAllVM方法全局查找所有组件vm -->
        <ui-link js="alert(window.morning.findAllVM('demo3').length);">查看匹配组件的数量</ui-link><br>
        <ui-link js="window.morning.findAllVM('demo3')[2].lock();">锁定第3个链接</ui-link><br>
        <ui-link js="window.morning.findAllVM('demo3')[2].unlock();">解锁第3个链接</ui-link>
    </div>
    :::

    [查看findAllVM()方法详情](/guide/morning.html#findAllVMref)

    ## 通用方法

    交互和表单组件都支持一些通用的方法:

    - `getConf` : 获取组件配置，详见[获取配置](/guide/config.html#获取配置)

    ## 私有方法

    组件vm上任何以下划线开头的都是私有方法，用法及变动不会再文档中提及，不应该使用。

    ## 方法全局命名规范

    方法在全局有一套命名规范，这样是为了防止不同的组件对于某个名词理解不同，导致同一名词在不同组件的不同行为。

    在为组件添加方法前应先检查下面的列表，是否有含义相同的事件，若有请使用，若没有请将新的方法添加到下面列表并注明它的含义。
    
    - `show` : 显示
    - `hide` : 隐藏
    - `toLevel` : 至某层级
    - `setLevel` : 设置层级
    - `getLevel` : 获取层级
    - `addLevel` : 添加层级
    - `getHistory` : 获取历史
    - `backLast` : 回退一步
    - `resolve` : 完成
    - `reject` : 失败
    - `reload` : 重载
    - `switch` : 切换
    - `lock` : 锁定
    - `unlock` : 解锁
    - `set` : 设置表单值/设置
    - `get` : 获取表单值
    - `setName` : 设置表单名
    - `getName` : 获取表单名
    - `setKey` : 设置表单Key
    - `getKey` : 获取表单Key
    - `setGroup` : 设置表单组
    - `getGroup` : 获取表单组
    - `addGroup` : 添加表单组
    - `removeGroup` : 移除表单组
    - `toggle` : 切换状态
    - `add` : 添加项目/增加
    - `sub` : 减少
    - `update` : 更新项目
    - `del` : 删除项目
    - `move` : 移动项目
    - `setInput` : 设置输入框值
    - `getInput` : 获取输入框值
    - `getPage` : 获取页数
    - `to` : 至某一项
    - `next` : 下一项
    - `prev` : 上一项
    - `setTotal` : 设置总数
    - `push` : 推送
    - `close` : 关闭
    - `toggleYearPick` : 切换年份选择器
    - `toggleMonthPick` : 切换月份选择器
    - `getDate` : 获取日期
    - `getTime` : 获取时间
    - `setTime` : 设置时间
    - `getHighlight` : 获取高亮
    - `setHighlight` : 设置高亮
    - `uploadUrl` : 通过URL上传
    - `isUploading` : 正在上传
    - `addZone` : 新增区域
    - `updateZone` : 更新区域
    - `removeZone` : 删除区域
    - `cleanZones` : 删除所有区域
    - `getScale` : 获取缩放比
    - `play` : 播放
    - `mute` : 静音
    - `volume` : 音量
    - `getInfo` : 获取信息
    - `togglePicker` : 切换选择器
    - `getIndex` : 获取索引
    - `getId` : 获取ID
    - `getTitle` : 获取标题
    - `foldNode` : 折叠节点
    - `foldAllNode` : 折叠所有节点
    - `unfoldAllNode` : 展开所有节点
    - `position` : 定位

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'method'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
