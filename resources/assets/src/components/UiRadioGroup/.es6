export default {
  props: {
    name: {
      Type: String,
      default: ''
    },
    group: {
      Type: Array,
      default: () => []
    },
    model: {
      Type: String,
      default: ''
    }
  }
}
