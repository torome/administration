<script>
  import { mapState } from 'vuex'

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
    }
  }
</script>
<template>
    <div class="content-wrapper">
        <section class="content">
            <div class="alert alert-dismissible" :class="'alert-' + message.type" v-show="message.show">
                <button type="button" class="close" @click="close">×</button>
                <i class="icon fa fa-check"></i>
                <div>
                    <h4>提示：</h4>
                    <p>{{ message.text }}</p>
                </div>
            </div>
            <slot></slot>
        </section>
    </div>
</template>