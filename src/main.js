// Propios de vue
import Vue from 'vue'
import App from './App.vue'
// El mixin que hicimos para llamar a la API
import "@/plugins/mixins";
// Requeridos por Buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
// Requerido por VueRouter
import router from './router'

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
