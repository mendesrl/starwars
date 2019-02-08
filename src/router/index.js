import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Outro from '@/components/Outro'
import Teste from '@/components/Teste'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/Outro',
      name: '',
      component: Outro
    },

    {
      path: '/Teste',
      name: '',
      component: Teste
    }
  ]
})
