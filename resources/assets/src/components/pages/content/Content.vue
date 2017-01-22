<script>
  export default {
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
<template>
    <div class="box box-solid"></div>
</template>