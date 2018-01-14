import * as types from './mutation-types'

export default {
  [types.INCREASE_NUMBER] (state, num) {
    state.testNum += num;
  },
  [types.DECREASE_NUMBER] (state, num) {
    state.testNum -= num;
  }
}

