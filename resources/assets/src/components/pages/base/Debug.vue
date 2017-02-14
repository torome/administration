<script>
  export default {
    computed: {
      enabled: {
        get () {
          return this.$store.state.setting['debug.enabled']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'debug.enabled',
            value: value
          })
        }
      }
    },
    methods: {
      submit: function (e) {
        let _this = this
        _this.$validator.validateAll()
        if (_this.errors.any()) {
          return false
        }
        _this.$http.post(window.api + '/debug', {
          enabled: this.enabled
        }).then(response => {
          _this.$store.commit('setting', response.body.data)
          _this.$store.commit('message', {
            show: true,
            type: 'info',
            text: '更新SEO设置成功！'
          })
        }, response => {
          window.alert('更新设置失败！')
        })
      }
    },
    mounted () {
      this.$store.commit('title', '调试管理 - Notadd Administration')
    }
  }
</script>
<style></style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">调试控制</h3>
        </div>
        <div class="box-body">
            <div class="form-horizontal">
                <div class="form-group">
                    <label class="col-sm-1 control-label">DEBUG 模式</label>
                    <div class="col-sm-3">
                        <div class="btn-group btn-switch">
                            <label class="btn btn-primary" :class="{ 'active': enabled === '1' }">
                                <input type="radio" autocomplete="off" value="1" v-model="enabled"> 开启
                            </label>
                            <label class="btn btn-primary" :class="{ 'active': enabled === '0' }">
                                <input type="radio" autocomplete="off" value="0" v-model="enabled"> 关闭
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-footer">
            <button class="btn btn-primary btn-submit" :disabled="errors.any()" @click="submit">保存</button>
        </div>
    </div>
</template>