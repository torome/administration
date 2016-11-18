<script>
    export default {
        data: () => {
            return {
                protocol: window.settings.hasOwnProperty("mail.protocol") ? window.settings["mail.protocol"] : "smtp",
                encryption: window.settings.hasOwnProperty("mail.encryption") ? window.settings["mail.encryption"] : "tls",
                port: window.settings.hasOwnProperty("mail.port") ? window.settings["mail.port"] : "",
                host: window.settings.hasOwnProperty("mail.host") ? window.settings["mail.host"] : "",
                mail: window.settings.hasOwnProperty("mail.mail") ? window.settings["mail.mail"] : "",
                username: window.settings.hasOwnProperty("mail.username") ? window.settings["mail.username"] : "",
                password: window.settings.hasOwnProperty("mail.password") ? window.settings["mail.password"] : ""
            };
        },
        methods: {
            onSubmit: function (e) {
                e.preventDefault();
                this.$http.post(window.api + "/email", this.data).then(response => {
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
            <h3 class="box-title">邮件发送设置</h3>
        </div>
        <validator name="validation">
            <form class="form-horizontal" novalidate @submit="onSubmit">
                <div class="box-body">
                    <div class="form-group">
                        <label class="col-sm-3 control-label">协议</label>
                        <div class="col-sm-4">
                            <input v-model="protocol" type="text" class="form-control" placeholder="请输入协议" v-validate:protocol="{ required: { rule: true, message: '协议不能为空' } }">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">加密方式</label>
                        <div class="col-sm-4">
                            <input v-model="encryption" type="text" class="form-control" placeholder="请输入加密方式" v-validate:encryption="{ required: { rule: true, message: '加密方式不能为空' } }">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">主机</label>
                        <div class="col-sm-4">
                            <input v-model="host" type="text" class="form-control" placeholder="请输入主机地址" v-validate:host="{ required: { rule: true, message: '主机地址不能为空' } }">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">邮箱</label>
                        <div class="col-sm-4">
                            <input v-model="mail" type="text" class="form-control" placeholder="请输入邮箱名称" v-validate:mail="{ required: { rule: true, message: '邮箱名称不能为空' } }">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">用户名</label>
                        <div class="col-sm-4">
                            <input v-model="username" type="text" class="form-control" placeholder="请输入用户名称" v-validate:username="{ required: { rule: true, message: '用户名称不能为空' } }">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">密码</label>
                        <div class="col-sm-4">
                            <input v-model="password" type="password" class="form-control" placeholder="请输入密码" v-validate:password="{ required: { rule: true, message: '密码不能为空' } }">
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