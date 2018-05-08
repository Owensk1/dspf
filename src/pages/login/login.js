import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'
// import { error } from 'util'

export default {
  data () {
    return {
      loading: false,
      ruleForm2: {
        name: '',
        pwd: ''
      },
      rules2: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { pattern: /^[a-zA-Z]\w{1,15}$/,
            message: '以字母开头,只能包含字符、数字和下划线',
            trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: /^[a-zA-Z]\w{1,15}$/,
            message: '以字母开头,只能包含字符、数字和下划线',
            trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  methods: {
    ...mapActions(['loginAdmin']),
    submitForm (formName) {
      console.log(formName)
      this.$refs.ruleForm2.validate((valid) => {
        if (valid) {
          this.loading = true
          this.loginAdmin(formName).then((res) => {
            console.log(res.data)
            if (res.data) {  // 如果返回true
              console.log(1)
              this.$message({
                showClose: true,
                type: 'success',
                message: `登录成功`
              })
              localStorage.setItem('name', 'admin')
              this.$router.push({path: '/home'})
              this.loading = false
              // let redirect = decodeURIComponent(this.$route.query.home || '/')
              // console.log(this.$route)
              // console.log(redirect)
            } else {
              this.$message({
                showClose: true,
                type: 'error',
                message: `登录失败,请重新登录！`
              })
            }
          }).catch((error) => {
            console.log(error)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs.ruleForm2.resetFields()
    }
  },
  mounted: window.onresize = function () {
    $('.login-page').height($(window).height())
  }
}
