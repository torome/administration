<script>
  export default {
    created () {
    },
    computed: {
    },
    methods: {
      submit: function (e) {
        this.$validator.validateAll()
        if (this.errors.any()) {
          return false
        }
      }
    }
  }
</script>
<style scoped>
    .box {
        border-top: none;
    }
    .box-footer,
    .box-header {
        height: 80px;
        position: relative;
    }
    .box-header > .pull-right,
    .box-footer > .pull-right {
        padding-bottom: 25px;
        padding-top: 25px;
        position: absolute;
        right: 0;
        top: 0;
        width: 290px;
    }
    .box-footer > .pull-right .btn {
        border-radius: 3px;
        font-size: 12px;
        padding: 5px 10px;
    }
    .box-header > .pull-right > .box-extend,
    .box-footer > .pull-right > .box-extend {
        float: left;
        margin: 1px 0;
        width: 260px;
    }
    .box-body > .table > tbody > tr > td {
        vertical-align: middle;
    }
</style>
<template>
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">草稿箱</h3>
            <div class="pull-right clearfix">
                <div class="box-extend">
                    <div class="btn-group btn-group-sm">
                        <button class="btn btn-primary">全选</button>
                        <button class="btn btn-primary">反选</button>
                    </div>
                    <div class="btn-group btn-group-sm">
                        <button class="btn btn-danger">删除</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-body table-responsive no-padding">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th class="col-md-5">文章标题</th>
                    <th class="col-md-2">所属栏目</th>
                    <th class="col-md-2">创建时间</th>
                    <th class="col-md-3">操作</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Everything is Article</td>
                    <td>Notadd</td>
                    <td>2017年1月12日</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-primary">查看</button>
                            <button class="btn btn-info">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </div>
                    </td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <th class="col-md-5">文章标题</th>
                    <th class="col-md-2">所属栏目</th>
                    <th class="col-md-2">创建时间</th>
                    <th class="col-md-3">操作</th>
                </tr>
                </tfoot>
            </table>
        </div>
        <div class="box-footer">
            <div class="pull-right clearfix">
                <div class="box-extend">
                    <div class="btn-group btn-group-sm">
                        <button class="btn btn-primary">全选</button>
                        <button class="btn btn-primary">反选</button>
                    </div>
                    <div class="btn-group btn-group-sm">
                        <button class="btn btn-danger">删除</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>