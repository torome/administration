<script>
    export default {
        data() {
            return {
                form: {
                    password: '',
                    username: '',
                },
                rules: {
                    password: [
                        {
                            required: true,
                            type: 'string',
                            message: '请输入密码',
                            trigger: 'change',
                        },
                    ],
                    username: [
                        {
                            required: true,
                            type: 'string',
                            message: '请输入账号',
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
                    } else {
                        this.$notice.error({
                            title: '请正确填写账号或密码！',
                        });
                    }
                });
            },
        },
    };
</script>
<template>
    <div class="login-layout">
        <i-form :model="form" :label-width="0" ref="form" :rules="rules">
            <form-item prop="username">
                <i-input icon="person" v-model="form.username" placeholder="请输入账号"></i-input>
            </form-item>
            <form-item prop="password">
                <i-input icon="locked" type="password" v-model="form.password" placeholder="请输入密码"></i-input>
            </form-item>
            <form-item>
                <i-button type="primary" @click.native="submit">确认提交</i-button>
            </form-item>
        </i-form>
    </div>
</template>
