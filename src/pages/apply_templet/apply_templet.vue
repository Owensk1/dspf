<template>
  
  <el-row class="templet_container">
    <el-col :span="24">
      <div class="box-card">
        <div class="text item">
          <div class="templat_btn_box">
            <el-button
              :span="24"
              class="templet_btn"
              type="primary"
              icon="el-icon-plus"
              @click="dialogVisible = true">创建应用模板
            </el-button>
          </div>
          
          <div class="template-content">
            <el-col
              class="templet"
              :span="3"
              v-for="item in templates"
              :key="item"
              shadow="hover">
              <el-card
                class="templet_box"
                :body-style="{ padding: '0px' }"
                href="javascript:void(0)">
                <img
                  class="image"
                  src="../../assets/templet.png"
                  @click="gotoDetail(item)"/>
                <span :model="templateName">{{item}}</span>
                    
                <div class="bottom clearfix">
                  <el-button
                    size="medium "
                    class="button"
                    icon="el-icon-delete"
                    circle
                    @click="deleteTemp(item)"></el-button>
                </div>
              </el-card>
            </el-col>
          </div>
        </div>
      </div> 
    </el-col>
    

  <!-- 创建模板模态框 -->
  <!-- :before-close="handleClose" -->
    <el-dialog
      :title="title"
      class="templet_dialog"
      :visible.sync="dialogVisible"
      center
      width="30%"
      >
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        status-icon='true'
        ref="addTemplate"
        :rules="rules"
        :model="addTempDialog">
        <el-form-item label="名称" prop="name">
          <el-input
            v-model="addTempDialog.name"
            placeholder="请输入名称"
            clearable>
          </el-input>
        </el-form-item>
        <el-form-item label="简介" prop="describe">
          <el-input
            v-model="addTempDialog.describe"
            placeholder="请输入简介"
            clearable>
          </el-input>
        </el-form-item>
        <el-form-item label="内容" prop="compose">
          <el-input
            v-model="addTempDialog.compose"
            placeholder="请输入内容"
            clearable>
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="callOfDialog()">取 消</el-button>
        <el-button type="primary" @click="addTemp(addTempDialog)">确 定</el-button>
      </span>
    </el-dialog>

  </el-row>

  
  

</template>
<style lang="scss">
@import "./apply_templet.scss";
</style>
<script src="./apply_templet.js"></script>