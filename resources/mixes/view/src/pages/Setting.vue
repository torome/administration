<script>
    import state from '../states/setting';

    export default {
        computed: {
            ...state,
        },
        data() {
            const self = this;
            return {
                form: {
                    beian: self.beian,
                    company: self.company,
                    copyright: self.copyright,
                    domain: self.domain,
                    name: self.name,
                    statistics: self.statistics,
                },
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
                            message: 'statistics',
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
                        <radio-group v-model="enabled">
                            <radio label="open">开启</radio>
                            <radio label="close">关闭</radio>
                        </radio-group>
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
                        <i-button type="primary" @click.native="submit">确认提交</i-button>
                    </form-item>
                </i-col>
            </row>
        </i-form>
    </card>
</template>
