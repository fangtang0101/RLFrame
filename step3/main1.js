import './style.scss'

// const Vue = require('vue')
import Vue from 'vue'
import App from './app.vue'

// Vue 项目配置
// Vue.prototype.$config = require('./config')

/**
 * Vue 全局初始化
 */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})