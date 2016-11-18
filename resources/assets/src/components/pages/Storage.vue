<script>
    import FtpStorageSettings from "./FtpStorage";
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
                e.preventDefault();
                this.$http.post(window.api + "/storage", {
                    "default": this.storageType
                }).then(response => {
                    window.localStorage.setItem("settings", JSON.stringify(response.body));
                    window.settings = response.body;
                }, response => {
                    console.log("更新设置失败！");
                });
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
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">存储设置</h3>
        </div>
        <validator name="validation">
            <form class="form-horizontal" novalidate @submit="onSubmit">
                <div class="box-body">
                    <div class="form-group">
                        <label class="col-sm-3 control-label">存储类型</label>
                        <div class="col-sm-4">
                            <div class="btn-group btn-switch">
                                <label v-for="type in storageTypes" class="btn btn-primary btn-flat" :class="{ 'active': storageType === type.value }">
                                    <input type="radio" :value="type.value" v-model="storageType"> {{ type.name }}
                                </label>
                            </div>
                        </div>
                    </div>
                    <component :is="storageTypeSettings"></component>
                </div>
                <div class="box-footer">
                    <div class="form-group">
                        <div class="col-sm-4 col-sm-offset-3">
                            <button type="submit" class="btn btn-primary btn-flat" :disabled="$validation.invalid || storageTypeSettingsValidation.invalid">保存</button>
                        </div>
                    </div>
                </div>
            </form>
        </validator>
    </div>
</template>