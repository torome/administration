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
                <validity field="title" :validators="{ required: { rule: true, message: '网站标题不能为空' } }">
                    <div class="form-group" :class="{ 'has-error': $validation.title.invalid }">
                        <label for="title" class="col-sm-3 control-label">标题</label>
                        <div class="col-sm-4">
                            <input v-model="title" id="title" type="text" class="form-control" placeholder="请输入标题">
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.title.required" class="help-block">{{ $validation.title.required }}</span>
                        </div>
                    </div>
                </validity>
                <validity field="description" :validators="{ required: { rule: true, message: '网站描述不能为空' } }">
                    <div class="form-group" :class="{ 'has-error': $validation.description.invalid }">
                        <label for="description" class="col-sm-3 control-label">描述</label>
                        <div class="col-sm-4">
                            <input v-model="description" id="description" type="text" class="form-control" placeholder="请输入描述">
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.description.required" class="help-block">{{ $validation.description.required }}</span>
                        </div>
                    </div>
                </validity>
                <validity field="keyword" :validators="{ required: { rule: true, message: '关键词不能为空' } }">
                    <div class="form-group" :class="{ 'has-error': $validation.keyword.invalid }">
                        <label for="keyword" class="col-sm-3 control-label">关键字</label>
                        <div class="col-sm-4">
                            <input v-model="keyword" id="keyword" type="text" class="form-control" placeholder="请输入关键词名称">
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.keyword.required" class="help-block">{{ $validation.keyword.required }}</span>
                        </div>
                    </div>
                </validity>
            </div>
            <div class="box-footer">
                <div class="form-group">
                    <div class="col-sm-4 col-sm-offset-3">
                        <button type="submit" class="btn btn-primary btn-flat" :class="{ disabled: $validation.invalid }" :disabled="$validation.invalid">保存</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>