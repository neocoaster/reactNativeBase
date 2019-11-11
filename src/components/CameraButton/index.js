import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {widthPercentageToDP} from '../../utils/index';

import styles from './styles';

const CameraButtons = ({label, onPress, saveToCameraRoll = () => {}}) =>
  label === 'Take again' ? (
    <View style={styles.ButtonContainer}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[
          styles.button,
          {
            width: widthPercentageToDP('49%'),
            marginRight: widthPercentageToDP('1%'),
          },
        ]}
        onPress={saveToCameraRoll}>
        <Text style={styles.text}>Save to Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[
          styles.button,
          {
            width: widthPercentageToDP('49%'),
            marginLeft: widthPercentageToDP('1%'),
          },
        ]}
        onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.ButtonContainer}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );

CameraButtons.displayName = 'CameraButtons';

CameraButtons.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  type: PropTypes.oneOf(['default']),
};

CameraButtons.defaultProps = {
  onPress: () => {},
};

export default CameraButtons;
