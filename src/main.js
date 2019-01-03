import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/css/globe.css'
import ElementUI from 'element-ui';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'

// 注册vuex中间件
Vue.use(Vuex)
// 注册elementUi中间件
Vue.use(ElementUI);
Vue.config.productionTip = false

// 路由守卫控制登录权限
router.beforeEach((to, from, next) => {
  if (to.path == "/login") return next()
  const username = sessionStorage.getItem('username')
  const password = sessionStorage.getItem('password')
  if (!username && !password) return next('/login')
  next()
})

const store = new Vuex.Store({
  state: {
    username: '',
    power: ''
  }
});
// 将axios挂在到vue原型
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
