// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
// 重置不同端的样式
import 'styles/border.css'
// 移动端1像素边框问题
import fastClick from 'fastclick'
// 移动click 300ms延迟
import 'styles/iconfont.css'
Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
