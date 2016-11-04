export default {
  name: "ui-tree-view",

  props: {
    tree: {
      Type: Object,
      default: () => {
        return {}
      }
    }
  }
}
