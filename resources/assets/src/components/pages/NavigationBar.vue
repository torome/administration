<script>
    import Menu from "../NavigationBarMenu";
    let createRoot, editItem;
    export default {
        components: {
            Menu
        },
        data: () => {
            return {
                status: 0,
                hidden: 0,
                create: 1,
                edit: 2
            };
        },
        methods: {
            onCreate: function (root) {
                console.log("top onCreate");
                this.status = this.hidden;
                this.$nextTick(() => {
                    this.status = this.create;
                });
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
                    });
                });
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
    };
</script>
<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="box">
                <div class="box-body">
                    <menu v-ref:menu @edit="onEdit" @create="onCreate"></menu>
                </div>
            </div>
        </div>
        <div class="col-sm-12">
            <!--<item-editor v-if="status == edit" v-ref:item-editor @update="onUpdate"></item-editor>-->
            <!--<item-creator v-if="status == create" v-ref:item-creator @store="onStore"></item-creator>-->
        </div>
    </div>
</template>