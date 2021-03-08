import Vue from "vue";
import VueRouter from "vue-router";

import AppMainComponent from '@/components/AppMainComponent';
import AppPostsPage from '@/components/$main/components/views/AppPostsPage';
import AppUsersPage from '@/components/$main/components/views/AppUsersPage';
import AppAboutPage from '@/components/$main/components/views/AppAboutPage';
import AppSearchPage from '@/components/$main/components/views/AppSearchPage';

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
      },
      {
        path: "/about",
        name: "about",
        component: AppAboutPage
      },
      {
        path: "/search",
        name: "search",
        component: AppSearchPage,
        props: (route) => ({ query: route.query.q })
      }
    ]
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
