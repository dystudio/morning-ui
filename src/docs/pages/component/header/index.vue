<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 页头 `<ui-header>`
    
    <doc-component-status page="header"></doc-component-status>

    [[[开始]]]

    定义一个页头，常用在容器内部，这是一个块级元素。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-header>
        页头标题
    </ui-header>
    :::

    :::vue
    @name:子标题
    ---
    #demo
    >desc
    你可以使用`<small>`标记子标题。
    >tpl
    <ui-header>
        页头标题<small>页头子标题</small>
    </ui-header>
    :::

    :::vue
    @name:带标记的页头
    ---
    #demo
    >desc
    使用`mark`类可显示带标记的页头。
    >tpl
    <ui-header class="mark">
        页头标题<small>页头子标题</small>
    </ui-header>
    :::

    :::vue
    @name:带下划线的页头
    ---
    #demo
    >desc
    使用`underline`类可显示带下划线的页头。
    >tpl
    <ui-header class="underline">
        页头标题<small>页头子标题</small>
    </ui-header>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`black`|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>

    :::vue
    @layout:size
    ---
    <ui-header class="mark" size="{$sizeKey}">{$&sizeName}<small>页头子标题</small></ui-header>
    :::

    :::vue
    @layout:color
    ---
    <ui-header color="{$colorKey}">{$&colorName}<small>页头子标题</small></ui-header>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/header/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'header'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
