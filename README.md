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
-react-native-camera  
-react-native-image-picker  
-react-native-share  
-react-native-animatable  
-react-native-webview  
-react-native-popup-menu  
-react-native-cn-richtext-editor  
-react-native-vector-icons

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
    **react-native-gesture-handler** provides native-driven gesture management APIs for building best possible touch-based.  
    **react-native-reanimated** provides comprehensive, low level abstraction for the Animated library API  
    **react-native-screens** provides native navigation container components to React Native. It's not designed to be used as a standalone library but rather as a dependency of a full featured navigation library(react-navigation).  
    **react-navigation-stack** is a Stack navigator used in react-navigation  

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
```
npm install --save react-native-permissions
```

**IOS:**
-Add specific pods you want based on the permissions you need  
Example:
```
pod 'Permission-Camera', :path => "#{permissions_path}/Camera.podspec"
```
Then update the Info.plist file with the permissions you need.
Example:
```
<key>NSCameraUsageDescription</key>
<string>YOUR TEXT</string>
```
**ANDROID:**
-Add all wanted permissions to your app android/app/src/main/AndroidManifest.xml file:  
Example:
```
<uses-permission android:name="android.permission.CAMERA" />
```

### redux && react-redux:
#### Link: https://egghead.io/lessons/react-native-add-redux-to-an-existing-react-native-application
#### Installation:
      npm install --save redux && npm install --save react-redux

### react-native-camera:
A Camera component for React Native, which also supports barcode scanning.
#### Link: https://github.com/react-native-community/react-native-camera
#### Installation:
```
npm i react-native-camera
```
**IOS:**:
in Info.plist add the following code
```
<key>NSCameraUsageDescription</key>
<string>Your message to user when the camera is accessed for the first time</string>

<!-- Include this only if you are planning to use the camera roll -->
<key>NSPhotoLibraryUsageDescription</key>
<string>Your message to user when the photo library is accessed for the first time</string>

<!-- Include this only if you are planning to use the microphone for video recording -->
<key>NSMicrophoneUsageDescription</key>
<string>Your message to user when the microphone is accessed for the first time</string>

<!-- Include this only if you are planning to use the camera roll -->
<key>NSPhotoLibraryAddUsageDescription</key>
<string>Your message to user when the photo library is accessed for the first time</string>
```

**ANDROID:** in AndroidManifest add
 ```
 <uses-permission android:name="android.permission.CAMERA" />
 ```

### react-native-image-picker:
A React Native module that allows you to use native UI to select a photo/video from the device library or directly from the camera.
#### Link: https://github.com/react-native-community/react-native-image-picker
#### Installation:
```
npm i react-native-image-picker
```
**IOS:**
in Info.plist add the following code
```
<key>NSPhotoLibraryUsageDescription</key>
<string>$(PRODUCT_NAME) would like access to your photo gallery</string>
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) would like to use your camera</string>
<key>NSPhotoLibraryAddUsageDescription</key>
<string>$(PRODUCT_NAME) would like access to your photo gallery to change your profile picture
Android</string>
<key>NSMicrophoneUsageDescription</key>
<string>$(PRODUCT_NAME) would like to use your microphone (for videos)</string>
```
**ANDROID:**
In AndroidManifest add the following code
```
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

### react-native-share:
A simple tool for share message and file to other apps.
#### Link: https://github.com/react-native-community/react-native-share
#### Installation:
```
npm install react-native-share --save
```
**IOS:**
```
cd ios && pod install
```

### react-native-animatable:
Declarative transitions and animations for React Native
#### Link: https://github.com/oblador/react-native-animatable
#### Installation:
```
npm install react-native-animatable --save
```

### react-native-webview:
#### Link: https://github.com/react-native-community/react-native-webview
#### Installation:
```
npm install --save react-native-webview
react-native link react-native-webview
```
**IOS:**
```
cd ios && pod install
```

**ANDROID:**
Please verify in gradle.properties you have these 2 lines:
```
android.useAndroidX=true
android.enableJetifier=true
```

### react-native-popup-menu:
Extensible popup menu component for React Native
#### Link: https://github.com/instea/react-native-popup-menu
#### Installation:
```
npm install react-native-popup-menu --save
```

### react-native-cn-richtext-editor
#### Link: https://github.com/imnapo/react-native-cn-richtext-editor
#### Installation:
```
npm i react-native-cn-richtext-editor
```

### react-native-vector-icons
#### Link: https://github.com/oblador/react-native-vector-icons
#### Installation:
```
npm install --save react-native-vector-icons
react-native link react-native-vector-icons
```

**IOS:**
Remove From `Build Phases/Copy Bundle Resources` every UIAppFonts.

## Testing

### Unit Testing: Jest
It's included in React Native.  
To create tests, create a **.test.js** file in **__tests__** or anywhere inside src.
To execute the tests, run the command 'yarn test'.

### End to End Testing: detox
#### Installation:
You will need to install **applesimutils** and **detox command line tools**(detox-cli).
 ```  
brew tap wix/brew
brew install applesimutils  
npm install -g detox-cli
 ```
To execute the tests, run de command  ``` detox test --c ios.sim.debug ```   
To create tests, create a **.spec.js** file in **e2e**.
#### Note: Detox library doesn't support RN 0.61 and Android.
