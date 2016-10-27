export default class Drawer {
    constructor() {
        $('#content').click(e => {
            if (this.isOpen()) {
                e.preventDefault();
                this.hide();
            }
        });
    }

    isOpen() {
        return $('#app').hasClass('drawerOpen');
    }

    hide() {
        $('#app').removeClass('drawerOpen');
        if (this.$backdrop) this.$backdrop.remove();
    }

    show() {
        $('#app').addClass('drawerOpen');
        this.$backdrop = $('<div/>')
            .addClass('drawer-backdrop fade')
            .appendTo('body')
            .click(() => this.hide());
        setTimeout(() => this.$backdrop.addClass('in'));
    }
}