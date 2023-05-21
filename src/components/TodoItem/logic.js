export const removeTodo = (dispatch, action, id) => {
    dispatch(action(id));
}

export const editTodo = (dispatch, action, id) => {
    const type = prompt();
    type ? dispatch(action({id, type})) : alert('Please, select type');
}

export const goBack = (nav) => {
    nav('/');
}