import { ADD_WIDGET, CHANGE_BITCOIN, CHANGE_WEATHER } from '../actions/index';

import WeatherWidget from './../../widgets/weather-widget';
import BitcoinWidget from './../../widgets/bitcoin-widget';
import TwitterWidget from './../../widgets/twitter-widget';
import CalendarWidget from './../../widgets/calendar-widget';
import RedwoodWidget from './../../widgets/redwood-widget';

// declared constants for keys for type check
export const WEATHERWIDGET = 'WEATHERWIDGET';
export const BITCOINWIDGET = 'BITCOINWIDGET';
export const TWITTERWIDGET = 'TWITTERWIDGET';
export const CALENDARWIDGET = 'CALENDARWIDGET';
export const REDWOODWIDGET = 'REDWOODWIDGET';

// storing react components in widgetState
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