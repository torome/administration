export default {
  props: {
    form: {
      Type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    onSubmit: function () {
      console.log('onsubmit')
    }
  }
}