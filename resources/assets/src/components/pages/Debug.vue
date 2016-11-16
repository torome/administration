<script>
    export default {
        data: () => {
            return {
                enabled: window.settings.hasOwnProperty("debug.enabled") ? window.settings["debug.enabled"] : "0"
            };
        },
        methods: {
            onSubmit: function (e) {
                e.preventDefault();
                this.$http.post(window.api + "/debug", this.$data).then(response => {
                    window.localStorage.setItem("settings", JSON.stringify(response.body));
                    window.settings = response.body;
                }, response => {
                    window.alert("更新设置失败！");
                });
            }
        }
    };
</script>
<template>
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">开发工具</h3>
        </div>
        <validator name="validation">
            <form class="form-horizontal" novalidate @submit="onSubmit">
                <div class="box-body">
                    <div class="form-group">
                        <label class="col-sm-3 control-label">DEBUG 模式</label>
                        <div class="col-sm-4">
                            <div class="btn-group btn-switch">
                                <label class="btn btn-primary btn-flat" :class="{ 'active': enabled === '1' }">
                                    <input type="radio" autocomplete="off" value="1" v-model="enabled"> 开启
                                </label>
                                <label class="btn btn-primary btn-flat" :class="{ 'active': enabled === '0' }">
                                    <input type="radio" autocomplete="off" value="0" v-model="enabled"> 关闭
                                </label>
                            </div>
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