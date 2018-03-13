import { combineReducers } from 'redux'
import { ADD_SEARCH, ADD_LOGIN, CREATE_ACCOUNT } from './../actions/index'


const initialState = {
    searchField: '',
    login: {username: '', password: ''},
    register: {}

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
    }
}


const rootReducer = combineReducers({
    navbarFields,
})


export default rootReducer