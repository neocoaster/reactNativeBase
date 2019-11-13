import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Button = ({ label, onPress }) => (
  <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

Button.displayName = 'Button';

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  onPress: () => {},
};

export default Button;
