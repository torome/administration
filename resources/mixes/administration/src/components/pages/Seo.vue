<script>
  export default {
    computed: {
      description: {
        get () {
          return this.$store.state.setting.hasOwnProperty('seo.description') ? this.$store.state.setting['seo.description'] : ''
        },
        set (value) {
          this.$store.commit('single', {
            key: 'seo.description',
            value: value
          })
        }
      },
      keyword: {
        get () {
          return this.$store.state.setting.hasOwnProperty('seo.keyword') ? this.$store.state.setting['seo.keyword'] : ''
        },
        set (value) {
          this.$store.commit('single', {
            key: 'seo.keyword',
            value: value
          })
        }
      },
      title: {
        get () {
          return this.$store.state.setting.hasOwnProperty('seo.title') ? this.$store.state.setting['seo.title'] : ''
        },
        set (value) {
          this.$store.commit('single', {
            key: 'seo.title',
            value: value
          })
        }
      }
    },
    methods: {
      submit: function () {
        let _this = this
        _this.$validator.validateAll()
        if (_this.errors.any()) {
          return false
        }
        _this.$jquery('button.btn-submit').prop('disabled', true)
        _this.$jquery('button.btn-submit').text('提交中...')
        _this.$http.post(window.api + '/seo', {
          description: _this.description,
          keyword: _this.keyword,
          title: _this.title
        }).then(response => {
          _this.$store.commit('setting', response.data.data)
          _this.$store.commit('message', {
            show: true,
            type: 'notice',
            text: '更新SEO设置成功！'
          })
          _this.$jquery('button.btn-submit').prop('disabled', false)
          _this.$jquery('button.btn-submit').text('保存')
        }).catch(() => {
          _this.$jquery('button.btn-submit').prop('disabled', false)
          _this.$jquery('button.btn-submit').text('保存')
        })
      }
    },
    mounted () {
      this.$store.commit('title', '全局SEO配置 - Notadd Administration')
    }
  }
</script>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">全局SEO配置</h3>
        </div>
        <div class="box-body">
            <div class="form-horizontal" @keyup.enter="submit">
                <div class="form-group" :class="{ 'has-error': errors.has('title') }">
                    <label class="col-sm-1 control-label">标题</label>
                    <div class="col-sm-3">
                        <input name="title" type="text" class="form-control" placeholder="请输入标题" v-model="title"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">支持的参数：<strong>{site}</strong>网站名称</span>
                        <span class="help-block" v-show="errors.has('title')">标题不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('description') }">
                    <label class="col-sm-1 control-label">描述</label>
                    <div class="col-sm-3">
                        <input name="description" type="text" class="form-control" placeholder="请输入描述"
                               v-model="description" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">支持的参数：<strong>{site}</strong>网站名称</span>
                        <span class="help-block" v-show="errors.has('description')">描述不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('keyword') }">
                    <label class="col-sm-1 control-label">关键字</label>
                    <div class="col-sm-3">
                        <input name="keyword" type="text" class="form-control" placeholder="请输入关键词名称" v-model="keyword"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">支持的参数：<strong>{site}</strong>网站名称</span>
                        <span class="help-block" v-show="errors.has('keyword')">关键字不能为空</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-footer">
            <button class="btn btn-primary btn-submit" :disabled="errors.any()" @click="submit">保存</button>
        </div>
    </div>
</template>