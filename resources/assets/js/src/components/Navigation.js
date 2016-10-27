import Component from "notadd/libraries/Component";
import LinkButton from "notadd/components/LinkButton";
import Button from "notadd/components/Button";
export default class Navigation extends Component {
    view() {
        const {history, pane} = application;
        return (
            <div className={'Navigation ButtonGroup ' + (this.props.className || '')}
                onmouseenter={pane && pane.show.bind(pane)}
                onmouseleave={pane && pane.onmouseleave.bind(pane)}>
                {history.canGoBack()
                    ? [this.getBackButton(), this.getPaneButton()]
                    : this.getDrawerButton()}
            </div>
        );
    }

    config(isInitialized, context) {
        context.retain = true;
    }

    getBackButton() {
        const {history} = application;
        const previous = history.getPrevious() || {};
        return LinkButton.component({
            className: 'Button Navigation-back ' + (previous.title ? '' : 'Button--icon'),
            href: history.backUrl(),
            icon: 'chevron-left',
            children: previous.title,
            config: () => {
            },
            onclick: e => {
                if (e.shiftKey || e.ctrlKey || e.metaKey || e.which === 2) return;
                e.preventDefault();
                history.back();
            }
        });
    }

    getPaneButton() {
        const {pane} = application;
        if (!pane || !pane.active) return '';
        return Button.component({
            className: 'Button Button--icon Navigation-pin' + (pane.pinned ? ' active' : ''),
            onclick: pane.togglePinned.bind(pane),
            icon: 'thumb-tack'
        });
    }

    getDrawerButton() {
        if (!this.props.drawer) return '';
        const {drawer} = application;
        return Button.component({
            className: 'Button Button--icon Navigation-drawer',
            onclick: e => {
                e.stopPropagation();
                drawer.show();
            },
            icon: 'reorder'
        });
    }
}