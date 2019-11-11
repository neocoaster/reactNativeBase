import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Gallery = ({onPress}) => (
  <View style={styles.ButtonContainer}>
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.text}>Gallery</Text>
    </TouchableOpacity>
  </View>
);

Gallery.displayName = 'Gallery';

Gallery.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  type: PropTypes.oneOf(['default']),
};

Gallery.defaultProps = {
  onPress: () => {},
};

export default Gallery;
