import React from 'react';
import './TodoList.css';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTodos } from "../../store/TodoReducer/actions";
import { useNavigate } from "react-router-dom";
import { getDateLine, getKeysFromState, selectItems } from "./logic";

const TodoList = () => {
    const { todos } = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const dateLines = getDateLine(todos);

    const handleSelectItems = (date) => {
        selectItems(dispatch, setCurrentTodos, date, navigate);
    }

    const dates = getKeysFromState(dateLines);

    return (
        <div className='todo-list'>
            {dates.map(date =>
                <div onClick={() => handleSelectItems(date)} key={Math.random()}>
                    <h2>{date}({dateLines[date]})</h2>
                </div>
            )}
        </div>
    );
};

export default TodoList;