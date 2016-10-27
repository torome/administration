import Component from "notadd/libraries/Component";
import listItems from "notadd/helpers/listItems";
import ItemList from "notadd/utilities/ItemList";
export default class HeaderPrimary extends Component {
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
        return new ItemList();
    }
}