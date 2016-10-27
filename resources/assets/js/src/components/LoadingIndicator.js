import Component from 'notadd/libraries/Component';
export default class LoadingIndicator extends Component {
    view() {
        const attrs = Object.assign({}, this.props);
        attrs.className = 'LoadingIndicator ' + (attrs.className || '');
        delete attrs.size;
        return <div {...attrs}>{m.trust('&nbsp;')}</div>;
    }

    config() {
        const size = this.props.size || 'small';
        $.fn.spin.presets[size].zIndex = 'auto';
        this.$().spin(size);
    }
}