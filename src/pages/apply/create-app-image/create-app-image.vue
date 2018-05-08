<template>
  <div id="create-app-image">
    <el-card
      class="box-card"
      v-loading="loading"
      element-loading-text="正在创建应用...">
      <div slot="header" class="title clearfix">
        <span>通过镜像部署应用</span>
      </div>
      <div class="content">
        <el-form
          :label-position="left"
          label-width="80px"
          :model="createAppImageForm"
          ref="createAppImageForm">
          <el-form-item label="选择镜像">
            <el-select v-model="createAppImageForm.image" filterable placeholder="请选择镜像">
              <el-option
                v-for="item in repos"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="应用名称">
            <el-input
              v-model="createAppImageForm.service_name"
              placeholder="请填写应用名称"
              auto-complete="off"></el-input>
          </el-form-item>

          <el-form-item label="暴露端口">
            <el-input
              v-model="createAppImageForm.ports"
              placeholder="例如: port:80">
            </el-input>
          </el-form-item>

          <el-form-item label="重启策略">
            <el-select v-model="createAppImageForm.restart" placeholder="请选择重启策略">
              <el-option
                v-for="item in restartOpts"
                :key="item.value"
                :label="item.value"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="模式">
            <el-select v-model="createAppImageForm.mode" placeholder="请选择模式">
              <el-option
                v-for="item in modes"
                :key="item.value"
                :label="item.value"
                :value="item.label">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="存储卷">
            <div class="input">
              <el-input
                v-model="createAppImageForm.source2target[0].source"
                placeholder="例如: /root">
              </el-input>
            </div>
            <div class="input">
              <el-input
                v-model="createAppImageForm.source2target[0].target"
                placeholder="例如: /">
              </el-input>
            </div>
            <div class="input">
              <el-select
                v-model="createAppImageForm.source2target[0].read_only"
                placeholder="请选择存储卷只读形式">
                <el-option
                  v-for="item in read_onlys"
                  :key="item.value"
                  :label="item.value"
                  :value="item.label">
                </el-option>
              </el-select>
            </div>
          </el-form-item>

          <el-form-item label="副本数">
            <el-input
              v-model="createAppImageForm.replicas"
              placeholder="请填入整数，例如1,2,3...">
            </el-input>
          </el-form-item>

          <el-form-item label="执行命令">
            <el-input
              v-model="createAppImageForm.command"
              placeholder="例如sleep 3000">
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="createAppImage(createAppImageForm)">立即创建</el-button>
            <el-button @click="resetForm(createAppImageForm)">重置</el-button>
          </el-form-item>

        </el-form>
      </div>
    </el-card>
    
  </div>
</template>

<style lang="scss">
@import './create-app-image.scss'
</style>

<script src="./create-app-image.js"></script>

