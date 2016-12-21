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
            <h3 class="box-title">邮件管理</h3>
        </div>
        <validation name="validation">
            <div class="form-horizontal">
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
            </div>
        </validation>
    </div>
</template>