<script>
    import state from '../states/debug';

    export default {
        computed: {
            ...state,
        },
        methods: {
            change(status) {
                const self = this;
                if (status) {
                    self.$notice.success({
                        title: '调试模式开启成功！',
                    });
                } else {
                    self.$notice.success({
                        title: '调试模式关闭成功！',
                    });
                }
            },
        },
    };
</script>
<template>
    <card>
        <p slot="title">调试工具</p>
        <i-form :label-width="200">
            <row>
                <i-col span="14">
                    <form-item label="Debug 模式">
                        <i-switch v-model="enabled" size="large" @on-change="change">
                            <span slot="open">开启</span>
                            <span slot="close">关闭</span>
                        </i-switch>
                    </form-item>
                </i-col>
            </row>
        </i-form>
    </card>
</template>
