import Slider from "bootstrap-slider"

export default {
  props: {
    options: {
      Type: Object,
      default: () => {
        return {}
      }
    },
    value: {
      Type: Number,
      default: 0
    },
    vModel: {
      Type: String
    }
  },
  ready: function () {
    let vModel = this.$parent[this.vModel]
    if (vModel != undefined) {
      this.options.value = this.value = vModel
    } else {
      this.options.value = this.value
    }

    let slider = new Slider(this.$el, this.options)
    if (vModel != undefined) {
      slider.on("slide", (e) => {
        this.$parent[this.vModel] = e
      })
    }
  }
}