import {fromJS} from 'immutable';

import {SET_VARIABLE} from '../actions/constants';

export const initialState = fromJS({
  variable: '',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VARIABLE:
      return state.set('variable', action.variable);
    default:
      return state;
  }
}

export default appReducer;
