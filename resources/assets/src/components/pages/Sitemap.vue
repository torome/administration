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
            <h3 class="box-title">Sitemap 管理</h3>
    </div>
        <div class="form-horizontal">
            <div class="box-body">
                <div class="form-group">
                    <label class="col-sm-3 control-label">生成 XML 地图</label>
                    <div class="col-sm-4">
                        <label class="checkbox-inline"><input type="checkbox" v-model="enableXmlMap">启用</label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">生成 HTML 地图</label>
                    <div class="col-sm-4">
                        <label class="checkbox-inline"><input type="checkbox" v-model="enableHtmlMap">启用</label>
                    </div>
                </div>
                <validity field="updateCycle" :validators="{ required: { rule: true, message: '更新周期不能为空' } }">
                    <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                        <label class="col-sm-3 control-label">更新周期</label>
                        <div class="col-sm-4">
                            <div class="input-group">
                                <input v-model="updateCycle" type="text" class="form-control" placeholder="请输入更新周期" v-model="canManagementFileExtension" v-validate data-vv-rules="required">
                                <div class="input-group-addon">小时</div>
                            </div>
                            <span v-if="$validation.updateCycle.required" class="help-block">{{ $validation.updateCycle.required }}</span>
                        </div>
                    </div>
                </validity>
                <div class="form-group">
                    <label class="col-sm-3 control-label">只包含最近的文章</label>
                    <div class="col-sm-4">
                        <label class="checkbox-inline"><input type="checkbox" v-model="onlyContainRecentArticles">启用</label>
                        <span class="help-block">包含 1000 以内的文章</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">链接包括</label>
                    <div class="col-sm-4">
                        <label class="checkbox-inline" v-for="enableModule in enableModules"><input type="checkbox" v-model="enableModule.enable">{{ enableModule.name }}</label>
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