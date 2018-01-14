import Vue from 'vue'
import Vuex from 'vuex'
import computerModule from './modules/computer'
import todoListModule from './modules/todoList'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  
  },
  modules: {
    computerModule,
    todoListModule
  }
})
