<script>
  export default {
    data () {
      return {
        isOpen: false,
        isShow: false
      }
    },
    methods: {
      open () {
        let _this = this

        _this.isShow = true
        _this.$nextTick(function () {
          _this.isOpen = true
          _this.$refs.modal.focus()
        })
      },
      close () {
        let _this = this

        _this.isOpen = false
        _this.$nextTick(function () {
          setTimeout(() => {
            _this.isShow = false
          }, 500)
        })
      }
    },
    updated () {
      let dialog = this.$jquery(this.$el).find('.modal-dialog')
      let height = (this.$jquery(window).height() - dialog.height()) / 2
      dialog.css('margin-top', height)
    }
  }
</script>
<style scoped>
    .background-darken {
        background: rgba(0, 0, 0, 0.3);
    }

    .modal-dialog > .modal-content {
        border-radius: 4px;
    }

    .modal-dialog > .modal-content > .modal-body {
        background: #f5f5f5;
        padding: 40px;
    }
</style>
<template>
    <div ref="modal" class="modal fade background-darken" tabindex="-1" role="dialog" :class="{in:isOpen,show:isShow}"
         @click.self="close()" @keyup.esc="close()">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close()">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">
                        <slot name="title">Modal</slot>
                    </h4>
                </div>
                <div class="modal-body">
                    <slot name="body">Body</slot>
                </div>
                <div class="modal-footer" style="display: none">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>