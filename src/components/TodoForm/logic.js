class Todo {
    constructor(type, date) {
        this.id = Math.random();
        this.type = type;
        this.date = date;
    }
}

export const changeType = (callback, e) => {
    callback(e.target.value)
}

const checkedValidation = (type, date) => {
    if (!type) {
        alert('Please, select type');
        return;
    }
    const dateValues = date.current.value.split('-');
    if (dateValues[0].length !== 4 || dateValues[1].length !== 2 || dateValues[2].length !== 2) {
        alert('Please, select valid date, for example: 20-01-02');
        return;
    }
    return true
}

export const addTodo = (type, dateValue, dispatch, action, setType) => {
    if (checkedValidation(type, dateValue)) {
        const todo = new Todo(type, dateValue.current.value);
        dispatch(action(todo));
    }
    setType('');
}