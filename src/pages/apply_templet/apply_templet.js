// import axios from 'axios'
// import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'
import dialog from '../dialogs/add_templet.vue'

export default {
  components: {
    dialog
  },
  data () {
    return {
      form: {},
      // dialog: false
      title: '创建应用模板',
      dialogVisible: false,
      templateName: '',
      addTempDialog: {
        name: '',
        describe: '',
        compose: ''
      },
      // 弹框的form label位置
      labelPosition: 'top',
      //  表单验证规则
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { pattern: /^[a-zA-Z]\w{1,15}$/,
            message: '以字母开头,长度在2~8之间,只能包含字符、数字和下划线',
            trigger: 'blur' }
        ],
        describe: [
          { required: true, message: '简介不能为空', trigger: 'blur' }
        ],
        compose: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  created: function () {
    this.getTemplates() // 1获取所有模板
  },
  computed: {
    ...mapGetters(['templates'])
  },
  methods: {
    //  弹框取消 把输入框内容清空
    callOfDialog () {
      this.dialogVisible = false
      this.$refs.addTemplate.resetFields()
    },
    // 3 删除模板
    deleteTemp (data) {
      // alert()
      console.log(data)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteTemplate(data).then((res) => {
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
    },
    // 4 添加模板
    addTemp (data) {
      // alert()
      console.log(data)
      this.addTemplate(data).then((res) => {
        this.$message({
          message: '添加成功',
          type: 'success'
        })
        // 添加成功后 弹框消失
        this.dialogVisible = false
      }).catch((error) => {
        console.log(error)
        this.$message({
          message: '添加失败',
          type: 'error'
        })
      })
    },
    // 调到详情页面路由
    gotoDetail (item) {
      this.$router.push({
        name: 'apply_templet.detail',
        params: {name: item}
      })
    },
    ...mapActions([
      'getTemplates',
      'addTemplate',
      'deleteTemplate',
      'getDetailByName'
    ])
  }
}
