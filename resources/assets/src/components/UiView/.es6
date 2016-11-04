import UiSidebar from '../UiSidebar'
import UiSidebarMenu from '../UiSidebarMenu'
import UiContent from '../UiContent'

export default {
  components: {
    UiSidebar, UiSidebarMenu, UiContent
  },
  props: {
    menu: {
      type: Array,
      default: []
    }
  }
}
