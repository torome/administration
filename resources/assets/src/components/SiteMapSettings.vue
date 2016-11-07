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
        ready: function () {
            this.$http.get("sitemap.json").then((response) => {
                let data = response.body;
                this.$data = data;
            });
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
            <h3 class="box-title">站点地图</h3>
        </div>
        <validator name="validation">
            <form class="form-horizontal" novalidate @submit.prevent="onSubmit">
                <div class="box-body">
                    <div class="form-group">
                        <label for="enable-xml-map" class="col-sm-2 control-label">生成 XML 地图</label>
                        <div class="col-sm-10" id="enable-xml-map">
                            <label class="checkbox-inline">
                                <input type="checkbox" v-model="enableXmlMap">
                                启用
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="enable-html-map" class="col-sm-2 control-label">生成 HTML 地图</label>
                        <div class="col-sm-10" id="enable-html-map">
                            <label class="checkbox-inline">
                                <input type="checkbox" v-model="enableHtmlMap">
                                启用
                            </label>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.updateCycle.invalid }">
                        <label for="update-cycle" class="col-sm-2 control-label">更新周期</label>
                        <div class="col-sm-10">
                            <div class="input-group">
                                <input id="update-cycle" v-model="updateCycle" type="text" class="form-control" placeholder="请输入更新周期"
                                       v-validate:update-cycle="{ required: { rule: true, message: '更新周期不能为空' } }">
                                <div class="input-group-addon">小时</div>
                            </div>
                            <span v-if="$validation.updateCycle.required" class="help-block">{{ $validation.updateCycle.required }}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="only-contain-recent-articles" class="col-sm-2 control-label">只包含最近的文章</label>
                        <div class="col-sm-10" id="only-contain-recent-articles">
                            <label class="checkbox-inline">
                                <input type="checkbox" v-model="onlyContainRecentArticles">
                                启用
                            </label>
                            <span class="help-block">包含 1000 以内的文章</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">链接包括</label>
                        <div class="col-sm-10">
                            <label class="checkbox-inline" v-for="enableModule in enableModules">
                                <input type="checkbox" v-model="enableModule.enable">
                                {{ enableModule.name }}
                            </label>
                        </div>
                    </div>
                </div>
                <div class="box-footer">
                    <button type="submit" class="btn btn-primary pull-right" :disabled="$validation.invalid">保存</button>
                </div>
            </form>
        </validator>
    </div>
</template>