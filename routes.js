import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/containers/Home/index';
import Camera from './src/containers/Camera/index';
import Details from './src/containers/Details/index';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details,
    Camera,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(RootStack);
