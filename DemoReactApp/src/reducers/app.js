import { todoApp } from './todo-list/todoApp';

export const app = (prevState, action) => ({
    todoApp: todoApp(prevState.todoApp, action),
});
