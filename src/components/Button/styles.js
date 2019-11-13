import {StyleSheet} from 'react-native';

import {heightPercentageToDP, widthPercentageToDP} from '../../utils/index';

export default StyleSheet.create({
  button: {
    backgroundColor: '#6457f5',
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: widthPercentageToDP('100%'),
  },

  text: {
    color: 'white',
    fontSize: heightPercentageToDP('3%'),
    fontWeight: '400',
  },
});
