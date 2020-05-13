import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false

Vue.use(VModal)

new Vue({
  store,
  render: h => h(App)
}).$mount('#pirate-memory')
