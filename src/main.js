// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import lodash from 'lodash'
import VueLodash from 'vue-lodash'
import store from './store'

//  注册全局的组件
import '@/components/global.js'
import '@/components'

Vue.config.productionTip = false

Vue.use(Vuex)

// elementUI 全局配置默认为small
Vue.use(ElementUI)
// Vue.use(Element, { size: 'small' })
Vue.use(VueLodash, lodash)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (localStorage.name === 'admin') { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      next({
        path: '/',
        query: {redirect: to.fullPath} // 路由重定向
      })
    }
  } else {
    next()
  }
})
