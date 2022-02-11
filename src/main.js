import Vue from 'vue'
import App from './App.vue'
import vueScrollto from 'vue-scrollto'

Vue.use(vueScrollto)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
