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
            <h3 class="box-title">路由管理</h3>
    </div>
        <div class="form-horizontal">
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
                <div class="form-group">
                    <div class="col-sm-4 col-sm-offset-3">
                        <button type="submit" class="btn btn-primary btn-flat" :class="{ disabled: $validation.invalid }" :disabled="$validation.invalid">保存</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>