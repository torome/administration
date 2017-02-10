<script>
  export default {
    computed: {
      enableXmlMap: {
        get () {
          return this.$store.state.setting['sitemap.enable.xml']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'sitemap.enable.xml',
            value: value
          })
        }
      },
      enableHtmlMap: {
        get () {
          return this.$store.state.setting['sitemap.enable.html']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'sitemap.enable.html',
            value: value
          })
        }
      },
      updateCycle: {
        get () {
          return this.$store.state.setting['sitemap.cycle']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'sitemap.cycle',
            value: value
          })
        }
      },
      onlyContainRecentArticles: {
        get () {
          return this.$store.state.setting['sitemap.recent']
        },
        set (value) {
          this.$store.commit('single', {
            key: 'sitemap.recent',
            value: value
          })
        }
      },
      enableModules () {
        return []
      }
    },
    methods: {
      submit: function (e) {
        this.$validator.validateAll()
        if (this.errors.any()) {
          return false
        }
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
            <div class="form-horizontal">
                <div class="form-group">
                    <label class="col-sm-1 control-label">生成 XML 地图</label>
                    <div class="col-sm-3">
                        <label class="checkbox-inline">
                            <input type="checkbox" v-model="enableXmlMap">启用
                        </label>
                    </div>
                    <div class="col-sm-8">

                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-1 control-label">生成 HTML 地图</label>
                    <div class="col-sm-3">
                        <label class="checkbox-inline">
                            <input type="checkbox" v-model="enableHtmlMap">启用
                        </label>
                    </div>
                    <div class="col-sm-8">

                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('updateCycle') }">
                    <label class="col-sm-1 control-label">更新周期</label>
                    <div class="col-sm-3">
                        <div class="input-group">
                            <input name="updateCycle" type="text" class="form-control" placeholder="请输入更新周期" v-model="updateCycle" v-validate data-vv-rules="required">
                            <div class="input-group-addon">小时</div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('updateCycle')">{{ errors.first('updateCycle') }}</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-1 control-label">只包含最近的文章</label>
                    <div class="col-sm-3">
                        <label class="checkbox-inline">
                            <input type="checkbox" v-model="onlyContainRecentArticles">启用
                        </label>
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block">包含 1000 以内的文章</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-1 control-label">链接包括</label>
                    <div class="col-sm-3">
                        <label class="checkbox-inline" v-for="enableModule in enableModules">
                            <input type="checkbox" v-model="enableModule.enable">{{ enableModule.name }}
                        </label>
                    </div>
                    <div class="col-sm-8">

                    </div>
                </div>
            </div>
        </div>
        <div class="box-footer">
            <button class="btn btn-primary btn-submit" :disabled="errors.any()" @click="submit">保存</button>
        </div>
    </div>
</template>