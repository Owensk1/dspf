import axios from 'axios'
// axios.defaults.baseURL = process.env.API_HOST

// axios.defaults.baseURL = 'http://192.168.123.251'
// axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'

export default {
  state: {
    templates: [] // 2 模板
  },
  getters: {
    templates: state => state.templates // 2 模板
  },
  mutations: {
    //  2 模板
    alterTemplates: (state, data) => {
      state.templates = data
    }
  },
  actions: {

    // 2 获取应用模板
    getTemplates: (context) => {
      axios.get('/master/dsp/apptemplate/getall').then((res) => {
        context.commit('alterTemplates', res.data)
      })
    },
    // 3 删除模板
    deleteTemplate: (context, data) => {
      var obj = {name: data}
      return new Promise((resolve, reject) => {
        axios.post('/master/dsp/apptemplate/delete', obj)
          .then(function (result) {
            context.dispatch('getTemplates')
            resolve(result)
          }).catch((error) => {
            reject(error)
            console.log(error)
          })
      })
    },
    // 4 添加模板
    addTemplate: (context, form) => {
      console.log(form)
      return new Promise((resolve, reject) => {
        axios.post('/master/dsp/apptemplate/add', form).then((result) => {
          context.dispatch('getTemplates')
          resolve(result)
        }).catch((error) => {
          reject(error)
          console.log(error)
        })
      })
    },
    // 5 获取模板详情信息
    getDetailByName: (context, data) => {
      console.log(data)
      return new Promise((resolve, reject) => {
        axios.post('/master/dsp/apptemplate/get', data).then((res) => {
          resolve(res)
        }).catch((error) => {
          reject(error)
          console.log(error)
        })
      })
    },
    //  6 删除模板信息
    editTemplateDetail: (context, data) => {
      console.log(data)
      return new Promise((resolve, reject) => {
        axios.post('/master/dsp/apptemplate/set', data).then((res) => {
          resolve(res)
        }).catch((error) => {
          reject(error)
          console.log(error)
        })
      })
    }
  }
}
