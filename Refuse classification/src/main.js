// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'



Vue.config.productionTip = false           //阻止启动产生消息，也就是报错，一般关闭阻止

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App },
  template: '<App/>',
  store,   //所有的组件对象都多了个属性：$store
  render: h => h(App),
  router,
})

