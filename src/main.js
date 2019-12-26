import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import VueOnsen from 'vue-onsenui/esm';
import VOnsPage from 'vue-onsenui/esm/components/VOnsPage';
import VOnsNavigator from 'vue-onsenui/esm/components/VOnsNavigator';
import VOnsBackButton from 'vue-onsenui/esm/components/VOnsBackButton';
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

Vue.use(VueOnsen);
Vue.use(VueRouter);

Vue.component(VOnsPage.name, VOnsPage);
Vue.component(VOnsNavigator.name, VOnsNavigator);
Vue.component(VOnsBackButton.name, VOnsBackButton);

sync(store, router)

Vue.config.productionTip = false

const app = new Vue({
  store,
  router,
  render: h => h(App),
  mounted() {
      document.addEventListener('deviceReady', this.onDeviceReady, false)
  },
  methods: {
      onDeviceReady() {

      }
  },
  beforeCreate() {
    this.$ons.disableAutoStyling();
  }
})

document.addEventListener(typeof cordova !== "undefined" ? "deviceready" : "DOMContentLoaded", () => {
    screen.orientation.lock('landscape')
    app.$mount('#app')
});