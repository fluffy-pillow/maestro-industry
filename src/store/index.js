import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import router from './router/index'
import systemMessage from './systemMessage/index'

export default new Vuex.Store({
    modules: {
        router: router,
        systemMessage: systemMessage
    }
})