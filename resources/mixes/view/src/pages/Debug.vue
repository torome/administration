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
    };
</script>
<template>
    <card>
        <p slot="title">调试工具</p>
        <i-form :label-width="100">
            <row>
                <i-col span="9">
                    <form-item label="Debug 模式">
                        <radio-group v-model="enabled">
                            <radio label="open">开启</radio>
                            <radio label="close">关闭</radio>
                        </radio-group>
                    </form-item>
                </i-col>
            </row>
            <form-item>
                <i-button type="primary" @click.native="submit">确认提交</i-button>
            </form-item>
        </i-form>
    </card>
</template>
