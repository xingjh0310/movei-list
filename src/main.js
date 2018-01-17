// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/'
import router from './router'
import { sync } from 'vuex-router-sync' // 这个插件的作用就是让你在 vuex 中可以访问路由状态对象

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'

// 现在你就可以在 vuex 的容器状态中通过 store.state.route 来获取路由状态信息
// 其实这个插件就是帮你增加了一个容器模块：route
// 我们就可以直接访问 route 模块来获取路由状态了
// 让路由状态信息也存储到 store 状态容器中
sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
