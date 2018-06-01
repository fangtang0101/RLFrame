import Vue from 'vue'
import Router from 'vue-router'
import com from '@/components/com'

Vue.use(Router)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'com',
      component: com
    }
  ]
})
