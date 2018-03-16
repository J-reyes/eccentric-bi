import axios from 'axios';

const makeActionCreator = (type, ...argNames) => (...args) => {
    let action = { type };
    argNames.forEach( (arg, index) => {
        action[argNames[index]] = args[index];
    });
    return action;
}

export const ADD_SEARCH = 'ADD_SEARCH';
export const ADD_LOGIN = 'ADD_LOGIN';
export const CREATE_ACCOUNT ='CREATE_ACCOUNT';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const ADD_TILE = 'ADD_TILE';
export const ADD_WIDGET = 'ADD_WIDGET';
export const CHANGE_BITCOIN = 'CHANGE_BITCOIN';
export const CHANGE_WEATHER = 'CHANGE_WEATHER';

export const loadBitcoin = () => dispatch => axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
                                                .then(response => {
                                                    dispatch(changeBitcoin(`$${response.data.bpi.USD.rate}`))
                                                })
export const loadWeather = () => dispatch => axios.get("https://api.darksky.net/forecast/7042fe3a30eea28ff122ea7edc342833/33.7040, -117.8461")
                                                .then(response => {
                                                    dispatch(changeWeather(response.data.currently))
                                                })


export const addSearchItem = makeActionCreator(ADD_SEARCH, 'payload'); 
export const addLogin = makeActionCreator(ADD_LOGIN, 'payload');
export const createAccount = makeActionCreator(CREATE_ACCOUNT, 'payload');
export const addToDo = makeActionCreator(ADD_TODO, 'payload');
export const removeToDo = makeActionCreator(REMOVE_TODO, "payload");
export const addTile = makeActionCreator(ADD_TILE, "payload");
export const addWidget = makeActionCreator(ADD_WIDGET, 'payload');
export const changeBitcoin = makeActionCreator(CHANGE_BITCOIN, 'payload');
export const changeWeather = makeActionCreator(CHANGE_WEATHER, 'payload');