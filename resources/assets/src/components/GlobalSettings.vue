<script>
    import UiRouteSettings from "./RouteSettings";
    export default {
        components: {
            UiRouteSettings
        },
        data: () => {
            return {
                enabled: "site.enabled" in window.settings ? window.settings["site.enabled"] : false,
                name: "site.name" in window.settings ? window.settings["site.name"] : "",
                domain: "site.domain" in window.settings ? window.settings["site.domain"] : "",
                beian: "site.beian" in window.settings ? window.settings["site.beian"] : "",
                company: "site.company" in window.settings ? window.settings["site.company"] : "",
                copyright: "site.copyright" in window.settings ? window.settings["site.copyright"] : "",
                statistics: "site.statistics" in window.settings ? window.settings["site.statistics"] : ""
            };
        },
        methods: {
            onSubmit: function (e) {
                e.preventDefault();
                this.$http.post(window.url + "/api/setting/set", this.$data, {
                    headers: {
                        "Accept": "application/json",
                        "Authorization": "Bearer " + window.localStorage.getItem("access_token"),
                        "X-CSRF-TOKEN": window.csrf_token
                    }
                }).then(response => {
                    window.localStorage.setItem("settings", JSON.stringify(response.body));
                    window.settings = response.body;
                    this.$router.go("/");
                }, response => {
                    window.alert("更新设置失败！");
                });
            }
        }
    };
</script>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">全局设置</h3>
        </div>
        <validator name="validation">
            <form class="form-horizontal" novalidate @submit="onSubmit">
                <div class="box-body">
                    <div class="form-group">
                        <label class="col-sm-3 control-label">站点开启</label>
                        <div class="col-sm-5">
                            <label class="checkbox-inline"><input type="checkbox" v-model="enabled">启用</label>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.name.invalid }">
                        <label class="col-sm-3 control-label">网站名称</label>
                        <div class="col-sm-4">
                            <input v-model="name" type="text" class="form-control" placeholder="请输入网站名称" v-validate:name="{ required: { rule: true, message: '网站名称不能为空' } }">
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.name.required" class="help-block">{{ $validation.name.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.domain.invalid }">
                        <label class="col-sm-3 control-label">网站域名</label>
                        <div class="col-sm-4">
                            <input v-model="domain" type="text" class="form-control" placeholder="请输入网站域名" v-validate:domain="{ required: { rule: true, message: '网站域名不能为空' } }">
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.domain.required" class="help-block">{{ $validation.domain.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.beian.invalid }">
                        <label class="col-sm-3 control-label">备案信息</label>
                        <div class="col-sm-4">
                            <input v-model="beian" type="text" class="form-control" placeholder="请输入备案信息" v-validate:beian="{ required: { rule: true, message: '备案信息不能为空' } }">
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.beian.required" class="help-block">{{ $validation.beian.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.company.invalid }">
                        <label class="col-sm-3 control-label">公司名称</label>
                        <div class="col-sm-4">
                            <input v-model="company" type="text" class="form-control" placeholder="请输入公司名称" v-validate:company="{ required: { rule: true, message: '公司名称不能为空' } }">
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.company.required" class="help-block">{{ $validation.company.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.copyright.invalid }">
                        <label class="col-sm-3 control-label">版权信息</label>
                        <div class="col-sm-4">
                            <input v-model="copyright" type="text" class="form-control" placeholder="请输入版权信息" v-validate:copyright="{ required: { rule: true, message: '版权信息不能为空' } }">
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.copyright.required" class="help-block">{{ $validation.copyright.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.statistics.invalid }">
                        <label class="col-sm-3 control-label">统计代码</label>
                        <div class="col-sm-4">
                            <textarea v-model="statistics" class="form-control" rows="6" placeholder="请输入统计代码" v-validate:statistics="{ required: { rule: true, message: '统计代码不能为空' } }"></textarea>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.statistics.required" class="help-block">{{ $validation.statistics.required }}</span>
                        </div>
                    </div>
                </div>
                <div class="box-footer">
                    <div class="col-sm-4 col-sm-offset-3">
                        <button type="submit" class="btn btn-primary btn-flat" :class="$validation.invalid" :disabled="$validation.invalid">保存</button>
                    </div>
                </div>
            </form>
        </validator>
    </div>
</template>