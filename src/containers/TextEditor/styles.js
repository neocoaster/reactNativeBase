import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  styles: StyleSheet.create({
    root: {
      flex: 1,
      paddingTop: 0,
      backgroundColor:'#eee',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    main: {
      flex: 1,
      marginTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 1,
      alignItems: 'stretch',
    },
    editor: {
      backgroundColor : '#fff',
    },
    toolbarContainer: {
      minHeight: 35,
      backgroundColor: '#fff',
      paddingBottom: Platform.OS === 'Android' ? 0 : 20,
    },
    menuOptionText: {
      textAlign: 'center',
      paddingTop: 5,
      paddingBottom: 5,
    },
    divider: {
      marginVertical: 0,
      marginHorizontal: 0,
      borderBottomWidth: 1,
      borderColor: '#fff',
    },
  }),

  optionsStyles: {
    optionsContainer: {
      backgroundColor: 'yellow',
      padding: 0,
      width: 40,
      marginLeft: width - 40 - 30,
      alignItems: 'flex-end',
    },
    optionsWrapper: {
      backgroundColor: 'white',
    },
    optionWrapper: {
      margin: 2,
    },
    optionTouchable: {
      underlayColor: 'gold',
      activeOpacity: 70,
    },
  },

  highlightOptionsStyles: {
    optionsContainer: {
      backgroundColor: 'transparent',
      padding: 0,
      width: 40,
      marginLeft: width - 40,
      alignItems: 'flex-end',
    },
    optionsWrapper: {
      backgroundColor: 'white',
    },
    optionWrapper: {
      margin: 2,
    },
    optionTouchable: {
      underlayColor: 'gold',
      activeOpacity: 70,
    },
  },
};
