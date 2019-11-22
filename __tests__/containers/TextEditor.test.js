import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import TextEditor from 'containers/TextEditor';

import { getNavigation } from '../utils/index';

describe('rendering', () => {
  let wrapper;
  const props = {
    ...getNavigation(),
  };

  beforeEach(() => {
    wrapper = shallow(<TextEditor {...props} />);
  });

  it('renders correctly', () => {
    renderer.create(<TextEditor {...props} />);
  });

  it('should contain 1 KeyboardAvoidingView', () => {
    expect(wrapper.find('KeyboardAvoidingView')).toHaveLength(1);
  });

  it('should contain 2 View', () => {
    expect(wrapper.find('View')).toHaveLength(2);
  });

  it('should contain 1 TouchableWithoutFeedback', () => {
    expect(wrapper.find('TouchableWithoutFeedback')).toHaveLength(1);
  });

  it('should contain 1 CNRichTextEditor', () => {
    expect(wrapper.find('CNRichTextEditor')).toHaveLength(1);
  });

  it('should contain 1 CNToolbar', () => {
    expect(wrapper.find('CNToolbar')).toHaveLength(1);
  });

  it('should contain 1 MenuProvider', () => {
    expect(wrapper.find('MenuProvider')).toHaveLength(1);
  });
});
