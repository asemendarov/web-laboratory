import Vue from 'vue'
import Router from 'vue-router'

import AppMainComponent from '@/components/AppMainComponent'
import AppPostsPage from '@/components/$mains/components/AppPostsPage'
import AppUsersPage from '@/components/$mains/components/AppUsersPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppMainComponent,
      redirect: { name: 'posts' },

      children: [
        {
          path: '/posts',
          name: 'posts',
          component: AppPostsPage
        },
        {
          path: '/posts/:id',
          name: 'post',
          component: AppPostsPage
        },
        {
          path: '/users',
          name: 'users',
          component: AppUsersPage
        },
        {
          path: '/users/:id',
          name: 'user',
          component: AppUsersPage
        }
      ]
    },
    {
      path: '*',
      redirect: { name: 'home' }
    }
  ]
})
