import DashboardPage from 'notadd/components/DashboardPage';
export default function (application) {
    application.routes = {
        'dashboard': {path: '/', component: DashboardPage.component()},
    };
}