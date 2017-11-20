const initialState = [
{ id: 0, label: "Learn Javascript", complete: true},
{ id: 1, label: "Learn ES6", complete: true},
{ id: 2, label: "Learn React", complete: false},
{ id: 3, label: "Learn React Native", complete: false},
{ id: 4, label: "Learn Nodejs", complete: false},
{ id: 5, label: "Learn by doing", complete: false},
{ id: 6, label: "Learn to teach", complete: false},
{ id: 7, label: "Teach to learn", complete: false}];

function todos(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
        const copyState = [...state];
        copyState.unshift({
            label: action.label,
            complete: false,
            id: copyState.length
        });
        return copyState;
        case "TOGGLE_TODO":
        const newState = state.concat(); // equal-to [...state]
        newState[action.index].complete = !newState[action.index].complete;
        return newState;
        default:
        return state;
    }
}

export default todos;