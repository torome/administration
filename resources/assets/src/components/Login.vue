<template>
    <div class="login-box">
        <div class="login-logo">登录</div>
        <div class="login-box-body">
            <validator name="validation">
                <form novalidate @submit.prevent="onSubmit">
                    <div class="form-group has-feedback" :class="{ 'has-error': $validation.username.invalid }">
                        <input v-model="username" type="text" class="form-control" placeholder="请输入用户名" v-validate:username="{ required: { rule: true, message: '用户名不能为空' } }">
                        <span class="glyphicon glyphicon-user form-control-feedback"></span>
                        <span v-if="$validation.username.required" class="help-block">{{ $validation.username.required }}</span>
                    </div>
                    <div class="form-group has-feedback" :class="{ 'has-error': $validation.password.invalid }">
                        <input v-model="password" type="password" class="form-control" placeholder="请输入密码"  v-validate:password="{ required: { rule: true, message: '密码不能为空' } }">
                        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                        <span v-if="$validation.password.required" class="help-block">{{ $validation.password.required }}</span>
                    </div>
                    <div class="row">
                        <div class="col-xs-8">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox"> 记住我
                                </label>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <button type="submit" class="btn btn-primary btn-block btn-flat">登录</button>
                        </div>
                    </div>
                </form>
            </validator>
        </div>
    </div>
</template>
<script>
    import Storage from "../libraries/Storage";
    export default {
        data: () => {
            return {
                username: "admin",
                password: "123456789",
                authFailed: false
            };
        },
        methods: {
            onSubmit: function () {
                this.$http.post(Storage.state.url + "/admin/token", {
                    _token: Storage.state.csrf_token,
                    name: this.username,
                    password: this.password
                }).then((response) => {
                    if (response.body.status === "success") {
                        Storage.commit("access_token", response.body.access_token);
                        Storage.commit("expires_in", response.body.expires_in);
                        Storage.commit("refresh_token", response.body.refresh_token);
                        this.$router.go("/");
                    } else {
                        window.alert("登录失败，请重新登录！");
                    }
                }, (response) => {
                    if (response.status === 401) {
                    }
                });
            }
        }
    };
</script>