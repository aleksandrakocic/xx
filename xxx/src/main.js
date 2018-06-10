import Vue from 'vue'
import App from './App.vue'

window.Vue = Vue;
window.VueRouter = VueRouter;
import VueRouter from 'vue-router';
import router from '../routes';
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
