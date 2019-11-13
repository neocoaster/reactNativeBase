import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import Details from 'containers/Details';

import {getNavigation} from '../utils/index';

import store from '../../src/redux/store';

describe('rendering', () => {
  let wrapper;
  let newWrapper;
  let props = {
    store: store,
    ...getNavigation(),
  };

  beforeEach(() => {
    wrapper = shallow(<Details {...props} />);
    newWrapper = wrapper.find('Details').dive();
  });

  it('renders correctly', () => {
    renderer.create(<Details {...props} />);
  });

  it('should contain 1 text', () => {
    expect(newWrapper.find('Text')).toHaveLength(1);
  });

  it('should Have 1 button', () => {
    expect(newWrapper.find('Button')).toHaveLength(1);
  });

  describe('clicking the button should redirect', () => {
    let button;

    beforeEach(() => {
      button = newWrapper.find('Button');
      button.prop('onPress')();
    });

    it('should navigate', () => {
      expect(props.navigation.navigate.mock.calls.length).toBe(1);
    });
  });
});
