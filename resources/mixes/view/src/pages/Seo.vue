<script>
    import injection from '../helpers/injection';

    export default {
        beforeRouteEnter(to, from, next) {
            injection.loading.start();
            injection.http.post(`${window.api}/seo/get`).then(response => {
                const data = response.data.data;
                next(vm => {
                    injection.loading.finish();
                    vm.form.description = data.description;
                    vm.form.keyword = data.keyword;
                    vm.form.title = data.title;
                });
            });
            injection.sidebar.active('setting');
        },
        data() {
            return {
                form: {
                    description: '',
                    keyword: '',
                    title: '',
                },
                loading: false,
                rules: {
                    description: [
                        {
                            required: true,
                            type: 'string',
                            message: '请输入描述',
                            trigger: 'change',
                        },
                    ],
                    keyword: [
                        {
                            required: true,
                            type: 'string',
                            message: '请输入关键字',
                            trigger: 'change',
                        },
                    ],
                    title: [
                        {
                            required: true,
                            type: 'string',
                            message: '请输入标题',
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
                        self.$http.post(`${window.api}/seo/set`, self.form).then(() => {
                            self.$notice.open({
                                title: '更新全局 SEO 设置信息成功！',
                            });
                        }).finally(() => {
                            self.loading = false;
                        });
                    } else {
                        self.loading = false;
                        self.$notice.error({
                            title: '请正确填写 SEO 配置信息！',
                        });
                    }
                });
            },
        },
    };
</script>
<template>
    <card>
        <p slot="title">全局 SEO 配置</p>
        <i-form :label-width="200" :model="form" ref="form" :rules="rules">
            <row>
                <i-col span="14">
                    <form-item label="标题" prop="title">
                        <i-input placeholder="请输入标题" v-model="form.title" :autosize="{minRows: 2,maxRows: 5}"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="描述" prop="keyword">
                        <i-input type="textarea" placeholder="请输入描述" v-model="form.keyword"
                                 :autosize="{minRows: 2,maxRows: 5}"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="关键字" prop="description">
                        <i-input type="textarea" placeholder="请输入关键字" v-model="form.description"
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
