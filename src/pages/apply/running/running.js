'use strict'
import { mapGetters, mapActions } from 'vuex'
let moment = require('moment')

export default {
  data () {
    return {
      multipleSelection: [],
      deleteAppsForm: {
        apps: []
      },
      dialogVisible: false,
      createMethod: '', // 部署应用方式
      moment,
      loading: false

    }
  },
  created: function () {
    this.getApplys()
  },
  computed: {
    ...mapGetters(['applys'])
  },
  methods: {
    ...mapActions([
      'getApplys',
      'deleteServerApps'
    ]),
    // 创建应用 - 选择部署方式(通过label来传递参数跳到相关路由)
    gotoMethod (createMethod) {
      this.$router.push({path: `/apply/${createMethod}`})
    },

    // 删除应用
    handleSelectionChange (val) {
      this.multipleSelection = val
      this.deleteAppsForm.apps = [] // 没选一个或者取消选择时 让app[]为空的 因为每次选择或取消选中 都会触发一次遍历
      this.multipleSelection.forEach(element => {
        console.log(element.id)
        this.deleteAppsForm.apps.push(element.id)
      })
    },
    // 删除应用
    deleteApps () {
      console.log(this.deleteAppsForm)
      this.$confirm('是否删除容器?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.loading = true
        this.deleteServerApps(this.deleteAppsForm).then((res) => {
          this.$message({
            showClose: true,
            message: '删除应用成功',
            type: 'success'
          })
          this.loading = false
        }).catch((error) => {
          console.log(error)
          this.$message({
            showClose: true,
            message: '删除应用失败',
            type: 'error'
          })
        })
      }).catch(() => {
        this.$message({
          showClose: true,
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
