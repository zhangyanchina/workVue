import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Error_page from '@/components/error/notfound'
import Home from '@/components/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path:'/login',
      component: Login
    },{
      path:'*',
      component: Error_page
    },{
      path:'/home',
      component:Home
    }
  ]
})
