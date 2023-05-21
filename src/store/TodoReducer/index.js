import { Types } from "./types";

const initialState = {
    todos: [
        {id: 1, type: 'Go to home', date: '2021-02-01'},
        {id: 2, type: 'Go to school', date: '2021-03-01'},
        {id: 3, type: 'Go to work', date: '2021-02-04'},
        {id: 4, type: 'Go to somewhere', date: '2021-02-01'},
        {id: 5, type: 'Go to upp', date: '2021-03-01'},
    ],
    currentTodos: [],
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case Types.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case Types.EDIT_TODO:
            const {id, type} = action.payload;
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === id
                    ?
                        {...todo, type}
                    :
                        todo
                )
            }
        case Types.SET_CURRENT_TODOS:
            return {
                ...state,
                currentTodos: state.todos.filter(todo => todo.date === action.payload)
            }
        default: return state
    }
}