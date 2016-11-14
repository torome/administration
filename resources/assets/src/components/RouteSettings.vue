<script>
    export default {
        data: () => {
            return {
                model: {
                    routers: ["bbs", "we_chat", "user"],
                    defaultRouter: "we_chat",
                    mode: "sub_domain",
                    cookiesScope: ".aaa.com"
                },
                form: [
                    {
                        label: "文章",
                        text: {
                            value: "bbs",
                            placeholder: "请输入文章路由",
                            validate: {required: {rule: true, message: "文章路由不能为空"}},
                            model: ""
                        },
                        radio: {label: "设为默认", value: "bbs", model: ""}
                    },
                    {
                        label: "微信",
                        text: {
                            value: "wechat",
                            placeholder: "请输入微信路由",
                            validate: {required: {rule: true, message: "微信路由不能为空"}},
                            model: ""
                        },
                        radio: {label: "设为默认", value: "we_chat", model: ""}
                    },
                    {
                        label: "用户",
                        text: {
                            value: "user",
                            placeholder: "请输入用户路由",
                            validate: {required: {rule: true, message: "用户路由不能为空"}},
                            model: ""
                        },
                        radio: {label: "设为默认", value: "user", model: ""}
                    },
                    {
                        label: "模式",
                        radioGroup: [
                            {
                                label: "子域名",
                                value: "sub_domain",
                                validate: {required: {rule: true, message: "用户模式必须选择其中一种"}},
                                model: ""
                            },
                            {
                                label: "子目录",
                                value: "sub_directory",
                                model: ""
                            }
                        ]
                    },
                    {
                        label: "cookies 作用域",
                        text: {
                            value: ".aaa.com",
                            placeholder: "请输入 cookies 作用域",
                            validate: {required: {rule: true, message: "cookies 作用域不能为空"}},
                            model: ""
                        }
                    }
                ]
            };
        },
        methods: {
            onSubmit: function () {
            }
        },
        created: function () {
            this.$emit("bind", this.$data);
        }
    };
</script>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">路由管理</h3>
        </div>
        <validator name="validation">
            <form class="form-horizontal" novalidate @submit.prevent="onSubmit">
                <div class="box-body">
                    <div class="form-group" v-for="formGroup in form">
                        <template v-if="formGroup.label">
                            <label class="col-sm-3 control-label">{{ formGroup.label }}</label>
                        </template>
                        <template v-if="formGroup.text">
                            <div class="col-sm-4">
                                <input type="text" class="form-control" :placeholder="formGroup.text.placeholder" :field="'form-group-' + $index" v-validate="formGroup.text.validate" v-model="formGroup.text.model">
                            </div>
                        </template>
                    </div>
                    <div v-for="uiRouter in ui.routers" class="form-group" :class="{ 'has-error': $validation['uiRouter' + $index].invalid }">
                        <label :for="'uiRouter' + $index" class="col-sm-2 control-label">{{ uiRouter.label }}</label>
                        <div class="col-sm-8">
                            <input v-model="model.routers[$index]" :id="'uiRouter' + $index" type="text" class="form-control" :placeholder="uiRouter.text.placeholder" v-validate="uiRouter.text.validate" :field="'uiRouter' + $index">
                            <span v-if="$validation['uiRouter' + $index].required" class="help-block">{{ $validation['uiRouter' + $index].required }}</span>
                        </div>
                        <div class="col-sm-2">
                            <label class="radio-inline"><input type="radio" v-model="model.defaultRouter" :value="uiRouter.radio.value">设为默认</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">{{ ui.mode.label }}</label>
                        <div class="col-sm-10">
                            <label v-for="radio in ui.mode.radioGroup" class="radio-inline"><input type="radio" v-model="model.mode" :value="radio.value">{{ radio.label }}</label>
                        </div>
                    </div>
                </div>
                <div class="box-footer">
                    <div class="col-sm-4 col-sm-offset-3">
                        <button type="submit" class="btn btn-primary pull-right" :class="{ disabled: $validation.invalid }" :disabled="$validation.invalid">保存</button>
                    </div>
                </div>
            </form>
        </validator>
    </div>
</template>