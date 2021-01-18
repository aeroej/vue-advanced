import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';
import { store } from '../src/store/index.js'

Vue.config.productionTip = false

// router & store 축약가능
new Vue({
  render: h => h(App),
  router: router,
  store: store,
}).$mount('#app')
