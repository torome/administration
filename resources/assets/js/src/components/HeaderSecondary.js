import Component from "notadd/libraries/Component";
import ItemList from "notadd/utilities/ItemList";
import SessionDropdown from "notadd/components/SessionDropdown";
import listItems from "notadd/helpers/listItems";
export default class HeaderSecondary extends Component {
    view() {
        return (
            <ul className="Header-controls">
                {listItems(this.items().toArray())}
            </ul>
        );
    }

    config(isInitialized, context) {
        context.retain = true;
    }

    items() {
        const items = new ItemList();
        items.add('session', SessionDropdown.component());
        return items;
    }
}