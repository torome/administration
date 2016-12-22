<script>
  export default {
    computed: {

    },
    methods: {}
  }
</script>
<style></style>
<template>
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">Sitemap 管理</h3>
        </div>
        <div class="form-horizontal">
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
                <validity field="fileMaxSize" :validators="{ required: { rule: true, message: '附件大小不能为空' } }">
                    <div class="form-group" :class="{ 'has-error': $validation.fileMaxSize.invalid }">
                        <label for="file-max-size" class="col-sm-3 control-label">附件大小</label>
                        <div class="col-sm-4">
                            <div class="input-group">
                                <input v-model="fileMaxSize" id="file-max-size" type="text" class="form-control" placeholder="请输入附件大小">
                                <div class="input-group-addon">MB</div>
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.fileMaxSize.required" class="help-block">{{ $validation.fileMaxSize.required }}</span>
                        </div>
                    </div>
                </validity>
                <validity field="imageMaxSize" :validators="{ required: { rule: true, message: '图片大小不能为空' } }">
                    <div class="form-group" :class="{ 'has-error': $validation.imageMaxSize.invalid }">
                        <label for="image-max-size" class="col-sm-3 control-label">图片大小</label>
                        <div class="col-sm-4">
                            <div class="input-group">
                                <input v-model="imageMaxSize" id="image-max-size" type="text" class="form-control" placeholder="请输入图片大小">
                                <div class="input-group-addon">MB</div>
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.imageMaxSize.required" class="help-block">{{ $validation.imageMaxSize.required }}</span>
                        </div>
                    </div>
                </validity>
                <validity field="videoMaxSize" :validators="{ required: { rule: true, message: '视频大小不能为空' } }">
                    <div class="form-group" :class="{ 'has-error': $validation.videoMaxSize.invalid }">
                        <label for="video-max-size" class="col-sm-3 control-label">视频大小</label>
                        <div class="col-sm-4">
                            <div class="input-group">
                                <input v-model="videoMaxSize" id="video-max-size" type="text" class="form-control" placeholder="请输入视频大小">
                                <div class="input-group-addon">MB</div>
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.videoMaxSize.required" class="help-block">{{ $validation.videoMaxSize.required }}</span>
                        </div>
                    </div>
                </validity>
                <validity field="canUploadImageExtension" :validators="{ required: { rule: true, message: '扩展名不能为空' } }">
                    <div class="form-group" :class="{ 'has-error': $validation.canUploadImageExtension.invalid }">
                        <label class="col-sm-3 control-label">允许上传的扩展名</label>
                        <div class="col-sm-4">
                            <textarea v-model="canUploadImageExtension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔"></textarea>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.canUploadImageExtension.required" class="help-block">{{ $validation.canUploadImageExtension.required }}</span>
                        </div>
                    </div>
                </validity>
                <validity field="canUploadCatcherExtension" :validators="{ required: { rule: true, message: '扩展名不能为空' } }">
                    <div class="form-group" :class="{ 'has-error': $validation.canUploadCatcherExtension.invalid }">
                        <label class="col-sm-3 control-label">允许上传的扩展名</label>
                        <div class="col-sm-4">
                            <textarea v-model="canUploadCatcherExtension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔"></textarea>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.canUploadCatcherExtension.required" class="help-block">{{ $validation.canUploadCatcherExtension.required }}</span>
                        </div>
                    </div>
                </validity>
                <validity field="canUploadVideoExtension" :validators="{ required: { rule: true, message: '扩展名不能为空' } }">
                    <div class="form-group" :class="{ 'has-error': $validation.canUploadVideoExtension.invalid }">
                        <label class="col-sm-3 control-label">允许上传的扩展名</label>
                        <div class="col-sm-4">
                            <textarea v-model="canUploadVideoExtension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔"></textarea>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.canUploadVideoExtension.required" class="help-block">{{ $validation.canUploadVideoExtension.required }}</span>
                        </div>
                    </div>
                </validity>
                <validity field="canUploadFileExtension" :validators="{ required: { rule: true, message: '扩展名不能为空' } }">
                    <div class="form-group" :class="{ 'has-error': $validation.canUploadFileExtension.invalid }">
                        <label class="col-sm-3 control-label">允许上传的扩展名</label>
                        <div class="col-sm-4">
                            <textarea v-model="canUploadFileExtension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔"></textarea>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.canUploadFileExtension.required" class="help-block">{{ $validation.canUploadFileExtension.required }}</span>
                        </div>
                    </div>
                </validity>
                <validity field="canManagementImageExtension" :validators="{ required: { rule: true, message: '扩展名不能为空' } }">
                    <div class="form-group" :class="{ 'has-error': $validation.canManagementImageExtension.invalid }">
                        <label class="col-sm-3 control-label">允许管理图片的扩展名</label>
                        <div class="col-sm-4">
                            <textarea v-model="canManagementImageExtension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔"></textarea>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.canManagementImageExtension.required" class="help-block">{{ $validation.canManagementImageExtension.required }}</span>
                        </div>
                    </div>
                </validity>
                <validity field="canManagementFileExtension" :validators="{ required: { rule: true, message: '扩展名不能为空' } }">
                    <div class="form-group" :class="{ 'has-error': $validation.canManagementFileExtension.invalid }">
                        <label class="col-sm-3 control-label">允许管理文件的扩展名</label>
                        <div class="col-sm-4">
                            <textarea v-model="canManagementFileExtension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔"></textarea>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.canManagementFileExtension.required" class="help-block">{{ $validation.canManagementFileExtension.required }}</span>
                        </div>
                    </div>
                </validity>
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
        </div>
    </div>
</template>