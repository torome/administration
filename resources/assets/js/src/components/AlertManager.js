import Component from "notadd/libraries/Component";
import Alert from "notadd/components/Alert";
export default class AlertManager extends Component {
    init() {
        this.components = [];
    }

    view() {
        return (
            <div className="AlertManager">
                {this.components.map(component => <div className="AlertManager-alert">{component}</div>)}
            </div>
        );
    }

    config(isInitialized, context) {
        context.retain = true;
    }

    show(component) {
        if (!(component instanceof Alert)) {
            throw new Error('The AlertManager component can only show Alert components');
        }
        component.props.ondismiss = this.dismiss.bind(this, component);
        this.components.push(component);
        m.redraw();
    }

    dismiss(component) {
        const index = this.components.indexOf(component);
        if (index !== -1) {
            this.components.splice(index, 1);
            m.redraw();
        }
    }

    clear() {
        this.components = [];
        m.redraw();
    }
}