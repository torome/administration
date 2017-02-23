import Editor from '../components/libraries/Editor'
import InputTag from '../components/libraries/InputTag'
import Modal from '../components/libraries/Modal'
import NavbarMenu from '../components/libraries/NavbarMenu'
import Paginator from '../components/libraries/Paginator'
import SidebarMenu from '../components/libraries/SidebarMenu'

import LayoutContent from '../components/layouts/LayoutContent'
import LayoutFooter from '../components/layouts/LayoutFooter'
import LayoutHeader from '../components/layouts/LayoutHeader'
import LayoutSidebar from '../components/layouts/LayoutSidebar'

export function componentMixin (Notadd) {
  Notadd.components = {
    editor: Editor,
    modal: Modal,
    navbar: NavbarMenu,
    paginator: Paginator,
    sidebar: SidebarMenu,
    tag: InputTag
  }
}

export function layoutMixin (Notadd) {
  Notadd.layouts = {
    content: LayoutContent,
    footer: LayoutFooter,
    header: LayoutHeader,
    sidebar: LayoutSidebar
  }
}
