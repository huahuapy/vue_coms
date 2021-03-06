import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
  components: {
    App: App
  },
  template: '<App/>'
}).$mount('#root')