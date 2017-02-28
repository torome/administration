<script>
  import {mapState} from 'vuex'
  import {fixStyle} from '../../notadd'
  export default {
    computed: mapState([
      'message'
    ]),
    methods: {
      close: function () {
        this.$store.commit('message', {
          show: false
        })
      }
    },
    mounted () {
      fixStyle()
    },
    watch: {
      message: {
        deep: true,
        handler: function (val, old) {
          let _this = this
          let _message = _this.$store.state.message
          if (val.show === true && old.show === false) {
            _this.$jquery('html, body').animate({
              scrollTop: 0
            }, 'slow')
            let _callback = _message.hasOwnProperty('callback') ? _message.callback : function () {
              _this.$store.commit('message', {
                show: false
              })
            }
            _message.type === 'notice' && setTimeout(_callback, _message.hasOwnProperty('time') ? _message.time : 2500)
          }
        }
      }
    }
  }
</script>
<template>
    <div class="content-wrapper">
        <section class="content">
            <div class="alert alert-dismissible" :class="'alert-' + message.type" v-show="message.show">
                <button type="button" class="close" @click="close">×</button>
                <div>
                    <h4>提示：</h4>
                    <p v-for="text in message.text">{{ text }}</p>
                </div>
            </div>
            <slot></slot>
        </section>
    </div>
</template>