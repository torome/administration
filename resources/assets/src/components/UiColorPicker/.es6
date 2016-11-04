import "bootstrap-colorpicker"

export default {
  props: {
    options: {
      Type: Object,
      default: () => { return {} }
    },
    value: {
      Type: String,
      default: false
    },
    vModel: {
      Type: String
    }
  },
  ready: function () {
    let vModel = this.$parent[this.vModel]
    if (vModel != undefined) {
      this.options.color = this.value = vModel
    } else {
      this.options.color = this.value
    }

    let colorpicker = $(this.$el).colorpicker(this.options)

    if (vModel != undefined) {
      colorpicker.on("changeColor", (e) => {
        this.$parent[this.vModel] = e.color.toHex()
      })
    }
  }

}
