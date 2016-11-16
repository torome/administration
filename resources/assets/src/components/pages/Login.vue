<script>
    export default {
        data: () => {
            return {
                errors: "",
                username: "admin",
                password: "123456789",
                authFailed: false
            };
        },
        methods: {
            onSubmit: function () {
                this.$http.post(window.url + "/token", {
                    name: this.username,
                    password: this.password
                }).then((response) => {
                    if (response.body.status === "success") {
                        window.localStorage.setItem("access_token", response.body.access_token);
                        window.localStorage.setItem("expires_in", response.body.expires_in);
                        window.localStorage.setItem("refresh_token", response.body.refresh_token);
                        this.$router.go("/");
                    } else {
                        this.errors = "登录失败，请重新登录！";
                    }
                }, (response) => {
                    if (response.status === 401) {
                        this.errors = response.body.error;
                    } else if (response.status === 500) {
                        this.errors = "服务器无响应或服务器错误！";
                    }
                });
            }
        },
        route: {
            activate: function (transition) {
                if (window.localStorage.getItem("access_token")) {
                    this.$router.go("/");
                }
                transition.next();
            }
        }
    };
</script>
<template>
    <div class="login-box">
        <div class="login-logo">登录</div>
        <div class="login-box-body">
            <validator name="validation">
                <form novalidate @submit.prevent="onSubmit">
                    <div class="form-group has-feedback" :class="{ 'has-error': $validation.username.touched && $validation.username.invalid }">
                        <input v-model="username" type="text" class="form-control" placeholder="请输入用户名" v-validate:username="{ required: { rule: true, message: '用户名不能为空' } }">
                        <span class="glyphicon glyphicon-user form-control-feedback"></span>
                        <span v-if="$validation.username.touched && $validation.username.required" class="help-block">{{ $validation.username.required }}</span>
                    </div>
                    <div class="form-group has-feedback" :class="{ 'has-error': $validation.password.touched && $validation.password.invalid }">
                        <input v-model="password" type="password" class="form-control" placeholder="请输入密码"  v-validate:password="{ required: { rule: true, message: '密码不能为空' } }">
                        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                        <span v-if="$validation.password.touched && $validation.password.required" class="help-block">{{ $validation.password.required }}</span>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="callout callout-danger right" v-show="errors.length > 0">{{ errors }}</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <button type="submit" class="btn btn-primary btn-block btn-flat" :class="{ 'disabled': $validation.invalid }" :disabled="$validation.invalid">登录</button>
                        </div>
                    </div>
                </form>
            </validator>
        </div>
    </div>
</template>