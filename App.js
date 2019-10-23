import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import AppContainer from './routes';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
  },
});
