import Dropdown from "notadd/components/Dropdown";
import Button from "notadd/components/Button";
import ItemList from "notadd/utilities/ItemList";
export default class SessionDropdown extends Dropdown {
    static initProps(props) {
        super.initProps(props);
        props.className = 'SessionDropdown';
        props.buttonClassName = 'Button Button--user Button--flat';
        props.menuClassName = 'Dropdown-menu--right';
    }

    view() {
        this.props.children = this.items().toArray();
        return super.view();
    }

    getButtonContent() {
        return [
            '', ' ',
            <span className="Button-label">Notadd</span>
        ];
    }

    items() {
        const items = new ItemList();
        items.add('logOut',
            Button.component({
                icon: 'sign-out',
                children: application.translator.trans('core.admin.header.log_out_button'),
                //onclick: application.session.logout.bind(application.session)
            }),
            -100
        );
        return items;
    }
}