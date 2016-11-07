<script>
    import FtpStorageSettings from "./FtpStorageSettings.vue";
    export default {
        components: {
            FtpStorageSettings
        },
        data: () => {
            return {
                storageTypes: [
                    {name: "本地存储", value: "local"},
                    {name: "远程 FTP", value: "ftp", settings: "ui-ftp-storage-settings"},
                    {name: "又拍云存储", value: "yp"},
                    {name: "七牛云存储", value: "qn"}
                ],
                storageType: "ftp",
                storageTypeSettingsValidation: {}
            };
        },
        methods: {
            onSubmit: function (e) {
                this.$broadcast("submit", e);
                e.preventDefault();
            }
        },
        computed: {
            storageTypeSettings: {
                get: function () {
                    for (let type of this.storageTypes) {
                        if (type.value === this.storageType) {
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
            <h3 class="box-title">存储设置</h3>
        </div>
        <validator name="validation">
            <form class="form-horizontal" novalidate @submit="onSubmit">
                <div class="box-body">
                    <div class="form-group">
                        <label class="col-sm-2 control-label">存储类型</label>
                        <div class="col-sm-10">
                            <label v-for="type in storageTypes" class="radio-inline">
                                <input type="radio" :value="type.value" v-model="storageType"> {{ type.name }}
                            </label>
                        </div>
                    </div>
                    <component :is="storageTypeSettings"></component>
                </div>
                <div class="box-footer">
                    <button type="submit" class="btn btn-primary pull-right"
                            :disabled="$validation.invalid || storageTypeSettingsValidation.invalid">保存
                    </button>
                </div>
            </form>
        </validator>
    </div>
</template>