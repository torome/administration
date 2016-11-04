export default {
  data: () => {
    return {
      uri: 'www.example.com'
    }
  },
  ready: function () {
    this.$parent.cdnTypeSettingsValidation = this.$validation
    this.$http.get('cdn-uri.json').then((request) => {
      let data = request.body
      this.$data = data
    })
  },
  events: {
    submit: function () {
      console.log('submit')
    }
  }
}
