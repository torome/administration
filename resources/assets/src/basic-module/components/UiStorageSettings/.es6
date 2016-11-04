import UiFtpStorageSettings from "../UiFtpStorageSettings"
export default {
    components: {
        UiFtpStorageSettings
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
        }
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
                    if (type.value == this.storageType) {
                        return type.settings;
                    }
                }
            }
        }
    }
}
