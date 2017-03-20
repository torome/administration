import LoadingBar from 'iview/src/components/loading-bar';
import Message from 'iview/src/components/message';
import Modal from 'iview/src/components/modal';
import Notice from 'iview/src/components/notice';

export default function (Vue, injection) {
    Object.defineProperties(Vue.prototype, {
        $loading: {
            get() {
                return LoadingBar;
            },
        },
        $message: {
            get() {
                return Message;
            },
        },
        $modal: {
            get() {
                return Modal;
            },
        },
        $notice: {
            get() {
                return Notice;
            },
        },
    });

    Object.defineProperties(injection, {
        loading: {
            get() {
                return LoadingBar;
            },
        },
        message: {
            get() {
                return Message;
            },
        },
        modal: {
            get() {
                return Modal;
            },
        },
        notice: {
            get() {
                return Notice;
            },
        },
    });
    injection.loading.config({
        color: '#5cb85c',
        failedColor: '#f0ad4e',
        height: 2,
    });
}
