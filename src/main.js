import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/main.scss'
import infiniteScroll from 'vue-infinite-scroll'
import VueLazyload from 'vue-lazyload'

Vue.use(infiniteScroll)
Vue.use(VueLazyload)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
