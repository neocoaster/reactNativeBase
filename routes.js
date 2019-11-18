import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/containers/Home/index';
import Camera from './src/containers/Camera/index';
import Animations from './src/containers/Animations/index';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Animations,
    Camera,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(RootStack);
