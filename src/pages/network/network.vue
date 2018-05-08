<template>
  <div id="network">
    <el-card class="box-card">
      <div class="text item">
        <el-table
          :data="networks"
          style="width: 100%"
          stripe>

          <el-table-column
            prop="name"
            label="名称">
          </el-table-column>

          <el-table-column
            prop="scope"
            label="可用范围"
            width="180">
          </el-table-column>

          <el-table-column
            prop="driver"
            label="驱动类型"
            width="180">
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <!-- <router-view></router-view> -->
  </div>
</template>

<style lang="scss">
@import './network.scss'
</style>
<script src="./network.js"></script>