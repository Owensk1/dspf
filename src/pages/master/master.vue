<template>
  <div class="master">
    <!-- {{msg}} -->
    <!-- <el-card class="box-card"> -->
      <div class="box-card">
        <!-- 接入主机 -->
        <div class="create-master">
          <el-button type="primary" icon="el-icon-plus" @click="dialogVisible = true">接入主机</el-button>
        </div>

        <!-- 主机列表 -->
        <div class="master-content">
          <el-card class="box-card">
            <el-table
              :data="masters"
              style="width: 98%"
              stripe>
              <el-table-column
                prop="_host"
                label="主机">
              </el-table-column>
              <el-table-column
                prop="_address"
                label="IP">
              </el-table-column>
              <!-- <el-table-column
                prop="_active"
                label="状态">
              </el-table-column> -->
              <el-table-column
                prop="_state"
                label="状态">
              </el-table-column>
              <el-table-column
                prop="_role"
                label="角色">
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="deleteMaster(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </div>
      </div>
    <!-- </el-card> -->


    <!-- dialog -->
    <el-dialog
      title="接入主机"
      :visible.sync="dialogVisible"
      width="30%">
      
      <el-form :model="form"
        ref="addMasterForm"
        status-icon='true'
        :rules="rules">
        <el-form-item
          label="IP"
          :label-width="formLabelWidth"
          prop="node_ip">
          <el-input v-model="form.node_ip" clearable></el-input>
        </el-form-item>
        <el-form-item
          label="端口"
          :label-width="formLabelWidth"
          prop="node_port">
          <el-input v-model="form.node_port" clearable></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancleAddMasterForm">取 消</el-button>
        <el-button type="primary" @click="insertPort()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<style lang="scss">
@import './master.scss'
</style>

<script src="./master.js"></script>