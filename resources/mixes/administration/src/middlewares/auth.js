import Auth from '../helpers/auth';

export default (to, from, next) => {
    if (Auth.isLogin()) {
        next();
    } else {
        next({
            path: '/login',
        });
    }
};
