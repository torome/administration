import axios from 'axios';

export default function (injection, Vue) {
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    axios.interceptors.request.use(configuration => configuration, error => {
        console.log(error);
        return Promise.reject(error);
    });
    axios.interceptors.response.use(response => response, error => {
        console.log(error);
        console.log(error.response);
        console.log(error.response.data);
        if (error.response.status === 401) {
            injection.vue.$router.push('/login');
        }
        if (error.response.status > 401 && error.response.status < 500) {
        } else {
            throw new Error(error);
        }
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
