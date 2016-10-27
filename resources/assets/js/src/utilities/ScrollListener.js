const scroll = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    (callback => window.setTimeout(callback, 1000 / 60));
export default class ScrollListener {
    constructor(callback) {
        this.callback = callback;
        this.lastTop = -1;
    }

    loop() {
        if (!this.active) return;
        this.update();
        scroll(this.loop.bind(this));
    }

    update(force) {
        const top = window.pageYOffset;
        if (this.lastTop !== top || force) {
            this.callback(top);
            this.lastTop = top;
        }
    }

    start() {
        if (!this.active) {
            this.active = true;
            this.loop();
        }
    }

    stop() {
        this.active = false;
    }
}