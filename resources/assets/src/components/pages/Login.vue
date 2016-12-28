<script>
  export default {
    computed: {
      username () {
        return 'admin'
      },
      password () {
        return '123456789'
      },
      authFailed () {
        return false
      }
    },
    methods: {
      submit: function (e) {
        this.$validator.validateAll()
        if (this.errors.any()) {
          return false
        }
        this.$http.post('http://notadd.io/admin/token', {
          name: this.username,
          password: this.password
        }).then(function (response) {
          console.log(response)
        }, function (response) {
          alert('请求失败！')
        })
      }
    }
  }
</script>
<style></style>
<template>
    <div class="login-box">
        <div class="login-logo">登录</div>
        <div class="login-box-body">
            <div class="form-horizontal">
                <div class="form-group has-feedback" :class="{ 'has-error': errors.has('username') }">
                    <input name="username" type="text" class="form-control" placeholder="请输入用户名" v-model="username" v-validate data-vv-rules="required">
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    <span class="help-block" v-show="errors.has('username')">用户名不能为空</span>
                </div>
                <div class="form-group has-feedback" :class="{ 'has-error': errors.has('password') }">
                    <input name="password" type="password" class="form-control" placeholder="请输入密码" v-model="password" v-validate data-vv-rules="required">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    <span class="help-block" v-show="errors.has('password')">密码不能为空</span>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="callout callout-danger right" v-show="errors.length > 0">{{ errors }}</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <button class="btn btn-primary btn-block" :disabled="errors.any()" @click="submit">登录</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>