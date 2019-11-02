const initialState = {
    value: 0,
    color: 'black'
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    if (type === "INCREMENT") {
        return {
            value: state.value + 1
        }
    } else if (type === 'DECREMENT') {
        return {
            value: state.value - 1
        }
    } else if (type === 'ADD_5') {
        return {
            value: state.value + 5
        }
    } else if (type === 'SUBTRACT_5') {
        return {
            value: state.value - 5
        }
    } else if (type === 'CHANGE_COLOR') {
        return {
            value: state.value,
            color: action.newColor
        }
    } else if (type === 'NEW_VALUE') {
        return {
            value: action.newValue,
            color: state.color
        }
    }
    return state
}