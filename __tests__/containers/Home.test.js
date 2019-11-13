import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import Home from 'containers/Home';

import {getNavigation} from '../utils/index';

describe('rendering', () => {
  let wrapper;
  let props = {
    ...getNavigation(),
  };

  beforeEach(() => {
    wrapper = shallow(<Home {...props} />);
  });

  it('renders correctly', () => {
    renderer.create(<Home {...props} />);
  });

  it('should contain 2 TouchableOpacity', () => {
    expect(wrapper.find('TouchableOpacity')).toHaveLength(2);
  });

  describe('clicking the button should redirect to Details', () => {
    let button;

    beforeEach(() => {
      button = wrapper.find('#Details');
      button.prop('onPress')();
    });

    it('should navigate', () => {
      expect(props.navigation.navigate.mock.calls.length).toBe(1);
      props.navigation.navigate.mockClear();
    });
  });

  describe('clicking the button should redirect to Camera', () => {
    let button;

    beforeEach(() => {
      button = wrapper.find('#Camera');
      button.prop('onPress')();
    });

    it('should navigate', () => {
      expect(props.navigation.navigate.mock.calls.length).toBe(1);
    });
  });
});
