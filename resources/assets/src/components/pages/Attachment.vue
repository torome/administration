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
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label for="file-max-size" class="col-sm-3 control-label">附件大小</label>
                    <div class="col-sm-4">
                        <div class="input-group">
                            <input name="fileMaxSize" id="file-max-size" type="text" class="form-control" placeholder="请输入附件大小" v-model="fileMaxSize" v-validate data-vv-rules="required">
                            <div class="input-group-addon">MB</div>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('fileMaxSize')">{{ errors.first('fileMaxSize') }}</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label for="image-max-size" class="col-sm-3 control-label">图片大小</label>
                    <div class="col-sm-4">
                        <div class="input-group">
                            <input name="imageMaxSize" id="image-max-size" type="text" class="form-control" placeholder="请输入图片大小" v-model="imageMaxSize" v-validate data-vv-rules="required">
                            <div class="input-group-addon">MB</div>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('imageMaxSize')">{{ errors.first('imageMaxSize') }}</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label for="video-max-size" class="col-sm-3 control-label">视频大小</label>
                    <div class="col-sm-4">
                        <div class="input-group">
                            <input name="videoMaxSize" id="video-max-size" type="text" class="form-control" placeholder="请输入视频大小" v-model="videoMaxSize" v-validate data-vv-rules="required">
                            <div class="input-group-addon">MB</div>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('videoMaxSize')">{{ errors.first('videoMaxSize') }}</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">允许上传的扩展名</label>
                    <div class="col-sm-4">
                        <textarea name="canUploadImageExtension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-model="canUploadImageExtension" v-validate data-vv-rules="required"></textarea>
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('canUploadImageExtension')">{{ errors.first('canUploadImageExtension') }}</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">允许上传的扩展名</label>
                    <div class="col-sm-4">
                        <textarea name="canUploadCatcherExtension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-model="canUploadCatcherExtension" v-validate data-vv-rules="required"></textarea>
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('canUploadCatcherExtension')">{{ errors.first('canUploadCatcherExtension') }}</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">允许上传的扩展名</label>
                    <div class="col-sm-4">
                        <textarea name="canUploadVideoExtension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-model="canUploadVideoExtension" v-validate data-vv-rules="required"></textarea>
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('canUploadVideoExtension')">{{ errors.first('canUploadVideoExtension') }}</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">允许上传的扩展名</label>
                    <div class="col-sm-4">
                        <textarea name="canUploadFileExtension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-model="canUploadFileExtension" v-validate data-vv-rules="required"></textarea>
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('canUploadFileExtension')">{{ errors.first('canUploadFileExtension') }}</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">允许管理图片的扩展名</label>
                    <div class="col-sm-4">
                        <textarea name="canManagementImageExtension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-model="canManagementImageExtension" v-validate data-vv-rules="required"></textarea>
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('canManagementImageExtension')">{{ errors.first('canManagementImageExtension') }}</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('domain') }">
                    <label class="col-sm-3 control-label">允许管理文件的扩展名</label>
                    <div class="col-sm-4">
                        <textarea name="canManagementFileExtension" class="form-control" rows="6" placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-model="canManagementFileExtension" v-validate data-vv-rules="required"></textarea>
                    </div>
                    <div class="col-sm-5">
                        <span class="help-block" v-show="errors.has('canManagementFileExtension')">{{ errors.first('canManagementFileExtension') }}</span>
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
                        <button class="btn btn-primary btn-flat" :disabled="errors.any()">保存</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>