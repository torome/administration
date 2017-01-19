<script>
  import Editor from '../../libraries/Editor'

  export default {
    components: {
      Editor
    },
    created () {
    },
    computed: {},
    methods: {
      submit: function (e) {
        this.$validator.validateAll()
        if (this.errors.any()) {
          return false
        }
      }
    },
    mounted () {
      this.$store.commit('title', '添加文章 - 文章 - Notadd Administration')
    }
  }
</script>
<style></style>
<template>
    <div class="row">
        <div class="col-md-8">
            <div class="box box-solid">
                <div class="box-body">
                    <editor></editor>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box box-solid">
                <div class="box-body"></div>
            </div>
        </div>
    </div>
</template>