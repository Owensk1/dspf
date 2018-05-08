import axios from 'axios'
// import axios from './service'

// axios.defaults.baseURL = process.env.API_HOST

export default {
  state: {
    userName: []
  },
  getters: {
    userName: state => state.userName // 1 主机
  },
  mutations: {
    alterUserName: (state, data) => {
      state.userName = data
      console.log(state.userName)
    }
  },
  actions: {
    loginAdmin: (context, form) => {
      console.log(form)
      return new Promise((resolve, reject) => {
        axios.post('/api/user/login', form).then(function (result) {
          // 保存成功之后
          resolve(result)
          context.commit('alterUserName', form)
        }).catch((error) => {
          reject(error)
        })
      })
    }

  }
}
