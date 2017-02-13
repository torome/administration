<script>
  export default {
    mounted () {
      let _this = this

      const style = global.document.createElement('link')
      style.setAttribute('rel', 'stylesheet')
      style.setAttribute('href', window.asset + '/neditor/themes/default/css/ueditor.min.css')

      _this.$el.appendChild(style)

      const config = window.document.createElement('script')
      config.setAttribute('src', window.asset + '/neditor/neditor.config.js')

      _this.$el.appendChild(config)

      config.onload = () => {
        const source = window.document.createElement('script')
        source.setAttribute('src', window.asset + '/neditor/ueditor.all.min.js')

        _this.$el.appendChild(source)

        source.onload = () => {
          const editor = window.document.createElement('script')
          editor.setAttribute('id', 'neditor')
          editor.innerHTML = this.content

          _this.$el.appendChild(editor)

          const language = global.document.createElement('script')
          language.setAttribute('src', window.asset + '/neditor/lang/zh-cn/zh-cn.js')

          _this.$el.appendChild(language)

          language.onload = () => {
            let ue = window.UE.getEditor('neditor', {
              initialFrameHeight: this.height,
              initialFrameWidth: this.width
            })

            ue.addListener('contentChange', () => {
              _this.$emit('input', ue.getContent())
            })
          }
        }
      }
    },
    props: {
      content: {
        type: String
      },
      height: {
        type: String
      },
      width: {
        type: String
      }
    }
  }
</script>
<style></style>
<template>
    <div class="editor"></div>
</template>