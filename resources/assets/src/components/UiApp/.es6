import UiHeader from '../UiHeader'
import UiSidebar from '../UiSidebar'
import UiFooter from '../UiFooter'
import UiLogo from '../UiLogo'
import UiNavbarMenu from '../UiNavbarMenu'
import UiLayout from '../UiLayout'

import { Shared } from 'src/shared'

export default {
  components: {UiLayout, UiHeader, UiSidebar, UiFooter, UiLogo, UiNavbarMenu},
  data: () => {
    return {
      "menu": [
        {
          "text": "基础",
          "icon": "fa fa-circle-o",
          "uri": "/"
        },
        {
          "text": "文章",
          "icon": "fa fa-circle-o",
          "uri": "/article"
        }
      ]
    }
  },
  route: {
    activate: function (transition) {
      if (!Shared.accessToken) {
        this.$router.go('/login')
        transition.next()
      } else {
        transition.next()
      }
    }
  }
}
