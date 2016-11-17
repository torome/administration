<script>
    export default {
        data: () => {
            return {
                imageProcessingEngine: window.settings.hasOwnProperty("attachment.engine") ? window.settings["attachment.engine"] : "gd",
                imageProcessingEngineRadioGroup: [
                    {text: "GD 库", value: "gd", checked: "checked"},
                    {text: "Image Magic", value: "imagick"}
                ],
                fileMaxSize: window.settings.hasOwnProperty("attachment.limit.file") ? window.settings["attachment.limit.file"] : "0",
                imageMaxSize: window.settings.hasOwnProperty("attachment.limit.image") ? window.settings["attachment.limit.image"] : "0",
                videoMaxSize: window.settings.hasOwnProperty("attachment.limit.video") ? window.settings["attachment.limit.video"] : "0",
                canUploadImageExtension: window.settings.hasOwnProperty("attachment.format.image") ? window.settings["attachment.format.image"] : "",
                canUploadCatcherExtension: window.settings.hasOwnProperty("attachment.format.catcher") ? window.settings["attachment.format.catcher"] : "",
                canUploadVideoExtension: window.settings.hasOwnProperty("attachment.format.video") ? window.settings["attachment.format.video"] : "",
                canUploadFileExtension: window.settings.hasOwnProperty("attachment.format.file") ? window.settings["attachment.format.file"] : "",
                canManagementImageExtension: window.settings.hasOwnProperty("attachment.manager.image") ? window.settings["attachment.manager.image"] : "",
                canManagementFileExtension: window.settings.hasOwnProperty("attachment.manager.file") ? window.settings["attachment.manager.file"] : "",
                enableWatermark: window.settings.hasOwnProperty("attachment.watermark") ? window.settings["attachment.watermark"] : "0"
            };
        },
        methods: {
            onSubmit: function (e) {
                e.preventDefault();
                this.$http.post(window.api + "/attachment", {
                    engine: this.imageProcessingEngine,
                    limit_file: this.fileMaxSize,
                    limit_image: this.imageMaxSize,
                    limit_video: this.videoMaxSize,
                    allow_image: this.canUploadImageExtension,
                    allow_catcher: this.canUploadCatcherExtension,
                    allow_video: this.canUploadVideoExtension,
                    allow_file: this.canUploadFileExtension,
                    allow_manager_image: this.canManagementImageExtension,
                    allow_manager_file: this.canManagementFileExtension,
                    allow_watermark: this.enableWatermark
                }).then(response => {
                    window.localStorage.setItem("settings", JSON.stringify(response.body));
                    window.settings = response.body;
                }, response => {
                    window.alert("更新设置失败！");
                });
            }
        }
    };
</script>
<template>
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">上传设置</h3>
        </div>
        <validator name="validation">
            <form class="form-horizontal" novalidate @submit="onSubmit">
                <div class="box-body">
                    <div class="form-group">
                        <label class="col-sm-3 control-label">图片处理引擎</label>
                        <div class="col-sm-4">
                            <div class="btn-group btn-switch">
                                <label v-for="radio in imageProcessingEngineRadioGroup"  class="btn btn-primary btn-flat" :class="{ 'active': imageProcessingEngine === radio.value }">
                                    <input type="radio" autocomplete="off" :value="radio.value" v-model="imageProcessingEngine"> {{ radio.text }}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.fileMaxSize.invalid }">
                        <label for="file-max-size" class="col-sm-3 control-label">附件大小</label>
                        <div class="col-sm-4">
                            <div class="input-group">
                                <input v-model="fileMaxSize" id="file-max-size" type="text" class="form-control" placeholder="请输入附件大小" v-validate:file-max-size="{ required: { rule: true, message: '附件大小不能为空' } }">
                                <div class="input-group-addon">MB</div>
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.fileMaxSize.required" class="help-block">{{ $validation.fileMaxSize.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.imageMaxSize.invalid }">
                        <label for="image-max-size" class="col-sm-3 control-label">图片大小</label>
                        <div class="col-sm-4">
                            <div class="input-group">
                                <input v-model="imageMaxSize" id="image-max-size" type="text" class="form-control" placeholder="请输入图片大小" v-validate:image-max-size="{ required: { rule: true, message: '图片大小不能为空' } }">
                                <div class="input-group-addon">MB</div>
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.imageMaxSize.required" class="help-block">{{ $validation.imageMaxSize.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.videoMaxSize.invalid }">
                        <label for="video-max-size" class="col-sm-3 control-label">视频大小</label>
                        <div class="col-sm-4">
                            <div class="input-group">
                                <input v-model="videoMaxSize" id="video-max-size" type="text" class="form-control" placeholder="请输入视频大小" v-validate:video-max-size="{ required: { rule: true, message: '视频大小不能为空' } }">
                                <div class="input-group-addon">MB</div>
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.videoMaxSize.required" class="help-block">{{ $validation.videoMaxSize.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.canUploadImageExtension.invalid }">
                        <label class="col-sm-3 control-label">允许上传的扩展名</label>
                        <div class="col-sm-4">
                            <textarea v-model="canUploadImageExtension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-validate:can-upload-image-extension="{ required: { rule: true, message: '扩展名不能为空' } }"></textarea>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.canUploadImageExtension.required" class="help-block">{{ $validation.canUploadImageExtension.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.canUploadCatcherExtension.invalid }">
                        <label class="col-sm-3 control-label">允许上传的扩展名</label>
                        <div class="col-sm-4">
                            <textarea v-model="canUploadCatcherExtension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-validate:can-upload-catcher-extension="{ required: { rule: true, message: '扩展名不能为空' } }"></textarea>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.canUploadCatcherExtension.required" class="help-block">{{ $validation.canUploadCatcherExtension.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.canUploadVideoExtension.invalid }">
                        <label class="col-sm-3 control-label">允许上传的扩展名</label>
                        <div class="col-sm-4">
                            <textarea v-model="canUploadVideoExtension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-validate:can-upload-video-extension="{ required: { rule: true, message: '扩展名不能为空' } }"></textarea>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.canUploadVideoExtension.required" class="help-block">{{ $validation.canUploadVideoExtension.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.canUploadFileExtension.invalid }">
                        <label class="col-sm-3 control-label">允许上传的扩展名</label>
                        <div class="col-sm-4">
                            <textarea v-model="canUploadFileExtension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-validate:can-upload-file-extension="{ required: { rule: true, message: '扩展名不能为空' } }"></textarea>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.canUploadFileExtension.required" class="help-block">{{ $validation.canUploadFileExtension.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.canManagementImageExtension.invalid }">
                        <label class="col-sm-3 control-label">允许管理图片的扩展名</label>
                        <div class="col-sm-4">
                            <textarea v-model="canManagementImageExtension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-validate:can-management-image-extension="{ required: { rule: true, message: '扩展名不能为空' } }"></textarea>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.canManagementImageExtension.required" class="help-block">{{ $validation.canManagementImageExtension.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.canManagementFileExtension.invalid }">
                        <label class="col-sm-3 control-label">允许管理文件的扩展名</label>
                        <div class="col-sm-4">
                            <textarea v-model="canManagementFileExtension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-validate:can-management-file-extension="{ required: { rule: true, message: '扩展名不能为空' } }"></textarea>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.canManagementFileExtension.required" class="help-block">{{ $validation.canManagementFileExtension.required }}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">开启水印功能</label>
                        <div class="col-sm-4">
                            <div class="btn-group btn-switch">
                                <label class="btn btn-primary btn-flat" :class="{ 'active': enableWatermark === '1' }">
                                    <input type="radio" autocomplete="off" value="1" v-model="enableWatermark"> 开启
                                </label>
                                <label class="btn btn-primary btn-flat" :class="{ 'active': enableWatermark === '0' }">
                                    <input type="radio" autocomplete="off" value="0" v-model="enableWatermark"> 关闭
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box-footer">
                    <div class="form-group">
                        <div class="col-sm-4 col-sm-offset-3">
                            <button type="submit" class="btn btn-primary btn-flat" :class="{ disabled: $validation.invalid }" :disabled="$validation.invalid">保存</button>
                        </div>
                    </div>
                </div>
            </form>
        </validator>
    </div>
</template>