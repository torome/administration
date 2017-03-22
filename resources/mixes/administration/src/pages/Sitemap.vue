<script>
    import injection from '../helpers/injection';

    export default {
        beforeRouteEnter(to, from, next) {
            injection.loading.start();
            injection.http.post(`${window.api}/sitemap/get`).then(response => {
                const data = response.data.data;
                next(vm => {
                    injection.loading.finish();
                    injection.sidebar.active('setting');
                    vm.form.cycle = data.cycle === '1';
                    vm.form.html = data.html === '1';
                    vm.form.recently = data.recently === '1';
                    vm.form.xml = data.xml === '1';
                });
            });
        },
        data() {
            return {
                form: {
                    cycle: false,
                    html: false,
                    recently: false,
                    xml: false,
                },
                loading: false,
            };
        },
        methods: {
            submit() {
                const self = this;
                self.loading = true;
                self.$http.post(`${window.api}/sitemap/set`, self.form).then(() => {
                    self.$notice.open({
                        title: '更新网站地图设置信息成功！',
                    });
                }).finally(() => {
                    self.loading = false;
                });
            },
        },
    };
</script>
<template>
    <card>
        <p slot="title">网站地图</p>
        <i-form :label-width="200" :model="form">
            <row>
                <i-col span="14">
                    <form-item label="生成 XML 地图" prop="xml">
                        <i-switch v-model="form.xml" size="large">
                            <span slot="open">开启</span>
                            <span slot="close">关闭</span>
                        </i-switch>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="生成 HTML 地图" prop="html">
                        <i-switch v-model="form.html" size="large">
                            <span slot="open">开启</span>
                            <span slot="close">关闭</span>
                        </i-switch>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="只包含最近的文章" prop="recently">
                        <i-switch v-model="form.recently" size="large">
                            <span slot="open">开启</span>
                            <span slot="close">关闭</span>
                        </i-switch>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item>
                        <i-button :loading="loading" type="primary" @click.native="submit">
                            <span v-if="!loading">确认提交</span>
                            <span v-else>正在提交…</span>
                        </i-button>
                    </form-item>
                </i-col>
            </row>
        </i-form>
    </card>
</template>
