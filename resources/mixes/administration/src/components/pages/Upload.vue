<script>
  export default {
    computed: {
      imageProcessingEngine: {
        get () {
          return this.$store.state.setting.hasOwnProperty('attachment.engine') ? this.$store.state.setting['attachment.engine'] : 'gd'
        },
        set (value) {
          this.$store.commit('single', {
            key: 'attachment.engine',
            value: value
          })
        }
      },
      imageProcessingEngineRadioGroup () {
        return [
          {text: 'GD 库', value: 'gd', checked: 'checked'}/* ,
          {text: 'Image Magic', value: 'imagick'} */
        ]
      },
      fileMaxSize: {
        get () {
          return this.$store.state.setting.hasOwnProperty('attachment.limit.file') ? this.$store.state.setting['attachment.limit.file'] : 2048
        },
        set (value) {
          this.$store.commit('single', {
            key: 'attachment.limit.file',
            value: value
          })
        }
      },
      imageMaxSize: {
        get () {
          return this.$store.state.setting.hasOwnProperty('attachment.limit.image') ? this.$store.state.setting['attachment.limit.image'] : 2048
        },
        set (value) {
          this.$store.commit('single', {
            key: 'attachment.limit.image',
            value: value
          })
        }
      },
      videoMaxSize: {
        get () {
          return this.$store.state.setting.hasOwnProperty('attachment.limit.video') ? this.$store.state.setting['attachment.limit.video'] : 2048
        },
        set (value) {
          this.$store.commit('single', {
            key: 'attachment.limit.video',
            value: value
          })
        }
      },
      canUploadImageExtension: {
        get () {
          return this.$store.state.setting.hasOwnProperty('attachment.format.image') ? this.$store.state.setting['attachment.format.image'] : '.png,.jpg,.jpeg,.gif,.bmp'
        },
        set (value) {
          this.$store.commit('single', {
            key: 'attachment.format.image',
            value: value
          })
        }
      },
      canUploadCatcherExtension: {
        get () {
          return this.$store.state.setting.hasOwnProperty('attachment.format.catcher') ? this.$store.state.setting['attachment.format.catcher'] : '.png,.jpg,.jpeg,.gif,.bmp'
        },
        set (value) {
          this.$store.commit('single', {
            key: 'attachment.format.catcher',
            value: value
          })
        }
      },
      canUploadVideoExtension: {
        get () {
          return this.$store.state.setting.hasOwnProperty('attachment.format.video') ? this.$store.state.setting['attachment.format.video'] : '.flv,.swf,.mkv,.avi,.rm,.rmvb,.mpeg,.mpg,.ogg,.ogv,.mov,.wmv,.mp4,.webm,.mp3,.wav,.mid'
        },
        set (value) {
          this.$store.commit('single', {
            key: 'attachment.format.video',
            value: value
          })
        }
      },
      canUploadFileExtension: {
        get () {
          return this.$store.state.setting.hasOwnProperty('attachment.format.file') ? this.$store.state.setting['attachment.format.file'] : '.png,.jpg,.jpeg,.gif,.bmp,.flv,.swf,.mkv,.avi,.rm,.rmvb,.mpeg,.mpg,.ogg,.ogv,.mov,.wmv,.mp4,.webm,.mp3,.wav,.mid,.rar,.zip,.tar,.gz,.7z,.bz2,.cab,.iso,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf,.txt,.md,.xml'
        },
        set (value) {
          this.$store.commit('single', {
            key: 'attachment.format.file',
            value: value
          })
        }
      },
      canManagementImageExtension: {
        get () {
          return this.$store.state.setting.hasOwnProperty('attachment.manager.image') ? this.$store.state.setting['attachment.manager.image'] : '.png,.jpg,.jpeg,.gif,.bmp'
        },
        set (value) {
          this.$store.commit('single', {
            key: 'attachment.manager.image',
            value: value
          })
        }
      },
      canManagementFileExtension: {
        get () {
          return this.$store.state.setting.hasOwnProperty('attachment.manager.file') ? this.$store.state.setting['attachment.manager.file'] : '.png,.jpg,.jpeg,.gif,.bmp,.flv,.swf,.mkv,.avi,.rm,.rmvb,.mpeg,.mpg,.ogg,.ogv,.mov,.wmv,.mp4,.webm,.mp3,.wav,.mid,.rar,.zip,.tar,.gz,.7z,.bz2,.cab,.iso,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf,.txt,.md,.xml'
        },
        set (value) {
          this.$store.commit('single', {
            key: 'attachment.manager.file',
            value: value
          })
        }
      }/* ,
         enableWatermark: {
         get () {
         return this.$store.state.setting['attachment.watermark']
         },
         set (value) {
         this.$store.commit('single', {
         key: 'attachment.watermark',
         value: value
         })
         }
         } */
    },
    methods: {
      submit: function () {
        let _this = this
        _this.$validator.validateAll()
        if (_this.errors.any()) {
          return false
        }
        _this.$jquery('button.btn-submit').prop('disabled', true)
        _this.$jquery('button.btn-submit').text('提交中...')
        _this.$http.post(window.api + '/attachment', {
          engine: _this.imageProcessingEngine,
          limit_file: _this.fileMaxSize,
          limit_image: _this.imageMaxSize,
          limit_video: _this.videoMaxSize,
          allow_image: _this.canUploadImageExtension,
          allow_catcher: _this.canUploadCatcherExtension,
          allow_video: _this.canUploadVideoExtension,
          allow_file: _this.canUploadFileExtension,
          allow_manager_image: _this.canManagementImageExtension,
          allow_manager_file: _this.canManagementFileExtension,
          allow_watermark: _this.enableWatermark
        }).then(response => {
          _this.$store.commit('setting', response.data.data)
          _this.$store.commit('message', {
            show: true,
            type: 'notice',
            text: '更新SEO设置成功！'
          })
          _this.$jquery('button.btn-submit').prop('disabled', false)
          _this.$jquery('button.btn-submit').text('保存')
        }).catch(() => {
          _this.$jquery('button.btn-submit').prop('disabled', false)
          _this.$jquery('button.btn-submit').text('保存')
        })
      }
    },
    mounted () {
      let _this = this
      _this.$store.commit('title', '上传配置 - Notadd Administration')
    }
  }
</script>
<style></style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">上传配置</h3>
        </div>
        <div class="box-body">
            <div class="form-horizontal" @keyup.enter="submit">
                <div class="form-group">
                    <label class="col-sm-1 control-label">图片处理引擎</label>
                    <div class="col-sm-3">
                        <div class="btn-group btn-switch">
                            <label v-for="radio in imageProcessingEngineRadioGroup" class="btn btn-primary"
                                   :class="{ 'active': imageProcessingEngine === radio.value }">
                                <input type="radio" autocomplete="off" :value="radio.value"
                                       v-model="imageProcessingEngine"> {{ radio.text }}
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('fileMaxSize') }">
                    <label for="file-max-size" class="col-sm-1 control-label">附件大小</label>
                    <div class="col-sm-3">
                        <div class="input-group">
                            <input name="fileMaxSize" id="file-max-size" type="text" class="form-control"
                                   placeholder="请输入附件大小" v-model="fileMaxSize" v-validate data-vv-rules="required">
                            <div class="input-group-addon">KB</div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('fileMaxSize')">附件大小不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('imageMaxSize') }">
                    <label for="image-max-size" class="col-sm-1 control-label">图片大小</label>
                    <div class="col-sm-3">
                        <div class="input-group">
                            <input name="imageMaxSize" id="image-max-size" type="text" class="form-control"
                                   placeholder="请输入图片大小" v-model="imageMaxSize" v-validate data-vv-rules="required">
                            <div class="input-group-addon">KB</div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('imageMaxSize')">图片大小不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('videoMaxSize') }">
                    <label for="video-max-size" class="col-sm-1 control-label">视频大小</label>
                    <div class="col-sm-3">
                        <div class="input-group">
                            <input name="videoMaxSize" id="video-max-size" type="text" class="form-control"
                                   placeholder="请输入视频大小" v-model="videoMaxSize" v-validate data-vv-rules="required">
                            <div class="input-group-addon">KB</div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('videoMaxSize')">视频大小不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('canUploadImageExtension') }">
                    <label class="col-sm-1 control-label">允许上传的扩展名</label>
                    <div class="col-sm-3">
                        <textarea name="canUploadImageExtension" class="form-control" rows="6"
                                  placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-model="canUploadImageExtension" v-validate
                                  data-vv-rules="required"></textarea>
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('canUploadImageExtension')">扩展名不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('canUploadCatcherExtension') }">
                    <label class="col-sm-1 control-label">允许上传的扩展名</label>
                    <div class="col-sm-3">
                        <textarea name="canUploadCatcherExtension" class="form-control" rows="6"
                                  placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-model="canUploadCatcherExtension" v-validate
                                  data-vv-rules="required"></textarea>
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('canUploadCatcherExtension')">扩展名不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('canUploadVideoExtension') }">
                    <label class="col-sm-1 control-label">允许上传的扩展名</label>
                    <div class="col-sm-3">
                        <textarea name="canUploadVideoExtension" class="form-control" rows="6"
                                  placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-model="canUploadVideoExtension" v-validate
                                  data-vv-rules="required"></textarea>
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('canUploadVideoExtension')">扩展名不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('canUploadFileExtension') }">
                    <label class="col-sm-1 control-label">允许上传的扩展名</label>
                    <div class="col-sm-3">
                        <textarea name="canUploadFileExtension" class="form-control" rows="6"
                                  placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-model="canUploadFileExtension" v-validate
                                  data-vv-rules="required"></textarea>
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('canUploadFileExtension')">扩展名不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('canManagementImageExtension') }">
                    <label class="col-sm-1 control-label">允许管理图片的扩展名</label>
                    <div class="col-sm-3">
                        <textarea name="canManagementImageExtension" class="form-control" rows="6"
                                  placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-model="canManagementImageExtension" v-validate
                                  data-vv-rules="required"></textarea>
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('canManagementImageExtension')">扩展名不能为空</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.has('canManagementFileExtension') }">
                    <label class="col-sm-1 control-label">允许管理文件的扩展名</label>
                    <div class="col-sm-3">
                        <textarea name="canManagementFileExtension" class="form-control" rows="6"
                                  placeholder="请输入扩展名并用英文逗号对多个扩展名分隔" v-model="canManagementFileExtension" v-validate
                                  data-vv-rules="required"></textarea>
                    </div>
                    <div class="col-sm-8">
                        <span class="help-block" v-show="errors.has('canManagementFileExtension')">扩展名不能为空</span>
                    </div>
                </div>
                <!--<div class="form-group">-->
                    <!--<label class="col-sm-1 control-label">开启水印功能</label>-->
                    <!--<div class="col-sm-3">-->
                        <!--<div class="btn-group btn-switch">-->
                            <!--<label class="btn btn-primary" :class="{ 'active': enableWatermark === '1' }">-->
                                <!--<input type="radio" autocomplete="off" value="1" v-model="enableWatermark"> 开启-->
                            <!--</label>-->
                            <!--<label class="btn btn-primary" :class="{ 'active': enableWatermark === '0' }">-->
                                <!--<input type="radio" autocomplete="off" value="0" v-model="enableWatermark"> 关闭-->
                            <!--</label>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            </div>
        </div>
        <div class="box-footer">
            <button class="btn btn-primary btn-submit" :disabled="errors.any()" @click="submit">保存</button>
        </div>
    </div>
</template>