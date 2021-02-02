import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import VueScrollTrigger from '@/plugins/scroll-trigger'
import LazyImage from '@/components/global/LazyImage.vue'

// global components
Vue.component('lazy-image', LazyImage)

Vue.use(VueLazyload)
Vue.use(VueScrollTrigger)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
