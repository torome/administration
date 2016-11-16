import App from "./components/App.vue";
import CdnSettings from "./components/CdnSettings.vue";
import DatabaseManagement from "./components/DatabaseManagement.vue";
import DebugTools from "./components/DebugTools.vue";
import EmailSettings from "./components/EmailSettings.vue";
import Settings from "./components/Settings.vue";
import Login from "./components/Login.vue";
import ModuleManagement from "./components/ModuleManagement.vue";
import NavigationBarManagement from "./components/NavigationBarManagement.vue";
import RouteSettings from "./components/RouteSettings.vue";
import SeoSettings from "./components/SeoSettings.vue";
import SiteMapSettings from "./components/SiteMapSettings.vue";
import StorageSettings from "./components/StorageSettings.vue";
import UploadSettings from "./components/UploadSettings.vue";
import UrlRewriteSettings from "./components/UrlRewriteSetttings.vue";
import View from "./components/View.vue";
import WatermarkSettings from "./components/WatermarkSettings.vue";
export default {
    "": {
        component: App,
        subRoutes: {
            "": {
                component: View,
                subRoutes: {
                    "/": {
                        component: Settings
                    },
                    "upload": {
                        component: UploadSettings
                    },
                    "storage": {
                        component: StorageSettings
                    },
                    "watermark": {
                        component: WatermarkSettings
                    },
                    "cdn": {
                        component: CdnSettings
                    },
                    "module": {
                        component: ModuleManagement
                    },
                    "navbar": {
                        component: NavigationBarManagement
                    },
                    "seo": {
                        component: SeoSettings
                    },
                    "sitemap": {
                        component: SiteMapSettings
                    },
                    "email": {
                        component: EmailSettings
                    },
                    "rewrite": {
                        component: UrlRewriteSettings
                    },
                    "route": {
                        component: RouteSettings
                    },
                    "debug": {
                        component: DebugTools
                    },
                    "database": {
                        component: DatabaseManagement
                    }
                }
            }
        }
    },
    "login": {
        component: Login
    }
};