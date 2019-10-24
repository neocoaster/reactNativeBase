import {combineReducers} from 'redux';
import appReducer from './appReducer';

import AppNavigator from '../../../routes';

function nav(state, action) {
  let nextState;
  switch (action.type) {
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const rootReducers = combineReducers({
  appReducer,
  nav,
});

export default rootReducers;
