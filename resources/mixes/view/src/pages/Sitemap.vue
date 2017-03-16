<script>
    import state from '../states/sitemap';

    export default {
        computed: {
            ...state,
        },
    };
</script>
<template>
    <card>
        <p slot="title">网站地图</p>
        <i-form :label-width="150">
            <form-item label="生成 XML 地图">
                <i-col span="9">
                    <radio-group v-model="xml">
                        <radio label="open">开启</radio>
                        <radio label="close">关闭</radio>
                    </radio-group>
                </i-col>
            </form-item>
            <form-item label="生成 HTML 地图">
                <i-col span="9">
                    <radio-group v-model="html">
                        <radio label="open">开启</radio>
                        <radio label="close">关闭</radio>
                    </radio-group>
                </i-col>
            </form-item>
            <form-item label="只包含最近的文章">
                <i-col span="9">
                    <radio-group v-model="recently">
                        <radio label="open">开启</radio>
                        <radio label="close">关闭</radio>
                    </radio-group>
                </i-col>
            </form-item>
            <form-item>
                <i-button type="primary" @click.native="submit">确认提交</i-button>
            </form-item>
        </i-form>
    </card>
</template>
