import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)
import Index from '@/components/index'
import  Header from '@/components/header'
Vue.component("v-header",Header);
export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
  ]
})
