import { INCREASE_COUNT } from './mutation-types'

/** mutations 定义具体方法和改变的对应的state **/
export default {
  [INCREASE_COUNT] (state) {
    state.count++
  }
}
