<script>
  import Editor from '../../libraries/Editor'

  export default {
    components: {
      Editor
    },
    computed: {
      content: {
        get () {
          return ''
        },
        set (val) {
          this.contentValue = val
        }
      }
    },
    data: {
      contentValue: ''
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
                        <editor height="400" width="100%" :content="content"></editor>
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