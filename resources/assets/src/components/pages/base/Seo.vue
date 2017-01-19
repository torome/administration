<script>
  export default {
    created () {
    },
    computed: {
      description: {
        get () {
          return this.$store.state.setting['seo.description']
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
          return this.$store.state.setting['seo.keyword']
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
          return this.$store.state.setting['seo.title']
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
      submit: function (e) {
        this.$validator.validateAll()
        if (this.errors.any()) {
          return false
        }
        this.$http.post(window.api + '/seo', {
          description: this.description,
          keyword: this.keyword,
          title: this.title
        }).then(response => {
          this.$store.commit('setting', response.body.data)
          this.$router.push('/seo')
        }, response => {
          window.alert('更新设置失败！')
        })
      }
    },
    mounted () {
      this.$store.commit('title', 'SEO配置 - Notadd Administration')
    }
  }
</script>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">SEO管理</h3>
        </div>
        <div class="box-body">
            <div class="form-horizontal">
                <div class="form-group" :class="{ 'has-error': errors.has('title') }">
                    <label class="col-sm-1 control-label">标题</label>
                    <div class="col-sm-3">
                        <input name="title" type="text" class="form-control" placeholder="请输入标题" v-model="title" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('title')">标题不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('description') }">
                    <label class="col-sm-1 control-label">描述</label>
                    <div class="col-sm-3">
                        <input name="description" type="text" class="form-control" placeholder="请输入描述" v-model="description" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('description')">描述不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('keyword') }">
                    <label class="col-sm-1 control-label">关键字</label>
                    <div class="col-sm-3">
                        <input name="keyword" type="text" class="form-control" placeholder="请输入关键词名称" v-model="keyword" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('keyword')">关键字不能为空</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-footer">
            <button class="btn btn-primary" :disabled="errors.any()" @click="submit">保存</button>
        </div>
    </div>
</template>