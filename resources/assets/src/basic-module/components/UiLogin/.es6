import { Shared } from 'src/shared'

export default {
    data: () => {
        return {
            username: "admin",
            password: "123456789"
        }
    },
    methods: {
        onSubmit: function () {
            this.$http.post("http://notadd.io/oauth/access", {
                "grant_type": "password",
                "client_id": "4",
                "client_secret": "kI6stFinNexkZkvtIn3MdJIGCErbJcjnubFBwM4H",
                "username": this.username,
                "password": this.password,
                "scope": "*"
            }).then((response) => {
                console.log(response.status);
                if (response.status == 200) {
                    Shared.authToken = response.body;
                }
            }, (response) => {
                if (response.status == 401) {
                    console.log(401);
                }
            });
        }
    }
}