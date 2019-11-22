import React from 'react';
import { Text, Animated, TouchableWithoutFeedback, Easing } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const AnimatedButton = ({ animatedValue, animation, action, text }) => {
  const transformAction = {};
  transformAction[action] = animation;

  return (
    <Animated.View style={{ ...styles.animatedButton, transform: [transformAction] }}>
      <TouchableWithoutFeedback
        onPressIn={() => {
          animatedValue.setValue(0);
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: true,
          }).start();
        }}
        onPressOut={() => {
          Animated.timing(animatedValue, {
            toValue: 0,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true,
          }).start();
        }}
      >
        <Text style={styles.animationText}>{text}</Text>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

AnimatedButton.propTypes = {
  animatedValue: PropTypes.object.isRequired,
  animation: PropTypes.object.isRequired,
  action: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AnimatedButton;
