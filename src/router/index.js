import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/index.vue'

// 解决重复点击路由报错的BUG
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
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
      // 首页
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home.vue'),
      },
      // 系统管理
      // 机构管理
      {
        path: '/departmentList',
        name: 'departmentList',
        component: () => import('../views/system/departmentList.vue'),
        meta: {
          title: '机构管理'
        }
      },
      // 权限管理
      {
        path: '/menuList',
        name: 'menuList',
        component: () => import('../views/system/menuList.vue'),
        meta: {
          title: '权限管理'
        }
      },
       // 角色管理
      {
        path: '/roleList',
        name: 'roleList',
        component: () => import('../views/system/roleList.vue'),
        meta: {
          title: '角色管理'
        }
      },
      // 用户管理
      {
        path: '/userList',
        name: 'userList',
        component: () => import('../views/system/userList.vue'),
        meta: {
          title: '用户管理'
        }
      },
    //  商品管理
    // 分类管理
    {
      path: '/goodCategory',
      name: 'goodCategory',
      component: () => import('../views/commodity/goodCategory.vue'),
      meta: {
        title: '分类管理'
      }
    },
    // 品牌管理
    {
      path: '/goodsBrand',
      name: 'goodsBrand',
      component: () => import('../views/commodity/goodsBrand.vue'),
      meta: {
        title: '品牌管理'
      }
    },
    // 系统工具
    // 代码生成
    {
      path: '/systemCode',
      name: 'systemCode',
      component: () => import('../views/systemtools/systemCode.vue'),
      meta: {
        title: '代码生成'
      }
    },
    // 接口文档
    {
      path: '/document',
      name: 'document',
      component: () => import('../views/systemtools/document.vue'),
      meta: {
        title: '接口文档'
      }
    }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
