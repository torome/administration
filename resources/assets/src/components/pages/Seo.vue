<script>
  export default {
    computed: {},
    methods: {}
  }
</script>
<style></style>
<template>
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">SEO管理</h3>
    </div>
        <div class="form-horizontal">
            <div class="box-body">
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label for="title" class="col-sm-3 control-label">标题</label>
                    <div class="col-sm-4">
                        <input name="title" id="title" type="text" class="form-control" placeholder="请输入标题" v-model="title" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('title')">{{ errors.first('title') }}</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label for="description" class="col-sm-3 control-label">描述</label>
                    <div class="col-sm-4">
                        <input name="description" id="description" type="text" class="form-control" placeholder="请输入描述" v-model="description" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('description')">{{ errors.first('description') }}</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label for="keyword" class="col-sm-3 control-label">关键字</label>
                    <div class="col-sm-4">
                        <input name="keyword" id="keyword" type="text" class="form-control" placeholder="请输入关键词名称" v-model="keyword" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('keyword')">{{ errors.first('keyword') }}</span>
                    </div>
                </div>
            </div>
            <div class="box-footer">
                <div class="form-group">
                    <div class="col-sm-4 col-sm-offset-3">
                        <button class="btn btn-primary btn-flat" :disabled="errors">保存</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>