<script>
  import Editor from '../../libraries/Editor'
  import Modal from '../../libraries/Modal'
  import Vue from 'vue'
  export default {
    beforeRouteEnter (to, from, next) {
      Vue.http.post(window.api + '/page/find', {
        id: to.params.id
      }).then(function (response) {
        next((vm) => {
          let article = response.body.data
          vm.alias = article.alias
          vm.category.id = article.category ? article.category.id : 0
          vm.category.text = article.category ? '选择分类[' + article.category.title + '(' + article.category.id + ')]' : '选择分类[未分类(0)]'
          vm.content = article.content
          vm.enabled = article.enabled.toString()
          vm.title = article.title
        })
      }, function (response) {
        console.log(response.body)
      })
    },
    components: {
      Editor,
      Modal
    },
    data () {
      return {
        alias: '',
        category: {
          id: 0,
          list: [],
          text: '选择分类[未分类(0)]'
        },
        content: '',
        enabled: '',
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
      submit: function (e) {
        let _this = this
        _this.$validator.validateAll()
        if (_this.errors.any()) {
          return false
        }
        _this.$http.post(window.api + '/page/edit', {
          id: _this.$route.params.id,
          alias: _this.alias,
          category_id: _this.category.id,
          content: _this.content,
          enabled: _this.enabled,
          title: _this.title
        }).then(function (response) {
          _this.$store.commit('message', {
            show: true,
            type: 'notice',
            text: response.body.message
          })
          _this.$router.push('/content/page/all')
        }, function (response) {
          console.log(response.body)
        })
      }
    },
    mounted () {
      let _this = this
      _this.$store.commit('title', '编辑页面 - 文章 - Notadd Administration')
      _this.$http.post(window.api + '/page/category/fetch').then(response => {
        _this.category.list = response.body.data
      })
    }
  }
</script>
<style>
    .page-main {
        padding-bottom: 40px;
        padding-top: 40px;
    }

    .btn-switch {
        display: block;
        overflow: hidden;
    }
</style>
<template>
    <div class="box box-solid">
        <div class="box-body page-main">
            <div class="form-group" :class="{ 'has-error': errors.has('title') }">
                <label>标题</label>
                <input class="form-control" name="title" placeholder="请在此输入标题" type="text" v-model="title" v-validate
                       data-vv-rules="required">
            </div>
            <div class="form-group">
                <label>别名</label>
                <input class="form-control" name="title" placeholder="请在此输入别名" type="text" v-model="alias">
            </div>
            <div class="form-group">
                <label>分类</label>
                <div>
                    <button class="btn btn-file btn-primary" @click="categorySelect">
                        <i class="fa fa-inbox"></i> {{ category.text }}
                    </button>
                </div>
            </div>
            <div class="form-group">
                <label>是否启用</label>
                <div class="btn-group btn-switch">
                    <label class="btn btn-primary" :class="{ active: enabled === '1' }">
                        <input type="radio" v-model="enabled" value="1"> 开启
                    </label>
                    <label class="btn btn-primary" :class="{ active: enabled === '0' }">
                        <input type="radio" v-model="enabled" value="0"> 关闭
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label>内容</label>
                <editor height="400" width="100%" v-model="content" :content="content"></editor>
            </div>
            <div class="btn-group">
                <button class="btn btn-primary btn-submit" :disabled="errors.any()" @click="submit">保存</button>
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