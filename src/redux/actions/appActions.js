import {SET_VARIABLE} from './constants';

export function setVariable(variable) {
  return {
    type: SET_VARIABLE,
    variable,
  };
}
