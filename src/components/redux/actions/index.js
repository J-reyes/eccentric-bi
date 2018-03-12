const makeActionCreator = (type, ...argNames) => (...args) => {
    let action = { type };
    argNames.forEach( (arg, index) => {
        action[argNames[index]] = args[index];
    });
    return action;
}

// Example of how to use makeActionCreator

// const ADD_TODO = 'ADD_TODO'
// const EDIT_TODO = 'EDIT_TODO'
// const REMOVE_TODO = 'REMOVE_TODO'
//  
// export const addTodo = makeActionCreator(ADD_TODO, 'text')
// export const editTodo = makeActionCreator(EDIT_TODO, 'id', 'text')
// export const removeTodo = makeActionCreator(REMOVE_TODO, 'id')

// var x = addTodo('hello')
// x = {type: "ADD_TODO", text: "hello"}

const ADD_SEARCH = 'ADD_SEARCH';
const ADD_LOGIN = 'ADD_LOGIN';

export const addSearchItem = makeActionCreator(ADD_SEARCH, 'payload'); 
export const addLogin = makeActionCreator(ADD_LOGIN, 'payload');