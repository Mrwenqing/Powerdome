import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
// 解决menu菜单收起文字不隐藏的问题
import Fragment from 'vue-fragment'
import '../src/style/reset.css'
Vue.config.productionTip = false
Vue.use(Fragment.Plugin)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
