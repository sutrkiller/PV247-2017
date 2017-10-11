import { combineReducers } from 'redux';
import { todoApp } from './todo-list/todoApp';
import { shared } from './shared/shared';

export const app = combineReducers({
    todoApp,
    shared
});
