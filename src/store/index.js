import Vue from 'vue'
import Vuex from 'vuex'

import ddbindcard from './modules/ddbindcard'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ddbindcard,
  },
})
