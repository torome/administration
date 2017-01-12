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
    }
  }
</script>
<template>
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">草稿箱</h3>
        </div>
        <div class="box-body table-responsive no-padding">
        </div>
        <div class="box-footer">
        </div>
    </div>
</template>
