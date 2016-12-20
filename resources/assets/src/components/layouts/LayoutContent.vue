<script>
  import $ from 'jquery'
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters([
      'message'
    ]),
    ready: function () {
      $(() => {
        $.AdminLTE.layout.activate()
      })
    }
  }
</script>
<template>
    <div class="content-wrapper">
        <section class="content">
            <div class="alert alert-dismissible" :class="message.type">
                <button type="button" class="close" @click="hide">×</button>
                <h4><i class="icon fa fa-check"></i>提示：</h4>
                <p>{{ message.text }}</p>
            </div>
            <slot></slot>
        </section>
    </div>
</template>