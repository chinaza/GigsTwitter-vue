import Vue from 'vue';

import App from './App.vue';
import store from './store';
import router from './router';

import './registerServiceWorker';

import 'bulma';
import './assets/scss/variables.scss';
import './assets/scss/style.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
