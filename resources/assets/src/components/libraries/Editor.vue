<script>
  export default {
    mounted () {
      const style = global.document.createElement('link')
      style.setAttribute('rel', 'stylesheet')
      style.setAttribute('href', window.asset + '/ueditor/themes/default/css/ueditor.css')

      this.$el.appendChild(style)

      const config = window.document.createElement('script')
      config.setAttribute('src', window.asset + '/ueditor/ueditor.config.js')

      this.$el.appendChild(config)

      config.onload = () => {
        const source = window.document.createElement('script')
        source.setAttribute('src', window.asset + '/ueditor/ueditor.all.js')

        this.$el.appendChild(source)

        source.onload = () => {
          const editor = window.document.createElement('script')
          editor.setAttribute('id', 'ueditor')
          editor.innerHTML = this.content

          this.$el.appendChild(editor)

          const language = global.document.createElement('script')
          language.setAttribute('src', window.asset + '/ueditor/lang/zh-cn/zh-cn.js')

          this.$el.appendChild(language)

          language.onload = () => {
            let ue = window.UE.getEditor('ueditor', {
              initialFrameHeight: this.height,
              initialFrameWidth: this.width
            })

            ue.addListener('contentChange', () => {
              this.$emit('change', ue.getContent())
            })
          }
        }
      }
      this.$on('change', function (content) {
        this.$parent.content = content
      })
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