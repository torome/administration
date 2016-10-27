import Button from "notadd/components/Button";
import Component from "notadd/libraries/Component";
import extract from "notadd/utilities/extract";
import listItems from "notadd/helpers/listItems";
export default class Alert extends Component {
    view() {
        const attrs = Object.assign({}, this.props);
        const type = extract(attrs, 'type');
        attrs.className = 'Alert Alert--' + type + ' ' + (attrs.className || '');
        const children = extract(attrs, 'children');
        const controls = extract(attrs, 'controls') || [];
        const dismissible = extract(attrs, 'dismissible');
        const ondismiss = extract(attrs, 'ondismiss');
        const dismissControl = [];
        if (dismissible || dismissible === undefined) {
            dismissControl.push(
                <Button
                    icon="times"
                    className="Button Button--link Button--icon Alert-dismiss"
                    onclick={ondismiss}/>
            );
        }
        return (
            <div {...attrs}>
        <span className="Alert-body">
          {children}
        </span>
                <ul className="Alert-controls">
                    {listItems(controls.concat(dismissControl))}
                </ul>
            </div>
        );
    }
}