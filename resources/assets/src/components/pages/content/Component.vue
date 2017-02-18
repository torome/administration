<script>
  export default {
    computed: {
      articleDescription: {
        get () {
          return this.$store.state.setting.hasOwnProperty('content.seo.article.description') ? this.$store.state.setting['content.seo.article.description'] : ''
        },
        set (value) {
          this.$store.commit('single', {
            key: 'content.seo.article.description',
            value: value
          })
        }
      },
      articleKeyword: {
        get () {
          return this.$store.state.setting.hasOwnProperty('content.seo.article.keyword') ? this.$store.state.setting['content.seo.article.keyword'] : ''
        },
        set (value) {
          this.$store.commit('single', {
            key: 'content.seo.article.keyword',
            value: value
          })
        }
      },
      articleTitle: {
        get () {
          return this.$store.state.setting.hasOwnProperty('content.seo.article.title') ? this.$store.state.setting['content.seo.article.title'] : ''
        },
        set (value) {
          this.$store.commit('single', {
            key: 'content.seo.article.title',
            value: value
          })
        }
      },
      categoryDescription: {
        get () {
          return this.$store.state.setting.hasOwnProperty('content.seo.category.description') ? this.$store.state.setting['content.seo.category.description'] : ''
        },
        set (value) {
          this.$store.commit('single', {
            key: 'content.seo.category.description',
            value: value
          })
        }
      },
      categoryKeyword: {
        get () {
          return this.$store.state.setting.hasOwnProperty('content.seo.category.keyword') ? this.$store.state.setting['content.seo.category.keyword'] : ''
        },
        set (value) {
          this.$store.commit('single', {
            key: 'content.seo.category.keyword',
            value: value
          })
        }
      },
      categoryTitle: {
        get () {
          return this.$store.state.setting.hasOwnProperty('content.seo.category.title') ? this.$store.state.setting['content.seo.category.title'] : ''
        },
        set (value) {
          this.$store.commit('single', {
            key: 'content.seo.category.title',
            value: value
          })
        }
      },
      pageDescription: {
        get () {
          return this.$store.state.setting.hasOwnProperty('content.seo.page.description') ? this.$store.state.setting['content.seo.page.description'] : ''
        },
        set (value) {
          this.$store.commit('single', {
            key: 'content.seo.page.description',
            value: value
          })
        }
      },
      pageKeyword: {
        get () {
          return this.$store.state.setting.hasOwnProperty('content.seo.page.keyword') ? this.$store.state.setting['content.seo.page.keyword'] : ''
        },
        set (value) {
          this.$store.commit('single', {
            key: 'content.seo.page.keyword',
            value: value
          })
        }
      },
      pageTitle: {
        get () {
          return this.$store.state.setting.hasOwnProperty('content.seo.page.title') ? this.$store.state.setting['content.seo.page.title'] : ''
        },
        set (value) {
          this.$store.commit('single', {
            key: 'content.seo.page.title',
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
        _this.$http.post(window.api + '/content/component', {
          articleDescription: _this.articleDescription,
          articleKeyword: _this.articleKeyword,
          articleTitle: _this.articleTitle,
          categoryDescription: _this.categoryDescription,
          categoryKeyword: _this.categoryKeyword,
          categoryTitle: _this.categoryTitle,
          pageDescription: _this.pageDescription,
          pageKeyword: _this.pageKeyword,
          pageTitle: _this.pageTitle
        }).then(function (response) {
          _this.$store.commit('setting', response.body.data)
        }, function (response) {
          console.log(response.body)
        })
      }
    },
    mounted () {
      this.$store.commit('title', 'SEO配置 - 文章 - Notadd Administration')
    }
  }
</script>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">文章SEO配置</h3>
        </div>
        <div class="box-body">
            <div class="form-horizontal">
                <div class="form-group" :class="{ 'has-error': errors.has('articleTitle') }">
                    <label class="col-sm-1 control-label">标题</label>
                    <div class="col-sm-3">
                        <input name="articleTitle" type="text" class="form-control" placeholder="请输入标题"
                               v-model="articleTitle" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">支持的参数：<strong>{site}</strong>网站名称，<strong>{tag}</strong>文章标签，<strong>{title}</strong>文章标题</span>
                        <span class="help-block" v-show="errors.has('articleTitle')">标题不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('articleDescription') }">
                    <label class="col-sm-1 control-label">描述</label>
                    <div class="col-sm-3">
                        <input name="articleDescription" type="text" class="form-control" placeholder="请输入描述"
                               v-model="articleDescription" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">支持的参数：<strong>{site}</strong>网站名称，<strong>{tag}</strong>文章标签，<strong>{title}</strong>文章标题</span>
                        <span class="help-block" v-show="errors.has('articleDescription')">描述不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('articleKeyword') }">
                    <label class="col-sm-1 control-label">关键字</label>
                    <div class="col-sm-3">
                        <input name="articleKeyword" type="text" class="form-control" placeholder="请输入关键词名称"
                               v-model="articleKeyword" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">支持的参数：<strong>{site}</strong>网站名称，<strong>{tag}</strong>文章标签，<strong>{title}</strong>文章标题</span>
                        <span class="help-block" v-show="errors.has('articleKeyword')">关键字不能为空</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-header with-border">
            <h3 class="box-title">分类SEO配置</h3>
        </div>
        <div class="box-body">
            <div class="form-horizontal">
                <div class="form-group" :class="{ 'has-error': errors.has('categoryTitle') }">
                    <label class="col-sm-1 control-label">标题</label>
                    <div class="col-sm-3">
                        <input name="categoryTitle" type="text" class="form-control" placeholder="请输入标题"
                               v-model="categoryTitle" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">支持的参数：<strong>{site}</strong>网站名称，<strong>{title}</strong>文章标题</span>
                        <span class="help-block" v-show="errors.has('categoryTitle')">标题不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('categoryDescription') }">
                    <label class="col-sm-1 control-label">描述</label>
                    <div class="col-sm-3">
                        <input name="categoryDescription" type="text" class="form-control" placeholder="请输入描述"
                               v-model="categoryDescription" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">支持的参数：<strong>{site}</strong>网站名称，<strong>{title}</strong>文章标题</span>
                        <span class="help-block" v-show="errors.has('categoryDescription')">描述不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('categoryKeyword') }">
                    <label class="col-sm-1 control-label">关键字</label>
                    <div class="col-sm-3">
                        <input name="categoryKeyword" type="text" class="form-control" placeholder="请输入关键词名称"
                               v-model="categoryKeyword" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">支持的参数：<strong>{site}</strong>网站名称，<strong>{title}</strong>文章标题</span>
                        <span class="help-block" v-show="errors.has('categoryKeyword')">关键字不能为空</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-header with-border">
            <h3 class="box-title">页面SEO配置</h3>
        </div>
        <div class="box-body">
            <div class="form-horizontal">
                <div class="form-group" :class="{ 'has-error': errors.has('pageTitle') }">
                    <label class="col-sm-1 control-label">标题</label>
                    <div class="col-sm-3">
                        <input name="pageTitle" type="text" class="form-control" placeholder="请输入标题" v-model="pageTitle"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">支持的参数：<strong>{site}</strong>网站名称，<strong>{title}</strong>文章标题</span>
                        <span class="help-block" v-show="errors.has('pageTitle')">标题不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('pageDescription') }">
                    <label class="col-sm-1 control-label">描述</label>
                    <div class="col-sm-3">
                        <input name="pageDescription" type="text" class="form-control" placeholder="请输入描述"
                               v-model="pageDescription" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">支持的参数：<strong>{site}</strong>网站名称，<strong>{title}</strong>文章标题</span>
                        <span class="help-block" v-show="errors.has('pageDescription')">描述不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('pageKeyword') }">
                    <label class="col-sm-1 control-label">关键字</label>
                    <div class="col-sm-3">
                        <input name="pageKeyword" type="text" class="form-control" placeholder="请输入关键词名称"
                               v-model="pageKeyword" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">支持的参数：<strong>{site}</strong>网站名称，<strong>{title}</strong>文章标题</span>
                        <span class="help-block" v-show="errors.has('pageKeyword')">关键字不能为空</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-footer">
            <button class="btn btn-primary btn-submit" :disabled="errors.any()" @click="submit">保存</button>
        </div>
    </div>
</template>