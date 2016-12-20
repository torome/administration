<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState([
      'message'
    ]),
    methods: {
      close: function () {
        this.$store.commit('message', {
          type: 'error',
          text: 'Has error!'
        })
      }
    }
  }
</script>
<template>
    <div class="content-wrapper">
        <section class="content">
            <div class="alert alert-dismissible" :class="'alert-' + message.type">
                <button type="button" class="close" @click="close">×</button>
                <h4><i class="icon fa fa-check"></i>提示：</h4>
                <p>{{ message.text }}</p>
            </div>
            <slot></slot>
        </section>
    </div>
</template>