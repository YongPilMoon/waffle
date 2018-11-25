import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// actions
const ADD_EMOJI = 'editor/ADD_EMOJI';
const SELECT_GRID = 'editor/SELECT_GRID';
const SET_GRID_SIZE = 'ediotr/SET_GRID_SIZE';

// action creators
export const addEmoji = createAction(ADD_EMOJI);
export const selectGrid = createAction(SELECT_GRID);
export const setGridSize = createAction(SET_GRID_SIZE);

const initialState = Map({
  selectedGrid: -1,
  gridSize: 3,
  emojis: Map({}),
});

// reducer
export default handleActions({
  [ADD_EMOJI]: (state, action) => {
    const index = state.get('selectedGrid');
    return state.setIn(['emojis', index], action.payload);
  },
  [SELECT_GRID]: (state, action) => state.set('selectedGrid', action.payload),
  [SET_GRID_SIZE]: (state, action) => state.set('gridSize', action.payload),
}, initialState);

