import Vue from 'vue'
import App from './App'
import './assets/css/my.css'
import router from './router'

/* import {Button} from 'mint-ui'
Vue.component(Button.name, Button) */

Vue.config.productionTip = false

new Vue({
  components: {
    App: App
  },
  template: '<App/>',
  router
}).$mount('#root')