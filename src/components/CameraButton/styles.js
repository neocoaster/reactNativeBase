import {StyleSheet} from 'react-native';

import {heightPercentageToDP, widthPercentageToDP} from '../../utils/index';

export default StyleSheet.create({
  button: {
    backgroundColor: '#6457f5',
    borderRadius: 5,
    height: heightPercentageToDP('6%'),
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPercentageToDP('100%'),
  },

  text: {
    color: 'white',
    fontSize: heightPercentageToDP('3%'),
    fontWeight: '400',
  },

  ButtonContainer: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('6%'),
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'transparent',
  },
});
