import React, { useRef, useState } from 'react';
import './TodoForm.css';
import TodoList from "../TodoList";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../../store/TodoReducer/actions";
import { addTodo, changeType } from "./logic";

const TodoForm = () => {
    const dispatch = useDispatch();
    const [type, setType] = useState('');
    const dateValue = useRef();
    const handleChangeType = (e) => {
        changeType(setType, e);
    }

    const handleAddTodo = () => {
        addTodo(type, dateValue, dispatch, addTodoAction, setType);
    }

    return (
        <div className={'todo-form'}>
            <h1>Todos</h1>
            <div className={'todo-form-inputs'}>
                <input onChange={(e) => handleChangeType(e)} value={type} type='name' placeholder='Type here'/>
                <input ref={dateValue} type='date'/>
                <button onClick={() => handleAddTodo()}>Add</button>
            </div>
            <TodoList />
        </div>
    );
};

export default TodoForm;