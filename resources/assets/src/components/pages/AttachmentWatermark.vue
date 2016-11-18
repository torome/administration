<script>
    import ColorPicker from "../ColorPicker";
    import Slider from "../Slider";
    export default {
        components: {
            ColorPicker,
            Slider
        },
        data: () => {
            return {
                minAddWidth: "100",
                minAddHeight: "100",
                position: "cc",
                enabledGIF: false,
                type: "img",
                text: "demo",
                font: "ms",
                fontSize: "12",
                fontColor: "#00f",
                transparency: 10,
                quality: 90,
                positionRadioGroup: [
                    {text: "左上", value: "tl"},
                    {text: "中上", value: "tc"},
                    {text: "右上", value: "tr"},
                    {text: "左中", value: "cl"},
                    {text: "中心", value: "cc"},
                    {text: "右中", value: "cr"},
                    {text: "左下", value: "bl"},
                    {text: "中下", value: "bc"},
                    {text: "右下", value: "br"}
                ],
                typeRadioGroup: [
                    {text: "图片", value: "img"},
                    {text: "文本", value: "txt"}
                ],
                fontOptions: [
                    {text: "微软雅黑1", value: "ms"},
                    {text: "微软雅黑2", value: "ms1"},
                    {text: "微软雅黑3", value: "ms2"}
                ],
                fontSizeOptions: [
                    {text: "12px", value: "12"},
                    {text: "16px", value: "16"},
                    {text: "18px", value: "18"}
                ]
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
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">水印设置</h3>
        </div>
        <validator name="validation">
            <form class="form-horizontal" novalidate @submit="onSubmit">
                <div class="box-body">
                    <div class="form-group" :class="{ 'has-error': $validation.minAddWidth.invalid || $validation.minAddHeight.invalid }">
                        <label class="col-sm-3 control-label">图片附件大小控制</label>
                        <div class="col-sm-4">
                            <div class="input-group">
                                <div class="input-group-addon">宽</div>
                                <input v-model="minAddWidth" type="text" class="form-control" placeholder="请输入宽度" v-validate:min-add-width="{ required: { rule: true, message: '宽度不能为空' } }">
                                <div class="input-group-addon">像素</div>
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.minAddWidth.required" class="help-block">{{ $validation.minAddWidth.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.minAddHeight.invalid }">
                        <div class="col-sm-offset-3 col-sm-4">
                            <div class="input-group">
                                <div class="input-group-addon">高</div>
                                <input v-model="minAddHeight" type="text" class="form-control" placeholder="请输入高度" v-validate:min-add-height="{ required: { rule: true, message: '高度不能为空' } }">
                                <div class="input-group-addon">像素</div>
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.minAddHeight.required" class="help-block">{{ $validation.minAddHeight.required }}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">水印位置</label>
                        <div class="col-sm-4">
                            <label v-for="radio in positionRadioGroup" class="radio-inline">
                                <input type="radio" :value="radio.value" v-model="position"> {{ radio.text }}
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">为 GIF 添加水印</label>
                        <div class="col-sm-4">
                            <label class="checkbox-inline">
                                <input type="checkbox" v-model="enabledGIF"> 启用
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">水印类型</label>
                        <div class="col-sm-4">
                            <label v-for="radio in typeRadioGroup" class="radio-inline">
                                <input type="radio" :value="radio.value" v-model="type"> {{ radio.text }}
                            </label>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.text.invalid }">
                        <label class="col-sm-3 control-label">水印文本</label>
                        <div class="col-sm-4">
                            <textarea v-model="text" class="form-control" rows="6" placeholder="请输入水印文本" v-validate:text="{ required: { rule: true, message: '水印文本不能为空' } }"></textarea>
                        </div>
                        <div class="col-sm-5">
                            <span v-if="$validation.text.required" class="help-block">{{ $validation.text.required }}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">水印字体</label>
                        <div class="col-sm-4">
                            <select class="form-control" v-model="font">
                                <option v-for="option in fontOptions" :value="option.value">{{ option.text }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">水印字体大小</label>
                        <div class="col-sm-4">
                            <select class="form-control" v-model="fontSize">
                                <option v-for="option in fontSizeOptions" :value="option.value">{{ option.text }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">水印文字颜色</label>
                        <div class="col-sm-4">
                            <color-picker v-model="fontColor"></color-picker>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">水印透明度</label>
                        <div class="col-sm-4">
                            <slider :options="{ max: 100 }" v-model="transparency"></slider> &nbsp; &nbsp;
                            <b>{{ transparency + '%' }}</b>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">水印质量</label>
                        <div class="col-sm-4">
                            <slider :options="{ max: 100 }" v-model="quality"></slider> &nbsp; &nbsp;
                            <b>{{ quality + '%' }}</b>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">水印效果预览</label>
                        <div class="col-sm-4">
                            <button class="btn btn-default"><span class="fa fa-image"></span>预览</button>
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