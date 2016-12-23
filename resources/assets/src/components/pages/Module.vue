<script>
  export default {
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
            <h3 class="box-title">模块管理</h3>
        </div>
        <div class="box-body table-responsive no-padding">
            <table class="table table-hover">
                <tr>
                    <th style="min-width: 100px">名称</th>
                    <th style="min-width: 100px">版本</th>
                    <th style="min-width: 100px">作者</th>
                    <th style="width: 100%">简介</th>
                    <th style="min-width: 64px"></th>
                    <th style="min-width: 64px"></th>
                </tr>
                <tr v-for="module in modules">
                    <td>{{ module.name }}</td>
                    <td>{{ module.version }}</td>
                    <td>{{ module.auth }}</td>
                    <td>{{ module.description }}</td>
                    <td>
                        <label class="checkbox-inline">
                            <input type="checkbox" v-model="module.enabled"> 启用
                        </label>
                    </td>
                    <td>
                        <button class="btn btn-xs btn-danger">删除</button>
                    </td>
                </tr>
            </table>
        </div>
        <div class="box-footer">
            <div class="box-tools">
                <ul class="pagination pagination-sm no-margin pull-right">
                    <li><a href="#">&laquo;</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">&raquo;</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>