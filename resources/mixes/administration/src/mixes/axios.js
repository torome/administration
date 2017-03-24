import axios from 'axios';

export default function (injection, Vue) {
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    axios.interceptors.request.use(configuration => configuration, error => {
        injection.console.log(error);
        return Promise.reject(error);
    });
    axios.interceptors.response.use(response => response, error => {
        injection.console.log(error.response);
        injection.console.log(error.response.data);
        const data = error.response.data;
        const response = error.response;
        if (response.status === 401) {
            injection.notice.error({
                title: '请重新登录！',
            });
            injection.vue.$router.push('/login');
        }
        if (response.status > 401 && response.status <= 500) {
            injection.notice.error({
                title: data.message,
            });
        }
        const dispatch = new Error('Error');
        dispatch.response = response;
        throw dispatch;
    });
    Object.defineProperties(injection, {
        http: {
            get() {
                return axios;
            },
        },
    });
    Object.defineProperties(Vue, {
        http: {
            get() {
                return axios;
            },
        },
    });
    Object.defineProperties(Vue.prototype, {
        $http: {
            get() {
                return axios;
            },
        },
    });
}
