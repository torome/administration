<script>
  export default {
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
<style></style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">SEO管理</h3>
        </div>
        <div class="form-horizontal">
            <div class="box-body">
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-1 control-label">标题</label>
                    <div class="col-sm-3">
                        <input name="title" type="text" class="form-control" placeholder="请输入标题" v-model="title" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('title')">标题不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-1 control-label">描述</label>
                    <div class="col-sm-3">
                        <input name="description" type="text" class="form-control" placeholder="请输入描述" v-model="description" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('description')">描述不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-1 control-label">关键字</label>
                    <div class="col-sm-3">
                        <input name="keyword" type="text" class="form-control" placeholder="请输入关键词名称" v-model="keyword" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('keyword')">关键字不能为空</span>
                    </div>
                </div>
            </div>
            <div class="box-footer">
                <div class="form-group">
                    <div class="col-sm-4 col-sm-offset-3">
                        <button class="btn btn-primary btn-flat" :disabled="errors.any()" @click="submit">保存</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>