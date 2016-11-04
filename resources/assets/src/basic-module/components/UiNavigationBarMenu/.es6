export default {
  name: 'ui-menu',
  props: {
    menu: {
      Type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    onCreate: function (item, index) {
      console.log('create')

      if (!item.menu) {
        this.$set('menu[' + index + '].menu', [])
      }

      this.$emit('create', item)
    },
    onEdit: function (item) {
      console.log('edit')

      this.$emit('edit', item)
    },
    onDestroy: function (menu, index) {
      console.log('destroy')

      menu.splice(index, 1)
    },
    onDrag: function (e) {
      let el = e.target

      el.classList.add('drag')
    },
    onDragEnd: function (e) {
      let el = e.target

      el.classList.remove('drag')
    },
    onDragEnter: function (e) {
      let el = e.target
      if (el.classList.contains('item')) {
        console.log('ondragenter')
      }
    },
    onDragLeave: function (e) {
      let el = e.target
      if (el.classList.contains('item')) {
        console.log('ondragleave')
      }
    }
  }
}
