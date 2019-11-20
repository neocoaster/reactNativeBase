describe('RNWebView flow', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Should go to WebView screen', async () => {
    await device.reloadReactNative();
    await expect(element(by.id('RNWebView'))).toExist();
    await expect(element(by.id('Details'))).toExist();
    await element(by.id('RNWebView')).tap();
    await expect(element(by.id('WebViewComponent'))).toExist();
  });
});
