<script>
  export default {
    computed: {},
    data: function () {
      return {
        options: {
          handle: '.handle',
          filter: '.disabled'
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
    }
  }
</script>
<style></style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">分类管理</h3>
        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-md-8">
                    <ul class="list-group" v-sortable="options">
                        <li class="list-group-item">Foo <i class="handle"></i></li>
                        <li class="list-group-item disabled">Bar <i class="handle"></i></li>
                        <li class="list-group-item">Baz <i class="handle"></i></li>
                    </ul>
                </div>
                <div class="col-md-4"></div>
            </div>
        </div>
        <div class="box-footer">
        </div>
    </div>
</template>