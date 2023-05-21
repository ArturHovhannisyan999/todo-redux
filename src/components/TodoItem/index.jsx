import React, { useEffect } from 'react';
import './TodoItem.css';
import { useDispatch, useSelector } from "react-redux";
import { editTodoAction, removeTodoAction, setCurrentTodos } from "../../store/TodoReducer/actions";
import { useNavigate } from "react-router-dom";
import { editTodo, goBack, removeTodo } from "./logic";
const TodoItem = () => {
    const { todos, currentTodos } = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(currentTodos, 'todos')

    useEffect(() => {
        dispatch(setCurrentTodos(currentTodos[0]?.date))
    }, [todos, dispatch])

    const handleRemoveTodo = (id) => {
        removeTodo(dispatch, removeTodoAction, id);
    }

    const handleEditTodo = (id) => {
        editTodo(dispatch, editTodoAction, id);
    }

    const handleGoBack = () => {
        goBack(navigate);
    }

    return (
            <div className='todo-item'>
                <button onClick={() => handleGoBack()} className='btn'>Go Back</button>
                {currentTodos.length > 0 ? <h2>Todo Item: {currentTodos[0]?.date}({currentTodos.length})</h2> : <h2>No Users</h2>}
                {currentTodos.length > 0 &&
                    currentTodos.map(todo =>
                        <div key={Math.random()}>
                            <div className='type-div'><p>{todo.type}</p></div>
                            <div className='edit-div'><button onClick={() => handleEditTodo(todo.id)}>Edit</button></div>
                            <div><button onClick={() => handleRemoveTodo(todo.id)}>Delete</button></div>
                        </div>
                    )
                }
            </div>
    );
};

export default TodoItem;