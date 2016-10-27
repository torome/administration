class Item {
    constructor(content, priority) {
        this.content = content;
        this.priority = priority;
    }
}
export default class ItemList {
    constructor() {
        this.items = {};
    }

    has(key) {
        return !!this.items[key];
    }

    get(key) {
        return this.items[key].content;
    }

    add(key, content, priority = 0) {
        this.items[key] = new Item(content, priority);
    }

    replace(key, content = null, priority = null) {
        if (this.items[key]) {
            if (content !== null) {
                this.items[key].content = content;
            }
            if (priority !== null) {
                this.items[key].priority = priority;
            }
        }
    }

    remove(key) {
        delete this.items[key];
    }

    merge(items) {
        for (const i in items.items) {
            if (items.items.hasOwnProperty(i) && items.items[i] instanceof Item) {
                this.items[i] = items.items[i];
            }
        }
    }

    toArray() {
        const items = [];
        for (const i in this.items) {
            if (this.items.hasOwnProperty(i) && this.items[i] instanceof Item) {
                this.items[i].content = Object(this.items[i].content);
                this.items[i].content.itemName = i;
                items.push(this.items[i]);
                this.items[i].key = items.length;
            }
        }
        return items.sort((a, b) => {
            if (a.priority === b.priority) {
                return a.key - b.key;
            } else if (a.priority > b.priority) {
                return -1;
            }
            return 1;
        }).map(item => item.content);
    }
}