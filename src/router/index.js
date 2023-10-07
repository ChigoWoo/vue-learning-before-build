import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/components/LoginPage'
import IndexView from '../views/IndexView.vue'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
import IntroView from '@/views/IntroView'
import IntroductionInfo from '../components/IntroductionInfo.vue'
import RouterNest from '@/components/RouterNest'
import RouterNest2 from '@/components/RouterNest2'
import InfoCenter from '@/components/InfoCenter'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/index',
    name: 'index',
    component: IndexView,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView
      },
      {
        path: 'about',
        name: 'about',
        // component: AboutView
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: 'intro-view',
        name: 'IntroView',
        component: IntroView,
        children: [
          {
            path: '/',
            name: 'introduction',
            component: IntroductionInfo,
            children: [
              {
                path: 'router-nest', //这里不要加 /
                name: 'router-nest',
                component: RouterNest
              }
            ]
          },
          {
            path: 'router-nest2', //这里不要加 /
            name: 'router-nest2',
            component: RouterNest2
          }
        ]
      },
      {
        path: 'info-center',
        name: 'InfoCenter',
        component: InfoCenter
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
