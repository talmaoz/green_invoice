import store from './store'
import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login/loginPage'
import main from './views/mainPage/mainPage'
import welcome from './views/mainPage/welcome';
import accountDetails from './views/mainPage/accountDetails'

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
    meta: {requiresAuth: false},
  },
  {
    path: '/main/:id',
    name: 'main',
    component: main,
    meta: {requiresAuth: true},

    children: [
      {
        path: '/main/accountDetails',
        name: 'accountDetails',
        component: accountDetails,
        displayName: 'החשבון שלי',
        meta: {requiresAuth: true}
      },
      {
        path: '/main/welcome',
        name: 'welcome',
        component: welcome,
        displayName: 'לובי',
        meta: {requiresAuth: true}
      },
    ]

  },
]

const ROUTES = [].concat(REDIRECT_ROUTES, MAIN_ROUTES)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: ROUTES
})

router.beforeEach((to, from, next) => {
  const currentUser = store.getters.getLoggedUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (to.name === 'login' && currentUser) next('/main/welcome')
  else if (requiresAuth && !currentUser) next('/login')
  else next()
});

export default router
