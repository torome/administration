import Component from "notadd/libraries/Component";
import ItemList from "notadd/utilities/ItemList";
import AdminLinkButton from "notadd/components/AdminLinkButton";
import SelectDropdown from "notadd/components/SelectDropdown";
export default class AdminNav extends Component {
    view() {
        return (
            <SelectDropdown
                className="AdminNav App-titleControl"
                buttonClassName="Button"
                children={this.items().toArray()}
            />
        );
    }

    items() {
        const items = new ItemList();
        items.add('dashboard', AdminLinkButton.component({
            href: application.route('dashboard'),
            icon: 'bar-chart',
            children: application.translator.trans('core.admin.nav.dashboard_button'),
            description: application.translator.trans('core.admin.nav.dashboard_text')
        }));
        return items;
    }
}