describe('Details flow', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Should go to Details screen and back', async () => {
    await expect(element(by.id('Camera'))).toExist();
    await expect(element(by.id('Details'))).toExist();
    await element(by.id('Details')).tap();
    await expect(element(by.id('button-details'))).toExist();
    await element(by.label('Go to HomeScreen')).tap();
    await expect(element(by.id('Camera'))).toExist();
  });
});
