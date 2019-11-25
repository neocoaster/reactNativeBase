import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/containers/Home/index';
import Camera from './src/containers/Camera/index';
import TextEditor from './src/containers/TextEditor/index';
import RNWebView from './src/containers/RNWebView/index';
import Animations from './src/containers/Animations/index';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Animations,
    Camera,
    TextEditor,
    RNWebView,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(RootStack);
