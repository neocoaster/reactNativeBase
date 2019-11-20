import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { getNavigation } from '../utils/index';

import RNWebView from 'containers/RNWebView';

describe('rendering', () => {
  let wrapper;

  const props = {
    ...getNavigation(),
  };

  beforeEach(() => {
    wrapper = shallow(<RNWebView {...props} />);
  });

  it('renders correctly', () => {
    renderer.create(<RNWebView {...props} />);
  });

  it('should contain 1 WebView ', () => {
    expect(wrapper.find('WebView')).toHaveLength(1);
  });
});
