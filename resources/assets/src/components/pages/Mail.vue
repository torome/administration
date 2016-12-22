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
        <div class="form-horizontal">
            <div class="box-body">
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">协议</label>
                    <div class="col-sm-4">
                        <input name="protocol" type="text" class="form-control" placeholder="请输入协议" v-model="protocol" v-validate data-vv-rules="required">
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">加密方式</label>
                    <div class="col-sm-4">
                        <input name="encryption" type="text" class="form-control" placeholder="请输入加密方式" v-model="encryption" v-validate data-vv-rules="required">
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">主机</label>
                    <div class="col-sm-4">
                        <input name="host" type="text" class="form-control" placeholder="请输入主机地址" v-model="host" v-validate data-vv-rules="required">
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">邮箱</label>
                    <div class="col-sm-4">
                        <input name="mail" type="text" class="form-control" placeholder="请输入邮箱名称" v-model="mail" v-validate data-vv-rules="required">
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">用户名</label>
                    <div class="col-sm-4">
                        <input name="username" type="text" class="form-control" placeholder="请输入用户名称" v-model="username" v-validate data-vv-rules="required">
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">密码</label>
                    <div class="col-sm-4">
                        <input name="password" type="password" class="form-control" placeholder="请输入密码" v-model="password" v-validate data-vv-rules="required">
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