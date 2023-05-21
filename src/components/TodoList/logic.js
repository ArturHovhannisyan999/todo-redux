export const getDateLine = (arr) => {
    const res = arr.reduce((acc, elm) => {
        acc[elm.date] = acc[elm.date] ? acc[elm.date] + 1 : 1;
        return acc
    }, {});

    return res;
}

export const selectItems = (dispatch, action, date, nav) => {
    dispatch(action(date));
    nav('/todo');
}

export const getKeysFromState = (obj) => {
    const res = Object.keys(obj);
    return res;
}