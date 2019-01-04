import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Error_page from '@/components/error/notfound'
import Home from '@/components/home/Home'
import Welcome from '@/components/welcome/Welcome'
import Release from '@/components/release/Release'
import List from '@/components/list/List.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    }, {
      path: '*',
      component: Error_page
    }, {
      path: '/home',
      component: Home,
      redirect: '/home/welcome',
      children: [{
        path:'/home/welcome',
        component:Welcome
      },
        {
        path: '/home/release',
        component: Release
      }, {
        path:'/home/list',
        component:List
      }
    ]
    }
  ]
})
