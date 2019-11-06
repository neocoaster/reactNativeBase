import {combineReducers} from 'redux';
import appReducer, {initalState as appReducerInitialState} from './appReducer';

export const initialAppState = {
  appReducer: appReducerInitialState,
};

export default combineReducers({
  appReducer,
});
