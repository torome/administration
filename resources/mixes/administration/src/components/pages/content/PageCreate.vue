<script>
  import Editor from '../../libraries/Editor'
  import Modal from '../../libraries/Modal'
  export default {
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
        enabled: '1',
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
        console.log(_this.category.id)
        _this.$http.post(window.api + '/page/create', {
          alias: _this.alias,
          category: _this.category.id,
          content: _this.content,
          enabled: _this.enabled,
          title: _this.title
        }).then(function (response) {
          if (response.body.data.id && response.body.data.id > 0) {
            _this.$store.commit('message', {
              show: true,
              type: 'notice',
              text: response.body.message
            })
            _this.$router.push('/content/page/all')
          }
        }, function (response) {
          console.log(response.body)
        })
      }
    },
    mounted () {
      let _this = this
      _this.$store.commit('title', '添加页面 - 页面 - Notadd Administration')
      _this.$http.post(window.api + '/page/category/fetch').then(response => {
        _this.category.list = response.body.data
        console.log(_this.category.list)
      })
    }
  }
</script>
<style>
    .page-main {
        padding-bottom: 40px;
        padding-top: 40px;
        margin-left: auto;
        margin-right: auto;
        max-width: 1000px;
    }

    .btn-switch {
        display: block;
        overflow: hidden;
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
                <editor height="400" width="100%" v-model="content" content=""></editor>
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