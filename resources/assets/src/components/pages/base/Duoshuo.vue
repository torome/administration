<script>
  export default {
    computed: {
      domain: {
        get () {
          return this.$store.state.setting.hasOwnProperty('duoshuo.domain') ? this.$store.state.setting['duoshuo.domain'] : ''
        },
        set (value) {
          this.$store.commit('single', {
            key: 'duoshuo.domain',
            value: value
          })
        }
      },
      secret: {
        get () {
          return this.$store.state.setting.hasOwnProperty('duoshuo.secret') ? this.$store.state.setting['duoshuo.secret'] : ''
        },
        set (value) {
          this.$store.commit('single', {
            key: 'duoshuo.secret',
            value: value
          })
        }
      },
      back: {
        get () {
          return this.$store.state.setting.hasOwnProperty('duoshuo.back') ? this.$store.state.setting['duoshuo.back'] : '0'
        },
        set (value) {
          this.$store.commit('single', {
            key: 'duoshuo.back',
            value: value
          })
        }
      },
      table: {
        get () {
          return this.$store.state.setting.hasOwnProperty('duoshuo.table') ? this.$store.state.setting['duoshuo.table'] : '0'
        },
        set (value) {
          this.$store.commit('single', {
            key: 'duoshuo.table',
            value: value
          })
        }
      }
    },
    methods: {
      backup: function (key, length, list, target) {
        let _this = this
        if (key + 1 > length) {
          _this.$jquery(target).prop('disabled', false)
          _this.$jquery(target).text('同步多说评论到本地')
          _this.$store.commit('message', {
            show: true,
            type: 'notice',
            text: '同步多说评论到本地完成！'
          })
          return false
        }
        let current = key + 1
        _this.$jquery(target).text('获取到' + length + '篇文章，开始同步' + current + '/' + length)
        _this.$http.post(window.api + '/duoshuo/backup', {
          id: list[key]
        }).then(response => {
          _this.backup(current, length, list, target)
        }, response => {
          console.log(response.body)
        })
      },
      submit: function (e) {
        let _this = this
        _this.$validator.validateAll()
        if (_this.errors.any()) {
          return false
        }
        _this.$jquery(e.target).prop('disabled', true)
        _this.$jquery(e.target).text('提交中...')
        _this.$http.post(window.api + '/duoshuo/configuration', {
          domain: _this.domain,
          secret: _this.secret,
          back: _this.back,
          table: _this.table
        }).then(response => {
          _this.$store.commit('setting', response.body.data)
          _this.$store.commit('message', {
            show: true,
            type: 'notice',
            text: '更新多说设置成功！'
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
      sync: function (e) {
        let _this = this
        let _length = 0
        let _target = e.target
        _this.$jquery(_target).prop('disabled', true)
        _this.$jquery(_target).text('正在获取文章数量...')
        _this.$http.post(window.api + '/duoshuo/number').then(response => {
          _length = response.body.data.number
          _this.$jquery(_target).text('获取到' + _length + '篇文章，开始同步')
          _this.backup(0, _length, response.body.data.list, _target)
        }, response => {
          console.log(response.body)
        })
      }
    }
  }
</script>
<style></style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">多说评论</h3>
        </div>
        <div class="box-body">
            <div class="form-horizontal">
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-1 control-label">二级域名</label>
                    <div class="col-sm-3">
                        <input name="domain" type="text" class="form-control" placeholder="请输入二级域名" v-model="domain"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">例如：注册多说时二级域名为 chats.duoshuo.com 那么此处应该填写 chats</span>
                        <span class="help-block" v-show="errors.has('domain')">二级域名不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('secret') }">
                    <label class="col-sm-1 control-label">站点密钥</label>
                    <div class="col-sm-3">
                        <input name="secret" type="text" class="form-control" placeholder="请输入站点密钥" v-model="secret"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">多说后台->设置->基本设置->密钥</span>
                        <span class="help-block" v-show="errors.has('secret')">站点密钥不能为空</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-1 control-label">评论是否回源</label>
                    <div class="col-sm-3">
                        <div class="btn-group btn-switch">
                            <label class="btn btn-primary" :class="{ 'active': back === '1' }">
                                <input type="radio" value="1" v-model="back"> 开启
                            </label>
                            <label class="btn btn-primary" :class="{ 'active': back === '0' }">
                                <input type="radio" value="0" v-model="back"> 关闭
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">注意：当前开关只是本站是否接收回源数据的开关，如果您想彻底关闭回源，需在多说后台删除本地回源地址</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('table') }">
                    <label class="col-sm-1 control-label">文章表名</label>
                    <div class="col-sm-3">
                        <input name="table" type="text" class="form-control" placeholder="请输入站点密钥" v-model="table"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">本站所用文章表(需要引入评论模块的数据表)的名字，不带前缀</span>
                        <span class="help-block" v-show="errors.has('table')">文章表名不能为空</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-footer">
            <button class="btn btn-primary btn-submit" :disabled="errors.any()" @click="submit">保存</button>
            <button class="btn btn-info btn-submit" @click="sync">同步多说评论到本地</button>
        </div>
    </div>
</template>