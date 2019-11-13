import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { getNavigation } from '../../utils/index';

import Camera from 'containers/Camera';

describe('rendering', () => {
  let wrapper;
  let newWrapper;

  const props = {
    ...getNavigation(),
  };

  beforeEach(() => {
    wrapper = shallow(<Camera {...props} />);
  });

  it('renders correctly', () => {
    renderer.create(<Camera {...props} />);
  });

  it('should contain 1 Fragment ', () => {
    expect(wrapper.find('Fragment')).toHaveLength(1);
  });

  it('should contain 1 Camera ', () => {
    expect(wrapper.find('Camera')).toHaveLength(1);
  });

  it('should contain 1 Gallery', () => {
    expect(wrapper.find('Gallery')).toHaveLength(1);
  });

  it('should contain 1 Button before changing state', () => {
    newWrapper = wrapper.find('CameraButtons').dive();

    expect(newWrapper.find('TouchableOpacity')).toHaveLength(1);
  });

  describe('clicking the button should change the state', () => {
    let button;
    beforeEach(() => {
      button = wrapper.find('CameraButtons');
      button.prop('onPress')();
    });

    it('should change state of field pictureTaken', () => {
      expect(wrapper.state().pictureTaken).toBe(true);
    });

    it('should see 2 buttons', () => {
      newWrapper = wrapper.find('CameraButtons').dive();
      expect(newWrapper.find('TouchableOpacity')).toHaveLength(2);
    });
  });
});
