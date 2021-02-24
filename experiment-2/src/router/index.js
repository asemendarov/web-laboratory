import Vue from 'vue'
import Router from 'vue-router'

import AppMainComponent from '@/components/AppMainComponent'
import AppPosts from '@/components/$mains/components/AppPosts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppMainComponent,

      children: [
        {
          path: '/posts',
          name: 'posts',
          component: AppPosts
        },
        {
          path: '/posts/:id',
          name: 'post',
          component: AppPosts
        }
      ]
    },
    {
      path: '*',
      redirect: { name: 'home' }
    }
  ]
})
