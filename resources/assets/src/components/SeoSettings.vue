<script>
    import SeoSettingsForm from "./SeoSettingsForm.vue";
    export default {
        components: {
            SeoSettingsForm
        },
        data: () => {
            return {
                forms: {}
            };
        },
        ready: function () {
            this.$http.get("seo.json").then((response) => {
                let data = response.body;
                this.forms = data;
            });
        }
    };
</script>
<template>
    <seo-settings-form v-for="form in forms" :form="form.data">
        <template slot="header">{{ form.name }}</template>
    </seo-settings-form>
</template>