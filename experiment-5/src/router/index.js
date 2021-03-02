import Vue from "vue";
import VueRouter from "vue-router";

import AppMainComponent from '@/components/AppMainComponent';
import AppPostsPage from '@/components/$main/components/AppPostsPage';
import AppUsersPage from '@/components/$main/components/AppUsersPage';

Vue.use(VueRouter);

const routes = [
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
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  {
    path: '*',
    redirect: { name: 'home' }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
