import Vue from 'vue'
import Router from 'vue-router'

import AppMainComponent from '@/components/AppMainComponent'
import AppPosts from '@/components/$mains/components/AppPosts'
import AppUsers from '@/components/$mains/components/AppUsers'

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
        },
        {
          path: '/users',
          name: 'users',
          component: AppUsers
        },
        {
          path: '/users/:id',
          name: 'user',
          component: AppUsers
        }
      ]
    },
    {
      path: '*',
      redirect: { name: 'home' }
    }
  ]
})
