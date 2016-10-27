import ScrollListener from "notadd/utilities/ScrollListener";
import Navigation from "notadd/components/Navigation";
import AdminNav from "notadd/components/AdminNav";
import HeaderPrimary from "notadd/components/HeaderPrimary";
import HeaderSecondary from "notadd/components/HeaderSecondary";
import Drawer from "notadd/utilities/Drawer";
import AlertManager from "notadd/components/AlertManager";
import ModalManager from "notadd/components/ModalManager";
import mapRoutes from "notadd/utilities/mapRoutes";
export default function boot(application) {
    m.startComputation();
    m.mount(document.getElementById('app-navigation'), Navigation.component({
        className: 'App-backControl',
        drawer: true
    }));
    m.mount(document.getElementById('header-navigation'), Navigation.component());
    m.mount(document.getElementById('header-primary'), HeaderPrimary.component());
    m.mount(document.getElementById('header-secondary'), HeaderSecondary.component());
    m.mount(document.getElementById('admin-navigation'), AdminNav.component());
    application.drawer = new Drawer();
    application.modal = m.mount(document.getElementById('modal'), ModalManager.component());
    application.alerts = m.mount(document.getElementById('alerts'), AlertManager.component());
    application.history = {
        canGoBack: () => true,
        getPrevious: () => {
        },
        backUrl: () => 'http://foundation.io',
        back: function () {
            window.location = this.backUrl();
        }
    };
    m.route.mode = 'hash';
    m.route(document.getElementById('content'), '/', mapRoutes(application.routes));
    m.endComputation();
    new ScrollListener(top => {
        const $app = $('#app');
        const offset = $app.offset().top;
        $app
            .toggleClass('affix', top >= offset)
            .toggleClass('scrolled', top > offset);
    }).start();
    application.booted = true;
}