<script>
  import DatePicker from 'vuejs-datepicker'
  import Editor from '../../libraries/Editor'
  import Tags from '../../libraries/InputTag'

  export default {
    components: {
      DatePicker,
      Editor,
      Tags
    },
    data () {
      return {
        date: '2017-01-20',
        content: 'This is Text!',
        tags: [
          'new',
          'old',
          'that',
          'this'
        ]
      }
    },
    methods: {
      submit: function (e) {
        console.log(this.content)
        this.$validator.validateAll()
        if (this.errors.any()) {
          return false
        }
      }
    },
    mounted () {
      this.$store.commit('title', '添加文章 - 文章 - Notadd Administration')
    },
    watch: {
      content: {
        deep: true,
        handler: function () {
          console.log(arguments)
          console.log('ContentValue')
        }
      },
      date: {
        deep: true,
        handler: function () {
          console.log('Date')
        }
      }
    }
  }
</script>
<style scoped>
    .article-main {
        padding-bottom: 40px;
        padding-top: 40px;
    }

    .article-extend {
        padding-bottom: 40px;
        padding-top: 20px;
    }

    .article-extend > .form-horizontal {

    }

    .article-extend > .form-horizontal > .form-group {
        border-bottom: 1px solid #f2f2f2;
        margin-bottom: 15px;
        padding-bottom: 20px;
        padding-top: 20px;
    }
</style>
<template>
    <div class="row">
        <div class="col-md-8">
            <div class="box box-solid">
                <div class="box-body article-main">
                    <div class="form-group">
                        <label>标题</label>
                        <input type="text" class="form-control" placeholder="请在此输入标题">
                    </div>
                    <div class="form-group">
                        <label>摘要</label>
                        <textarea name="" class="form-control" rows="5"></textarea>
                    </div>
                    <div class="form-group">
                        <label>内容</label>
                        <editor height="400" width="100%" v-model="content" :content="content"></editor>
                    </div>
                    <button class="btn btn-primary" @click="submit">保存</button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box box-solid">
                <div class="box-body article-extend">
                    <div class="form-horizontal">
                        <div class="form-group">
                            <label class="col-md-4 control-label">上传缩略图</label>
                            <div class="col-md-8">
                                <button class="btn btn-primary"><i class="fa fa-image"></i>上传图片</button>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">置顶</label>
                                <div class="col-md-8">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">隐藏</label>
                                <div class="col-md-8">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">发布时间</label>
                                <div class="col-md-8">
                                    <date-picker format="yyyy-MM-dd" language="zh" input-class="form-control" v-model="date"></date-picker>
                                </div>
                            </div>
                            <div class="form-group">
                                <tags placeholder="添加标签" :tags="tags"></tags>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">来源</label>
                                <div class="col-md-8">
                                    <input class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">来源链接</label>
                                <div class="col-md-8">
                                    <input class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>