import { combineReducers, createStore } from 'redux';
import todos from './reducers/todos';
import todosFilter from './reducers/todosFilter';

let rootReducer = combineReducers({ todos, todosFilter });
let store = createStore(rootReducer);

export default store;