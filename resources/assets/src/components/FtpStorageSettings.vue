<script>
    export default {
        data: () => {
            return {
                host: "",
                port: 21,
                path: "",
                user: "",
                password: ""
            };
        },
        ready: function () {
            this.$parent.storageTypeSettingsValidation = this.$validation;
            this.$http.get("ftp-settings.json").then((response) => {
                let data = response.body;
                this.$data = data;
                this.$activateValidator();
            });
        },
        events: {
            submit: function () {
                console.log("submit");
            }
        }
    };
</script>
<template>
    <validator lazy name="validation">
        <div class="form-group" :class="{ "has-error": $validation.host.invalid }">
        <label for="host" class="col-sm-2 control-label">主机</label>
        <div class="col-sm-10">
            <input v-model="host" id="host" type="text" class="form-control"
                   placeholder="请输入主机地址"
                   v-validate:host="{ required: { rule: true, message: "主机地址不能为空" } }">
            <span v-if="$validation.host.required" class="help-block">{{ $validation.host.required }}</span>
        </div>
        </div>
        <div class="form-group" :class="{ "has-error": $validation.port.invalid }">
        <label for="port" class="col-sm-2 control-label">端口</label>
        <div class="col-sm-10">
            <input v-model="port" id="port" type="text" class="form-control"
                   placeholder="请输入端口号"
                   v-validate:port="{ required: { rule: true, message: "端口不能为空" } }">
            <span v-if="$validation.port.required" class="help-block">{{ $validation.port.required }}</span>
        </div>
        </div>
        <div class="form-group" :class="{ "has-error": $validation.path.invalid }">
        <label for="path" class="col-sm-2 control-label">路径</label>
        <div class="col-sm-10">
            <input v-model="path" id="path" type="text" class="form-control"
                   placeholder="请输入路径"
                   v-validate:path="{ required: { rule: true, message: "路径不能为空" } }">
            <span v-if="$validation.path.required" class="help-block">{{ $validation.path.required }}</span>
        </div>
        </div>
        <div class="form-group" :class="{ "has-error": $validation.user.invalid }">
        <label for="user" class="col-sm-2 control-label">用户</label>
        <div class="col-sm-10">
            <input v-model="user" id="user" type="text" class="form-control"
                   placeholder="请输入用户名"
                   v-validate:user="{ required: { rule: true, message: "用户名不能为空" } }">
            <span v-if="$validation.user.required" class="help-block">{{ $validation.user.required }}</span>
        </div>
        </div>
        <div class="form-group" :class="{ "has-error": $validation.password.invalid }">
        <label for="password" class="col-sm-2 control-label">密码</label>
        <div class="col-sm-10">
            <input v-model="password" id="password" type="text" class="form-control"
                   placeholder="请输入密码"
                   v-validate:password="{ required: { rule: true, message: "密码不能为空" } }">
            <span v-if="$validation.password.required" class="help-block">{{ $validation.password.required }}</span>
        </div>
        </div>
    </validator>
</template>