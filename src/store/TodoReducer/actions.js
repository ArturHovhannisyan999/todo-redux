import { Types } from "./types";

export const addTodoAction = (payload) => ({type: Types.ADD_TODO, payload});
export const removeTodoAction = (payload) => ({type: Types.REMOVE_TODO, payload});
export const editTodoAction = (payload) => ({type: Types.EDIT_TODO, payload});
export const setCurrentTodos = (payload) => ({type: Types.SET_CURRENT_TODOS, payload});