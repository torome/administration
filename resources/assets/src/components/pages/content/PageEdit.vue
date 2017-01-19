<script>
  export default {
    created () {
    },
    computed: {
      id: {
        get () {
          return this.$route.params.id
        }
      },
      title: {
        get () {
          return '测试标题'
        }
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
      this.$store.commit('title', '编辑页面 - 文章 - Notadd Administration')
    }
  }
</script>
<style></style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">页面管理 - 编辑页面：{{ title }} (ID：{{ id }})</h3>
        </div>
        <div class="box-body">
            <div class="form-horizontal">
                <div class="form-group">
                    <label class="col-sm-1 control-label"></label>
                    <div class="col-sm-3">
                    </div>
                </div>
            </div>
        </div>
        <div class="box-footer">
            <button class="btn btn-primary" :disabled="errors.any()" @click="submit">保存</button>
        </div>
    </div>
</template>