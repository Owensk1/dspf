import axios from 'axios'
// axios.defaults.baseURL = process.env.API_HOST

export default {
  state: {
    networks: [] // 2 网络
  },
  getters: {
    networks: state => state.networks // 1 网络
  },
  mutations: {
    //  2  网络
    alterNetworks: (state, data) => {
      state.networks = data
      // console.log(state.networks)
      // console.log(typeof (state.networks))
    }
  },
  actions: {
    // 2  网络
    getNetworks: (context) => {
      axios.get('api/net/list').then((res) => {
        console.log(res.data)
        context.commit('alterNetworks', res.data)
      })
    }
  }
}
