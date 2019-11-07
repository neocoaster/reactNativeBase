import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import {getNavigation} from '../../utils/index';

import Camera from 'containers/Camera';

describe('rendering', () => {
  let wrapper;
  let props = {
    ...getNavigation(),
  };

  beforeEach(() => {
    wrapper = shallow(<Camera {...props} />);
  });

  it('renders correctly', () => {
    renderer.create(<Camera {...props} />);
  });

  it('should contain 1 Camera ', () => {
    expect(wrapper.find('Camera')).toHaveLength(1);
  });

  it('should contain 1 Button ', () => {
    expect(wrapper.find('Button')).toHaveLength(1);
  });

  describe('clicking the button should change the state', () => {
    let button;
    beforeEach(() => {
      button = wrapper.find('Button');
      button.prop('onPress')();
    });

    it('should change state', () => {
      expect(wrapper.state().pictureTaken).toBe(true);
    });
  });

  it('should contain 1 Fragment ', () => {
    expect(wrapper.find('Fragment')).toHaveLength(1);
  });
});
