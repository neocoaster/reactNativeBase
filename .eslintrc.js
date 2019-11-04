module.exports = {
  root: true,
  globals: {
    'jest': false,
    'jasmine': false,
  },
  extends: '@react-native-community',
  plugins: ['detox'],
  env: {
     'browser': true,
     'detox/detox': true,
     'es6': true,
     'node': true,
   },
};
