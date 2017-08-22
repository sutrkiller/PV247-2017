import { combineReducers } from 'redux';
import { todoApp } from './todo-list/todoApp';

export const app = combineReducers({
    todoApp,
});
