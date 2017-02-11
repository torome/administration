<script>
  export default {
    methods: {
      submit: function (e) {
        let _this = this

        _this.$validator.validateAll()

        if (_this.errors.any()) {
          return false
        }
      }
    },
    mounted () {
      this.$store.commit('title', '储存管理 - Notadd Administration')
    }
  }
</script>
<style></style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">管理</h3>
        </div>
    </div>
</template>