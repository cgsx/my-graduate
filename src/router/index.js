import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router);
import Index from '@/components/index/index'
import  Header from '@/components/header/header'
import  product from '@/components/product/product'
import  NotFound from '@/components/header/404'
import  solution from '@/components/solution/solution'
import  example from '@/components/example/example'
import  datareport from '@/components/datareport/datareport'
import  sendmsg from '@/components/sendmsg/sendmsg'
import  footer from '@/components/header/footer'
import  aboutus from '@/components/aboutus/aboutus'

Vue.component("v-header",Header);
Vue.component("v-footer",footer);
export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/solution',
      name: 'solution',
      component: solution
    },
    {
      path: '/example',
      name: 'example',
      component: example
    },
    {
      path: '/datareport',
      name: 'datareport',
      component: datareport
    },
    {
      path: '/sendmsg',
      name: 'sendmsg',
      component: sendmsg
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})
