<script>
  import Vue from 'vue'
  import store from '../../stores'
  export default {
    beforeRouteEnter (to, from, next) {
      store.commit('progress', 'start')
      Vue.http.post(window.api + '/module').then(function (response) {
        next((vm) => {
          vm.list = response.data.data
          store.commit('progress', 'done')
        })
      }).catch(() => {
        store.commit('progress', 'fail')
      })
    },
    data () {
      return {
        list: []
      }
    },
    methods: {
      enabled: function (module, event) {
        let _this = this
        let now = _this.$jquery(event.target).val()
        let old = module.enabled ? '1' : '0'
        now !== old && _this.$http.post(window.api + '/module/enable', {
          name: module.name,
          value: now
        }).then(function (response) {
          _this.$store.commit('message', {
            show: true,
            type: 'notice',
            text: '开启或关闭模块成功，5秒后将重载网站！'
          })
          setTimeout(function () {
            window.location.reload()
          }, 5000)
        })
      },
      submit: function (e) {
        let _this = this
        _this.$validator.validateAll()
        if (_this.errors.any()) {
          return false
        }
      }
    },
    mounted () {
      this.$store.commit('title', '模块管理 - Notadd Administration')
    }
  }
</script>
<style scoped>
    .box {
        border-top: none;
        padding-left: 40px;
        padding-right: 40px;
    }

    .box-body {
        border-bottom: 1px solid #eeeeee;
        border-radius: 0;
        border-top: 1px solid #eeeeee;
    }

    .box-body > .table > tbody > tr > td {
        border-color: #eeeeee;
        height: 60px;
        vertical-align: middle;
    }

    .box-footer {
        text-align: right;
    }

    .box-footer,
    .box-header {
        font-size: 20px;
        height: 80px;
        padding: 23px 0;
        position: relative;
    }

    .none-item {
        background: url("../../../static/images/info.svg") left center no-repeat;
        color: #888;
        font-size: 20px;
        height: 40px;
        line-height: 40px;
        margin: 20px 0;
        padding-left: 50px;
    }
</style>
<template>
    <div class="box">
        <div class="box-header">模块管理</div>
        <div class="box-body table-responsive no-padding">
            <div class="none-item" v-if="list.length === 0">尚未安装任何模块哦！</div>
            <table class="table table-hover">
                <colgroup>
                    <col class="col-md-2">
                    <col class="col-md-4">
                    <col class="col-md-4">
                    <col class="col-md-2">
                </colgroup>
                <tbody>
                <tr v-for="module in list">
                    <td>{{ module.name }}</td>
                    <td>{{ module.author.join(',') }}</td>
                    <td>{{ module.description }}</td>
                    <td>
                        <div class="btn-group btn-switch">
                            <label class="btn btn-primary" :class="{ active: module.enabled }">
                                <input type="radio" value="1" @change="enabled(module, $event)"> 开启
                            </label>
                            <label class="btn btn-primary" :class="{ active: !module.enabled }">
                                <input type="radio" value="0" @change="enabled(module, $event)"> 关闭
                            </label>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="box-footer"></div>
    </div>
</template>