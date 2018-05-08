import axios from 'axios'
// import _ from 'lodash'
// axios.defaults.baseURL = process.env.API_HOST

export default {
  state: {
    applys: [] // 1 应用
  },
  getters: {
    applys: state => state.applys // 1 应用
  },
  mutations: {
    // 1 应用
    alterApplys: (state, data) => {
      state.applys = data
    }
  },
  actions: {
    // 2 获取应用
    getApplys: (context) => {
      axios.get('/api/apps/list').then((res) => {
        console.log((res.data))
        context.commit('alterApplys', res.data)
      })
    },
  // 删除应用
    deleteServerApps: (context, form) => {
      console.log(form)
      return new Promise((resolve, reject) => {
        axios.post('/api/apps/delete', form)
        .then(function (result) {
          // 删除成功之后
          context.dispatch('getApplys')
          resolve(result)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    // 通过镜像创建应用
    createServerAppImage: (context, form) => {
      console.log(form)
      return new Promise((resolve, reject) => {
        axios.post('/api/app/create', form)
        .then(function (result) {
          // 创建成功之后
          context.dispatch('getApplys')
          resolve(result)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    // 通过模板部署应用
    createServerAppTemp: (context, form) => {
      console.log(form)
      return new Promise((resolve, reject) => {
        axios.post('/api/template/start', form)
        .then(function (result) {
          // 删除成功之后
          context.dispatch('getApplys')
          resolve(result)
        }).catch((error) => {
          reject(error)
        })
      })
    }
  }
}
