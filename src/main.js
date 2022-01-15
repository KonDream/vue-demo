import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'  //引入路由
import Routes from './router/index' //引入路由配置

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode:"history"  //去掉url中的#

})

new Vue({
  render: h => h(App),
  router:router //注册路由
}).$mount('#app')
