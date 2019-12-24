import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const app =new Vue({
  render: h => h(App),
  mounted() {
      console.log('mounted')
      document.addEventListener('deviceReady', this.onDeviceReady, false)
  },
  methods: {
      onDeviceReady() {

      }
  }
})

document.addEventListener(typeof cordova !== "undefined" ? "deviceready" : "DOMContentLoaded", () => {
    app.$mount('#app')
});