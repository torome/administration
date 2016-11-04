import UiRouteSettings from '../UiRouteSettings'

export default {
  components: { UiRouteSettings },
  data: () => {
    return {
      siteEnabled: false,
      siteName: 'NotAdd',
      siteDomain: 'www.notadd.com',
      siteShuibiao: '??????',
      companyName: '??????',
      siteCopyright: '??????',
      statisticsCode: '<script>'
    }
  },
  ready: function () {
    this.$http.get('global-settings.json').then((response) => {
      let data = response.body
      this.$data = data
    })
  },
  methods: {
    onSubmit: function (e) {
      console.log('submit')
      this.$http.post('/', this.$data)
      e.preventDefault()
    },
    onBind: function (e) {
      console.log(e)
      console.log('bind')
    }
  }
}
