import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import router from './router/index'

export default new Vuex.Store({
    modules: {
        router: router
    }
})