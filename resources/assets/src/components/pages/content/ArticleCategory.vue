<script>
  import Modal from 'vue2-bootstrap-modal'
  import Vue from 'vue'

  export default {
    beforeRouteEnter (to, from, next) {
      Vue.http.post(window.api + '/category/fetch').then(function (response) {
        next((vm) => {
          vm.items = response.body.data
        })
      }, function (response) {
        window.alert('初始化失败！')
      })
    },
    components: {
      Modal
    },
    data () {
      return {
        items: [],
        modal: {
          alias: '',
          background_color: '',
          background_image: '',
          color: '',
          description: '',
          enabled: '',
          id: 0,
          link: '',
          name: '',
          pattern: 'create',
          pagination: 30,
          seo_title: '',
          seo_keyword: '',
          seo_description: '',
          title: '创建分类',
          top_image: ''
        }
      }
    },
    methods: {
      create: function () {
        this.modal.color = ''
        this.modal.description = ''
        this.modal.link = ''
        this.modal.name = ''
        this.modal.title = '创建分类'
        this.$refs.theModal.open()
      },
      edit: function (item) {
        this.modal.id = item.id
        this.modal.color = item.color
        this.modal.description = item.description
        this.modal.name = item.text
        this.modal.title = '编辑分类：' + item.text
        this.modal.pattern = 'edit'
        this.$refs.theModal.open()
      },
      submit: function (e) {
        if (this.modal.pattern === 'create') {
          console.log('分类创建模式')
        } else if (this.modal.pattern === 'edit') {
          console.log('分类编辑模式')
        }
      }
    },
    mounted () {
      let _this = this
      _this.$store.commit('title', '分类管理 - 文章 - Notadd Administration')
    },
    updated () {
      let _this = this
      let sort = this.$jquery(this.$el).find('ul, ol').sortable({
        connectWith: 'article-category'
      })
      _this.$jquery(sort).each(function (key, item) {
        if (parseInt(key) === 0) {
          _this.$jquery(item).on('sortstop', function () {
            const order = _this.$jquery('ul.list-group > li').map(function () {
              return {
                id: _this.$jquery(this).data('id'),
                children: _this.$jquery(this).children('ol').children('li').map(function () {
                  return {
                    id: _this.$jquery(this).data('id'),
                    children: _this.$jquery(this).find('li').map(function () {
                      return {
                        id: _this.$jquery(this).data('id')
                      }
                    })
                  }
                }).get()
              }
            }).get()
            _this.$http.post(window.api + '/category/sort', {
              data: order
            }).then(function (response) {
              console.log(response.body)
            }, function (response) {
              console.log(response.body)
            })
          })
        }
      })
    },
    watch: {
      items: {
        deep: true,
        handler: function (val) {
        }
      },
      modal: {
        deep: true,
        handler: function (val) {
        }
      }
    }
  }
</script>
<style scoped>
    .box-body {
        padding-bottom: 20px;
        padding-top: 20px;
    }

    .list-group > .list-group-item {
        border-width: 0;
        padding: 0;
    }

    .list-group > .list-group-item > .list-group-item-content {
        border-radius: 4px;
        cursor: move;
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

    ol.list-group {
        min-height: 5px;
    }

    .modal-content {
        border: none;
        box-shadow: none;
    }

    .modal-content > .form-group:last-child {
        margin-bottom: 0;
    }

    .modal-footer {
        border: none;
        padding: 0;
    }
</style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">分类管理</h3>
        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item clear-fix" v-for="item in items" :data-id="item.id">
                            <div class="list-group-item-content">
                                <em :style="{ background: item.color }"></em>
                                <span>{{ item.text }}</span>
                                <i class="handle"></i>
                                <button class="btn" @click="edit(item)"><i class="fa fa-fw fa-pencil"></i></button>
                            </div>
                            <ol class="list-group">
                                <li class="list-group-item clear-fix" v-for="sub in item.subs" :data-id="sub.id">
                                    <div class="list-group-item-content">
                                        <em :style="{ background: sub.color }"></em>
                                        <span>{{ sub.text }}</span>
                                        <i class="handle"></i>
                                        <button class="btn" @click="edit(sub)"><i class="fa fa-fw fa-pencil"></i></button>
                                    </div>
                                    <ol class="list-group">
                                        <li class="list-group-item clear-fix" v-for="child in sub.subs" :data-id="child.id">
                                            <div class="list-group-item-content">
                                                <em :style="{ background: child.color }"></em>
                                                <span>{{ child.text }}</span>
                                                <i class="handle"></i>
                                                <button class="btn" @click="edit(child)"><i class="fa fa-fw fa-pencil"></i></button>
                                            </div>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="box-footer">
            <button class="btn btn-primary" @click="create">创建分类</button>
        </div>
        <modal ref="theModal">
            <div slot="title">
                <div class="modal-title">{{ modal.title }}</div>
            </div>
            <div slot="body">
                <div class="modal-content">
                    <div class="form-group">
                        <label>名称</label>
                        <input class="form-control" v-model="modal.name">
                    </div>
                    <div class="form-group">
                        <label>内链</label>
                        <input class="form-control" v-model="modal.link">
                    </div>
                    <div class="form-group">
                        <label>描述</label>
                        <input class="form-control" v-model="modal.description">
                    </div>
                    <div class="form-group">
                        <label>颜色</label>
                        <input class="form-control" v-model="modal.color">
                    </div>
                </div>
            </div>
            <div slot="footer">
                <div class="modal-footer">
                    <button class="btn btn-primary btn-submit" @click="submit">保存</button>
                </div>
            </div>
        </modal>
    </div>
</template>