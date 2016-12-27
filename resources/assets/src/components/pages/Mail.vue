<script>
  export default {
    computed: {
      protocol () {
        return ''
      },
      encryption () {
        return ''
      },
      port () {
        return ''
      },
      host () {
        return ''
      },
      mail () {
        return ''
      },
      username () {
        return ''
      },
      password () {
        return ''
      }
    },
    methods: {
      submit: function (e) {
        this.$validator.validateAll()
        if (this.errors.any()) {
          return false
        }
      }
    }
  }
</script>
<style></style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">邮件管理</h3>
        </div>
        <div class="form-horizontal">
            <div class="box-body">
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">协议</label>
                    <div class="col-sm-4">
                        <input name="protocol" type="text" class="form-control" placeholder="请输入协议" v-model="protocol"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('protocol')">协议不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">加密方式</label>
                    <div class="col-sm-4">
                        <input name="encryption" type="text" class="form-control" placeholder="请输入加密方式"
                               v-model="encryption" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('encryption')">加密方式不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">主机</label>
                    <div class="col-sm-4">
                        <input name="host" type="text" class="form-control" placeholder="请输入主机地址" v-model="host"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('host')">主机地址不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">邮箱</label>
                    <div class="col-sm-4">
                        <input name="mail" type="text" class="form-control" placeholder="请输入邮箱名称" v-model="mail"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('mail')">邮箱不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">用户名</label>
                    <div class="col-sm-4">
                        <input name="username" type="text" class="form-control" placeholder="请输入用户名称" v-model="username"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('username')">用户名不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">密码</label>
                    <div class="col-sm-4">
                        <input name="password" type="password" class="form-control" placeholder="请输入密码"
                               v-model="password" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('password')">密码不能为空</span>
                    </div>
                </div>
            </div>
            <div class="box-footer">
                <div class="form-group">
                    <div class="col-sm-4 col-sm-offset-3">
                        <button class="btn btn-primary btn-flat" :disabled="errors.any()" @click="submit">保存</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>