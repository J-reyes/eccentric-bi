# Eccentric Web Application #

![Eccentric Image](frontEnd/public/images/EccentricBI_270218_2.png)

# Part 2 #

## Instructions to Test Files ##

In order to test our web API locally, go to "Program.cs" in the "backEnd" folder and remove line 23.

## Application Goals ##
- [x] User experience differentiating admins from users
- [x] User ability to create and manage leads
- [x] Admin privileges to create/edit users, track user leads reports
- [x] Database implementation for account management
- [x] Database implementation for business data

## Leads CRUD and Sort App ##

![Leads Image](/img-for-readme/leads-page.png)

We created a single page application for users to create leads that will be stored on our MS SQL backend. Users have the ability to edit their leads and sort them by name/date/email.

## Admin Privileges Functionality ##

![Create User Image](/img-for-readme/create-user.png)

This is a web application available only to admins where admins can create, edit, and delete user accounts. Admins have the ability to give users admin priveledges and can also update email addresses. Users can also be sorted by name, username, and email.

![Edit User Image](/img-for-readme/edit-user.png)

![View User Image](/img-for-readme/view-all-users.png)

Admins are also able to view all leads in the database and edit all leads. These leads can be sorted by lead name, lead email, and owner name.

## Database Implementation for Account Management and Business Data ## 

MS SQL data tables were created and organized with WebAPI 2.0. These tables are linked to the frontend with logic written in C# with Entity Framework Core.

# Part 1 #

## Application Goals ##

***

- [x] Build a Registration Form
- [x] Build a login page with account validation
- [x] Build a dashboard with dynamic widgets (API capable)
- [x] Redux state management
- [x] Modular Redux state management
- [x] Use React conditional rendering and routing

## Potential Future Features ##
- [] Database implementation for account management
- [] Database implementation for business data

***

## Widget ##

We have five widgets that are each a seperate component that can be called via .map() method with the widget-reducer. These are dynamically called with the drop down menu, courtesy of 'reactstrap' library, and can be connected to APIs to call relevant data. We are using 'coindesk' API for current bitcoin prices and 'darksky' for current weather in Santa Ana.

Our widgets can also be reorganized by drag-and-drop, courtesy of Dragula.

### widgets/bitcoin-widget.js ###

Here is our bitcoin component. The API response is channeled into state.widgetContainer.bitcoin and then read here.

```javascript
const BitcoinWidget = props =>
    <div className="card small-widget">
        <h3>Bitcoin Price</h3>
        <img src="https://coalcrackerkids.org/wp-content/uploads/2018/01/Cryptocurrency-Bitcoin-Logo.jpg" alt="bitcoin logo" className="img-responsive col-sm-6" />
        <h3>{props.price}</h3>
    </div>

const mapStateToProps = state => ({
    price: state.widgetContainer.bitcoin
})

export default connect(mapStateToProps)(BitcoinWidget)
```

## Actions and API ##

### actions/index.js ###
```javascript
import axios from 'axios';

// makeActionCreator return a function that takes in values for existing keys, and returns an action object
// ex. addName = makeActionCreator('ADDNAME', 'name');
// addName('Spongebob') => {type: 'ADDNAME', name: 'Spongebob'}

const makeActionCreator = (type, ...argNames) => (...args) => {
    let action = { type };
    argNames.forEach( (arg, index) => {
        action[argNames[index]] = args[index];
    });
    return action;
}

// declaring const variables for typing check
export const ADD_SEARCH = 'ADD_SEARCH';
export const ADD_LOGIN = 'ADD_LOGIN';
export const CREATE_ACCOUNT ='CREATE_ACCOUNT';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const ADD_TILE = 'ADD_TILE';
export const ADD_WIDGET = 'ADD_WIDGET';
export const CHANGE_BITCOIN = 'CHANGE_BITCOIN';
export const CHANGE_WEATHER = 'CHANGE_WEATHER';

// Redux Middleware Thunk Use Case
// Special actions that produce promises are handled by middleware
export const loadBitcoin = () => dispatch => axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
                                                .then(response => {
                                                    dispatch(changeBitcoin(`$${response.data.bpi.USD.rate}`))
                                                })
export const loadWeather = () => dispatch => axios.get("https://api.darksky.net/forecast/7042fe3a30eea28ff122ea7edc342833/33.7040, -117.8461")
                                                .then(response => {
                                                    dispatch(changeWeather(response.data.currently))
                                                })

// All action creators
export const addSearchItem = makeActionCreator(ADD_SEARCH, 'payload'); 
export const addLogin = makeActionCreator(ADD_LOGIN, 'payload');
export const createAccount = makeActionCreator(CREATE_ACCOUNT, 'payload');
export const addToDo = makeActionCreator(ADD_TODO, 'payload');
export const removeToDo = makeActionCreator(REMOVE_TODO, "payload");
export const addTile = makeActionCreator(ADD_TILE, "payload");
export const addWidget = makeActionCreator(ADD_WIDGET, 'payload');
export const changeBitcoin = makeActionCreator(CHANGE_BITCOIN, 'payload');
export const changeWeather = makeActionCreator(CHANGE_WEATHER, 'payload');
```

## Chart.js ##

### bar-tile.js ###
```javascript
<Bar data={this.props.barData} height={this.props.height} />
```

## Dashboard Interactive Features ##
    ## Reactstrap ##
    ## Dragula ##

### widget-display.js ###
We stored React Components in an array in the store, we can now extract those components by reassigning them to a constant. That constant can now be rendered as a React Component. 
```javascript
render() {
        return (
            <div className="row">
                {
                    // extract react components from array and render to page
                    this.props.widgetList.map((widget, index) => {
                        const WidgetComponent = widget;
                        return (
                            <div key={index} className="col-sm-3">
                                <WidgetComponent />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
```

## Redux ##

### store/index.js ###
```javascript
import { createStore, applyMiddleware }  from 'redux';
import thunk from "redux-thunk";
import rootReducer from '../reducer/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store
```

### reducer/index.js ###
- Modular Redux State Design
```javascript
const rootReducer = combineReducers({
    accountManager,
    navbarFields,
    charts,
    toDo,
    widgetContainer,
    tileContainer
})
```
***

### reducer/widget-reducer.js ###
- state for widgets, able to update API data with each refresh
```javascript
import { ADD_WIDGET, CHANGE_BITCOIN, CHANGE_WEATHER } from '../actions/index';

import WeatherWidget from './../../widgets/weather-widget';
import BitcoinWidget from './../../widgets/bitcoin-widget';
import TwitterWidget from './../../widgets/twitter-widget';
import CalendarWidget from './../../widgets/calendar-widget';
import RedwoodWidget from './../../widgets/redwood-widget';

export const WEATHERWIDGET = 'WEATHERWIDGET';
export const BITCOINWIDGET = 'BITCOINWIDGET';
export const TWITTERWIDGET = 'TWITTERWIDGET';
export const CALENDARWIDGET = 'CALENDARWIDGET';
export const REDWOODWIDGET = 'REDWOODWIDGET';

const widgetState = {
    widgetList: [RedwoodWidget, WeatherWidget],
    bitcoin: '',
    weather: ''
}

const widgets = {
    WEATHERWIDGET: WeatherWidget,
    BITCOINWIDGET: BitcoinWidget,
    TWITTERWIDGET: TwitterWidget,
    CALENDARWIDGET: CalendarWidget,
    REDWOODWIDGET: RedwoodWidget
}

const widgetContainer = (state = widgetState, action) => {
    switch(action.type) {
        case ADD_WIDGET:
            return {
                ...state,
                widgetList: [
                    ...state.widgetList, widgets[action.payload]
                ]
            }
        case CHANGE_BITCOIN: 
            return {
                ...state, 
                bitcoin: action.payload
            }
        case CHANGE_WEATHER:
            return {
                ...state,
                weather: action.payload
            }
        default:
            return state;
    }
}

export default widgetContainer 
```
***




## Registration / Login Validation ##

Registration and login validation was done in three steps: handling the submission, validating username and password, and then redirecting to appropriate page. If username or password did not match an existing account, a RejectMessage component would conditionally render onto the page.

### user-login/user-login.js ###

```javascript
handleSubmit = event => {
        event.preventDefault();
        if (this.isValid()) {
            this.setState({
                success: !this.state.success,
                reject: false
            })
        }
        else {
            this.setState({
                reject: true
            })
        }
    }

// ...

render() {
        if (this.state.success) {
            return (
                <Redirect to="/dashboard" />
            )
        }
```