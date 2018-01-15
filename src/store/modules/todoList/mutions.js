import * as types from './mutation-types'
import { debug } from 'util';

export default {
    [types.ADD_EVENT] (state, event) {
        event.id = state.todoList.length + 1;
        state.todoList.push(event);
    },
    [types.REMOVE_EVENT] (state, id) {
        state.todoList.splice(id, 1);
    },
    [types.REMOVE_ALL_EVENT] (state) {
        state.todoList = [];
    }
}

