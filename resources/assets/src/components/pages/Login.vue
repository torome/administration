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
                <div class="form-group has-feedback" :class="{ 'has-error': errors.has('domain') }">
                    <input name="username" type="text" class="form-control" placeholder="请输入用户名" v-model="username" v-validate data-vv-rules="required">
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    <span class="help-block" v-show="errors.has('username')">{{ errors.first('username') }}</span>
                </div>
                <div class="form-group has-feedback" :class="{ 'has-error': errors.has('domain') }">
                    <input name="password" type="password" class="form-control" placeholder="请输入密码" v-model="password" v-validate data-vv-rules="required">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    <span class="help-block" v-show="errors.has('password')">{{ errors.first('password') }}</span>
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
            </div>
        </div>
    </div>
</template>