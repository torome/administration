<script>
  export default {
    computed: {
      protocol: {
        get () {
          return this.$store.state.setting['mail.protocol']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'mail.protocol',
            value: value
          })
        }
      },
      encryption: {
        get () {
          return this.$store.state.setting['mail.encryption']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'mail.encryption',
            value: value
          })
        }
      },
      port: {
        get () {
          return this.$store.state.setting['mail.port']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'mail.port',
            value: value
          })
        }
      },
      host: {
        get () {
          return this.$store.state.setting['mail.host']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'mail.host',
            value: value
          })
        }
      },
      mail: {
        get () {
          return this.$store.state.setting['mail.mail']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'mail.mail',
            value: value
          })
        }
      },
      username: {
        get () {
          return this.$store.state.setting['mail.username']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'mail.username',
            value: value
          })
        }
      },
      password: {
        get () {
          return this.$store.state.setting['mail.password']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'mail.password',
            value: value
          })
        }
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
        <div class="box-body">
            <div class="form-horizontal">
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-1 control-label">协议</label>
                    <div class="col-sm-3">
                        <input name="protocol" type="text" class="form-control" placeholder="请输入协议" v-model="protocol"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('protocol')">协议不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-1 control-label">加密方式</label>
                    <div class="col-sm-3">
                        <input name="encryption" type="text" class="form-control" placeholder="请输入加密方式"
                               v-model="encryption" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('encryption')">加密方式不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-1 control-label">主机</label>
                    <div class="col-sm-3">
                        <input name="host" type="text" class="form-control" placeholder="请输入主机地址" v-model="host"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('host')">主机地址不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-1 control-label">邮箱</label>
                    <div class="col-sm-3">
                        <input name="mail" type="text" class="form-control" placeholder="请输入邮箱名称" v-model="mail"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('mail')">邮箱不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-1 control-label">用户名</label>
                    <div class="col-sm-3">
                        <input name="username" type="text" class="form-control" placeholder="请输入用户名称" v-model="username"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('username')">用户名不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-1 control-label">密码</label>
                    <div class="col-sm-3">
                        <input name="password" type="password" class="form-control" placeholder="请输入密码"
                               v-model="password" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('password')">密码不能为空</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-footer">
            <button class="btn btn-primary" :disabled="errors.any()" @click="submit">保存</button>
        </div>
    </div>
</template>