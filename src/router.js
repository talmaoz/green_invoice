import store from '@/store'
import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'
import welcome from './views/welcome.vue'
import accountDetails from './views/accountDetails'

Vue.use(Router)

const REDIRECT_ROUTES = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    redirect: '/login'
  }
]

const MAIN_ROUTES = [
  {
    path: '/login',
    name: 'login',
    component: login,
    isNavItem: false,
    meta: {requiresAuth: false},
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: welcome,
    isNavItem: true,
    meta: {requiresAuth: true},
  },
  {
    path: '/accountDetails',
    name: 'accountDetails',
    component: accountDetails,
    isNavItem: true,
    meta: {requiresAuth: true},
  }
]

const ROUTES = [].concat(REDIRECT_ROUTES, MAIN_ROUTES)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: ROUTES
})

router.beforeEach((to, from, next) => {
  const currentUser = store.getters.loggedUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (to.name === 'login' && currentUser) next('/welcome')
  else if (requiresAuth && !currentUser) next('/login')
  else next()
});

export default router
