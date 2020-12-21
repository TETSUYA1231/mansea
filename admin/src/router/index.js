import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
// import CategoryEdit from '../views/CategoryEdit'
// import CategoryList from '../views/CategoryList'

import SubcateEdit from '../views/SubcateEdit'
import SubcateList from '../views/SubcateList'

import CardEdit from '../views/CardEdit'
import CardList from '../views/CardList'

import ArticleCreate from '../views/ArticleCreate'
import ArticleEdit from '../views/ArticleEdit'
import ArticleList from '../views/ArticleList'

import AdEdit from '../views/AdEdit'
import AdList from '../views/AdList'

import AdminUserEdit from '../views/AdminUserEdit'
import AdminUserList from '../views/AdminUserList'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/login', name: 'login', component: Login, meta: { isPublic: true } },
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        // { path: '/categories/create', component: CategoryEdit },
        // { path: '/categories/edit/:id', component: CategoryEdit, props: true },
        // { path: '/categories/list', component: CategoryList },

        { path: '/subcates/create', component: SubcateEdit },
        { path: '/subcates/edit/:id', component: SubcateEdit, props: true },
        { path: '/subcates/list', component: SubcateList },

        { path: '/cards/create', component: CardEdit },
        { path: '/cards/edit/:id', component: CardEdit, props: true },
        { path: '/cards/list', component: CardList },

        { path: '/articles/create', component: ArticleCreate },
        { path: '/articles/edit/:id', component: ArticleEdit, props: true },
        { path: '/articles/list', component: ArticleList },

        { path: '/ads/create', component: AdEdit },
        { path: '/ads/edit/:id', component: AdEdit, props: true },
        { path: '/ads/list', component: AdList },

        { path: '/admin_users/create', component: AdminUserEdit },
        { path: '/admin_users/edit/:id', component: AdminUserEdit, props: true },
        { path: '/admin_users/list', component: AdminUserList },
      ],
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})
export default router
