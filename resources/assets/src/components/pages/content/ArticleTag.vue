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
        width: 500px;
    }
    .box-footer > .pull-right .btn {
        border-radius: 3px;
        font-size: 12px;
        padding: 5px 10px;
    }
    .box-header > .pull-right > .box-search,
    .box-footer > .pull-right > .box-search {
        float: left;
        margin-right: 10px;
        width: 200px;
    }
    .box-header > .pull-right > .box-extend,
    .box-footer > .pull-right > .box-extend {
        float: left;
        margin-top: 1px;
        width: 290px;
    }
    .box-body > .table > tbody > tr > td {
        vertical-align: middle;
    }
    .box-footer > .pagination {
        bottom: 25px;
        position: absolute;
        top: 25px;
    }
</style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">标签管理</h3>
            <div class="pull-right clearfix">
                <div class="box-search">
                    <div class="input-group input-group-sm">
                        <input class="form-control pull-right" placeholder="请输入搜索关键字" type="text">
                        <div class="input-group-btn">
                            <button class="btn btn-primary">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
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
                        <th class="col-md-5">标签名称</th>
                        <th class="col-md-2">文章数量</th>
                        <th class="col-md-2">创建时间</th>
                        <th class="col-md-3">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>tag-keyword</td>
                        <td>1000</td>
                        <td>2017年1月12日</td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-danger">删除</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="box-footer clearfix">
            <div class="pull-right clearfix">
                <div class="box-search">
                    <div class="input-group input-group-sm">
                        <input class="form-control pull-right" placeholder="请输入搜索关键字" type="text">
                        <div class="input-group-btn">
                            <button class="btn btn-primary">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
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
            <ul class="pagination pagination-sm no-margin">
                <li><a href="#">«</a></li>
                <li class="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">»</a></li>
            </ul>
        </div>
    </div>
</template>