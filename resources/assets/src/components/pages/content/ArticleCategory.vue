<script>
  import $ from 'jquery'
  export default {
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
      console.log(this.$jquery)
      $(this.$el).find('ul, ol').sortable({
        connectWith: 'article-category'
      })
    }
  }
</script>
<style scoped>
    ol.list-group {
        min-height: 10px;
    }
</style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">分类管理</h3>
        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-md-8">
                    <ul class="list-group">
                        <li class="list-group-item">Foo <i class="handle"></i>
                            <ol class="list-group"></ol>
                        </li>
                        <li class="list-group-item">Bar <i class="handle"></i>
                            <ol class="list-group"></ol>
                        </li>
                    </ul>
                    <ul class="list-group">
                        <li class="list-group-item">Foo <i class="handle"></i>
                            <ol class="list-group"></ol>
                        </li>
                        <li class="list-group-item">Bar <i class="handle"></i>
                            <ol class="list-group"></ol>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="box-footer">
        </div>
    </div>
</template>