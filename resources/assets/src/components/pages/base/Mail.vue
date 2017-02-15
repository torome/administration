<script>
  import Modal from '../../libraries/Modal'
  export default {
    components: {
      Modal
    },
    computed: {
      driver: {
        get () {
          return this.$store.state.setting['mail.driver']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'mail.driver',
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
      from: {
        get () {
          return this.$store.state.setting['mail.from']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'mail.from',
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
    data () {
      return {
        modal: {
          to: '',
          content: ''
        }
      }
    },
    methods: {
      send: function () {
        let _this = this
        if (!_this.modal.to) {
          window.alert('请填写发送到的邮箱地址！')
          return false
        }
        _this.$http.post(window.api + '/mail/test', {
          to: _this.modal.to,
          content: _this.modal.content
        }).then(function (response) {
          _this.$refs.modal.close()
          _this.$store.commit('message', {
            show: true,
            type: 'info',
            text: '测试邮件发送成功，请查看邮箱验证！'
          })
        }, function (response) {
          console.log(response.body)
        })
      },
      submit: function (e) {
        console.log(e)
        let _this = this
        if (_this.driver === 'mail') {
          _this.$validator.validateAll()
          if (_this.errors.any()) {
            return false
          }
        }
        _this.$jquery(e.target).prop('disabled', true)
        _this.$jquery(e.target).text('提交中...')
        _this.$http.post(window.api + '/mail', {
          driver: _this.driver,
          encryption: _this.encryption,
          port: _this.port,
          host: _this.host,
          from: _this.from,
          username: _this.username,
          password: _this.password
        }).then(response => {
          _this.$store.commit('setting', response.body.data)
          _this.$store.commit('message', {
            show: true,
            type: 'info',
            text: '更新邮件设置成功！'
          })
          _this.$jquery(e.target).prop('disabled', false)
          _this.$jquery(e.target).text('保存')
        }, response => {
          window.alert('更新设置失败！')
          _this.$jquery(e.target).prop('disabled', false)
          _this.$jquery(e.target).text('保存')
        })
      },
      test: function () {
        this.$refs.modal.open()
      }
    },
    mounted () {
      let _this = this
      _this.$store.commit('title', '邮箱配置 - Notadd Administration')
      if (!_this.driver) {
        _this.driver = 'mail'
      }
      if (_this.driver !== 'mail' && _this.driver !== 'smtp') {
        _this.driver = 'mail'
      }
      if (!_this.encryption) {
        _this.encryption = ''
      }
    },
    updated () {
      let _this = this
      if (_this.encryption === '' && !_this.port) {
        _this.port = 25
      }
      if (_this.encryption === 'ssl' && !_this.port) {
        _this.port = 465
      }
    }
  }
</script>
<style>
    .modal-footer {
        border: none;
        padding: 0;
    }

    .modal-footer > .btn-submit {
        float: left;
    }
</style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">邮件管理</h3>
        </div>
        <div class="box-body">
            <div class="form-horizontal">
                <div class="form-group" :class="{ 'has-error': errors.has('driver') }">
                    <label class="col-sm-1 control-label">发送方式</label>
                    <div class="col-sm-3">
                        <div class="btn-group btn-switch">
                            <label class="btn btn-primary" :class="{ active: driver === 'mail' }">
                                <input type="radio" v-model="driver" value="mail">Send Mail 函数
                            </label>
                            <label class="btn btn-primary" :class="{ active: driver === 'smtp' }">
                                <input type="radio" v-model="driver" value="smtp"> SMTP
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">mail或smtp，默认为mail</span>
                        <span class="help-block" v-show="errors.has('driver')">必需填写发送方式</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-1 control-label">加密方式</label>
                    <div class="col-sm-3">
                        <div class="btn-group btn-switch">
                            <label class="btn btn-primary" :class="{ active: encryption === '' }">
                                <input type="radio" v-model="encryption" value=""> 不加密
                            </label>
                            <label class="btn btn-primary" :class="{ active: encryption === 'ssl' }">
                                <input type="radio" v-model="encryption" value="ssl"> SSL
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">若要使用SSL协议请选择<strong>SLL</strong>，若不需要请选择<strong>不加密</strong></span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('host') }">
                    <label class="col-sm-1 control-label">服务器地址</label>
                    <div class="col-sm-3">
                        <input name="host" type="text" class="form-control" placeholder="请输入服务器地址" v-model="host"
                               v-validate data-vv-rules="required" :disabled="driver === 'mail'">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('host')">服务器地址不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('port') }">
                    <label class="col-sm-1 control-label">服务器端口</label>
                    <div class="col-sm-3">
                        <input name="port" type="text" class="form-control" placeholder="请输入服务器端口" v-model="port"
                               v-validate data-vv-rules="required" :disabled="driver === 'mail'">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('port')">不加密时端口默认为25，SSL加密时端口为465或587</span>
                        <span class="help-block" v-show="errors.has('port')">服务器端口不能为空</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-1 control-label">发信邮箱地址</label>
                    <div class="col-sm-3">
                        <input name="from" type="text" class="form-control" placeholder="请输入发信邮箱地址" v-model="from" :disabled="driver === 'mail'">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('from')">发信邮箱地址不能为空</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-1 control-label">SMTP账号</label>
                    <div class="col-sm-3">
                        <input name="username" type="text" class="form-control" placeholder="请输入用户名称" v-model="username"
                               :disabled="driver === 'mail'">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">用于SMTP发送方式</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-1 control-label">SMTP密码</label>
                    <div class="col-sm-3">
                        <input name="password" type="password" class="form-control" placeholder="请输入密码"
                               v-model="password" v-validate data-vv-rules="required" :disabled="driver === 'mail'">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">用于SMTP发送方式</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-footer">
            <button class="btn btn-primary btn-submit" :disabled="errors.any()" @click="submit">保存</button>
            <button class="btn btn-submit" @click="test">测试邮件发送</button>
        </div>
        <modal ref="modal">
            <div slot="title">
                <div class="modal-title"><strong>邮件发送测试</strong></div>
            </div>
            <div slot="body">
                <p>请在更新邮件参数配置后在进行测试</p>
                <div class="form-group">
                    <label>邮箱地址</label>
                    <input class="form-control" v-model="modal.to">
                </div>
                <div class="form-group">
                    <label>邮件内容</label>
                    <textarea class="form-control" rows="10" v-model="modal.content"></textarea>
                </div>
                <div class="modal-footer clearfix">
                    <button class="btn btn-primary btn-submit" @click="send">保存</button>
                </div>
            </div>
        </modal>
    </div>
</template>