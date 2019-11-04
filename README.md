# React Native Base configuration
This project contains a basic configuration which can be used for any project.

## Libraries which are included:
-react-native-clean-project  
-react-native-dotenv  
-react-native-gesture-handler  
-react-native-permissions  
-react-native-reanimated  
-react-native-screens  
-react-navigation  
-react-navigation-stack  
-redux && react-redux  

### react-native-clean-project:
It is used to clean the app. You can erase the node_modules, watchman data, android build, IOS podfile, IOS build
and update brew.  
To execute it run the command `./node_modules/.bin/react-native-clean-project`
#### Link: https://www.npmjs.com/package/react-native-clean-project
#### Installation:
  -yarn add -D react-native-clean-project

### react-native-dotenv:
Lets you import environment variables from a .env file in React Native, without any need of native code integration.
#### Link: https://www.npmjs.com/package/react-native-dotenv
#### Installation:
    -npm install react-native-dotenv --save-dev  
    -Add RN preset to .babelrc file
      {
        "presets": ["react-native", "module:react-native-dotenv"]
      }

### react-native-gesture-handler, react-native-reanimated, react-native-screens, react-navigation-stack
  Needed for the correct installation of react-navigation.    
    react-native-gesture-handler provides native-driven gesture management APIs for building best possible touch-based.  
    react-native-reanimated provides comprehensive, low level abstraction for the Animated library API  
    react-native-screens provides native navigation container components to React Native. It's not designed to be used as a standalone library but rather as a dependency of a  
  full featured navigation library(react-navigation).  
    react-navigation-stack is a Stack navigator used in react-navigation  

#### Installation:
    -yarn add react-native-reanimated && react-native-gesture-handler && react-native-screens@^1.0.0-alpha.23 && yarn add react-navigation-stack

### react-navigation:
Routing and navigation for your React Native apps.
#### Link: https://reactnavigation.org/

#### Installation:
      -yarn add react-navigation  
      -Install react-native-gesture-handler, react-native-reanimated, react-native-screens  
      -cd ios && pod install && cd ..  
      -Insert in dependencies section in `android/app/build.gradle`:  
        implementation 'androidx.appcompat:appcompat:1.1.0-rc01'  
        implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'

### react-native-permissions:
A unified permissions API for React Native on iOS and Android.
#### Link: https://github.com/react-native-community/react-native-permissions
#### Installation:
      -npm install --save react-native-permissions  
      -IOS:  
        -Add specific pods you want based on the permissions you need  
        Example: pod 'Permission-Camera', :path => "#{permissions_path}/Camera.podspec"  
      -ANDROID:
        -Add all wanted permissions to your app android/app/src/main/AndroidManifest.xml file:  
        Example: <uses-permission android:name="android.permission.CAMERA" />  

### redux && react-redux:
#### Link: https://egghead.io/lessons/react-native-add-redux-to-an-existing-react-native-application
#### Installation:
      -npm install --save redux && npm install --save react-redux

## Testing

### Unit Testing: Jest
It's included in React Native.  
To create tests, create a '.test.js' file in '__tests__' or anywhere inside src.
To execute the tests, run the command 'yarn test'.

### End to End Testing: detox
To create tests, create a '.spec.js' file in 'e2e'.
#### Note: Detox library doesn't support RN 0.61 and Android.