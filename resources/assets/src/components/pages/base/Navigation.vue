<script>
  import Modal from '../../libraries/Modal'
  export default {
    components: {
      Modal
    },
    data () {
      return {
        groups: [],
        items: [],
        modal: {
          group: {},
          item: {},
          title: '创建分类'
        },
        none: true
      }
    },
    methods: {
      create: function () {
        this.$refs.modal.open()
      },
      edit: function (item) {
        this.$refs.modal.open()
      },
      remove: function () {
      },
      submit: function (e) {
      }
    },
    mounted () {
      let _this = this
      _this.$store.commit('title', '导航管理 - Notadd Administration')
    },
    updated () {
      let _this = this
      let sort = this.$jquery(this.$el).find('ul, ol').sortable({
        connectWith: 'article-category'
      })
      _this.$jquery(sort).each(function (key, item) {
        if (key === 0) {
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
                    }).get()
                  }
                }).get()
              }
            }).get()
            _this.$http.post(window.api + '/category/sort', {
              data: order
            }).then(function (response) {
              _this.items = response.body.data
            }, function (response) {
              _this.$store.commit('message', {
                show: true,
                type: 'error',
                text: '更新排序失败！'
              })
            })
          })
        }
      })
    },
    watch: {
      items: {
        handler: function (value) {
          if (value.length === 0) {
            this.none = true
          } else {
            this.none = false
          }
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

    .form-group:last-child {
        margin-bottom: 0;
    }

    .form-group > label {
        font-weight: normal;
    }

    .modal-footer {
        border: none;
        padding: 0;
    }

    .modal-footer > .btn-delete {
        background: none;
        float: right;
        padding-left: 0;
        padding-right: 0;
    }

    .modal-footer > .btn-delete:active {
        background: none;
        box-shadow: none;
    }

    .modal-footer > .btn-delete:hover {
        text-decoration: underline;
    }

    .modal-footer > .btn-submit {
        float: left;
    }

    .none-item {
        background: url("../../../../static/images/info.svg") left center no-repeat;
        color: #888;
        font-size: 20px;
        height: 40px;
        line-height: 40px;
        margin: 20px 0;
        padding-left: 50px;
    }

    .group-item {
        margin-bottom: 10px;
        overflow: hidden;
    }

    .group-item:last-child {
        margin-bottom: 0;
    }

    .group-item > dt {
        color: #666666;
        float: left;
        height: 28px;
        line-height: 28px;
    }

    .group-item > dd {
        float: right;
    }

    .group-item > dd > .btn {
        padding-bottom: 5px;
        padding-top: 5px;
    }
</style>
<template>
    <div class="row">
        <div class="col-md-8">
            <div class="box box-solid">
                <div class="box-header with-border">
                    <h3 class="box-title">导航管理</h3>
                </div>
                <div class="box-body">
                    <div class="none-item" v-show="none">目前还没有菜单哦！</div>
                    <ul class="list-group">
                        <li class="list-group-item clear-fix" v-for="item in items" :data-id="item.id">
                            <div class="list-group-item-content">
                                <em :style="{ background: item.background_color }"></em>
                                <span>{{ item.title }}</span>
                                <i class="handle"></i>
                                <button class="btn" @click="edit(item)"><i class="fa fa-fw fa-pencil"></i></button>
                            </div>
                            <ol class="list-group">
                                <li class="list-group-item clear-fix" v-for="sub in item.children" :data-id="sub.id">
                                    <div class="list-group-item-content">
                                        <em :style="{ background: sub.background_color }"></em>
                                        <span>{{ sub.title }}</span>
                                        <i class="handle"></i>
                                        <button class="btn" @click="edit(sub)"><i class="fa fa-fw fa-pencil"></i>
                                        </button>
                                    </div>
                                    <ol class="list-group">
                                        <li class="list-group-item clear-fix" v-for="child in sub.children"
                                            :data-id="child.id">
                                            <div class="list-group-item-content">
                                                <em :style="{ background: child.background_color }"></em>
                                                <span>{{ child.title }}</span>
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
                <div class="box-footer">
                    <button class="btn btn-primary" @click="create">创建分类</button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box box-solid">
                <div class="box-header with-border">
                    <h3 class="box-title">分组管理</h3>
                </div>
                <div class="box-body">
                    <dl class="group-item">
                        <dt>默认分组</dt>
                        <dd>
                            <button class="btn btn-primary btn-sm">编辑</button>
                            <button class="btn btn-info btn-sm">菜单</button>
                            <button class="btn btn-danger btn-sm">删除</button>
                        </dd>
                    </dl>
                    <dl class="group-item">
                        <dt>默认分组</dt>
                        <dd>
                            <button class="btn btn-primary btn-sm">编辑</button>
                            <button class="btn btn-info btn-sm">菜单</button>
                            <button class="btn btn-danger btn-sm">删除</button>
                        </dd>
                    </dl>
                    <dl class="group-item">
                        <dt>默认分组</dt>
                        <dd>
                            <button class="btn btn-primary btn-sm">编辑</button>
                            <button class="btn btn-info btn-sm">菜单</button>
                            <button class="btn btn-danger btn-sm">删除</button>
                        </dd>
                    </dl>
                    <dl class="group-item">
                        <dt>默认分组</dt>
                        <dd>
                            <button class="btn btn-primary btn-sm">编辑</button>
                            <button class="btn btn-info btn-sm">菜单</button>
                            <button class="btn btn-danger btn-sm">删除</button>
                        </dd>
                    </dl>
                    <dl class="group-item">
                        <dt>默认分组</dt>
                        <dd>
                            <button class="btn btn-primary btn-sm">编辑</button>
                            <button class="btn btn-info btn-sm">菜单</button>
                            <button class="btn btn-danger btn-sm">删除</button>
                        </dd>
                    </dl>
                </div>
                <div class="box-footer">
                    <button class="btn btn-primary" @click="create">创建分组</button>
                </div>
            </div>
        </div>
        <modal ref="modal">
            <div slot="title">
                <div class="modal-title">{{ modal.title }}</div>
            </div>
            <div slot="body">
                <div class="form-group">
                    <label>名称</label>
                    <input class="form-control" v-model="modal.name">
                </div>
                <div class="form-group">
                    <label>别名</label>
                    <input class="form-control" v-model="modal.alias">
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
                    <input class="form-control" v-model="modal.background_color">
                </div>
                <div class="modal-footer clearfix">
                    <button class="btn btn-primary btn-submit" @click="submit">保存</button>
                    <button class="btn btn-delete" @click="remove">删除分类</button>
                </div>
            </div>
        </modal>
    </div>
</template>