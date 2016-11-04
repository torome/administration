export default {
  data: () => {
    return {
      modules: []
    }
  },
  ready: function () {
    this.$http.get('modules.json').then((response) => {
      let data = response.body
      this.modules = data.modules
    })
  }
}
