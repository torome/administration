export default {
  data: () => {
    return {
      enableXmlMap: false,
      enableHtmlMap: false,
      updateCycle: 0,
      onlyContainRecentArticles: false,
      enableModules: []
    }
  },
  ready: function () {
    this.$http.get('sitemap.json').then((response) => {
      let data = response.body
      this.$data = data
    })
  },
  methods: {
    onSubmit: function () {

    }
  }
}