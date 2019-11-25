import React from 'react';
import { WebView } from 'react-native-webview';

class RNWebView extends React.Component {
  render() {
    // to render a web view
    // <WebView source={{ uri: 'https://facebook.github.io/react-native/' }} />
    return (
      <WebView
        testID="WebViewComponent"
        originWhitelist={['*']}
        source={{ html: '<h1>Hello world</h1>' }}
      />
    );
  }
}
export default RNWebView;