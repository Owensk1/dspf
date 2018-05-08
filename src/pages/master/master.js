import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'master',
  data () {
    return {
      msg: '主机',
      dialogVisible: false, // 1 dialog
      formLabelWidth: '60px',
      form: {
        node_ip: '',
        node_port: ''
      },
      rules: {
        node_ip: [
          { required: true, message: 'IP不能为空', trigger: 'blur' },
          { pattern: /^((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))$/,
            message: '请输入正确的IP地址！',
            trigger: 'blur' }
        ],
        node_port: [
          { required: true, message: '端口不能为空', trigger: 'blur' },
          { pattern: /^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/,
            message: '请输入正确的端口！',
            trigger: 'blur' }
        ]
      }
    }
  },
  created: function () {
    this.getMasters()
  },
  computed: {
    ...mapGetters(['masters'])
  },
  methods: {
    // 2 接入主机
    insertPort () {
      this.$refs.addMasterForm.validate((valid) => {
        if (valid) {
          this.insertMaster(this.form).then((res) => {
            this.$message({
              showClose: true,
              type: 'success',
              message: `添加节点成功`
            })
            this.dialogVisible = false
            this.$refs.addMasterForm.resetFields()
          }).catch((error) => {
            console.log(error)
            this.$message({
              showClose: true,
              type: 'error',
              message: `添加节点失败`
            })
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 2 取消添加主机对话框
    cancleAddMasterForm () {
      this.dialogVisible = false
      this.$refs.addMasterForm.resetFields()
    },
    //  3 删除主机
    deleteMaster (index, row) {
      console.log(row)
      console.log(row._address)
      this.$confirm('此操作将永久删除该节点, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteMasters(row._address).then((res) => {
          this.$message({
            showClose: true,
            type: 'success',
            message: `删除主机成功`
          })
        }).catch((error) => {
          console.log(error)
          this.$message({
            showClose: true,
            type: 'error',
            message: `删除主机失败`
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    ...mapActions(['getMasters', 'insertMaster', 'deleteMasters'])
  }
}
