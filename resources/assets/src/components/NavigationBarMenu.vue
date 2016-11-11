<script>
    export default {
        name: "ui-menu",
        props: {
            menu: {
                Type: Array,
                default: () => {
                    return [];
                }
            }
        },
        methods: {
            onCreate: function (item, index) {
                console.log("create");
                if (!item.menu) {
                    this.$set("menu[" + index + "].menu", []);
                }
                this.$emit("create", item);
            },
            onEdit: function (item) {
                console.log("edit");
                this.$emit("edit", item);
            },
            onDestroy: function (menu, index) {
                console.log("destroy");
                menu.splice(index, 1);
            },
            onDrag: function (e) {
                let el = e.target;
                el.classList.add("drag");
            },
            onDragEnd: function (e) {
                let el = e.target;
                el.classList.remove("drag");
            },
            onDragEnter: function (e) {
                let el = e.target;
                if (el.classList.contains("item")) {
                    console.log("ondragenter");
                }
            },
            onDragLeave: function (e) {
                let el = e.target;
                if (el.classList.contains("item")) {
                    console.log("ondragleave");
                }
            }
        }
    };
</script>
<style>
    .tree-view .tree-view {
        margin-left: 2em;
    }
    .tree-view.drag {
        display: none;
    }
    .item {
        padding: 5px;
    }
    .item > .item-content {
        padding: 5px;
        background-color: #eeeeee;
        border: 1px solid #dddddd;
    }
    .item.slot {
        display: none;
    }
    .item.slot > .item-content {
        color: #dddddd;
        background-color: transparent;
        border-style: dashed;
    }
</style>
<template>
    <div class="tree-view" v-for="item in menu" track-by="$index" draggable="true" @drag.self="onDrag" @dragend.self="onDragEnd"
         @dragenter="onDragEnter" @dragleave="onDragLeave">
        <div class="item clearfix" @click.stop="onEdit(item)">
            <div class="item-content">
                {{ item.name }}
                <div class="pull-right">
                    <a class="fa fa-trash-o" @click.stop="onDestroy(menu, $index)">刪除</a>
                    <a class="fa fa-plus" @click.stop="onCreate(item, $index)">添加</a>
                </div>
            </div>
        </div>
        <div class="item slot">
            <div class="item-content">
                <i>放置</i>
            </div>
        </div>
        <ui-menu v-if="item.menu" :menu="item.menu" @create="onCreate" @edit="onEdit"></ui-menu>
    </div>
</template>