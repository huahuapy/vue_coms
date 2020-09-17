import Vue from 'vue'
import App from './App'
import './assets/css/my.css'

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$eventBus = this
  },
  components: {
    App: App
  },
  template: '<App/>'
}).$mount('#root')