<script>
  export default {
    computed: {
      xml: {
        get () {
          return this.$store.state.setting.hasOwnProperty('sitemap.xml') ? this.$store.state.setting['sitemap.xml'] : '0'
        },
        set (value) {
          this.$store.commit('single', {
            key: 'sitemap.xml',
            value: value
          })
        }
      },
      html: {
        get () {
          return this.$store.state.setting.hasOwnProperty('sitemap.html') ? this.$store.state.setting['sitemap.html'] : '0'
        },
        set (value) {
          this.$store.commit('single', {
            key: 'sitemap.html',
            value: value
          })
        }
      },
      cycle: {
        get () {
          return this.$store.state.setting.hasOwnProperty('sitemap.cycle') ? this.$store.state.setting['sitemap.cycle'] : '24'
        },
        set (value) {
          this.$store.commit('single', {
            key: 'sitemap.cycle',
            value: value
          })
        }
      },
      recently: {
        get () {
          return this.$store.state.setting.hasOwnProperty('sitemap.recently') ? this.$store.state.setting['sitemap.recently'] : '1'
        },
        set (value) {
          this.$store.commit('single', {
            key: 'sitemap.recently',
            value: value
          })
        }
      },
      enableModules () {
        return []
      }
    },
    methods: {
      submit: function () {
        let _this = this
        _this.$jquery('button.btn-submit').prop('disabled', true)
        _this.$jquery('button.btn-submit').text('提交中...')
        _this.$http.post(window.api + '/sitemap', {
          xml: _this.xml,
          html: _this.html,
          cycle: _this.cycle,
          recently: _this.recently
        }).then(response => {
          _this.$store.commit('setting', response.data.data)
          _this.$store.commit('message', {
            show: true,
            type: 'notice',
            text: '更新设置成功！'
          })
          _this.$jquery('button.btn-submit').prop('disabled', false)
          _this.$jquery('button.btn-submit').text('保存')
        }, response => {
          console.log(response.data)
        })
      }
    },
    mounted () {
      this.$store.commit('title', 'Sitemap管理 - Notadd Administration')
    }
  }
</script>
<style></style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">Sitemap 管理</h3>
        </div>
        <div class="box-body">
            <div class="form-horizontal" @keyup.enter="submit">
                <div class="form-group">
                    <label class="col-sm-1 control-label">生成 XML 地图</label>
                    <div class="col-sm-3">
                        <div class="btn-group btn-switch">
                            <label class="btn btn-primary" :class="{ 'active': xml === '1' }">
                                <input type="radio" value="1" v-model="xml"> 开启
                            </label>
                            <label class="btn btn-primary" :class="{ 'active': xml === '0' }">
                                <input type="radio" value="0" v-model="xml"> 关闭
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-1 control-label">生成 HTML 地图</label>
                    <div class="col-sm-3">
                        <div class="btn-group btn-switch">
                            <label class="btn btn-primary" :class="{ 'active': html === '1' }">
                                <input type="radio" value="1" v-model="html"> 开启
                            </label>
                            <label class="btn btn-primary" :class="{ 'active': html === '0' }">
                                <input type="radio" value="0" v-model="html"> 关闭
                            </label>
                        </div>
                    </div>
                </div>
                <!--<div class="form-group">-->
                    <!--<label class="col-sm-1 control-label">更新周期</label>-->
                    <!--<div class="col-sm-3">-->
                        <!--<div class="input-group">-->
                            <!--<input name="cycle" type="text" class="form-control" placeholder="请输入更新周期" v-model="cycle" v-validate data-vv-rules="required">-->
                            <!--<div class="input-group-addon">小时</div>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="col-sm-8">-->
                        <!--<span class="help-block"></span>-->
                    <!--</div>-->
                <!--</div>-->
                <div class="form-group">
                    <label class="col-sm-1 control-label">只包含最近的文章</label>
                    <div class="col-sm-3">
                        <div class="btn-group btn-switch">
                            <label class="btn btn-primary" :class="{ 'active': recently === '1' }">
                                <input type="radio" value="1" v-model="recently"> 开启
                            </label>
                            <label class="btn btn-primary" :class="{ 'active': recently === '0' }">
                                <input type="radio" value="0" v-model="recently"> 关闭
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">包含 1000 以内的文章</span>
                    </div>
                </div>
                <!--<div class="form-group">-->
                    <!--<label class="col-sm-1 control-label">链接包括</label>-->
                    <!--<div class="col-sm-3">-->
                        <!--<label class="checkbox-inline" v-for="enableModule in enableModules">-->
                            <!--<input type="checkbox" v-model="enableModule.enable">{{ enableModule.name }}-->
                        <!--</label>-->
                    <!--</div>-->
                <!--</div>-->
            </div>
        </div>
        <div class="box-footer">
            <button class="btn btn-primary btn-submit" @click="submit">保存</button>
        </div>
    </div>
</template>