<template>
  <div id="pod" >
    <!-- <el-card class="box-card"> -->
    <div class="box-card">
      <!-- <div slot="header" class="clearfix">
        <p>容器</p>
      </div> -->
      <div class="content">
        <div class="btn-box" >
            <el-button
              type="primary"
              class="btn"
              @click="dialogVisible = true">
              <i class="el-icon-plus"></i>
              新增容器
            </el-button>
            <el-button
              type="danger"
              class="btn"
              icon="el-icon-delete"
              @click="deletePods">
            </el-button>
          </div>
        <div class="tabel-box">
          <el-card class="box-card">
            <div style="display:none">{{deletePodsForm}}{{deletePodsForm2}}</div>
            <el-table
              :data="pods"
              style="width: 100%"
              stripe
              v-model="deletePodsForm"
              ref="multipleTable"
              @selection-change="handleSelectionChange"
              v-loading="loading">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                label="容器">
                <template slot-scope="scope">
                  <span>{{scope.row.name[0].slice(1) }}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="image"
                label="镜像">
              </el-table-column>
              <el-table-column
                label="端口">
                <template slot-scope="scope">
                  <p v-for="ip in scope.row.ip_port" :key="ip">
                    {{ip }}
                  </p>
                </template>
              </el-table-column>
              <el-table-column
                prop="state"
                label="当前状态">
                <template slot-scope="scope">
                  <!-- 对当前状态进行判断 为running时显示绿色的进度条 否则进度条绿色为0 -->
                  <el-progress v-if="scope.row.state == 'running'" stroke-width="12" :percentage="100" status="success" :show-text='false'></el-progress>
                  <el-progress v-if="scope.row.state !== 'running'" stroke-width="12" :percentage="0" status="exception" :show-text='false'></el-progress>
                </template>
              </el-table-column>
              <el-table-column
                label="启动时间">
                <template slot-scope="scope">
                  <span v-if="scope.row.status.indexOf('hours') !== -1">{{'更新于' + scope.row.status.slice(3, 5) + '小时前'}}</span>
                  <span v-if="scope.row.status.indexOf('hours') == -1">{{'更新于' + scope.row.status.slice(3, 5) + '分钟前'}}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </div>
      </div>
    </div>

    <!-- 添加容器弹框 -->
    <el-dialog
      title="创建容器"
      :visible.sync="dialogVisible"
      width="30%">
      
      <el-form :model="createPodForm"
        ref="relCreatePod"
        status-icon='true'
        :rules="rules">

        <el-form-item
          label="镜像名称"
          :label-width="formLabelWidth"
          prop="image">
          <el-input
            v-model="createPodForm.image"
            placeholder="例如asd12"
            clearable>
          </el-input>
        </el-form-item>

        <el-form-item
          label="运行命令"
          :label-width="formLabelWidth"
          prop="command">
          <el-input
            v-model="createPodForm.command"
             placeholder="例如/bin/sh"
             clearable>
          </el-input>
        </el-form-item>

        <el-form-item
          label="映射端口"
          :label-width="formLabelWidth"
          prop="exports">
          <el-input
            v-model="createPodForm.exports"
            placeholder="例如:1210:10024"
            clearable>
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="callOff()">取 消</el-button>
        <el-button type="primary" @click="createPod()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<style lang="scss">
@import './pod.scss'
</style>

<script src="./pod.js"></script>