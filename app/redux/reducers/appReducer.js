import {fromJS} from 'immutable';

import {SET_VARIABLE} from '../actions/constants';

const initialAuthState = fromJS({
  variable: '',
});

function appReducer(state = initialAuthState, action) {
  switch (action.type) {
    case SET_VARIABLE:
      return state.set('variable', action.variable);
    default:
      return state;
  }
}

export default appReducer;
