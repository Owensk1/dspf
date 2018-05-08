// import $ from 'jquery'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data: function () {
    return {
      title: 'home',
      activeIndex: '/'
    }
  },
  created: function () { // 设置默认路由
    this.defaultIdex()
  },
  beforeUpdate: function () { // 设置默认路由
    return {
      activeIndex: this.$route.matched[1].path
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  methods: {
    // 设置默认路由 设置进入home路由后默认显示apply/running 路由页面
    defaultIdex () {
      // let path = this.$route.path
      this.$router.push({path: '/apply/running'})
      // console.log(path)
    },
    // 注销 去除localstorage的name属性
    LoginOut () {
      localStorage.removeItem('name') // 清除localStorage
      this.$router.push({path: '/'})
      // location.reload()
    }
  }
}
