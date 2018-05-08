import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'pod',
  data () {
    return {
      loading: false,
      multipleSelection: [],
      podIDs: [],  // 存储选中的容器行的ids
      // 删除容器的表单 通过computed 提取多选的ids进入list
      deletePodsForm: {
        list: [],
        force: 'True',
        volume: 'True'
      },
      dialogVisible: false,
      formLabelWidth: '80px', // 添加容器对话框表单的label宽度
      createPodForm: { // 创建容器时表单
        image: '',
        command: '',
        exports: ''
      },
      // 表单验证
      rules: {
        image: [
          {required: true, message: '镜像名称不能为空', trigger: 'blur'}
        ],
        command: [
          {required: true, message: '启动命令不能为空', trigger: 'blur'},
          {
            pattern: /^(\/([0-9a-zA-Z]+))+/,
            message: '请输入正确的路径',
            trigger: 'blur'
          }
        ],
        exports: [
          {required: true, message: '映射端口不能为空', trigger: 'blur'},
          {
            pattern: /^\d{4}:(\d{1,})+/,
            message: '请输入正确的映射端口',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  created: function () {
    this.getPods()
  },
  computed: {
    //  3.3 计算deletePodsForm
    deletePodsForm2: function () {
      this.multipleSelection.forEach(item => {
        this.podIDs.push(item.id)
      })
      this.deletePodsForm.list = this.podIDs
      this.podIDs = [] // 赋值后清除数据再次选择时数据不会重复
    },
    ...mapGetters(['pods'])
  },
  methods: {
    Loading () {
      this.loading = true
    },
    CloseLoading () {
      this.loading = false
    },
    // 添加容器对话框的删除export的input
    // removeExport (item) {
    //   var index = this.createPodForm.domains.indexOf(item)
    //   if (index !== -1) {
    //     this.createPodForm.domains.splice(index, 1)
    //   }
    // },
    // addExport () {
    //   this.createPodForm.domains.push({
    //     exports: ''
    //   })
    // },
    //  2.1取消弹框
    callOff () {
      this.dialogVisible = false
      this.$refs.relCreatePod.resetFields()
    },
    // 2创建容器
    createPod () {
      console.log(this.createPodForm)
      this.$refs.relCreatePod.validate((valid) => {
        if (valid) {
          this.loading = true
          this.createPodServer(this.createPodForm).then((res) => {
            this.$message({
              showClose: true,
              type: 'success',
              message: `添加容器成功`
            })
            this.dialogVisible = false
            this.$refs.relCreatePod.resetFields()
            this.loading = false
          }).catch((error) => {
            console.log(error)
            this.$message({
              showClose: true,
              type: 'error',
              message: `添加容器失败`
            })
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    //  3删除容器（单个、批量删除）
    // 3.1多选框选中的行
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    // 3.2 删除容器函数
    deletePods () {
      console.log(this.deletePodsForm)
      console.log(this.deletePodsForm.list.length)
      if (this.deletePodsForm.list.length) { // 对是否选中容器来进行删除
        this.$confirm('是否删除容器?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.loading = true
          this.deletePodsServer(this.deletePodsForm).then((res) => {
            this.$message({
              showClose: true,
              message: '删除成功',
              type: 'success'
            })
            this.loading = false
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
      } else {
        this.$message({
          showClose: true,
          type: 'error',
          message: '请选择要删除的容器！'
        })
      }
    },
    //  1引入获取、创建、删除容器接口
    ...mapActions(['getPods', 'createPodServer', 'deletePodsServer'])
  }
}
