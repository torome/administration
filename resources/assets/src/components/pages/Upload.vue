<script>
    import RadioGroup from "../RadioGroup";
    export default {
        components: {RadioGroup},
        data: () => {
            return {
                imageProcessingEngine: "",
                imageProcessingEngineRadioGroup: [
                    {text: "GD 库", value: "gd", checked: "checked"},
                    {text: "Image Magic", value: "image_magic"}
                ],
                fileMaxSize: "9998",
                imageMaxSize: "9998",
                videoMaxSize: "9998",
                canUploadExtension: ".zip",
                canDownloadExtension: ".download",
                canManagementExtension: ".management"
            };
        },
        methods: {
            onSubmit: function (e) {
                e.preventDefault();
            }
        }
    };
</script>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">上传设置</h3>
        </div>
        <validator name="validation">
            <form class="form-horizontal" novalidate @submit="onSubmit">
                <div class="box-body">
                    <div class="form-group">
                        <label class="col-sm-3 control-label">图片处理引擎</label>
                        <div class="col-sm-4">
                            <label v-for="radio in imageProcessingEngineRadioGroup" class="radio-inline">
                                <input type="radio" :value="radio.value" v-model="imageProcessingEngine" :checked="radio.checked"> {{ radio.text }}
                            </label>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.fileMaxSize.invalid }">
                        <label for="file-max-size" class="col-sm-3 control-label">附件大小</label>
                        <div class="col-sm-4">
                            <div class="input-group">
                                <input v-model="fileMaxSize" id="file-max-size" type="text" class="form-control" placeholder="请输入附件大小" v-validate:file-max-size="{ required: { rule: true, message: '附件大小不能为空' } }">
                                <div class="input-group-addon">KB</div>
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
                                <div class="input-group-addon">KB</div>
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
                                <div class="input-group-addon">KB</div>
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.videoMaxSize.required" class="help-block">{{ $validation.videoMaxSize.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.canUploadExtension.invalid }">
                        <label for="can-upload-extension" class="col-sm-3 control-label">允许上传的扩展名</label>
                        <div class="col-sm-4">
                            <textarea v-model="canUploadExtension" id="can-upload-extension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-validate:can-upload-extension="{ required: { rule: true, message: '扩展名不能为空' } }"></textarea>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.canUploadExtension.required" class="help-block">{{ $validation.canUploadExtension.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.canDownloadExtension.invalid }">
                        <label for="can-download-extension" class="col-sm-3 control-label">允许下载的扩展名</label>
                        <div class="col-sm-4">
                            <textarea v-model="canDownloadExtension" id="can-download-extension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-validate:can-download-extension="{ required: { rule: true, message: '扩展名不能为空' } }"></textarea>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.canDownloadExtension.required" class="help-block">{{ $validation.canDownloadExtension.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.canManagementExtension.invalid }">
                        <label for="can-management-extension" class="col-sm-3 control-label">允许管理的扩展名</label>
                        <div class="col-sm-4">
                            <textarea v-model="canManagementExtension" id="can-management-extension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-validate:can-management-extension="{ required: { rule: true, message: '扩展名不能为空' } }"></textarea>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.canManagementExtension.required" class="help-block">{{ $validation.canManagementExtension.required }}</span>
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