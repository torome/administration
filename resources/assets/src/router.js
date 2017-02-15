/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-01-17 14:16
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import BaseDashboard from './components/Dashboard'
import BaseLayout from './components/pages/base/Layout'
import ContentArticle from './components/pages/content/Article'
import ContentArticleCreate from './components/pages/content/ArticleCreate'
import ContentArticleDraft from './components/pages/content/ArticleDraft'
import ContentArticleEdit from './components/pages/content/ArticleEdit'
import ContentArticleRecycle from './components/pages/content/ArticleRecycle'
import ContentCategory from './components/pages/content/ArticleCategory'
import ContentComment from './components/pages/content/Comment'
import ContentComponent from './components/pages/content/Component'
import ContentDashboard from './components/pages/content/Dashboard'
import ContentExtension from './components/pages/content/Extension'
import ContentLayout from './components/pages/content/Layout'
import ContentPage from './components/pages/content/Page'
import ContentPageCategory from './components/pages/content/PageCategory'
import ContentPageCreate from './components/pages/content/PageCreate'
import ContentPageEdit from './components/pages/content/PageEdit'
import ContentTemplate from './components/pages/content/Template'
import ContentTag from './components/pages/content/ArticleTag'
import Debug from './components/pages/base/Debug'
import Layout from './components/layouts/Layout'
import Login from './components/pages/Login'
import Mail from './components/pages/base/Mail'
import Seo from './components/pages/base/Seo'
import Upload from './components/pages/base/Upload'
import Setting from './components/pages/base/Setting'

import requireAuth from './middlewares/auth'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          component: BaseLayout,
          children: [
            {
              path: '/',
              component: BaseDashboard,
              beforeEnter: requireAuth
            },
            {
              path: 'setting',
              component: Setting,
              beforeEnter: requireAuth
            },
            {
              path: 'upload',
              component: Upload,
              beforeEnter: requireAuth
            },
            {
              path: 'storage',
              component: Upload,
              beforeEnter: requireAuth
            },
            {
              path: 'seo',
              component: Seo,
              beforeEnter: requireAuth
            },
            {
              path: 'email',
              component: Mail,
              beforeEnter: requireAuth
            },
            {
              path: 'debug',
              component: Debug,
              beforeEnter: requireAuth
            }
          ]
        },
        {
          path: '/content',
          component: ContentLayout,
          children: [
            {
              path: '/',
              component: ContentDashboard,
              beforeEnter: requireAuth
            },
            {
              path: 'article/all',
              component: ContentArticle,
              beforeEnter: requireAuth
            },
            {
              path: 'article/create',
              component: ContentArticleCreate,
              beforeEnter: requireAuth
            },
            {
              path: 'article/:id/edit',
              component: ContentArticleEdit,
              beforeEnter: requireAuth
            },
            {
              path: 'article/category',
              component: ContentCategory,
              beforeEnter: requireAuth
            },
            {
              path: 'article/tag',
              component: ContentTag,
              beforeEnter: requireAuth
            },
            {
              path: 'article/recycle',
              component: ContentArticleRecycle,
              beforeEnter: requireAuth
            },
            {
              path: 'article/draft',
              component: ContentArticleDraft,
              beforeEnter: requireAuth
            },
            {
              path: 'page/all',
              component: ContentPage,
              beforeEnter: requireAuth
            },
            {
              path: 'page/create',
              component: ContentPageCreate,
              beforeEnter: requireAuth
            },
            {
              path: 'page/:id/edit',
              component: ContentPageEdit,
              beforeEnter: requireAuth
            },
            {
              path: 'page/category',
              component: ContentPageCategory,
              beforeEnter: requireAuth
            },
            {
              path: 'component',
              component: ContentComponent,
              beforeEnter: requireAuth
            },
            {
              path: 'template',
              component: ContentTemplate,
              beforeEnter: requireAuth
            },
            {
              path: 'extension',
              component: ContentExtension,
              beforeEnter: requireAuth
            },
            {
              path: 'comment',
              component: ContentComment,
              beforeEnter: requireAuth
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
