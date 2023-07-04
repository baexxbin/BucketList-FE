import Vue from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import { router } from './router';
import Vuetify from 'vuetify' // vuetify v2 사용방식
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router';

Vue.use(Vuetify)
Vue.use(VueRouter)

loadFonts()

new Vue({
  router, 
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')