import { StyleSheet } from 'react-native';

import { heightPercentageToDP, widthPercentageToDP } from '../../utils/index';

export default StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },

  welcomeText: {
    color: 'blue',
    fontSize: heightPercentageToDP('2.3%'),
    fontWeight: 'bold',
    marginBottom: heightPercentageToDP('10%'),
  },

  slidingInForm: {
    height: heightPercentageToDP('20%'),
    width: widthPercentageToDP('60%'),
    position: 'absolute',
    bottom: '10%',
    right: -widthPercentageToDP('60%'),
    backgroundColor: '#A5A5F1',
    borderColor: '#5757F5',
    borderWidth: 3,
    borderRadius: heightPercentageToDP('3%'),
  },
});
