<script>
  import Editor from '../../libraries/Editor'

  export default {
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
        this.$http.post(window.api + '/page/create', {
          alias: this.alias,
          content: this.content,
          enabled: this.enabled,
          title: this.title
        }).then(function (response) {
          console.log(response.body)
          if (response.body.data.id && response.body.data.id > 0) {
            window.alert(response.body.message)
            this.$router.push('/content/page')
          }
        }, function (response) {
          console.log(response.body)
        })
      }
    },
    mounted () {
      this.$store.commit('title', '添加页面 - 页面 - Notadd Administration')
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
                <editor height="400" width="100%" v-model="content" content=""></editor>
            </div>
            <div class="btn-group">
                <button class="btn btn-primary" :disabled="errors.any()" @click="submit">保存</button>
            </div>
        </div>
    </div>
</template>