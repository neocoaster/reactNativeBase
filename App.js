import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import AppContainer from './routes';
import {Provider} from 'react-redux';
import store from './src/redux/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <AppContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
  },
});
