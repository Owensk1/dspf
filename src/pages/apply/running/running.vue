<template>
  <div id="running"  v-loading="loading">
    <!-- <el-card class="box-card"> -->
    <div class="box-card">
      <div class="content">
        <div class="btn-box" >
            <el-button
              type="primary"
              class="btn"
              @click="dialogVisible = true">
              <i class="el-icon-plus"></i>
              部署应用
            </el-button>
            <el-button
              type="danger"
              class="btn"
              icon="el-icon-delete"
              @click="deleteApps()"
              >
            </el-button>
          </div>
        <div class="tabel-box">
          <el-card class="box-card">
            <!-- <div style="display:none">{{deletePodsForm}}{{deletePodsForm2}}</div> -->
            <el-table
              :data="applys"
              style="width: 100%"
              stripe
              ref="multipleTable"
              @selection-change="handleSelectionChange"
              :default-sort = "{prop: 'service_name', order: 'descending'}">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                label="应用名称"
                prop="service_name"
                sortable>
              </el-table-column>
              <el-table-column
                prop="image_name"
                label="镜像名"
                sortable>
              </el-table-column>
              <el-table-column
                label="端口"
                prop="endpoint">
              </el-table-column>
              <el-table-column
                label="创建时间"
                >
                <template slot-scope="scope"  >
                  <!-- <span>{{scope.row.create_date | moment }}</span> -->
                  <span>{{ moment(scope.row.create_date ).format('YYYY-MM-DD:HH:MM:SS')}}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </div>
      </div>
    </div>
    <!-- dialog -->
    <el-dialog
      title="部署应用"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>请选择下面一种方式</span>
      <div class="create-method">
        <el-radio v-model="createMethod" label="createAppImage" border>通过镜像部署</el-radio>
        <el-radio v-model="createMethod" label="createAppTemplate" border>一键部署</el-radio>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="gotoMethod(createMethod)">确 定</el-button>
      </span>

    </el-dialog>
  </div>
</template>

<style lang="scss">
@import './running.scss'
</style>

<script src="./running"></script>