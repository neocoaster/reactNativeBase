import * as appActions from 'Redux/actions/appActions';
import * as constants from 'Redux/actions/constants';

describe('appActions', () => {
  it('should create the set variable action', () => {
    const variable = 'variable';
    const expectedAction = {
      type: constants.SET_VARIABLE,
      variable,
    };

    expect(appActions.setVariable(variable)).toEqual(expectedAction);
  });
});
