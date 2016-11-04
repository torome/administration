import {UiRadioGroup} from 'components'

export default {
  components: {UiRadioGroup},
  data: () => {
    return {
      imageProcessingEngine: '',
      imageProcessingEngineRadioGroup: [
        {text: 'GD 库', value: 'gd', checked: 'checked'},
        {text: 'Image Magic', value: 'image_magic'}
      ],
      fileMaxSize: '9998',
      imageMaxSize: '9998',
      videoMaxSize: '9998',
      canUploadExtension: '.zip',
      canDownloadExtension: '.download',
      canManagementExtension: '.management'
    }
  },
  ready: function () {
    this.$http.get('upload-settings.json').then((response) => {
      let data = response.body
      this.$data = data
    })
  },
  methods: {
    onSubmit: function (e) {

      e.preventDefault()
    }
  }
}
