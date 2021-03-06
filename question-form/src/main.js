// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import firebase from 'firebase';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import VueFire from 'vuefire';
import App from './App';
import router from './router';

Vue.use(Vuetify);
Vue.use(VueFire);
Vue.use(VueRouter);
Vue.config.productionTip = false;

let app = '';
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>',
    });
  }
});
