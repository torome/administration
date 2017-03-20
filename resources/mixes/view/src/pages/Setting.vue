<script>
    import injection from '../helpers/injection';

    export default {
        beforeRouteEnter(to, from, next) {
            injection.loading.start();
            injection.http.post(`${window.api}/setting/get`).then(response => {
                const data = response.data.data;
                next(vm => {
                    injection.loading.finish();
                    injection.sidebar.active('setting');
                    vm.form.beian = data.beian;
                    vm.form.company = data.company;
                    vm.form.copyright = data.copyright;
                    vm.form.domain = data.domain;
                    vm.form.enabled = data.enabled === '1';
                    vm.form.name = data.name;
                    vm.form.statistics = data.statistics;
                });
            });
        },
        data() {
            return {
                form: {
                    beian: '',
                    company: '',
                    copyright: '',
                    domain: '',
                    enabled: true,
                    name: '',
                    statistics: '',
                },
                loading: false,
                rules: {
                    beian: [
                        {
                            required: true,
                            type: 'string',
                            message: '请输入备案信息',
                            trigger: 'change',
                        },
                    ],
                    company: [
                        {
                            required: true,
                            type: 'string',
                            message: '请输入公司名称',
                            trigger: 'change',
                        },
                    ],
                    copyright: [
                        {
                            required: true,
                            type: 'string',
                            message: '请输入版权信息',
                            trigger: 'change',
                        },
                    ],
                    domain: [
                        {
                            required: true,
                            type: 'string',
                            message: '请输入网站域名',
                            trigger: 'change',
                        },
                    ],
                    name: [
                        {
                            required: true,
                            type: 'string',
                            message: '请输入网站名称',
                            trigger: 'change',
                        },
                    ],
                    statistics: [
                        {
                            required: true,
                            type: 'string',
                            message: '请输入统计代码',
                            trigger: 'change',
                        },
                    ],
                },
            };
        },
        methods: {
            submit() {
                const self = this;
                self.loading = true;
                self.$refs.form.validate(valid => {
                    if (valid) {
                        self.$http.post(`${window.api}/setting/set`, self.form).then(() => {
                            self.$notice.open({
                                title: '更新全局设置信息成功！',
                            });
                        }).finally(() => {
                            self.loading = false;
                        });
                    } else {
                        self.loading = false;
                        self.$notice.error({
                            title: '请正确填写设置信息！',
                        });
                    }
                });
            },
        },
    };
</script>
<template>
    <card>
        <p slot="title">全局设置</p>
        <i-form :label-width="200" :model="form" ref="form" :rules="rules">
            <row>
                <i-col span="14">
                    <form-item label="站点开启">
                        <i-switch v-model="form.enabled" size="large">
                            <span slot="open">开启</span>
                            <span slot="close">关闭</span>
                        </i-switch>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="网站名称" prop="name">
                        <i-input placeholder="请输入网站名称" v-model="form.name"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="网站域名" prop="domain">
                        <i-input placeholder="请输入网站域名" v-model="form.domain"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="备案信息" prop="beian">
                        <i-input placeholder="请输入备案信息" v-model="form.beian"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="公司名称" prop="company">
                        <i-input placeholder="请输入公司名称" v-model="form.company"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="版权信息" prop="copyright">
                        <i-input placeholder="请输入版权信息" v-model="form.copyright"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="统计代码" prop="statistics">
                        <i-input type="textarea" placeholder="请输入统计代码" v-model="form.statistics"
                                 :autosize="{minRows: 2,maxRows: 5}"></i-input>
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
