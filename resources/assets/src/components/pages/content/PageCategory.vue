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
    },
    mounted () {
      this.$store.commit('title', '分类管理 - 页面 - Notadd Administration')
    }
  }
</script>
<style></style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">页面分类管理</h3>
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
        </div>
    </div>
</template>