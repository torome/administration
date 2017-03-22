<script>
    export default {
        data() {
            return {
                form: {
                    password: '',
                    username: '',
                },
                loading: false,
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
                self.loading = true;
                self.$refs.form.validate(valid => {
                    if (valid) {
                        self.$http.post(`${window.admin}/token`, {
                            name: self.form.username,
                            password: self.form.password,
                        }).then(response => {
                            self.$notice.open({
                                title: '恭喜，登录成功！',
                            });
                            self.$store.commit('token', response.data);
                            self.$router.push('/');
                        }).finally(() => {
                            self.loading = false;
                        });
                    } else {
                        self.loading = false;
                        self.$notice.error({
                            title: '请正确填写账号或密码！',
                        });
                    }
                });
            },
        },
    };
</script>
<template>
    <div class="login-layout" @keyup.enter="submit">
        <i-form :model="form" :label-width="0" ref="form" :rules="rules">
            <div class="login-logo">Notadd 管理后台</div>
            <form-item label="账号" prop="username">
                <i-input icon="person" v-model="form.username" placeholder="请输入账号"></i-input>
            </form-item>
            <form-item label="密码" prop="password">
                <i-input icon="locked" type="password" v-model="form.password" placeholder="请输入密码"></i-input>
            </form-item>
            <form-item>
                <i-button :loading="loading" size="large" type="primary" @click.native="submit">
                    <span v-if="!loading">登录</span>
                    <span v-else>正在提交…</span>
                </i-button>
            </form-item>
        </i-form>
    </div>
</template>
