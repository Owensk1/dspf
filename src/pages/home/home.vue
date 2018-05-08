<template>
  <el-container>
    <!-- 侧栏导航 -->
    <el-aside width="200px" background="linear-gradient(30deg,#5f4b86,#8F7ECE)" >
      <div class="nav_logo"></div>
      <el-row class="container"><!--导航-->
      <el-col :span='24'  class="nav">
        <el-menu 
          router=true
          default-active="/apply/running"
          class="el-menu-vertical-demo"
          text-color="#fafafa"
          active-text-color="#ffd04b">
          <el-submenu index="/apply">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>应用</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/apply/running"><i class="el-icon-document"></i>正在运行</el-menu-item>
              <el-menu-item index="/apply/stoped"><i class="el-icon-document"></i>已停止</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="/repo">
            <i class="el-icon-menu"></i>
            <span slot="title">镜像仓库</span>
          </el-menu-item>

          <el-menu-item index="/apply_templet">
            <i class="el-icon-goods"></i>
            <span slot="title">应用模板</span>
          </el-menu-item>

          <el-menu-item index="/pod">
            <i class="el-icon-goods"></i>
            <span slot="title">容器</span>
          </el-menu-item>

          <el-menu-item index="/master">
            <i class="el-icon-star-on"></i>
            <span slot="title">主机</span>
          </el-menu-item>

          <el-menu-item index="/internet">
            <i class="el-icon-sort"></i>
            <span slot="title">网络</span>
          </el-menu-item>

          <el-menu-item index="/user_center">
            <i class="el-icon-setting"></i>
            <span slot="title">用户中心</span>
          </el-menu-item>
          
        </el-menu>
      </el-col>    
    </el-row>
 
    </el-aside>
    
    <!--右侧  -->
    <el-container>
      <el-header>
        <div class="amdin">
          <el-dropdown @command="LoginOut">
            <span class="el-dropdown-link">
              admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item  @click="LoginOut">注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <!-- 右侧main -->
      <el-main>
        <el-col><!--放置路由 显示-->
        <!-- <el-card class="box-card"> -->
          <router-view/>
          <!-- </el-card> -->
        </el-col>
      </el-main>

      <!-- 右侧footer -->
      <el-footer>
        <p>CopyRight @Grace</p>
      </el-footer>

    </el-container>

    
    
</el-container>
</template>

<style lang="scss">
@import "./home.scss";
</style>


<script src="./home.js"></script>
