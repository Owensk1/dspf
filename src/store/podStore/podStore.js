import axios from 'axios'
// import _ from 'lodash'
// axios.defaults.baseURL = process.env.API_HOST

export default {
  state: {
    pods: [] // 1 容器
  },
  getters: {
    pods: state => state.pods // 1 容器
  },
  mutations: {
    // 1 容器
    alterPods: (state, data) => {
      state.pods = data
      // console.log(state.pods)
    }
  },
  actions: {
    // 2 容器
    getPods: (context) => {
      axios.get('/api/container/list').then((res) => {
        res.data.forEach(element => {
          console.log(element.status)
        })
        context.commit('alterPods', res.data)
      })
    },
    // 创建容器
    createPodServer: (context, form) => {
      console.log(form)
      return new Promise((resolve, reject) => {
        axios.post('/api/container/create', form).then((result) => {
          // 保存成功之后
          context.dispatch('getPods')
          resolve(result)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    deletePodsServer: (context, form) => {
      console.log(form)
      return new Promise((resolve, reject) => {
        axios.post('/api/container/delete', form).then((result) => {
          // 保存成功之后
          context.dispatch('getPods')
          resolve(result)
        }).catch((error) => {
          reject(error)
        })
      })
    }
  }
}
