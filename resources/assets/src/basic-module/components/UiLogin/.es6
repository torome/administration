export default {
  data: () => {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit: function () {
      console.log(this.username)
      console.log(this.password)
      console.log('submit')

      this.$http.post('http://localhost:8000/oauth/token', {
        'form_Params': {
          'grant_type': 'password',
          'client_id': 'client-id',
          'client_secret': 'client-secret',
          'username': this.username,
          'password': this.password,
          'scope': '*'
        }
      }).then((response) => {
        console.log(response.body)
      })
    }
  }
}