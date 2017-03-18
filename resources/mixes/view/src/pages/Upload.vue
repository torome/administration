<script>
    import state from '../states/upload';
    import injection from '../helpers/injection';

    export default {
        computed: {
            ...state,
        },
        data() {
            return {
                form: {

                },
                rules: {

                },
            };
        },
        methods: {
            submit() {

            },
        },
    };
</script>
<template>
    <card>
        <p slot="title">上传配置</p>
        <i-form :label-width="200" :model="form" ref="form" :rules="rules">
            <row>
                <i-col span="14">
                    <form-item label="图片处理引擎" prop="">
                        <radio-group v-model="imageProcessingEngine">
                            <radio label="gd">GD 库</radio>
                        </radio-group>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="附件大小" prop="">
                        <i-input placeholder="请输入附件大小" v-model="fileMaxSize">
                            <span slot="append">KB</span>
                        </i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="图片大小" prop="">
                        <i-input placeholder="请输入图片大小" v-model="imageMaxSize">
                            <span slot="append">KB</span>
                        </i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="视频大小" prop="">
                        <i-input placeholder="请输入视频大小" v-model="videoMaxSize">
                            <span slot="append">KB</span>
                        </i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="允许图片的扩展名" prop="">
                        <i-input type="textarea" placeholder="请输入允许管理图片的扩展名" v-model="canUploadImageExtension"
                                 :autosize="{minRows: 2,maxRows: 5}"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>

                <i-col span="14">
                    <form-item label="允许上传截图的扩展名" prop="">
                        <i-input type="textarea" placeholder="请输入允许管理截图的扩展名" v-model="canUploadCatcherExtension"
                                 :autosize="{minRows: 2,maxRows: 5}"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="允许上传视频的扩展名" prop="">
                        <i-input type="textarea" placeholder="请输入允许上传视频的扩展名" v-model="canUploadVideoExtension"
                                 :autosize="{minRows: 2,maxRows: 5}"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="允许上传文件的扩展名" prop="">
                        <i-input type="textarea" placeholder="请输入允许上传文件的扩展名" v-model="canUploadFileExtension"
                                 :autosize="{minRows: 2,maxRows: 5}"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="允许管理图片的扩展名" prop="">
                        <i-input type="textarea" placeholder="请输入允许管理图片的扩展名" v-model="canManagementImageExtension"
                                 :autosize="{minRows: 2,maxRows: 5}"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="允许管理文件的扩展名" prop="">
                        <i-input type="textarea" placeholder="请输入允许管理文件的扩展名" v-model="canManagementFileExtension"
                                 :autosize="{minRows: 2,maxRows: 5}"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item>
                        <i-button type="primary" @click.native="submit">确认提交</i-button>
                    </form-item>
                </i-col>
            </row>
        </i-form>
    </card>
</template>
