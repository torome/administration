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
          current: '',
          group: {
            alias: '',
            id: 0,
            title: ''
          },
          item: {
            color: '',
            enabled: '',
            group_id: '',
            icon_image: '',
            link: '',
            order_id: '',
            parent_id: '',
            target: '',
            title: '',
            tooltip: ''
          },
          pattern: 'group.create',
          title: '创建分组'
        },
        none: true
      }
    },
    methods: {
      create: function (type) {
        let _this = this
        switch (type) {
          case 'group':
            _this.modal.group.alias = ''
            _this.modal.group.title = ''
            _this.modal.title = '创建分组'
            break
          case 'item':
            _this.modal.item.color = ''
            _this.modal.item.enabled = ''
            _this.modal.item.group_id = ''
            _this.modal.item.icon_image = ''
            _this.modal.item.link = ''
            _this.modal.item.order_id = ''
            _this.modal.item.parent_id = ''
            _this.modal.item.target = ''
            _this.modal.item.title = ''
            _this.modal.item.tooltip = ''
            _this.modal.title = '创建菜单'
            break
        }
        this.$refs.modal.open()
      },
      edit: function (item, type) {
        let _this = this
        switch (type) {
          case 'group':
            _this.modal.pattern = 'group.edit'
            _this.modal.group.alias = item.alias
            _this.modal.group.id = item.id
            _this.modal.group.title = item.title
            break
          case 'item':
            break
        }
        this.$refs.modal.open()
      },
      remove: function () {
        let _this = this
        switch (_this.modal.pattern) {
          case 'group.create':
            _this.$refs.modal.close()
            break
          case 'group.edit':
            break
          case 'item.create':
            break
          case 'item.edit':
            break
        }
      },
      removeItem: function (id, type) {
        let _this = this
        switch (type) {
          case 'group':
            _this.$http.post(window.api + '/navigation/group/delete', {
              id: id
            }).then(function (response) {
              _this.groups = response.body.data
            }, function (response) {
              console.log(response.body)
            })
            break
          case 'item':
            break
        }
      },
      submit: function (e) {
        let _this = this
        switch (_this.modal.pattern) {
          case 'group.create':
            _this.$http.post(window.api + '/navigation/group/create', {
              alias: _this.modal.group.alias,
              title: _this.modal.group.title
            }).then(function (response) {
              _this.groups = response.body.data
              _this.$refs.modal.close()
              _this.$store.commit('message', {
                show: true,
                type: 'notice',
                text: '创建分组[' + _this.modal.group.title + ']成功！'
              })
            }, function (response) {
              console.log(response.body)
            })
            break
          case 'group.edit':
            _this.$http.post(window.api + '/navigation/group/edit', {
              alias: _this.modal.group.alias,
              id: _this.modal.group.id,
              title: _this.modal.group.title
            }).then(function (response) {
              console.log(response.body)
              _this.groups = response.body.data
              _this.$refs.modal.close()
              _this.$store.commit('message', {
                show: true,
                type: 'notice',
                text: '编辑分组[' + _this.modal.group.title + ']成功！'
              })
            }, function (response) {
              console.log(response.body)
            })
            break
          case 'item.create':
            break
          case 'item.edit':
            break
        }
      }
    },
    mounted () {
      let _this = this
      _this.$store.commit('title', '导航管理 - Notadd Administration')
      _this.$http.post(window.api + '/navigation/group/fetch').then(function (response) {
        _this.groups = response.body.data
      }, function (response) {
        console.log(response.body)
      })
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
          this.none = value.length === 0
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
                                <button class="btn" @click="edit(item, 'item')"><i class="fa fa-fw fa-pencil"></i></button>
                            </div>
                            <ol class="list-group">
                                <li class="list-group-item clear-fix" v-for="sub in item.children" :data-id="sub.id">
                                    <div class="list-group-item-content">
                                        <em :style="{ background: sub.background_color }"></em>
                                        <span>{{ sub.title }}</span>
                                        <i class="handle"></i>
                                        <button class="btn" @click="edit(sub, 'item')"><i class="fa fa-fw fa-pencil"></i>
                                        </button>
                                    </div>
                                    <ol class="list-group">
                                        <li class="list-group-item clear-fix" v-for="child in sub.children"
                                            :data-id="child.id">
                                            <div class="list-group-item-content">
                                                <em :style="{ background: child.background_color }"></em>
                                                <span>{{ child.title }}</span>
                                                <i class="handle"></i>
                                                <button class="btn" @click="edit(child, 'item')"><i class="fa fa-fw fa-pencil"></i></button>
                                            </div>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                    </ul>
                </div>
                <div class="box-footer">
                    <button class="btn btn-primary" @click="create('item')">创建菜单</button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box box-solid">
                <div class="box-header with-border">
                    <h3 class="box-title">分组管理</h3>
                </div>
                <div class="box-body">
                    <dl class="group-item" v-for="group in groups">
                        <dt>{{ group.title }}</dt>
                        <dd>
                            <button class="btn btn-primary btn-sm" @click="edit(group, 'group')">编辑</button>
                            <button class="btn btn-info btn-sm" @click="show(group)">菜单</button>
                            <button class="btn btn-danger btn-sm" @click="removeItem(group.id, 'group')">删除</button>
                        </dd>
                    </dl>
                </div>
                <div class="box-footer">
                    <button class="btn btn-primary" @click="create('group')">创建分组</button>
                </div>
            </div>
        </div>
        <modal ref="modal">
            <div slot="title">
                <div class="modal-title">{{ modal.title }}</div>
            </div>
            <div slot="body">
                <div class="form-group" v-if="modal.pattern === 'group.create' || modal.pattern === 'group.edit'">
                    <label>名称</label>
                    <input class="form-control" v-model="modal.group.title">
                </div>
                <div class="form-group" v-if="modal.pattern === 'group.create' || modal.pattern === 'group.edit'">
                    <label>别名</label>
                    <input class="form-control" v-model="modal.group.alias">
                </div>
                <div class="modal-footer clearfix">
                    <button class="btn btn-primary btn-submit" @click="submit">保存</button>
                    <button class="btn btn-delete" @click="remove">删除分类</button>
                </div>
            </div>
        </modal>
    </div>
</template>