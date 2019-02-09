import Vue from 'vue'
import Router from 'vue-router'


import Teste from '@/components/AppCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Teste',
      name: '',
      component: Teste
    }
  ]
})
