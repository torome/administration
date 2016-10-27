import Button from "notadd/components/Button";
export default class LinkButton extends Button {
    static initProps(props) {
        props.active = this.isActive(props);
        props.config = props.config || m.route;
    }

    view() {
        const vdom = super.view();
        vdom.tag = 'a';
        return vdom;
    }

    static isActive(props) {
        return typeof props.active !== 'undefined'
            ? props.active
            : m.route() === props.href;
    }
}