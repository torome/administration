export default {
  props: {
    name: {
      Type: String,
      default: ''
    },
    alias: {
      Type: String,
      default: ''
    }
  },
  methods: {
    onSubmit: function (e) {
      console.log('update')
      let item = {}
      item.name = this.name
      item.alias = this.alias
      this.$emit('update', item)
      e.preventDefault()
    },
  }
}