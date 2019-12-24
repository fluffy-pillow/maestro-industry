import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const app =new Vue({
  render: h => h(App),
  mounted() {
      console.log('mounted')
  },
})

document.addEventListener(typeof cordova !== "undefined" ? "deviceready" : "DOMContentLoaded", () => {
    screen.orientation.lock('landscape')
    app.$mount('#app')
});