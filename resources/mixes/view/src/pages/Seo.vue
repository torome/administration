<script>
    import state from '../states/seo';

    export default {
        computed: {
            ...state,
        },
        data() {
            const self = this;
            return {
                form: {
                    description: self.description,
                    keyword: self.keyword,
                    title: self.title,
                },
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
                self.$refs.form.validate(valid => {
                    if (valid) {
                        console.log(valid);
                    } else {
                        this.$notice.error({
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
                        <i-button type="primary" @click.native="submit">确认提交</i-button>
                    </form-item>
                </i-col>
            </row>
        </i-form>
    </card>
</template>
