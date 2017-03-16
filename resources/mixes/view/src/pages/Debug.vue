<script>
    import state from '../states/debug';

    export default {
        computed: {
            ...state,
        },
        methods: {
            submit() {
                console.log('Submit!');
            },
        },
        watch: {
            enabled: {
                handler(val) {
                    console.log(val);
                },
            },
        },
    };
</script>
<template>
    <card>
        <p slot="title">调试工具</p>
        <i-form :label-width="100">
            <form-item label="Debug 模式">
                <i-col span="9">
                    <radio-group type="button" v-model="enabled">
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
