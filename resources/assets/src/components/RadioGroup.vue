<script>
    export default {
        props: {
            name: {
                Type: String,
                default: ""
            },
            group: {
                Type: Array,
                default: () => []
            },
            model: {
                Type: String,
                default: ""
            }
        }
    };
</script>
<template>
    <label v-for="radio in group" class="radio-inline">
        <input type="radio" :value="radio.value" v-model="model"> {{ radio.text }}
    </label>
</template>