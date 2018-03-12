import { combineReducers } from 'redux'
import { ADD_SEARCH } from './../actions/index'


const initialState = {
    searchField = '',

}

const navbarFields = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SEARCH: 
            return {
                ...state,
                searchField: action.payload
            }
        default: 
            return state;
    }
}


const rootReducer = combineReducers({
    navbarFields,
})


export default rootReducer