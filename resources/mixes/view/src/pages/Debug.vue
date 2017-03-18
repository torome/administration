<script>
    import injection from '../helpers/injection';

    export default {
        beforeRouteEnter(to, from, next) {
            injection.loading.start();
            injection.http.post(`${window.api}/debug/get`).then(response => {
                next(vm => {
                    injection.loading.finish();
                    const data = response.data.data;
                    vm.form.enabled = data.debug === '1';
                });
            });
        },
        data() {
            return {
                form: {
                    enabled: false,
                },
            };
        },
        methods: {
            change(status) {
                const self = this;
                injection.loading.start();
                injection.http.post(`${window.api}/debug/set`, {
                    enabled: status,
                }).then(() => {
                    injection.loading.finish();
                    self.$notice.success({
                        title: status ? '调试模式开启成功！' : '调试模式关闭成功！',
                    });
                });
            },
        },
    };
</script>
<template>
    <card>
        <p slot="title">调试工具</p>
        <i-form :label-width="200" :form="form">
            <row>
                <i-col span="14">
                    <form-item label="Debug 模式">
                        <i-switch v-model="form.enabled" size="large" @on-change="change">
                            <span slot="open">开启</span>
                            <span slot="close">关闭</span>
                        </i-switch>
                    </form-item>
                </i-col>
            </row>
        </i-form>
    </card>
</template>
