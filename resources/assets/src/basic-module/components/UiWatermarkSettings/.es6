import { UiSlider, UiColorPicker } from 'components'

export default {
  components: {
    UiColorPicker,
    UiSlider
  },
  data: () => {
    return {
      minAddWidth: '100',
      minAddHeight: '100',
      position: 'cc',
      enabledGIF: false,
      type: 'img',
      text: 'demo',
      font: 'ms',
      fontSize: '12',
      fontColor: '#00f',
      transparency: 10,
      quality: 90,

      positionRadioGroup: [
        {text: '左上', value: 'tl'},
        {text: '中上', value: 'tc'},
        {text: '右上', value: 'tr'},

        {text: '左中', value: 'cl'},
        {text: '中心', value: 'cc'},
        {text: '右中', value: 'cr'},

        {text: '左下', value: 'bl'},
        {text: '中下', value: 'bc'},
        {text: '右下', value: 'br'}
      ],
      typeRadioGroup: [
        {text: '图片', value: 'img'},
        {text: '文本', value: 'txt'},
      ],
      fontOptions: [
        {text: '微软雅黑1', value: 'ms'},
        {text: '微软雅黑2', value: 'ms1'},
        {text: '微软雅黑3', value: 'ms2'},
      ],
      fontSizeOptions: [
        {text: '12px', value: '12'},
        {text: '16px', value: '16'},
        {text: '18px', value: '18'},
      ]
    }
  },
  ready: function () {
    this.$http.get('watermark.json').then((response) => {
      let data = response.body
      this.$data = Object.assign(this.$data, data)
    })
  },
  methods: {
    onSubmit: function (e) {
      e.preventDefault()
    }
  }
}