<script>
    export default {
        props: {
            form: {
                Type: Object,
                default: () => {
                    return {};
                }
            }
        },
        methods: {
            onSubmit: function () {
            }
        }
    };
</script>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title"><slot name="header"></slot></h3>
        </div>
        <validator name="validation">
            <form class="form-horizontal" novalidate @submit.prevent="onSubmit">
                <div class="box-body">
                    <div class="form-group" :class="{ 'has-error': $validation.title.invalid }">
                        <label for="title" class="col-sm-2 control-label">标题</label>
                        <div class="col-sm-10">
                            <input v-model="form.title" id="title" type="text" class="form-control" placeholder="请输入标题" v-validate:title="{ required: { rule: true, message: '网站标题不能为空' } }">
                            <span v-if="$validation.title.required" class="help-block">{{ $validation.title.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.description.invalid }">
                        <label for="description" class="col-sm-2 control-label">描述</label>
                        <div class="col-sm-10">
                            <input v-model="form.description" id="description" type="text" class="form-control" placeholder="请输入描述" v-validate:description="{ required: { rule: true, message: '网站描述不能为空' } }">
                            <span v-if="$validation.description.required" class="help-block">{{ $validation.description.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.keyword.invalid }">
                        <label for="keyword" class="col-sm-2 control-label">关键字</label>
                        <div class="col-sm-10">
                            <input v-model="form.keyword" id="keyword" type="text" class="form-control" placeholder="请输入关键词名称" v-validate:keyword="{ required: { rule: true, message: '关键词不能为空' } }">
                            <span v-if="$validation.keyword.required" class="help-block">{{ $validation.keyword.required }}</span>
                        </div>
                    </div>
                </div>
                <div class="box-footer">
                    <div class="form-group">
                        <div class="col-sm-4 col-sm-offset-3">
                            <button type="submit" class="btn btn-primary btn-flat" :class="{ disabled: $validation.invalid }" :disabled="$validation.invalid">保存</button>
                        </div>
                    </div>
                </div>
            </form>
        </validator>
    </div>
</template>