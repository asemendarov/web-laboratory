import Vue from 'vue'
import Router from 'vue-router'
import TrafficLight from '@/components/TrafficLight'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:name',
      name: 'TrafficLight',
      component: TrafficLight
    },
    {
      path: '*',
      redirect: { name: 'TrafficLight' }
    }
  ]
})
