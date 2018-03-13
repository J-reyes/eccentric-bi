import { combineReducers } from 'redux'
import { ADD_SEARCH, ADD_LOGIN, CREATE_ACCOUNT } from './../actions/index'


const initialState = {
    searchField: '',
    login: { username: '', password: '' },
    tiles: [
        {
            title: 'Title',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid reprehenderit, sed hic ipsa debitis magnam inventore saepe ullam, quidem magni id expedita rerum deleniti in explicabo maiores perferendis, rem suscipit?'
        },
        {
            title: 'Title',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid reprehenderit, sed hic ipsa debitis magnam inventore saepe ullam, quidem magni id expedita rerum deleniti in explicabo maiores perferendis, rem suscipit?'
        }
    ],
    register: { firstnameInput: '', lastnameInput: '', companyInput: '', email: '', passwordInput: '', confirmInput: ''}
}

const chartState = {
    data: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label:'Population',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
}

const charts = (state = chartState, action) => {
    return state;
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
            return {
            ...state,
            register: action.payload
        }
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    navbarFields,
    loginPage,
    registrationForm,
    charts
})


export default rootReducer