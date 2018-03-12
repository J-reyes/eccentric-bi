import { combineReducers } from 'redux'
import { ADD_SEARCH, ADD_LOGIN } from './../actions/index'


const initialState = {
    searchField: '',
    login: {username: '', password: ''}

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

const loginPage = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_LOGIN:
            return {
                ...state,
                login: action.payload
            }
        default: 
            return state;
    }
}


const rootReducer = combineReducers({
    navbarFields,
    loginPage
})


export default rootReducer