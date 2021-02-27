import Vue from 'vue'
import Router from 'vue-router'
import AppHomePage from '@/components/AppHomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'AppHomePage',
      component: AppHomePage
    },
    {
      path: '*',
      redirect: { name: 'AppHomePage' }
    }
  ]
})
