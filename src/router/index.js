import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout/Layout.vue'),
    children:[
      // 系统管理
      // 机构管理
      {
        path: '/departmentList',
        name: 'departmentList',
        component: () => import('../views/system/departmentList.vue'),
      },
      // 权限管理
      {
        path: '/menuList',
        name: 'menuList',
        component: () => import('../views/system/menuList.vue'),
      },
       // 角色管理
      {
        path: '/roleList',
        name: 'roleList',
        component: () => import('../views/system/roleList.vue'),
      },
      // 用户管理
      {
        path: '/userList',
        name: 'userList',
        component: () => import('../views/system/userList.vue'),
      },
    //  商品管理
    // 分类管理
    {
      path: '/goodCategory',
      name: 'goodCategory',
      component: () => import('../views/commodity/goodCategory.vue'),
    },
    // 品牌管理
    {
      path: '/goodsBrand',
      name: 'goodsBrand',
      component: () => import('../views/commodity/goodsBrand.vue'),
    },
    // 系统工具
    // 代码生成
    {
      path: '/systemCode',
      name: 'systemCode',
      component: () => import('../views/systemtools/systemCode.vue'),
    },
    // 接口文档
    {
      path: '/document',
      name: 'document',
      component: () => import('../views/systemtools/document.vue'),
    }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
