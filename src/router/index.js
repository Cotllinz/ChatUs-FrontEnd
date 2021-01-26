import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homePage.vue'
import Login from '../views/auth/Login.vue'
import signUp from '../views/auth/signUp.vue'
import forgot from '../views/auth/forgot.vue'
import forgotnew from '../views/auth/forgotPassword.vue'
import confirmEmail from '../views/auth/confirmEmail.vue'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/home',
    name: 'homePage',
    component: homePage,
    meta: { requiresAuth: true }
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: signUp,
    meta: { requiresVisitor: true }
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: forgot,
    meta: { requiresVisitor: true }
  },
  {
    path: '/resetpassword/:tokenID',
    name: 'resetpassword',
    component: forgotnew,
    meta: { requiresVisitor: true }
  },
  {
    path: '/confirm_email/:TokenConfirm',
    name: 'confirmEmail',
    component: confirmEmail,
    meta: { requiresVisitor: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/home'
      })
    } else {
      next()
    }
  }
})
export default router
