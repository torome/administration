<script>
  import Editor from '../../libraries/Editor'
  import Vue from 'vue'

  export default {
    beforeRouteEnter (to, from, next) {
      Vue.http.post(window.api + '/page/find', {
        id: to.params.id
      }).then(function (response) {
        next((vm) => {
          let article = response.body.data
          vm.alias = article.alias
          vm.content = article.content
          vm.enabled = article.enabled
          vm.title = article.title
        })
      }, function (response) {
        console.log(response)
      })
    },
    components: {
      Editor
    },
    data () {
      return {
        alias: '',
        content: '',
        enabled: '',
        title: ''
      }
    },
    methods: {
      submit: function (e) {
        this.$validator.validateAll()
        if (this.errors.any()) {
          return false
        }
        this.$http.post(window.api + '/page/edit', {
          id: this.$route.params.id,
          alias: this.alias,
          content: this.content,
          enabled: this.enabled,
          title: this.title
        }).then(function (response) {
          window.alert(response.body.message)
          this.$router.push('/content/page')
        }, function (response) {
          console.log(response.body)
        })
      }
    },
    mounted () {
      this.$store.commit('title', '编辑页面 - 文章 - Notadd Administration')
    }
  }
</script>
<style>
    .page-main {
        padding-bottom: 40px;
        padding-top: 40px;
    }
    .btn-switch {
        display: block;
        overflow: hidden;
    }
</style>
<template>
    <div class="box box-solid">
        <div class="box-body page-main">
            <div class="form-group" :class="{ 'has-error': errors.has('title') }">
                <label>标题</label>
                <input class="form-control" name="title" placeholder="请在此输入标题" type="text" v-model="title" v-validate data-vv-rules="required">
            </div>
            <div class="form-group">
                <label>别名</label>
                <input class="form-control" name="title" placeholder="请在此输入别名" type="text" v-model="alias">
            </div>
            <div class="form-group">
                <label>是否启用</label>
                <div class="btn-group btn-switch">
                    <label class="btn btn-primary" :class="{ active: enabled === '1' }">
                        <input type="radio" v-model="enabled" value="1"> 开启
                    </label>
                    <label class="btn btn-primary" :class="{ active: enabled === '0' }">
                        <input type="radio" v-model="enabled" value="0"> 关闭
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label>内容</label>
                <editor height="400" width="100%" v-model="content" :content="content"></editor>
            </div>
            <div class="btn-group">
                <button class="btn btn-primary btn-submit" :disabled="errors.any()" @click="submit">保存</button>
            </div>
        </div>
    </div>
</template>