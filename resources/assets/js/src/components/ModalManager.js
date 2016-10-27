import Component from "notadd/libraries/Component";
import Modal from "notadd/components/Modal";
export default class ModalManager extends Component {
    init() {
        this.showing = false;
        this.component = null;
    }

    view() {
        return (
            <div className="ModalManager modal fade">
                {this.component && this.component.render()}
            </div>
        );
    }

    config(isInitialized, context) {
        if (isInitialized) return;
        context.retain = true;
        this.$()
            .on('hidden.bs.modal', this.clear.bind(this))
            .on('shown.bs.modal', this.onready.bind(this));
    }

    show(component) {
        if (!(component instanceof Modal)) {
            throw new Error('The ModalManager component can only show Modal components');
        }
        clearTimeout(this.hideTimeout);
        this.showing = true;
        this.component = component;
        application.current.retain = true;
        m.redraw(true);
        this.$().modal({backdrop: this.component.isDismissible() ? true : 'static'}).modal('show');
        this.onready();
    }

    /**
     * Close the modal dialog.
     *
     * @public
     */
    close() {
        if (!this.showing) return;
        this.hideTimeout = setTimeout(() => {
            this.$().modal('hide');
            this.showing = false;
        });
    }

    clear() {
        if (this.component) {
            this.component.onhide();
        }
        this.component = null;
        application.current.retain = false;
        m.lazyRedraw();
    }

    onready() {
        if (this.component && this.component.onready) {
            this.component.onready(this.$());
        }
    }
}