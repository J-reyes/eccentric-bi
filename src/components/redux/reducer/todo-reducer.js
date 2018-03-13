import { ADD_TODO, REMOVE_TODO } from '../actions/index'

const toDoState = {
    toDoList: []
}

const toDo = (state = toDoState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                toDoList: [...state.toDoList, action.payload]
            }
        case REMOVE_TODO:
            return {
                ...state,
                toDoList: [
                    ...state.toDoList.slice(0, action.payload),
                    ...state.toDoList.slice(action.payload + 1)
                ]
            }
        default:
            return state;
    }
}

export default toDo