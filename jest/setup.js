import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter(),
});

jest.mock('react-navigation', () => ({
  createAppContainer: jest
    .fn()
    .mockReturnValue(function NavigationContainer() {
      return null;
    }),
  createDrawerNavigator: jest.fn(),
  createMaterialTopTabNavigator: jest.fn(),
  createStackNavigator: jest.fn(),
  StackActions: {
    push: jest.fn().mockImplementation(x => ({ ...x, type: 'Navigation/PUSH' })),
    replace: jest
      .fn()
      .mockImplementation(x => ({ ...x, type: 'Navigation/REPLACE' })),
  },
  NavigationActions: {
    navigate: jest.fn().mockImplementation(x => x),
  },
}));

jest.mock('react-navigation-stack', () => ({
  Header: {},
  createStackNavigator: jest.fn(),
}));

jest.mock('react-native-permissions', () => ({
  PERMISSIONS: {
    IOS: {
      PHOTO_LIBRARY: true,
    },
    ANDROID: {
      WRITE_EXTERNAL_STORAGE: true,
      READ_EXTERNAL_STORAGE: true,
    },
  },
  check: jest.fn().mockResolvedValue(Promise.resolve('granted')),
  request: jest.fn().mockResolvedValue(Promise.resolve('granted')),
}));

jest.mock('react-native-image-picker', () => ({
  launchImageLibrary: jest.fn(),
}));
