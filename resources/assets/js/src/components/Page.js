import Component from "notadd/libraries/Component";
/**
 * @abstract
 */
export default class Page extends Component {
    init() {
        application.previous = application.current;
        application.current = this;
        application.modal.close();
        this.bodyClass = '';
    }

    config(isInitialized, context) {
        if (isInitialized) return;
        if (this.bodyClass) {
            $('#app').addClass(this.bodyClass);
            context.onunload = () => $('#app').removeClass(this.bodyClass);
        }
    }
}