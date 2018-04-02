import { combineReducers } from 'redux'
import { ADD_SEARCH, ADD_WIDGET } from './../actions/index'
import charts from './chart-reducer'
import toDo from './todo-reducer'
import widgetContainer from './widget-reducer'
import tileContainer from './tile-container-reducer'
import accountManager from './account-reducer'


const initialState = {
    searchField: '',
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
    accountManager,
    navbarFields,
    charts,
    toDo,
    widgetContainer,
    tileContainer
})


export default rootReducer