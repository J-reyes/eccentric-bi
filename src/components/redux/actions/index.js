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

export const ADD_SEARCH = 'ADD_SEARCH';
export const ADD_LOGIN = 'ADD_LOGIN';
export const CREATE_ACCOUNT ='CREATE_ACCOUNT';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const ADD_TILE = 'ADD_TILE';
export const ADD_WIDGET = 'ADD_WIDGET';



export const addSearchItem = makeActionCreator(ADD_SEARCH, 'payload'); 
export const addLogin = makeActionCreator(ADD_LOGIN, 'payload');
export const createAccount = makeActionCreator(CREATE_ACCOUNT, 'payload');
export const addToDo = makeActionCreator(ADD_TODO, 'payload');
export const removeToDo = makeActionCreator(REMOVE_TODO, "payload");
export const addTile = makeActionCreator(ADD_TILE, "payload");
export const addWidget = makeActionCreator(ADD_WIDGET, 'payload');