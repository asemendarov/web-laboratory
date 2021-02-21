import Vue from 'vue'
import Router from 'vue-router'
import AppMainComponent from '@/components/AppMainComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppMainComponent',
      component: AppMainComponent
    }
  ]
})
