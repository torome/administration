import Component from "notadd/libraries/Component";
import Button from "notadd/components/Button";
export default class Modal extends Component {
    init() {
        this.alert = null;
    }

    view() {
        if (this.alert) {
            this.alert.props.dismissible = false;
        }
        return (
            <div className={'Modal modal-dialog ' + this.className()}>
                <div className="Modal-content">
                    {this.isDismissible() ? (
                        <div className="Modal-close App-backControl">
                            {Button.component({
                                icon: 'times',
                                onclick: this.hide.bind(this),
                                className: 'Button Button--icon Button--link'
                            })}
                        </div>
                    ) : ''}
                    <form onsubmit={this.onsubmit.bind(this)}>
                        <div className="Modal-header">
                            <h3 className="App-titleControl App-titleControl--text">{this.title()}</h3>
                        </div>
                        {alert ? <div className="Modal-alert">{this.alert}</div> : ''} {this.content()}
                    </form>
                </div>
            </div>
        );
    }

    isDismissible() {
        return true;
    }

    className() {
    }

    title() {
    }

    content() {
    }

    /**
     * Handle the modal form's submit event.
     *
     * @param {Event} e
     */
    onsubmit() {
    }

    onready() {
        this.$('form').find('input, select, textarea').first().focus().select();
    }

    onhide() {
    }

    hide() {
        application.modal.close();
    }

    loaded() {
        this.loading = false;
        m.redraw();
    }

    onerror(error) {
        this.alert = error.alert;
        m.redraw();
        if (error.status === 422 && error.response.errors) {
            this.$('form [name=' + error.response.errors[0].source.pointer.replace('/data/attributes/', '') + ']').select();
        } else {
            this.onready();
        }
    }
}