import { Shared } from 'src/shared'

let oauth = { }

export default {
  data: () => {
    return {
      username: '',
      password: '',

      authFailed: false
    }
  },
  ready () {
    this.$http.get('oauth.json').then((response) => {
      oauth = response.body
    })
  },
  route: {
    activate: function (transition) {
      if (!Shared.accessToken) {
        transition.next()
      } else {
        this.$router.go('/')
        transition.next()
      }
    }
  },
  methods: {
    onSubmit: function () {
      console.log(this.username)
      console.log(this.password)
      console.log('submit')

      let data = new FormData()
      data.append('grant_type', 'password')
      data.append('client_id', oauth.id)
      data.append('client_secret', oauth.secret)
      data.append('username', this.username)
      data.append('password', this.password)

      this.$http.post('http://localhost:8000/oauth/token', data).then((response) => {
        Shared.accessToken = response.body
        Cookies.set('access_token', Shared.accessToken)
        this.$router.go('/')
      }, (response) => {
        console.error(response)
        if (response.status == 401) {

        }
      })
    }
  }
}