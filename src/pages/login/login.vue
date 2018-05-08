<template>
    <div
        class="login-page"
        v-loading="loading"
        element-loading-text="正在登录...">
        <div class="login-container">
            <div class="login-slideshow">
                <img class="login-bg" src="../../assets/bg_1.png" alt="">
            </div>
            <div class="login-main">
                <div class="logo">
                    <img class="login-log" src="../../assets/logo.png" alt="">
                    <!-- <div class="so center">
                        <div class="inner">
                            <div class="stack-box">
                            <div class="stack">
                                <div class="item">
                                <div class="inner-item"></div>
                                </div>
                                <div class="item">
                                <div class="inner-item"></div>
                                </div>
                                <div class="item">
                                <div class="inner-item"></div>
                                </div>
                                <div class="item">
                                <div class="inner-item"></div>
                                </div>
                                <div class="item">
                                <div class="inner-item"></div>
                                </div>
                            </div>
                            <div class="box">
                                <div class="bottom"></div>
                                <div class="left"></div>
                                <div class="right"></div>
                                <div class="top"></div>
                            </div>
                            </div>
                            <div class="name">
                            </div>
                        </div>
                    </div> -->

                </div>
                <div class="perspective-box">
                    <div class="box-container">
                        <h2 class="title">Docker Simple Platform</h2>
                        <h4 class="subtitle">简易云平台</h4>
                        <p class="hr-gradient"></p>

                        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="用户名" prop="name" >
                                <el-input v-model="ruleForm2.name"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="pwd">
                                <el-input type="password" v-model="ruleForm2.pwd" auto-complete="off"></el-input>
                            </el-form-item>                                                   
                            <el-form-item>
                                <el-button type="primary" @click="submitForm(ruleForm2)">登录</el-button>
                                <el-button @click="resetForm(ruleForm2)">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
            <footer class="login-footer">Docker Simple Platform 1.0 | Docker 简易云平台</footer>
        </div>


        


    </div>
</template>

<script src="./login.js"></script>
<style lang="scss">
@import "./login.scss";
</style>

