import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import computerModule from './computer'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations,
  modules: {
    computerModule
  }
})
