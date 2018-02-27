import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router);
import index from '@/components/index/index'
import  Header from '@/components/header/header'
import  product from '@/components/product/product'
import  NotFound from '@/components/header/404'
import  solution from '@/components/solution/solution'
import  example from '@/components/example/example'
import  datareport from '@/components/datareport/datareport'
import  sendmsg from '@/components/sendmsg/sendmsg'
import  footer from '@/components/header/footer'
import  aboutus from '@/components/aboutus/aboutus'
import  login from '@/components/login/login'
import commit from '@/components/aboutus/commit'
import contachus from '@/components/aboutus/contachus'
import dynamics from '@/components/aboutus/dynamics'
import joinus from '@/components/aboutus/joinus'
import team from '@/components/aboutus/team'
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
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },   {
      path: '/commit',
      name: 'commit',
      component: commit
    },  {
      path: '/contachus',
      name: 'contachus',
      component: contachus
    },  {
      path: '/dynamics',
      name: 'dynamics',
      component: dynamics
    },  {
      path: '/joinus',
      name: 'joinus',
      component: joinus
    },  {
      path: '/team',
      name: 'team',
      component: team
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
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})
