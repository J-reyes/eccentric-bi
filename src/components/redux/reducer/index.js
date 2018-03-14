import { combineReducers } from 'redux'
import { ADD_SEARCH, ADD_LOGIN, CREATE_ACCOUNT, ADD_WIDGET } from './../actions/index'
import charts from './chart-reducer'
import toDo from './todo-reducer'
import widgetContainer from './widget-reducer'
import tileContainer from './tile-container-reducer'


const initialState = {
    searchField: '',
    login: { username: '', password: '' },
    register: []

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

const loginPage = (state = initialState, action) => {
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

const registrationForm = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_ACCOUNT:
        return {...state, register: [...state.register, action.payload]}
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    navbarFields,
    loginPage,
    registrationForm,
    charts,
    toDo,
    widgetContainer,
    tileContainer
})


export default rootReducer