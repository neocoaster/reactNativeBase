import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Animations from 'containers/Animations';

import { getNavigation } from '../utils/index';

import store from '../../src/redux/store';

describe('rendering', () => {
  let wrapper;
  let newWrapper;
  const props = {
    store,
    ...getNavigation(),
  };

  beforeEach(() => {
    wrapper = shallow(<Animations {...props} />);
    newWrapper = wrapper.find('Animations').dive();
  });

  it('renders correctly', () => {
    renderer.create(<Animations {...props} />);
  });

  it('should contain 1 text', () => {
    expect(newWrapper.find('Text')).toHaveLength(3);
  });

  it('should Have 2 Animated Buttons', () => {
    expect(newWrapper.find('AnimatedButton')).toHaveLength(2);
  });

  it('should Have 2 Buttons', () => {
    expect(newWrapper.find('TouchableOpacity')).toHaveLength(2);
  });

  it('should Have 1 TextInput', () => {
    // console.log(newWrapper.debug());
    expect(newWrapper.find('TextInput')).toHaveLength(1);
  });

  describe('clicking the TextInput should change the state', () => {
    beforeEach(() => {
      expect(newWrapper.state().keyboardOn).toBe(false);
      newWrapper.setState({ keyboardOn: true });
      newWrapper.update();
      expect(newWrapper.state().keyboardOn).toBe(true);
    });

    it('should see changes in screen', () => {
      expect(newWrapper.find('AnimatedButton')).toHaveLength(0);
      expect(newWrapper.find('TouchableOpacity')).toHaveLength(0);
    });
  });
});
