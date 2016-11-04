import UiUriCdnSettings from '../UiUriCdnSettings'

export default {
  components: {
    UiUriCdnSettings
  },
  data: () => {
    return {
      cdnTypes: [
        {name: '不使用', value: 'none'},
        {name: 'BootCDN', value: 'boot'},
        {name: '全站CDN', value: 'uri', settings: 'ui-uri-cdn-settings'},
      ],
      cdnType: 'uri',
      cdnTypeSettingsValidation: {}
    }
  },
  methods: {
    onSubmit: function (e) {
      this.$broadcast('submit', e)
      e.preventDefault()
    }
  },
  computed: {
    cdnTypeSettings: {
      get: function () {
        for (let type of this.cdnTypes) {
          if (type.value == this.cdnType) {
            return type.settings
          }
        }
      }
    }
  }
}
