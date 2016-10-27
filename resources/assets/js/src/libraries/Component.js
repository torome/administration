/**
 * @abstract
 */
export default class Component {
    constructor(props = {}, children = null) {
        if (children) props.children = children;
        this.constructor.initProps(props);
        this.props = props;
        this.element = null;
        this.retain = false;
        this.init();
    }

    init() {
    }

    onunload() {
    }

    render() {
        const vdom = this.retain ? {subtree: 'retain'} : this.view();
        vdom.attrs = vdom.attrs || {};
        const originalConfig = vdom.attrs.config;
        vdom.attrs.config = (...args) => {
            this.element = args[0];
            this.config.apply(this, args.slice(1));
            if (originalConfig) originalConfig.apply(this, args);
        };
        return vdom;
    }

    $(selector) {
        const $element = $(this.element);
        return selector ? $element.find(selector) : $element;
    }

    config() {
    }

    view() {
        throw new Error('Component#view must be implemented by subclass');
    }

    static component(props = {}, children = null) {
        const componentProps = Object.assign({}, props);
        if (children) componentProps.children = children;
        this.initProps(componentProps);
        const view = (component) => {
            component.props = componentProps;
            return component.render();
        };
        view.$original = this.prototype.view;
        const output = {
            controller: this.bind(undefined, componentProps),
            view: view,
            props: componentProps,
            component: this
        };
        if (componentProps.key) {
            output.attrs = {key: componentProps.key};
        }
        return output;
    }

    static initProps(props) {
    }
}