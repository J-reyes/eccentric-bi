import { ADD_TILE } from '../actions/index';
import BarTile from '../../tiles/tile-components/bar-tile';
import DoughnutTile from '../../tiles/tile-components/doughnut-tile'
import ToDoTile from '../../tiles/tile-components/todo-tile'

export const BARCHART = 'BARCHART';
export const DOUGHNUTCHART = 'DOUGHNUTCHART';
export const TODOTILE = 'TODOTILE';



const tileState = {
    tileList: []
}

const tiles = {
    BARCHART: BarTile,
    DOUGHNUTCHART: DoughnutTile,
    TODOTILE: ToDoTile
}

const tileContainer = (state = tileState, action) => {
    switch(action.type) {
        case ADD_TILE:
            return {
                ...state,
                tileList: [
                    ...state.tileList, tiles[action.payload]
                ]
            } 
        default:
            return state;
    }
}

export default tileContainer