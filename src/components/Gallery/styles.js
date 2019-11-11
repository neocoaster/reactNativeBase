import {StyleSheet} from 'react-native';

import {heightPercentageToDP, widthPercentageToDP} from '../../utils/index';

export default StyleSheet.create({
  ButtonContainer: {
    width: widthPercentageToDP('20%'),
    height: heightPercentageToDP('6%'),
    paddingTop: heightPercentageToDP('0.5%'),
    paddingBottom: heightPercentageToDP('0.5%'),
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: widthPercentageToDP('1%'),
    zIndex: 100,
    backgroundColor: 'transparent',
  },

  button: {
    backgroundColor: '#8C80F6',
    borderRadius: heightPercentageToDP('2%'),
    height: heightPercentageToDP('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: heightPercentageToDP('2%'),
  },
});
