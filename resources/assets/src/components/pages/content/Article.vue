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
<style></style>
<template>
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">文章管理</h3>
            <div class="pull-right clearfix">
                <div class="box-search">
                    <div class="input-group input-group-sm">
                        <input class="form-control pull-right" placeholder="请输入附件大小" type="text">
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
                    <button class="btn btn-info btn-sm">回收站</button>
                    <div class="btn-group btn-group-sm">
                        <button class="btn btn-warning">删除</button>
                        <button class="btn btn-danger">彻底删除</button>
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
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                    </tr>
                    <tr>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
                        <td>Everything</td>
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
                <div class="box-search">
                    <div class="input-group input-group-sm">
                        <input class="form-control pull-right" placeholder="请输入附件大小" type="text">
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
                    <button class="btn btn-info btn-sm">回收站</button>
                    <div class="btn-group btn-group-sm">
                        <button class="btn btn-warning">删除</button>
                        <button class="btn btn-danger">彻底删除</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>