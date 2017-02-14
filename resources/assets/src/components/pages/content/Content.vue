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
    }
  }
</script>
<template>
    <div class="box box-solid"></div>
</template>