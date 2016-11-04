import {UiApp} from 'components'
import {
  UiView,
  UiGlobalSettings,
  UiUploadSettings,
  UiStorageSettings,
  UiWatermarkSettings,
  UiCdnSettings,
  UiModuleManagement,
  UiNavigationBarManagement,
  UiSeoSettings,
  UiSiteMapSettings,
  UiEmailSettings,
  UiUrlRewriteSettings,
  // UiRouteSettings,
  UiDebugTools,
  UiDatabaseManagement,
  UiLogin
} from './components'

export default (shared) => {
  shared.registerRouterMap({
    '': {
      component: UiApp,
      subRoutes: {
        '': {
          component: UiView,
          subRoutes: {
            '': {
              component: UiGlobalSettings
            },
            'upload': {
              component: UiUploadSettings
            },
            'storage': {
              component: UiStorageSettings
            },
            'watermark': {
              component: UiWatermarkSettings
            },
            'cdn': {
              component: UiCdnSettings
            },
            'module': {
              component: UiModuleManagement
            },
            'navbar': {
              component: UiNavigationBarManagement
            },
            'seo': {
              component: UiSeoSettings
            },
            'sitemap': {
              component: UiSiteMapSettings
            },
            'email': {
              component: UiEmailSettings
            },
            'rewrite': {
              component: UiUrlRewriteSettings
            },
            // 'route': {
            //   component: UiRouteSettings
            // },
            'debug': {
              component: UiDebugTools
            },
            'database': {
              component: UiDatabaseManagement
            }
          }
        }
      }
    },
    'login': {
      component: UiLogin
    }
  })
}
