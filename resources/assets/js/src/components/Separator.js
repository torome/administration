import Component from "notadd/libraries/Component";
class Separator extends Component {
    view() {
        return <li className="Dropdown-separator"/>;
    }
}
Separator.isListItem = true;
export default Separator;