<script>
  import DatePicker from 'vuejs-datepicker'
  import Editor from '../../libraries/Editor'
  import Modal from '../../libraries/Modal'
  import Tags from '../../libraries/InputTag'
  import Vue from 'vue'
  export default {
    beforeRouteEnter (to, from, next) {
      Vue.http.post(window.api + '/article/find', {
        id: to.params.id
      }).then(function (response) {
        next((vm) => {
          let article = response.body.data
          vm.category.id = article.category ? article.category.id : 0
          vm.category.text = article.category ? '选择分类[' + article.category.title + '(' + article.category.id + ')]' : '选择分类[未分类(0)]'
          vm.title = article.title
          vm.date = article.created_at
          vm.content = article.content
          vm.summary = article.description
          vm.hidden = article.is_hidden.toString()
          vm.image = article.thumb_image ? window.url + '/' + article.thumb_image : ''
          vm.sticky = article.is_sticky.toString()
          if (article.keyword.length) {
            vm.tags = article.keyword.split(',')
          }
          vm.source = {
            author: article['source_author'],
            link: article['source_link']
          }
          vm.$store.commit('title', '编辑文章：' + vm.title + ' - 文章 - Notadd Administration')
        })
      }, function (response) {
        window.alert('初始化失败！')
      })
    },
    components: {
      DatePicker,
      Editor,
      Modal,
      Tags
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
        title: ''
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
        _formData.append('date', _this.date)
        _formData.append('hidden', _this.hidden)
        _formData.append('id', _this.$route.params.id)
        _formData.append('image', _this.image)
        _formData.append('sticky', _this.sticky)
        _formData.append('summary', _this.summary)
        _formData.append('tags', _this.tags)
        _formData.append('title', _this.title)
        _formData.append('source_author', _this.source.author)
        _formData.append('source_link', _this.source.link)
        _this.$http.post(window.api + '/article/edit', _formData).then(function (response) {
          _this.$store.commit('message', {
            show: true,
            type: 'notice',
            text: response.body.message
          })
          _this.$router.push('/content/article/all')
        }, function (response) {
          console.log(response.body)
        })
      }
    },
    mounted () {
      let _this = this
      _this.$http.post(window.api + '/category/fetch').then(response => {
        _this.category.list = response.body.data
      })
    }
  }
</script>
<style scoped>
    .article-main {
        padding-bottom: 40px;
        padding-top: 40px;
    }

    .article-extend {
        padding-bottom: 40px;
        padding-top: 20px;
    }

    .article-extend > .form-horizontal {

    }

    .article-extend > .form-horizontal > .form-group {
        border-bottom: 1px solid #f2f2f2;
        margin-bottom: 15px;
        padding-bottom: 20px;
        padding-top: 20px;
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
                    <div class="form-group">
                        <label>标题</label>
                        <input type="text" class="form-control" placeholder="请在此输入标题" v-model="title">
                    </div>
                    <div class="form-group">
                        <label>摘要</label>
                        <textarea name="" class="form-control" rows="5" v-model="summary"></textarea>
                    </div>
                    <div class="form-group">
                        <label>内容</label>
                        <editor height="400" width="100%" v-model="content" :content="content"></editor>
                    </div>
                    <button class="btn btn-primary btn-submit" @click="submit">保存</button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
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
                                    <i class="fa fa-image"></i>上传图片
                                    <input type="file" @change="imageSelected">
                                </button>
                                <img class="img-responsive" :src="image" ref="image" v-show="image">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-4 control-label">置顶</label>
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
                            <label class="col-md-4 control-label">隐藏</label>
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