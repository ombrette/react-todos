const initialState = "none";

function todosFilter(state = initialState, action) {
    switch (action.type) {
        case "SELECT_FILTER":
        const newState = action.value;
        return newState;
        default:
        return state;
    }
}

export default todosFilter;