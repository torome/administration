<script>
  import Modal from '../libraries/Modal'
  export default {
    components: {
      Modal
    },
    data () {
      return {
        groups: [],
        item: {
          id: 0,
          title: '导航管理[未选择分组]'
        },
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
            group_id: '0',
            icon_image: '',
            id: 0,
            link: '',
            order_id: '0',
            parent_id: '0',
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
            _this.modal.pattern = 'group.create'
            _this.modal.title = '创建分组'
            this.$refs.modal.open()
            break
          case 'item':
            if (_this.item.id > 0) {
              _this.modal.item.color = ''
              _this.modal.item.enabled = '1'
              _this.modal.item.group_id = ''
              _this.modal.item.icon_image = ''
              _this.modal.item.link = ''
              _this.modal.item.order_id = ''
              _this.modal.item.parent_id = ''
              _this.modal.pattern = 'item.create'
              _this.modal.item.target = '_blank'
              _this.modal.item.title = ''
              _this.modal.item.tooltip = ''
              _this.modal.title = '创建菜单'
              this.$refs.modal.open()
            } else {
              _this.$store.commit('message', {
                show: true,
                type: 'error',
                'text': '请先选择菜单分组！'
              })
            }
            break
        }
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
            _this.modal.item.color = item.color
            _this.modal.item.enabled = item.enabled ? '1' : '0'
            _this.modal.item.group_id = item.group_id
            _this.modal.item.icon_image = item.icon_image
            _this.modal.item.id = item.id
            _this.modal.item.link = item.link
            _this.modal.item.order_id = item.order_id
            _this.modal.item.parent_id = item.parent_id
            _this.modal.pattern = 'item.edit'
            _this.modal.item.target = item.target
            _this.modal.item.title = item.title
            _this.modal.item.tooltip = item.tooltip
            _this.modal.title = '编辑菜单 - ' + item.title
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
          case 'item.create':
            _this.$refs.modal.close()
            break
          case 'item.edit':
            _this.$http.post(window.api + '/navigation/item/delete', {
              id: _this.modal.item.id,
              group_id: _this.modal.item.group_id
            }).then(function (response) {
              _this.items = response.data.data
              _this.$refs.modal.close()
              _this.$store.commit('message', {
                show: true,
                type: 'notice',
                text: '删除菜单[' + _this.modal.item.title + ']成功！'
              })
            }, function (response) {
              console.log(response.data)
            })
            break
        }
      },
      removeItem: function (group, type) {
        let _this = this
        switch (type) {
          case 'group':
            _this.$http.post(window.api + '/navigation/group/delete', {
              id: group.id
            }).then(function (response) {
              _this.groups = response.data.data
              _this.$store.commit('message', {
                show: true,
                type: 'notice',
                text: '删除分组[' + group.title + ']成功！'
              })
            }, function (response) {
              console.log(response.data)
            })
            break
          case 'item':
            break
        }
      },
      show: function (group) {
        let _this = this
        _this.$http.post(window.api + '/navigation/item/fetch', {
          group: group.id
        }).then(function (response) {
          _this.item.id = group.id
          _this.item.title = '导航管理[' + group.title + ']'
          _this.items = response.data.data
        }, function (response) {
          console.log(response.data)
        })
      },
      submit: function (e) {
        let _this = this
        switch (_this.modal.pattern) {
          case 'group.create':
            if (!_this.modal.group.alias && !_this.modal.group.title) {
              window.alert('必须填写名称和别名！')
              return false
            }
            _this.$http.post(window.api + '/navigation/group/create', {
              alias: _this.modal.group.alias,
              title: _this.modal.group.title
            }).then(function (response) {
              _this.groups = response.data.data
              _this.$refs.modal.close()
              _this.$store.commit('message', {
                show: true,
                type: 'notice',
                text: '创建分组[' + _this.modal.group.title + ']成功！'
              })
            }, function (response) {
              console.log(response.data)
            })
            break
          case 'group.edit':
            if (!_this.modal.group.alias && !_this.modal.group.title) {
              window.alert('必须填写名称和别名！')
              return false
            }
            _this.$http.post(window.api + '/navigation/group/edit', {
              alias: _this.modal.group.alias,
              id: _this.modal.group.id,
              title: _this.modal.group.title
            }).then(function (response) {
              console.log(response.data)
              _this.groups = response.data.data
              _this.$refs.modal.close()
              _this.$store.commit('message', {
                show: true,
                type: 'notice',
                text: '编辑分组[' + _this.modal.group.title + ']成功！'
              })
            }, function (response) {
              console.log(response.data)
            })
            break
          case 'item.create':
            if (!_this.modal.item.alias && !_this.modal.item.title) {
              window.alert('必须填写标题和别名！')
              return false
            }
            _this.$http.post(window.api + '/navigation/item/create', {
              color: _this.modal.item.color,
              enabled: _this.modal.item.enabled,
              group_id: _this.item.id,
              icon_image: _this.modal.item.icon_image,
              link: _this.modal.item.link,
              order_id: _this.modal.item.order_id,
              parent_id: _this.modal.item.parent_id,
              target: _this.modal.item.target,
              title: _this.modal.item.title,
              tooltip: _this.modal.item.tooltip
            }).then(function (response) {
              _this.items = response.data.data
              _this.$refs.modal.close()
              _this.$store.commit('message', {
                show: true,
                type: 'notice',
                text: '创建菜单[' + _this.modal.item.title + ']成功！'
              })
            }, function (response) {
              console.log(response.data)
            })
            break
          case 'item.edit':
            if (!_this.modal.item.alias && !_this.modal.item.title) {
              window.alert('必须填写标题和别名！')
              return false
            }
            _this.$http.post(window.api + '/navigation/item/edit', {
              color: _this.modal.item.color,
              enabled: _this.modal.item.enabled,
              group_id: _this.item.id,
              icon_image: _this.modal.item.icon_image,
              id: _this.modal.item.id,
              link: _this.modal.item.link,
              order_id: _this.modal.item.order_id,
              parent_id: _this.modal.item.parent_id,
              target: _this.modal.item.target,
              title: _this.modal.item.title,
              tooltip: _this.modal.item.tooltip
            }).then(function (response) {
              _this.items = response.data.data
              _this.$refs.modal.close()
              _this.$store.commit('message', {
                show: true,
                type: 'notice',
                text: '编辑菜单[' + _this.modal.item.title + ']成功！'
              })
            }, function (response) {
              console.log(response.data)
            })
            break
        }
      }
    },
    mounted () {
      let _this = this
      _this.$store.commit('title', '导航管理 - Notadd Administration')
      _this.$http.post(window.api + '/navigation/group/fetch').then(function (response) {
        _this.groups = response.data.data
      }, function (response) {
        console.log(response.data)
      })
    },
    updated () {
      let _this = this
      let sort = this.$jquery(this.$el).find('ul, ol').sortable({
        connectWith: 'article-category'
      })
      _this.$jquery(sort).each(function (key, item) {
        if (key === 0) {
          _this.$jquery(item).off('sortstop').on('sortstop', function () {
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
            _this.$http.post(window.api + '/navigation/item/sort', {
              data: order,
              group_id: _this.item.id
            }).then(function (response) {
              _this.items = []
              _this.$nextTick(function () {
                _this.items = response.data.data
              })
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
        background: url("../../../static/images/info.svg") left center no-repeat;
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
        <div class="col-md-6">
            <div class="box box-solid">
                <div class="box-header with-border">
                    <h3 class="box-title">{{ item.title }}</h3>
                </div>
                <div class="box-body">
                    <div class="none-item" v-show="none">目前还没有菜单哦！</div>
                    <ul class="list-group">
                        <li class="list-group-item clear-fix" v-for="item in items" :data-id="item.id">
                            <div class="list-group-item-content">
                                <em :style="{ background: item.color }"></em>
                                <span>{{ item.title }}</span>
                                <i class="handle"></i>
                                <button class="btn" @click="edit(item, 'item')"><i class="fa fa-fw fa-pencil"></i></button>
                            </div>
                            <ol class="list-group">
                                <li class="list-group-item clear-fix" v-for="sub in item.children" :data-id="sub.id">
                                    <div class="list-group-item-content">
                                        <em :style="{ background: sub.color }"></em>
                                        <span>{{ sub.title }}</span>
                                        <i class="handle"></i>
                                        <button class="btn" @click="edit(sub, 'item')"><i class="fa fa-fw fa-pencil"></i>
                                        </button>
                                    </div>
                                    <ol class="list-group">
                                        <li class="list-group-item clear-fix" v-for="child in sub.children" :data-id="child.id">
                                            <div class="list-group-item-content">
                                                <em :style="{ background: child.color }"></em>
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
        <div class="col-md-6">
            <div class="box box-solid">
                <div class="box-header with-border">
                    <h3 class="box-title">分组管理</h3>
                </div>
                <div class="box-body">
                    <dl class="group-item" v-for="group in groups">
                        <dt>{{ group.title }}[{{ group.alias }}]</dt>
                        <dd>
                            <button class="btn btn-primary btn-sm" @click="edit(group, 'group')">编辑</button>
                            <button class="btn btn-info btn-sm" @click="show(group)">菜单</button>
                            <button class="btn btn-danger btn-sm" @click="removeItem(group, 'group')">删除</button>
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

                <div class="form-group" v-if="modal.pattern === 'item.create' || modal.pattern === 'item.edit'">
                    <label>标题</label>
                    <input class="form-control" v-model="modal.item.title">
                </div>
                <div class="form-group" v-if="modal.pattern === 'item.create' || modal.pattern === 'item.edit'">
                    <label>提示</label>
                    <input class="form-control" v-model="modal.item.tooltip">
                </div>
                <div class="form-group" v-if="modal.pattern === 'item.create' || modal.pattern === 'item.edit'">
                    <label>链接</label>
                    <input class="form-control" v-model="modal.item.link">
                </div>
                <div class="form-group" v-if="modal.pattern === 'item.create' || modal.pattern === 'item.edit'">
                    <label>打开方式</label>
                    <div class="btn-group btn-switch">
                        <label class="btn btn-primary" :class="{ active: modal.item.target === '_blank' }">
                            <input type="radio" v-model="modal.item.target" value="_blank"> 新窗口[_blank]
                        </label>
                        <label class="btn btn-primary" :class="{ active: modal.item.target === '_self' }">
                            <input type="radio" v-model="modal.item.target" value="_self"> 本窗口[_self]
                        </label>
                        <label class="btn btn-primary" :class="{ active: modal.item.target === '_parent' }">
                            <input type="radio" v-model="modal.item.target" value="_parent"> 父窗口[_parent]
                        </label>
                        <label class="btn btn-primary" :class="{ active: modal.item.target === '_top' }">
                            <input type="radio" v-model="modal.item.target" value="_top"> 顶层窗口[_top]
                        </label>
                    </div>
                </div>
                <div class="form-group" v-if="modal.pattern === 'item.create' || modal.pattern === 'item.edit'">
                    <label>颜色</label>
                    <input class="form-control" v-model="modal.item.color">
                </div>
                <div class="form-group" v-if="modal.pattern === 'item.create' || modal.pattern === 'item.edit'">
                    <label>状态</label>
                    <div class="btn-group btn-switch">
                        <label class="btn btn-primary" :class="{ active: modal.item.enabled === '1' }">
                            <input type="radio" v-model="modal.item.enabled" value="1"> 开启
                        </label>
                        <label class="btn btn-primary" :class="{ active: modal.item.enabled === '0' }">
                            <input type="radio" v-model="modal.item.enabled" value="0"> 关闭
                        </label>
                    </div>
                </div>
                <div class="modal-footer clearfix">
                    <button class="btn btn-primary btn-submit" @click="submit">保存</button>
                    <button class="btn btn-delete" v-if="modal.pattern !== 'group.edit'" @click="remove">删除分类</button>
                </div>
            </div>
        </modal>
    </div>
</template>