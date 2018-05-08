import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Login from '@/pages/login/login.vue'
import Apply from '@/pages/apply/apply.vue'
import Home from '@/pages/home/home.vue'
import Running from '@/pages/apply/running/running.vue'
import Stoped from '@/pages/apply/stoped/stoped.vue'
import CreateAppImage from '@/pages/apply/create-app-image/create-app-image.vue'
// import CreateAppImageStep1 from '@/pages/apply/create-app-image/step/step1.vue'
// import CreateAppImageStep2 from '@/pages/apply/create-app-image/step/step2.vue'
// import CreateAppImageStep3 from '@/pages/apply/create-app-image/step/step3.vue'
import CreateAppTemplate from '@/pages/apply/create-app-template/create-app-template.vue'
// import CreateAppTempStep1 from '@/pages/apply/create-app-template/step/step1.vue'
// import CreateAppTempStep2 from '@/pages/apply/create-app-template/step/step2.vue'
// import CreateAppTempStep3 from '@/pages/apply/create-app-template/step/step3.vue'

import Repo from '@/pages/repo/repo.vue'
import ApplyTemplet from '@/pages/apply_templet/apply_templet.vue'
import TempletDetail from '@/pages/apply_templet/detail/templet_detail.vue'
import Pod from '@/pages/pod/pod.vue'
import Master from '@/pages/master/master.vue'
import Internet from '@/pages/network/network.vue'
import UserCenter from '@/pages/user_center/user_center.vue'

// 创建应用

// import index from 'vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      redirect: '', // 1.1 默认跳转的页面为/路由
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: true // 1.2 表示进入该路由需要登录
      },
      children: [
        {
          path: '/apply',
          name: 'apply',
          component: Apply,
          meta: {
            requireAuth: true // 1.2 表示进入该路由需要登录
          },
          children: [
            {
              path: 'running',
              name: 'running',
              component: Running
            },
            {
              path: 'stoped',
              name: 'stoped',
              component: Stoped
            },
            {
              path: 'createAppImage',
              name: 'createAppImage',
              component: CreateAppImage
            },
            {
              path: 'createAppTemplate',
              name: 'cretaeAppTemplate',
              component: CreateAppTemplate
            }
          ]
        },
        {
          path: '/repo',
          name: 'repo',
          component: Repo,
          meta: {
            requireAuth: true // 1.2 表示进入该路由需要登录
          }
        },
        {
          path: '/apply_templet',
          name: 'apply_templet',
          meta: {
            requireAuth: true // 1.2 表示进入该路由需要登录
          },
          component: ApplyTemplet
        },
        {
          path: '/apply_templet/:name',
          name: 'apply_templet.detail',
          meta: {
            requireAuth: true // 1.2 表示进入该路由需要登录
          },
          component: TempletDetail
        },
        {
          path: '/pod',
          name: 'pod',
          meta: {
            requireAuth: true // 1.2 表示进入该路由需要登录
          },
          component: Pod
        },
        {
          path: '/master',
          name: 'master',
          meta: {
            requireAuth: true // 1.2 表示进入该路由需要登录
          },
          component: Master
        },
        {
          path: '/internet',
          name: 'internet',
          meta: {
            requireAuth: true // 1.2 表示进入该路由需要登录
          },
          component: Internet
        },
        {
          path: '/user_center',
          name: 'user_center',
          meta: {
            requireAuth: true // 1.2 表示进入该路由需要登录
          },
          component: UserCenter
        }
      ]

    }
  ]
})
