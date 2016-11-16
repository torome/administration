import App from "./components/App.vue";
import Cdn from "./components/Cdn.vue";
import Database from "./components/Database.vue";
import DebugTools from "./components/DebugTools.vue";
import Email from "./components/Email.vue";
import EmailTesting from "./components/EmailTesting.vue";
import Layout from "./components/Layout.vue";
import Login from "./components/Login.vue";
import Module from "./components/Module.vue";
import NavigationBar from "./components/NavigationBar.vue";
import Route from "./components/Route.vue";
import Seo from "./components/Seo.vue";
import Settings from "./components/Settings.vue";
import SiteMap from "./components/SiteMap.vue";
import Storage from "./components/Storage.vue";
import Upload from "./components/Upload.vue";
import UrlRewrite from "./components/UrlRewrite.vue";
import Watermark from "./components/Watermark.vue";
export default {
    "": {
        component: App,
        subRoutes: {
            "": {
                component: Layout,
                subRoutes: {
                    "/": {
                        component: Settings
                    },
                    "upload": {
                        component: Upload
                    },
                    "storage": {
                        component: Storage
                    },
                    "watermark": {
                        component: Watermark
                    },
                    "cdn": {
                        component: Cdn
                    },
                    "module": {
                        component: Module
                    },
                    "navbar": {
                        component: NavigationBar
                    },
                    "seo": {
                        component: Seo
                    },
                    "sitemap": {
                        component: SiteMap
                    },
                    "email": {
                        component: Email
                    },
                    "email/testing": {
                        component: EmailTesting
                    },
                    "rewrite": {
                        component: UrlRewrite
                    },
                    "route": {
                        component: Route
                    },
                    "debug": {
                        component: DebugTools
                    },
                    "database": {
                        component: Database
                    }
                }
            }
        }
    },
    "login": {
        component: Login
    }
};