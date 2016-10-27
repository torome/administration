import Component from "notadd/libraries/Component";
import LoadingIndicator from "notadd/libraries/Component";
import extractText from "notadd/utilities/extractText";
import extract from "notadd/utilities/extract";
import icon from "notadd/helpers/icon";
export default class Button extends Component{
    view() {
        const attrs = Object.assign({}, this.props);
        delete attrs.children;
        attrs.className = attrs.className || '';
        attrs.type = attrs.type || 'button';
        if (!attrs.title && this.props.children) {
            attrs.title = extractText(this.props.children);
        }
        const iconName = extract(attrs, 'icon');
        if (iconName) attrs.className += ' hasIcon';
        const loading = extract(attrs, 'loading');
        if (attrs.disabled || loading) {
            attrs.className += ' disabled' + (loading ? ' loading' : '');
            delete attrs.onclick;
        }
        return <button {...attrs}>{this.getButtonContent()}</button>;
    }

    getButtonContent() {
        const iconName = this.props.icon;
        return [
            iconName && iconName !== true ? icon(iconName, {className: 'Button-icon'}) : '',
            this.props.children ? <span className="Button-label">{this.props.children}</span> : '',
            this.props.loading ? LoadingIndicator.component({size: 'tiny', className: 'LoadingIndicator--inline'}) : ''
        ];
    }
}