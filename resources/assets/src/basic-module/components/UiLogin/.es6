export default {
    data: () => {
        return {
            username: "admin",
            password: "123456789"
        }
    },
    methods: {
        onSubmit: function () {
            this.$http.post("http://notadd.io/oauth/token", {
                "form_Params": {
                    "grant_type": "password",
                    "client_id": "client-id",
                    "client_secret": "client-secret",
                    "username": this.username,
                    "password": this.password,
                    "scope": "*"
                }
            }).then((response) => {
                console.log(response.body);
            });
        }
    }
}