import reducer, { initialState } from 'Redux/reducers/appReducer';
import * as actions from 'Redux/actions/appActions';

describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should set VARIABLE', () => {
    const setVariable = actions.setVariable('variable');

    expect(reducer(initialState, setVariable)).toEqual(
      initialState.set('variable', 'variable'),
    );
  });
});
