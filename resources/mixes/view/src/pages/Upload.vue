<script>
    export default {
        data() {
            return {};
        },
    };
</script>
<template>
    <card>
        <p slot="title">上传配置</p>
        <i-form :label-width="150">
            <form-item label="图片处理引擎">
                <i-col span="9">
                    <radio-group>
                        <radio value="gd">GD 库</radio>
                    </radio-group>
                </i-col>
            </form-item>
            <form-item label="附件大小">
                <i-col span="9">
                    <i-input placeholder="请输入附件大小">
                        <span slot="append">KB</span>
                    </i-input>
                </i-col>
            </form-item>
            <form-item label="图片大小">
                <i-col span="9">
                    <i-input placeholder="请输入图片大小">
                        <span slot="append">KB</span>
                    </i-input>
                </i-col>
            </form-item>
            <form-item label="视频大小">
                <i-col span="9">
                    <i-input placeholder="请输入视频大小">
                        <span slot="append">KB</span>
                    </i-input>
                </i-col>
            </form-item>
            <form-item label="允许上传的扩展名">
                <i-col span="9">
                    <i-input type="textarea" placeholder="请输入允许管理图片的扩展名" :autosize="{minRows: 2,maxRows: 5}"></i-input>
                </i-col>
            </form-item>
            <form-item label="允许上传的扩展名">
                <i-col span="9">
                    <i-input type="textarea" placeholder="请输入允许管理图片的扩展名" :autosize="{minRows: 2,maxRows: 5}"></i-input>
                </i-col>
            </form-item>
            <form-item label="允许管理图片的扩展名">
                <i-col span="9">
                    <i-input type="textarea" placeholder="请输入允许管理图片的扩展名" :autosize="{minRows: 2,maxRows: 5}"></i-input>
                </i-col>
            </form-item>
            <form-item label="允许管理文件的扩展名">
                <i-col span="9">
                    <i-input type="textarea" placeholder="请输入允许管理文件的扩展名" :autosize="{minRows: 2,maxRows: 5}"></i-input>
                </i-col>
            </form-item>
            <form-item>
                <i-button type="primary" @click.native="submit">确认提交</i-button>
            </form-item>
        </i-form>
    </card>
</template>
