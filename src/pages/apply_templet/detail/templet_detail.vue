<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div class="detailInfo">
          <div class="left-img">
            <img src="../../../assets/templet.png" />
            <!-- <i class="el-icon-document"></i> -->
          </div>
          <div class="right-detailInfo">
            <div class="headline">{{ template.name}}</div>
            <div class="compose">{{ template.compose}}</div>
            <div class="describe">{{ template.describe}}</div>
          </div>
        </div>
      </div>
      <div class="edit-detail">
        <el-form  status-icon  label-width="100px" >
          <el-form-item label="模板名称">
            <el-input type="text" auto-complete="off" v-model="editTempDetailForm.name"></el-input>
          </el-form-item>
          <el-form-item label="模板结构" >
            <el-input type="textarea" v-model="editTempDetailForm.compose"></el-input>
          </el-form-item>
          <el-form-item label="模板描述" >
            <el-input type="textarea" v-model="editTempDetailForm.describe"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="editTempDetail(editTempDetailForm)">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss">
.box-card{
  .clearfix{
    .detailInfo{
      overflow: hidden;
      .left-img{
        width: 120px;
        height: 120px;
        float: left;
        img{
          width: 120px;
          height: 120px; 
        }
      }
      .right-detailInfo{
        width: calc(100% - 120px);
        height:100px;
        float: right;
        text-align: left;
        .headline{
          height: 40px;
          font-size: 28px;
          color:#595f69;
          line-height: 40px;
        }
        .compose{
          height: 40px;
          color: #9ba3af;
          font-size: 16px;
          line-height: 40px
        }
        .describe{
          height: 40px;
          color: #9ba3af;
          font-size: 14px;
        }
      }
    }
  }
  .edit-detail{
      .el-form{
        .el-form-item{
          .el-input,.el-textarea{
            max-width: 600px;
            float: left;
          }
          button{
            float: left;  
          }
        }
      }
    }
  
}
</style>

<script>
import { mapActions } from 'vuex'
// import _ from 'lodash'

export default {
  name: 'TempletDetail',
  data () {
    return {
      tempDetailInfo: {
        name: '',
        describe: '',
        compose: ''
      },
      // 通过当前urlparams获取模板的名称来获取模板详情
      templateName: this.$route.params.name,
      // 定义一个模板用来存储当前获取的详情
      template: {
        name: '',
        describe: '',
        compose: ''
      },
      // 定义编辑信息的对象
      editTempDetailForm: {
        name: '123',
        compose: '12',
        describe: '12'
      }

    }
  },
  created: function () {
    this.getDetailInfoByName()
  },
  methods: {
    // 通过templateName获取详情
    getDetailInfoByName () {
      var obj = {name: this.templateName}
      this.getDetailByName(obj).then((res) => {
        //  对u'xxx' 数据进行处理
        res.data = res.data.replace(/u/g, '')
        res.data = res.data.replace(/'/g, '"')
        res.data = JSON.parse(res.data)
        console.log(res.data)
        this.template = res.data
        // 赋值给编辑的数据
        this.editTempDetailForm = {
          name: this.template.name,
          compose: this.template.compose,
          describe: this.template.describe
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    //  修改模板详情信息
    editTempDetail (data) {
      this.editTemplateDetail(data).then((res) => {
        console.log(res.config.data)
        this.template = JSON.parse(res.config.data)
        this.$message({
          showClose: true,
          message: '修改成功',
          type: 'success'
        })
      }).catch(() => {
        this.$message({
          showClose: true,
          message: '修改失败',
          type: 'error'
        })
      })
    },
    ...mapActions([
      'getDetailByName',
      'editTemplateDetail'
    ])
  }
}
</script>

