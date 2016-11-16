<script>
    export default {
        props: {
            name: {
                Type: String,
                default: ""
            },
            alias: {
                Type: String,
                default: ""
            }
        },
        methods: {
            onSubmit: function (e) {
                console.log("update");
                let item = {};
                item.name = this.name;
                item.alias = this.alias;
                this.$emit("update", item);
                e.preventDefault();
            }
        }
    };
</script>
<template>
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">编辑导航条目</h3>
        </div>
        <validator name="validation">
            <form class="form-horizontal" novalidate @submit="onSubmit">
                <div class="box-body">
                    <div class="form-group" :class="{ "has-error": $validation.name.invalid }">
                    <label for="name" class="col-sm-2 control-label">名称</label>
                    <div class="col-sm-10">
                        <input v-model="name" id="name" type="text" class="form-control" placeholder="请输入导航名称" v-validate:name="{ required: { rule: true, initial: 'off', message: '导航名称不能为空' } }">
                        <span v-if="$validation.name.required" class="help-block">{{ $validation.name.required }}</span>
                    </div>
                </div>
                <div class="form-group" :class="{ "has-error": $validation.alias.invalid }">
                <label for="alias" class="col-sm-2 control-label">别名</label>
                <div class="col-sm-10">
                    <input v-model="alias" id="alias" type="text" class="form-control" placeholder="请输入导航别名" v-validate:alias="{ required: { rule: true, initial: 'off', message: '导航别名不能为空' } }">
                    <span v-if="$validation.alias.required" class="help-block">{{ $validation.alias.required }}</span>
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