<script>
    import UiRouteSettings from "./RouteSettings";
    export default {
        components: {
            UiRouteSettings
        },
        data: () => {
            return {
                siteEnabled: window.settings["site.enabled"],
                siteName: window.settings["site.title"],
                siteDomain: window.settings["site.domain"],
                siteBeian: window.settings["site.beian"],
                companyName: window.settings["site.company"],
                siteCopyright: window.settings["site.copyright"],
                statisticsCode: window.settings["site.statistics"]
            };
        },
        methods: {
            onSubmit: function (e) {
                this.$http.post("/", this.$data);
                e.preventDefault();
            }
        }
    };
</script>
<style>
    .col-sm-offset-4 .btn {
        width: 100%;
    }
</style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">全局设置</h3>
        </div>
        <validator name="validation">
            <form class="form-horizontal" novalidate @submit="onSubmit">
                <div class="box-body">
                    <div class="form-group">
                        <label for="site-enabled" class="col-sm-4 control-label">站点开启</label>
                        <div class="col-sm-4" id="site-enabled">
                            <label class="checkbox-inline"><input type="checkbox" v-model="siteEnabled">启用</label>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.siteName.invalid }">
                        <label class="col-sm-4 control-label">网站名称</label>
                        <div class="col-sm-4">
                            <input v-model="siteName" type="text" class="form-control" placeholder="请输入网站名称" v-validate:site-name="{ required: { rule: true, message: '网站名称不能为空' } }">
                        </div>
                        <div class="col-sm-4">
                            <span v-if="$validation.siteName.required" class="help-block">{{ $validation.siteName.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.siteDomain.invalid }">
                        <label class="col-sm-4 control-label">网站域名</label>
                        <div class="col-sm-4">
                            <input v-model="siteDomain" type="text" class="form-control" placeholder="请输入网站域名" v-validate:site-domain="{ required: { rule: true, message: '网站域名不能为空' } }">
                        </div>
                        <div class="col-sm-4">
                            <span v-if="$validation.siteDomain.required" class="help-block">{{ $validation.siteDomain.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.siteBeian.invalid }">
                        <label class="col-sm-4 control-label">备案信息</label>
                        <div class="col-sm-4">
                            <input v-model="siteBeian" type="text" class="form-control" placeholder="请输入备案信息" v-validate:site-shui-biao="{ required: { rule: true, message: '备案信息不能为空' } }">
                        </div>
                        <div class="col-sm-4">
                            <span v-if="$validation.siteBeian.required" class="help-block">{{ $validation.siteBeian.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.companyName.invalid }">
                        <label class="col-sm-4 control-label">公司名称</label>
                        <div class="col-sm-4">
                            <input v-model="companyName" type="text" class="form-control" placeholder="请输入公司名称" v-validate:company-name="{ required: { rule: true, message: '公司名称不能为空' } }">
                        </div>
                        <div class="col-sm-4">
                            <span v-if="$validation.companyName.required" class="help-block">{{ $validation.companyName.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.siteCopyright.invalid }">
                        <label class="col-sm-4 control-label">版权信息</label>
                        <div class="col-sm-4">
                            <input v-model="siteCopyright" type="text" class="form-control" placeholder="请输入版权信息" v-validate:site-copyright="{ required: { rule: true, message: '版权信息不能为空' } }">
                        </div>
                        <div class="col-sm-4">
                            <span v-if="$validation.siteCopyright.required" class="help-block">{{ $validation.siteCopyright.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.statisticsCode.invalid }">
                        <label class="col-sm-4 control-label">统计代码</label>
                        <div class="col-sm-4">
                            <textarea v-model="statisticsCode" class="form-control" rows="6" placeholder="请输入统计代码" v-validate:statistics-code="{ required: { rule: true, message: '统计代码不能为空' } }"></textarea>
                        </div>
                        <div class="col-sm-4">
                            <span v-if="$validation.statisticsCode.required" class="help-block">{{ $validation.statisticsCode.required }}</span>
                        </div>
                    </div>
                </div>
                <div class="box-footer">
                    <div class="col-sm-4 col-sm-offset-4">
                        <button type="submit" class="btn btn-primary btn-flat" :class="$validation.invalid" :disabled="$validation.invalid">保存</button>
                    </div>
                </div>
            </form>
        </validator>
    </div>
</template>