import Vue from 'vue'
import Vuex from 'vuex'
import templetStore from './templetStore' // 应用模板
import loginStore from './loginStore' // 应用模板
import masterStore from './masterStore/masterStore.js' // 主机
import podStore from './podStore/podStore.js' // 容器
import applyStore from './applyStore/applyStore.js' // 应用
import repoStore from './repoStore/repoStore.js' // 镜像
import networkStore from './networkStore/networkStore.js' // 网络
// 必须在创建store之前调用use函数
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    templetStore,
    masterStore,
    podStore,
    applyStore,
    repoStore,
    networkStore,
    loginStore
  }
})
