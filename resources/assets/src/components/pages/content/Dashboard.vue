<script>
  export default {
    methods: {
      submit: function (e) {
        this.$validator.validateAll()
        if (this.errors.any()) {
          return false
        }
      }
    },
    mounted () {
      this.$store.commit('title', '文章 - Notadd Administration')
    }
  }
</script>
<template>
    <div class="box box-solid"></div>
</template>