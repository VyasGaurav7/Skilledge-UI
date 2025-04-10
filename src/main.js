import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false


Vue.use(Vuetify);
Vue.use(BootstrapVue);


const vuetify = new Vuetify();

new Vue({
  render: h => h(App),
  router, 
  vuetify, 
}).$mount('#app');
