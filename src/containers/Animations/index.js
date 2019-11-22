import React from 'react';
import { Text, View, Animated, TouchableOpacity, TextInput, Keyboard, Fragment } from 'react-native';
import { View as AnimatableView } from 'react-native-animatable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AnimatedButton from '../../components/AnimatedButton/index';

import { widthPercentageToDP, heightPercentageToDP } from '../../utils/index';

import * as appActions from '../../redux/actions/appActions';

import styles from './styles';
import animationStyles from '../../components/AnimatedButton/styles';

class Animations extends React.Component {

    state = {
      scaleValue: new Animated.Value(0),
      rotateValue: new Animated.Value(0),
      input: '',
      keyboardOn: false,
    }

    componentDidMount() {
      this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
      this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount() {
      this.keyboardDidShowListener.remove();
      this.keyboardDidHideListener.remove();
    }

  _keyboardDidShow = () => {
    this.setState({
      keyboardOn: true,
    });
  }

  _keyboardDidHide = () => {
    this.setState({
      keyboardOn: false,
    });
  }

  moveComponentUp = () => {
    this.AnimationRef.slideOutUp();
  }

  moveComponentLeft = () => {
    this.blueTextRef.animate({
      0: {
        translateX: 0,
      },
      0.5: {
        translateX: -widthPercentageToDP('40%'),
      },
      1: {
        translateX: -widthPercentageToDP('80%'),
      },
      2: {
        translateX: -widthPercentageToDP('120%'),
      },
    });
  }

  onChangeText = (text) => {
    const {
      input,
    } = this.state;

    if ((text && text.trim()) || input) {
      this.setState({
        input: text,
      });
    }
  }

  render() {
    const {
      scaleValue,
      rotateValue,
      input,
      keyboardOn,
    } = this.state;

    const cardScale = scaleValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.1, 1.2],
    });

    const rotation = rotateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'], // degree of rotation
    });

    return (
      <View style={{ ...styles.viewContainer }}>
        <Text testID={'AnimationText'} style={styles.welcomeText}>Animations Screen</Text>
        {
          !keyboardOn && (
            <Fragment>
              <AnimatedButton
                animatedValue={scaleValue}
                animation={cardScale}
                action="scale"
                text="Scale Up"
              />
              <AnimatedButton
                animatedValue={rotateValue}
                animation={rotation}
                action="rotate"
                text="Rotate"
              />

              <AnimatableView ref={ref => (this.AnimationRef = ref)}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => this.moveComponentUp()}
                  style={{ ...animationStyles.animatedButton }}
                >
                  <Text style={animationStyles.animationText}>Move Button Up!</Text>
                </TouchableOpacity>
              </AnimatableView>

              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.moveComponentLeft()}
                style={{ ...animationStyles.animatedButton }}
              >
                <Text style={animationStyles.animationText}>Slide right!</Text>
              </TouchableOpacity>
            </Fragment>
          )
        }

        <AnimatableView style={styles.slidingInForm} ref={ref => (this.blueTextRef = ref)}>
          <TextInput
            style={{ height: heightPercentageToDP('20%'), width: '100%', color: '#ffffff' }}
            onChangeText={text => this.onChangeText(text)}
            value={input}
            placeholder="Start Typing..."
            placeholderTextColor="#ffffff"
          />

        </AnimatableView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  variable: state.appReducer.toJS().variable,
});

const mapDispatchToProps = dispatch => {
  const { setVariable } = bindActionCreators(appActions, dispatch);

  return {
    setVariable,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Animations);
