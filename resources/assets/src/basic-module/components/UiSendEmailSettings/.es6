export default {
    data: () => {
        return {
            protocol: 'smtp',
            encryption: "tls",
            port: 7777,
            host: "smtp.test.com",
            mail: "test.test.com",
            username: "username",
            password: "password",
            protocolTypes: {},
            encryptionTypes: {},
        }
    },
    ready: function () {
        this.$http.get("mail-protocol-types.json").then((response) => {
            this.protocolTypes = response.body;
        })
        this.$http.get("mail-encryption-types.json").then((response) => {
            this.encryptionTypes = response.body;
        })
    },
    methods: {
        onSubmit: function () {
            console.log("submit");
        }
    }
}