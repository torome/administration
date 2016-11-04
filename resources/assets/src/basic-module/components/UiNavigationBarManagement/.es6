import UiMenu from "../UiNavigationBarMenu";
import UiItemEditor from "../UiNavigationBarItemEdit";
import UiItemCreator from "../UiNavigationBarItemCreate";
let createRoot, editItem;
export default {
    components: {
        UiMenu,
        UiItemEditor,
        UiItemCreator
    },
    ready: function () {
        this.$http.get("navbar.json").then((response) => {
            this.$refs.menu.menu = response.body;
        })
    },
    data: () => {
        return {
            status: 0,
            hidden: 0,
            create: 1,
            edit: 2
        }
    },
    methods: {
        onCreate: function (root) {
            console.log("top onCreate");
            this.status = this.hidden;
            this.$nextTick(() => {
                this.status = this.create;
            })
            createRoot = root;
        },
        onEdit: function (item) {
            console.log("top onEdit");
            this.status = this.hidden;
            this.$nextTick(() => {
                this.status = this.edit;
                this.$nextTick(() => {
                    let itemEditor = this.$refs.itemEditor;
                    itemEditor.name = item.name;
                    itemEditor.alias = item.alias;
                })
            })
            editItem = item;
        },
        onUpdate: function (newItem) {
            console.log("top onUpdate");
            editItem.name = newItem.name;
            editItem.alias = newItem.alias;
        },
        onStore: function (newItem) {
            console.log("top onStore");
            createRoot.menu.push(newItem);
        }
    }
}
