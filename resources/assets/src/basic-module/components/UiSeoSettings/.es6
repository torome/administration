import UiSeoSettingsForm from "../UiSeoSettingsForm";
export default {
    components: {
        UiSeoSettingsForm
    },
    data: () => {
        return {
            forms: {}
        }
    },
    ready: function () {
        this.$http.get("seo.json").then((response) => {
            let data = response.body;
            this.forms = data;
        })
    }
}
