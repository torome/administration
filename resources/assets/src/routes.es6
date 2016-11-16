import App from "./components/App";
import Cdn from "./components/Cdn";
import Database from "./components/Database";
import DebugTools from "./components/DebugTools";
import Email from "./components/Email";
import EmailTesting from "./components/EmailTesting";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Module from "./components/Module";
import NavigationBar from "./components/NavigationBar";
import Route from "./components/Route";
import Seo from "./components/Seo";
import Settings from "./components/Settings";
import SiteMap from "./components/SiteMap";
import Storage from "./components/Storage";
import Upload from "./components/Upload";
import UrlRewrite from "./components/UrlRewrite";
import Watermark from "./components/Watermark";
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