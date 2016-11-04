let checkAll = false;

export default {
  data: () => {
    return {
      rules: []
    }
  },
  ready: function () {
    this.$http.get('rewrite-rules.json').then((response) => {
      this.rules = response.body
    })
  },
  methods: {
    onSubmit: function () {

    }
  },
  computed: {
    checkAll: {
      set: function (value) {
        for (let rule of this.rules) {
          rule.enable = value
        }
        checkAll = value
        return checkAll
      },
      get: function () {
        for (let rule of this.rules) {
          if (!rule.enable) return false
        }
        return true
      }
    }
  }
}
