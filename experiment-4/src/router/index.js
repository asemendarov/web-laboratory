import Vue from 'vue'
import Router from 'vue-router'

import TrafficLight from '@/components/TrafficLight.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/red',
      name: 'Red',
      component: TrafficLight
    },
    {
      path: '/yellow',
      name: 'Yellow',
      component: TrafficLight
    },
    {
      path: '/green',
      name: 'Green',
      component: TrafficLight
    },
    {
      path: '*',
      redirect: '/red',
      name: 'Default'
    }
  ]
})
