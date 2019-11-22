import { StyleSheet } from 'react-native';

import { heightPercentageToDP, widthPercentageToDP } from '../../utils/index';

export default StyleSheet.create({
  animatedButton: {
    height: heightPercentageToDP('5%'),
    width: widthPercentageToDP('50%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: heightPercentageToDP('3%'),
    backgroundColor: '#A5A5F1',
    borderColor: '#5757F5',
    borderWidth: 3,
    marginBottom: heightPercentageToDP('5%'),
  },

  animationText: {
    color: '#ffffff',
    fontSize: heightPercentageToDP('2%'),
    fontWeight: 'bold',
  },
});
