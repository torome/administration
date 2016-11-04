export default {
    data: () => {
        return {
            host: "",
            port: 21,
            path: "",
            user: "",
            password: ""
        }
    },
    ready: function () {
        this.$parent.storageTypeSettingsValidation = this.$validation;
        this.$http.get("ftp-settings.json").then((response) => {
            let data = response.body;
            this.$data = data;
            this.$activateValidator();
        });
    },
    events: {
        submit: function () {
            console.log("submit");
        }
    }
}
