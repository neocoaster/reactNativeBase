describe('TextEditor flow', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Should go to TextEditor screen', async () => {
    await expect(element(by.id('Camera'))).toExist();
    await expect(element(by.id('TextEditor'))).toExist();
    await element(by.id('TextEditor')).tap();
    await expect(element(by.id('ViewTextEditor'))).toExist();
  });
});
