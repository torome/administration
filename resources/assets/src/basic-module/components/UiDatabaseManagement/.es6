export default {
  data: () => {
    return {
      backupTypeOptions: [
        {text: '2M 分卷', value: '2m'},
        {text: 'GZIP 压缩', value: 'gzip'}
      ],
      backupType: '2m'
    }
  },
  methods: {
    onSubmit: function () {

    }
  }
}