<script>
    import UriCdnSettings from "../UriCdn";
    export default {
        components: {
            UriCdnSettings
        },
        data: () => {
            return {
                cdnTypes: [
                    {name: "不使用", value: "none"}
                ],
                cdnType: window.settings.hasOwnProperty("attachment.cnd.default") ? window.settings["attachment.cnd.default"] : "none",
                cdnTypeSettingsValidation: {}
            };
        },
        methods: {
            onSubmit: function (e) {
                e.preventDefault();
                this.$http.post(window.api + "/attachment/cdn", {
                    "default": this.cdnType
                }).then(response => {
                    window.localStorage.setItem("settings", JSON.stringify(response.body));
                    window.settings = response.body;
                }, response => {
                    console.log("更新设置失败！");
                });
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
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">CDN 加速</h3>
        </div>
        <validator name="validation">
            <form class="form-horizontal" novalidate @submit="onSubmit">
                <div class="box-body">
                    <div class="form-group">
                        <label class="col-sm-3 control-label">CDN 类型</label>
                        <div class="col-sm-4">
                            <label v-for="type in cdnTypes" class="radio-inline">
                                <input type="radio" :value="type.value" v-model="cdnType"> {{ type.name }}
                            </label>
                        </div>
                    </div>
                    <component :is="cdnTypeSettings"></component>
                </div>
                <div class="box-footer">
                    <div class="form-group">
                        <div class="col-sm-4 col-sm-offset-3">
                            <button type="submit" class="btn btn-primary btn-flat" :class="{ disabled: $validation.invalid || cdnTypeSettingsValidation.invalid }" :disabled="$validation.invalid || cdnTypeSettingsValidation.invalid">保存</button>
                        </div>
                    </div>
                </div>
            </form>
        </validator>
    </div>
</template>