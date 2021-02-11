import Vue from 'vue'
import Router from 'vue-router'
import ViewModal from '@/components/ViewModal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ViewModal',
      component: ViewModal
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
