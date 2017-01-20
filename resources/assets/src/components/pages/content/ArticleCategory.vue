<script>
  export default {
    computed: {
      items: {
        get () {
          return [
            {
              text: '文章',
              description: '这是一个文章',
              color: '#cccccc'
            },
            {
              text: '文章',
              description: '这是一个文章',
              color: '#cccccc'
            },
            {
              text: '文章',
              description: '这是一个文章',
              color: '#cccccc'
            },
            {
              text: '文章',
              description: '这是一个文章',
              color: '#cccccc'
            },
            {
              text: '文章',
              description: '这是一个文章',
              color: '#cccccc'
            },
            {
              text: '文章',
              description: '这是一个文章',
              color: '#cccccc'
            },
            {
              text: '文章',
              description: '这是一个文章',
              color: '#cccccc'
            },
            {
              text: '文章',
              description: '这是一个文章',
              color: '#cccccc'
            },
            {
              text: '文章',
              description: '这是一个文章',
              color: '#cccccc'
            },
            {
              text: '文章',
              description: '这是一个文章',
              color: '#cccccc'
            }
          ]
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
    },
    mounted () {
      this.$store.commit('title', '分类管理 - 文章 - Notadd Administration')
      this.$jquery(this.$el).find('ul, ol').sortable({
        connectWith: 'category'
      })
    }
  }
</script>
<style scoped>
    .box-body {
        padding-bottom: 20px;
        padding-top: 20px;
    }
    .list-group > .list-group-item {
        border-width: 0;
        padding: 0;
    }
    .list-group > .list-group-item > .list-group-item-content {
        border-radius: 4px;
        cursor: move;
        height: 30px;
        line-height: 30px;
        margin-top: 5px;
    }
    .list-group > .list-group-item > .list-group-item-content:hover {
        background: #efefef;
    }
    .list-group > .list-group-item > .list-group-item-content > em {
        border-radius: 4px;
        float: left;
        height: 16px;
        margin: 7px;
        width: 16px;
    }
    .list-group > .list-group-item > .list-group-item-content:hover > em {
        opacity: 0;
    }
    .list-group > .list-group-item > .list-group {
        margin-bottom: 0;
        padding-left: 26px;
    }
    ol.list-group {
        min-height: 5px;
    }
</style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">分类管理</h3>
        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item clear-fix" v-for="item in items">
                            <div class="list-group-item-content">
                                <em :style="{ background: item.color }"></em>
                                <span>{{ item.text }}</span>
                                <i class="handle"></i>
                            </div>
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