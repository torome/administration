<script>
    import state from '../states/sitemap';

    export default {
        computed: {
            ...state,
        },
        methods: {
            submit() {
                console.log('Submit!');
            },
        },
    };
</script>
<template>
    <card>
        <p slot="title">网站地图</p>
        <i-form :label-width="200">
            <row>
                <i-col span="14">
                    <form-item label="生成 XML 地图">
                        <radio-group v-model="xml">
                            <radio label="open">开启</radio>
                            <radio label="close">关闭</radio>
                        </radio-group>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="生成 HTML 地图">
                        <radio-group v-model="html">
                            <radio label="open">开启</radio>
                            <radio label="close">关闭</radio>
                        </radio-group>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="只包含最近的文章">
                        <radio-group v-model="recently">
                            <radio label="open">开启</radio>
                            <radio label="close">关闭</radio>
                        </radio-group>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item>
                        <i-button type="primary" @click.native="submit">确认提交</i-button>
                    </form-item>
                </i-col>
            </row>
        </i-form>
    </card>
</template>
