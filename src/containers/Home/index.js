import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Share from 'react-native-share';

import styles from './styles';

class Home extends React.Component {

  shareMultipleImages = async () => {
    const shareOptions = {
      title: 'Share file',
      failOnCancel: false,
      message: 'Hello World',
    };

    try {
      Share.open(shareOptions);
    } catch (error) {
      console.log('Error =>', error); // eslint-disable-line
    }
  };


  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <TouchableOpacity
          id="Details"
          testID="Details"
          style={styles.button}
          title="Go to Camera"
          onPress={() => this.props.navigation.navigate('Details')}
        >
          <Text style={styles.text}>Go to Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          id="Camera"
          testID="Camera"
          title="Go to Camera"
          onPress={() => this.props.navigation.navigate('Camera')}
        >
          <Text style={styles.text}>Go to Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          id="Camera"
          testID="Camera"
          title="Go to Camera"
          onPress={() => this.shareMultipleImages()}
        >
          <Text style={styles.text}>Open Sharesheet</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
