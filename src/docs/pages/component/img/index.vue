<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 图片 `<ui-img>`
    
    <doc-component-status page="img"></doc-component-status>

    [[[开始]]]

    定义图片容器，支持三种不同形状的图片，可为图片添加文字说明。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
    :::

    :::vue
    @name:带文字说明图片
    ---
    #demo
    >tpl
    <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg">说明文字</ui-img>
    :::

    :::vue
    @name:不同形状
    ---
    #demo
    >desc
    支持三种：
    <br><br>
    - `.round` : 圆角
    - `.circle` : 圆形
    - `.thumbnail` : 相框
    >tpl
    <div>
        <ui-img class="round" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
        <ui-img class="circle" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
        <ui-img class="thumbnail" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
    </div>
    :::

    :::vue
    @name:支持的属性
    ---
    #demo
    >desc
    `ui-img`仅支持下面这些属性：
    <br><br>
    - `src` : 图片地址
    - `width` : 图片宽度
    - `height` : 图片高度
    - `alt` : 图片加载失败显示内容
    - `title` : 图标标题
    >tpl
    <div>
        <!-- 添加width属性，自动设置图片宽度 -->
        <ui-img width="130" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>

        <!-- 添加height属性，自动设置图片高度 -->
        <ui-img height="150" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>

        <!-- 添加title属性，自动设置图片title -->
        <ui-img title="这里是title" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>

        <!-- 添加alt属性，自动设置图片alt属性，当图片无法显示时候，显示alt内容。 -->
        <ui-img alt="这里是alt" src="https://d13yacurqjgar.cloudfront.net/noimg.jpeg"></ui-img>
    </div>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>


    [[[源码]]]

    <iframe src="/report/coverage/lib/components/img/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'img'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
