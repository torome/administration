<script>
  export default {
    computed: {
      enabled: {
        get () {
          return this.$store.state.setting['site.enabled'] ? this.$store.state.setting['site.enabled'] : 0
        },
        set (value) {
          this.$store.commit('single', {
            key: 'site.enabled',
            value: value
          })
        }
      },
      name: {
        get () {
          return this.$store.state.setting['site.name']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'site.name',
            value: value
          })
        }
      },
      domain: {
        get () {
          return this.$store.state.setting['site.domain']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'site.domain',
            value: value
          })
        }
      },
      beian: {
        get () {
          return this.$store.state.setting['site.beian']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'site.beian',
            value: value
          })
        }
      },
      company: {
        get () {
          return this.$store.state.setting['site.company']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'site.company',
            value: value
          })
        }
      },
      copyright: {
        get () {
          return this.$store.state.setting['site.copyright']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'site.copyright',
            value: value
          })
        }
      },
      statistics: {
        get () {
          return this.$store.state.setting['site.statistics']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'site.statistics',
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
        _this.$http.post(window.api + '/setting/set', {
          enabled: _this.enabled,
          name: _this.name,
          domain: _this.domain,
          beian: _this.beian,
          company: _this.company,
          copyright: _this.copyright,
          statistics: _this.statistics
        }).then(response => {
          _this.$store.commit('setting', response.body.data)
          _this.$store.commit('message', {
            show: true,
            type: 'notice',
            text: '更新设置成功！'
          })
          _this.$jquery(e.target).prop('disabled', false)
          _this.$jquery(e.target).text('保存')
        }, response => {
          window.alert('更新设置失败！')
          _this.$jquery(e.target).prop('disabled', false)
          _this.$jquery(e.target).text('保存')
        })
      }
    },
    mounted () {
      let _this = this
      _this.$store.commit('title', '配置管理 - Notadd Administration')
      if (_this.enabled !== '0' && _this.enabled !== '1') {
        _this.enabled = '1'
      }
    }
  }
</script>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">全局设置</h3>
        </div>
        <div class="box-body">
            <div class="form-horizontal">
                <div class="form-group">
                    <label class="col-sm-1 control-label">站点开启</label>
                    <div class="col-sm-3">
                        <div class="btn-group btn-switch">
                            <label class="btn btn-primary" :class="{ active: enabled === '1' }">
                                <input type="radio" v-model="enabled" value="1"> 开启
                            </label>
                            <label class="btn btn-primary" :class="{ active: enabled === '0' }">
                                <input type="radio" v-model="enabled" value="0"> 关闭
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('name') }">
                    <label class="col-sm-1 control-label">网站名称</label>
                    <div class="col-sm-3">
                        <input name="name" type="text" class="form-control" placeholder="请输入网站名称" v-model="name"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('name')">网站名称不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-1 control-label">网站域名</label>
                    <div class="col-sm-3">
                        <input name="domain" type="text" class="form-control" placeholder="请输入网站域名" v-model="domain"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('domain')">网站域名不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('beian') }">
                    <label class="col-sm-1 control-label">备案信息</label>
                    <div class="col-sm-3">
                        <input name="beian" type="text" class="form-control" placeholder="请输入备案信息" v-model="beian"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('beian')">备案信息不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('company') }">
                    <label class="col-sm-1 control-label">公司名称</label>
                    <div class="col-sm-3">
                        <input name="company" type="text" class="form-control" placeholder="请输入公司名称" v-model="company"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('company')">公司名称不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('copyright') }">
                    <label class="col-sm-1 control-label">版权信息</label>
                    <div class="col-sm-3">
                        <input name="copyright" type="text" class="form-control" placeholder="请输入版权信息"
                               v-model="copyright" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('copyright')">版权信息不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('statistics') }">
                    <label class="col-sm-1 control-label">统计代码</label>
                    <div class="col-sm-3">
                        <textarea name="statistics" class="form-control" rows="6" placeholder="请输入统计代码"
                                  v-model="statistics" v-validate data-vv-rules="required"></textarea>
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('statistics')">统计代码不能为空</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-footer">
            <button class="btn btn-primary btn-submit" @click="submit" :disabled="errors.any()">保存</button>
        </div>
    </div>
</template>