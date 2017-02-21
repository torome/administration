<script>
  import DatePicker from 'vuejs-datepicker'
  import Editor from '../../libraries/Editor'
  import Modal from '../../libraries/Modal'
  import Tags from '../../libraries/InputTag'
  export default {
    beforeRouteLeave (to, from, next) {
      this.working = false
      next()
    },
    components: {
      DatePicker,
      Editor,
      Modal,
      Tags
    },
    computed: {
      auto: {
        get () {
          return this.$store.state.setting.hasOwnProperty('article.save.auto') ? this.$store.state.setting['article.save.auto'] : '0'
        },
        set (value) {
          this.$store.commit('single', {
            key: 'article.save.auto',
            value: value
          })
        }
      }
    },
    data () {
      return {
        category: {
          id: 0,
          list: [],
          text: '选择分类[未分类(0)]'
        },
        content: '',
        date: '',
        hidden: '0',
        image: '',
        source: {
          author: '',
          link: ''
        },
        sticky: '0',
        summary: '',
        tags: [],
        title: '',
        working: false
      }
    },
    methods: {
      categorySelect: function () {
        this.$refs.modal.open()
      },
      categorySelectDone: function (category) {
        let _this = this
        _this.category.id = category.id
        _this.category.text = '选择分类[' + category.title + '(' + category.id + ')]'
        _this.$refs.modal.close()
      },
      imageSelected: function (e) {
        let _file = e.target.files[0]
        let _this = this
        const _reader = new global.FileReader()
        _reader.onload = () => {
          _this.$refs.image.src = _reader.result
        }
        _reader.readAsDataURL(_file)
        _this.image = _file
      },
      submit: function (e) {
        let _this = this
        _this.$validator.validateAll()
        if (_this.errors.any()) {
          return false
        }
        const _formData = new window.FormData()
        _formData.append('content', _this.content)
        _formData.append('category_id', _this.category.id)
        _formData.append('date', _this.date)
        _formData.append('hidden', _this.hidden)
        _formData.append('image', _this.image)
        _formData.append('sticky', _this.sticky)
        _formData.append('summary', _this.summary)
        _formData.append('tags', _this.tags)
        _formData.append('title', _this.title)
        _formData.append('source_author', _this.source.author)
        _formData.append('source_link', _this.source.link)
        _this.$http.post(window.api + '/article/create', _formData).then(function (response) {
          if (response.body.data.id && response.body.data.id > 0) {
            _this.$store.commit('message', {
              show: true,
              type: 'notice',
              text: response.body.message
            })
            _this.$router.push('/content/article/all')
          }
        }, function (response) {
          console.log(response.body)
        })
      }
    },
    mounted () {
      let _this = this
      _this.working = true
      _this.$store.commit('title', '添加文章 - 文章 - Notadd Administration')
      if (this.auto === '1') {
        window.setInterval(function () {
          if (_this.title && _this.working) {
            const _formData = new window.FormData()
            _formData.append('content', _this.content)
            _formData.append('date', _this.date)
            _formData.append('hidden', _this.hidden)
            _formData.append('image', _this.image)
            _formData.append('sticky', _this.sticky)
            _formData.append('summary', _this.summary)
            _formData.append('tags', _this.tags)
            _formData.append('title', _this.title)
            _formData.append('source_author', _this.source.author)
            _formData.append('source_link', _this.source.link)
            _this.$http.post(window.api + '/article/draft/create', _formData).then(function (response) {
              if (response.body.data.id && response.body.data.id > 0) {
                _this.$store.commit('message', {
                  show: true,
                  type: 'notice',
                  text: '自动保存草稿成功！'
                })
              }
            }, function (response) {
              console.log(response.body)
            })
          } else {
            return false
          }
        }, 10000)
      }
      _this.$http.post(window.api + '/category/fetch').then(response => {
        _this.category.list = response.body.data
        console.log(_this.category.list)
      })
    },
    watch: {
      auto: {
        handler: function (val) {
          let _this = this
          _this.$http.post(window.api + '/article/auto', {
            auto: _this.auto
          }).then(function (response) {
            _this.$store.commit('setting', response.body.data)
            _this.$store.commit('message', {
              show: true,
              type: 'notice',
              text: '更新设置成功！自动保存功能将在下次使用时生效或失效！'
            })
          }, function (response) {
            window.alert('更新设置失败！')
          })
        }
      }
    }
  }
</script>
<style scoped>
    .article-main {
        padding-bottom: 40px;
        padding-top: 40px;
    }

    .article-extend {
        padding-bottom: 20px;
        padding-top: 20px;
    }

    .article-extend > .form-horizontal > .form-group {
        border-bottom: 1px solid #f2f2f2;
        padding-bottom: 20px;
        padding-top: 20px;
    }

    .article-extend > .form-horizontal > .form-group:last-child {
        border-bottom: none;
    }

    .img-responsive {
        border: 2px solid #ccc !important;
        margin-top: 20px;
    }

    .list-group > .list-group-item {
        border-width: 0;
        padding: 0;
    }

    .list-group > .list-group-item > .list-group-item-content {
        border-radius: 4px;
        cursor: pointer;
        height: 30px;
        line-height: 30px;
        margin-top: 5px;
    }

    .list-group > .list-group-item > .list-group-item-content:hover {
        background: #efefef;
    }

    .list-group > .list-group-item > .list-group-item-content > em {
        border-radius: 4px;
        float: left;
        height: 16px;
        margin: 7px;
        width: 16px;
    }

    .list-group > .list-group-item > .list-group-item-content:hover > em {
        opacity: 0;
    }

    .list-group > .list-group-item > .list-group-item-content > .btn {
        background: transparent;
        border-radius: 4px 0 0 4px;
        float: right;
        opacity: 0;
        padding: 5px 10px;
    }

    .list-group > .list-group-item > .list-group-item-content:hover > .btn {
        opacity: 1;
    }

    .list-group > .list-group-item > .list-group {
        margin-bottom: 0;
        padding-left: 26px;
    }
</style>
<template>
    <div class="row">
        <div class="col-md-8">
            <div class="box box-solid">
                <div class="box-body article-main">
                    <div class="form-group" :class="{ 'has-error': errors.has('title') }">
                        <label>标题</label>
                        <input class="form-control" name="title" placeholder="请在此输入标题" type="text" v-model="title"
                               v-validate data-vv-rules="required">
                    </div>
                    <div class="form-group">
                        <label>摘要</label>
                        <textarea class="form-control" rows="5" v-model="summary"></textarea>
                    </div>
                    <div class="form-group">
                        <label>内容</label>
                        <editor height="400" width="100%" v-model="content" :content="content"></editor>
                    </div>
                    <button class="btn btn-primary btn-submit" @click="submit" :disabled="errors.any()">保存</button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box box-solid">
                <div class="box-body article-extend">
                    <div class="form-horizontal">
                        <div class="form-group">
                            <label class="col-md-4 control-label">自动保存草稿</label>
                            <div class="col-md-8">
                                <div class="btn-group btn-switch">
                                    <label class="btn btn-primary" :class="{ active: auto === '1' }">
                                        <input type="radio" v-model="auto" value="1"> 开启
                                    </label>
                                    <label class="btn btn-primary" :class="{ active: auto === '0' }">
                                        <input type="radio" v-model="auto" value="0"> 关闭
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group" style="color: #999999">10分钟保存一次，更改设置后，下次生效</div>
                    </div>
                </div>
            </div>
            <div class="box box-solid">
                <div class="box-body article-extend">
                    <div class="form-horizontal">
                        <div class="form-group">
                            <label class="col-md-4 control-label">分类</label>
                            <div class="col-md-8">
                                <button class="btn btn-file btn-primary" @click="categorySelect">
                                    <i class="fa fa-inbox"></i> {{ category.text }}
                                </button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-4 control-label">上传缩略图</label>
                            <div class="col-md-8">
                                <button class="btn btn-file btn-primary">
                                    <i class="fa fa-image"></i> 上传图片
                                    <input type="file" @change="imageSelected">
                                </button>
                                <img class="img-responsive" :src="image" ref="image" v-show="image">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-4 control-label">置顶</label>
                            <div class="col-md-8">
                                <div class="btn-group btn-switch">
                                    <label class="btn btn-primary" :class="{ active: hidden === '1' }">
                                        <input type="radio" v-model="hidden" value="1"> 开启
                                    </label>
                                    <label class="btn btn-primary" :class="{ active: hidden === '0' }">
                                        <input type="radio" v-model="hidden" value="0"> 关闭
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-4 control-label">隐藏</label>
                            <div class="col-md-8">
                                <div class="btn-group btn-switch">
                                    <label class="btn btn-primary" :class="{ active: sticky === '1' }">
                                        <input type="radio" v-model="sticky" value="1"> 开启
                                    </label>
                                    <label class="btn btn-primary" :class="{ active: sticky === '0' }">
                                        <input type="radio" v-model="sticky" value="0"> 关闭
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-4 control-label">发布时间</label>
                            <div class="col-md-8">
                                <date-picker format="yyyy-MM-dd" language="zh" input-class="form-control"
                                             v-model="date"></date-picker>
                            </div>
                        </div>
                        <div class="form-group">
                            <tags placeholder="添加标签" v-model="tags" :tags="tags"></tags>
                        </div>
                        <div class="form-group">
                            <label class="col-md-4 control-label">来源</label>
                            <div class="col-md-8">
                                <input class="form-control" v-model="source.author">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-4 control-label">来源链接</label>
                            <div class="col-md-8">
                                <input class="form-control" v-model="source.link">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <modal ref="modal">
            <div slot="title">
                <div class="modal-title">{{ category.text }}</div>
            </div>
            <div slot="body">
                <ul class="list-group">
                    <li class="list-group-item clear-fix" v-for="item in category.list" @click="categorySelectDone(item)">
                        <div class="list-group-item-content">
                            <em :style="{ background: item.background_color }"></em>
                            <span>{{ item.title }}</span>
                            <i class="handle"></i>
                        </div>
                        <ol class="list-group">
                            <li class="list-group-item clear-fix" v-for="sub in item.children" @click="categorySelectDone(item)">
                                <div class="list-group-item-content">
                                    <em :style="{ background: sub.background_color }"></em>
                                    <span>{{ sub.title }}</span>
                                    <i class="handle"></i>
                                </div>
                                <ol class="list-group">
                                    <li class="list-group-item clear-fix" v-for="child in sub.children"
                                         @click="categorySelectDone(item)">
                                        <div class="list-group-item-content">
                                            <em :style="{ background: child.background_color }"></em>
                                            <span>{{ child.title }}</span>
                                            <i class="handle"></i>
                                        </div>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                </ul>
            </div>
        </modal>
    </div>
</template>