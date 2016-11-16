<script>
    import SeoSettingsForm from "./SeoSettingsForm";
    export default {
        components: {
            SeoSettingsForm
        },
        data: () => {
            return {
                forms: {}
            };
        }
    };
</script>
<template>
    <seo-settings-form v-for="form in forms" :form="form.data">
        <template slot="header">{{ form.name }}</template>
    </seo-settings-form>
</template>