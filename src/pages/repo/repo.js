import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'repo',
  data () {
    return {
      msg: '镜像仓库'
    }
  },
  created: function () {
    this.getRepos()
  },
  computed: {
    ...mapGetters(['repos'])
  },
  methods: {
    ...mapActions(['getRepos', 'deleteServerRepo']),
    deleteRepo (imageName) {
      var obj = { }
      obj.imagename = imageName
      console.log(obj)
      this.$confirm('是否删除容器?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then((res) => {
        this.deleteServerRepo(obj).then((res) => {
          this.$message({
            showClose: true,
            message: '删除成功',
            type: 'success'
          })
        }).catch((error) => {
          console.log(error)
          this.$message({
            showClose: true,
            message: '删除失败',
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
