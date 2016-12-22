<script>
  export default {
    data: () => {
      return {
        enableXmlMap: false,
        enableHtmlMap: false,
        updateCycle: 0,
        onlyContainRecentArticles: false,
        enableModules: []
      };
    },
    methods: {
      submit: function (e) {}
    }
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
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">更新周期</label>
                    <div class="col-sm-4">
                        <div class="input-group">
                            <input name="updateCycle" type="text" class="form-control" placeholder="请输入更新周期" v-model="updateCycle" v-validate data-vv-rules="required">
                            <div class="input-group-addon">小时</div>
                        </div>
                        <span class="help-block" v-show="errors.has('updateCycle')">{{ errors.first('updateCycle') }}</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">只包含最近的文章</label>
                    <div class="col-sm-4">
                        <label class="checkbox-inline"><input type="checkbox" v-model="onlyContainRecentArticles">启用</label>
                        <span class="help-block" v-show="errors.has('domain')">包含 1000 以内的文章</span>
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
                        <button class="btn btn-primary btn-flat" :disabled="errors.any()">保存</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>