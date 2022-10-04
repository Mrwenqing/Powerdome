import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
// 解决menu菜单收起文字不隐藏的问题
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)
// 引入css样式
import '../src/style/reset.css'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
