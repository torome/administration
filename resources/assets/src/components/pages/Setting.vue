<script>
  export default {
    computed: {
      enabled: {
        get () {
          return this.$store.state.setting.enabled
        },
        set (value) {
        }
      },
      name: {
        get () {
          return this.$store.state.setting.name
        }
      }
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
            <h3 class="box-title">全局设置</h3>
        </div>
        <div class="form-horizontal">
            <div class="box-body">
                <div class="form-group">
                    <label class="col-sm-3 control-label">站点开启</label>
                    <div class="col-sm-4">
                        <div class="btn-group btn-switch">
                            <label class="btn btn-primary btn-flat" :class="{ active: enabled === '1' }">
                                <input type="radio" v-model="enabled" value="1"> 开启
                            </label>
                            <label class="btn btn-primary btn-flat" :class="{ active: enabled === '0' }">
                                <input type="radio" v-model="enabled" value="0"> 关闭
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('name') }">
                    <label class="col-sm-3 control-label">网站名称</label>
                    <div class="col-sm-4">
                        <input name="name" type="text" class="form-control" placeholder="请输入网站名称" v-model="name" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('name')">网站名称不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">网站域名</label>
                    <div class="col-sm-4">
                        <input name="domain" type="text" class="form-control" placeholder="请输入网站域名" v-model="domain" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('domain')">网站域名不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('beian') }">
                    <label class="col-sm-3 control-label">备案信息</label>
                    <div class="col-sm-4">
                        <input name="beian" type="text" class="form-control" placeholder="请输入备案信息" v-model="beian" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('beian')">备案信息不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('company') }">
                    <label class="col-sm-3 control-label">公司名称</label>
                    <div class="col-sm-4">
                        <input name="company" type="text" class="form-control" placeholder="请输入公司名称" v-model="company" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('company')">公司名称不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('copyright') }">
                    <label class="col-sm-3 control-label">版权信息</label>
                    <div class="col-sm-4">
                        <input name="copyright" type="text" class="form-control" placeholder="请输入版权信息" v-model="copyright" v-validate data-vv-rules="required">
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('copyright')">版权信息不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('statistics') }">
                    <label class="col-sm-3 control-label">统计代码</label>
                    <div class="col-sm-4">
                        <textarea name="statistics" class="form-control" rows="6" placeholder="请输入统计代码"></textarea>
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('statistics')">统计代码不能为空</span>
                    </div>
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
</template>