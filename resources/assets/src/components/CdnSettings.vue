<script>
    import UriCdnSettings from "./UriCdnSettings.vue";
    export default {
        components: {
            UriCdnSettings
        },
        data: () => {
            return {
                cdnTypes: [
                    {name: "不使用", value: "none"},
                    {name: "BootCDN", value: "boot"},
                    {name: "全站CDN", value: "uri", settings: "ui-uri-cdn-settings"}
                ],
                cdnType: "uri",
                cdnTypeSettingsValidation: {}
            };
        },
        methods: {
            onSubmit: function (e) {
                this.$broadcast("submit", e);
                e.preventDefault();
            }
        },
        computed: {
            cdnTypeSettings: {
                get: function () {
                    for (let type of this.cdnTypes) {
                        if (type.value === this.cdnType) {
                            return type.settings;
                        }
                    }
                }
            }
        }
    };
</script>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">CDN 加速</h3>
        </div>
        <validator name="validation">
            <form class="form-horizontal" novalidate @submit="onSubmit">
                <div class="box-body">
                    <div class="form-group">
                        <label class="col-sm-2 control-label">CDN 类型</label>
                        <div class="col-sm-10">
                            <label v-for="type in cdnTypes" class="radio-inline">
                                <input type="radio" :value="type.value" v-model="cdnType"> {{ type.name }}
                            </label>
                        </div>
                    </div>
                    <component :is="cdnTypeSettings"></component>
                </div>
                <div class="box-footer">
                    <button type="submit" class="btn btn-primary pull-right" :class="{ disabled: $validation.invalid || cdnTypeSettingsValidation.invalid }" :disabled="$validation.invalid || cdnTypeSettingsValidation.invalid">保存
                    </button>
                </div>
            </form>
        </validator>
    </div>
</template>