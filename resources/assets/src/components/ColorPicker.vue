<script>
    import "bootstrap-colorpicker";
    import jQuery from "jquery";
    export default {
        props: {
            options: {
                Type: Object,
                default: () => {
                    return {};
                }
            },
            value: {
                Type: String,
                default: false
            },
            vModel: {
                Type: String
            }
        },
        ready: function () {
            let vModel = this.$parent[this.vModel];
            if (vModel !== undefined) {
                this.options.color = this.value = vModel;
            } else {
                this.options.color = this.value;
            }
            let colorpicker = jQuery(this.$el).colorpicker(this.options);
            if (vModel !== undefined) {
                colorpicker.on("changeColor", (e) => {
                    this.$parent[this.vModel] = e.color.toHex();
                });
            }
        }
    };
</script>
<style lang="css">
    @import "../../node_modules/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css";
</style>
<template>
    <div class="input-group">
        <input type="text" :value="value" class="form-control">
        <div class="input-group-addon">
            <i></i>
        </div>
    </div>
</template>