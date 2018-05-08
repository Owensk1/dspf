<template>
  <div id="repo">
    <!-- 按钮 -->
    <!-- <div class="btn-box"> -->
      <!-- <el-button
        class="templet_btn"
        type="primary"
        icon="el-icon-plus"
        >创建镜像
      </el-button> -->
    <!-- </div> -->
    <!-- 容器盒子 -->
    <div class="content-box">
      <div class="content">
        <el-card class="box-card">
          <div class="text item">
            <el-col
              class="repos"
              :span="3"
              v-for="item in repos"
              :key="item"
              shadow="hover">
              <el-card
                class="repo_box"
                :body-style="{ padding: '0px' }"
                href="javascript:void(0)">
                <img
                  class="image"
                  src="../../assets/templet.png"/>
                <el-tooltip placement="top">
                  <div slot="content">{{ item }}</div>
                  <el-button class="repo-name">{{ item }}</el-button>
                </el-tooltip>
                                       
                <div class="bottom clearfix">
                  <el-button
                    size="medium "
                    class="button"
                    icon="el-icon-delete"
                    circle
                    @click="deleteRepo(item)"></el-button>
                </div>
              </el-card>
            </el-col>
          </div>
        </el-card>
      </div>
    </div>
    <!-- {{msg}} -->
   
    <!-- <router-view></router-view> -->
  </div>
</template>
<style lang="scss">
@import './repo.scss'
</style>
<script src="./repo.js"></script>

