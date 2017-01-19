<script>
  export default {
    created () {
    },
    computed: {
      backupTypeOptions () {
        return [
          {text: "2M 分卷", value: "2m"},
          {text: "GZIP 压缩", value: "gzip"}
        ]
      },
      backupType () {
        return "2m"
      }
    },
    methods: {
      submit: function (e) {
        this.$validator.validateAll()
        if (this.errors.any()) {
          return false
        }
      }
    },
    mounted () {
      this.$store.commit('title', '数据库管理 - Notadd Administration')
    }
  }
</script>
<style></style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">数据备份</h3>
        </div>
        <div class="box-body">
            <div class="form-horizontal">
                <div class="form-group">
                    <label class="control-label">备份类型</label>
                    <div>
                        <label v-for="option in backupTypeOptions" class="radio-inline">
                            <input type="radio" :value="option.value" v-model="backupType"> {{ option.text }}
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-footer">
            <button type="submit" class="btn btn-primary" :class="{ disabled: $validation.invalid }"
                    :disabled="$validation.invalid">备份
            </button>
        </div>
        <div class="box-body no-padding">
            <table class="table">
                <tr>
                    <th>备份数据</th>
                    <th style="width: 1%"></th>
                    <th style="width: 1%"></th>
                </tr>
                <tr>
                    <td>db2012_03_01</td>
                    <td>
                        <button class="btn btn-link btn-xs">删除</button>
                    </td>
                    <td>
                        <button class="btn btn-link btn-xs">下载</button>
                    </td>
                </tr>
                <tr>
                    <td>db2012_03_01</td>
                    <td>
                        <button class="btn btn-link btn-xs">删除</button>
                    </td>
                    <td>
                        <button class="btn btn-link btn-xs">下载</button>
                    </td>
                </tr>
                <tr>
                    <td>db2012_03_02</td>
                    <td>
                        <button class="btn btn-link btn-xs">删除</button>
                    </td>
                    <td>
                        <button class="btn btn-link btn-xs">下载</button>
                    </td>
                </tr>
                <tr>
                    <td>db2012_06_01</td>
                    <td>
                        <button class="btn btn-link btn-xs">删除</button>
                    </td>
                    <td>
                        <button class="btn btn-link btn-xs">下载</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>