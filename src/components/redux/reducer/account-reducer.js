import { CREATE_ACCOUNT, ADD_LOGIN } from './../actions/index';

const accounts = {
    login: { 
        username: '',
        password: '' 
    },
    register: [{
            username: 'Andrew',
            password: 'abc123'
        },
        {
            username: 'Patrick',
            password: 'Starfish'
        }]
}


const accountManager = (state = accounts, action) => {
    switch(action.type) {
        case ADD_LOGIN:
            return {
                ...state,
                login: action.payload
            }
        case CREATE_ACCOUNT:
            return {
                ...state, 
                register: [...state.register, action.payload]
            }
        default:
            return state;
    }
}

export default accountManager