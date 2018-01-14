import {INCREASE_NUMBER, DECREASE_NUMBER} from './mutation-types';

export default {
  addNum({commit}, num) {
    commit(INCREASE_NUMBER, num)
  },
  decreaseNum({commit}, num) {
    commit(DECREASE_NUMBER, num)
  }
}
