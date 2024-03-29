import { Dimensions, PixelRatio } from 'react-native';

import { check, request, RESULTS } from 'react-native-permissions';

export const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;

  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

export const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;

  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export const checkPermissions = (permission, navigation) => {
  check(permission)
    .then(result => {
      switch (result) {
      case RESULTS.UNAVAILABLE:
        //  This feature is not available (on this device / in this context)
        navigation.goBack();
        break;
      case RESULTS.DENIED:
        // The permission has not been requested / is denied but requestable
        request(permission)
          .then(res => {
            if (res !== 'granted') {
              navigation.goBack();
            }
          })
          .catch(() => {
            navigation.goBack();
          });
        break;
      case RESULTS.GRANTED:
        // The permission is granted
        break;
      case RESULTS.BLOCKED:
        // The permission is denied and not requestable anymore
        navigation.goBack();
        break;
      }
    })
    .catch(() => {
      navigation.goBack();
    });
};
