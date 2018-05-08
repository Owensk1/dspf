<template>
  <div id="createAppTemp">
    <div class="step-box">
      <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
     </el-steps>
    </div>
    <hr/>
    <createAppTempStep1  :stepShow.sync="stepShow"></createAppTempStep1>    
    <createAppTempStep2 v-show="stepShow"></createAppTempStep2>
    <createAppTempStep3 v-show="stepShow"></createAppTempStep3>
    
    
    <div class="view">
      <router-view></router-view>
    </div>

    <!-- <el-button style="margin-top: 12px;" @click="next">下一步</el-button> -->
  </div>
</template>

<script src="./create-app-template.js">

</script>

