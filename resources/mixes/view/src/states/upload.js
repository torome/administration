import store from '../stores';

export default {
    imageProcessingEngine: {
        get() {
            return store.state.setting['attachment.engine'] ? store.state.setting['attachment.engine'] : 'gd';
        },
        set(val) {
            store.commit('single', {
                key: 'attachment.engine',
                value: val,
            });
        },
    },
    fileMaxSize: {
        get() {
            return store.state.setting['attachment.limit.file'] ? store.state.setting['attachment.limit.file'] : 2048;
        },
        set(val) {
            store.commit('single', {
                key: 'attachment.limit.file',
                value: val,
            });
        },
    },
    imageMaxSize: {
        get() {
            return store.state.setting['attachment.limit.image'] ? store.state.setting['attachment.limit.image'] : 2048;
        },
        set(val) {
            store.commit('single', {
                key: 'attachment.limit.image',
                value: val,
            });
        },
    },
    videoMaxSize: {
        get() {
            return store.state.setting['attachment.limit.video'] ? store.state.setting['attachment.limit.video'] : 2048;
        },
        set(val) {
            store.commit('single', {
                key: 'attachment.limit.video',
                value: val,
            })
        },
    },
    canUploadImageExtension: {
        get() {
            return store.state.setting['attachment.format.image'] ? store.state.setting['attachment.format.image'] : '.png,.jpg,.jpeg,.gif,.bmp';
        },
        set(val) {
            store.commit('single', {
                key: 'attachment.format.image',
                value: val,
            });
        },
    },
    canUploadCatcherExtension: {
        get() {
            return store.state.setting['attachment.format.catcher'] ? store.state.setting['attachment.format.catcher'] : '.png,.jpg,.jpeg,.gif,.bmp';
        },
        set(val) {
            store.commit('single', {
                key: 'attachment.format.catcher',
                value: val,
            });
        },
    },
    canUploadVideoExtension: {
        get() {
            return store.state.setting['attachment.format.video'] ? store.state.setting['attachment.format.video'] : '.flv,.swf,.mkv,.avi,.rm,.rmvb,.mpeg,.mpg,.ogg,.ogv,.mov,.wmv,.mp4,.webm,.mp3,.wav,.mid';
        },
        set(val) {
            store.commit('single', {
                key: 'attachment.format.video',
                value: val,
            });
        },
    },
    canUploadFileExtension: {
        get() {
            return store.state.setting['attachment.format.file'] ? store.state.setting['attachment.format.file'] : '.png,.jpg,.jpeg,.gif,.bmp,.flv,.swf,.mkv,.avi,.rm,.rmvb,.mpeg,.mpg,.ogg,.ogv,.mov,.wmv,.mp4,.webm,.mp3,.wav,.mid,.rar,.zip,.tar,.gz,.7z,.bz2,.cab,.iso,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf,.txt,.md,.xml';
        },
        set(val) {
            store.commit('single', {
                key: 'attachment.format.file',
                value: val,
            });
        },
    },
    canManagementImageExtension: {
        get() {
            return store.state.setting['attachment.manager.image'] ? store.state.setting['attachment.manager.image'] : '.png,.jpg,.jpeg,.gif,.bmp';
        },
        set(val) {
            store.commit('single', {
                key: 'attachment.manager.image',
                value: val,
            });
        },
    },
    canManagementFileExtension: {
        get() {
            return store.state.setting['attachment.manager.file'] ? store.state.setting['attachment.manager.file'] : '.png,.jpg,.jpeg,.gif,.bmp,.flv,.swf,.mkv,.avi,.rm,.rmvb,.mpeg,.mpg,.ogg,.ogv,.mov,.wmv,.mp4,.webm,.mp3,.wav,.mid,.rar,.zip,.tar,.gz,.7z,.bz2,.cab,.iso,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf,.txt,.md,.xml';
        },
        set(val) {
            store.commit('single', {
                key: 'attachment.manager.file',
                value: val,
            });
        },
    },
};