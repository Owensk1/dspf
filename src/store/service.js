import axios from 'axios'

let baseUrl = ''

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://192.168.123.251:51'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://192.168.123.251:51'
}
axios.defaults.baseURL = baseUrl
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'

// 添加拦截器，解决ie下url带中文参数乱码的问题
axios.interceptors.request.use((config) => {
  if (config.method === 'get') {
    config.url = encodeURI(config.url)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response) {
    console.log('请求失败1')
    // switch (error.response.status) {
    //   case '400':
    //     error.response.data.message = '400错误'
    //     //  or
    //     // window.app.$router.push({name: 'Login'});
    //     break
    //   default:
    //     break
    // }
  } else {
    console.log('请求失败23')
    // error.response.data.message = '连接服务器失败！'
  }
  return Promise.reject(error)
})

export default axios
