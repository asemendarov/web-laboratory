import Vue from 'vue'
import Router from 'vue-router'
import FormRegistration from '@/components/form/FormRegistration'
import FormAuthorization from '@/components/form/FormAuthorization'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/registration',
      name: 'FormRegistration',
      component: FormRegistration,
      props: {
        formAction: '/',
        authHref: '/authorization',
        valueName: '',
        valueEmail: '',
        valueTel: '',
        valueLang: '',
        checkedAgreement: false
      }
    },
    {
      path: '/authorization',
      name: 'FormAuthorization',
      component: FormAuthorization
    },
    {
      path: '*',
      redirect: '/registration'
    }
  ]
})
