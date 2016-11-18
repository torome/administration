import Cdn from "./components/pages/AttachmentCdn";
import Database from "./components/pages/Database";
import Debug from "./components/pages/Debug";
import Email from "./components/pages/Mail";
import EmailTesting from "./components/pages/MailTesting";
import Layout from "./components/layouts/Layout";
import Login from "./components/pages/Login";
import Module from "./components/pages/Module";
import NavigationBar from "./components/pages/NavigationBar";
import Route from "./components/pages/Route";
import Seo from "./components/pages/Seo";
import Settings from "./components/pages/Settings";
import SiteMap from "./components/pages/Sitemap";
import Storage from "./components/pages/AttachmentStorage";
import Upload from "./components/pages/Attachment";
import UrlRewrite from "./components/pages/UrlRewrite";
import Watermark from "./components/pages/AttachmentWatermark";
export default {
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
                component: Debug
            },
            "database": {
                component: Database
            }
        }
    },
    "login": {
        component: Login
    }
};