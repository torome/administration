<script>
  export default {
    computed: {
      enabled: {
        get () {
          return this.$store.state.setting.hasOwnProperty('baidu.enabled') ? this.$store.state.setting['baidu.enabled'] : '0'
        },
        set (value) {
          this.$store.commit('single', {
            key: 'baidu.enabled',
            value: value
          })
        }
      },
      token: {
        get () {
          return this.$store.state.setting.hasOwnProperty('baidu.token') ? this.$store.state.setting['baidu.token'] : ''
        },
        set (value) {
          this.$store.commit('single', {
            key: 'baidu.token',
            value: value
          })
        }
      }
    },
    methods: {
      submit: function (e) {
        let _this = this
        _this.$validator.validateAll()
        if (_this.errors.any()) {
          return false
        }
        _this.$jquery(e.target).prop('disabled', true)
        _this.$jquery(e.target).text('提交中...')
        _this.$http.post(window.api + '/baidu/configuration', {
          enabled: _this.enabled,
          token: _this.token
        }).then(response => {
          _this.$store.commit('setting', response.body.data)
          _this.$store.commit('message', {
            show: true,
            type: 'notice',
            text: '更新百度搜索推送设置成功！'
          })
          _this.$jquery(e.target).prop('disabled', false)
          _this.$jquery(e.target).text('保存')
        }, response => {
          console.log(response.body)
          window.alert('更新设置失败！')
          _this.$jquery(e.target).prop('disabled', false)
          _this.$jquery(e.target).text('保存')
        })
      },
      sync: function () {
      }
    }
  }
</script>
<style></style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">百度搜索</h3>
        </div>
        <div class="box-body">
            <div class="form-horizontal">
                <div class="form-group">
                    <label class="col-sm-1 control-label">开启主动推送功能</label>
                    <div class="col-sm-3">
                        <div class="btn-group btn-switch">
                            <label class="btn btn-primary" :class="{ 'active': enabled === '1' }">
                                <input type="radio" value="1" v-model="enabled"> 开启
                            </label>
                            <label class="btn btn-primary" :class="{ 'active': enabled === '0' }">
                                <input type="radio" value="0" v-model="enabled"> 关闭
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('token') }">
                    <label class="col-sm-1 control-label">Token</label>
                    <div class="col-sm-3">
                        <input name="token" type="text" class="form-control" placeholder="请输入Token" v-model="token"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">百度提供的授权token</span>
                        <span class="help-block" v-show="errors.has('domain')">Token不能为空</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-footer">
            <button class="btn btn-primary btn-submit" :disabled="errors.any()" @click="submit">保存</button>
        </div>
    </div>
</template>