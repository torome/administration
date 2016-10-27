import Component from "notadd/libraries/Component";
import icon from "notadd/helpers/icon";
import listItems from "notadd/helpers/listItems";
export default class Dropdown extends Component {
    static initProps(props) {
        super.initProps(props);
        props.className = props.className || '';
        props.buttonClassName = props.buttonClassName || '';
        props.menuClassName = props.menuClassName || '';
        props.label = props.label || '';
        props.caretIcon = typeof props.caretIcon !== 'undefined' ? props.caretIcon : 'caret-down';
    }

    init() {
        this.showing = false;
    }

    view() {
        const items = this.props.children ? listItems(this.props.children) : [];
        return (
            <div className={'ButtonGroup Dropdown dropdown ' + this.props.className + ' itemCount' + items.length + (this.showing ? ' open' : '')}>
                {this.getButton()} {this.getMenu(items)}
            </div>
        );
    }

    config(isInitialized) {
        if (isInitialized) return;
        this.$().on('shown.bs.dropdown', () => {
            this.showing = true;
            if (this.props.onshow) {
                this.props.onshow();
            }
            m.redraw();
            const $menu = this.$('.Dropdown-menu');
            const isRight = $menu.hasClass('Dropdown-menu--right');
            $menu.removeClass('Dropdown-menu--top Dropdown-menu--right');
            $menu.toggleClass(
                'Dropdown-menu--top',
                $menu.offset().top + $menu.height() > $(window).scrollTop() + $(window).height()
            );
            $menu.toggleClass(
                'Dropdown-menu--right',
                isRight || $menu.offset().left + $menu.width() > $(window).scrollLeft() + $(window).width()
            );
        });
        this.$().on('hidden.bs.dropdown', () => {
            this.showing = false;
            if (this.props.onhide) {
                this.props.onhide();
            }
            m.redraw();
        });
    }

    getButton() {
        return (
            <button
                className={'Dropdown-toggle ' + this.props.buttonClassName}
                data-toggle="dropdown"
                onclick={this.props.onclick}>
                {this.getButtonContent()}
            </button>
        );
    }

    getButtonContent() {
        return [
            this.props.icon ? icon(this.props.icon, {className: 'Button-icon'}) : '',
            <span className="Button-label">{this.props.label}</span>,
            this.props.caretIcon ? icon(this.props.caretIcon, {className: 'Button-caret'}) : ''
        ];
    }

    getMenu(items) {
        return (
            <ul className={'Dropdown-menu dropdown-menu ' + this.props.menuClassName}>
                {items}
            </ul>
        );
    }
}