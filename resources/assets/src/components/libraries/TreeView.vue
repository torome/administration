<script>
  export default {
    name: "tree-view",
    props: {
      tree: {
        Type: Object,
        default: () => {
          return {}
        }
      }
    }
  }
</script>
<template>
    <div v-for="subtree in tree" :class="subtree.class">
        {{{ subtree.html }}}
        <template v-if="subtree.tree">
            <tree-view :tree="subtree.tree"></tree-view>
        </template>
    </div>
</template>