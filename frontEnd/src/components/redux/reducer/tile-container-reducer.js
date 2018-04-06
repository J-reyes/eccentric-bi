import { ADD_TILE } from '../actions/index';
import BarTile from '../../tiles/tile-components/bar-tile';
import DoughnutTile from '../../tiles/tile-components/doughnut-tile'
import ToDoTile from '../../tiles/tile-components/todo-tile'
import doughnutTile from '../../tiles/tile-components/doughnut-tile';
import LineContainer from '../../tiles/tile-components/line-container';

export const BARCHART = 'BARCHART';
export const DOUGHNUTCHART = 'DOUGHNUTCHART';
export const TODOTILE = 'TODOTILE';
export const LINECONTAINER = 'LINECONTAINER';



const tileState = {
    tileList: [LineContainer, ToDoTile]
}

const tiles = {
    LINECONTAINER: LineContainer,
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