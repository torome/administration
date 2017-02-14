<script>
  import Paginator from '../../libraries/Paginator'
  import Vue from 'vue'
  export default {
    beforeRouteEnter (to, from, next) {
      Vue.http.post(window.api + '/article/fetch', {
        trashed: true
      }).then(function (response) {
        next((vm) => {
          vm.list = []
          response.body.data.forEach((article) => {
            article.checked = false
            vm.list.push(article)
          })
          vm.pagination = response.body.pagination
        })
      }, function (response) {
        window.alert('初始化失败！')
      })
    },
    components: {
      Paginator
    },
    data () {
      return {
        list: [],
        pagination: {
          last_page: 1
        }
      }
    },
    methods: {
      paginator: function (page) {
        let _this = this
        _this.$http.post(window.api + '/article/fetch', {
          page: page,
          trashed: true
        }).then(function (response) {
          _this.list = []
          response.body.data.map(function (article) {
            article.checked = false
            _this.list.push(article)
          })
          _this.pagination = response.body.pagination
        }, function (response) {
          console.log(response.body)
        })
      },
      submit: function (e) {
        let _this = this
        _this.$validator.validateAll()
        if (_this.errors.any()) {
          return false
        }
      }
    },
    mounted () {
      this.$store.commit('title', '回收站 - 文章 - Notadd Administration')
    }
  }
</script>
<style scoped>
    .box {
        border-top: none;
        padding-left: 40px;
        padding-right: 40px;
    }

    .box-body {
        border-bottom: 1px solid #eeeeee;
        border-radius: 0;
        border-top: 1px solid #eeeeee;
    }

    .box-body > .table > tbody > tr > td {
        border-color: #eeeeee;
        height: 60px;
        vertical-align: middle;
    }

    .box-body > .table > tbody > tr > td:last-child {
        letter-spacing: 6px;
        text-align: right;
    }

    .box-body > .table > tbody > tr > td:last-child > .btn {
        border-radius: 4px;
        letter-spacing: 0;
        padding: 5px 12px;
    }

    .box-footer {
        text-align: right;
    }

    .box-footer,
    .box-header {
        height: 80px;
        padding: 22px 0;
        position: relative;
    }

    .box-header > .box-search {
        float: left;
        width: 320px;
    }

    .box-header > .box-search > .form-control {
        border-bottom-left-radius: 18px;
        border-color: #cccccc;
        border-right-width: 0;
        border-top-left-radius: 18px;
    }

    .box-header > .box-search > .input-group-btn {
        border: 1px solid #cccccc;
        border-bottom-right-radius: 18px;
        border-left-width: 0;
        border-top-right-radius: 18px;
        overflow: hidden;
    }

    .box-header > .box-search > .input-group-btn > .btn {
        padding-bottom: 6px;
        padding-top: 6px;
        width: 60px;
    }

    .box-header > .box-extend {
        letter-spacing: 16px;
        text-align: right;
    }

    .box-header > .box-extend > .btn {
        border-radius: 6px;
        padding-left: 32px;
        padding-right: 32px;
    }

    .box-body > .table > tbody > tr > td:last-child > .btn,
    .box-header > .box-extend > .btn {
        background: #ffffff;
        border-width: 1px;
        color: #000000;
    }

    .box-body > .table > tbody > tr > td:last-child > .btn-primary,
    .box-header > .box-extend > .btn-primary {
        border-color: #3498db;
        color: #3498db;
    }

    .box-body > .table > tbody > tr > td:last-child > .btn-primary:hover,
    .box-header > .box-extend > .btn-primary:hover {
        background-color: #3498db;
        border-color: #3498db;
        color: #ffffff;
    }

    .box-body > .table > tbody > tr > td:last-child > .btn-info,
    .box-header > .box-extend > .btn-info {
        border-color: #8ba0ca;
        color: #8ba0ca;
    }

    .box-body > .table > tbody > tr > td:last-child > .btn-info:hover,
    .box-header > .box-extend > .btn-info:hover {
        background-color: #8ba0ca;
        border-color: #8ba0ca;
        color: #ffffff;
    }

    .box-body > .table > tbody > tr > td:last-child > .btn-danger,
    .box-header > .box-extend > .btn-danger {
        border-color: #ef5151;
        color: #ef5151;
    }

    .box-body > .table > tbody > tr > td:last-child > .btn-danger:hover,
    .box-header > .box-extend > .btn-danger:hover {
        background-color: #ef5151;
        border-color: #ef5151;
        color: #ffffff;
    }

    .pagination > li > a {
        background: transparent;
        border-color: transparent;
        margin: 0 5px;
    }

    .pagination > li:first-child > a,
    .pagination > li:last-child > a {
        border-color: #cccccc;
        border-radius: 6px;
        color: #cccccc;
    }

    .pagination > li:first-child > a {
        margin-left: 0;
    }

    .pagination > li:last-child > a {
        margin-right: 0;
    }

    .pagination > li > a:hover,
    .pagination > li.active > a {
        background: #3498db;
        border-color: #3498db;
        border-radius: 6px;
        color: #ffffff;
        margin-bottom: 1px;
        margin-top: 1px;
        padding-bottom: 5px;
        padding-top: 5px;
    }
</style>
<template>
    <div class="box">
        <div class="box-header">
            <div class="box-search input-group">
                <input class="form-control pull-right" placeholder="请输入搜索关键字" type="text">
                <div class="input-group-btn">
                    <button class="btn btn-primary">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <div class="box-extend">
                <button class="btn btn-primary">全选</button>
                <button class="btn btn-primary" disabled>反选</button>
                <button class="btn btn-danger">彻底删除</button>
            </div>
        </div>
        <div class="box-body table-responsive no-padding">
            <table class="table table-hover">
                <colgroup>
                    <col class="col-md-6">
                    <col class="col-md-2">
                    <col class="col-md-2">
                    <col class="col-md-2">
                </colgroup>
                <tbody>
                <tr v-for="article in list">
                    <td>{{ article.title }}</td>
                    <td>{{ article.category }}</td>
                    <td>{{ article.date }}</td>
                    <td>
                        <button class="btn btn-info btn-sm">恢复</button>
                        <button class="btn btn-danger btn-sm">删除</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="box-footer">
            <paginator :pageCount="pagination.last_page"
                       :pageRange="3"
                       :marginPages="2"
                       :clickHandler="paginator"
                       prevText="上一页"
                       nextText="下一页"
                       containerClass="pagination no-margin"
                       pageClass="'page-item'">
            </paginator>
        </div>
    </div>
</template>