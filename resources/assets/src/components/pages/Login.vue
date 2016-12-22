<script>
  export default {
    computed: {},
    methods: {}
  }
</script>
<style></style>
<template>
    <div class="login-box">
        <div class="login-logo">登录</div>
        <div class="login-box-body">
            <div class="form-horizontal">
                <validity field="username" :validators="{ required: { rule: true, message: '用户名不能为空' } }">
                    <div class="form-group has-feedback" :class="{ 'has-error': $validation.username.touched && $validation.username.invalid }">
                        <input v-model="username" type="text" class="form-control" placeholder="请输入用户名">
                        <span class="glyphicon glyphicon-user form-control-feedback"></span>
                        <span v-if="$validation.username.touched && $validation.username.required" class="help-block">{{ $validation.username.required }}</span>
                    </div>
                </validity>
                <validity field="password" :validators="{ required: { rule: true, message: '密码不能为空' } }">
                    <div class="form-group has-feedback" :class="{ 'has-error': $validation.password.touched && $validation.password.invalid }">
                        <input v-model="password" type="password" class="form-control" placeholder="请输入密码">
                        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                        <span v-if="$validation.password.touched && $validation.password.required" class="help-block">{{ $validation.password.required }}</span>
                    </div>
                </validity>
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
            </div>
        </div>
    </div>
</template>