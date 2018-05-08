import axios from 'axios'
// import _ from 'lodash'
// axios.defaults.baseURL = process.env.API_HOST

export default {
  state: {
    repos: [] // 2 镜像
  },
  getters: {
    repos: state => state.repos // 1 主机
  },
  mutations: {
    //  2 主机
    alterRepos: (state, data) => {
      state.repos = data
      console.log(state.repos)
    }
  },
  actions: {
    // 2 镜像
    getRepos: (context) => {
      axios.get('/api/images/list').then((res) => {
        console.log(res.data)
        context.commit('alterRepos', res.data)
      })
    },
    // 3 删除镜像
    deleteServerRepo: (context, form) => {
      console.log(form)
      return new Promise((resolve, reject) => {
        axios.post('/api/images/delete', form).then(function (result) {
          // 保存成功之后
          context.dispatch('getRepos')
          resolve(result)
        }).catch((error) => {
          reject(error)
        })
      })
    }

  }
}
